import React, { useState } from 'react'
import { alumniImageDB } from '../../firebaseImge';
import {v4} from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { AlumniHooks } from '../../Hooks/AlumniHooks'

const BoaInpt = () => { 
    const {dispatch} = AlumniHooks()
    const [imgfile, setImg] = useState()
    const [dispImg, setDispImg] = useState()
    const [Title, setBoaTitle] = useState('');
    const [Date_Publish, setBoaDate] = useState('');
    const [Author, setAuthor] = useState('');
    const [Abstract, setContent] = useState('');
    const [changeInp, setChangeInp] = useState('text')
    const [error, setError] = useState(null)
    
    
    const boaSubm = async (e) => {

      const boaStore = async (imgName) => {
        
        const boa= {Title, Date_Publish, Author, Abstract, imgName}
        
        const response =  await fetch('/api/contents/abstract', {
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
          
          setBoaTitle('')
          setBoaDate('')
          setAuthor('')
          setContent('')
          setDispImg('')
          setImg('')
          dispatch({type: 'CREATE_ALUM', payload: json})
        
          console.log("New boa added", json)
        }

      
      } 
      e.preventDefault()
      const imgRef = ref(alumniImageDB, `BOA/${v4()}`)
      uploadBytes(imgRef, imgfile).then(url => {
        getDownloadURL(url.ref).then(getUrl => {
          const imgName = getUrl
          boaStore(imgName)
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
      <form id= 'BoaForm' className='flexColumn BOAcreate' onSubmit={boaSubm}>
        <div className='flexColumn' style={{gap: '10px'}}>
          <label htmlFor="BOAtitle">Title</label>
          <input type="text" id='BOAtitle' 
          onChange={(e) => setBoaTitle(e.target.value)}
          value={Title}
          placeholder='This is the page title'/>
        </div>
        <div className='flexColumn' style={{gap: '10px'}}>
          <label htmlFor="BOADatePub">Date of Publication</label>
          <input type={changeInp}  
          onChange={(e) => setBoaDate(e.target.value)}
          value={Date_Publish}
          onFocus={() => setChangeInp('date')}
          onBlur={() => setChangeInp('text')} 
          id='BOADatePub' 
          placeholder='Date Publish'/>
        </div>
        <div className='flexColumn' style={{gap: '10px'}}>
          <label htmlFor="BOAauthor">Author</label>
          <input type="text" 
          onChange={(e) => setAuthor(e.target.value)}
          value={Author}
          id='BOAauthor' 
          placeholder='Author'/>
        </div>
        <div className='flexColumn' style={{gap: '10px'}}>
          <label htmlFor="BOACont">Abstract</label>
          <textarea 
          onChange={(e) => setContent(e.target.value)}
          value={Abstract}
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
        <div className='btnArea' style={{justifyContent: 'end'}}>
          <button>Publish</button>
          {/* {error && <div className='error'>{error}</div>} */}
        </div> 
      </form>
      
    </div>
  )
}

export default BoaInpt