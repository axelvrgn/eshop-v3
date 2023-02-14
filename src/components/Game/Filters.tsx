import React, { useEffect, useState } from "react";

import { Disclosure, Transition } from "@headlessui/react";

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
        <div className="mb-6 antialiased hover:subpixel-antialiased">
          Plateformes
        </div>

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
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`${
                    open
                      ? "transform rotate-180 duration-500"
                      : "transform duration-500"
                  }`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                className="overflow-hidden"
                enter="transition transition-[max-height] duration-300 ease-in"
                enterFrom="transform max-h-0"
                enterTo="transform max-h-full"
                leave="transition transition-[max-height] duration-300 ease-out"
                leaveFrom="transform max-h-full"
                leaveTo="transform max-h-0"
              >
                <Disclosure.Panel className="h-full">
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
              </Transition>
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
                <Icon
                  path={mdiChevronDown}
                  size={1}
                  className={`${
                    open
                      ? "transform rotate-180 duration-500"
                      : "transform duration-500"
                  }`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                className="overflow-hidden"
                enter="transition transition-[max-height] duration-300 ease-in"
                enterFrom="transform max-h-0"
                enterTo="transform max-h-full"
                leave="transition transition-[max-height] duration-300 ease-out"
                leaveFrom="transform max-h-full"
                leaveTo="transform max-h-0"
              >
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
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Filters;
