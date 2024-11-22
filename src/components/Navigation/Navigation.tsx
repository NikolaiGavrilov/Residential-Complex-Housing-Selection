import './Navigation.scss';

interface NavigationProps {
    onNavigationClick: (title: string) => void;
  }

  const Navigation: React.FC<NavigationProps> = ({ onNavigationClick }) => {
    return (
      <nav className="navigation">
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