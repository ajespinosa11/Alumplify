import React, { useEffect, useState } from 'react'
import textPic1 from  '../Assets/jpg/Img3.png';
import textPic2 from  '../Assets/jpg/Img4.png';
import textPic3 from  '../Assets/jpg/Img5.png';
import { Link } from 'react-router-dom'

const Home = () => {
    const [stories, setStories] = useState()
    const [event, setEvent] = useState()

    useEffect(() => {
        const storyFetch = async () => {
            const response = await fetch('/api/contents/stories')
            const json = await response.json()
            if(response.ok){
                setStories(json)
            }else{
                console.log('error access fetch')
            }
        }
        document.body.style.backgroundColor = '#1e1e1e'
        storyFetch()

    },[])

    const dispStories = () => {
        var arrDisp = []
        if(stories != null){

            for(let i = 0; i < stories.length; i++){
                if(i < 3){
                    arrDisp.push(
                        <div class="card-home">
                            <a href={stories[i].Content.Links !== null ? stories[i].Content.Links : 
                                    stories[i].Content.Self !== null  ? `/RevealStory/${stories[i]._id}` : ""}>
                                <img src={stories[i].Picture} alt="Img"/>
                            </a>
                            <p class="ns-content-title">{stories[i].Title}</p>
                            <p class="description">{stories[i].Short_Desc}</p>
                        </div>
                        )
                }else{
                    break;
                }
            }
        }

        return arrDisp
    }
    return (
        <div className='homeStyle'>
        <div class="NewsStories">
                <div class="NS-Header">
                    <p class="NS-Header-text">News & Stories</p>
                    <p class="NS-Header-line">______________</p>
                </div>
                <div class="card-holder">
                    <div class="content-card">
                        {/* <div class="card">
                            <a href="/Homepage/imgs/Img3.png">
                                <img src="/Homepage/imgs/Img3.png" alt="Img"/>
                            </a>
                            <p class="ns-content-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Iure error vel eos itaque sequi porro, obcaecati nemo quidem quaerat,.</p>
                        </div>
        
                        <div class="card">
                            <a href="/Homepage/imgs/Img4.png">
                                <img src="/Homepage/imgs/Img4.png" alt="Img"/>
                            </a>
                            <p class="ns-content-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Iure error vel eos itaque sequi porro, obcaecati nemo quidem quaerat,.</p>
                        </div>
        
                        <div class="card">
                            <a href="/Homepage/imgs/Img5.png">
                                <img src="/Homepage/imgs/Img5.png" alt="Img"/>
                            </a>
                            <p class="ns-content-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Iure error vel eos itaque sequi porro, obcaecati nemo quidem quaerat,.</p>
                        </div> */}
                        {dispStories()}
                    </div>
                </div>
                <a href="#" class="E-LM">
                    <p >LEARN MORE</p>
                </a>
            </div>

            <div class="Events">
                <p class="E-header">Upcoming Events</p>
                <p class="E-text">Take a look at some alumni events happening just around the corner</p>
                <div class="E-container">
                    <div class="event">
                        <div class="when">
                            <div class="month">
                                FEB
                            </div>
                            <div class="date">
                                17
                            </div>
                        </div>
                        <div class="what">
                            <p class="what-1">COLLEGE OF SCIENCE</p>
                            <p class="what-2">2024 ALUMNI HOMECOMING</p>
                            <p class="what-3">TUPM-COS ALUMNI</p>
                        </div>
                    </div>

                    <div class="event"> 
                        <div class="when">
                            <div class="month">
                                FEB
                            </div>
                            <div class="date">
                                17
                            </div>
                        </div>
                        <div class="what">
                            <p class="what-1">COLLEGE OF SCIENCE</p>
                            <p class="what-2">2024 ALUMNI HOMECOMING</p>
                            <p class="what-3">TUPM-COS ALUMNI</p>
                        </div>
                    </div>

                    <div class="event">
                        <div class="when">
                            <div class="month">
                                FEB
                            </div>
                            <div class="date">
                                17
                            </div>
                        </div>
                        <div class="what">
                            <p class="what-1">COLLEGE OF SCIENCE</p>
                            <p class="what-2">2024 ALUMNI HOMECOMING</p>
                            <p class="what-3">TUPM-COS ALUMNI</p>
                        </div>
                    </div>

                    <div class="E-link">
                        <Link to='/AnnEvent' class="a-btn-home-event">View All Upcoming Events</Link>
                    </div>

                </div>
            </div>

            <div class="Gallery">

                <div class="Images">
                    <div class="img-1">
                        <img src={textPic1} alt="content-img1"/>
                    </div>

                    <div class="img-2">
                        <img src={textPic2} alt="content-img"/>
                    </div>

                    <div class="img-3">
                        <img src={textPic3} alt="content-img"/>
                    </div>
                </div>

                <div class="G-Text">
                    <p class="G-header">Gallery</p>
                    <p class="G-subheader">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit natus animi sunt recusandae</p>
                    <div class="G-LM">
                        <Link to='/YearBook'>Learn More</Link>
                        <a href="#"><img class="arrow" src="/Homepage/imgs/arrow.svg" alt=""/></a>
                    </div>
                </div>

            </div>
        
        </div>
  )
}

export default Home