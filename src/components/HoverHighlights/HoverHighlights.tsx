import { useState } from "react";
import "./HoverHighlights.scss";

interface HoverHighlightsProps {
  buildingView: 1 | 2;
}

const HoverHighlights: React.FC<HoverHighlightsProps> = ({ buildingView }) => {
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

  const highlightImageConfigs = [
    {
      view: 1,
      className: "hover-highlight__penthouses_view1",
      src: "penthouses_view1.svg",
      alt: "Пентхаусы",
      highlightKey: "penthouses",
    },
    {
      view: 1,
      className: "hover-highlight__flats_level3_view1",
      src: "flats_onelevel_view1.svg",
      alt: "Квартиры этаж 3",
      highlightKey: "flats_level3",
    },
    {
      view: 1,
      className: "hover-highlight__flats_level4_view1",
      src: "flats_onelevel_view1.svg",
      alt: "Квартиры этаж 4",
      highlightKey: "flats_level4",
    },
    {
      view: 1,
      className: "hover-highlight__flats_level5_view1",
      src: "flats_level5_view1.png",
      alt: "Квартиры этаж 5",
      highlightKey: "flats_level5",
    },
    {
      view: 1,
      className: "hover-highlight__cityhouses1_view1",
      src: "cityhouses1_view1.svg",
      alt: "Ситихаусы 1",
      highlightKey: "cityhouses",
    },
    {
      view: 1,
      className: "hover-highlight__cityhouses2_view1",
      src: "cityhouses2_view1.svg",
      alt: "Ситихаусы 2",
      highlightKey: "cityhouses",
    },
    {
      view: 1,
      className: "hover-highlight__villas_view1",
      src: "villas_view1.svg",
      alt: "Виллы",
      highlightKey: "villas",
    },
    {
      view: 2,
      className: "hover-highlight__penthouses_view2",
      src: "penthouses_view2.svg",
      alt: "Пентхаусы",
      highlightKey: "penthouses",
    },
    {
      view: 2,
      className: "hover-highlight__flats_level3_view2",
      src: "flats_onelevel_view2.svg",
      alt: "Квартиры этаж 3",
      highlightKey: "flats_level3",
    },
    {
      view: 2,
      className: "hover-highlight__flats_level4_view2",
      src: "flats_onelevel_view2.svg",
      alt: "Квартиры этаж 4",
      highlightKey: "flats_level4",
    },
    {
      view: 2,
      className: "hover-highlight__flats_level5_view2",
      src: "flats_onelevel_view2.svg",
      alt: "Квартиры этаж 5",
      highlightKey: "flats_level5",
    },
    {
      view: 2,
      className: "hover-highlight__cityhouses_view2",
      src: "cityhouses_view2.svg",
      alt: "Виллы",
      highlightKey: "cityhouses",
    },
    {
      view: 2,
      className: "hover-highlight__villas_view2",
      src: "villas_view2.svg",
      alt: "Виллы",
      highlightKey: "villas",
    },
  ];

  return (
    <>
      {highlightImageConfigs.map(
        (config) =>
          buildingView === config.view && (
            <img
              key={config.className}
              className={config.className}
              src={config.src}
              alt={config.alt}
              style={{
                opacity: hoverHighlights[config.highlightKey],
                transition: "opacity 0.7s ease",
                position: "absolute",
              }}
              onMouseEnter={handleVisibilityOnHover(config.highlightKey)}
              onMouseLeave={handleVisibilityOnHover(config.highlightKey)}
            />
          )
      )}
    </>
  );
};

export default HoverHighlights;

//Старая неоптимизированная версия подсветки через наведения на части здания, на всякий случай пусть будет сохранена
//Old version of highlighting based on hovering on different parts of the building. Let it be here to be on the safe side
// const [hoverHighlights, setHoverHighlights] = useState<{
//     [key: string]: number;
//   }>({
//     penthouses: 0,
//     flats_level3: 0,
//     flats_level4: 0,
//     flats_level5: 0,
//     cityhouses: 0,
//     villas: 0,
//   });

