"use strict"


const PostHtml = require("posthtml")
const html = 
`
<em>Hello, world!</em>
`
PostHtml().process(html)
.then(e=>{
console.log(e.html)
}
 )
