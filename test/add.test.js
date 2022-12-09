// node 12 and up
import chai from "chai"
import add from "../src/add.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("../add.js")
const expect = chai.expect


describe("Add", () => {
    it("Adds positive number to positive number", () =>{
        expect(add(3,6)).to.equal(9)
    })
    it("Adds positive number to negative number", () => {
        expect(add(-5,5)).to.eql(0)
    })
    it("Adds negative number to positive number", () => {
        expect(add(3,-6)).to.eql(-3)
    })
    it("Adds negative number to negative number", () => {
        expect(add(-3,-6)).to.eql(-9)
    })
    //it("Throws an error when the parameters are not numbers", () => {
    //    expect(add(a,b)).to.throw('a is not defined')
    //})
})
