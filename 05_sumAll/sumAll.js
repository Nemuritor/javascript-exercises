const sumAll = function(startingNumber, endingNumber) {
    const numArray = [];
    let numberSum = 0;
    let biggerNumber = 0;
    let smallerNumber = 0;

    if(startingNumber < 0 || endingNumber < 0) {
        return 'ERROR';
    }
    else if(typeof startingNumber != "number" || typeof endingNumber != "number") {
        return 'ERROR';
    }
    else if(Array.isArray(startingNumber) || Array.isArray(endingNumber)) {
        return 'ERROR';
    }
    else
    {
        if(startingNumber > endingNumber) {
            biggerNumber = startingNumber;
            smallerNumber = endingNumber;
        }
        else {
            biggerNumber = endingNumber;
            smallerNumber = startingNumber;
        }
    
        for (let i = smallerNumber; i <= biggerNumber; i++) {
          numberSum += i;
        }
    
    
        return numberSum;
    }

    
};

// Do not edit below this line
module.exports = sumAll;
