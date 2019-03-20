//퍼포먼스 테스트하는 함수
function performanceTest(f) {
  var t0 = performance.now();
  f();
  var t1 = performance.now();
  console.log("Call to Function took " + (t1 - t0) + " milliseconds.");
}

//테스트용 
function doSomething() {
 for(var i=0; i<100000; i++){
	var j =1
 }
}
