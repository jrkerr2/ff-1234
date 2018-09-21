// profile comparison & calculation for export use

var math = require('mathjs');
// var friendsData = require('./friends');

compareArrays = function(array1,array2) {
    
    // take in user data in array, compare to existing arrays
    var diffArray = [];
    var totalDiff = 0;
    var arr1 = array1;
    var arr2 = array2;
    for (let i = 0; i < arr1.length; i++) {
        diffArray[i] = Math.abs(parseInt(arr1[i]) - parseInt(arr2[i]));
        console.log(diffArray[i]);      
       
    }
    
    totalDiff = math.sum(diffArray);
    // console.log(totalDiff);

    return totalDiff;

};


findMinIndex = function(array) {
    var temp = 40;  // max possible diff
    var minIndex = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] < temp) {
            temp = array[i];
            minIndex = i;
        }
    }
    return minIndex;
};

// master function
exports.compareFriends = function(dataArray) {
    var tempArray = [];
    var lastIdx = data.length - 1;
    var totalReturnDiff = 0;

    for (let i=0; i < lastIdx; i++) {     
        totalReturnDiff = compare.compareArrays(dataArray[lastIdx].scores, dataArray[i].scores);
        tempArray.push(totalReturnDiff);
        console.log("This is element " + i + "of the new array...");
        console.log(tempArray[i]);
    }

    var idxMatch = findMinIndex(tempArray);
    return idxMatch;
};




