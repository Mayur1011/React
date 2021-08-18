import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div
      // We want to apply css from 2 different css files to the content between the Card tag (present in Adduser.js).
      className={`${classes.card} ${props.className}`}
    >
      {props.children}
    </div>
  );
};
export default Card;
