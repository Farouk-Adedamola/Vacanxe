import React, { Fragment } from "react";
import classes from "./Card1.module.css";
import { BsArrowRight } from "react-icons/bs";
import group3 from "../../Assets/group4.svg";

const Card3 = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        <section className={classes.section}>
          <h2>It’s like having Your Recruitment on autopilot</h2>
          <p>
            Share collaterals and documents that are automatically branded.
            Leverage a rich partner network that sells your solution exactly the
            way your best salesman would.
          </p>
          <div className={classes.wrap}>
            <div>
              <a href="/">Signup now</a>
            </div>
            <BsArrowRight />
          </div>
        </section>
        <section className={classes.secondSection}>
          <img src={group3} alt="group1" />
        </section>
      </main>
    </Fragment>
  );
};

export default Card3;
