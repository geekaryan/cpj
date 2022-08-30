//Self assessment of SumArray

const sumArrays = (numbers) => {
  let result = 0;

  for (const num of numbers) {
    result = result + num
  }
  return { result }
}
const numss = [1, 2, 3, 4, 5]
console.log(sumArrays(numss))



//max number program

const max = (numbers) => {
  let result = numbers[0]

  for (const number of numbers) {
    if (number > result) {
      result = number
    }
  }
  return { result }
}

console.log(max([1, 2, 3, 4, 5]))


//calculate frequency 
const letterFrequency = (phrase) => {
  let frequency = {}
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter] = frequency[letter] + 1
    } else {
      frequency[letter] = 1
    }
  }
  return frequency
}

console.log(letterFrequency('lol, what are you doing later tonight lol, haha!'))


//incremental operators
//++,--

//WOrdFrequency

const wordFrequency = (phrase) => {
  let frequency = {}
  const words = phrase.split(' ')
  return letterFrequency(words)
}
const userInput = prompt('Write your sentence')
console.log(wordFrequency(userInput))