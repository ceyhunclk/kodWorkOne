import axios from 'axios';
import React, {useState} from 'react';
const useHttps = () => {
  
  const [dataVal, setData] = useState([]);
  const [err, seterr] = useState(null);
  const [loading, setloading] = useState(true);
  const getJobs = async (url, payload) => {
    try {
      setloading(true);
      const {data} = await axios.get(url);
      setData(data.results);
      setloading(false);
    } catch (error) {
      console.log(err);
    }
  };
  const getDetailJob = async (url) => {
    try {
  
      setloading(true);
      const {data} = await axios.get(url);
      setData(data);
      setloading(false);
    } catch (error) {
      console.log(err);
    }
  };

  return {dataVal,loading, getJobs,getDetailJob};
};
export default useHttps;
