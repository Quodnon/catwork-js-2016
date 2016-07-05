'use strict';

const add =str=>{
    if(!str || str=='') return 0
    let array= str.match(/^\/\/\[?(.+)\]?\n/g)
    if (array){
        str = str.substring(array[0].length,str.length);
        var delim = array[0].substr(2,array[0].length-3)
        var pattern = "[\("+delim.replace(/[\[\]]/g,'')+"\)\n,]"
       // str=str.replace(delim,',');
    } else {
        var pattern = '[,\n]'
    }
    
    let summs = str.split(new RegExp(pattern,'g'))
       summs.every((el)=>{
                    if(parseInt(el)>=0){
                        return true
                    } else{
                        throw Error('negatives not allowed!')
                    } 
            })
    
    return summs
        .map((el)=>{
            return parseInt(el)>1000?0:el
        })
        .reduce((prev,curr)=>parseInt(prev,10)+parseInt(curr,10))
} 
module.exports = add