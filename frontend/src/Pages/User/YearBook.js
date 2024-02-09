import React, { useEffect } from 'react'
import TestPic from '../../Assets/jpg/samp.jpg'

function YearBook() {

    const loopCont = () => {
        const cont = (
            <div class="grid-item"><img src={TestPic} alt="" />
                <p>Salsalani, Abdul N.</p>
            </div>
        )

        for(let i = 0; i < 16; i++){
            
        }
    }

    useEffect(() => {
        document.body.style.backgroundColor = '#1e1e1e'

    })

    return (
        <div className='yearbookBG'>
            <div className="batchheader">
                <h1>BATCH 2018<span class="material-symbols-outlined"> arrow_downward_alt </span></h1>
                <div className="divider">
                </div>
            </div>
            <div className="drop">
                <p> Bachelor of Science in Information System <span class="material-symbols-outlined"> arrow_downward_alt</span></p>
            </div>
            <div className="Pcontainer">
                <div class="grid-container">
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>
                    <div class="grid-item"><img src={TestPic} alt="" />
                    <p>Salsalani, Abdul N.</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default YearBook
