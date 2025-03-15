/**
 * DOM 트리에서 요소 선택하고 조작하기
 */
const textContainer = document.getElementById('text-container')
const changeTextButton = document.getElementById('change-text')
const changeColorButton = document.getElementById('change-color')

const originalText = textContainer.innerText
const originalColor = textContainer.style.color

changeTextButton.addEventListener('click', () => {
  textContainer.innerText =
    textContainer.innerText === originalText
      ? '텍스트가 변경되었습니다.'
      : originalText
})

changeColorButton.addEventListener('click', () => {
  textContainer.style.color =
    textContainer.style.color === originalColor ? 'green' : originalColor
})
