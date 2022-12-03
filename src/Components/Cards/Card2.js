import React, { Fragment } from "react";
import classes from "./Card2.module.css";
import { BsArrowRight } from "react-icons/bs";
import group2 from "../../Assets/group3.svg";

const Card2 = () => {
  return (
    <Fragment>
      <main className={classes.main}>
        <section className={classes.secondSection}>
          <img src={group2} alt="group2" />
        </section>
        <section className={classes.section}>
          <h2>Your Job Posting is on Steroids</h2>
          <p>
            Gain brand authority and visibility with the help of the largest IT
            service ecosystem. Find customers who are looking for your solution
            right now!
          </p>
          <div className={classes.wrap}>
            <div>
              <a href="/">Signup now</a>
            </div>
            <BsArrowRight />
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Card2;
