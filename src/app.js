const express = require("express");
const morgan = require("morgan");
// Importamos libreria 
const fileUpload = require("express-fileupload");
var cors = require("cors");

//*Routes
const users = require("./routes/users.routes");
const files = require("./routes/upload-file.routes");

//* Express
const app = express();

//* Cors
app.use(cors());

//* Settings
app.set("port", 3000); //! The port
app.use(express.urlencoded({ extended: false })); //! Parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(express.json()); //! Return the petition as an object json

//* MiddleWares
app.use(morgan("dev"));

//Configuramos para consumo de la API
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    limits: { fileSize: 50 * 1024 * 1024 },
    createParentPath: true,
  })
);

// Direccion d elas rutas
app.use(/* Routes */ users, files);

module.exports = app;
