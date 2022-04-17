const dbase = require('./Db.js');
const workText = require('./files');

function comp(ar1, ar2) {
    if(ar1!=null)
        ar1 = ar1.slice();
    if(ar2 != null)
        ar2 = ar2.slice();
    if (ar1 != null && ar2 != null && ar1.length == ar2.length) {
        for (var i = 0; i < ar1.length; i++) {

                var expin2 = ar1[i] * ar1[i];
                var indx = ar2.indexOf(expin2);
                if (indx == -1) {
                    return false;
                } else {
                    ar2.splice(indx, 1);
                }
        }
    } else {
        return false;
    }
    return true;
}

function start_do(inputstr, str) {
    var input = workText.get_input(inputstr);
    if (input == null) {
        //console.log("No such file for input");
        return null;
    }
    var res = comp (input[0], input[1]);
    //console.log(str);
    workText.set_output(input[0], input[1], res, str);
    return res;
}

// var who = start_do('/Solution/input_false', 'haha');
// console.log(who);

// comp([1,2,3], [1,2,3]) 
// function getarrays() {
//     var rgx = new RegExp(/^[ *\d *]+$/);
//     var tht = document.getElementById('message_for_arr1').textContent;
//     if(tht != null) {
//         document.getElementById('message_for_arr1').textContent = '';
//     }
//     tht = document.getElementById('message_for_arr2').textContent;
//     if(tht != null) {
//         document.getElementById('message_for_arr2').textContent = '';
//     }

//     var firstarrstr = document.getElementById('arr1').value;
//     var secondarrstr = document.getElementById('arr2').value;
    
//     var res = firstarrstr.match(rgx);
//     if (res == null) {
//         document.getElementById('message_for_arr1').textContent = "Что-то не так со вводом первого массива!";
//         return;
//     } 
//     res = secondarrstr.match(rgx);
//     if (res == null) {
//         document.getElementById('message_for_arr2').textContent = "Что-то не так со вводом второго массива!";
//         return;
//     } 
//     firstarrstr = firstarrstr.replace(/\s+/g,' ');
//     secondarrstr = secondarrstr.replace(/\s+/g,' ');
//     firstarrstr = firstarrstr.split(" ");
//     secondarrstr = secondarrstr.split(" ");

//     firstarrstr = firstarrstr.filter((n) => {return n != " "});
//     console.log(firstarrstr);

//     var arr1 = new Array();
//     for (let i = 0; i < firstarrstr.length; i++) {
//         arr1[i] = parseInt(firstarrstr[i]);
//     }

//     var arr2 = new Array();
//     for (let i = 0; i < secondarrstr.length; i++) {
//         arr2[i] = parseInt(secondarrstr[i]);
//     }
//     var res = comp(arr1, arr2);
//     document.getElementById('output').textContent = "First array: " + firstarrstr + '; Second array: ' + secondarrstr + '; Result: ' + res;
// } 

// function clear_all() {
//     document.getElementById('arr1').value = '';
//     document.getElementById('arr2').value = '';
//     document.getElementById('output').textContent = '';
// }

module.exports = {
    start_do,
    comp
  };