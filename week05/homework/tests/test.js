"use strict";
require("chai").should();
 
const main  = require("../package").main

const add = require(main)

describe('add',()=>{
    it('should be a function with 1 parameter',()=>{
        add.should
        .be.a('function')
        .have.lengthOf(1)
    })
}) 