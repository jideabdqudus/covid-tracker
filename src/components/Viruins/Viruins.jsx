import React from "react";
import styles from "./Viruins.module.css"
import cx from "classnames"

const Viruins = () => {
  return (
    <div>
      <div className={cx(styles.container, styles.fullHeightGrow)}>
        <header className="main-header">
          <a href="/" className="brand-logo">
            <h3 className="brand-logo-name">Viruins</h3>
          </a>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="#">Try it for free</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="home-main-section">
          <div className="img-wrapper">
            <div className="lady-image"></div>
          </div>
          <div className="call-to-action">
            <b className="title">COVID TRACKER</b>
            <span className="subtitle">
              The COVID-19 health tracker platform provides you with
              multichannel information and update on the Coronavirus
            </span>
            <a href="#!" className="btn">
              Try it for free
            </a>
          </div>
        </section>
        <img className="home-page-circle-1" src="./images/feedingvir.png"></img>
        <img className="home-page-circle-2" src="./images/polyvir.png"></img>
        <img className="home-page-circle-3" src="./images/sanitizera.png"></img>
        <img className="home-page-circle-4" src="./images/washhandvir.png"></img>
        <img className="home-page-circle-6" src="./images/bumblevir.png"></img>
        <img className="home-page-circle-7" src="./images/feedingvir.png"></img>
        <img className="home-page-circle-10" src="./images/washhandvir.png"></img>
      </div>
    </div>
  );
};

export default Viruins;
