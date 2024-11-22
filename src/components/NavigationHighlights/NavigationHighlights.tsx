import './NavigationHighlights.scss';

interface NavigationHighlightsProps {
  showNavigationHighlightBuilding: boolean;
  selectedTitle: string;
  buildingView: 1 | 2;
}

const NavigationHighlights: React.FC<NavigationHighlightsProps> = ({
  showNavigationHighlightBuilding,
  selectedTitle,
  buildingView,
}) => {
  if (!showNavigationHighlightBuilding) return null;

  const getHighlightImages = () => {
    switch (selectedTitle) {
      case "Пентхаусы":
        return (
          <img
            className={`highlight__penthouses_view${buildingView}`}
            src={`penthouses_view${buildingView}.svg`}
            alt={`подсветка пентхаусов вид${buildingView}`}
          />
        );
      case "Квартиры":
        return (
          <img
            className={`highlight__flats_view${buildingView}`}
            src={`flats_view${buildingView}.svg`}
            alt={`подсветка квартир вид${buildingView}`}
          />
        );
      case "Ситихаусы":
        return buildingView === 1 ? (
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
        ) : (
          <img
            className="highlight__cityhouses_view2"
            src="cityhouses_view2.svg"
            alt="подсветка ситихаусов вид2"
          />
        );
      case "Виллы":
        return (
          <img
            className={`highlight__villas_view${buildingView}`}
            src={`villas_view${buildingView}.svg`}
            alt={`подсветка вилл вид${buildingView}`}
          />
        );
      default:
        return null;
    }
  };

  return <>{getHighlightImages()}</>;
};

export default NavigationHighlights;

//Старая и более корявая версия подсветки, на всякий случай пусть будет сохранена
//Old version of highlighting provided by navigation clicks. Let it be here to be on the safe side 
{/* {buildingView === 1 &&
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
            )} */}