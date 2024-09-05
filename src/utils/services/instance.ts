import axios from "axios";

export function instance() {
  return axios.create({
    baseURL: "http://49.13.31.246:9191/",
  });
}
