import React, { useEffect, useState } from 'react';

const spaceflightnewsapi = 'https://api.spaceflightnewsapi.net/v3/blogs';
const dobhaApi = 'https://dobha.herokuapp.com/api/read-all-article';

const DataFetch = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getData = async () => {
      const request = await fetch(spaceflightnewsapi);
      const response = await request.json();
      console.log(response);
      setTimeout(() => {
        setNews(response);
        setLoading(false);
      }, 2000);
    };

    getData();
  }, []);

  return (
    <>
      <h1>Data Fetching</h1>
      {loading ? (<i>Loading Data....</i>) 
        : (
        <ul>
          {news.map(item => {
              return <li key={item.id}>{item.title}</li>
            })}
        </ul>)}
    </>
  );
};

export default DataFetch; 