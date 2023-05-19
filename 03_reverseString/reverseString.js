const reverseString = function(string) {
    
    let solution = "";

    let length = string.length - 1;

    for (let i = length; i >= 0; i--)
    {
        solution += string[i];
    }

    return solution;
};

// Do not edit below this line
module.exports = reverseString;
