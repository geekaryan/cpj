//WOrdFrequency

const wordFrequency = (phrase) => {
  let frequency = {}
  const words = phrase.split(' ')
  return letterFrequency(words)
}
const userInput = prompt('Write your sentence')
console.log(wordFrequency(userInput))

//high order functions
//map
//filter
//reduce

//map - loops and returns in array

let result = [1, 2, 3, 4].map(number => number * 2)
//console.log(result)

const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
}

//console.log(doubleMap([1, 2, 7, 8]))

//filter

const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}

//console.log(filter([1, 2, 3, 4, 5, 6], 3))

const num = [1,2,3,4,5]
//console.log(num.filter(nums => nums > 3 || num < 2))

const actors = [
  {name: 'johnny', netWorth: 20000},
  {name: 'amber', netWorth: 10},
  {name: 'leonardo', netWorth: 100000}
]

//let result = actors.filter(actor => actor.netWorth > 10)

//console.log(result)

//let names = result.map(actor => actor.name).join(', ')
//playground.innerHTML = `<h1>${names}</h1>`

//reduce

//sum of all of the net worth
//SUM: think reduce
//reduce takes in a function as an argument
//reduce loops and gives you back the accumulator

const nums = [1,2,3]
const result = nums.reduce((prev, curr) => prev + curr)



console.log(result)

const nums = [1,2,3]
const result = nums.reduce((prev, curr) => prev + curr)



console.log(result)

function mutliply (a,b){
  return a * b
}

const num = [1,2,3]
const results = num.reduce(multiply)

console.log(results)