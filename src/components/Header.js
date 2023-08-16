// import react from "react";
import MainNavigation from "./MainNavigation";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.Header}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div className={style.title}>
        <h1>Epaper Title</h1>
      </div>
      <MainNavigation />
    </header>
  );
};

export default Header;
