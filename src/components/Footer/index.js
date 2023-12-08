import React from "react";
import classes from "./index.module.css";
function Footer() {
  return (
    <div className={classes["footer"]}>
      <div className={classes["footer-contant"]}>
        <div className={classes["contact-container"]}>
          <h1 className={classes["contact-heading"]}>Get In Touch!</h1>
          <div className={classes["contact-details"]}>
            <img src="location.png" alt="icon" className={classes["img-1"]} />
            <p>C/4 Rantdeep soc near ghodasar, Isanpur, Ahmedabad, Gujrat.</p>
          </div>
          <div className={classes["contact-details"]}>
            <img src="phone.png" alt="icon" />
            <p>+91 1234567890</p>
          </div>
          <div className={classes["contact-details"]}>
            <img src="email.png" alt="icon" />
            <p>example@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
