import React from "react";

import { NavLink } from "react-router-dom";
import Routes from "./Routes";
import GuestRoutes from "./GuestRoutes";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";

const listRoutes = Routes.map((route, index) => (
  <NavLink
    to={route.path}
    className={({ isActive }) =>
      isActive
        ? "border-b-4 border-yellow-400"
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
          </div>
          <div className="px-4">{guestRoutes}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
