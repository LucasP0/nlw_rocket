import axios from "axios";

export const Server = axios.create({
  baseURL: "http://localhost:3333",
})