import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://storage.googleapis.com/muntherauto.appspot.com/MuntherAutoCars/IMG_0084.jpg?auto=compress&cs=tinysrgb&w=1600",
    "https://storage.googleapis.com/muntherauto.appspot.com/MuntherAutoCars/IMG_0485.jpg?auto=compress",
    "https://storage.googleapis.com/muntherauto.appspot.com/MuntherAutoCars/IMG_2827.jpg?auto=compress&cs=tinysrgb&w=1600",
    "https://storage.googleapis.com/muntherauto.appspot.com/MuntherAutoCars/IMG_2817.jpg?auto=compress&cs=tinysrgb&w=1600",
    "https://storage.googleapis.com/muntherauto.appspot.com/MuntherAutoCars/IMG_2828.jpg?auto=compress&cs=tinysrgb&w=1600",
    "https://storage.googleapis.com/muntherauto.appspot.com/MuntherAutoCars/IMG_2818.jpg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 60}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
        <img src={data[4]} alt="" />
        <img src={data[5]} alt="" />
       
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
