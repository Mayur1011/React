import React from "react";
import NavCartButton from "./NavCartButton";
import classes from "./Header.module.css";
const Nav = (props) => {
  return (
    <header className={classes.header}>
      <h1>My Meals</h1>
      <NavCartButton />
    </header>
  );
};

export default Nav;
