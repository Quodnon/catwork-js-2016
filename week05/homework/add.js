'use strict';

const add =str=>{
    if(!str || str=='') return 0
    let array= str.match(/^\/\/(.+)\n/g)
    if (array){
        str = str.substring(array[0].length,str.length);
        var pattern = "["+array[0].substr(2,1)+"\n,]"
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
        .reduce((prev,curr)=>parseInt(prev,10)+parseInt(curr,10))
} 
module.exports = add