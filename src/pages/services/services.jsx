import React from "react";
import Navbar from "../../components/navbar/navbar2";
import ServicesHeader from "../../components/serviceHeader/services-header";
import ServicesMain from "../../components/serviceMain/services-main";
import "./services.css";

export default function ServicesPage() {
  return (
    <div className="servicesPage">
      <Navbar className="navbar" />
      <div className="wrapper">
        <p className="navigator">
          Главная / <span>Услуги</span>
        </p>
        <ServicesHeader />
        <h1>Услуги</h1>
        <ServicesMain/>
      </div>
    </div>
  );
}
