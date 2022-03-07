import React from "react";
import Logo from "../../assets/logo/logodark.png";
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Footer() {
  return (
    <div className="footer ">
      <div className="left ">
        <img src={Logo} alt="" />
      </div>

      <div className="center ">
        <p>
          <FacebookIcon style={{fontSize:"32px",marginRight:"20px"}}/>
        </p>
        <p>
          <InstagramIcon style={{fontSize:"32px", marginRight:"20px"}}/>
        </p>
        <p>
          <TelegramIcon style={{fontSize:"32px"}} />
        </p>
      </div>
      <div className="right ">
        <p>Для связи</p>
        <h3>+998 99 999 99 98</h3>
        <h3>+998 90 777 77 55</h3>
        <h4>2016 — 2022 itunisoft.uz</h4>

      </div>
    </div>
  );
}
