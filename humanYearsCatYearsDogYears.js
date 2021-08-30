var humanYearsCatYearsDogYears = function (humanYears) {
    if (humanYears === 1) {
       return [1, 15, 15]
    }
    else if ((humanYears === 2)) {
        return [2, 24, 24]
    }
    else {
        return [humanYears, humanYears * 4 + 16, humanYears * 5 + 14]
    }
};


console.log(humanYearsCatYearsDogYears(10))