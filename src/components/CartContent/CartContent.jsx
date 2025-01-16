import { useState, useEffect } from "react";
import BtnGoBack from "../BtnGoBack";
import style from "./Style.module.scss";
import imgCart from "./../../assets/cart.svg";

const CartContent = ({ cart, removeFromCart, clearCart }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isCheckoutDisabled, setIsCheckoutDisabled] = useState(true);

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCheckout = () => {
    if (phoneNumber) {
      setIsPopupVisible(true);
      setTimeout(() => {
        setIsPopupVisible(false);
      }, 3000);

      clearCart();
    }
  };

  useEffect(() => {
    if (phoneNumber) {
      setIsCheckoutDisabled(false);
    } else {
      setIsCheckoutDisabled(true);
    }
  }, [phoneNumber]);
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  return (
    <div className={style.cart}>
      <header className={style.cartTop}>
        <h6 className={style.title}>Cart</h6>
        <img src={imgCart} alt="" />
      </header>

      {cart.length === 0 ? (
        <p className={style.subtitle}>
          Your cart is empty. Go back to shopping.
        </p>
      ) : (
        <>
          <div className={style.content}>
            {cart.map((item) => (
              <div key={item.id} className={style.card}>
                <img
                  className={style.img}
                  src={`./../../../public/${item.img}.png`}
                  alt={item.name}
                />
                <h4>{item.name}</h4>
                <p>{item.price}$</p>
                <button
                  className={style.remove}
                  onClick={() => removeFromCart(item.id)}
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <div className={style.total}>
            <p>Total Price: {totalPrice}$</p>
          </div>
          <div className={style.flex}>
            <div>
              <input
                className={style.input}
                type="number"
                id="name"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Enter your phone number"
              />
            </div>

            <button
              className={style.checkout}
              onClick={handleCheckout}
              disabled={isCheckoutDisabled}
            >
              Checkout
            </button>
          </div>
        </>
      )}
      <footer className={style.footer}>
        <BtnGoBack className={style.back} />
      </footer>

      {isPopupVisible && (
        <div className={style.popap}>
          <p>Thank you for your order!</p>
        </div>
      )}
    </div>
  );
};

export default CartContent;
