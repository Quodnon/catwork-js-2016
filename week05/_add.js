'use strict';


const add = strings=>{
    if (strings=="") return 0;
    let array =strings.match(/^/g)
    let pattern =/[,\n]/g
/*    if (array)
    {
        let[{length},delim]=array
        strings=strings.slice(length)
        var pattern =RegExp(delim.pop(),'g');
    } else {
        pattern =/[,\n]/g
    }*/
        
    return strings.split(pattern)
                .map(str=>str==""?NaN:+str)
                .reduce((sum,num)=>sum+num)
}

module.exports=add