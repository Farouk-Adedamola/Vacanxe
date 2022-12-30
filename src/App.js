import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import classes from "./App.module.css";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Program from "./Pages/Program";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import SharedLayout from "./Pages/SharedLayout";

function App() {
  return (
    // <Home />
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="program" element={<Program />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
