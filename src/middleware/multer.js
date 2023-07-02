const multer=require("multer")
const path=require("path")
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null,path.join(__dirname,'../../public/img/avatars') ); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })
  const subirArchivos=multer({storage})
  module.exports=subirArchivos;