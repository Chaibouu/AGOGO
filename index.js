let secs = document.querySelector('#secs');
let cappucino = document.querySelector('.cappucino');
let the = document.querySelector('.the');
let petitdejeuner = document.querySelector('.petitdejeuner');
let dejeuner = document.querySelector('.dejeuner');
let entrer = document.querySelector('.entrer');
let time = document.querySelector('.time');
let containertempss = document.querySelector('.containertempss');
let form =  document.querySelector('#form');
let tempsrestent = document.querySelector('.tempsrestent');


  let heures = 0;
  let minutes = 0;
  let secondes = 0;
  let timeout;
  let entrerer;
  
 function BeBAckAt(minutes){
  let min = minutes * 60 * 1000;
  let back = new Date(new Date().getTime() + min);
  let options = {hour: 'numeric', minute: 'numeric',second: 'numeric' };
  let at = back.toLocaleTimeString('fr-FR',options);
  return at;
 }
 
 const chronos = ()=>{

    if (minutes >= 60) {
      heures = Math.floor(minutes/60);
      minutes = Math.floor(minutes % 60);
    }

    if (heures == 0 && minutes == 0 && secondes == 0) {
      clearTimeout(timeout);
      containertempss.style.visibility = 'hidden';
    }
    else{
      containertempss.style.visibility = 'visible';
      heures = parseInt(heures);
      minutes = parseInt(minutes);
      secondes = parseInt(secondes);
      
      // secondes--;

      
      if (secondes > 0) {
        secondes--;
      } else {
        if (minutes > 0) {
          minutes--;
          secondes = 59;
        } else {
          if (heures > 0) {
            heures--;
            minutes = 59;
            secondes = 59;
          } else {
            clearTimeout(timeout);
            containertempss.style.visibility = 'hidden';
            return;
          }
        }
      }
    
       if (secondes < 10) {
        secondes = "0" + secondes;
       }
       if (minutes < 10) {
        minutes = "0" + minutes;
       }
       if (heures < 10) {
        heures = "0" + heures;
       }
   
       time.textContent = `${heures}:${minutes}:${secondes}`
       
       timeout = setTimeout(chronos,1000);
    }
};
secs.addEventListener('click',()=>{
  clearTimeout(timeout);
  heures = 0;
  minutes = 0;
  secondes = 20;
  tempsrestent.textContent = "Be Back At " + BeBAckAt(minutes);
  chronos();
});
cappucino.addEventListener('click',()=>{
  clearTimeout(timeout);
  heures = 0;
  minutes = 5;
  secondes = 0;
  chronos();
  tempsrestent.textContent = "Be Back At " + BeBAckAt(minutes);
});
the.addEventListener('click',()=>{
  clearTimeout(timeout);
  heures = 0;
  minutes = 15;
  secondes = 0;
  tempsrestent.textContent = "Be Back At " + BeBAckAt(minutes);
  chronos();
});
petitdejeuner.addEventListener('click',()=>{
  clearTimeout(timeout);
  heures = 0;
  minutes = 20;
  secondes = 0;
  tempsrestent.textContent = "Be Back At " + BeBAckAt(minutes);
  chronos();
});
dejeuner.addEventListener('click',()=>{
  clearTimeout(timeout);
  heures = 0;
  minutes = 30;
  secondes = 0;
  tempsrestent.textContent = "Be Back At " + BeBAckAt(minutes);
  chronos();
});

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  let valeur = parseFloat(entrer.value);
  console.log(valeur);
  minutes = valeur;
  secondes = 0;

  clearTimeout(timeout);
  tempsrestent.textContent = "Be Back At " + BeBAckAt(minutes);
  chronos();
  
})



