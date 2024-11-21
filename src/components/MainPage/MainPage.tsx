import Header from "../Header/Header";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <Header title="Пентхаусы" />
      <section className="main-page">
        <div className="img-box">
          <img className="building-img-back" src="background.jpg" alt="фон" />
          <div className="cover"></div>
          <img
            className="building-img"
            src="building_view1.png"
            alt="здание вид1"
          />
        </div>
      </section>
    </>
  );
};

export default MainPage;
