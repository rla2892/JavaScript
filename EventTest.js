//일반
const testFunc = function() {
  alert()
}

document.addEventListener('wheel', testFunc)

//간단
document.addEventListener('wheel', o => alert())
document.addEventListener('click', o => alert())

//지울 수 있는 이벤트 리스너
//테스트 내용
const testFunc = function() {
  console.log('test start ------------------------')
}
document.addEventListener('auxclick', testFunc)
document.addEventListener('wheel', o => document.removeEventListener('auxclick', testFunc))
