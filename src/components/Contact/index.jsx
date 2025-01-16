import style from "./Contanct.module.scss";
import phone from "./../../assets/phone.svg";

const Contact = () => {
  const phoneNumber = "+380 888 888 888";

  return (
    <button className={style.btn}>
      <div className={style.phone}>
        <img src={phone} alt="phone" />
      </div>
      <p className={style.text}>{phoneNumber}</p>
    </button>
  );
};

export default Contact;
