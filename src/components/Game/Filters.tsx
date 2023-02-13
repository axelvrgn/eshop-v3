import React, { useEffect, useState } from "react";

import { genreService } from "../../services/genreService";
import { platformService } from "../../services/platformService";

import Alert from "../Alert";
import Checkbox from "../Checkbox";

type Props = {
  handleGenre: any;
  handlePlatform: any;
};

const Filters = ({ handleGenre, handlePlatform }: Props) => {
  const [platforms, setPlatforms] = useState<any>([]);
  const [genres, setGenres] = useState<any>([]);

  useEffect(() => {
    platformService
      .getAll()
      .then((res: any) => {
        setPlatforms(res.data.results);
        console.log(res.data);
      })
      .catch(function (error: string) {
        console.error(error);
      });

    genreService
      .getAll()
      .then((res: any) => {
        setGenres(res.data.results);
        console.log(res.data);
      })
      .catch(function (error: string) {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-white flex flex-col h-full">
      <div className="p-4">
        <div className="font-bold text-lg">Filtrer</div>
      </div>
      <div className="border-b p-4">
        <div className="mb-6">Plateformes</div>
        <div className="flex flex-col space-y-1">
          {platforms.map((platform: any, index: number) => (
            <div className="flex items-center space-x-4" key={index}>
              <Checkbox
                id={platform.name}
                label={platform.name}
                name={platform.name}
                value={platform.id}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handlePlatform(e.target.value)
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className="border-b p-4">
        <div className="mb-6">Genres</div>
        <div className="flex flex-col space-y-1">
          {genres.map((genre: any, index: number) => (
            <div className="flex items-center space-x-4" key={index}>
              <Checkbox
                id={genre.name}
                label={genre.name}
                name={genre.name}
                value={genre.id}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handlePlatform(e.target.value)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
