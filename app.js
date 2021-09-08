const express = require("express");
const app = express();

const path = require("path")

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
} );
app.listen(3004, () => 
    console.log("Servidor corriendo http://localhost:3004/")
);