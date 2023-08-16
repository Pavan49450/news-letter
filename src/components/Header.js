// import react from "react";
import MainNavigation from "./MainNavigation";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.Header}>
      <div className={style.title}>
        <h1>Epaper Title</h1>
      </div>
      <MainNavigation />
    </header>
  );
};

export default Header;
