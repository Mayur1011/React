import React from "react";
import classes from "./NavCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const NavCartButton = (props) => {
  const [btnHighLighted, setbtnHighLighted] = React.useState(false);
  const cartCtx = React.useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  const { items } = cartCtx;
  const btnClasses = `${classes.button} ${btnHighLighted ? classes.bump : ""}`;

  React.useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnHighLighted(true);

    const timer = setTimeout(() => {
      setbtnHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default NavCartButton;
