window.onload = screens;

function screens() {

  document.getElementById('timer').style.display='none';
  document.getElementById('categorias').style.display='none';

};
function myFunction() {
  let nombre =
  document.getElementById('name').value;
  document.getElementById('bienvenida').innerHTML = 'Bienvenida ' + nombre;

  document.getElementById('welcome').style.display = 'none';
  document.getElementById('categorias').style.display ='block';
  document.getElementById('timer').style.display='block';
};

let timeleft = 30;
  let downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementById('countdowntimer').innerHTML = timeleft;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
  },1000);