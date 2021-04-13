var limite = 1000;
var potenza = 1;
var counterPotenza = 1;

while(potenza < limite){
  console.log(potenza)
  potenza = Math.pow(2, counterPotenza);
  
  counterPotenza++;
}