import React, { useEffect, useState } from "react";

import Icon from "@mdi/react";
import { mdiChevronRight, mdiChevronLeft, mdiMagnify } from "@mdi/js";

import Layout from "../layouts/Layout";
import Container from "../components/Container";
import Games from "../components/Game/Games";
import Filters from "../components/Game/Filters";
import FormControl from "../components/FormControl";
import FormField from "../components/FormField";
import Loader from "../components/Loader";

import { gameService } from "../services/gameService";

const VideoGames = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(0);
  const [search, setSearch] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [genres, setGenres] = useState("");
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setPageSize(12);
    setLoading(true);
    gameService
      .getByPage(page, pageSize, genres, platforms)
      .then((res: any) => {
        setGames(res.data.results);
        setLoading(false);
        console.log(res.data.results);
      })
      .catch(function (error: string) {
        console.error(error);
      });
  }, [page, pageSize, genres, platforms]);

  const searchGames = () => {
    console.log("search field : " + search);
    setLoading(true);
    gameService
      .getBySearch(search)
      .then((res: any) => {
        setGames(res.data.results);
        setLoading(false);
        console.log(res.data.results);
      })
      .catch(function (error: string) {
        console.error(error);
      });
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleGenre = (genre: string) => {
    if (genres !== "") {
      let splitedGenres = genres.split(",");
      if (splitedGenres.includes(genre)) {
        splitedGenres.splice(splitedGenres.indexOf(genre), 1);
      } else splitedGenres.push(genre);
      setGenres(splitedGenres.join());
    } else setGenres(genre);
  };

  const handlePlatform = (platform: string) => {
    if (platforms !== "") {
      let splitedPlatforms = platforms.split(",");
      if (splitedPlatforms.includes(platform)) {
        splitedPlatforms.splice(splitedPlatforms.indexOf(platform), 1);
      } else splitedPlatforms.push(platform);
      setPlatforms(splitedPlatforms.join());
    } else setPlatforms(platform);
  };

  return (
    <div>
      <Layout>
        <Container>
          <div className="flex justify-between">
            <div className="w-3/12 hidden md:block">
              <Filters
                handleGenre={handleGenre}
                handlePlatform={handlePlatform}
              />
            </div>
            <div className="w-full md:w-8/12">
              <form className="flex flex-wrap space-x-2">
                <FormField>
                  <FormControl
                    type="text"
                    value={search}
                    placeholder="Rechercher par un nom, mot-clé..."
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setSearch(e.target.value);
                    }}
                  />
                </FormField>
                <button
                  type="button"
                  className="bg-yellow-400 p-2 rounded capitalize text-white"
                  onClick={searchGames}
                >
                  <Icon path={mdiMagnify} size={1} />
                </button>
              </form>

              {isLoading ? (
                <div className="flex justify-center scale-150 h-[70vh]">
                  <Loader label="Chargement..." />
                </div>
              ) : (
                <Games gamesList={games} />
              )}

              <div className="flex justify-between py-8">
                <button
                  onClick={handlePreviousPage}
                  disabled={page < 2}
                  className={` flex ${
                    page < 2 ? "cursor-not-allowed" : ""
                  } hover:text-yellow-400`}
                >
                  <Icon path={mdiChevronLeft} size={1} />
                  Page précédente
                </button>
                <button
                  onClick={handleNextPage}
                  className="flex hover:text-yellow-400"
                >
                  Page suivante
                  <Icon path={mdiChevronRight} size={1} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default VideoGames;
