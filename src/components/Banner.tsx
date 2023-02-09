import React from "react";

import { useNavigate } from "react-router-dom";

import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-cover bg-center h-[320px] flex justify-center items-center bg-[url('https://store.ubi.com/on/demandware.static/-/Library-Sites-shared-library-web/default/dw27e9e8be/images/category-banners/CatBan_new-release-feb22_1920x300_desk.jpg')]">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-3xl font-semibold uppercase ">eshop v3</div>
        <div className="text-lg">Achetez, téléchargez et jouez !</div>
        <button
          type="button"
          onClick={() => navigate("/games")}
          className="relative inline-flex items-center px-10 py-2 text-xl border-2 border-yellow-400 text-yellow-400 hover:text-white group hover:shadow-[inset_17rem_0_0_0] overflow-hidden hover:shadow-yellow-400 duration-[400ms,700ms] transition-[color,box-shadow]"
        >
          <span className="absolute right-0 flex items-center justify-start w-8 h8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <Icon path={mdiArrowRight} size={1} />
          </span>
          <span className="relative">Découvrir nos jeux</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
