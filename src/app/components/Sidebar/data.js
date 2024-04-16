import { routes } from "../../route";
import { ReactComponent as HiLibrary } from "../../assets/icons/Library.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as HiHome } from "../../assets/icons/home.svg";
import { ReactComponent as Playlist } from "../../assets/icons/plus-tag.svg";
import { ReactComponent as Liked } from "../../assets/icons/purple-tag.svg";
import { ReactComponent as Episodes } from "../../assets/icons/green-tag.svg";

export const mainMenu = [
  { name: "Home", url: routes.dashboard(), icon: <HiHome /> },
  { name: "Search", url: routes.dashboard(), icon: <Search /> },
  { name: "Your Library", url: routes.dashboard(), icon: <HiLibrary /> },
  { name: "Create Playlist", url: routes.playlist(), icon: <Playlist /> },
  { name: "Liked Songs", url: routes.dashboard(), icon: <Liked /> },
  { name: "Your Episodes", url: routes.dashboard(), icon: <Episodes /> },
];

export const topRecommend = [
  "Jazz",
  "Hangover Cure",
  "Your Top Songs 2022",
  "Indie",
  "Rock",
  "RADAR",
];
