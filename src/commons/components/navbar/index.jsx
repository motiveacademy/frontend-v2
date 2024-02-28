import { cookies } from 'next/headers'
import Logo from "../logo";
import DesktopItem from "./item/DesktopItem";
import DesktopUserItem from "./user/DesktopUserItem";

const Navbar = () => {
  const cookieStore = cookies()
  const authCookie = cookieStore.get('sctkn')

  return (
    <nav className="w-full bg-white backdrop-blur px-8 py-8 md:py-4 shadow-md sticky top-0 z-10">
      <div className="flex items-center justify-between relative">
        <div className="flex items-center space-x-4">
          <Logo />
          <DesktopItem />
        </div>
        <DesktopUserItem authCookie={authCookie}/>
      </div>
    </nav>
  );
};

export default Navbar;
