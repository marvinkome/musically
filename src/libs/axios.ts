import axios from "axios";

const getToken = () => {
  const tokenObj = localStorage.getItem("spotify_token");
  if (!tokenObj) return null;

  try {
    const payload = JSON.parse(tokenObj);
    return payload.access_token;
  } catch (e) {
    return null;
  }
};

const instance = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    authorization: "Bearer " + getToken(),
  },
});
