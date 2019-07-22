const express = require("express");
const path = require("path");
require("dotenv").config();
const Auth = require("./utils/auth.js");
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, "../client/public")));

app.get("/api/token", Auth.getToken);

app.listen(port, () => console.log(`listening on port: ${port}`));
