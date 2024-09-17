import axios from "axios";

export function instance() {
  const token = localStorage.getItem("jwt");

  // Определяем конфигурацию запроса
  const config: { headers: { "x-access-token": string }; baseURL: string } = {
    baseURL: "http://49.13.31.246:9191/",
    headers: {
      "x-access-token": token ? token : "",
    },
  };

  return axios.create(config);
}
