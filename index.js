const express = require("express");
const app = express();
const port = 80;

const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("public"));

const Query = require("minecraft-query");

app.get("/", (req, res) => {
  const q = new Query({ host: "localhost", port: 9630, timeout: 7500 });
  q.fullStat().then((success) => {
    // console.log(success);
    res.render("home", { players: success.players });
    q.close();
  });
});

app.listen(port, () => {
  console.log("started server on port: ${port}");
});
