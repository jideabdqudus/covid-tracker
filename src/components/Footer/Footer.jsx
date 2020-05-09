import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
        <hr style={{ margin:"30px"}} />
        <nav className={styles.footerNav}>
        <ul>
            <li><a href="https://twitter.com/jideabdqudus">Developer</a></li>
            <li className={styles.container} style={{right:"0px", position:"absolute"}}><a href="https://github.com/jideabdqudus/covid-tracker">Github</a></li>
        </ul>
        </nav>
    </div>
  );
};

export default Footer;

