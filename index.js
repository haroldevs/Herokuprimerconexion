const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("JUNIOR Y KEVIN SIEMPRE JUNTOS!!!");
});

app.listen(process.env.PORT || 5000);
