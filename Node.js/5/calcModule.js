function calcFu(num1, num2, operator){
    if(operator === '+')
        return num1 + num2;

    else if(operator === '*')
        return num1 * num2;

    else if(operator === '/')
        if(num2 !== 0)
            return num1 / num2;

        else
            return `Num2 Cannot Be Zero`

    else
        return num1 - num2;
}

module.exports = calcFu