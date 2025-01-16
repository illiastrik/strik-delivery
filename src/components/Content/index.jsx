import style from "./Content.module.scss";

const Content = ({ food, addToCart }) => {
  return (
    <div className={style.content}>
      {food.map((item) => (
        <div className={style.card} key={item.id}>
          <img
            className={style.img}
            src={`./../../../public/${item.img}.png`}
            alt={item.name}
          />
          <h6 className={style.name}>{item.name}</h6>
          <div className={style.cardRow}>
            <button className={style.btn} onClick={() => addToCart(item)}>
              Add to Cart
            </button>
            <p className={style.price}>{item.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
