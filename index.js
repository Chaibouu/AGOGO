let secs = document.querySelector('.secs');
let cappucino = document.querySelector('.cappucino');
let the = document.querySelector('.the');
let petitdejeuner = document.querySelector('.petitdejeuner');
let dejeuner = document.querySelector('.dejeuner');
let entrer = document.querySelector('.entrer');
let time= document.querySeclector('.time');
let heure = 0;
let minute = 0;
let seconde = 0;

const chrono = ()=>{
    heure =  parseInt(heure);
    minute = parseInt(minute);
    seconde = parseInt(seconde);

    senconde++; 

    if( seconde = 60){
        minute++;
        seconde = 0;
    }
    if( minute = 60){
        heure++;
        minute = 0;
    }
    if(seconde < 10){
        seconde = "0" + seconde;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    if(heure < 10){
        heure = "0" + heure;
    }

    time.textContent = `${heure}:${minute}:${seconde}`;
    setTimeout(chrono,1000);
};