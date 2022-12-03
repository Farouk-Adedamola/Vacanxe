import React, { Fragment } from "react";
import classes from "./CenterButton.module.css";

const CenterButton = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <button>
          <a href="/" className={classes.first}>
            Core Services
          </a>
        </button>
        <button>
          <a href="/" className={classes.second}>
            Better Recruitment
          </a>
        </button>
      </section>
    </Fragment>
  );
};

export default CenterButton;
