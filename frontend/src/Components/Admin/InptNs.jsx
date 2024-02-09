import React, { useState } from 'react'
import { alumniImageDB } from '../../firebaseImge';
import {v4} from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const InptNs = () => {
    const [Title, setNsTitle] = useState('');
    const [imgfile, setImg] = useState()
    const [dispImg, setDispImg] = useState()
    const [Date_Publish, setNsDate] = useState('');
    const [Content, setNsContent] = useState('');
    const [changeInp, setChangeInp] = useState('text')
    const [error, setError] = useState(null)
  
    const NsSubm = (e) => {
      e.preventDefault()

      const nsStore = async (imgName) => {
        const NewsStory= {Title, Date_Publish, Content}
      
        const response =  await fetch('/api/contents/stories', {
          method: 'POST',
          body: JSON.stringify(NewsStory),
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
          
          setNsTitle('')
          setNsDate('')
          setNsContent('')
          
          console.log("New boa added", json)
        }
      }

      const imgRef = ref(alumniImageDB, `BOA/${v4()}`)
      uploadBytes(imgRef, imgfile).then(url => {
        getDownloadURL(url.ref).then(getUrl => {
          const imgName = getUrl
          nsStore(imgName)
        })
      })
  
      
    }

    const getImage = (e) => {
      if(e.target.files[0]){
        setImg(e.target.files[0])
        setDispImg(URL.createObjectURL(e.target.files[0]))
      }
    }
  return (
    <div className='flexColumn inptinnBord'>
    <form id= 'BoaForm' className='flexColumn BOAcreate' onSubmit={NsSubm}>
      <div className='flexColumn' style={{gap: '10px'}}>
        <label htmlFor="BOAtitle">Title</label>
        <input type="text" id='BOAtitle' 
        onChange={(e) => setNsTitle(e.target.value)}
        value={Title}
        placeholder='This is the page title'/>
      </div>
      <div className='flexColumn' style={{gap: '10px'}}>
        <label htmlFor="BOADatePub">Date of Publication</label>
        <input type={changeInp}  
        onChange={(e) => setNsDate(e.target.value)}
        value={Date_Publish}
        onFocus={() => setChangeInp('date')}
        onBlur={() => setChangeInp('text')} 
        id='BOADatePub' 
        placeholder='Date Publish'/>
      </div>
      <div className='flexColumn' style={{gap: '10px'}}>
        <label htmlFor="BOACont">Content</label>
        <textarea 
        onChange={(e) => setNsContent(e.target.value)}
        value={Content}
        id='BOACont'
        style={{height: "600px"}} />
      </div>
      <div className='imgArea'>
      <label htmlFor="getFile">
      <input type="file" accept='image/*' onChange={getImage} id='getFile' hidden/>
        {dispImg ? 
         <div className='flexColumn' style={{gap: '10px'}}>
          <div>
            <img src={dispImg} width={'200px'} height={'200px'} alt="BOA image" />
          </div>
          <div>
            Edit Image
          </div>
         </div>
        :
        <div className='flexColumn' style={{gap: '10px'}}>
          <span class="material-symbols-outlined addBoaImg">
            add
          </span>
          <div>
            Add Image
          </div>
        </div> 
      }
      </label>
      </div>
    </form>
    <div className='btnArea' style={{justifyContent: 'end'}}>
      <button form='BoaForm'>Publish</button>
      {/* {error && <div className='error'>{error}</div>} */}
    </div>  
  </div>
  )
}

export default InptNs