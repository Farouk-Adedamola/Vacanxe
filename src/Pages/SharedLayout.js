import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Navigation/Nav";

const SharedLayout = () => {
  return (
    <Fragment>
      <Nav />
      <Outlet />
    </Fragment>
  );
};

export default SharedLayout;
