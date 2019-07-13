var msg = ([5, 15, 25, 78, 59, 45, 75]);
var fixedAgeString;

// Function filters array elements that are less than (or even) 18 and more than (or even) 60. Then it returns the result as string. 
function fixAge(a) {
    var filtered = a.filter(function (value, index, arr) {
        return value >= 18 & value <= 60;
    });

    fixedAgeString = filtered.join(", ");
    return fixedAgeString;
}

fixAge(msg);
console.log(fixedAgeString); 