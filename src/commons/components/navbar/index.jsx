import DesktopNavigation from "./desktop/DesktopNavigation";
import MobileNavigation from "./mobile/MobileNavigation";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-10">
      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  );
};

export default Navbar;
