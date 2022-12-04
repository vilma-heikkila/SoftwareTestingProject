// node 12 and up
import chai from "chai"
import words from "../src/words.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("../add.js")
const expect = chai.expect

describe("Words splits string into an array of its words", () => {
    it("Returns correct words", () => {
        expect(words('this is test')).to.eql(['this', 'is', 'test'])
    })
    it("Returns correct words when there are some non-words", () => {
        expect(words('this is test &&&')).to.eql(['this', 'is', 'test'])
    })
    it("Returns only the correct word", () => {
        expect(words('this is test', 'test'), () => {
            expect(words('this is test')).to.eql('test')
        })
    })
    it("Returns no words when there are none", () => {
        expect(words('&&& !!!')).to.eql([])
    })
    it("Throws error when input is not a string", () => {
        expect(words.bind(words, 123)).to.throw('string.match is not a function')
    })
})