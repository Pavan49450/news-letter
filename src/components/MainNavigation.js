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
  const contactUsExpandAnimation = useSpring({
    width: showContactUs ? "100%" : "0%",
    position: "relative",
    left: showContactUs ? "0%" : "100%",
    opacity: showContactUs ? 1 : 0,
    transition: "all 0.2s ease",
  });

  // const menubarExpandAnimation = useSpring({
  //   height: hide ? "100%" : "0px",
  //   // position: "relative",
  //   // top: hide ? "0%" : "100%",
  //   // opacity: hide ? 1 : 0,
  //   transition: "all 0.2s ease",
  // });

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

      <animated.div
        className={`${classes.Nav} ${
          width < breakpoint && !hide ? classes.hide : ""
        }`}
        // style={menubarExpandAnimation}
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
              &nbsp;Home
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
              &nbsp;About us
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
          <animated.div
            className={classes.socialMediaIcons}
            style={{
              ...contactUsExpandAnimation,
            }}
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
          <div
            onClick={showContactUsHandler}
            // className={showContactUs ? classes.arrowBtn : classes.ContactUsBtn}
            style={{ height: "24px" }}
          >
            {showContactUs ? (
              <span
                class="material-symbols-outlined"
                style={{ cursor: "pointer" }}
              >
                arrow_right
              </span>
            ) : (
              <span className={classes.ContactUsBtn} title="contact">
                Contact us
              </span>
            )}
          </div>
        </div>
      </animated.div>
    </header>
  );
}

export default MainNavigation;
