import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Heaeder from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.scss";
import Cart from "./pages/Cart";
import Categories from "./components/Categories";
import MainFooter from "./components/Footer/MainFooter";
function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    console.log(item); // Перевірка, який товар додається
    setCart((prev) => [...prev, item]);
  };
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id)); // Видаляємо товар за його id
  };
  const clearCart = () => {
    setCart([]); // Очищує корзину
  };

  const [food, setFood] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  useEffect(() => {
    fetch(
      `https://677e475b94bde1c1252b3e60.mockapi.io/food?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setFood(arr);
      });
    window.scrollTo(0, 0);
  }, [categoryId]);
  // console.log(cart);
  return (
    <>
      <div className="container">
        <div className="app">
          <Heaeder cartCount={cart.length} />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    categoryId={categoryId}
                    setCategoryId={setCategoryId}
                    onClickCategory={setCategoryId}
                    food={food}
                    addToCart={addToCart}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    clearCart={clearCart}
                    cart={cart}
                    removeFromCart={removeFromCart}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default App;
