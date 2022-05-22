import axios from "axios";

const Api = () => {
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

  return axios.create({
    baseURL: "https://api.spotify.com/v1/",
    headers: {
      authorization: "Bearer " + getToken(),
    },
  });
};

export async function fetchUserLikedSongs() {
  const makeUserLikedSongsRequest = async (link = null) => {
    try {
      const { data } = await Api().get(link || `/me/tracks`, {
        params: {
          limit: 50,
        },
      });
      return data;
    } catch (e: any) {
      console.error("SPOTIFY ERROR:: cannot get user liked songs data:", e.message);
      return {};
    }
  };

  let songs: any[] = [];
  let next = null;

  // make first request to get total page count and next page
  let { items, total, ...resp } = await makeUserLikedSongsRequest();
  next = resp.next;

  // set tracks
  songs = songs.concat(items);

  // get the total number of page (default is 50 per page)
  const total_pages = Math.ceil(total / 50);

  // go through total pages and repeat process
  if (total_pages > 1) {
    for (let i = 2; i <= total_pages; i++) {
      // make subsequent requests
      const { items, ...resp } = await makeUserLikedSongsRequest(next);
      next = resp.next;

      // set tracks
      songs = songs.concat(items);
    }
  }

  return songs;
}
