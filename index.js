const Query = require("minecraft-query");

const q = new Query({ host: "75.1.30.89", port: 9630, timeout: 7500 });

q.fullStat()
  .then((success) => {
    console.log(success);

    return q.basicStat();
  })

  .then((success) => {
    console.log(success);

    q.close();
  });
