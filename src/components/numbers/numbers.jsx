import React from 'react';
import './numbers.css'

export default function Numbers() {
  return <div className="numbers">
      <h1 className='numHeader'>Компания в числах</h1>
      <div className="container ">
          <div className="row  ">
          <div className=" col-12 col-md-4">
              <h1>20+</h1>
              <p>Программистов в компании</p>
          </div>
          <div className=" col-12 col-md-4">
              <h1>80+</h1>
              <p>Реализованных проектов</p>
          </div>
          <div className=" col-12 col-md-4">
              <h1>150+</h1>
              <p>Постоянных и довольных клиентов</p>
          </div>
          </div>

      </div>
  </div>;
}
