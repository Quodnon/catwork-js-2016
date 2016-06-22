- js y combinator
- js-quiz
- http://davidshariff.com/js-quiz/#q=2

-reutrn NO_LINE_TERMINATOR

=======================
- date oritityoe symbol.toPrimitive 
- default hint in operators first valueOF()
- 

--from LEFT TO RIGHT

#WTF
```
var x = 1;
  if (function f(){}) {
    x += typeof f;
  }
  x;
  
````



==============
[quiz 1](http://davidshariff.com/js-quiz/)
[quiz 2](http://perfectionkills.com/javascript-quiz/)
[quiz 2](http://perfectionkills.com/javascript-quiz-es6/)



#WTF

(function() {
  return [
    (() => this.x).bind({ x: 'inner' })(),
    (() => this.x)()
  ]
}).call({ x: 'outer' });


#deep assign part

//map set date regexp
new from.constructor(from)

//new from.constructor()