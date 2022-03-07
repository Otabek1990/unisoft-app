import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { HomeHeaderData } from "../../datas/homeHeaderDatas";
import "./homeHeader.css";

export default function HomeHeader() {
  // const clients = HomeHeaderData.map(item=>item.text.lastIndexOf("text"))
 let son=""
  const findLastWord=(text)=>{
    const last=text.split(" ")
    const lastWord=last[last.length-1]
    son=lastWord;
    return text.slice(0,-lastWord.length)
  }
  return (
    <Carousel
      className="carousel"
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
    >
      {HomeHeaderData.map((item,index) => (
        <div className="caro-item" key={index}>
            <img src={item.img} alt="img" />
          <div className="descript">
            <p>
              {findLastWord(item.text)} <span>{son}</span> 
            </p>

            <button>Подробнее</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
