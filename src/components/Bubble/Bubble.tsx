import React from "react";
import "./Bubble.scss";

interface BubbleProps {
  heading: string;
  data: {
    mainText: string;
    area: string;
    price: string;
  };
  style?: React.CSSProperties;
}

const Bubble: React.FC<BubbleProps> = ({ heading, data, style }) => {
  return (
    <div className="bubble" style={style}>
      <div className="bubble__content">
        <h3 className="bubble__heading">{heading}</h3>
        <div className="bubble__data">
          <p>
            <span className="bubble__big-text">{data.mainText}</span>
            <br></br>в продаже
          </p>
          <p>
            <span className="bubble__big-text">{data.area}</span>
            <br></br>площадь
          </p>
          <p>
            <span className="bubble__big-text">{data.price}</span>
            <br></br>стоимость
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bubble;
