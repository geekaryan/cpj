//Longer way to count letters in phrase using for loop
const howManyLetters = () => {

  //counter 

  let result = 0;

  for (const index in phrase) {
    console.log(Number(index) + 1)
    result = Number(index) + 1
  }

  return { result: result }
}

const phrase = prompt('write your phrase')

console.log(howManyLetters(phrase))