import React from "react";
import styles from "./Viruins.module.css";
import cx from "classnames";
import feeding from "./images/feedingvir.png";
import sanitize from "./images/sanitizera.png";
import wash from "./images/washhandvir.png";
import bumble from "./images/bumblevir.png";
import polyvir from "./images/polyvir.png";
import xviruins from "./images/Xviruins.png";

const Viruins = () => {
  return (
    <div>
      <div className={cx(styles.container, styles.fullHeightGrow)}>
        <header className={styles.mainHeader}>
          <a href="#!" className={styles.brandLogo}>
            <h3 className={styles.brandLogoName}>Viruins</h3>
          </a>
          <nav className={styles.mainNav}>
            <ul>
              <li>
                <a href="#cards">Try it for free</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className={styles.homeMainSection}>
          <div className={styles.imgWrapper}>
            <img
              className={styles.ladyImage}
              src={xviruins}
              alt="Phone App"
            ></img>
          </div>
          <div className={styles.callToAction}>
            <b className={styles.title}>COVID TRACKER</b>
            <span className={styles.subtitle}>
              The COVID-19 health tracker platform provides you with
              multichannel information and update on the Coronavirus
            </span>
            <a href="#cards" className={styles.btn}>
              Try it for free
            </a>
          </div>
        </section>
        <img
          className={styles.homePageCircle1}
          src={feeding}
          alt="bacteria_img"
        ></img>
        <img
          className={styles.homePageCircle2}
          src={polyvir}
          alt="bacteria_img"
        ></img>
        <img
          className={styles.homePageCircle3}
          src={sanitize}
          alt="bacteria_img"
        ></img>
        <img
          className={styles.homePageCircle4}
          src={wash}
          alt="bacteria_img"
        ></img>
        <img
          className={styles.homePageCircle6}
          src={bumble}
          alt="bacteria_img"
        ></img>
        <img
          className={styles.homePageCircle7}
          src={feeding}
          alt="bacteria_img"
        ></img>
        <img
          className={styles.homePageCircle10}
          src={wash}
          alt="bacteria_img"
        ></img>
      </div>
    </div>
  );
};

export default Viruins;
