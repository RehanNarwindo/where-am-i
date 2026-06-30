// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
// }
const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");

const port = process.env.port || 3000;
const index = require("./routes/index");


app.use(express.urlencoded({ extended: false })); 
app.use(express.json());
app.use(cors());


app.use("/", index);

app.listen(port, () => {
  console.log(` |=========================|`);
  console.log(` | Running on local : ${port} | `);
  console.log(` |=========================|`);

});

module.exports = app;