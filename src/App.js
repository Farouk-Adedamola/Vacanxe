import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import classes from "./App.module.css";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import ContactUs from "./Pages/ContactUs";
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
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="ContactUs" element={<ContactUs />} />
            {/* <Route path="login" element={<Login />} /> */}
            {/* <Route path="signup" element={<Signup />} /> */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
