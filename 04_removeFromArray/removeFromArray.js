const removeFromArray = function(array, removedIndex) {

    let newArray = array.splice(removedIndex-1, removedIndex-2);

    return array;

};

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;
