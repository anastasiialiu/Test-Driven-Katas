const { expect } = require('chai');
const wrap = require('./wrap');


describe('wrap', () => {
    it('is a function', () => {
        expect(typeof wrap).to.equal('function');
    });

    it('Returns empty string if empty string was provided', () => {
        //throw new Error("This test shall fail")
        expect(wrap("", 10)).to.equal("");
      });
    it('returns a string if the string is provided', () => {
        expect(wrap('hello')).to.equal('hello');
    });

    it('Takes a number ', () => {
        expect(wrap('hello', 0)).to.equal('hello'); 
        expect(wrap('hello', -1)).to.equal('false');
    })
});


