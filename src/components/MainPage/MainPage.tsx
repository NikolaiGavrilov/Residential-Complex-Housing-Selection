import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import "./MainPage.scss";
import { setTitle } from "../../redux/headerTitleReducer";
import Navigation from "../Navigation/Navigation";
import NavigationHighlights from "../NavigationHighlights/NavigationHighlights";
import HoverHighlights from "../HoverHighlights/HoverHighlights";

const MainPage = () => {
  const [buildingView, setBuildingView] = useState<1 | 2>(1);
  const [showNavigationHighlightBuilding, setShowNavigationHighlightBuilding] =
    useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string>("Пентхаусы");
  const [isNavVisible, setNavVisible] = useState(true);

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

  const toggleNavigationVisibility = () => {
    setNavVisible((prev) => !prev);
  };

  return (
    <>
      <Header onMenuClick={toggleNavigationVisibility} />
      <section className="main-page">
          <Navigation
            onNavigationClick={handleNavigationClick}
            isNavVisible={isNavVisible}
          />
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
          <NavigationHighlights
            showNavigationHighlightBuilding={showNavigationHighlightBuilding}
            selectedTitle={selectedTitle}
            buildingView={buildingView}
          />
          <HoverHighlights buildingView={buildingView} />
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
