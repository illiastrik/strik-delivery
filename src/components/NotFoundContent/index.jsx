import BtnGoBack from "../BtnGoBack";
import style from "./../NotFoundContent/NotFound.module.scss";

const NotFoundContent = () => {
  return (
    <div className={style.notFound}>
      <h6 className={style.h6}>not found pages</h6>
      <BtnGoBack />
      <p className={style.sub}>
        Unfortunately, this page is not found. Please go back, and everything
        will work in the next few minutes. Thank you!
      </p>
    </div>
  );
};

export default NotFoundContent;
