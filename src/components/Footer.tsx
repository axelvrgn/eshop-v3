import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="h-48 bg-yellow-400 text-white flex justify-center items-end">
        <div className="pb-4 ">
          Copyright © {new Date().getFullYear()} by EshopV3
        </div>
      </div>
    </footer>
  );
};

export default Footer;
