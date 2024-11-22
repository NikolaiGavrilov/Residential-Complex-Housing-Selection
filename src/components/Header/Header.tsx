import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './Header.scss';

interface HeaderProps {} 

const Header: React.FC<HeaderProps> = () => {
  const title = useSelector((state: RootState) => state.headerTitle.headerTitle); 
  return (
    <header className="header">
      <div className="header-content">
        <div className="header__menu">
          <div className="header__menu-line"></div>
          <div className="header__menu-line"></div>
        </div>
        <div className="house-group">
          <p className="house-group__name">{title}</p>
        </div>
        <div className="header-left">
          <div className="header__filters">
            <img
              className="header__filters-img"
              src="./filters.svg"
              alt="фильтрация"
            />
            <p className="header__filters-text">По параметрам</p>
          </div>
          <div className="header__contacts">
            <img
              className="header__contacts-img"
              src="./favorites.svg"
              alt="избранные"
            />
            <div className="header__contacts-text">+7 495 000 00 00</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
