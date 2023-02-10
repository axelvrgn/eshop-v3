import axios from "axios";

const getAll = () => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/genres",
    params: { key: "ee0a2d47b6b54dd3b649aaa653e174f3", page_size: 12 },
  };
  return axios.request(options);
};

export const genreService = {
  getAll,
};
