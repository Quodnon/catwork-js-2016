"use strict";
let http = require("http");
class App {
    constructor(){
        this.funnyArray= new Array()    
    }
    
    use (fun){
        this.funnyArray.push(fun)
    }
    run (args){
        args.map((argument)=>{
            argument()
        })
    }
    start(host,port,fun){
        this.use(fun);
        this.run(this.funnyArray)
    }
}

module.exports =App