import { HorizontalMusicCard } from "../../components/MusicCard/Horizontal";
import style from "./main-dashboard.module.css";
import { episodesApi, mostListenedToApi } from "../../Service/songs";
import React from "react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../../components/SectionTitle";
import { MusicCard } from "../../components/MusicCard";
export const MainDashboard = () => {
  const [mostListened, setMostListened] = React.useState([]);
  const [episodes, setEpisodes] = React.useState([]);
  React.useEffect(() => {
    mostListenedToApi().then((resp) => {
      setMostListened(resp);
    });
    episodesApi().then((resp) => {
      setEpisodes(resp);
    });
  }, []);
  return (
    <section className={style.container}>
      <h2 className={style.h2}>Good day</h2>
      <div className={style.flex}>
        {mostListened.map((music) => (
          <HorizontalMusicCard {...music} />
        ))}
      </div>
      <br />
      <br />
      <SectionTitle title={"Episodes for you"} showAllLink={"./"} />
      <br />
      <div className={style.flex}>
        {episodes.map((music) => (
          <MusicCard {...music} />
        ))}
      </div>
    </section>
  );
};
