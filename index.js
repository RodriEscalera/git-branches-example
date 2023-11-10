const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

const consologuear = () => {
  console.log("hola mundo");
};
consologuear();
app.listen(3001, () => {
  console.log("listening on port 3001");
});
