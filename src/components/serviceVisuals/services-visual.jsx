import React from 'react';
import { Visuals } from '../../datas/servicesDatas';
import './services-visual.css'
export default function ServiceVisual() {
  return <div className="visuals">
      {Visuals.map((item,index)=>(
              <section key={index}>
              <img src={item.img} alt="img" />
              <p>{item.text}</p>

              </section>
      ))}
  </div>;
}
