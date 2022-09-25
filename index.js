const express = require("express");
const app = express();
const port = 80;

const app2 = express();

const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("public"));

const Query = require("minecraft-query");

app.get("/", (req, res) => {
  const q = new Query({ host: "51.81.182.26", port: 25565, timeout: 1000 });
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

app2.get("/", (req, res) => {
  res.redirect("51.81.182.26");
});

app.listen(port, () => {
  console.log(`started server on port: ${port}`);
});

app2.listen(25565, () => {
  console.log("mc port is now rerouting");
});
