import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import logo from "../../Assets/logo.svg";
import { Community, AboutUs, Contacts } from "./data";

const Footer = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <img src={logo} alt="logo" />
      </section>
      <section className={classes.secondSection}>
        <div className={classes.first}>
          <p>
            Feel free to get in touch with us via phone or send us a message.
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
    </Fragment>
  );
};

export default Footer;
