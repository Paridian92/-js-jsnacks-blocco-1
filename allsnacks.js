//primo snack

var primaParola = prompt('inserisci la prima parola')
/* console.log(primaParola) */
var secondaParola = prompt('inserisci la seconda parola')
/* console.log(secondaParola) */

if(primaParola.length > secondaParola.length){
  console.log(primaParola + " " + secondaParola);
}else if (primaParola.length < secondaParola.length){
  console.log(secondaParola + " " + primaParola);
}else{
  console.log("le parole sono uguali")
}

//primo snack finito

//secondo snack

var sommaNumeri = 0;

for(var i = 0; i < 10; i++){
  var newNumero = parseInt(prompt ('inserisci un numero'))
  sommaNumeri += newNumero;
}

console.log (sommaNumeri)

//secondo snack finito

//terzo snack

var nome = prompt('inserisci il tuo nome');

var invitati = ['pino', 'massimo', 'giuseppe', 'marco', 'gatsby', 'paride'];

var sonoInvitato = false;
for(var i = 0; i< invitati.length; i++){
  var ciSono = invitati[i];
  if(ciSono === nome){
   sonoInvitato = true;
  }
}

if(sonoInvitato){
  console.log('puoi entrare')
}else{
  console.log('non puoi entrare')
}


//terzo snack finito

//quarto snack

var array = [];


for(var i = 0; i < 6; i++){
  var newNumero = parseInt(prompt ('inserisci un numero')) 
if(newNumero %2 !=0){

  array.push(newNumero);
  }
}
console.log(array)


//quarto snack finito