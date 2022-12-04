// node 12 and up
import chai from "chai"
import castArray from "../src/castArray.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("../add.js")
const expect = chai.expect

describe("CastArray", () => {
    it("Returns an array when the values are not an array", () =>
    {
        expect(castArray(1)).to.eql([1])
    })
    it("Returns the input array when it is an array", () =>
    {
        expect(castArray([1,2,3])).to.eql([1,2,3])
    })
    it("Returns an empty array when input is empty", () => {
        expect(castArray()).to.eql([undefined])
    })
    it("Returns an array with undefined when input is undefined", () => {
        expect(castArray(undefined)).to.eql([undefined])
    })
    it("Returns an array with null when input is null", () => {
        expect(castArray(null)).to.eql([null])
    })
})