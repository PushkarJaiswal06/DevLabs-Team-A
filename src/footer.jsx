import React from "react";
import {
  FaInstagram,
  FaDiscord,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      {/* Neon Side Borders with Notches */}
      <div className="side-border left" />
      <div className="side-border right" />

        <div className="right-notch"></div>
      {/* Top Row */}
      <div className="top-row">
        <div className="headline">LET'S TALK.</div>
      </div>
      <hr className="divider" />

      {/* Middle Row */}
      <div className="middle-row">SERVICES.</div>

      {/* Bottom Divider & WORK */}
      <div className="bottom-divider">
        <hr className="divider bottom" />
      </div>
      <div className="bottom-left">WORK.</div>

      {/* Social Links */}
      <div className="bottom-row">
        <div className="social-icons">
          <a href="#" className="social-link">
            <FaInstagram /> <span>Instagram</span>
          </a>
          <a href="#" className="social-link">
            <FaDiscord /> <span>Discord</span>
          </a>
          <a href="#" className="social-link">
            <FaLinkedin /> <span>Linkedin</span>
          </a>
          <a href="#" className="social-link">
            <FaGithub /> <span>Github</span>
          </a>
          <a href="#" className="social-link">
            <FaWhatsapp /> <span>Whatsapp</span>
          </a>
        </div>
      </div>

    </div>
  );
}
