import { Link } from "react-router-dom";
import style from "./Style.module.scss";
import fase from "./../../assets/face.svg";
import inkd from "./../../assets/inkd.svg";
import twitter from "./../../assets/twitter.svg";
import youtube from "./../../assets/youtube.svg";
import { useState } from "react";
const SocialMedia = () => {
  const [media, setMedia] = useState([
    {
      name: fase,
    },
    {
      name: inkd,
    },
    {
      name: twitter,
    },
    {
      name: youtube,
    },
  ]);
  return (
    <>
      {media.map((media) => {
        return (
          <Link className={style.link} key={media.name} to="!#">
            <div>
              <img className={style.img} src={media.name} alt="" />
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default SocialMedia;
