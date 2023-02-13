import { useContext } from "react";

import { NavLink } from "react-router-dom";
import Routes from "../../data/Routes";
import GuestRoutes from "../../data/GuestRoutes";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";
import AuthContext from "../../contexts/Auth";
import { supabase } from "../../supabaseClient";
import { useToasts } from "../Toast/ToastContext";

const listRoutes = Routes.map((route, index) => (
  <NavLink
    to={route.path}
    className={({ isActive }) =>
      isActive
        ? "border-b-4 border-yellow-500"
        : "border-b-4 border-transparent"
    }
    key={index}
  >
    <div className="uppercase hover:text-yellow-400 duration-150 h-16 flex items-center  font-semibold">
      {route.label}
    </div>
  </NavLink>
));

const guestRoutes = GuestRoutes.map((route, index) => (
  <NavLink to={route.path} key={index}>
    <div className="flex items-center text-white bg-yellow-400 border border-yellow-400 px-3 py-2 rounded-full hover:bg-white hover:text-yellow-400 duration-150">
      {route.label}
    </div>
  </NavLink>
));

const Navbar = () => {
  const { setAuth } = useContext(AuthContext);
  const { pushToast } = useToasts();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    setAuth({});
    pushToast({
      content: "Vous êtes déconnecté !",
    });
  };

  return (
    <div className="flex items-center justify-between sticky top-0 bg-white z-40">
      <NavLink to="/" className="border-b-4 border-transparent">
        <Logo />
      </NavLink>
      <BurgerMenu />
      <div className="lg:block w-full max-lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between ">
            <div className="flex space-x-8 flex-wrap">{listRoutes}</div>
            <button onClick={logout}>Déconnexion</button>
          </div>

          <div className="px-4">{guestRoutes}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
