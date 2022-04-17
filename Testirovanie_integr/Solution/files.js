const fs = require('fs');
const { mainModule } = require('process');

function get_input(name) {
    var path = './' + name + '.txt';
    if (!fs.existsSync(path)) {
        return null;
    }
    let fileContent = fs.readFileSync(path, 'utf8');
    fileContent = fileContent.split('\r').join('');
    let inputs = fileContent.split('\n');
    var rgx = new RegExp(/^[ *\d *]+$/);
    var res = inputs[0].match(rgx);
    if (res == null && inputs[0] != "null") {
        return null;
    }
    var res = inputs[1].match(rgx);
    if (res == null && inputs[1] != "null") {
        return null;
    }

    var arr1 = null;
    if (inputs[0] != "null") {
        arr1 = formatestringinint(inputs[0]);
    }
    var arr2 = null;
    if (inputs[1] == "null") {
        arr2 = null;
    } else {
        arr2 = formatestringinint(inputs[1]);
    }
    return [arr1, arr2];
}

function set_output(ar1, ar2, answer, name) {
    var stringarr1 = "";
    if (ar1 == null) {
        stringarr1 = "null";
    } else {
        for (let i = 0; i < ar1.length; i++) {
            if (i != ar1.length - 1) {
                stringarr1 += ar1[i] + " ";
            }
            else {
                stringarr1 += ar1[i];
            }
        }
    }

    var stringarr2 = "";
    if (ar2 == null) {
        stringarr2 = "null";
    } else {
        for (let i = 0; i < ar2.length; i++) {
            if (i != ar2.length - 1) {
                stringarr2 += ar2[i] + " ";
            }
            else {
                stringarr2 += ar2[i];
            }
        }
    }

    let answ = 'true';
    if (answer == false) {
        answ = 'false';
    }
    let mainstr = stringarr1 + '\n' + stringarr2 + '\n' + answ;
    var path = './' + name + '.txt';
    fs.writeFileSync(path, mainstr);
}

function formatestringinint(str) {
    str = str.replace(/\s+/g, ' ');
    let arstr = str.split(" ");

    arstr = arstr.filter((n) => { return n != "" });
    arstr = arstr.filter((n) => { return n != " " });

    var arrint = new Array();
    for (let i = 0; i < arstr.length; i++) {
        arrint[i] = parseInt(arstr[i]);
    }
    return arrint;
}

module.exports = {
    get_input,
    set_output,
    formatestringinint
};