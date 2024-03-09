import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Newsandstories = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://localhost:5000/api/content')
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const truncateContent = (content) => {
    const sentences = content.split('.').slice(0, 8).join('.');
    return sentences + '...';
  };

  const limitedNews = news.slice(0, 4);

  return (
    <div className='storybg'>
      {limitedNews.map((item) => (
        <div className="card" key={item._id}>
          <div className="image-container">
            <img src="/sample.jpg" alt="CardImage" />
          </div>
          <div className="cardbg">
            <div className="card-content">
              <div>
                <p className='date'>{item.date}</p>
                <h2><Link to={`/newsandstories/${item._id}`} >{item.title}<span className="material-symbols-outlined">north_east</span></Link></h2>  
                <p className='author'> by {item.author}</p>
                <p>{truncateContent(item.content)}</p>
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

export default Newsandstories;
