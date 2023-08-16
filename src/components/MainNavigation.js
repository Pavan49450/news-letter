import { useState, useEffect } from "react";
import Icons from "../asset/Icons";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
// import NewsletterSignup from "./NewsletterSignup";

function MainNavigation(props) {
  const [hide, setHide] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;

  useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);

  const toggleHandler = () => {
    setHide(!hide);
  };

  return (
    <header className={classes.Header}>
      {width < breakpoint && (
        <div className={classes.hamburger}>
          <span class="material-symbols-outlined" onClick={toggleHandler}>
            menu
          </span>
        </div>
      )}

      <nav
        className={`${classes.Nav} ${
          width < breakpoint && hide ? classes.hide : ""
        }`}
      >
        <ul className={classes.navbar}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : classes.navbar_element
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="aboutus"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navbar_element
              }
            >
              About us
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="downloads"
              className={({ isActive }) =>
                isActive ? classes.active : classes.navbar_element
              }
            >
              Downloads
            </NavLink>
          </li> */}
        </ul>
        <div className={classes.socialMediaIcons}>
          <Icons path="https://facebook.com" socialMedia="fa fa-facebook" />
          <Icons path="https://youtube.com" socialMedia="fa fa-youtube" />
          <Icons path="https://pinterest.com" socialMedia="fa fa-pinterest" />
          <Icons path="https://instagram.com" socialMedia="fa fa-instagram" />
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
