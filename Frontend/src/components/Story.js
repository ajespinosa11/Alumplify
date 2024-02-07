import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Story = () => {

  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    // Function to fetch news details by ID
    const fetchNewsDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/content/${id}`);
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
  
  return (
    <div className='storyBG'>
      <div className="storycard">
        <h2>{newsItem.title}</h2>
        <div className="sline"></div>
        <h4>{newsItem.date}</h4>
        <img src="/samp.jpg" alt="" />
        <p>{newsItem.content}</p>
      </div>
    </div>
  );
};

export default Story
