import React, { Fragment } from "react";
import classes from "./Main.module.css";
import group from "../../Assets/PartnerHero.svg";

const Main = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <div className={classes.content}>
          <h1>
            Find the right <span>talents</span> to fuel your business growth
          </h1>
          <p>
            Join a vibrant community of MSPs to forge long-lasting relationships
            with partners that help you create excellent customer experiences
          </p>
          <div className={classes.group}>
            <img src={group} alt="group" />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Main;
