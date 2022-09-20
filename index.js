// const express = require("express");
// const app = express();
// const port = 80;

const Query = require("minecraft-query");
// const q = new Query({ host: "localhost", port: 9630, timeout: 7500 });

// q.fullStat()
//   .then((success) => {
//     console.log(success);

//     return q.basicStat();
//   })

//   .then((success) => {
//     console.log(success);

//     q.close();
//   });

// app.get("/", (req, res) => {});

function getServerInfo() {
  const q = new Query({ host: "localhost", port: 9630, timeout: 7500 });
  const statPromise = q.fullStat().then((success) => success);

  return statPromise;
}

var shit;
getServerInfo().then((a) => {
  shit = a;
});
console.log(shit);
