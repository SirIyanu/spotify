import { Logo } from "../Logo/Logo";
import { mainMenu } from "./data";
import style from "./style.module.css";
import { combineClasses } from "../../../utils/format";
import { Link } from "react-router-dom";
import { topRecommend } from "./data";
import { routes } from "../../route";
import { appSettings } from "../../../utils/user";
import { ReactComponent as Download } from "../../assets/icons/download.svg";
import { downloadApp } from "../../../utils/user";
export const Sidebar = () => {
  const setting = appSettings();
  return (
    <aside className={style.sidebar}>
      <Logo useWhite />
      <div className={style.menu}>
        {mainMenu.map((menu, index) => {
          return (
            <>
              <MenuItem {...menu} />
              {(index + 1) % 3 == 0 ? <br /> : <></>}
            </>
          );
        })}
      </div>
      <div className={combineClasses(style.menu, style.divider)}>
        {topRecommend.map((recommendation) => {
          return (
            <Link
              className={combineClasses(style.item, style.regular)}
              to={routes.search(recommendation)}
            >
              {recommendation}
            </Link>
          );
        })}
        {!setting.hasInstalledApp && (
          <div className={style.download} onClick={downloadApp}>
            <Download />
            <span>Install App</span>
          </div>
        )}
      </div>
    </aside>
  );
};

export const MenuItem = (menu) => {
  const className = combineClasses(style.item);
  return (
    <Link to={menu.url} className={className}>
      {menu.icon} <span className={style.name}>{menu.name}</span>
    </Link>
  );
};
