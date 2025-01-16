import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SocialMedia from "../SocialMedia";
import style from "./Header.module.scss";
import logo from "./../../assets/logo.svg";
import cart from "./../../assets/cart.svg";
import Contact from "../Contact";
import { useState } from "react";

const Heaeder = ({ cartCount }) => {
  return (
    <header className={style.header}>
      <ul className={style.row}>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={style.list}
        >
          <Link to="/" className={style.link}>
            <div className={style.logo}>
              <img src={logo} alt="logo" />
            </div>
            <h1 className={style.title}>
              STRIK <br /> DELIVERY
            </h1>
          </Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.25 }}
        >
          <Contact />
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className={style.list}
        >
          <SocialMedia />
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className={style.list}
        >
          <Link to="/cart" className={style.cart}>
            <img src={cart} alt="" />
            <span className={style.number}>{cartCount}</span>
          </Link>
        </motion.li>
      </ul>
    </header>
  );
};

export default Heaeder;
