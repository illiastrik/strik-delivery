import Categories from "../components/Categories";
import Content from "./../components/Content";
const Home = ({
  addToCart,
  food,
  categoryId,
  setCategoryId,
  onClickCategory,
}) => {
  return (
    <>
      <Categories
        categoryId={categoryId}
        setCategoryId={setCategoryId}
        onClickCategory={onClickCategory}
      />
      <Content food={food} addToCart={addToCart} />
    </>
  );
};

export default Home;
