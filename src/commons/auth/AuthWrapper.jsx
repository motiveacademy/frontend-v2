import { cookies } from "next/headers";
import Auth from "./Auth";

const AuthWrapper = () => {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("sctkn");

  return <Auth authCookie={authCookie} />;
};

export default AuthWrapper;
