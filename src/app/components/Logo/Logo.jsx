import SpotifyWhite from "../../assets/images/spotify-white.png";
import SpotifyBlack from "../../assets/images/spotify-black.png";
import style from "./style.module.css";
// import { ReactComponent as SpotifyWhite } from "../../assets/images/spotify-white.svg";
// import { ReactComponent as SpotifyBlack } from "../../assets/images/spotify-black.svg";

export function Logo(props) {
  const myImage = props.useWhite ? SpotifyWhite : SpotifyBlack;
  return (
    <a href="#/dashboard" className={style.logo}>
      <img src={myImage} />
    </a>
  );
}
