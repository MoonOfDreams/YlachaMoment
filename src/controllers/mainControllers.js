const { json } = require("express");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
//const animales=JSON.parse(fs.readFileSync(path.join(__dirname,"../database/animales.json")))
const animales = path.join(__dirname, "../database/animales.json");
const users = path.join(__dirname, "../database/users.json");
const comentarios = path.join(__dirname, "../database/comentarios.json");
module.exports = {
  index: (Req, res) => {
let databaseJson = fs.readFileSync(animales, { encoding: "utf-8" });
 
res.render("home", { animales: JSON.parse(databaseJson)   });
  },
  contacto: (Req, res) => {
    res.render("contacto");
  },
  contactarse: (Req, res) => {
    let comentario = {
      nombre: Req.body.nombre,
      email: Req.body.email,
      comentario: Req.body.comentario,
    };
    //leer base de datos
    let databaseJson = fs.readFileSync(comentarios, { encoding: "utf-8" });
    console.log(typeof JSON.stringify(databaseJson));
    //transformar base de datos a js
    let db = JSON.parse(databaseJson);
    console.log(db);
    //agrregrar user nuevo
    db.push(comentario);
    console.log(db);
    //transformar nueva base a a json
    let dbActual = JSON.stringify(db);
    //reemplazar archivos a base de datos
    fs.writeFileSync(comentarios, dbActual, { encoding: "utf-8" });
    //meterle un alert que diga "enviado con exito"
    res.redirect("/contacto")
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

    if (errores.isEmpty()) {
      let db = JSON.parse(fs.readFileSync(users, { encoding: "utf-8" }));
      let user = db.find((user) => {
        return user.email == Req.body.email;
      });
      Req.session.user = user;
      console.log(Req.session);
      res.redirect("/");
    } else {
      return res.render("login", {
        mensajeDeError: errores.mapped(),
        old: Req.body,
      });
    }
  },
  register: (Req, res) => {
    res.render("register");
  },
  crearUsuario: (Req, res) => {
    let errores = validationResult(Req);

    if (errores.isEmpty()) {
      let user = {
        nombre: Req.body.nombre,
        apellido: Req.body.apellido,
        email: Req.body.email,
        genero: Req.body.genero,
        password: Req.body.password,
        date: Req.body.date,
        avatar: Req.file ? Req.file.filename : "defaultImage.jpg",
      };
      //leer base de datos
      let databaseJson = fs.readFileSync(users, { encoding: "utf-8" });
      console.log(typeof JSON.stringify(databaseJson));
      //transformar base de datos a js
      let db = JSON.parse(databaseJson);
      console.log(db);
      //agrregrar user nuevo
      db.push(user);
      console.log(db);
      //transformar nueva base a a json
      let dbActual = JSON.stringify(db);
      //reemplazar archivos a base de datos
      fs.writeFileSync(users, dbActual, { encoding: "utf-8" });
      return res.redirect("/login");
    } else {
      return res.render("register", {
        mensajeDeError: errores.mapped(),
        old: Req.body,
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
