// node 12 and up
import chai from "chai"
import drop from "../src/drop.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("../drop.js")
const expect = chai.expect

const array = [1,2,3];

describe("Drop", () => {
    it("Drops default number (n=1) of elements when n is not given", () =>{
        expect(drop(array)).to.eql([2,3])
    })
    it("Drops n elements", () => {
        expect(drop(array,2)).to.eql([3])
    })
    it("Returns empty array when more than number of elements is dropped", () => {
        expect(drop(array,5)).to.eql([])
    })
    it("Returns empty array when exact number of elements is dropped", () => {
        expect(drop(array,3)).to.eql([])
    })
    it("Does not drop elements when n=0", () => {
        expect(drop(array,0)).to.eql(array)
    })
    it("Throws an error when parameter is not an array", () => {
        expect(drop("not array")).to.throw
    })

})