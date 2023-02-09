import { Fragment, useEffect, useRef, useState } from "react";

import { Dialog } from "@headlessui/react";

import Icon from "@mdi/react";
import { mdiMenu, mdiClose } from "@mdi/js";

import { NavLink } from "react-router-dom";
import Routes from "./Routes";
import GuestRoutes from "./GuestRoutes";
import Logo from "../Logo";

const BurgerMenu = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="uppercase hover:text-yellow-400 duration-150 h-16 flex items-center font-semibold justify-center">
        {route.label}
      </div>
    </NavLink>
  ));

  const guestRoutes = GuestRoutes.map((route, index) => (
    <NavLink to={route.path} key={index}>
      <div className="flex items-center text-white bg-yellow-400 border border-yellow-400 px-3 py-2 rounded-full hover:bg-white hover:text-yellow-400 duration-150 justify-center">
        {route.label}
      </div>
    </NavLink>
  ));

  return (
    <div className="lg:hidden flex items-center justify-between px-4">
      <button
        className="outline-none mobile-menu-button flex items-center z-20"
        onClick={() => setIsOpen(true)}
      >
        {isOpen ? (
          <Icon path={mdiClose} size={1} />
        ) : (
          <Icon path={mdiMenu} size={1} />
        )}
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 h-full">
          <Dialog.Panel className="w-full max-w-lg bg-white px-6 flex flex-col items-center justify-between h-full overflow-y-auto">
            <Dialog.Title>
              <div className="h-48">
                <Logo />
              </div>
            </Dialog.Title>
            <Dialog.Description></Dialog.Description>

            <div className="flex flex-col space-y-2 ">{listRoutes}</div>
            <div className="flex flex-col space-y-2 ">{guestRoutes}</div>

            <button
              className="flex justify-center hover:text-yellow-400 py-6"
              onClick={() => setIsOpen(false)}
            >
              <Icon path={mdiClose} size={1} />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default BurgerMenu;
