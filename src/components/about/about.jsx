import React from "react";
import './about.css'
import Stick from '../../assets/images/about-stick.png'
import RightHand from '../../assets/images/right-hand.png'
import LeftHand from '../../assets/images/left-hand.png'
export default function About() {
  return (
    <div className="about">
      <h1>О нас</h1>
      <div className="main-content">
        <img src={Stick} alt="" />
        <p className="text">
          ООО «IT Unisoft» создано в 2007 году и на сегодняшний день является
          ведущим поставщиком IT-продуктов, решений и услуг на рынке системной
          интеграции Узбекистана. Портфель решений и услуг компании охватывает
          полный жизненный цикл информационных технологий в предприятиях и
          организациях любого масштаба – от проектного консалтинга и
          комплексного построения IT-инфраструктуры до технической поддержки и
          сопровождения систем центров обработки данных.
        </p>
      </div>
      <img className="right-hand" src={RightHand} alt="img" />
      <img className="left-hand" src={LeftHand} alt="img" />
    </div>
  );
}
