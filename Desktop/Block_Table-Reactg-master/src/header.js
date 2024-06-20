import React, { useState } from "react";
import Logo from "../src/svg/trace.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="text-white bg-gray-400 relative">
      <div className="flex justify-between items-center px-4">
        <img alt="IMAGE144" src={Logo} className="" />
        <div className="menu__container">
          <div className="menu__mobile-btn" id="menuBtn" onClick={toggleMenu}>
            <div className="menu__burger"></div>
          </div>
          <div
            className={`menu__overlay ${isMenuOpen ? "menu__overlay--open" : ""} sm:top-1/2 sm:left-1/2 left-36 top-2/4 h-full sm:max-w-4xl max-w-full`}
          >
            <div
              className="menu__close-btn sm:text-8xl text-4xl"
              id="closeBtn"
              onClick={closeMenu}
            >
              &times;
            </div>
            <div className="menu__content sm:text-8xl text-4xl">
              <div className="menu__item ">Главная</div>
              <div className="menu__item">Результаты</div>
              <div className="menu__item">
                <a href="./table.html">Таблица</a>
              </div>
              <div className="menu__item">О нас</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
