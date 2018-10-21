var summe = 0;
var rnd = 0;
var kto = 1000;
var einsatz = 10;

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btnSumme = document.getElementById('summe');
var txtKto = document.getElementById('txtKto');

btn1.addEventListener('click', btn1Click);
btn2.addEventListener('click', btn2Click);

function btn1Click() {
    rnd = myRnd();
    if (rnd < 5000) 
       kto -= einsatz;
    else
       kto += einsatz;

    txtKto.textContent = 'Konto: '+kto;
  }
function btn2Click() {
    rnd = myRnd();
    if (rnd >= 5000)
       kto -= einsatz;
    else 
       kto += einsatz;

    txtKto.textContent = 'Konto: '+kto;
}
  
function myRnd() {
  let rnd = Math.random();
  rnd = rnd * 10000;

  return rnd;
}