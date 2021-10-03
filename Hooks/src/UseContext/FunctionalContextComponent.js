import React, { useContext } from "react";
import { ThemeContext } from "./MainContext";
export default function FunctionalContextComponent() {
  const darkTheme = useContext(ThemeContext);
  const ThemeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return <div style={ThemeStyles}>Function Theme</div>;
}
