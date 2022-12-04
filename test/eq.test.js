// node 12 and up
import chai from "chai"
import eq from "../src/eq.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("../add.js")
const expect = chai.expect

function someClass(myname) {
    name: myname
}

const firstObject = new someClass("Test")
const secondObject = new someClass("Another test")

describe("Equals", () => {
    it("Returns true when two numerical values are equal", () => {
        expect(eq(1, 1)).to.equal(true)
    })
    it("Returns false when two numerical values are not equal", () => {
        expect(eq(1,2)).to.equal(false)
    })
    it("Returns true for NaN", () => {
        expect(eq(NaN, NaN)).to.equal(true)
    })
    it("Returns true for the same object", () => {
        expect(eq(firstObject, firstObject)).to.equal(true)
    })
    it("Returns false for different objects", () => {
        expect(eq(firstObject, secondObject)).to.equal(false)
    })
})