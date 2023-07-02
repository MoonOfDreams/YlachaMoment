const { json } = require("express");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
//const animales=JSON.parse(fs.readFileSync(path.join(__dirname,"../database/animales.json")))
const animales = path.join(__dirname, "../database/animales.json");
const users = path.join(__dirname, "../database/users.json");
module.exports = {
  index: (Req, res) => {
    res.render("home");
  },
  adopta: (Req, res) => {
    let databaseJson = fs.readFileSync(animales, { encoding: "utf-8" });
    res.render("adopta", { animales: JSON.parse(databaseJson) });
  },
  detalleMascota: (Req, res) => {
    res.render("detalleMascota");
  },
  dona: (Req, res) => {
    res.render("dona");
  },
  entrada: (Req, res) => {
    res.render("entrada");
  },
  login: (Req, res) => {
    res.render("login");
  },
  loguearse: (Req, res) => {
    let errores = validationResult(Req);
   
    if(errores.isEmpty()){ 
       let user = {
      email: Req.body.email,
      password: Req.body.password}
      res.redirect("/")
    }else{
      return res.render("login", { mensajeDeError: errores.mapped(), 
        old:Req.body
        });
    }
   
  },
  register: (Req, res) => {
    res.render("register");
  },
  crearUsuario: (Req, res) => {
    let errores = validationResult(Req);

    if (errores.isEmpty()) { let user = {
        nombre: Req.body.nombre,
        apellido: Req.body.apellido,
        email: Req.body.email,
        password: Req.body.password,
        date: Req.body.date,
        avatar: Req.file ? Req.file.filename : "defaultImage.jpg",
      };
      //leer base de datos
      let databaseJson = fs.readFileSync(users, { encoding: "utf-8" });
      console.log(typeof JSON.stringify(databaseJson))
      //transformar base de datos a js
      let db = JSON.parse(databaseJson);
      console.log( db)
      //agrregrar user nuevo
      db.push(user);console.log( db)
      //transformar nueva base a a json
      let dbActual = JSON.stringify(db);
      //reemplazar archivos a base de datos
      fs.writeFileSync(users, dbActual, { encoding: "utf-8" }); 
      return res.redirect("/login")
    } else {
      return res.render("register", { mensajeDeError: errores.mapped(), 
      old:Req.body
      });
     
    }
  },
  detalleMascota: (Req, res) => {
    res.render("detalleMascota");
  },
  nuestraYlacha: (req, res) => {
    res.render("nuestraYlacha");
  },
  procesoAdopcion: (req, res) => {
    res.render("procesoAdopcion");
  },
};
