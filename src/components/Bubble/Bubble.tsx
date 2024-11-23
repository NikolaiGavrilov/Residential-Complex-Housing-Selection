import "./Bubble.scss";

const Bubble = () => {
  return (
    <div className="bubble">
      <div className="bubble__body">
        <h3 className="bubble__heading">1 этаж</h3>
        <p>
          <span className="bubble__big-text">3</span>{" "}
          <span className="bubble__type-of-housing">ситихауса</span>
          <br></br>в продаже
        </p>
        <p>
          <span className="bubble__big-text">от 120 м²</span>
          <br></br>площадь
        </p>
        <p>
          <span className="bubble__big-text">от 310 000 000 ₽</span>
          <br></br>стоимость
        </p>
      </div>
    </div>
  );
};

export default Bubble;
