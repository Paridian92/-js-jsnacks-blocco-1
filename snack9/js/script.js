var arrayNum = [1,2,3,4,5,6,7,8,9,10]
var somma = 0

for(var i = 0; i<arrayNum.length; i++){
  somma +=arrayNum[i];
}

console.log(somma)
console.log((somma / arrayNum.length))