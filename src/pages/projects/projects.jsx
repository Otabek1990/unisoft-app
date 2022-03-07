import React from "react";
import "./projects.css";
import { ProjectDatas } from "../../datas/projectDatas";
import Navbar from "../../components/navbar/navbar2";
import { Link, useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  const details = (e, id) => {
    e.preventDefault();
    navigate(`/projectsDetails/${id}`);
  };
  return (
    <div className="projects">
      <Navbar />
      <div className="wrapper">
        <h5 className="navigate">
          <Link to="/" className="link">
            Главная
          </Link>{" "}
          / <span>Проекты</span>
        </h5>
        <h1 className="header">Наши проекты</h1>
        <ul className="service-options">
          <li>
            <span> Все проекты</span>
          </li>
          <li>Брендинг</li>
          <li>Видео</li>
          <li>Веб-дизайн</li>
          <li>SMM</li>
        </ul>
        <div className="items">
          {ProjectDatas.map((item) => (
            <img
              id={item.id}
              onClick={(e) => details(e, item.id)}
              src={item.img}
              alt="img"
            />
          ))}
          

        </div>
        <h2 className="more">Загрузить ещё...</h2>
      </div>
    </div>
  );
}
