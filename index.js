const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

const consologuear = () => {
  console.log("hola mundo");
  return "hola mundo";
};

const cocoBasile = () => {
  return "blue label de johnny walker";
};

consologuear();
cocoBasile();
app.listen(3002, () => {
  console.log("listening on port 3002");
});
