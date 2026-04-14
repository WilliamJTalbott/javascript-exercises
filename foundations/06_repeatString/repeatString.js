const repeatString = function(string, num) {
    let value = ""
    let err = "ERROR"

    if (num < 0) {
        return err;
    }

    for (let i = 0; i < num; i++)
        value += string

    return value
};  



// Do not edit below this line
module.exports = repeatString;
