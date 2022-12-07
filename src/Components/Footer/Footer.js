import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import logo from "../../Assets/logo.svg";
import { FaTwitter, FaFacebook, FaGoogle } from "react-icons/fa";

import oval from "../../Assets/Oval.svg";
import { Community, AboutUs, Contacts } from "./data";

const Footer = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <div className={classes.image}>
          <img src={oval} alt="oval" />
          {/* <img src={logo} alt="logo" /> */}
        </div>
      </section>
      <section className={classes.secondSection}>
        <div className={classes.first}>
          <p>
            Your ulitmate email solution to grow business and engaging with
            future customers and clients.
          </p>
          <button>
            <a href="/">Ask Question</a>
          </button>
        </div>
        <main className={classes.main}>
          <div className={classes.container}>
            <ul>
              <h4>Community</h4>
              {Community.map((each) => {
                const { id, name } = each;
                return (
                  <li key={id}>
                    <a href="/">{name}</a>
                  </li>
                );
              })}
            </ul>
            <ul>
              <h4>About Us</h4>
              {AboutUs.map((each) => {
                const { id, name } = each;
                return (
                  <li key={id}>
                    <a href="/">{name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={classes.contacts}>
            <h4>Contacts</h4>
            {Contacts.map((text) => {
              const { id, name } = text;
              return (
                <div key={id} className={classes.contactText}>
                  <p>{name}</p>
                </div>
              );
            })}
          </div>
        </main>
      </section>
      <div className={classes.overall}>
        <div className={classes.underline}></div>
        <div className={classes.last}>
          <div className={classes.baseline}>
            <p>&copy;Vacanxe 2022, All Rights Reserved</p>
            <div className={classes.logoFlex}>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
