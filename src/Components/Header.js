import React from "react";
import "../ScssComponents/Header.scss";
import logo from "../assets/icons8-steam-24.png";
import manIcon from "../assets/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="Steam Logo" />
        </div>
        <nav className="header-nav">
          <ul>
            <li>Steam</li>
            <li>Görünüm</li>
            <li>Arkadaşlar</li>
            <li>Oyunlar</li>
            <li>Yardım</li>
          </ul>
        </nav>
        <nav className="header-controls">
          <ul>
            <li className="blue-box"></li>
            <li className="green-box">
              <b className="bell">
                <FontAwesomeIcon
                  icon={faBell}
                  shake
                  style={{ color: "#ffffff" }}
                />
              </b>
            </li>
            <li className="wide-box">
              <div
                className="icon"
                style={{ backgroundImage: `url(${manIcon})` }}
              ></div>
              <div className="text">Profile</div>
            </li>
            <li className="icon-box">_</li>
            <li className="icon-box">[]</li>
            <li className="icon-box">X</li>
          </ul>
        </nav>
      </div>
      <div className="header-bottom">
        <div className="nav-icons">
          <div className="left">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#3d4450" }} />
          </div>
          <div className="right">
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#3d4450" }} />
          </div>
        </div>
        <nav className="header-nav-main">
          <ul>
            <li>Mağaza</li>
            <li className="active">Kütüphane</li>
            <li>Topluluk</li>
            <li>Profil</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
