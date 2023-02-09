import React, { useState } from "react";

import Card from "./Card";

type Props = {
  gamesList: Array<any>;
};

const Games = ({ gamesList }: Props) => {
  const [rangeValue, setRangeValue] = useState(12);
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-right">
        Résultats sur cette page : {gamesList?.length}
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">
        {gamesList?.slice(0, rangeValue).map((game, index) => (
          <Card key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;
