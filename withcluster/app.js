const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use("/", require("./routes/route"));

const server = app.listen(process.env.PORT || 1234, () => {
  console.log("Server started...", server.address().port);
});

console.log(process.env.UV_THREADPOOL_SIZE);
