'use strict';
const deepThroatAssign = require("./deep-throat-assign");

//input test obj
const target = {
    get f(){
        return {
            get ff(){
                return result
            }
            
        }
    },
    set f(value){
        this.a="lol",
        this.b="kek"
    },    
    get ll() {
        return this.a
    },
    a:44,
    b:42
}

//output test obj
let obj =''
deepThroatAssign(target,obj)