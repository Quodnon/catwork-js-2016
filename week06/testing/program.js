'use strict';

function upperCase (inputString)
{
    return inputString.toUpperCase()
}

function repeat (operation, num){
    for (var i=0;i<num;i++){
        operation()
    }
}

const  doubleAll =function (numbers) {
    // body...
    return numbers.map(function(a){
        return a*2
    })
}

//#4
const getShortMessages = function (messages) {
    return messages.filter(item=>{
        return item.message.length<50
    }).map(item=>{
        return item.message
    })
    
}


//#5
function checkUserValid(goodUsers) {
    return function allUsersValid(submittedUsers){
        return submittedUsers.every(user=>{
            return goodUsers.some(gu=>{
                return gu.id==user.id
            },user);
        })
    }   
}

//#6
function countWords(inputWords) {
    return inputWords.reduce(function (prev,currV,currInd,arr) {
        let obj=prev;
        if (!obj[currV]){obj[currV]=1} else{ obj[currV]++};
        return obj
    },{})
}


//#7
function reduce(arr,fn,initial) {
    function recur (_arr,_fn,_initial){
        if (_arr.length==0){
            return _initial
        } else {
            let ss=_arr.splice(0,1);
            return recur(ss,_fn, _fn(_initial,ss[0],0,ss) )    
        }    
    }
     if (_arr.length==0){
            return initial
     }
    return recur(arr,fn,initial)
}

//#12
function Spy (target,method)
{
    var result={
        count:0
    };
    target.old_method=target[method];
    

    target[method]= function () {
       result.count++  ;
        
        target.old_method.apply(target,arguments)
     
    }
    return result
 }
 

//change exports function
module.exports=Spy