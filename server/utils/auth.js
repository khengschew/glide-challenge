const axios = require("axios");
const formurlencoded = require("form-urlencoded").default;

const fetchToken = () => {
  return axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: formurlencoded({
      grant_type: "client_credentials",
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${process.env.CREDENTIALS}`,
    },
  });
};

module.exports.getToken = (req, res) => {
  fetchToken()
    .then((response) => {
      res.end(JSON.stringify(response.data));
    })
    .catch((err) => {
      res.status(500).end(JSON.stringify(err));
    });
};
