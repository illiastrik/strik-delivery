import style from "./Style.module.scss";
import pizza from "./../../assets/pizza.svg";
import bear from "./../../assets/bear.svg";
import burger from "./../../assets/burger.svg";
import hotDog from "./../../assets/hotDog.svg";
import soup from "./../../assets/soup.svg";
import allFood from "./../../assets/allFood.svg";
// import { motion } from "motion/react";

import { useState } from "react";
const Categories = ({ categoryId, onClickCategory }) => {
  // console.log(categoryId);
  const [category, setCategory] = useState([
    {
      id: 1,
      name: "All food",
      img: allFood,
    },
    {
      id: 2,
      name: "Pizza",
      img: pizza,
    },
    {
      id: 3,
      name: "HotDogs",
      img: hotDog,
    },
    {
      id: 4,
      name: "Burger",
      img: burger,
    },
    {
      id: 5,
      name: "Coup",
      img: soup,
    },
    {
      id: 6,
      name: "Bear",
      img: bear,
    },
  ]);
  return (
    <div className={style.content}>
      <h5 className={style.title}>Choise category</h5>
      <div className={style.row}>
        {category.map((categ, i) => {
          return (
            <button
              onClick={() => onClickCategory(i)}
              className={`${style.card} ${
                categoryId === i ? style.active : ""
              }`}
              key={categ.id}
            >
              <img className={style.img} src={categ.img} alt="" />
              <p className={style.name}>{categ.name}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
