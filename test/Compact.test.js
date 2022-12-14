// node 12 and up
import chai from "chai"
import compact from "../src/compact.js";
// below for node 10
//var chai = require("chai")
//var sum = require ("../compact.js")
const expect = chai.expect

const falseyArray = [0, 1, false, 2, 3, null];
const falseyArray2 = [4, "", 5, undefined, NaN, 6, 7];

const compactArray = [1,2,3];
const compactArray2 = [4,5,6,7];

describe("Compact", () => {
    it("Returns empty array when every value is falsey", () =>{
        expect(compact([null, false, NaN, 0, "", undefined])).to.eql([])
    })
    it("Returns array with 0, false and null values removed", () =>{
        expect(compact(falseyArray)).to.eql(compactArray)
    })
    it("Returns array with empty, undefined and NaN values removed", () =>{
        expect(compact(falseyArray2)).to.eql(compactArray2)
    })
    it("Returns original array when no falsey values were present", () => {
        expect(compact(compactArray)).to.eql(compactArray)
    })
    it("Throws an error when the array is not an array", () => {
        expect(compact("not an array")).to.throw
    })

})