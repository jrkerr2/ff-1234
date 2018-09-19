// profile comparison & calculation for export use

var math = require('mathjs');

exports.compareArrays = function(array1,array2) {
    
    // take in user data in array, compare to existing arrays
    var diffArray = [];
    var totalDiff;
    var arr1 = array1;
    var arr2 = array2;
    for (i = 0; i < arr1.length; i++) {
        diffArray[i] = Math.abs(arr1[i] - arr2[i]);
        console.log(diffArray[i]);      
       
    }
    
    totalDiff = math.sum(diffArray);
    // console.log(totalDiff);

    return totalDiff;

}