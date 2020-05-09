import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
        <hr style={{ margin:"30px", borderWidth:"1px"}} />
        <nav className={styles.footerNav}>
        <ul>
            <li><a href="https://abdulqudus.com">Developer</a></li>
            <li ><a href="https://github.com/jideabdqudus/covid-tracker">Github</a></li>
        </ul>
        </nav>
    </div>
  );
};

export default Footer;

