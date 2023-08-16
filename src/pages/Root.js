// import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import style from "./Root.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Root = () => {
  return (
    <div>
      <Header />
      <main className={style.Main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
