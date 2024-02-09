import React, { useState } from 'react'

const AnsPersInfo = () => {
    const [personalArr, setPersonalArr] = useState({
        quesAns1: '',
        quesAns2: '',
        quesAns3: '',
        quesAns4: '',
        quesAns5: '',
        quesAns6: '',
        quesAns7: '',
        quesAns8: '',
        quesAns9: ''
    })

    return [personalArr, setPersonalArr]
}

export default AnsPersInfo