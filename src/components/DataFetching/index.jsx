import React, { useEffect } from 'react';

const spaceflightnewsapi = 'https://api.spaceflightnewsapi.net/v3/blogs';
const dobhaApi = 'https://dobha.herokuapp.com/api/read-all-article';

const DataFetch = () => {
  useEffect(() => {
    const getData = async () => {
      const request = await fetch(spaceflightnewsapi);
      const response = await request.json();
      console.log(response);
    };

    getData();
  }, []);

  return (
    <>
      <h1>Data Fetching</h1>
    </>
  );
};

export default DataFetch;