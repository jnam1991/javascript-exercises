const reverseString = function(word) {

    let str = '';
    
    for(i=word.length-1; i>=0; i--){
        str += word[i]
    }
    
    return str;
};

reverseString('garbage');

// Do not edit below this line
module.exports = reverseString;
