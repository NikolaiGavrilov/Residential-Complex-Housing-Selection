import { useState } from "react";
import "./HoverHighlights.scss";
import Bubble from "../Bubble/Bubble";

interface HoverHighlightsProps {
  buildingView: 1 | 2;
}

interface HighlightImageConfig {
  view: 1 | 2;
  className: string;
  src: string;
  alt: string;
  highlightKey: string;
  bubbleData: {
    heading: string;
    data: {
      mainText: string;
      area: string;
      price: string;
    };
  };
}

const HoverHighlights: React.FC<HoverHighlightsProps> = ({ buildingView }) => {
  const [showBubble, setShowBubble] = useState(false);
  const [bubblePosition, setBubblePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const [bubbleData, setBubbleData] = useState<{ heading: string; data: any }>({
    heading: "",
    data: {},
  });
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

  // Старая версия функции наведения мыши для отображения баббла сбоку
  // const handleMouseEnter = (config: HighlightImageConfig) => {
  //   setShowBubble(true);
  //   setBubbleData(config.bubbleData);
  //   const rect = document
  //     .querySelector(`.${config.className}`)
  //     ?.getBoundingClientRect();
  //   if (rect) {
  //     setBubblePosition({ x: rect.left + rect.width + 15, y: rect.top });
  //   }
  // };

  // Новая версия функции наведения мыши для отображения баббла рядом с курсором
  const handleMouseEnter = (config: HighlightImageConfig) => {
    setShowBubble(true);
    setBubbleData(config.bubbleData);

    const mouseMoveListener = (event: MouseEvent) => {
      setBubblePosition({ x: event.pageX + 15, y: event.pageY - 120 });
    };

    document.addEventListener("mousemove", mouseMoveListener);

    const rect = document
      .querySelector(`.${config.className}`)
      ?.getBoundingClientRect();
    if (rect) {
      setBubblePosition({ x: rect.left + rect.width + 15, y: rect.top - 120 });
    }
  };

  const handleMouseLeave = () => {
    setShowBubble(false);
  };

  const highlightImageConfigs: HighlightImageConfig[] = [
    {
      view: 1,
      className: "hover-highlight__penthouses_view1",
      src: "penthouses_view1.svg",
      alt: "Пентхаусы",
      highlightKey: "penthouses",
      bubbleData: {
        heading: "Пентхаусы",
        data: {
          mainText: "4 пентхауса",
          area: "от 200 м²",
          price: "от 320 000 000 ₽",
        },
      },
    },
    {
      view: 1,
      className: "hover-highlight__flats_level3_view1",
      src: "flats_onelevel_view1.svg",
      alt: "Квартиры этаж 3",
      highlightKey: "flats_level3",
      bubbleData: {
        heading: "3 этаж",
        data: {
          mainText: "12 квартир",
          area: "от 50 м²",
          price: "от 65 000 000 ₽",
        },
      },
    },
    {
      view: 1,
      className: "hover-highlight__flats_level4_view1",
      src: "flats_onelevel_view1.svg",
      alt: "Квартиры этаж 4",
      highlightKey: "flats_level4",
      bubbleData: {
        heading: "4 этаж",
        data: {
          mainText: "12 квартир",
          area: "от 50 м²",
          price: "от 70 000 000 ₽",
        },
      },
    },
    {
      view: 1,
      className: "hover-highlight__flats_level5_view1",
      src: "flats_level5_view1.png",
      alt: "Квартиры этаж 5",
      highlightKey: "flats_level5",
      bubbleData: {
        heading: "5 этаж",
        data: {
          mainText: "10 квартир",
          area: "от 75 м²",
          price: "от 100 000 000 ₽",
        },
      },
    },
    {
      view: 1,
      className: "hover-highlight__cityhouses1_view1",
      src: "cityhouses1_view1.svg",
      alt: "Ситихаусы 1",
      highlightKey: "cityhouses",
      bubbleData: {
        heading: "1-2 этажи",
        data: {
          mainText: "6 ситихаусов",
          area: "от 120 м²",
          price: "от 170 000 000 ₽",
        },
      },
    },
    {
      view: 1,
      className: "hover-highlight__cityhouses2_view1",
      src: "cityhouses2_view1.svg",
      alt: "Ситихаусы 2",
      highlightKey: "cityhouses",
      bubbleData: {
        heading: "1-2 этажи",
        data: {
          mainText: "6 ситихаусов",
          area: "от 120 м²",
          price: "от 170 000 000 ₽",
        },
      },
    },
    {
      view: 1,
      className: "hover-highlight__villas_view1",
      src: "villas_view1.svg",
      alt: "Виллы",
      highlightKey: "villas",
      bubbleData: {
        heading: "Виллы",
        data: {
          mainText: "3 виллы",
          area: "от 300 м²",
          price: "от 510 000 000 ₽",
        },
      },
    },
    {
      view: 2,
      className: "hover-highlight__penthouses_view2",
      src: "penthouses_view2.svg",
      alt: "Пентхаусы",
      highlightKey: "penthouses",
      bubbleData: {
        heading: "Пентхаусы",
        data: {
          mainText: "4 пентхауса",
          area: "от 200 м²",
          price: "от 320 000 000 ₽",
        },
      },
    },
    {
      view: 2,
      className: "hover-highlight__flats_level3_view2",
      src: "flats_onelevel_view2.svg",
      alt: "Квартиры этаж 3",
      highlightKey: "flats_level3",
      bubbleData: {
        heading: "3 этаж",
        data: {
          mainText: "12 квартир",
          area: "от 50 м²",
          price: "от 65 000 000 ₽",
        },
      },
    },
    {
      view: 2,
      className: "hover-highlight__flats_level4_view2",
      src: "flats_onelevel_view2.svg",
      alt: "Квартиры этаж 4",
      highlightKey: "flats_level4",
      bubbleData: {
        heading: "4 этаж",
        data: {
          mainText: "12 квартир",
          area: "от 50 м²",
          price: "от 70 000 000 ₽",
        },
      },
    },
    {
      view: 2,
      className: "hover-highlight__flats_level5_view2",
      src: "flats_onelevel_view2.svg",
      alt: "Квартиры этаж 5",
      highlightKey: "flats_level5",
      bubbleData: {
        heading: "5 этаж",
        data: {
          mainText: "10 квартир",
          area: "от 75 м²",
          price: "от 100 000 000 ₽",
        },
      },
    },
    {
      view: 2,
      className: "hover-highlight__cityhouses_view2",
      src: "cityhouses_view2.svg",
      alt: "Ситихаусы",
      highlightKey: "cityhouses",
      bubbleData: {
        heading: "1-2 этажи",
        data: {
          mainText: "6 ситихаусов",
          area: "от 100 м²",
          price: "от 170 000 000 ₽",
        },
      },
    },
    {
      view: 2,
      className: "hover-highlight__villas_view2",
      src: "villas_view2.svg",
      alt: "Виллы",
      highlightKey: "villas",
      bubbleData: {
        heading: "Виллы",
        data: {
          mainText: "3 виллы",
          area: "от 300 м²",
          price: "от 510 000 000 ₽",
        },
      },
    },
  ];

  return (
    <>
      {highlightImageConfigs.map(
        (config) =>
          buildingView === config.view && (
            <div
              key={config.className}
              className={config.className}
              onMouseEnter={() => handleMouseEnter(config)}
              onMouseLeave={handleMouseLeave}
              style={{ position: "absolute" }}
            >
              <img
                src={config.src}
                alt={config.alt}
                style={{
                  opacity: hoverHighlights[config.highlightKey],
                  transition: "opacity 0.7s ease",
                }}
                onMouseEnter={handleVisibilityOnHover(config.highlightKey)}
                onMouseLeave={handleVisibilityOnHover(config.highlightKey)}
              />
            </div>
          )
      )}
      {showBubble && (
        <Bubble
          heading={bubbleData.heading}
          data={bubbleData.data}
          style={{
            left: `${bubblePosition.x}px`,
            top: `${bubblePosition.y}px`,
            position: "fixed",
            cursor: "pointer",
          }}
        />
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
