import React, { useEffect, useState, useContext } from "react";

import Icon from "@mdi/react";
import { mdiChevronRight, mdiChevronLeft } from "@mdi/js";
import { Dialog } from "@headlessui/react";

import Layout from "../layouts/Layout";
import Container from "../components/Container";
import Games from "../components/Game/Games";
import Filters from "../components/Game/Filters";
import Loader from "../components/Loader";

import { gameService } from "../services/gameService";
import AuthContext from "../contexts/Auth";
import Searchbar from "../components/Searchbar";

const VideoGames = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [platforms, setPlatforms] = useState("");
  const [genres, setGenres] = useState("");
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);

  const auth = useContext(AuthContext);

  useEffect(() => {
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

  const searchGames = (data: any) => {
    console.log("search field : " + data.search);
    setLoading(true);
    gameService
      .getBySearch(data.search)
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
    console.log(auth);
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
          <div className="flex justify-between flex-wrap">
            <div className="w-3/12 hidden md:block">
              <Filters
                handleGenre={handleGenre}
                handlePlatform={handlePlatform}
              />
            </div>
            <div className="w-full md:w-8/12">
              <Searchbar
                type="text"
                placeholder="Recherchez par intitulé, mots-clés"
                searchGames={searchGames}
              />

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
