var summe = 100;
var rnd = 0;

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var fktSumme = document.getElementById('summe')

btn1.addEventListener('click', btn1Click);
btn2.addEventListener('click', btn2Click);

function btn1Click() {
    rnd = myRnd();
    if (rnd < 5000) 
       summe = summe * 2;
       fktSumme.textContent = 'Summe: '+summe;
  }
function btn2Click() {
    rnd = myRnd();
    if (rnd >= 5000) 
       summe = summe * 2;
       fktSumme.textContent = 'Summe: '+summe;
}
  
function myRnd() {
  let rnd = Math.random();
  rnd = rnd * 10000;

  return rnd;
}