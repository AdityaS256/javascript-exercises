const fibonacci = function(index) {
    index = Number(index);
    if (index < 0) {
        return "OOPS";
    }

    let fib = [0, 1];
    let arr = [];
    
    for (let i = 1; i <= index; i++) {
        arr = fib.slice(-2);
        // console.log(arr);

        fib.concat(arr);
        // console.log(fib);

        fib.push(arr[0] + arr[1]);
        // console.log(fib);
    }
    return fib[index];
};

// Do not edit below this line
module.exports = fibonacci;
