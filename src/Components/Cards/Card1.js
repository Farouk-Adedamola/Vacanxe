import React, { Fragment } from "react";
import classes from "./Card1.module.css";
import { BsArrowRight } from "react-icons/bs";
import group1 from "../../Assets/Group2.svg";

const Card1 = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        <section className={classes.section}>
          <h2>Get The best version of young talents</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={classes.wrap}>
            <div>
              <a href="/">Signup now</a>
            </div>
            <BsArrowRight />
          </div>
        </section>
        <section className={classes.secondSection}>
          <img src={group1} alt="group1" />
        </section>
      </main>
    </Fragment>
  );
};

export default Card1;
