const fs=require("fs");
const path=require("path");
//const animales=JSON.parse(fs.readFileSync(path.join(__dirname,"../database/animales.json")))
const animales = require("../database/animales.json")
module.exports={
    index:(Req,res)=>{
        res.render("home")
    },
    adopta:(Req,res)=>{
        res.render("adopta",{animales})
    },
    detalleMascota:(Req,res)=>{
    res.render("detalleMascota")
    },
    dona:(Req,res)=>{
        res.render("dona")
    },
    entrada:(Req,res)=>{
    res.render("entrada")
    },
    login:(Req,res)=>{
    res.render("login")
    },
    register:(Req,res)=>{
    res.render("register")
    },
    detalleMascota:(Req,res)=>{
    res.render("detalleMascota")
    },
 nuestraYlacha:(req,res)=>{
    res.render("nuestraYlacha")
 },
 procesoAdopcion:(req,res)=>{
    res.render("procesoAdopcion")
 }
}
