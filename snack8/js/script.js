var numUtente = prompt('Inserisci in numero di quattro cifre')
if (numUtente.length != 4){
  alert('non è un numero a quattro cifre!')
}


var a = numUtente.split('',4);


console.log( a )

for(var i = 0; i< a.length; i++){
  var somma += a[i];
}
console.log(somma)

