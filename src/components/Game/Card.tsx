import React from "react";
import { Link } from "react-router-dom";

type Props = {
  game: any;
};

const Card = ({ game }: Props) => {
  return (
    <Link to={`/games/${game.id}`}>
      <div className="overflow-hidden drop-shadow-md bg-cover bg-center flex flex-col bg-white relative hover:-translate-y-2 duration-200">
        <div
          className="h-80 bg-cover bg-top"
          style={{
            backgroundImage: `url(${game.background_image})`,
          }}
        ></div>
        <div className="flex items-center  px-4 h-24 w-full ">
          <div className="text-xl">{game.name}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
