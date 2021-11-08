const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin:
      "https://api.covidactnow.org/v2/state/TX.json?apiKey=126060a4cb8344189ce0b9a6d84c5173",
  })
);
