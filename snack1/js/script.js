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