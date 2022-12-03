import React, { Fragment, useState } from "react";
import classes from "./Build.module.css";
import { CgPhone } from "react-icons/cg";
import { VscLocation, VscMail } from "react-icons/vsc";

const Build = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <main className={classes.main}>
        <section className={classes.section}>
          <div className={classes.container}>
            <h1>Build Your Dream Team!</h1>
            <div className={classes.underline}></div>
            <p>
              Start your team development with a free consultation. Fill out the
              form and a Vacanxe representative will contact you.
            </p>
          </div>
          <form onSubmit={submitHandler} className={classes.form}>
            <label>Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="">Your email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="">Your phone number</label>
            <input
              type="number"
              placeholder="Enter your number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <label htmlFor="">Your company name</label>
            <input
              type="text"
              placeholder="Enter your company name"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
            <label>message</label>
            <textarea
              placeholder="type here.."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <div className={classes.button}>
              <button type="submit">Consult with us</button>
            </div>
          </form>
        </section>
        <section className={classes.secondSection}>
          <h2>Contact info:</h2>
          <div>
            <VscLocation />
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
          <div>
            <CgPhone />
            <p>(505) 555-0119</p>
            <p>(505) 555-0120</p>
            <p>(505) 555-0125</p>
          </div>
          <div>
            <VscMail />
            <p>consult@vacanxe.com</p>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Build;
