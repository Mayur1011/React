import React from "react";
import Nav from "./Nav";
import meals from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <React.Fragment>
      <Nav onClick={props.onShowCart}></Nav>
      <div className={classes["main-image"]}>
        <img src={meals} alt="Table with food"></img>
      </div>
    </React.Fragment>
  );
};
export default Header;
