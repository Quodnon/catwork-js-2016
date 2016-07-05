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
    
    it('should recieve 0,1 or 2 numbers',()=>{
        add().should.equal(0)
        add('').should.equal(0)
        add('1,3').should.equal(4)
        add('1,4,5').should.equal(10)
    })
    
    it('should allow unlimited amount of numbers',()=>{
        add('1,2,3,4,5,6,7,8,9,10,223').should.equal(278)
    })
    
    it('should allow new lines or commas as separators',()=>{
        add(`1,2,3,4,5
        6,7
        8,9,10,223`).should.equal(278)
    })
    it('should support  custom delimiters',()=>{
        add(`//;
1;2;3;4;5
6,7
8;9;10,223`).should.equal(278)
    })
    
    it('should throw exception on negative',()=>{
       (()=>{ add('-2,3')}).should.throw('negatives not allowed!')
    })
}) 