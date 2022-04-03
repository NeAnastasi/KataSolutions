//tests with mocha
const compare = require('./Solution.js');
const assert = require('assert');

describe("Tests", () => {
    it("Comp_\"Same\"ArraysSameOrder_True", () => {
      let a1 = [11, 19, 13, 5];
      let a2 = [11*11, 19*19, 13*13, 5*5];
      assert.equal(compare.comp(a1, a2), true);
    });
    
    it("Comp_\"Same\"ArraysDifferentOrder_True", () => {
      a1 = [11, 19, 13, 5];
      a2 = [5*5, 11*11, 13*13, 19*19];
      assert.equal(compare.comp(a1, a2), true);
    });
  
    it("Comp_\"Same\"ArraysWithDuplicates_True", () => {
      a1 = [11, 11, 13, 5];
      a2 = [11*11, 11*11, 13*13, 5*5];
      assert.equal(compare.comp(a1, a2), true);
    });
    
    it("Comp_ActuallySameArrays_False", () => {
      a1 = [11, 19, 13, 5];
      a2 = [11, 19, 13, 5];
      assert.equal(compare.comp(a1, a2), false);
    });
  
    it("Comp_WrongSquare_False", () => {
      a1 = [11, 19, 13, 5];
      a2 = [11*17, 19*19, 13*13, 5*5];
      assert.equal(compare.comp(a1, a2), false);
    });
  
    it("Comp_ArraysSquareDuplicatedWrong_False", () => {
      a1 = [11, 11, 13, 5];
      a2 = [11*11, 13*13, 13*13, 5*5];
      assert.equal(compare.comp(a1, a2), false);
    });
  
    it("Comp_FirstArrayNull_False", () => {
      a1 = null;
      a2 = [11*11, 13*13, 13*13, 5*5];
      assert.equal(compare.comp(a1, a2), false);
    });
  
    it("Comp_SecondArrayNull_False", () => {
      a1 = [11, 19, 13, 5];
      a2 = null;
      assert.equal(compare.comp(a1, a2), false);
    });
    
      it("Comp_Swap\"Same\"Arrays_False", () => {
      a1 = [11*11, 19*19, 13*13, 5*5];
      a2 = [11, 19, 13, 5];
      assert.equal(compare.comp(a1, a2), false);
    });
  });
  