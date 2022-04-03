function comp(ar1, ar2) {
    if (ar1 != null && ar2 != null) {
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

module.exports = { comp }