// {buildingView === 1 && (
//     <>
//       <img
//         className="hover-highlight__penthouses_view1"
//         src="penthouses_view1.svg"
//         alt="Пентхаусы"
//         style={{
//           opacity: hoverHighlights.penthouses,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("penthouses")}
//         onMouseLeave={handleVisibilityOnHover("penthouses")}
//       />
//       <img
//         className="hover-highlight__flats_level3_view1"
//         src="flats_onelevel_view1.svg"
//         alt="Квартиры этаж 3"
//         style={{
//           opacity: hoverHighlights.flats_level3,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("flats_level3")}
//         onMouseLeave={handleVisibilityOnHover("flats_level3")}
//       />
//       <img
//         className="hover-highlight__flats_level4_view1"
//         src="flats_onelevel_view1.svg"
//         alt="Квартиры этаж 4"
//         style={{
//           opacity: hoverHighlights.flats_level4,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("flats_level4")}
//         onMouseLeave={handleVisibilityOnHover("flats_level4")}
//       />
//       <img
//         className="hover-highlight__flats_level5_view1"
//         src="flats_level5_view1.png"
//         alt="Квартиры этаж 5"
//         style={{
//           opacity: hoverHighlights.flats_level5,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("flats_level5")}
//         onMouseLeave={handleVisibilityOnHover("flats_level5")}
//       />
//       <img
//         className="hover-highlight__cityhouses1_view1"
//         src="cityhouses1_view1.svg"
//         alt="Виллы"
//         style={{
//           opacity: hoverHighlights.cityhouses,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("cityhouses")}
//         onMouseLeave={handleVisibilityOnHover("cityhouses")}
//       />
//       <img
//         className="hover-highlight__cityhouses2_view1"
//         src="cityhouses2_view1.svg"
//         alt="Виллы"
//         style={{
//           opacity: hoverHighlights.cityhouses,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("cityhouses")}
//         onMouseLeave={handleVisibilityOnHover("cityhouses")}
//       />
//       <img
//         className="hover-highlight__villas_view1"
//         src="villas_view1.svg"
//         alt="Виллы"
//         style={{
//           opacity: hoverHighlights.villas,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("villas")}
//         onMouseLeave={handleVisibilityOnHover("villas")}
//       />
//     </>
//   )}
//   {buildingView === 2 && (
//     <>
//       <img
//         className="hover-highlight__penthouses_view2"
//         src="penthouses_view2.svg"
//         alt="Пентхаусы"
//         style={{
//           opacity: hoverHighlights.penthouses,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("penthouses")}
//         onMouseLeave={handleVisibilityOnHover("penthouses")}
//       />
//       <img
//         className="hover-highlight__flats_level3_view2"
//         src="flats_onelevel_view2.svg"
//         alt="Квартиры этаж 3"
//         style={{
//           opacity: hoverHighlights.flats_level3,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("flats_level3")}
//         onMouseLeave={handleVisibilityOnHover("flats_level3")}
//       />
//       <img
//         className="hover-highlight__flats_level4_view2"
//         src="flats_onelevel_view2.svg"
//         alt="Квартиры этаж 4"
//         style={{
//           opacity: hoverHighlights.flats_level4,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("flats_level4")}
//         onMouseLeave={handleVisibilityOnHover("flats_level4")}
//       />
//       <img
//         className="hover-highlight__flats_level5_view2"
//         src="flats_onelevel_view2.svg"
//         alt="Квартиры этаж 5"
//         style={{
//           opacity: hoverHighlights.flats_level5,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("flats_level5")}
//         onMouseLeave={handleVisibilityOnHover("flats_level5")}
//       />
//       <img
//         className="hover-highlight__cityhouses_view2"
//         src="cityhouses_view2.svg"
//         alt="Виллы"
//         style={{
//           opacity: hoverHighlights.cityhouses,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("cityhouses")}
//         onMouseLeave={handleVisibilityOnHover("cityhouses")}
//       />

//       <img
//         className="hover-highlight__villas_view2"
//         src="villas_view2.svg"
//         alt="Виллы"
//         style={{
//           opacity: hoverHighlights.villas,
//           transition: "opacity 0.7s ease",
//         }}
//         onMouseEnter={handleVisibilityOnHover("villas")}
//         onMouseLeave={handleVisibilityOnHover("villas")}
//       />
//     </>
//   )}
