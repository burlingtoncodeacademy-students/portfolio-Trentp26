// server set up
const express = require("express");
const path = require("path");
const app = express();
//setting up default port
const port = process.env.PORT || 8000;
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

//middle wear
app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: true }));










//default and error port
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(staticDir))
  })
  
  app.listen(port, () => {
    console.log("listening on port: " + port);
  });