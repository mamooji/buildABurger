import React from "react";
import BurgerLogo from "../../assets/images/original.png";
import classes from "./Logo.css";
const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={BurgerLogo} alt="KreaMs Burger Shop" />
  </div>
);
export default logo;
