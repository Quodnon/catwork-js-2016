"use strict"

const App =require("./use.js")

const {host,port} = require("config")

let app = new App();

app.use((req, res)  => {
  console.log("url", req.url); 
  console.log("method", req.method); 
})
app.use((req, res) => {
  console.log(req.headers); 
  res.end("Hello World");
})

app.start(host,port, () => console.log("listening on " + port));