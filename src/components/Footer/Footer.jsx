import React from "react";
import styles from "./Footer.module.css";
import twitter from "./../Viruins/images/twitter.svg";
import github from "./../Viruins/images/github.svg";

const Footer = () => {
  return (
    <div>
        <hr style={{ margin:"30px"}}/>
        <nav className={styles.footerNav}>
        <ul>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
    </div>
  );
};

export default Footer;

// <div class={styles.container}>
//           <nav class={styles.footerNav}>
//             <ul>
//               <li>
//                 <a href="https://abdulqudus.com">About Developer</a>
//               </li>
//               <li>
//                 <a href="mailto:jideabdqudus@gmail.com">Contact</a>
//               </li>
//             </ul>
//           </nav>
//           <nav class={styles.footerNav}>
//             <ul>
//               <li>
//                 <a
//                   href="https://twiiter.com/jideabdqudus"
//                   class={styles.socialLink}
//                 >
//                   <img src={twitter} />
//                   Twitter
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://github.com/jideabdqudus/covid-tracker"
//                   class={styles.socialLink}
//                 >
//                   <img src={github} />
//                   Github Repo
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
