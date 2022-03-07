import React from "react";
import {PartnerDatas} from '../../datas/partnerDatas'
import "./partners.css";

export default function Partners() {
  return (
    <div className="partners">
      <h1>Наши партнеры </h1>
      <div className="logos">
        {PartnerDatas.map((item,index) => (
          <div className="logo" key={index}>
            <img src={item.img} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
}
