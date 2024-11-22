import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import "./MainPage.scss";
import { setTitle } from "../../redux/headerTitleReducer";
import Navigation from "../Navigation/Navigation";

const MainPage = () => {
  const [buildingView, setBuildingView] = useState<1 | 2>(1);
  const [showNavigationHighlightBuilding, setShowNavigationHighlightBuilding] =
    useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string>("Пентхаусы");
  const [hoverHighlights, setHoverHighlights] = useState<{
    [key: string]: boolean;
  }>({
    penthouses: false,
    flats_level3: false,
    flats_level4: false,
    flats_level5: false,
  });

  const dispatch = useDispatch();

  const handleChangeView = () => {
    buildingView === 1 ? setBuildingView(2) : setBuildingView(1);
  };

  const handleNavigationClick = (title: string) => {
    dispatch(setTitle(title));
    setSelectedTitle(title);
    setShowNavigationHighlightBuilding(true);

    setTimeout(() => {
      setShowNavigationHighlightBuilding(false);
    }, 3000);
  };

  const handleHover = (highlight: string) => () => {
    setHoverHighlights((prev) => ({ ...prev, [highlight]: !prev[highlight] }));
  };

  return (
    <>
      <Header />
      <section className="main-page">
      <Navigation onNavigationClick={handleNavigationClick} />
        <div className={`img-box_view${buildingView}`}>
          <img
            className={`building-img-back_view${buildingView}`}
            src={buildingView === 1 ? "background.jpg" : "background2.jpg"}
            alt="фон"
          />
          <div className={`cover_view${buildingView}`}></div>
          <img
            className={`building-img_view${buildingView}`}
            src={`building_view${buildingView}.svg`}
            alt={`здание вид${buildingView}`}
          />
          {buildingView === 1 &&
            showNavigationHighlightBuilding &&
            selectedTitle === "Пентхаусы" && (
              <img
                className="highlight__penthouses_view1"
                src="penthouses_view1.svg"
                alt="подсветка петхаусов вид1"
              />
            )}
          {buildingView === 2 &&
            showNavigationHighlightBuilding &&
            selectedTitle === "Пентхаусы" && (
              <img
                className="highlight__penthouses_view2"
                src="penthouses_view2.svg"
                alt="подсветка петхаусов вид2"
              />
            )}
          {buildingView === 1 &&
            showNavigationHighlightBuilding &&
            selectedTitle === "Квартиры" && (
              <img
                className="highlight__flats_view1"
                src="flats_view1.svg"
                alt="подсветка квартир вид1"
              />
            )}
          {buildingView === 2 &&
            showNavigationHighlightBuilding &&
            selectedTitle === "Квартиры" && (
              <img
                className="highlight__flats_view2"
                src="flats_view2.svg"
                alt="подсветка квартир вид2"
              />
            )}
          {buildingView === 1 &&
            showNavigationHighlightBuilding &&
            selectedTitle === "Ситихаусы" && (
              <>
                <img
                  className="highlight__cityhouses1_view1"
                  src="cityhouses1_view1.svg"
                  alt="подсветка ситихаусов вид1"
                />
                <img
                  className="highlight__cityhouses2_view1"
                  src="cityhouses2_view1.svg"
                  alt="подсветка ситихаусов вид1"
                />
              </>
            )}
          {buildingView === 2 &&
            showNavigationHighlightBuilding &&
            selectedTitle === "Ситихаусы" && (
              <img
                className="highlight__cityhouses_view2"
                src="cityhouses_view2.svg"
                alt="подсветка ситихаусов вид2"
              />
            )}
          {buildingView === 1 &&
            showNavigationHighlightBuilding &&
            selectedTitle === "Виллы" && (
              <img
                className="highlight__villas_view1"
                src="villas_view1.svg"
                alt="подсветка вилл вид1"
              />
            )}
          {buildingView === 2 &&
            showNavigationHighlightBuilding &&
            selectedTitle === "Виллы" && (
              <img
                className="highlight__villas_view2"
                src="villas_view2.svg"
                alt="подсветка вилл вид2"
              />
            )}
          <div className={`compass_view${buildingView}`}>
            <img src={`compass_view${buildingView}.svg`} alt="" />
          </div>
          <div className={`surroundings_view${buildingView}`}>
            <img src={`surroundings_view${buildingView}.svg`} alt="" />
          </div>
          <div
            className={`change-view_view${buildingView}`}
            onClick={handleChangeView}
          >
            <img src={`arrows_view${buildingView}.svg`} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
