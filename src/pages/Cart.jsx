import CartContent from "../components/CartContent/CartContent";

const Cart = ({ cart, removeFromCart, clearCart }) => {
  return (
    <CartContent
      clearCart={clearCart}
      removeFromCart={removeFromCart}
      cart={cart}
    />
  );
};

export default Cart;
