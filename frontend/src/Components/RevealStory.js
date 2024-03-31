import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import testpic from '../Assets/jpg/cover.jpg'

const RevealStory = () => {

  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    // Function to fetch news details by ID
    const fetchNewsDetails = async () => {
      try {
        const response = await fetch(`/api/contents/stories/${id}`);
        console.log('News details response:', response);
        const data = await response.json();
        setNewsItem(data);
      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    };
    
    fetchNewsDetails();
  }, [id]);

  if (!newsItem) {
    return <p>Loading...</p>; // loading indicator while fetching data
  }
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

  return (
    <div className='storyBG'>
      <div className="storycard">
        <h2>{newsItem.Title}</h2>
        <div className="sline"></div>
        <h4>{formatDate(newsItem.Date_Publish)}</h4>
        <img src={newsItem.Picture} alt="" />
        <div style={{display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '94%',
        textAlign: 'justify'}}>
            <p>{newsItem.Content.Self}</p>
        </div>
      </div>
    </div>
  );
};

export default RevealStory
