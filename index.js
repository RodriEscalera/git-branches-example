const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

const consologuear = () => {
  console.log("aguante san lorenzo");

  return "aguante san lorenzo";
};

const saludar = () => {
  return "hola que haces";
};

consologuear();
saludar();
app.listen(3002, () => {
  console.log("listening on port 3002");
});
