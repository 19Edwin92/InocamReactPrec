import axios from "axios";

export const instance = axios.create({
  // baseURL:process.env.REACT_APP_SERVERKEY
  baseURL:"http://54.180.120.109/"
})
