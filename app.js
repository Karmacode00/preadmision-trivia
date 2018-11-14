window.onload = screens;

function screens() {

  document.getElementById('timer').style.display='none';
  document.getElementById('categorias').style.display='none';
  document.getElementById('preguntaSeries').style.display='none';
  document.getElementById('fin').style.display='none';

};

function inicio() {
  let nombre = document.getElementById('name').value;
  document.getElementById('bienvenida').innerHTML = 'Bienvenida ' + nombre;

  document.getElementById('welcome').style.display = 'none';
  document.getElementById('categorias').style.display ='block';

};

function series() {

  document.getElementById('categorias').style.display ='none';
  document.getElementById('timer').style.display='block';
  document.getElementById('preguntaSeries').style.display='block';
};

/*let letter = document.getElementById("myInput").value;
let score = 0;

// If the letter is "c"
if (value === "correcta") {
    score ++;

// If the letter is "b" or "d"
} else  (value === "incorrecta") {
    score = 0;
};

*/



//Timer
let timeleft = 30;
  let downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementById('countdowntimer').innerHTML = timeleft;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
  },1000);

  /*
  function sayHi() {
    alert('Hello');
  }
  
  setTimeout(sayHi, 3000);*/