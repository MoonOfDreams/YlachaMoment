const express = require("express");
const app = express();
const router =require("./routers/mainRouters.js");
const path = require("path");
const session=require("express-session")
app.use(express.static("public"));

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static("public"))
app.use(session({ secret:"Ylacha Moment",
resave: false, //por cada req ala server ssee reinnicia la session cookie
saveUninitialized: true //  si es falsa,la session cookie no se guarda hasta que se modifique logueandose
}))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(router);

app.listen(3000, () => {
  console.log("listo para ejecutar " + "http://localhost:3000/");
});
