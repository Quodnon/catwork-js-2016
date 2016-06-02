'use strict';

 

function deep_assign(target,result)
{
    let keys =Object.keys(target)
    let res = null
    for (var i=0; i<keys.length;keys++){
      let  propDescriptor = Object.getOwnPropertyDescriptor(target, keys[i])
        if (typeof propDescriptor.value =='undefined') {
            
        }
    }
    /*
    1-get all properties
    2 - for each key getpropertyDescriptor
        -case object - recursive
        -case propert
    */
}

module.exports = function deepThroatAssign(target, resultObj){
    console.log(`
    1===before
    Target:
    ${target}
    Result:
    ${resultObj}
    `);
    deep_assign(target,resultObj);
    console.log(`
    2===before
    Target:
    ${target}
    Result:
    ${resultObj}
    `);
}