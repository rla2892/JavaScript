//일반
const testFunc = function() {
  alert()
}

document.addEventListener('wheel', testFunc)

//간단
document.addEventListener('wheel', o => alert())
document.addEventListener('click', o => alert())
