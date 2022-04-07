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
    
    it("Comp_\"Same\"ArraysFraction_True", () => { //new дробные
      let a1 = [11.11, 19.1, 13.3, 5.5];
      let a2 = [11.11*11.11, 19.100*19.10, 13.3*13.3, 5.5*5.5];
      assert.equal(compare.comp(a1, a2), true);
    });

    it("Comp_\"Same\"ArraysNegative_True", () => { //new отрицательные
      let a1 = [-11, -19, -13, -5];
      let a2 = [-11*-11, -19*-19, -13*-13, -5*-5];
      assert.equal(compare.comp(a1, a2), true);
    });

    it("Comp_\"Same\"ArraysMaxValues_True", () => { //new number values
      let a1 = [Number.MAX_VALUE, Number.MIN_VALUE];
      let a2 = [Number.MAX_VALUE * Number.MAX_VALUE, Number.MIN_VALUE * Number.MIN_VALUE];
      assert.equal(compare.comp(a1, a2), true);
    });

    it("Comp_ArraysDifferentNegative_False", () => { //new отрицательные 
      let a1 = [-11, 19, 13, -5];
      let a2 = [-11*11, 19*19, 13*13, -5*5];
      assert.equal(compare.comp(a1, a2), false);
    });

    it("Comp_ArraysDifferentSize(secondlower)_False", () => { //new разный размер 
      let a1 = [11, 19, 13, 5, 6];
      let a2 = [11*11, 19*19, 13*13, 5*5];
      assert.equal(compare.comp(a1, a2), false);
    });

    it("Comp_ArraysDifferentSize(firstlower)_False", () => { //new разный размер 
      let a1 = [11, 19, 13];
      let a2 = [11*11, 19*19, 13*13, 5*5];
      assert.equal(compare.comp(a1, a2), false);
    });

    it("Comp_ArraysDifferentSizeBecauseOfDuplicate_False", () => { //new разный размер из-за дублирования
      let a1 = [11, 19, 13];
      let a2 = [11*11, 19*19, 13*13, 13*13];
      assert.equal(compare.comp(a1, a2), false);
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
  