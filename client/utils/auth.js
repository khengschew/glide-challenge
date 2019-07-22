const Auth = {
  getToken: () => {
    // (Public) Get Spotify access token
    // Includes logic to check whether token has expired
    const localToken = localStorage.getItem("token");
    let resPromise;

    if (localToken) {
      resPromise = Promise.resolve(JSON.parse(localToken).access_token);
    } else {
      resPromise = Auth.__fetchToken()
        .then((res) => res.json())
        .then((res) => {
          Auth.__saveToken(res);
          return res.access_token;
        })
        .catch((err) => console.log(err));
    }

    return resPromise;
  },
  __saveToken: (tokenObj) => {
    // Save retrieved token to localStorage
    tokenObj.timestamp = Date.now();
    localStorage.setItem("token", JSON.stringify(tokenObj));
  },
  __fetchToken: () => {
    // Send POST request to Spotify for access token
    return fetch("/api/token");
  },
};

export default Auth;
