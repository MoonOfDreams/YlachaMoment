const path=require("path");
const {check, body}=require("express-validator")
module.exports={
   validacionesLogin:[check("email")
    .notEmpty()
    .withMessage("escrribe un email")
    .bail()
    .isEmail()
    .withMessage("email invalido"),
    check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria.")
    .isLength({ min: 8 })
    .withMessage("contraseña muy corta"),],
     validaciones : [
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
        .withMessage("email invalido"),
      check("password")
        .notEmpty()
        .withMessage("La contraseña es obligatoria.")
        .isLength({ min: 8 })
        .withMessage("contraseña muy corta"),
      check("avatar").custom((value, { req }) => {
        let file = req.file;
        let archivos = [".jpg", ".png", ".gif"];
    
        if (!file) {
          throw new Error("tienes que subir una imagen");
        } else { 
          let fileExtension = path.extname(file.originalname)
          if (!archivos.includes(fileExtension)) {
            throw new Error(
              "las extenciones permitidas son " `\ ${archivos.join(", ")}`)
          }
        }
    
        return true;
      }),
    ]
}