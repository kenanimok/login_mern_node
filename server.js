const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");

const app = express();

const port = "4000";

// middle
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb" }));
app.use(cors());

//Route
// app.get("/", (req, res) => {
//   res.send("Hello api ");
// });

//1
// app.use("/api", require("./routes/api"));

//2
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.listen(port, () => {
  console.log("server => run  yeyeye port 4000");
});
