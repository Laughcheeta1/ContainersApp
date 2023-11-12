import axios from "axios";

/**
 * The base URL for all requests made from axios is going to be that one, so each request "x" made by using axios
 * is going to be appended to this base url, and then sent.
 */
const instance = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true, // Whether to include cookies or HTTP authentication
});

export default instance;