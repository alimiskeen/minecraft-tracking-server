const express = require("express");
const app = express();
const port = 80;

const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("public"));

const Query = require("minecraft-query");

app.get("/", (req, res) => {
  const q = new Query({ host: "51.81.182.26", port: 7744, timeout: 1000 });
  q.fullStat().then(
    (success) => {
      res.render("home", { info: success });
      // res.send(success);
      q.close();
    },
    (failure) => {
      res.render("error");
    }
  );
});

app.listen(port, () => {
  console.log(`started server on port: ${port}`);
});
