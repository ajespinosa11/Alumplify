import React, { useEffect, useRef, useState } from 'react'
import { deleteObject, uploadBytes } from 'firebase/storage'
import { alumniImageDB } from '../../firebaseImge';
import { v4 } from 'uuid'
import { getDownloadURL, listAll, ref} from 'firebase/storage'

const AnnView = ({viewEvnt, editEvnt, defEvnt, editDefEvnt, disable, setDis}) => {
    const [getImg, setGetImg] = useState(null)
    const [dispImg, setDispImg] = useState(null)
    const TxtAreaRef = useRef([])

    // const resizeTextArea = () => {
    //     TxtAreaRef.current[0].style.height = "auto";
    //     TxtAreaRef.current[0].style.height = TxtAreaRef.current[0].scrollHeight + "px";
    //     TxtAreaRef.current[1].style.height = "auto";
    //     TxtAreaRef.current[1].style.height = TxtAreaRef.current[1].scrollHeight + "px";
    //     TxtAreaRef.current[2].style.height = "auto";
    //     TxtAreaRef.current[2].style.height = TxtAreaRef.current[2].scrollHeight + "px";
    //   }
    
    //   useEffect(resizeTextArea, [viewBoa]);

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
    
  return (
    <div className= 'flexRow ViewSingle'>
      <div className='leftView'>
        <div style={{textAlign: 'justify'}}>
          <div style={{fontWeight: 'bold', fontSize: '20px'}}>
            {/* {disable ? 
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
            } */}
            <textarea 
                disabled
                style={{ fontWeight: 'bold', fontSize: '20px'}} 
                className='txtView' 
                // onChange={inptChange} 
                name='Title'
                ref={(element) => {TxtAreaRef.current[0] = element}} 
                rows={1} value= {viewEvnt.Title}/>
          </div>
          <div >
            {/* {disable ? 
            <input disabled style={{fontWeight: 'bold', fontSize: '13px'}} 
              type="text" 
              className='txtView' 
              name='Date' 
            value= {viewBoa.Date_Publish}
          :
          <input  style={{border: '1px solid black', fontWeight: 'bold', fontSize: '13px'}} 
          type="text" 
          className='txtView hoverInCont' 
          name='Date_Publish' 
          onChange={inptChange}   
          value= {viewBoa
            .Date_Publish}
          />} */}

            <input disabled style={{fontWeight: 'bold', fontSize: '13px'}} 
                type="text" 
                className='txtView' 
                name='Date' 
                value= {viewEvnt.Date_Implement} />
          </div>
          <div style={{fontSize: '14px',
                    display: 'flex',
                    justifyContent: 'center',
                    
                    paddingTop: '10px'}} >
            <div style={{width: '530px'}}>
            {/* { disable  ?  <textarea disabled
                className='txtView contentText' 
                // onChange={inptChange} 
                name='Abstract'
                ref={(element) => {TxtAreaRef.current[2] = element}} 
                rows={1} value= {viewEvnt.Content}/> : 
                <textarea style={{border: '1px solid black'}} 
                className='txtView contentText hoverInCont' 
                // onChange={inptChange} 
                name='Abstract'
                ref={(element) => {TxtAreaRef.current[2] = element}} 
                rows={1} value= {viewEvnt.Content}/>} */}

                <textarea disabled 
                className='txtView contentText ' 
                // onChange={inptChange} 
                name='Abstract'
                ref={(element) => {TxtAreaRef.current[2] = element}} 
                rows={1} value= {viewEvnt.Content}/>
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
            <div 
            // onClick={deleteCont} 
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
          <div className='viewImg' style={{height: "300px", width: "300px"}}>
            <img src={viewEvnt.Picture.Images[0]} alt="Boa Pic" width={'100%'} height={'100%'} />
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
            // onClick= {saveEdit} 
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