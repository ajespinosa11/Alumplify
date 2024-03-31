import React, { useEffect, useRef, useState } from 'react'
import { deleteObject, uploadBytes } from 'firebase/storage'
import { alumniImageDB } from '../../firebaseImge';
import { v4 } from 'uuid'
import { getDownloadURL, listAll, ref} from 'firebase/storage'
import { AlumniHooks } from '../../Hooks/AlumniHooks';


const NSView = ({setNS, viewNS, editNS, defNS, editDefNS, disable, setDis}) => {
  const [getImg, setGetImg] = useState(null)
  const [dispImg, setDispImg] = useState(null)
  const TxtAreaRef = useRef([])
  const {dispatch} = AlumniHooks()
  const [optionCont, setContSel] = useState(null)

  const resizeTextArea = () => {
    TxtAreaRef.current[0].style.height = "auto";
    TxtAreaRef.current[0].style.height = TxtAreaRef.current[0].scrollHeight + "px";
    TxtAreaRef.current[1].style.height = "auto";
    TxtAreaRef.current[1].style.height = TxtAreaRef.current[1].scrollHeight + "px";
    TxtAreaRef.current[2].style.height = "auto";
    TxtAreaRef.current[2].style.height = TxtAreaRef.current[2].scrollHeight + "px";
    TxtAreaRef.current[3].style.height = "auto";
    TxtAreaRef.current[3].style.height = TxtAreaRef.current[3].scrollHeight + "px";
  }

  useEffect(resizeTextArea, [viewNS]);

  const getImage = (e) => {
    if(e.target.files[0]){
      setGetImg(e.target.files[0])
      setDispImg(URL.createObjectURL(e.target.files[0]))
    }
  }

  //Save update edited input
  const saveEdit = async (e) => {
    e.preventDefault()
    
    const imgUpload = () => {
      const imgRef = ref(alumniImageDB, `Stories/${v4()}`)
        uploadBytes(imgRef, getImg).then(url => {
          getDownloadURL(url.ref).then(getUrl => {
            mongoEdit(getUrl)
          })
        })
    }
    const mongoEdit = async (getUrl) => {
      const insImg = viewNS
      insImg.Picture = getUrl
      editNS(insImg)
      const response = await fetch('/api/contents/stories/' + viewNS._id, {
        method: 'PUT',
        body: JSON.stringify(viewNS),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
      if(!response.ok){
        console.log(json.error)
      }
      if(response.ok){
        setDis(true)
        setGetImg(null)
        setDispImg(null)
        editDefNS(viewNS)// change default to new default
        setNS()
      }    
    }
    //get all the image from the firebase
    listAll(ref(alumniImageDB,"Stories")).then(imgs => {
      // var detExist = false
      if(imgs.items.length === 0 || imgs.items.length === null ){
        imgUpload()
      }
      for(let i = 0; i <= imgs.items.length ; i++){
        var exist = false
        let a = 1
        if(imgs.items[i] != null){
          getDownloadURL(imgs.items[i]).then(url => {
            if(viewNS.Picture === url){ //Detect the firebase specify file is exist
              if(dispImg !== null){
                //(1) delete the old image/url from the firebase
                deleteObject(ref(alumniImageDB,"Stories/" + imgs.items[i].name))
                //(2) Insert new image into the firebase and set to the mongodb
                imgUpload()
              }else{ // if
                // if the image change
                mongoEdit(viewNS.Picture)        
              }
              exist = true;
            }else if(a === imgs.items.length && exist === false ){
              imgUpload()
            }
            console.log(exist)
            a++
          })
        }
        
      }
    })
  }
  
  const inptChange = (e) => {// Detect changes fro mthe input
    if(e.target.name === "Links"){
        editNS((prev) => ({...prev, 
          Content: {...prev.Content, [e.target.name]: e.target.value, Self: null}
            }))
      }else if(e.target.name === "Self"){
        editNS((prev) => ({...prev, 
          Content: {...prev.Content, [e.target.name]: e.target.value, Links: null},
            }))
      }
      else{
        editNS((prev) => ({...prev, [e.target.name]: e.target.value}))
      }
  }

  const deleteCont = async () => {
    const response = await fetch('/api/contents/Stories/' + viewNS._id, {
      method: 'DELETE'
    })
    const json = await response.json();

    if(response.ok){
        console.log("Stories, deleted")
        dispatch({Variable: "Stories", type: 'DELETE_ALUM', payload: json})
    }

    listAll(ref(alumniImageDB,"Stories")).then(imgs => {
      for(let i = 0; i <= imgs.items.length ; i++){
        let exist
        if(imgs.items[i] != null){
          getDownloadURL(imgs.items[i]).then(url => {
            if(viewNS.Picture === url){
              //(1) delete the old image/url from the firebase
              deleteObject(ref(alumniImageDB,"Stories/" + imgs.items[i].name))
              exist = true;
            }
          })
        }
      }
    })

  }

  const cancEdit = () => {
    setDis(true)
    editNS(defNS)
    setGetImg(null)
    setDispImg(null)
  }

  const selectContRad = (e) => {
    setContSel(e.target.id)
  }

  return (
    <div className= 'flexRow ViewSingle'>
      <div className='leftView'>
        <div style={{textAlign: 'justify'}}>
          <div style={{fontWeight: 'bold', fontSize: '20px'}}>
            {disable ? 
            <textarea disabled
                style={{ fontWeight: 'bold', fontSize: '20px'}} 
                className='txtView' 
                name='Title'
                ref={(element) => {TxtAreaRef.current[0] = element}} 
                rows={1} value= {viewNS.Title}/>
                :
            <textarea 
                style={{border: '1px solid black', fontWeight: 'bold', fontSize: '20px'}} 
                className='txtView hoverInCont' onChange={inptChange} 
                name='Title'
                ref={(element) => {TxtAreaRef.current[0] = element}} 
                rows={1} value= {viewNS.Title}/>
            }
          </div>
          <div style={{fontWeight: 'bold', fontSize: '16px', paddingTop: '8px'}}>
            {disable ? <textarea disabled
              style={{fontWeight: 'bold', fontSize: '16px'}}
              className='txtView' 
              name='Author'
              ref={(element) => {TxtAreaRef.current[1] = element}} 
              rows={1} value= {viewNS.Author}/>
                :
              <textarea
              style={{border: '1px solid black', fontWeight: 'bold', fontSize: '16px'}}
              className='txtView hoverInCont' 
              onChange={inptChange}
              name='Author'
              ref={(element) => {TxtAreaRef.current[1] = element}} 
              rows={1} value= {viewNS.Author}/>
            }
            
          </div>
          <div >
            {disable ? 
            <input disabled style={{fontWeight: 'bold', fontSize: '13px'}} 
              type="text" 
              className='txtView' 
              name='Date' 
            value= {viewNS.Date_Publish} />
          :
          <input  style={{border: '1px solid black', fontWeight: 'bold', fontSize: '13px'}} 
          type="text" 
          className='txtView hoverInCont' 
          name='Date_Publish' 
          onChange={inptChange}   
          value= {viewNS.Date_Publish}
          />}
          </div>
        {disable === false ?
        <div className='flexRow'>
            <div>
                <label htmlFor="self">Content</label>
                <input type="radio" name="content_sec" id="self" 
                checked= {optionCont === "self"}
                onChange={selectContRad}/>
            </div>
            <div>
                <label htmlFor="links">Links</label>
                <input type="radio" name="content_sec" id="links" 
                checked= {optionCont === "links"}
                onChange={selectContRad}/>
            </div>
        </div> : ''
        }
        {viewNS.Content.Self !== null  ? 
        <div style={{fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '10px'}} >
                <strong>Content:</strong>

            <div style={{width: '530px'}}>
                { disable  ?  <textarea disabled
                className='txtView contentText' onChange={inptChange} 
                name='Self'
                ref={(element) => {TxtAreaRef.current[2] = element}} 
                rows={1} value= {viewNS.Content.Self}
            /> : !disable && optionCont === "self" ?
                <textarea style={{border: '1px solid black'}} 
                className='txtView contentText hoverInCont' onChange={inptChange} 
                name='Self'
                ref={(element) => {TxtAreaRef.current[2] = element}} 
                rows={1} value= {viewNS.Content.Self}
            /> : ""
            }
            </div>
            </div>
    
        : viewNS.Content.Links !== null ? 
            <div style={{fontSize: '14px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '10px'}} >
                   <p>Links:</p>
            <div style={{width: '530px'}}>
            { disable  ?  <input disabled
                className='txtView contentText' type="text"
                onChange={inptChange} 
                name='Self'
              value= {viewNS.Content.Links}
            /> : !disable && optionCont === "links" ? 
                <input style={{border: '1px solid black'}} type="text"
                className='txtView contentText hoverInCont' onChange={inptChange} 
                name='Links' 
                 value= {viewNS.Content.Links}
            /> : ""
            }
            </div>
            </div> : ""
        
        }
            
        <div style={{fontSize: '14px',
                    display: 'flex',
                    justifyContent: 'center',
                    
                    paddingTop: '10px'}} >
            <div style={{width: '530px'}}>
            { disable  ?  <textarea disabled
                className='txtView contentText' onChange={inptChange} 
                name='Short_Desc'
                ref={(element) => {TxtAreaRef.current[3] = element}} 
                rows={1} value= {viewNS.Short_Desc}/> : 
                <textarea style={{border: '1px solid black'}} 
                className='txtView contentText hoverInCont' onChange={inptChange} 
                name='Short_Desc'
                ref={(element) => {TxtAreaRef.current[3] = element}} 
                rows={1} value= {viewNS.Short_Desc}/>}
              </div>
          </div>
        </div>
      </div>
      <div className='rightView'>
        <div className='flexColumn rightInnView'>
          <div className='flexRow' style={{gap: '30px'}}>
            {disable ?
            <button onClick={() => {
                if(viewNS.Content.Self !== null)
                    setContSel("self")
                else if(viewNS.Content.Links !== null)
                    setContSel("links")
                setDis(false)
                }} className='btnDsg edtBtn'>
              <div>
                EDIT
              </div>
            </button>
            :
            <button disabled style={{backgroundColor: "#fbcc6e89"}} className='btnDsg '>
              <div>
                EDIT
              </div>
            </button>
            }
            
            {disable ?
            <div onClick={deleteCont} className='btnDsg delBtn'> 
              <div >
                DELETE
              </div>
            </div>
            :
            <div onClick={cancEdit} className='btnDsg delBtn'> 
              <div >
                CANCEL
              </div>
            </div>
            }
          </div>
          {disable ? 
          
          <div className='viewImg' style={{height: "300px", width: "300px"}}>
            <img src={viewNS.Picture} alt="Boa Pic" width={'100%'} height={'100%'} />
          </div>
          :
          <label htmlFor="getFile">
          <input type="file" accept='image/*' name='Img' onChange={getImage} id='getFile' hidden/>
          <div className='viewImg' style={{height: "300px", width: "300px"}}>
            <img src={dispImg ? dispImg : viewNS.Picture } alt="Boa Pic" width={'100%'} height={'100%'} />
          </div>
          </label>
            }
          
          <div className= "bottomBtn">
            {!disable ?
            <div onClick= {saveEdit} className='btnArea'>
              <button form='BoaForm'>SAVE</button>
            </div>
            :
            ''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NSView