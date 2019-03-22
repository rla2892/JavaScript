//예제 배열
const arr1 = [1,2,3,4,5]
const cars = ["Benz", "Volvo", "BMW", "Toyota", "Hyundai"]

//배열 기본 프로퍼티
var x = cars.length // 길이
var y = cars.sort() // 정렬

//foreach 
const printArray1 = function(arr) {
  arr.forEach(element => {    
    console.log(element)
  })
}

//for
const printArray2 = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    console.log(element)
  }
}
