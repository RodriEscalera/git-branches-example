const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

const consologuear = () => {
  console.log("hola amigo de youtube");

  return "hola amigos de youtube!";
};

const saludar = () => {
  console.log("Hola pibe!");
};

consologuear();
saludar();
app.listen(3002, () => {
  console.log("listening on port 3002");
});
