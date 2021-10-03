import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

export default function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

// function App() {
//   /*
//   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  OPTIONAL  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   We can also make a different component which handles the context and all the data realted to it.
//   Such as for this example, the LoggedIn state, the Effects, the handlers will be present in that component and not in APP componenet
//   The we will use that context in APP(therefore App.js will be a consumer of that context)

//   */
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // this is only run's when the dependencies change.
//     // In this case the dependencies only changes once i.e. at the starting of the application.
//     const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
//     if (storedUserLoggedInInformation === "1") setIsLoggedIn(true);
//   }, []);

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem("isLoggedIn", "1");
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem("isLoggedIn");
//     setIsLoggedIn(false);
//   };

//   return (
//     // Since AuthContext is not a component and JSX needs to have a component.
//     // So using method Provider we can make it as component.
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         onLogout: logoutHandler,
//       }}
//     >
//       <MainHeader />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </AuthContext.Provider>
//   );
// }

// export default App;
