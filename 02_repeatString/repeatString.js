const repeatString = function(string, num) {
    
    if (num < 0)
    {
        return "ERROR";
    }
    
    let solution = "";
    
    for (let i = 0; i < num; i++)
    {
        solution += string;
    }

    return solution;
};

// Do not edit below this line
module.exports = repeatString;
