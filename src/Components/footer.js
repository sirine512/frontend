import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerContent">
        <Link to={'https://instagram.com'}><h2><FontAwesomeIcon icon={faInstagram} /></h2></Link>
        <Link to={'https://facebook.com'}><h2><FontAwesomeIcon icon={faFacebook} /></h2></Link>
        <Link to={'https://facebook.com'}><h2><FontAwesomeIcon icon={faTwitter}  /></h2></Link>
        <Link to={'https://facebook.com'}><h2><FontAwesomeIcon icon={faWhatsapp}  /></h2></Link>         
        </div>
      </div>
    </>
  );
};

export default Footer;
