import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import testpic from '../../Assets/jpg/cover.jpg'

const NewStory = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/api/contents/stories/')
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error('Error fetching data:', error));
      document.body.style.backgroundColor = '#1e1e1e'

  }, []);

  const formatDate = (date) => {
    const dateGet = new Date(date)
    
    const setFormat = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    const formatDateConv = dateGet.toLocaleDateString('en-US', setFormat)
    return formatDateConv
  }

  const limitedNews = news.slice(0, 4);

  return (
    <div className='storybg'>
      {limitedNews.map((item) => (
        <div className="card" key={item._id}>
          <div className="image-container">
            <img src={item.Picture} alt="CardImage" />
          </div>
          <div className="cardbg">
            <div className="card-content">
              <div>
                <p className='date'>{formatDate(item.Date_Publish)}</p>
                <h2><Link to={item.Content.Links != null ? item.Content.Links : 
                   item.Content.Self != null ? `/RevealStory/${item._id}` : ""} >{item.Title}<span className="material-symbols-outlined">north_east</span></Link></h2>  
                <p className='author'> by {item.Author}</p>
                <p>{item.Short_Desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="btn-news">
        <a href='/#'>Load more</a>
      </div>
    </div>
  );
};

export default NewStory;
