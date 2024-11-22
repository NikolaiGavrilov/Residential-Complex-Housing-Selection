import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import "./MainPage.scss";
import { setTitle } from "../../redux/headerTitleReducer";

const MainPage = () => {
  const [buildingView, setBuildingView] = useState<1 | 2>(2);

  const handleChangeView = () => {
    buildingView === 1 ? setBuildingView(2) : setBuildingView(1);
  };

  const dispatch = useDispatch();

  const handleNavigationClick = (title: string) => {
    dispatch(setTitle(title));
  };

  return (
    <>
      <Header />
      <section className="main-page">
        <nav className="navigation">
          <div className="navigation__items">
            <div
              className="navigation__item"
              onClick={() => handleNavigationClick("Пентхаусы")}
            >
              <p>Пентхаусы</p>
            </div>
            <div
              className="navigation__item"
              onClick={() => handleNavigationClick("Квартиры")}
            >
              <p>Квартиры</p>
            </div>
            <div
              className="navigation__item"
              onClick={() => handleNavigationClick("Ситихаусы")}
            >
              <p>Ситихаусы</p>
            </div>
            <div
              className="navigation__item"
              onClick={() => handleNavigationClick("Виллы")}
            >
              <p>Виллы</p>
            </div>
          </div>
        </nav>
        {buildingView === 1 ? (
          <div className="img-box_view1">
            <img
              className="building-img-back_view1"
              src="background.jpg"
              alt="фон"
            />
            <div className="cover_view1"></div>
            <img
              className="building-img_view1"
              src="building_view1.svg"
              alt="здание вид1"
            />
            <div className="compass_view1">
              <img src="compass_view1.svg" alt="" />
            </div>
            <div className="surroundings_view1">
              <img src="surroundings_view1.svg" alt="" />
            </div>
            <div className="change-view_view1" onClick={handleChangeView}>
              <img src="arrows_view1.svg" alt="" />
            </div>
          </div>
        ) : (
          <div className="img-box_view2">
            <img
              className="building-img-back_view2"
              src="background2.jpg"
              alt="фон"
            />
            <div className="cover_view2"></div>
            <img
              className="building-img_view2"
              src="building_view2.svg"
              alt="здание вид1"
            />
            <div className="compass_view2">
              <img src="compass_view2.svg" alt="" />
            </div>
            <div className="surroundings_view2">
              <img src="surroundings_view2.svg" alt="" />
            </div>
            <div className="change-view_view2" onClick={handleChangeView}>
              <img src="arrows_view2.svg" alt="" />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default MainPage;
