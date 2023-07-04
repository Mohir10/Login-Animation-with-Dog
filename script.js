const userName = document.querySelector('.username');
const passWord = document.querySelector('.password');
const passWordBtn = document.querySelector('.password-button');
const face = document.querySelector('.face');
const hands = document.querySelectorAll('.hand');
const tongue = document.querySelector('.tongue');

userName.addEventListener('focus', faceRotation)

userName.addEventListener('input', faceRotation)

userName.addEventListener('blur', () => face.style.transform = "rotate(0deg)")

function faceRotation() {
  const value = userName.value.length
  if (value < 40) {
    face.style.transform = `rotate(${20 - value}deg)`
  }
}

passWord.addEventListener('focus', () => {
  tongue.classList.remove('breath')
  hands.forEach(hand => hand.classList.add('hide'))
})

passWord.addEventListener('blur', () => {
  tongue.classList.add('breath')
  hands.forEach(hand => hand.classList.remove('hide'))
})

passWordBtn.addEventListener('mousedown', () => {
  hands.forEach(hand => hand.classList.add('peek'))
  tongue.classList.remove('breath')
  passWord.type = 'text'
})
passWordBtn.addEventListener('mouseup', () => {
  hands.forEach(hand => hand.classList.remove('peek'))
  tongue.classList.add('breath')
  passWord.type = 'password'
})