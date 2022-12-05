import React, { Fragment, useState, useRef, useEffect } from "react";
import logo from "../../Assets/logo.svg";
import { links, secondLink } from "./data";
import classes from "./Nav.module.css";
import { BiMenuAltRight } from "react-icons/bi";
// import { RxCross1 } from "react-icons/rx";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  // const [fix, setFix] = useState(false);

  useEffect(() => {
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
              <BiMenuAltRight
                style={{
                  rotate: "45deg",
                  transition: "all .5s",
                  color: "#222222",
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
              const { id, link, CSS } = eachLink;
              return (
                <li key={id}>
                  <a href="/" className={classes.first} style={CSS}>
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul id="secondlinks" className={classes.secondLink} ref={linksRef}>
            {secondLink.map((eachLink) => {
              const { id, link } = eachLink;
              return (
                <li key={id}>
                  <a href="/" className={classes.second}>
                    {link}
                  </a>
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
