const os = require("os");
const cluster = require("cluster");
const cores = os.cpus().length;

// internally cluster runs both if and else code sequentially

if (cluster.isMaster) {
  console.log("Master, these cores you have", cores);
  for (let i = 0; i <= cores; i++) {
    cluster.fork();
    console.log("Fork for " + i + " core");
  }

  cluster.on("online", (worker) => {
    console.log("Worker active ", worker.id, "Process id ", worker.process.id);
  });

  cluster.on("exit", (worker) => {
    console.log("Worker exit ", worker.id, "Process id ", worker.process.id);
  });
} else {
  const express = require("express");
  const bodyParser = require("body-parser");

  const app = express();
  app.use(bodyParser.json());

  app.use("/", require("./routes/route"));

  const server = app.listen(process.env.PORT || 1234, () => {
    console.log("Server started...", server.address().port);
  });
}

// console.log(process.env.UV_THREADPOOL_SIZE);
