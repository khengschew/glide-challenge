import Auth from "./auth";

const Api = {
  searchSpotify: (q) => {
    q = encodeURIComponent(q);

    return Auth.getToken().then((token) => {
      return fetch(
        `https://api.spotify.com/v1/search?q=${q}&type=artist,track`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then((response) => response.json());
    });
  },
};

export default Api;
