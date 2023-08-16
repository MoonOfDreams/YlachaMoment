const express = require("express");
const { check, body } = require("express-validator");
const router = express.Router();
const controllers = require("../controllers/mainControllers");
const subirArchivos = require("../middleware/multer");
const {validaciones,validacionComentarios, validacionesLogin}=require("../middleware/user")


router.get("/", controllers.index);
router.get("/contacto", controllers.contacto);
router.post("/contacto",validacionComentarios, controllers.contactarse);
router.get("/detalleMascota", controllers.detalleMascota);
router.get("/dona", controllers.dona);
router.get("/entrada", controllers.entrada);
router.get("/login", controllers.login);
router.post("/login",validacionesLogin, controllers.loguearse);
router.get("/register", controllers.register);

router.post(
  "/register",
  subirArchivos.single("avatar"),
  validaciones,
  controllers.crearUsuario
);

router.get("/procesoAdopcion", controllers.procesoAdopcion);
router.get("/nuestraYlacha", controllers.nuestraYlacha);

module.exports = router;
