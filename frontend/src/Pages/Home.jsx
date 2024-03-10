import React from 'react'

const Home = () => {
  return (
    <div className='homeStyle'>
      <div class="NewsStories">
            <div class="NS-Header">
                <p class="NS-Header-text">News & Stories</p>
                <p class="NS-Header-line">______________</p>
            </div>
            <div class="card-holder">
                <div class="content-card">
                    <div class="card">
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
                    </div>
                </div>
            </div>
            <div class="E-LM">
                <p><a href="#">LEARN MORE</a></p>
                <a href="#"><img class="arrow" src="/Homepage/imgs/arrow.svg" alt=""/></a>
            </div>
        </div>

        <div class="Events">
            <p class="E-header">Upcoming Events</p>
            <p class="E-text">Take a look at some alumni events happening just around the corner</p>
            <div class="E-container">
                <div class="event">
                    <div class="when">
                        <div class="month">
                            <p>FEB</p>
                        </div>
                        <div class="date">
                            <p>17</p>
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
                            <p>FEB</p>
                        </div>
                        <div class="date">
                            <p>17</p>
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
                            <p>FEB</p>
                        </div>
                        <div class="date">
                            <p>17</p>
                        </div>
                    </div>
                    <div class="what">
                        <p class="what-1">COLLEGE OF SCIENCE</p>
                        <p class="what-2">2024 ALUMNI HOMECOMING</p>
                        <p class="what-3">TUPM-COS ALUMNI</p>
                    </div>
                </div>

                <div class="E-link">
                    <p><a class="a-btn" href="#">View All Upcoming Events</a></p>
                </div>

            </div>
        </div>

        <div class="Gallery">

            <div class="Images">
                <div class="img-1">
                    <img src="/Homepage/imgs/Img6.png" alt="content-img"/>
                </div>

                <div class="img-2">
                    <img src="/Homepage/imgs/Img3.png" alt="content-img"/>
                </div>

                <div class="img-3">
                    <img src="/Homepage/imgs/Img3.png" alt="content-img"/>
                </div>
            </div>

            <div class="G-Text">
                <p class="G-header">Gallery</p>
                <p class="G-subheader">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit natus animi sunt recusandae</p>
                <div class="G-LM">
                    <p><a href="#">Learn More</a></p>
                    <a href="#"><img class="arrow" src="/Homepage/imgs/arrow.svg" alt=""/></a>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Home