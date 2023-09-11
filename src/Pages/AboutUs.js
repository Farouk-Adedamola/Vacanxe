import { React, Fragment } from "react";
import Card1 from "../Components/Cards/Card1";
import Card2 from "../Components/Cards/Card2";
import classes from "./Home.module.css";
import Footer from "../Components/Footer/Footer";

const AboutUs = () => {
  return (
    <Fragment>
      <section className={classes.wrapper}>
        <Card1 />
        <Card2 />
      </section>
      <Footer />
    </Fragment>
  );
};

export default AboutUs;
