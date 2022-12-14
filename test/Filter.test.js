// node 12 and up
import chai from "chai"
import filter from "../src/filter.js";
// below for node 10
//var chai = require("chai")
//var sum = require ("../filter.js")
const expect = chai.expect

const allPositive = [1, 2, 3, 4, 5];
const isPositive = (x) => {
    return (x >= 0) ? true : false;
}
const oneNegative = [-1, "a", 3, 4, 5];
const allNegative = [-1, -2, -3, -4, -5];
const onePositive = [1, -2, NaN, -4, -5];

describe("Filter", () => {
    it("Returns original array when all elements of array fulfil the predicate", () => {
        expect(filter(allPositive, isPositive)).to.deep.equal(allPositive)
    })
    it("Returns correct array when one element doesn't fulfil the predicate", () => {
        expect(filter(oneNegative, isPositive)).to.deep.equal([3, 4, 5])
    })
    it("Returns correct array when only one element fulfils the predicate", () => {
        expect(filter(onePositive, isPositive)).to.deep.equal([1])
    })
    it("Returns empty array when none of the elements fulfil the predicate", () => {
        expect(filter(allNegative, isPositive)).to.deep.equal([])
    })
    it("Throws an error when the predicate is not a function", () => {
        expect(filter.bind(filter, [allPositive, "notAFunction"])).to.throw('predicate is not a function')
    })
    it("Throws an error when parameter to iterate over is not an array", () => {
        expect(filter.bind(filter, ["not an Array", isPositive])).to.throw()
    })
})