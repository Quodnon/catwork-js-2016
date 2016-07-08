"use strict";
let http = require("http");
class App {
    constructor(){
        this.funnyArray= new Array()    
    }
    
    use (fun){
        this.funnyArray.push((err,req,res)=>{
          try{
              fun(req,res);
              
            } catch (e){
                throw e;
            }
        })
    }
    
    run (host,port){
        let server= http.createServer(this.funnyArray.shift());
        server.listen(port,host);
    }
    
    start(host,port,fun){
        this.use(fun);
        this.run(host,port)
    }
}

module.exports =App