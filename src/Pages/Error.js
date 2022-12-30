import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page does not exist</p>
      <Link to="/" className="">
        Start here
      </Link>
    </div>
  );
};

export default Error;
