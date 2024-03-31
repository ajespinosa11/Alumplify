import React, { useEffect, useState } from 'react'
import { alumniImageDB } from '../../firebaseImge';
import {v4} from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { AlumniHooks } from '../../Hooks/AlumniHooks' 


const InptAnn = () => { 
    const {dispatch} = AlumniHooks()
    const [imgfile, setImg] = useState([])
    const [dispImg, setDispImg] = useState([])
    const [Title, setAnnTitle] = useState('');
    const [Date_Implement, setAnnDate] = useState('');
    const [Location, setLocation] = useState('');
    const [Content, setContent] = useState('');
    const [changeInp, setChangeInp] = useState('text')
    const [error, setError] = useState(null)
    
    
    const boaSubm = async (e) => {
      const annStore = async (Images, idFold) => {
        
        const boa= {Title, Date_Implement, Location, Content, idFold, Images}
        
        const response =  await fetch('/api/contents/events', {
          method: 'POST',
          body: JSON.stringify(boa),
          headers: {
            "Content-Type": 'application/json'
          }
        })
    
        const json = await response.json()
    
        if(!response.ok){
          setError(json.error)
          console.log(error)
        }
        if(response.ok){
          setError(null);
          const emptyArr = []
          setAnnTitle('')
          setAnnDate('')
          setLocation('')
          setContent('')
          setDispImg([])
          setImg([])
          dispatch({Variable: "Event",type: 'CREATE_ALUM', payload: json})
          alert("Your Announcement is Added")

          console.log("New Announcement added", json)
        }
      } 

      let Images = [] 
      const idFold = v4()
      e.preventDefault()
      for(let i = 0; i < imgfile.length; i++){
        var imgRef = ref(alumniImageDB, `Event/${idFold}/${imgfile[i].name}`)
        uploadBytes(imgRef, imgfile[i]).then(url => {
          getDownloadURL(url.ref).then(getUrl => {
            console.log(Images)
            if(getUrl){
              Images.push(getUrl)
            }
            if(i === imgfile.length - 1)
            annStore(Images, idFold)
          })
        })
      }
    }

    console.log(imgfile.length)
    const getImage = (e) => {
      const dispLoopImg = (filesPick, sets) => {
        const chosenFile = Array.prototype.slice.call(filesPick)
        var appendArr
        //A bit of confusing on how it direct the  variable
        if(sets === "storeImg")
          appendArr = dispImg
        if(sets === "dispImg")
          appendArr = imgfile
        
        for(let i = 0; i < chosenFile.length; i++){
            appendArr.push(chosenFile[i])
        }
        return appendArr
      }
      if(e.target.files){

        //Multiple image set append function
        setImg(dispLoopImg(e.target.files, "storeImg"))
        setDispImg(dispLoopImg(e.target.files, "dispImg"))
       
      }
      console.log(dispImg)
      console.log(imgfile)

    }
    
    const multipleImg = () => {

      var impDisp = []
      if(dispImg.length != 0){
        for(let i = 0; i < dispImg.length; i++){
          impDisp.push(
          <div key={i} className='flexColumn' style={{gap: '10px'}}>
            <div>
              <img src={URL.createObjectURL(dispImg[i])} width={'200px'} height={'200px'} alt="BOA image" />
            </div>
          </div>
          )
        }

        return impDisp
      }
    }
  return (
    <div className='flexColumn inptinnBord'>
      <form id= 'BoaForm' className='flexColumn BOAcreate' onSubmit={boaSubm}>
        <div className='flexColumn' style={{gap: '10px'}}>
          <label htmlFor="BOAtitle">Title</label>
          <input type="text" id='BOAtitle' 
          onChange={(e) => setAnnTitle(e.target.value)}
          value={Title}
          placeholder='This is the page title'/>
        </div>
        <div className='flexColumn' style={{gap: '10px'}}>
          <label htmlFor="BOADatePub">Implementation Date</label>
          <input type={changeInp}  
          onChange={(e) => setAnnDate(e.target.value)}
          value={Date_Implement}
          onFocus={() => setChangeInp('date')}
          onBlur={() => setChangeInp('text')} 
          id='BOADatePub' 
          placeholder='Date Implement'/>
        </div>
      
        <div className='flexColumn' style={{gap: '10px'}}>
          <label htmlFor="BOAauthor">Location</label>
          <input type="text" 
          onChange={(e) => setLocation(e.target.value)}
          value={Location}
          id='BOAauthor' 
          placeholder='Location'/>
        </div>
        <div className='flexColumn' style={{gap: '10px'}}>
          <label htmlFor="BOACont">Content</label>
          <textarea 
          onChange={(e) => setContent(e.target.value)}
          value={Content}
          id='BOACont'
          style={{height: "600px"}} />
        </div>
        <input type="file" multiple accept='image/*' onChange={getImage} id='getFile' hidden/>
        <div className='imgArea imgWrapArea'>
          {multipleImg()}
          <label htmlFor="getFile">
          <div className='flexColumn' style={{gap: '10px'}}>
            <span class="material-symbols-outlined addBoaImg">
              add
            </span>
            <div>
              Add Image
            </div>
          </div> 
          </label>
        </div>
        <div className='btnArea' style={{justifyContent: 'end'}}>
          <button>Publish</button>
          {/* {error && <div className='error'>{error}</div>} */}
        </div> 
      </form>
      
    </div>
  )
}

export default InptAnn