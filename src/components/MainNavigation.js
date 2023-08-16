import { useState, useEffect } from "react";
import Icons from "../asset/Icons";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function MainNavigation(props) {
  const [hide, setHide] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  const [showContactUs, setShowContactUs] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const toggleHandler = () => {
    setHide(!hide);
  };

  const showContactUsHandler = () => {
    setShowContactUs(!showContactUs);
  };
  const expandAnimation = useSpring({
    // marginRight: showContactUs ? "5%" : "0%",
    opacity: showContactUs ? 1 : 0,
    transition: "all 0.2s ease",
  });

  // Animation spring config for collapsing
  const collapseAnimation = useSpring({
    width: showContactUs ? "0%" : "100%",
    opacity: showContactUs ? 0 : 1,
  });

  return (
    <header className={classes.Header}>
      {width < breakpoint && (
        <div className={classes.hamburger}>
          <span
            class="material-symbols-outlined"
            onClick={toggleHandler}
            title="MenuBar"
          >
            menu
          </span>
        </div>
      )}

      <nav
        className={`${classes.Nav} ${
          width < breakpoint && !hide ? classes.hide : ""
        }`}
      >
        <ul className={classes.navbar}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : classes.navbar_element
              }
              title="Home Link"
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
              title="About us link"
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
        <div className={classes.links}>
          {showContactUs && (
            <animated.div
              className={classes.socialMediaIcons}
              style={showContactUs && expandAnimation}
            >
              <Icons
                path="https://facebook.com"
                socialMedia="fa fa-facebook"
                title="Facebook link"
              />
              <Icons
                path="https://youtube.com"
                socialMedia="fa fa-youtube"
                title="youtube link"
              />
              <Icons
                path="https://pinterest.com"
                socialMedia="fa fa-pinterest"
                title="pinterest link"
              />
              <Icons
                path="https://instagram.com"
                socialMedia="fa fa-instagram"
                title="Instagram link"
              />
            </animated.div>
          )}
          <span
            onClick={showContactUsHandler}
            // className={showContactUs ? classes.arrowBtn : classes.ContactUsBtn}
            style={expandAnimation}
          >
            {showContactUs ? (
              <span
                class="material-symbols-outlined"
                style={{ cursor: "pointer" }}
              >
                arrow_right
              </span>
            ) : (
              <span className={classes.ContactUsBtn}>Contact us</span>
            )}
          </span>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
