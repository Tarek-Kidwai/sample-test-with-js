function regulerFunction(a, b) {
    return (a + b)
}

regulerFunction(5,5)

/// es6 arrow function
// var, let const,
// pick nay name

const sampleFn = (a,b) => {
    const multiply = a*b
    return multiply
}

sampleFn(5,5)


const secondFunction = (a,b) => a+b

secondFunction (1,1)

// IIFE -> immediately invoked functional expressions
// (()=>console.log('hello'))()

const adding =(a,b) =>{
    const add =a+b
    return add 
}

adding(5,5)