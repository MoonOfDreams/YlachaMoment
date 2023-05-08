const express= require("express");
const router= express.Router();
const controllers=require("../controllers/mainControllers");

  
router.get("/", controllers.index);
router.get("/register", controllers.register);
router.get("/login", controllers.login);
router.get("/adopta", controllers.adopta);
router.get("/nuestraYlacha", controllers.nuestraYlacha);


module.exports = router;