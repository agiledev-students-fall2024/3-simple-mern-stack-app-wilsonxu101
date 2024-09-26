import { useEffect, useState } from 'react';
import './Home.css';

const AboutUs = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5002/about-us')  // My Back-end says that Server running on port: 5002 Connected to MongoDB so include this to be safe and working
      .then(response => response.json())
      .then(data => setData(data));
  }, []);


  return (
    
    <>
      <h1>{data.name}</h1>
      
      <img src={data.image} alt="Profile" width="300" height="200" />
      <p>{data.bio}</p>
    </>
  );
};


export default AboutUs;
