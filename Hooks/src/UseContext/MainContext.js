import React, { useState } from "react";
import FunctionalContextComponent from "./FunctionalContextComponent";
import ClassContextComponent from "./ClassContextComponent";

export const ThemeContext = React.createContext();

const MainContext = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}> Click Here!</button>
        <FunctionalContextComponent></FunctionalContextComponent>
        <ClassContextComponent></ClassContextComponent>
      </ThemeContext.Provider>
    </>
  );
};

export default MainContext;
