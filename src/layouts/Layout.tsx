import React from "react";

import Warning from "../components/Warning";
import Navbar from "../components/Navigation/Navbar";
import DiscountAlert from "../components/DiscountAlert";
import Footer from "../components/Footer";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col bg-slate-100 h-min-screen relative">
      <Warning />
      <Navbar />
      <DiscountAlert />

      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
