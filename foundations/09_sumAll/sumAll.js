const sumAll = function(min, max) {
    let value = 0
    let small = min
    let large = max

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR"
    }
    
    if (min < 0 || max < 0) {
        return "ERROR"
    }

    if (min > max) {
        small = max
        large = min
    }

    for (i = small; i <= large; i++) {
        value += i
    }

    return value

};

// Do not edit below this line
module.exports = sumAll;
