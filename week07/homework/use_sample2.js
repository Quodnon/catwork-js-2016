"use strict"
module.exports=(req, res)  => {
  console.log(req.headers); 
  res.end("Hello World");
}