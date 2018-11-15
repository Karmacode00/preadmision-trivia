window.onload = screens;

function screens() {

  document.getElementById('timer').style.display='none';
  document.getElementById('categorias').style.display='none';
  document.getElementById('preguntaSeries').style.display='none';
  document.getElementById('preguntaPeliculas').style.display='none';
  document.getElementById('fin').style.display='none';
  document.getElementById('fin2').style.display='none';
};

function inicio() {
  let nombre = document.getElementById('name').value;
  document.getElementById('bienvenida').innerHTML = 'Bienvenida ' + nombre;

  document.getElementById('welcome').style.display = 'none';
  document.getElementById('categorias').style.display ='block';
  document.getElementById('fin').style.display='none';
document.getElementById('fin2').style.display='none';
};

let puntaje = 0;

function next(){ 
if(document.getElementById('respuesta11').checked) {
  puntaje = puntaje + 1;}
      
if(document.getElementById('respuesta21').checked) {
  puntaje = puntaje + 1;} 
  
if(document.getElementById('respuesta33').checked) {
  puntaje = puntaje + 1;}


  document.getElementById('preguntaSeries').style.display='none';
  document.getElementById('fin').style.display='block';
  document.getElementById('fin2').style.display='none';
document.getElementById('resultados').innerHTML = "Acertaste a " + puntaje + " respuestas correctas";
};

 //timer
document.getElementById('categoria1').addEventListener('click', function(){
    series();
  let timeleft = 15;
  let downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementById('countdowntimer').innerHTML = timeleft;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
  },1000);

setTimeout(() => {
  
   document.getElementById('categorias').style.display ='none';
  document.getElementById('timer').style.display='none';
  document.getElementById('preguntaSeries').style.display='none';
  document.getElementById('fin').style.display='block';
document.getElementById('fin2').style.display='none';  
}, 15000)
    
   
});

document.getElementById('categoria2').addEventListener('click', function(){
   
    peliculas();
  let timeleft = 15;
  let downloadTimer = setInterval(function(){
  timeleft--;
  document.getElementById('countdown').innerHTML = timeleft;
  if(timeleft <= 0)
    clearInterval(downloadTimer);
  },1000);

setTimeout(() => {
  
   document.getElementById('categorias').style.display ='none';
  document.getElementById('timer').style.display='none';
  document.getElementById('preguntaPeliculas').style.display='none';
  document.getElementById('preguntaSeries').style.display='none';
  document.getElementById('fin').style.display='none';
document.getElementById('fin2').style.display='block';  
}, 15000)
       
});


function series() {

  document.getElementById('categorias').style.display ='none';
  document.getElementById('timer').style.display='block';
  document.getElementById('preguntaSeries').style.display='block';
  document.getElementById('fin').style.display='none';
  document.getElementById('fin2').style.display='none';
};

function peliculas() {

  document.getElementById('categorias').style.display ='none';
  document.getElementById('timer').style.display='block';
  document.getElementById('preguntaPeliculas').style.display='block';
  document.getElementById('fin').style.display='none';
  document.getElementById('fin2').style.display='none';
};

let points = 0;

function finish(){ 
if(document.getElementById('resp13').checked) {
  points = points + 1;}
      
if(document.getElementById('resp22').checked) {
  points = points + 1;} 
  
if(document.getElementById('resp31').checked) {
  points = points + 1;}


  document.getElementById('preguntaPeliculas').style.display='none';
  document.getElementById('fin2').style.display='block';
  
document.getElementById('resultados2').innerHTML = "Acertaste a " + points + " respuestas correctas";
};


function reloadPage() {
    history.go(0);
  //window.location.href = window.location.href;
};