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
  var stats = {};
  q.fullStat()
    .then((success) => {
      // console.log(success);
      stats = success;
      return q.basicStat();
    })
    .then((success) => {
      // console.log(success);
      q.close();
    });
  return stats;
}

let obj = getServerInfo();
console.log(obj);
