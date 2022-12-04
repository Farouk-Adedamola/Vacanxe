import React, { Fragment } from "react";
// import "./App.css";
import classes from "./App.module.css";
import Nav from "./Components/Navigation/Nav";
import Main from "./Components/Main/Main";
import CenterButton from "./Components/CenterButton/CenterButton";
import Card1 from "./Components/Cards/Card1";
import Card2 from "./Components/Cards/Card2";
import Card3 from "./Components/Cards/Card3";
import Build from "./Components/BuildSection/Build";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Nav />
      {/* <Main /> */}
      <CenterButton />
      <section className={classes.wrapper}>
        <Card1 />
        <Card2 />
        <Card3 />
      </section>
      <section className={classes.section}>
        <Build />
      </section>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
