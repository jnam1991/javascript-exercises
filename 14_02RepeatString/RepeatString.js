const RepeatString = function(word, times) {
    let str = '';

    if(times<0){
        return "ERROR";
    }

    for(i=0; i<times; i++){
        str += word;
    }
    
    return str;
    
}

RepeatString('hey', 3);
  
// Do not edit below this line
module.exports = RepeatString;
