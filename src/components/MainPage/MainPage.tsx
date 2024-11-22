import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import "./MainPage.scss";
import { setTitle } from "../../redux/headerTitleReducer";
import Navigation from "../Navigation/Navigation";
import NavigationHighlights from "../NavigationHighlights/NavigationHighlights";

const MainPage = () => {
  const [buildingView, setBuildingView] = useState<1 | 2>(1);
  const [showNavigationHighlightBuilding, setShowNavigationHighlightBuilding] =
    useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string>("Пентхаусы");

  const dispatch = useDispatch();

  const handleChangeView = () => {
    buildingView === 1 ? setBuildingView(2) : setBuildingView(1);
  };

  const [hoverHighlights, setHoverHighlights] = useState<{
    [key: string]: number;
  }>({
    penthouses: 0,
    flats_level3: 0,
    flats_level4: 0,
    flats_level5: 0,
    cityhouses: 0,
    villas: 0,
  });

  const handleVisibilityOnHover = (highlight: string) => () => {
    setHoverHighlights((prev) => ({
      ...prev,
      [highlight]: prev[highlight] === 0 ? 1 : 0,
    }));
  };

  const handleNavigationClick = (title: string) => {
    dispatch(setTitle(title));
    setSelectedTitle(title);
    setShowNavigationHighlightBuilding(true);

    setTimeout(() => {
      setShowNavigationHighlightBuilding(false);
    }, 3000);
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
          <NavigationHighlights
            showNavigationHighlightBuilding={showNavigationHighlightBuilding}
            selectedTitle={selectedTitle}
            buildingView={buildingView}
          />
          {buildingView === 1 && (
            <>
              <img
                className="hover-highlight__penthouses_view1"
                src="penthouses_view1.svg"
                alt="Пентхаусы"
                style={{
                  opacity: hoverHighlights.penthouses,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("penthouses")}
                onMouseLeave={handleVisibilityOnHover("penthouses")}
              />
              <img
                className="hover-highlight__flats_level3_view1"
                src="flats_onelevel_view1.svg"
                alt="Квартиры этаж 3"
                style={{
                  opacity: hoverHighlights.flats_level3,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("flats_level3")}
                onMouseLeave={handleVisibilityOnHover("flats_level3")}
              />
              <img
                className="hover-highlight__flats_level4_view1"
                src="flats_onelevel_view1.svg"
                alt="Квартиры этаж 4"
                style={{
                  opacity: hoverHighlights.flats_level4,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("flats_level4")}
                onMouseLeave={handleVisibilityOnHover("flats_level4")}
              />
              <img
                className="hover-highlight__flats_level5_view1"
                src="flats_level5_view1.png"
                alt="Квартиры этаж 5"
                style={{
                  opacity: hoverHighlights.flats_level5,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("flats_level5")}
                onMouseLeave={handleVisibilityOnHover("flats_level5")}
              />
              <img
                className="hover-highlight__cityhouses1_view1"
                src="cityhouses1_view1.svg"
                alt="Виллы"
                style={{
                  opacity: hoverHighlights.cityhouses,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("cityhouses")}
                onMouseLeave={handleVisibilityOnHover("cityhouses")}
              />
              <img
                className="hover-highlight__cityhouses2_view1"
                src="cityhouses2_view1.svg"
                alt="Виллы"
                style={{
                  opacity: hoverHighlights.cityhouses,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("cityhouses")}
                onMouseLeave={handleVisibilityOnHover("cityhouses")}
              />
              <img
                className="hover-highlight__villas_view1"
                src="villas_view1.svg"
                alt="Виллы"
                style={{
                  opacity: hoverHighlights.villas,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("villas")}
                onMouseLeave={handleVisibilityOnHover("villas")}
              />
            </>
          )}
          {buildingView === 2 && (
            <>
              <img
                className="hover-highlight__penthouses_view2"
                src="penthouses_view2.svg"
                alt="Пентхаусы"
                style={{
                  opacity: hoverHighlights.penthouses,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("penthouses")}
                onMouseLeave={handleVisibilityOnHover("penthouses")}
              />
              <img
                className="hover-highlight__flats_level3_view2"
                src="flats_onelevel_view2.svg"
                alt="Квартиры этаж 3"
                style={{
                  opacity: hoverHighlights.flats_level3,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("flats_level3")}
                onMouseLeave={handleVisibilityOnHover("flats_level3")}
              />
              <img
                className="hover-highlight__flats_level4_view2"
                src="flats_onelevel_view2.svg"
                alt="Квартиры этаж 4"
                style={{
                  opacity: hoverHighlights.flats_level4,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("flats_level4")}
                onMouseLeave={handleVisibilityOnHover("flats_level4")}
              />
              <img
                className="hover-highlight__flats_level5_view2"
                src="flats_onelevel_view2.svg"
                alt="Квартиры этаж 5"
                style={{
                  opacity: hoverHighlights.flats_level5,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("flats_level5")}
                onMouseLeave={handleVisibilityOnHover("flats_level5")}
              />
              <img
                className="hover-highlight__cityhouses_view2"
                src="cityhouses_view2.svg"
                alt="Виллы"
                style={{
                  opacity: hoverHighlights.cityhouses,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("cityhouses")}
                onMouseLeave={handleVisibilityOnHover("cityhouses")}
              />

              <img
                className="hover-highlight__villas_view2"
                src="villas_view2.svg"
                alt="Виллы"
                style={{
                  opacity: hoverHighlights.villas,
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover("villas")}
                onMouseLeave={handleVisibilityOnHover("villas")}
              />
            </>
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
