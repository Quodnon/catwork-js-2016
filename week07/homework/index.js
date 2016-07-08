"use strict"

const App =require("./use.js")

const {host,port} = require("config")

let app = new App();

app.use((x,y)=>{console.log('hello')});
app.use((x,y)=>{console.log('goodbye')});

app.start(host,port, () => console.log("listening on " + port));