import Auth from "./auth";

const Api = {
  searchSpotify: (q) => {
    q = encodeURIComponent(q);

    return Api.spotifyRequest(
      `https://api.spotify.com/v1/search?q=${q}&type=artist,track`
    );
  },
  spotifyRequest: (url) => {
    return Auth.getToken().then((token) => {
      return fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => response.json());
    });
  },
};

export default Api;
