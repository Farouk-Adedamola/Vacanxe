import React, { Fragment } from "react";
// import "./App.css";
import classes from "./App.module.css";
import Nav from "./Components/Navigation/Nav";
import Main from "./Components/Main/Main";
import CenterButton from "./Components/CenterButton/CenterButton";
import Card1 from "./Components/Cards/Card1";

function App() {
  return (
    <Fragment>
      <Nav />
      <Main />
      <CenterButton />
      <section className={classes.wrapper}>
        <Card1 />
      </section>
    </Fragment>
  );
}

export default App;
