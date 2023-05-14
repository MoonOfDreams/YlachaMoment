const express= require("express");
const router= express.Router();
const controllers=require("../controllers/mainControllers");

  
router.get("/", controllers.index);
router.get("/adopta", controllers.adopta);
router.get("/detalleMascota", controllers.detalleMascota);
router.get("/dona", controllers.dona);
router.get("/entrada", controllers.entrada);
router.get("/login", controllers.login);
router.get("/register", controllers.register);
router.get("/procesoAdopcion", controllers.procesoAdopcion);
router.get("/nuestraYlacha", controllers.nuestraYlacha);

module.exports = router;