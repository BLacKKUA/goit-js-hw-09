const refs = {
   start: document.querySelector('button[data-start]'),
   stop: document.querySelector('button[data-stop]')
}
let timeoutId = null;
let checkTurnOn = false;
refs.start.addEventListener('click', changeColorBackGround)
refs.stop.addEventListener('click', stopChangeColorBackGround)

function changeColorBackGround() {
   if(!checkTurnOn){
      timeoutId = setInterval(() => {
         document.body.style.background = getRandomHexColor();
      }, 1000)
      checkTurnOn = true;
   }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function stopChangeColorBackGround() {
   clearInterval(timeoutId)
   checkTurnOn = false;
}