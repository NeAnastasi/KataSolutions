const compare = require('./Solution.js');

const assert = require('assert');

const Comp_SameArraysSameOrder_True = () => {
    var a1 = [11, 19, 13, 5];
    var a2 = [11*11, 19*19, 13*13, 5*5];
    assert.strictEqual(compare.comp(a1, a2), true, 'Error in Same Arrays Same Order');
    console.log ("Pass Same Arrays Same Order in comp (True === True)")
}

const Comp_SameArraysDifferentOrder_True = () => {
    var a1 = [11, 19, 13, 5];
    var a2 = [5*5, 11*11, 13*13, 19*19];
    assert.strictEqual(compare.comp(a1, a2), true, 'Error in Same Arrays Different Order');
    console.log ("Pass Same Arrays Different Order in comp (True === True)")
}

const Comp_SameArraysWithDuplicates_True = () => {
    var a1 = [11, 19, 13, 5];
    var a2 = [5*5, 11*11, 13*13, 19*19];
    assert.strictEqual(compare.comp(a1, a2), true, 'Error in Same Arrays With Duplicates');
    console.log ("Pass Same Arrays With Duplicates in comp (True === True)")
}

const Comp_ActuallySameArrays_False = () => {
    var a1 = [11, 19, 13, 5];
    var a2 = [11, 19, 13, 5];
    assert.strictEqual(compare.comp(a1, a2), false, 'Error in Actually Same Arrays');
    console.log ("Pass Actually Same Arrays in comp (False === False)")
}

const Comp_WrongSquare_False = () => {
    var a1 = [11, 19, 13, 5];
    var a2 = [11*17, 19*19, 13*13, 5*5];
    assert.strictEqual(compare.comp(a1, a2), false, 'Error in Wrong Square');
    console.log ("Pass Wrong Square in comp (False === False)")
}

const Comp_ArraysSquareDuplicatedWrong_False = () => {
    var a1 = [11, 11, 13, 5];
    var a2 = [11*11, 13*13, 13*13, 5*5];
    assert.strictEqual(compare.comp(a1, a2), false, 'Error in Arrays Square Duplicated Wrong');
    console.log ("Pass Arrays Square Duplicated Wrong in comp (False === False)")
}

const Comp_FirstArrayNull_False = () => {
    var a1 = null;
    var a2 = [11*11, 13*13, 13*13, 5*5];
    assert.strictEqual(compare.comp(a1, a2), false, 'Error in First Array Null');
    console.log ("Pass First Array Null in comp (False === False)")
}

const Comp_SecondArrayNull_False = () => {
    var a1 = [11, 11, 13, 5];
    var a2 = null;
    assert.strictEqual(compare.comp(a1, a2), false, 'Error in Second Array Null');
    console.log ("Pass Second Array Null in comp (False === False)")
}

const Comp_SwapSameArrays_False = () => {
    var a1 = [11*11, 19*19, 13*13, 5*5];
    var a2 = [11, 19, 13, 5];
    assert.strictEqual(compare.comp(a1, a2), false, 'Error in Swap Same Arrays');
    console.log ("Pass Swap Same Arrays in comp (False === False)")
}

const tests = [
    Comp_SameArraysSameOrder_True,
    Comp_SameArraysDifferentOrder_True,
    Comp_SameArraysWithDuplicates_True,
    Comp_ActuallySameArrays_False,
    Comp_WrongSquare_False,
    Comp_ArraysSquareDuplicatedWrong_False,
    Comp_FirstArrayNull_False,
    Comp_SecondArrayNull_False,
    Comp_SwapSameArrays_False
]

for (const test of tests) {
    test();
}