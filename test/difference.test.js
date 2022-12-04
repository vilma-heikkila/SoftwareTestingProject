// node 12 and up
import chai from "chai"
import difference from "../src/difference.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("../add.js")
const expect = chai.expect

const array = [1,2,3,4,5,6];
const exclude = [1,3,5];
const filtered = [2,4,6];

describe("Difference", () => {
    it("Returns correct filtered values", () => {
        expect(difference(array, exclude)).to.eql(filtered)
    })
    it("Returns empty when excluding all values", () => {
        expect(difference(array, array)).to.eql([])
    })
    it("Returns the same values when excluding none", () => {
        expect(difference(array, [])).to.eql(array)
    })
    it("Throws error when the array to inspect is not an array", () => {
        expect(difference("notAnArray", exclude)).to.throw
    })
    it("Throws error when the array to exclude is not an array", () => {
        expect(difference(array, "notAnArray")).to.throw
    })
})