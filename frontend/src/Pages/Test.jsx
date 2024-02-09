import React, { useEffect, useState } from 'react'

const Test = () => {
    const [imgUpld,setUplaod] = useState([])
    const [dispImg, setDisp] = useState([])
    
    useEffect(() => {
        const chosenFile = Array.prototype.slice.call(imgUpld)
        const appendArr = dispImg
        for(let i = 0; i < chosenFile.length; i++){
            appendArr.push(chosenFile[i])
        }

        setDisp(appendArr)
        console.log(dispImg.length)

    }, [imgUpld])

    const dispMultiImg = (disp) => {        
        return (
            <img src={URL.createObjectURL(disp)} width={"100px"} height={"100px"} alt="images" />
        )
    }
  return (
    <div>
        <input type="file" multiple onChange={(e) => setUplaod(e.target.files) } />
        {/* <button onClick={addImage}>Upload</button> */}
        {dispImg.length != 0 ?
            dispImg.map((disp) => (
                dispMultiImg(disp)
            )) :''
        }
    </div>
  )
}

export default Test