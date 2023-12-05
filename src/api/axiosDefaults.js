import axios from "axios";

axios.defaults.baseURL = "https://traveler-view-90e3792ff7f0.herokuapp.com/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data"
axios.defaults.withCredentials = true;