const palindromes = function (input) {
    let result = input.split('').reverse().join('')
    
    let clean_result = result.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    let clean_input = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

    return clean_input == clean_result
};

// Do not edit below this line
module.exports = palindromes;
