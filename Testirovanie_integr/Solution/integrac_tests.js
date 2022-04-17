//mocha from terminal
const assert = require('assert');
const prog = require('./Solution');
const fs = require('fs');
const { set } = require('express/lib/application');

describe("Tests", () => {
    it("CheckWriteTest_withfalse", () => {
        var res = prog.start_do("input_false", "output");
        let putContent = fs.readFileSync('./input_false.txt', 'utf8');
        var answ = "false";
        if (res == true) {
            answ = "true"
        }
        putContent = putContent.split('\r').join('');
        putContent += '\n' + answ;
        let outputContent = fs.readFileSync('./output.txt', 'utf8');
        assert.equal(putContent, outputContent);
    });

    it("CheckWriteTest_withtrue", () => {
        set.Ti
        var res = prog.start_do("input_true", "output2");
        let putContent = fs.readFileSync('./input_true.txt', 'utf8');
        var answ = "false";
        if (res == true) {
            answ = "true"
        }
        putContent = putContent.split('\r').join('');
        putContent += '\n' + answ;
        let outputContent = fs.readFileSync('./output2.txt', 'utf8');
        assert.equal(putContent, outputContent);
    });

    it("CheckWriteTest_WrongInputFileName", () => {
        var res = prog.start_do("nothing", "output");
        assert.equal(res, null);
    });

    it("CheckWriteTest_WrongInput1", () => {
        var res = prog.start_do("input_strangefirst", "output3");
        assert.equal(res, null);
    });

    it("CheckWriteTest_WrongInput2", () => {
        var res = prog.start_do("input_strangesecond", "output4");
        assert.equal(res, null);
    });

    it("CheckWriteTest_withnull1", () => {
        set.Ti
        var res = prog.start_do("input_null1", "output3");
        let putContent = fs.readFileSync('./input_null1.txt', 'utf8');
        var answ = "false";
        if (res == true) {
            answ = "true"
        }
        putContent = putContent.split('\r').join('');
        putContent += '\n' + answ;
        let outputContent = fs.readFileSync('./output3.txt', 'utf8');
        assert.equal(putContent, outputContent);
    });

    it("CheckWriteTest_withnullboth", () => {
        set.Ti
        var res = prog.start_do("input_null2", "output4");
        let putContent = fs.readFileSync('./input_null2.txt', 'utf8');
        var answ = "false";
        if (res == true) {
            answ = "true"
        }
        putContent = putContent.split('\r').join('');
        putContent += '\n' + answ;
        let outputContent = fs.readFileSync('./output4.txt', 'utf8');
        assert.equal(putContent, outputContent);
    });

    it("CheckWriteTest_withnullboth", () => {
        set.Ti
        var res = prog.start_do("input_nullboth", "output5");
        let putContent = fs.readFileSync('./input_nullboth.txt', 'utf8');
        var answ = "false";
        if (res == true) {
            answ = "true"
        }
        putContent = putContent.split('\r').join('');
        putContent += '\n' + answ;
        let outputContent = fs.readFileSync('./output5.txt', 'utf8');
        assert.equal(putContent, outputContent);
    });
});