import { DashboardFooter } from "../../components/Footer/DashboardFooter";
import { Sidebar } from "../../components/Sidebar";
import style from "./style.module.css";
import { Outlet } from "react-router-dom";
export const DashboardPage = () => {
  return (
    <section className={style.container}>
      <section className={style["content-wrapper"]} role="content">
        <Sidebar />
        <main>
          <section className={style.content}>
            <Outlet />
          </section>
        </main>
      </section>
      <DashboardFooter className={style.footer} />
    </section>
  );
};
