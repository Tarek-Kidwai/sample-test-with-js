// console.log('we are learning together hello all')

// let num1 = 10
// let num2 = 25

// let sum = num1+num2

// console.log(sum)


function sum(a,b){
    return a+b
}

console.log(sum(10, 11))

function difference (a,b){
    return a-b
}


// invoking the function
console.log(difference(40,1))
console.log(difference(40,3))
    

function multiplication (a,b){
    return a*b
}

console.log(multiplication(5,7))

// tax calculator -> 19%, 2000
// if income is more than 2000, tax rate is 37.5%
// if income is less than 2000, tax is 19%
// 19/100 * 2000

// arguments
// function taxCalculator(income){
//     if(income>2000){
//         return 37.5/100*income
//     }
//     else{
//         return 19/100* income
//     }
// }

// console.log(taxCalculator(2001))

function taxCalculator (income) {
    if (income>3000){
        return 37.5/100*income
    }

    else {
        return 18/100*income
    }
}

console.log(taxCalculator (5000))

function taxCalculator(income){
    if (income> 2000){
        return 25.5/100* income
    }
    else{
        return 10/100*income
    }
}
console.log(taxCalculator(10000))

function taxCalculator(income)
if (income > 3000){
    return 37.5/100*income
}
else{
    return 18.5/100*income
}

console.log(taxCalculator(3000))


// discount calculator 
// $100 ~ 1%
// more than $100 -> 2.5%

function discount (amount){
    if (amount >= 100){
        return 2.5/100*amount
    }
    else{
        return 1/100*amount 
    }
}
    
console.log(discount(200))

function taxCalculator (income){
    if (income>= 5000){
        return 37.5/100* income
    }
    else{
        return 18/100* income 
    }

}


console.log(taxcalculator(5000))