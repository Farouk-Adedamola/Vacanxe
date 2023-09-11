import { React, Fragment } from "react";
// import { Fragment } from "react";
import Build from "../Components/BuildSection/Build";
import classes from "./AboutUs.module.css";
import Footer from "../Components/Footer/Footer";
const ContactUs = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <Build />
      </section>
      <Footer />
    </Fragment>
  );
};

export default ContactUs;
