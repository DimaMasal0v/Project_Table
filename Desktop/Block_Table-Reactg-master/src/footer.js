import React from "react";
import "./App.css";
import FooterContact from "./FooterContact";
import FooterSocialIcons from "./FooterSocialIcons";

const Footer = ({
  title,
  sendHi,
  location,
  emailLabel,
  email,
  phoneLabel,
  phone,
  copyright,
  connectLabel,
  socialIcons,
}) => {
  return (
    <footer className="relative p-0 sm:mt-24 mt-10">
      <div className="flex justify-between">
        <div className="container flex flex-col sm:px-5 px-1">
          <div className="sm:text-left">
            <h2 className="footer-container-text">{title}</h2>
            <span className="footer-container-text-2 underline color-gold">
              {sendHi}
            </span>
          </div>
          <FooterContact
            location={location}
            emailLabel={emailLabel}
            email={email}
            phoneLabel={phoneLabel}
            phone={phone}
          />
        </div>
      </div>
      <div className="container_two-line mt-10"></div>
      <div className="container-footer relative">
        <div className="desktop-container1 grid sm:grid-rows-1 sm:grid-cols-2 grid-rows-1">
          <span className="desktop-text BodymdLight sm:text-left text-center">
            {copyright}
          </span>
          <FooterSocialIcons
            connectLabel={connectLabel}
            socialIcons={socialIcons}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
