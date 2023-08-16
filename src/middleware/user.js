const path = require("path");
const db = require("../database/users.json");
const { check, body } = require("express-validator");
module.exports = {
  validacionesLogin: [
    check("email")
      .notEmpty()
      .withMessage("escrribe un email")
      .bail()
      .isEmail()
      .withMessage("email invalido"),
      check("password")
      .notEmpty()
      .withMessage("La contraseña es obligatoria.")
      .isLength({ min: 8 })
      .withMessage("contraseña muy corta"),
    ],
    validacionComentarios:[
    check("nombre")
      .notEmpty()
      .withMessage("El nombre es obligatorio.")
      .bail()
      .isLength({ min: 4 })
      .withMessage("nombre muy corto"),
      check("email")
      .notEmpty()
      .withMessage("escrribe un email")
      .bail()
      .isEmail()
      .withMessage("email invalido"),
      check("comentario")
      .notEmpty()
      .withMessage("Este campo es obligatorio.")
      .bail()
      .isLength({ max:500 })
    ]
  ,
  validaciones: [
    check("nombre")
      .notEmpty()
      .withMessage("El nombre es obligatorio.")
      .bail()
      .isLength({ min: 4 })
      .withMessage("nombre muy corto"),
    check("apellido")
      .notEmpty()
      .withMessage("El apellido es obligatorio.")
      .isLength({ min: 5 })
      .withMessage("apellido muy corto"),
    check("email")
      .notEmpty()
      .withMessage("escrribe un email")
      .bail()
      .isEmail()
      .withMessage("email invalido").bail().custom(
        (value)=>{
         return !db.find(user=>{
            return user.email==value
          })
        }
      ).withMessage("el email ya existe"),
    check("genero").notEmpty().withMessage("debes indicar uno"),

    check("password")
      .notEmpty()
      .withMessage("La contraseña es obligatoria.")
      .isLength({ min: 8 })
      .withMessage("contraseña muy corta"),
  ],
};
