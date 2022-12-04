// node 12 and up
import chai from "chai"
import every from "../src/every.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("../add.js")
const expect = chai.expect

const allPositive = [1, 2, 3, 4, 5];
const isPositive = (x) => {
    return (x >= 0) ? true : false;
}
const oneNegative = [-1, 2, 3, 4, 5];
const allNegative = [-1, -2, -3, -4, -5];
const onePositive = [1, -2, -3, -4, -5];

describe("Every", () => {
    it("Returns true when all elements of array fulfil the predicate", () => {
        expect(every(allPositive, isPositive)).to.equal(true)
    })
    it("Returns false when one element doesn't fulfil the predicate", () => {
        expect(every(oneNegative, isPositive)).to.equal(false)
    })
    it("Returns false when none of the elements fulfil the predicate", () => {
        expect(every(allNegative, isPositive)).to.equal(false)
    })
    it("Returns false when only one element fulfils the predicate", () => {
        expect(every(onePositive, isPositive)).to.equal(false)
    })
    it("Throws an error when the predicate is not a function", () => {
        expect(every.bind(every, [allPositive, "notAFunction"])).to.throw('predicate is not a function')
    })
    it("Throws an error when the array is not an array", () => {
        expect(every.bind(every, ["not an Array", isPositive])).to.throw()
    })
})