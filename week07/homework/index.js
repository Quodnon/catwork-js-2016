"use strict"

const App =require("./use.js")

const {host,port} = require("config")

let app = new App();

const use1=require('./use_sample1.js')
const use2=require('./use_sample2.js')
app.use(use1)
app.use(use2)

app.start(host,port, () => console.log("listening on " + port));