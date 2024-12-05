import React from 'react';
import './Bubble.scss';

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
          </p>
          <p>
            <span className="bubble__big-text">{data.area}</span>
          </p>
          <p>
            <span className="bubble__big-text">{data.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bubble;