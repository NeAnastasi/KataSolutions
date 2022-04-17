const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const assert = require('assert');
const compare = require('./Solution.js');
const dbase = require('./Db.js');

function stringTrueFalse(tf) {
  let answer = 'true';
  if (tf == false) {
    answer = 'false';
  }
  return answer;
}

let db = dbase.getconnection();

describe("Tests", () => {
  it("ConnectionToDb", () => {
    assert.notEqual(db, null)
  });

  it("IsThingWriteInBd?_trueversion", () => {
      ///
    let a1 = [11, 19, 13, 5];
    let a2 = [11 * 11, 19 * 19, 13 * 13, 5 * 5];
    let start_a2 = a2.slice();
    let res = compare.comp(a1, a2); 
    let tf = stringTrueFalse(res);
    ///``
    // const sql = `SELECT array1, array2, answ FROM answers WHERE array1 = ? AND array2 = ? AND answ = "falsessd"`;
    // let ansqall = false;
    // var ha = db.prepare(sql);
    // var rr = db.exec(`SELECT * FROM answers`);
    // console.log(rr);
    // rr.serialize();
    db.each("SELECT array1, array2, answ FROM answers WHERE array1 = ?", a1, function (err, row) {
        if (row.array1 == a1 && row.array2 == a2) {
            console.log("ja");
        }
        console.log("First array: " + row.array1 + "; Second array: " + row.array2 + "; Answer: " + row.answ);
    });
    //ha.get
  //   const promise1 = new Promise((resolve, reject)=>{
  //         db.get(sql, [a1, start_a2, tf], (err, rows)=>{
  //             if (err)
  //                 reject(err)
  //             resolve(rows)
  //     });
  //   });
  //     promise1.then(results=>{
  //       console.log(results);
  // });

  // it("Comp_\"Same\"ArraysDifferentOrder_True", () => {
  //   a1 = [11, 19, 13, 5];
  //   a2 = [5 * 5, 11 * 11, 13 * 13, 19 * 19];
  //   assert.equal(compare.comp(a1, a2), true);
      //assert.equal(rr, true);
 });

});

// db.close((err) => {
//   if (err) {
//       console.log(err.message);
//   }
// })