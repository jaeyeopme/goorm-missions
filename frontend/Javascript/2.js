/**
 * 조건문과 반복문 활용
 */
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi']

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) console.log(`${arr[i]}`) // 2, 4, 6, 8, 10
}

for (const fruit of fruits) {
  if (fruit.length > 5) console.log(fruit) // banana, orange
}
