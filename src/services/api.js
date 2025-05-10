import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "a2f1a820bb04b24a0aaa9291e34a2c99",
    language: "pt-br",
    page: 1,
  },
});

export default api;
