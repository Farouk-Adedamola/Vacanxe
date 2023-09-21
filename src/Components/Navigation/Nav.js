import React, { Fragment, useState, useRef, useEffect } from "react";
import logo from "../../Assets/logo.svg";
import { links, secondLink } from "./data";
import classes from "./Nav.module.css";
import { BiMenuAltRight } from "react-icons/bi";
// import { RxCross1 } from "react-icons/rx";
import { GiCrossMark } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  // const [fix, setFix] = useState(false);

  useEffect(() => {
    setTimeout(() => {});
    if (toggle) {
      linksContainerRef.current.style.height = `${100}vh`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [toggle]);
  return (
    <Fragment>
      <section className={classes.section}>
        <div className={classes.image}>
          <img src={logo} alt="logo" />
          <button
            id="button"
            type="button"
            style={{ transition: "all .6s" }}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <GiCrossMark
                style={{
                  rotate: "45deg",
                  transition: "all .5s",
                  color: "#222222",
                  fontSize: "1.7rem",
                  color: "#ffae1b",
                }}
              />
            ) : (
              <BiMenuAltRight style={{ transition: "all .5s" }} />
            )}
          </button>
        </div>
        <article className={classes.article} ref={linksContainerRef}>
          <ul id="links" ref={linksRef} className={classes.firstLink}>
            {links.map((eachLink) => {
              const { id, link, path } = eachLink;
              return (
                <li key={id}>
                  <NavLink
                    to={path}
                    className={classes.first}
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "3px solid #4EB9E3" : "none",
                      };
                    }}
                  >
                    {link}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        
        </article>
      </section>
    </Fragment>
  );
};

export default Nav;
