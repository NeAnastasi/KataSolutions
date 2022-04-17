const sqlite3 = require('sqlite3').verbose();
const path = require('path');

let db = getconnection();

function getconnection() {
    return new sqlite3.Database(path.resolve(__dirname, './database.db'), sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.log(err.message);
        }
    })
}

function add_new_answer(arr1, arr2, answ) {
    const sql = `INSERT INTO answers(array1, array2, answ) VALUES (?, ?, ?)`;
    let answer = 'true';
    if (answ == false) {
        answer = 'false';
    }

    db.run(sql, [arr1, arr2, answer], (err) => {
        if (err) {
            console.log(err.message);}
    });
    close_connection();
}

function show_all_results() {
    db.each("SELECT array1, array2, answ FROM answers", function (err, row) {
        console.log("First array: " + row.array1 + "; Second array: " + row.array2 + "; Answer: " + row.answ);
    });
}

function delete_all() {
    let sql = "DELETE FROM answers"
    db.run(sql, (err) => {
        if (err) {
            console.log(err.message);
        }
    });
}

function close_connection() {
    db.close((err) => {
        if (err) {
            console.log(err.message);
        }
    })
}

module.exports = {
    add_new_answer,
    delete_all,
    show_all_results,
    getconnection,
    close_connection,
    delete_all,
    show_all_results
  };