const reverseString = function(string) {
    let reversedWords = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedWords += string[i];
    }
    
    return reversedWords;
};

// Do not edit below this line
module.exports = reverseString;
