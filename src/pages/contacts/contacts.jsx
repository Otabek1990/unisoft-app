import React from "react";
import Navbar from "../../components/navbar/navbar2";
import "./contacts.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Contacts() {
  return (
    <div className="contacts">
      <Navbar />
      <div className="wrapper">
        <p className="navigate">
          Главная / <span>Контакты</span>
        </p>
        <h1 className="header">Закажите Ваш проект</h1>
        <div className="main-content">
          <div className="left">
            <h2 className="type">Позвоните или напишите нам:</h2>
            <div className="item">
              <i>
                <PhoneIcon className="icons" />
              </i>
              <p>+998 (99) 999 99 99</p>
            </div>
            <div className="item mb-40">
              <i>
                <TelegramIcon className="icons" />
              </i>
              <p>Напиcать в Telegram</p>
            </div>
            <h2 className="type">Почта:</h2>
            <div className="item bord-none mb-40">
              <i>
                <EmailIcon className="icons" />
              </i>
              <p>info@itunisoft.uz</p>
            </div>
            <h2 className="type">Мы в соц.сетях:</h2>
            <div className="item bord-none ">
              <p>
                <FacebookIcon
                  style={{ fontSize: "32px", marginRight: "20px" }}
                />
              </p>
              <p>
                <InstagramIcon
                  style={{ fontSize: "32px", marginRight: "20px" }}
                />
              </p>
              <p>
                <TelegramIcon style={{ fontSize: "32px" }} />
              </p>
            </div>
          </div>
          <div className="right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7380.790444121605!2d69.259899817138!3d41.29617265701922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8add0197da95%3A0xca13dcd0c6031180!2z0J7QntCeIFVuaXNvZnQ!5e0!3m2!1sru!2s!4v1644910780737!5m2!1sru!2s"
              title="location"
              style={{border:'0',width:"100%",height:"100%",}}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
