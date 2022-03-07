import React from 'react';
import { Visuals } from '../../datas/servicesDatas';
import Polygon from '../../assets/icons/Polygon.png';
import './services-main.css'


export default function ServicesMain() {

    const Data = []
    for (let i = 1; i < Visuals.length; i++) {
        Data.unshift(Visuals[i])
    }
  return (
    <div className="services-main">
        {Data.map((item,index)=>(
            <div className="main-item" key={index}>
                <img src={item.img} alt="img" className="left" />
                <div className="right">
                    <p className="title">{item.text}</p>
                    <p className="description">{item.desc}</p>
                    {item.services.map(options=>(
                        <div className="options">
                            <img src={Polygon} alt="polygon" />
                            <p>{options}</p>
                        </div>
                    ))}
                    <button className="order">Заказать проект</button>
                </div>
            </div>
        ))}
    </div>
  )
}
