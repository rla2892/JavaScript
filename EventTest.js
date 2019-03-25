//일반
const testFunc = function() {
  alert()
}

document.addEventListener('click', testFunc)

//간단
document.addEventListener('click', o => alert())
