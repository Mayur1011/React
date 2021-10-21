import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

// // This function is declared outside the Component because in this function we are not using anything from the component/ we are not interacting with anyside the component
// // !And if we need something inside the function it is automatically passed by React.
// const emailReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.includes("@") };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.includes("@") };
//   }
//   return { value: "", isValid: false };
// };
// const passwordReducer = (state, action) => {
//   if (action.type === "USER_INPUT") {
//     return { value: action.val, isValid: action.val.trim().length > 6 };
//   }
//   if (action.type === "INPUT_BLUR") {
//     return { value: state.value, isValid: state.value.trim().length > 6 };
//   }
//   return { value: "", isValid: false };
// };

// const Login = (props) => {
//   // const [enteredEmail, setEnteredEmail] = useState("");
//   // const [emailIsValid, setEmailIsValid] = useState();
//   // const [enteredPassword, setEnteredPassword] = useState("");
//   // const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);

//   const [emailState, dispatchEmail] = useReducer(emailReducer, {
//     value: "",
//     isValid: null,
//   });
//   const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
//     value: "",
//     isValid: null,
//   });
//   const authCtx = useContext(AuthContext);

//   // alias assignment
//   const { isValid: emailIsValid } = emailState;
//   const { isValid: passwordIsValid } = passwordState;

//   useEffect(() => {
//     // Due to adding this dependencies, we tell react that after running this login page each time we need to execute this useEffect only is enteredEmail and enteredPassword are present.
//     // *i.e. only run when dependencies are present/change.

//     // !The reason why we used setTimeout is because, earlier after each keystroke(while entering email or password) the validation check was done.
//     // !To avoid it we, we set a delay of 5 seconds and then check for validation.

//     const identifier = setTimeout(() => {
//       // console.log("Hi");
//       setFormIsValid(emailIsValid && passwordIsValid);
//     }, 500);
//     // *This cleanup function will always run before executing/runnig the above function, except when the above function runs for the first time.
//     // i.e. It will not run for the fist time.
//     // !The reasons for this cleanup function is to clear the timer for every nextkeystroke. So this cleanup function will only be called if we stopped for complete 5 seconds and then only we can check for validation.
//     return () => {
//       // console.log("Cleanup");
//       clearTimeout(identifier);
//     };
//   }, [emailIsValid, passwordIsValid]);

//   const emailChangeHandler = (event) => {
//     // setEnteredEmail(event.target.value);

//     dispatchEmail({ type: "USER_INPUT", val: event.target.value });
//     setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
//   };

//   const passwordChangeHandler = (event) => {
//     // setEnteredPassword(event.target.value);

//     dispatchPassword({ type: "USER_INPUT", val: event.target.value });
//     setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
//   };

//   const validateEmailHandler = () => {
//     // setEmailIsValid(emailState.value.includes("@"));

//     dispatchEmail({ type: "INPUT_BLUR" });
//   };

//   const validatePasswordHandler = () => {
//     // setPasswordIsValid(enteredPassword.trim().length > 6);
//     dispatchPassword({ type: "INPUT_BLUR" });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     authCtx.onLogin(emailState.value, passwordState.value);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <Input
//           id="email"
//           type="email"
//           label="E-mail"
//           isValid={emailIsValid}
//           value={emailState.value}
//           onChange={emailChangeHandler}
//           onBlur={validateEmailHandler}
//         ></Input>

//         <Input
//           id="password"
//           type="password"
//           label="Password"
//           isValid={passwordIsValid}
//           value={passwordState.value}
//           onChange={passwordChangeHandler}
//           onBlur={validatePasswordHandler}
//         ></Input>

//         {/* <div
//           className={`${classes.control} ${
//             passwordState.isValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={passwordState.value}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div> */}

//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             Login
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;
