/**
 * 자바스크립트 배열과 연산 응용 실습
 */
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const users = []

promptName()

function promptName() {
  rl.question("Enter name (or 'done' to finish): ", (input) => {
    input = input.trim()

    if (input.toLowerCase() === 'done') {
      printResults()
      rl.close()
      return
    }

    try {
      validateName(input)
      promptAge(input)
    } catch (error) {
      console.log(error.message)
      promptName()
    }
  })
}

function promptAge(name) {
  rl.question('Enter age: ', (age) => {
    try {
      age = Number(age.trim())
      validateAge(age)
      users.push({ name, age })
      promptName()
    } catch (error) {
      console.log(error.message)
      promptAge(name)
    }
  })
}

function validateName(name) {
  if (name.length === 0) {
    throw new Error('Please enter a valid name.')
  }
}

function validateAge(age) {
  if (isNaN(age) || age < 1) {
    throw new Error('Please enter a valid number for age.')
  }
}

function printResults() {
  if (users.length === 0) {
    console.log('No users were added.')
    return
  }

  const names = users.map((user) => user.name)
  const ages = users.map((user) => user.age)

  console.log(`\nAll names: ${names}`)
  console.log(`All ages: ${ages}`)
  console.log(
    `Average age: ${ages.reduce((sum, age) => sum + age, 0) / ages.length}`
  )
}
