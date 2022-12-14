// node 12 and up
import chai from "chai"
import isEmpty from "../src/isEmpty.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("../isEmpty.js")
const expect = chai.expect

const array = [1,2,3];
const emptyArray = [];
const set = [1,2,3];
const emptySet = [];

function someClass(myname) {
    name: myname
}

const object = new someClass("Test")
const emptyObject = new someClass()

describe("IsEmpty", () => {
    it("Returns false when array is not empty", () => {
        expect(isEmpty(array)).to.eql(false)
    })
    it("Returns true when array is empty", () => {
        expect(isEmpty(emptyArray)).to.eql(true)
    })
    it("Returns false when set is not empty", () => {
        expect(isEmpty(set)).to.eql(false)
    })
    it("Returns true when set is empty", () => {
        expect(isEmpty(emptySet)).to.eql(true)
    })
    it("Returns false when object is not empty", () => {
        expect(isEmpty(object)).to.eql(true)
    })
    it("Returns true when object is empty", () => {
        expect(isEmpty(emptyObject)).to.eql(true)
    })
    it("Returns true when NaN is given as parameter", () => {
        expect(isEmpty(NaN)).to.eql(true)
    })
    it("Returns true when false is given as parameter", () => {
        expect(isEmpty(false)).to.eql(true)
    })


})