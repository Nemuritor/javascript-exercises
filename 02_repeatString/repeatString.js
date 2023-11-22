const repeatString = function(string, number) {
    let word = string;
    let times = number;
    let result = "";

    if(times < 0)
    {
        result = "ERROR";
    }
    else
    {
        for (let i = 0; i < times; i++) {
            result += word;
        }
    }
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
