import axios from "axios";

const getAll = async () => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: { key: "ee0a2d47b6b54dd3b649aaa653e174f3", page_size: 12 },
  };
  return axios.request(options);
};

interface IOptions {
  method: string;
  url: string;
  params: {
    key: string;
    page: number;
    page_size: number;
    genres?: string;
    platforms?: string;
  };
}

const getByPage = async (
  page: number,
  pageSize: number,
  genres: string,
  platforms: string
) => {
  const options: IOptions = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: "ee0a2d47b6b54dd3b649aaa653e174f3",
      page,
      page_size: pageSize,
      ...(genres && { genres }),
      ...(platforms && { platforms }),
    },
  };
  return axios.request(options);
};

const getBySearch = (search: string) => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games",
    params: {
      key: "ee0a2d47b6b54dd3b649aaa653e174f3",
      page_size: 12,
      search: search,
    },
  };
  return axios.request(options);
};

const getDetails = (id: string) => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games/" + id,
    params: { key: "ee0a2d47b6b54dd3b649aaa653e174f3", page_size: 12 },
  };
  return axios.request(options);
};

export const gameService = {
  getAll,
  getByPage,
  getBySearch,
  getDetails,
};
