const fs=require("fs");
const path=require("path");
module.exports={
    index:(Req,res)=>{
    res.render("home")
    },
    login:(Req,res)=>{
    res.render("login")
    },
    register:(Req,res)=>{
    res.render("register")
    },
    adopta:(Req,res)=>{
    res.render("adopta")
    },
    nuestraYlacha:(Req,res)=>{
    res.render("nuestraYlacha")
    }
}