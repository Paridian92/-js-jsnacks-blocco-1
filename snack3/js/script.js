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

    