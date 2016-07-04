'use strict';

require("chai").should()

const main =require("./package").main

const add = require(main)

describe("add",()=>{
    it('should be a function with 1 param',()=>
    {
        add.should
            .be.a('function')
            .have.lengthOf(1)
    })
    it('should add up to 3 numbers',()=>{
        add('1').should.equal(1)
        add('2,5').should.equal(7)
        add('3,6,1').should.equal(10)
    })
    
    it('should handle newlines between numbers',()=>{
        add('1\n2,3').should.equal(6)
        add('1,\n').should.be.nan
    })
    
    it('should return nan for incorrect input',()=>{
        add('1\n2,3').should.equal(6)
        add('1,\n').should.be.nan
    })
    
    it('should allow supplying custom delimiter',()=>{
        add('//;\n1;2;3').should.equal(6)
        add('//*\n1*2*5').should.equal(7)
    })
 
    
})