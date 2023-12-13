import axios from "axios";

// Unique URL for deployed API project on Heroku 
axios.defaults.baseURL = "https://traveler-view-90e3792ff7f0.herokuapp.com/"
// Expected data format by API
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"
// Avoid any CORS errors when sending cookies
axios.defaults.withCredentials = true;

// Refreshing access tokens
export const axiosReq = axios.create();
export const axiosRes = axios.create();