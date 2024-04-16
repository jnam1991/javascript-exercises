const repeatString = function(word, times) {

    let str = "";

    for(i=0; i<times; i++){

        str += word;
    }

    return str;

};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
