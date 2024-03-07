import Logo from "../../logo";
import DesktopItem from "./DesktopItem";
import DesktopUserItem from "./DesktopUserItem";

const DesktopNavigation = () => {
  return (
    <div className="hidden md:flex items-center justify-between relative bg-white/80 backdrop-blur px-8 py-4 shadow-md">
      <div className="flex items-center space-x-4">
        <Logo />
        <DesktopItem />
      </div>
      <DesktopUserItem />
    </div>
  );
};

export default DesktopNavigation