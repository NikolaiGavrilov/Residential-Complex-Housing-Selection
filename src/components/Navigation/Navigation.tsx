import "./Navigation.scss";

interface NavigationProps {
  onNavigationClick: (title: string) => void;
  isNavVisible: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  onNavigationClick,
  isNavVisible,
}) => {
  const navStyle = {
    transition: "transform 0.7s ease",
    transform: isNavVisible ? "translateX(0)" : "translateX(-100%)",
  };

  return (
    <nav className="navigation" style={navStyle}>
      <div className="navigation__items">
        {["Пентхаусы", "Квартиры", "Ситихаусы", "Виллы"].map((item) => (
          <div
            className="navigation__item"
            onClick={() => onNavigationClick(item)}
            key={item}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
