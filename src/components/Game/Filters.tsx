import React, { useEffect, useState } from "react";

import { Disclosure } from "@headlessui/react";

import { genreService } from "../../services/genreService";
import { platformService } from "../../services/platformService";

import Icon from "@mdi/react";
import { mdiChevronDown, mdiChevronUp } from "@mdi/js";

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
      <div className="border-b p-4 flex flex-col">
        <div className="mb-6">Plateformes</div>

        <div className="flex flex-col space-y-1">
          {platforms.slice(0, 10).map((platform: any, index: number) => (
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
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="text-yellow-500 mx-auto">
                {open ? (
                  <Icon path={mdiChevronUp} size={1} />
                ) : (
                  <Icon path={mdiChevronDown} size={1} />
                )}
              </Disclosure.Button>
              <Disclosure.Panel>
                {platforms.slice(10).map((platform: any, index: number) => (
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
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="border-b p-4 flex flex-col">
        <div className="mb-6">Genres</div>
        <div className="flex flex-col space-y-1">
          {genres.slice(0, 10).map((genre: any, index: number) => (
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
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="text-yellow-500 mx-auto">
                {open ? (
                  <Icon path={mdiChevronUp} size={1} />
                ) : (
                  <Icon path={mdiChevronDown} size={1} />
                )}
              </Disclosure.Button>
              <Disclosure.Panel>
                {genres.slice(10).map((genre: any, index: number) => (
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
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Filters;
