let secs = document.querySelector('#secs');
let cappucino = document.querySelector('.cappucino');
let the = document.querySelector('.the');
let petitdejeuner = document.querySelector('.petitdejeuner');
let dejeuner = document.querySelector('.dejeuner');
let entrer = document.querySelector('.entrer').value;
let time = document.querySelector('.time');

  let heures = 0;
  let minutes = 0;
  let secondes = 0;
  let timeout;

  


 const chronos = ()=>{
  // let x = setInterval(()=>{
    heures = parseInt(heures);
    minutes = parseInt(minutes);
    secondes = parseInt(secondes);
    secondes--;
    // if (heures == 0 && minutes == 0 && secondes == 0) {
    //   time.classList.add('hidden');
    // }
    // else{
    //  time.classList.remove('hidden');
    // }
    if (minutes == 0 && heures > 0) {
     heures--;
     minutes = minutes + 59;
   }
    if (secondes == 0 && minutes > 0) {
      minutes--;
      secondes = 59;
    }
   if (secondes <= 0) {
     secondes = 0;
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
//  },1000)
};
secs.addEventListener('click',()=>{
  clearTimeout(timeout);
  heures = 0;
  minutes = 0;
  secondes = 20;
  chronos();
});
cappucino.addEventListener('click',()=>{
  clearTimeout(timeout);
  heures = 0;
  minutes = 4;
  secondes = 60;
  chronos();
});
the.addEventListener('click',()=>{
  clearTimeout(timeout);
  heures = 0;
  minutes = 14;
  secondes = 60;
  chronos();
});
petitdejeuner.addEventListener('click',()=>{
  clearTimeout(timeout);
  heures = 0;
  minutes = 19;
  secondes = 60;
  chronos();
});
dejeuner.addEventListener('click',()=>{
  clearTimeout(timeout);
  heures = 0;
  minutes = 29;
  secondes = 60;
  chronos();
});

entrer.addEventListener("input",(e) =>{
  valeur = e.target.value;
})