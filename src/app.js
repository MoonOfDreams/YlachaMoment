const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const router = require("./routers/mainRouters.js");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(router);

app.listen(3000, () => {
  console.log("listo para ejecutar " + "http://localhost:3000/");
});
