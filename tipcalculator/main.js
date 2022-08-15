//function with no argumnents

function sayMyyName() {
  console.log('sudoapt')
}

sayMyyName()

//Dynamic Function
function sayMyName(name) {
  console.log(name)
}

sayMyName('ranaapt')

// greeting using without template literals

function greeting1(name) {
  greet = 'hi ' + name + ', Nice to meet you!'
  console.log(greet)
}
greeting1('sus')

// function here we use string interpolation 
function greeting2(name) {
  greet = `hi ${name}, Nice to meet you!`
  console.log(greet)
}
greeting2('sudo1')

function sum(a, b) {
  //retrun
  return a + b
}
num1 = sum(1, 2)
console.log(num1)

//TipCalculator


function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100
  const tipAmount = food * tipPercentage
  const total = sum(food, tipAmount)

  return total
}

console.log(calculateFoodTotal(100, 20))

// ES6

//Arrow functins =>
//Arrow funciton with explicit return
const sumArrow = (a, b) => {
  return a + b
}

//arrow function with implicit return
//Important: For imiplicit return, remove squigglies
const sumArrow2 = (a, b) => a + b

console.log(sumArrow(10, 50))