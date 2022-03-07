import React from "react";
import Polygon from '../../assets/icons/Polygon.png'
import RightHeader from '../../assets/images/serviceHeader.png'
import './services-header.css'

export default function ServicesHeader() {
  return (
    <div className="services-header">
      <div className="left">
        <h1>Сайты со сложной структурой</h1>
        <div className="item">
          <img src={Polygon} alt="polygon" />
          <p>Экономическая повестка сегодняшнего дня сделала своё дело</p>
        </div>
        <div className="item">
          <img src={Polygon} alt="polygon" />
          <p>
            Давайте не будем укрепляться в мысли, что средства индивидуальной
            защиты оказались бесполезны
          </p>
        </div>
        <div className="item">
          <img src={Polygon} alt="polygon" />
          <p>Никто не вправе осуждать старческий скрип Амстердама</p>
        </div>
        <button className="order">Заказать проект</button>
      </div>
      <div className="right">
          <img src={RightHeader} alt="img" />
      </div>
    </div>
  );
}
