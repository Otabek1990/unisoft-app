import React, {useState, useEffect} from "react";
import Navbar from "../../components/navbar/navbar2";
import "./projectsDetails.css";
import { ProjectDatas } from "../../datas/projectDatas";
// import ProjectsImg from '../../assets/images/projectD1.png'
import ProjectsImg2 from '../../assets/images/projectD2.png'
import {Link, useParams } from "react-router-dom";

export default function ProjectsDetails() {
  const [container, setContainer] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const filter = ProjectDatas.filter((item) => item.id === id);
    setContainer(filter);
  }, [id]);
  return (
    <div className="ProjectsDetails">
      <Navbar />
      {container.map((item,index)=>(
        <div className="projects-wrapper" key={index}>
        <p className="navigate">
          <Link className="link" to="/">Главная</Link> / <Link className="link" to="/projects">Проекты</Link> / <span>SMM кейс для компании</span>
        </p>
        <h1>SMM кейс для компании</h1>
        <img src={item.img} alt="content" className="contentImage" />
        <div className="content-text">
          <h4>О проекте</h4>
          <p className="description">
            Как уже неоднократно упомянуто, явные признаки победы
            институционализации могут быть указаны как претенденты на роль
            ключевых факторов. С другой стороны, выбранный нами инновационный
            путь играет важную роль в формировании инновационных методов
            управления процессами. Сложно сказать, почему представители
            современных социальных резервов ограничены исключительно образом
            мышления. Не следует, однако, забывать, что семантический разбор
            внешних противодействий предопределяет высокую востребованность
            существующих финансовых и административных условий. 
            </p>
            <p>Повседневная практика показывает, что высокое качество позиционных исследований
            требует определения и уточнения вывода текущих активов. Но
            сторонники тоталитаризма в науке указаны как претенденты на роль
            ключевых факторов. С учётом сложившейся международной обстановки,
            дальнейшее развитие различных форм деятельности требует определения
            и уточнения приоритизации разума над эмоциями. Внезапно, базовые
            сценарии поведения пользователей формируют глобальную экономическую
            сеть и при этом - описаны максимально подробно.
          </p>
        </div>
        <img src={ProjectsImg2} alt="content" className="contentImage" />
      </div>
      ))}
      
    </div>
  );
}
