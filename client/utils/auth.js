const Auth = {
  getToken: () => {
    // (Public) Get Spotify access token
    // Includes logic to check whether token has expired
    let resPromise;
    let localToken = localStorage.getItem("token");
    localToken = localToken ? JSON.parse(localToken) : localToken;

    if (
      localToken &&
      Date.now() < localToken.timestamp + (localToken.expires_in - 10) * 1000
    ) {
      resPromise = Promise.resolve(localToken.access_token);
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
