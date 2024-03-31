import React, { useEffect, useRef, useState } from 'react'
import { deleteObject, uploadBytes } from 'firebase/storage'
import { alumniImageDB } from '../../firebaseImge';
import { v4 } from 'uuid'
import { getDownloadURL, listAll, ref} from 'firebase/storage'
import { AlumniHooks } from '../../Hooks/AlumniHooks';

const AnnView = ({setEvents,viewEvnt, editEvnt, defEvnt, editDefEvnt, disable, setDis}) => {
    const [getImg, setGetImg] = useState(null)
    const [dispImg, setDispImg] = useState(null)
    const TxtAreaRef = useRef([])
    const {dispatch} = AlumniHooks()
    const [indPic, setIndPic ] = useState(1)

    const resizeTextArea = () => {
        TxtAreaRef.current[0].style.height = "auto";
        TxtAreaRef.current[0].style.height = TxtAreaRef.current[0].scrollHeight + "px";
        // TxtAreaRef.current[1].style.height = "auto";
        // TxtAreaRef.current[1].style.height = TxtAreaRef.current[1].scrollHeight + "px";
        TxtAreaRef.current[2].style.height = "auto";
        TxtAreaRef.current[2].style.height = TxtAreaRef.current[2].scrollHeight + "px";
      }
    
      useEffect(resizeTextArea, [viewEvnt]);

    const getImage = (e) => {
      if(e.target.files[0]){
        setGetImg(e.target.files[0])
        setDispImg(URL.createObjectURL(e.target.files[0]))
      }
    }
    
    const cancEdit = () => {
      setDis(true)
      editEvnt(defEvnt)
      setGetImg(null)
      setDispImg(null)
    }

    const deleteCont = async () => {
      const response = await fetch('/api/contents/events/' + viewEvnt._id, {
        method: 'DELETE'
      })
      const json = await response.json();
  
      if(response.ok){
          console.log("Events, deleted")
          dispatch({type: 'DELETE_ALUM', payload: json})
      }

      listAll(ref(alumniImageDB,"Event/" + viewEvnt.Picture.foldId + "/")).then(imgs => {
        //Delete all Images within the specify directory
        imgs.items.map((imagePic)=>{
          deleteObject(ref(alumniImageDB,"Event/" + viewEvnt.Picture.foldId + "/" + imagePic.name))
          console.log("Delete " + imagePic.name)
        })
      })
    }

    const inptChange = (e) => {// Detect changes fro mthe input
      editEvnt((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const saveEdit = async (e) => {
      e.preventDefault()
      console.log(viewEvnt)
      const response = await fetch('/api/contents/events/' + viewEvnt._id, {
        method: 'PUT',
        body: JSON.stringify(viewEvnt),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      console.log(response)
      const json = await response.json()
      console.log(json)
      if(!response.ok){
        console.log(json.error)
      }
      if(response.ok){
        setDis(true)
        setGetImg(null)
        setDispImg(null)
        editDefEvnt(viewEvnt)// change default to new default
        setEvents()
      }

      // const imgUpload = () => {
      //   const imgRef = ref(alumniImageDB, `Event/${v4()}`)
      //     uploadBytes(imgRef, getImg).then(url => {
      //       getDownloadURL(url.ref).then(getUrl => {
      //         mongoEdit(getUrl)
      //       })
      //     })
      // }
      // const mongoEdit = async (getUrl) => {
      //   const insImg = viewEvnt
      //   insImg.Img = getUrl
      //   console.log(insImg.Img)      
      //   editEvnt(insImg)
      //   const response = await fetch('/api/contents/events/' + viewEvnt._id, {
      //     method: 'PUT',
      //     body: JSON.stringify(viewEvnt),
      //     headers: {
      //         'Content-Type': 'application/json'
      //     }
      //   })
      //   const json = await response.json()
        
      //   if(!response.ok){
      //     console.log(json.error)
      //   }
      //   if(response.ok){
      //     setDis(true)
      //     setGetImg(null)
      //     setDispImg(null)
      //     editDefEvnt(viewEvnt)// change default to new default
      //   }
            
      // }
      //get all the image from the firebase
      // listAll(ref(alumniImageDB,"Event/" + viewEvnt.Picture.foldId + "/")).then(imgs => {
      //   // var detExist = false
      //   if(imgs.items.length === 0 || imgs.items.length === null ){
      //     imgUpload()
      //   }
      //   for(let i = 0; i <= imgs.items.length ; i++){
      //     var exist = false
      //     let a = 1
      //     if(imgs.items[i] != null){
      //       getDownloadURL(imgs.items[i]).then(url => {
      //         if(viewBoa.Img === url){ //Detect the firebase specify file is exist
      //           if(dispImg !== null){
      //             //(1) delete the old image/url from the firebase
      //             deleteObject(ref(alumniImageDB,"BOA/" + imgs.items[i].name))
      //             //(2) Insert new image into the firebase and set to the mongodb
      //             imgUpload()
      //           }else{ // if
      //             console.log('here bad')
      //             // if the image change
      //             mongoEdit(viewBoa.Img)        
      //           }
      //           exist = true;
      //         }else if(a === imgs.items.length && exist === false ){
      //           console.log("here bad")
      //           imgUpload()
      //         }
      //         console.log(exist)
      //         a++
      //       })
      //     }
          
      //   }
      // })
    }

    const lengthMap = () => {
      console.log(indPic)
      const maxInd = viewEvnt.Picture.Images.length
      return (
        <div className='flexRow arrowContainer'>
          <div onClick={(e) => setIndPic(indPic-1)}  className="arrowBtn" id='arr_left'></div>
          <div className="">
            <p>{indPic <= 0 ? setIndPic(maxInd) : indPic > maxInd ? setIndPic(1) : indPic}/{maxInd}</p>
          </div>
          <div onClick={(e) => setIndPic(indPic+1)} className="arrowBtn" id='arr_right'></div>
        </div>
       
      )
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
                rows={1} value= {viewEvnt.Title}/>
                :
            <textarea 
                style={{border: '1px solid black', fontWeight: 'bold', fontSize: '20px'}} 
                className='txtView hoverInCont' onChange={inptChange} 
                name='Title'
                ref={(element) => {TxtAreaRef.current[0] = element}} 
                rows={1} value= {viewEvnt.Title}/>
            } 
           
          </div>
          {/* <div style={{fontWeight: 'bold', fontSize: '16px', paddingTop: '8px'}}>
            {disable ? <textarea disabled
              style={{fontWeight: 'bold', fontSize: '16px'}}
              className='txtView' 
              name='Location'
              ref={(element) => {TxtAreaRef.current[1] = element}} 
              rows={1} value= {viewEvnt.Location}/>
                :
              <textarea
              style={{border: '1px solid black', fontWeight: 'bold', fontSize: '16px'}}
              className='txtView hoverInCont' 
              onChange={inptChange}
              name='Location'
              ref={(element) => {TxtAreaRef.current[1] = element}} 
              rows={1} value= {viewEvnt.Location}/>
            }
          </div> */}
          <div >
            {disable ? 
            <input disabled style={{fontWeight: 'bold', fontSize: '13px'}} 
              type="text" 
              className='txtView' 
              name='Date_Implement' 
              value= {viewEvnt.Date_Implement} />
            :
            <input  style={{border: '1px solid black', fontWeight: 'bold', fontSize: '13px'}} 
              type="Date" 
              className='txtView hoverInCont' 
              name='Date_Implement' 
              onChange={inptChange}   
              value= {viewEvnt.Date_Implement}
            />}
          </div>
          <div style={{fontSize: '14px',
                    display: 'flex',
                    justifyContent: 'center',
                    
                    paddingTop: '10px'}} >
            <div style={{width: '530px'}}>
            { disable  ?  
              <textarea disabled
                className='txtView contentText' 
                name='Content'
                ref={(element) => {TxtAreaRef.current[2] = element}} 
                rows={1} value= {viewEvnt.Content}/> 
                :
              <textarea style={{border: '1px solid black'}} 
                className='txtView contentText hoverInCont' 
                onChange={inptChange} 
                name='Content'
                ref={(element) => {TxtAreaRef.current[2] = element}} 
                rows={1} value= {viewEvnt.Content}/>}

                
              </div>
          </div>
        </div>
      </div>
      <div className='rightView'>
        <div className='flexColumn rightInnView'>
          
          <div className='flexColumn viewImg' style={{height: "300px", width: "300px"}}>
            <img src={viewEvnt.Picture.Images[indPic -1]} alt="Boa Pic" width={'100%'} height={'100%'} />
            {lengthMap()}
          </div>
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
            <div 
            onClick={deleteCont} 
            className='btnDsg delBtn'> 
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
          {/* {disable ? 
          
          <div className='viewImg' style={{height: "300px", width: "300px"}}>
            <img src={viewEvnt.Img} alt="Boa Pic" width={'100%'} height={'100%'} />
          </div>
          :
          <label htmlFor="getFile">
          <input type="file" accept='image/*' name='Img' onChange={getImage} id='getFile' hidden/>
          <div className='viewImg' style={{height: "300px", width: "300px"}}>
            <img src={dispImg ? dispImg : viewBoa.Img } alt="Boa Pic" width={'100%'} height={'100%'} />
          </div>
          </label>
            } */}
          
          <div className= "bottomBtn">
            {!disable ?
            <div
            onClick= {saveEdit} 
            className='btnArea'>
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

export default AnnView