import React, { useEffect, useRef, useState } from 'react'
import { deleteObject, uploadBytes } from 'firebase/storage'
import { alumniImageDB } from '../../firebaseImge';
import { v4 } from 'uuid'
import { getDownloadURL, listAll, ref} from 'firebase/storage'

const BoaView = ({viewBoa, editBoa, defboa, editDefBoa, disable, setDis}) => {
  const [getImg, setGetImg] = useState(null)
  const [dispImg, setDispImg] = useState(null)
  const TxtAreaRef = useRef([])

  const resizeTextArea = () => {
    TxtAreaRef.current[0].style.height = "auto";
    TxtAreaRef.current[0].style.height = TxtAreaRef.current[0].scrollHeight + "px";
    TxtAreaRef.current[1].style.height = "auto";
    TxtAreaRef.current[1].style.height = TxtAreaRef.current[1].scrollHeight + "px";
    TxtAreaRef.current[2].style.height = "auto";
    TxtAreaRef.current[2].style.height = TxtAreaRef.current[2].scrollHeight + "px";
  }

  useEffect(resizeTextArea, [viewBoa]);

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
      const imgRef = ref(alumniImageDB, `BOA/${v4()}`)
        uploadBytes(imgRef, getImg).then(url => {
          getDownloadURL(url.ref).then(getUrl => {
            mongoEdit(getUrl)
          })
        })
    }
    const mongoEdit = async (getUrl) => {
      const insImg = viewBoa
      insImg.Img = getUrl
      console.log(insImg.Img)      
      editBoa(insImg)
      const response = await fetch('/api/contents/abstract/' + viewBoa._id, {
        method: 'PUT',
        body: JSON.stringify(viewBoa),
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
            editDefBoa(viewBoa)// change default to new default
          }
          
    }
    //get all the image from the firebase
    listAll(ref(alumniImageDB,"BOA")).then(imgs => {
      // var detExist = false
      if(imgs.items.length === 0 || imgs.items.length === null ){
        imgUpload()
      }
      for(let i = 0; i <= imgs.items.length ; i++){
        var exist = false
        let a = 1
        if(imgs.items[i] != null){
          getDownloadURL(imgs.items[i]).then(url => {
            if(viewBoa.Img === url){ //Detect the firebase specify file is exist
              if(dispImg !== null){
                //(1) delete the old image/url from the firebase
                deleteObject(ref(alumniImageDB,"BOA/" + imgs.items[i].name))
                //(2) Insert new image into the firebase and set to the mongodb
                imgUpload()
              }else{ // if
                console.log('here bad')
                // if the image change
                mongoEdit(viewBoa.Img)        
              }
              exist = true;
            }else if(a === imgs.items.length && exist === false ){
              console.log("here bad")
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
    editBoa((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const deleteCont = async () => {
    const response = await fetch('/api/contents/abstract/' + viewBoa._id, {
      method: 'DELETE'
    })
    const json = await response.json();

    if(response.ok){
        console.log("Abstract, deleted")
    }

    listAll(ref(alumniImageDB,"BOA")).then(imgs => {
      for(let i = 0; i <= imgs.items.length ; i++){
        let exist
        if(imgs.items[i] != null){
          getDownloadURL(imgs.items[i]).then(url => {
            if(viewBoa.Img === url){
              //(1) delete the old image/url from the firebase
              deleteObject(ref(alumniImageDB,"BOA/" + imgs.items[i].name))
              exist = true;
            }
          })
        }
      }
    })

  }

  const cancEdit = () => {
    setDis(true)
    editBoa(defboa)
    setGetImg(null)
    setDispImg(null)
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
                rows={1} value= {viewBoa.Title}/>
                :
            <textarea 
                style={{border: '1px solid black', fontWeight: 'bold', fontSize: '20px'}} 
                className='txtView hoverInCont' onChange={inptChange} 
                name='Title'
                ref={(element) => {TxtAreaRef.current[0] = element}} 
                rows={1} value= {viewBoa.Title}/>
            }
          </div>
          <div style={{fontWeight: 'bold', fontSize: '16px', paddingTop: '8px'}}>
            {disable ? <textarea disabled
              style={{fontWeight: 'bold', fontSize: '16px'}}
              className='txtView' 
              name='Author'
              ref={(element) => {TxtAreaRef.current[1] = element}} 
              rows={1} value= {viewBoa.Author}/>
                :
              <textarea
              style={{border: '1px solid black', fontWeight: 'bold', fontSize: '16px'}}
              className='txtView hoverInCont' 
              onChange={inptChange}
              name='Author'
              ref={(element) => {TxtAreaRef.current[1] = element}} 
              rows={1} value= {viewBoa.Author}/>
            }
            
          </div>
          <div >
            {disable ? 
            <input disabled style={{fontWeight: 'bold', fontSize: '13px'}} 
              type="text" 
              className='txtView' 
              name='Date' 
            value= {viewBoa.Date_Publish} />
          :
          <input  style={{border: '1px solid black', fontWeight: 'bold', fontSize: '13px'}} 
          type="text" 
          className='txtView hoverInCont' 
          name='Date_Publish' 
          onChange={inptChange}   
          value= {viewBoa.Date_Publish}
          />}
          </div>
          <div style={{fontSize: '14px',
                    display: 'flex',
                    justifyContent: 'center',
                    
                    paddingTop: '10px'}} >
            <div style={{width: '530px'}}>
            { disable  ?  <textarea disabled
                className='txtView contentText' onChange={inptChange} 
                name='Abstract'
                ref={(element) => {TxtAreaRef.current[2] = element}} 
                rows={1} value= {viewBoa.Abstract}/> : 
                <textarea style={{border: '1px solid black'}} 
                className='txtView contentText hoverInCont' onChange={inptChange} 
                name='Abstract'
                ref={(element) => {TxtAreaRef.current[2] = element}} 
                rows={1} value= {viewBoa.Abstract}/>}
              </div>
          </div>
        </div>
      </div>
      <div className='rightView'>
        <div className='flexColumn rightInnView'>
          <div className='flexRow' style={{gap: '30px'}}>
            {disable ?
            <button onClick={() => {setDis(false)}} className='btnDsg edtBtn'>
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
            <img src={viewBoa.Img} alt="Boa Pic" width={'100%'} height={'100%'} />
          </div>
          :
          <label htmlFor="getFile">
          <input type="file" accept='image/*' name='Img' onChange={getImage} id='getFile' hidden/>
          <div className='viewImg' style={{height: "300px", width: "300px"}}>
            <img src={dispImg ? dispImg : viewBoa.Img } alt="Boa Pic" width={'100%'} height={'100%'} />
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

export default BoaView