import "./LandingPageHeader.css";
import { Logo } from "../Logo/Logo";
import { HeaderNavigation } from "./HeaderNavigation";

export const LandingPageHeader = () => {
  return (
    <header className="header">
      <div className="logo">
        <Logo useWhite={true} />
      </div>
      <div className="menu">
        <HeaderNavigation />
      </div>
    </header>
  );
};
