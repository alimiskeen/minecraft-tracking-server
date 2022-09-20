// const express = require("express");
// const app = express();
// const port = 80;

const Query = require("minecraft-query");
const q = new Query({ host: "localhost", port: 9630, timeout: 7500 });

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
  var serverInformation;

  q.fullStat()
    .then((success) => {
      console.log(success);
      serverInformation = success;
      return q.basicStat();
    })
    .then((success) => {
      console.log(success);
      q.close();
    });

  return serverInformation;
}

console.log(getServerInfo());
