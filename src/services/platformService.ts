import axios from "axios";

const getAll = async () => {
  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/platforms",
    params: { key: "ee0a2d47b6b54dd3b649aaa653e174f3" },
  };
  return axios.request(options);
};

export const platformService = {
  getAll,
};
