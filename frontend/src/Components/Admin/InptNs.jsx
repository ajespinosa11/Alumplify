import React, { useState } from 'react'
import { alumniImageDB } from '../../firebaseImge';
import {v4} from 'uuid'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { AlumniHooks } from '../../Hooks/AlumniHooks' 

const InptNs = () => {
    const [NSObj, setNSObj] = useState({
      Title: null,
      Date_Publish: null,
      Author: null,
      Short_Desc: null,
      Content: {
        Links: null,
        Self: null  
      }
    })
    const {dispatch} = AlumniHooks()
    const [dispImg, setDispImg] = useState()
    const [convImgByte, setImgByte] = useState()
    const [changeInp, setChangeInp] = useState('text')
    const [error, setError] = useState(null)
    const [optionCont, setContSel] = useState(null)

    const NsSubm = (e) => {

      const nsStore = async (Picture) => {
        const NewStory = {
          Title: NSObj.Title,
          Date_Publish: NSObj.Date_Publish,
          Author: NSObj.Author,
          Short_Desc: NSObj.Short_Desc,
          Content: {
            Links: NSObj.Content.Links,
            Self: NSObj.Content.Self  
          },
          Picture: Picture
        }
        const response =  await fetch('/api/contents/stories', {
          method: 'POST',
          body: JSON.stringify(NewStory),
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
          setNSObj((prev) => 
            ({...prev,
            Title: null,
            Date_Publish: null,
            Author: null,
            Short_Desc: null,
            Content: {
              Links: null,
              Self: null  
            },
          }));
          setDispImg(null)
          setImgByte(null)
          dispatch({Variable: "Stories", type: 'CREATE_ALUM', payload: json})
          alert("The Stories is Added")

          console.log("New boa added", json)
        }
      }
      e.preventDefault()
      const imgRef = ref(alumniImageDB, `Stories/${v4()}`)
      uploadBytes(imgRef, convImgByte).then(url => {
        getDownloadURL(url.ref).then(getUrl => {
          setNSObj((prev) => ({...prev, Picture: getUrl}));
          const Picture = getUrl
          nsStore(Picture)
        })
      })
    }

    const getImage = (e) => {
      if(e.target.files[0]){
        setImgByte(e.target.files[0])
        setDispImg(URL.createObjectURL(e.target.files[0]))
      }
    }
    
    const getInpt = (e) => {
      if(e.target.name === "Links"){
        setNSObj((prev) => ({...prev, 
          Content: {...prev.Content, [e.target.name]: e.target.value, Self: null}
            }))
      }else if(e.target.name === "Self"){
        setNSObj((prev) => ({...prev, 
          Content: {...prev.Content, [e.target.name]: e.target.value, Links: null},
            }))
      }
      else{
        setNSObj((prev) => ({...prev, [e.target.name]: e.target.value}))
      }
      console.log(NSObj)
    }

    const selectContRad = (e) => {
      setContSel(e.target.id)
    }

  return (
    <div className='flexColumn inptinnBord'>
    <form id= 'BoaForm' className='flexColumn BOAcreate' onSubmit={NsSubm}>
      <div className='flexColumn' style={{gap: '10px'}}>
        <label htmlFor="BOAtitle">Title</label>
        <input type="text" id='BOAtitle' 
        name="Title"
        onChange={getInpt}
        value={NSObj.Title != null ? NSObj.Title : ""}
        placeholder='This is the page title'/>
      </div>
      <div className='flexColumn' style={{gap: '10px'}}>
        <label htmlFor="BOADatePub">Date of Publication</label>
        <input type={changeInp}  
        onChange={getInpt}
        name='Date_Publish'
        value={NSObj.Date_Publish != null ? NSObj.Date_Publish : ""}
        onFocus={() => setChangeInp('date')}
        onBlur={() => setChangeInp('text')} 
        id='BOADatePub' 
        placeholder='Date Publish'/>
      </div>
      <div className='flexColumn' style={{gap: '10px'}}>
        <label htmlFor="NSAuthor">Author</label>
        <input type="text" 
        onChange={getInpt}
        name='Author'
        value={NSObj.Author != null ? NSObj.Author : ""}
        id='NSAuthor' 
        placeholder='Author'/>
      </div>
      <div className='flexColumn' style={{gap: '10px'}}>
          <label htmlFor="NSShort">Short Description</label>
          <textarea 
          name='Short_Desc'
          onChange={getInpt}
          value={NSObj.Short_Desc != null ? NSObj.Short_Desc : ""}
          id='NSShort'
          style={{height: "300px"}} />
        </div> 
      <div className='flexRow'>
        <p>Select of Content: </p>
        <label htmlFor='Links'>Link</label>
        <input type="radio" 
        checked={optionCont === "Links"}
        name="sel_cont" 
        id="Links"
        onChange={selectContRad}
        />
        <label htmlFor='Self'>Here</label>
        <input type="radio" 
        checked={optionCont === "Self"}
        name="sel_cont" 
        id="Self" 
        onChange={selectContRad}
        />
      </div>
      {
        optionCont === "Links" ?
        <div className='flexColumn' style={{gap: '10px'}}>
          <label htmlFor="Links">Links</label>
          <input type="text" 
          name='Links'
          onChange={getInpt}
          value={NSObj.Content.Links != null ? NSObj.Content.Links : ""}
          id='Links' 
          placeholder='Enter Link here'/>
        </div> 
        :
        optionCont === "Self" ?
        <div className='flexColumn' style={{gap: '10px'}}>
          <label htmlFor="NSCont">Content</label>
          <textarea 
          name='Self'
          onChange={getInpt}
          value={NSObj.Content.Self != null ? NSObj.Content.Self : ""}
          id='NSCont'
          style={{height: "600px"}} />
        </div> 
        : ""
      }
      
      
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