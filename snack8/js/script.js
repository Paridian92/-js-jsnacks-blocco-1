var numUtente = prompt('Inserisci in numero di quattro cifre')
if (numUtente.length != 4){
  alert('non è un numero a quattro cifre!')
}


var a = numUtente.split('');


console.log( a )

var somma = 0

for(var i = 0; i< a.length; i++){
  somma += parseInt(a[i]);
}
console.log(somma)

