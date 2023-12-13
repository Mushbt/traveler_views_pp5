import { useEffect } from "react";

import axios from "axios";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  /*
    Checks if the user is currently logged in or logged out
    Refreshes the access token if a user is logged in
    Redirects the user to the main page
  */
  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("/dj-rest-auth/token/refresh/");
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};