const removeFromArray = function(numbers, ...toRemove) {
    //look for removeValue in numbers array and remove it from numbers array
    for (const arg of toRemove) {
    
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] === arg) {
                numbers.splice(i, 1);
            }
        }
    }
    
    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
