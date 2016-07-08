"use strict";
const http = require("http");
class App {
    constructor(){
        this.funnyArray= new Array()    
    }
    
    use (fun){
        this.funnyArray.push((req,res)=>{
          try{
              fun(req,res);
            } catch (e){
                throw e;
            }
        })
    }
    
    run (host,port){
        let server= http.createServer(this.funnyArray.shift());
        
        this.funnyArray.map((fun)=>{
            server.on('request',fun);
        });
        
        server.listen(port,host);
    }
    
    start(host,port,fun){
        this.run(host,port)
        fun();
    }
}

module.exports =App