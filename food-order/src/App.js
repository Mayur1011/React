import React from "react";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
export default function App() {
  const [cartIsVisible, setcartIsVisible] = React.useState(false);
  const showCartHandler = () => {
    setcartIsVisible(true);
  };
  const hideCartHandler = () => {
    setcartIsVisible(false);
  };
  return (
    <CartProvider>
      {cartIsVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
