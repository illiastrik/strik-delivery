import { Link } from "react-router-dom";
import style from "./../BtnGoBack/BtnGoBack.module.scss";
const BtnGoBack = () => {
  return (
    <Link to="/" className={style.btn}>
      GO BACK
    </Link>
  );
};

export default BtnGoBack;
