const palindromes = function (str) {
    let regex = /[^a-z]/g;
    str = str.toLowerCase();
    str = str.replace(regex, "");
    let rev = str.split("").reverse().join("");
    return str === rev;
};

// Do not edit below this line
module.exports = palindromes;
