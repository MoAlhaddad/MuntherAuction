import React, { useEffect, useState } from 'react'
import "./Cars.scss";
import Slider from '../../components/Slider/Slider';
import axios from "axios";
const Cars = () => {

  const [cars, setCars] = useState([]);
  // axios = axios.create({ baseURL: process.env.REACT_APP_API_URL });
  //REACT_APP_API_TOKEN
  useEffect(() => {
    const fetchData = async  () =>{
    try{
      const data = await axios.get(process.env.REACT_APP_API_URL + "/api/cars", 
     { 
      headers: {
        Authorization:
        "bearer "
 + process.env.REACT_APP_API_TOKEN   },
     }
      
      );
      setCars(data);
      console.log(cars)
    } catch(err) {
      console.log(err)
    }
  }; 
  fetchData();
 }, []);
  return (
    <>
  
    <div className="cars">
    <div className="left">
      <div className="filterItem">
        <h2>Cars Categories</h2>
        </div>
        </div>
        <Slider/>
        </div>
  </>
  )
}

export default Cars