// OBJECTS{}
const person = {
  name: 'Leonardo',
  shirt: 'white'
}
console.log(person.name)
console.log(person.shirt)

//bracket notation 
console.log(person['name'])
console.log(person['shirt'])

//assign object
person.phone = '821 - 934 - 5280'
console.log(person.phone)
console.log(person)

//assign object using bracket notation 

person['phne'] = '749-598-376'
console.log(person.phne)
console.log(person)

//Exercise of object

//creating a person whose name is Qazi and wearing a black shirt
const person2 = {
  name: 'Qazi',
  shirt: 'black'
}

//consoling the person2

console.log(person2)

// the name here is key and qazi here is the value of the key

console.log(person2.name)
console.log(person2.shirt)

const introducer = (name, shirt) => {

  const person = {
    name: name,
    shirt: shirt
  }
  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt}`

  return intro
}
console.log(introducer('suodapt', 'black'))

// creating a fucntion and using things on it
const introducer = (name, shirt) => {

  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 5000,
    networth: function() {
      return this.assets - this.liabilities
    }
  }
  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.networth()}USD`

  return intro
}
console.log(introducer('suodapt', 'black'))
console.log(introducer('Leonardo', 'white'))

// Methods - A Method is a property containing a function definition