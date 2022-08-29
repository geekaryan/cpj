// LOOPS

const fruits = ['banana', 'apple', 'orange', 'guava']
//console.log(fruits[0])
//console.log(fruits[1])

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i])
}

// easy way to write loop

for (const fruit of fruits) {
  console.log(fruit)
}

//practice problem
const numbers = [1, 2, 3, 4, 5, 6]

//storing double of the array 
//make a function 

const double = (numbers) => {
  let result = []
  for (const num of numbers) {
    result.push(num * 2)
  }
  return result
}

console.log(double([1, 2, 3, 4, 5,]))


//squaring the array 

const double = (number) => {
  let results = []
  for (const nums of number) {
    results.push(nums ** 2)
  }
  return results
}

console.log(double([1, 2, 3, 4, 5, 6, 7, 8, 9]))