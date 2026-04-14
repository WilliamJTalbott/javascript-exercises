const fibonacci = function(target) {

    if (target < 0) return "OOPS";
    if (target == 0) return 0;

    let nums = [1, 1]

    for (i = 2; i < target; i++) {
        let num = (nums[i - 1] + nums[i - 2])
        nums.push(num)
    }

    return nums.at(-1)

};

// Do not edit below this line
module.exports = fibonacci;
