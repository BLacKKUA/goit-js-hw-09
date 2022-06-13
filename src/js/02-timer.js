import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const refs = {
   inputCalendar: document.querySelector('#datetime-picker'),
   buttonStart: document.querySelector('button[data-start]'),
   dataDays: document.querySelector('span[data-days]'),
   dataHours: document.querySelector('span[data-hours]'),
   dataMin: document.querySelector('span[data-minutes]'),
   dataSec: document.querySelector('span[data-seconds]')
}
let timeId = null;
let setIntervalWork = false;
const options = {
enableTime: true,
time_24hr: true,
defaultDate: new Date(),
minuteIncrement: 1,
   onClose(selectedDates) {
   if (selectedDates[0] > new Date()) {
      refs.buttonStart.disabled = false;
   } else {
      refs.buttonStart.disabled = true;
      window.alert("Please choose a date in the future")
      }
      
      refs.buttonStart.addEventListener('click', calcTime)

      function calcTime() {
         if(!setIntervalWork){
         timeId = setInterval(() => {
            let timer = selectedDates[0] - new Date()
            const totalTimer = convertMs(timer)
            console.log(totalTimer);
            if (totalTimer.seconds == -1) {
               clearInterval(timeId)
               refs.buttonStart.disabled = true;
               }else {
            refs.dataDays.textContent = totalTimer.days
            refs.dataHours.textContent = totalTimer.hours
            refs.dataMin.textContent = totalTimer.minutes
               refs.dataSec.textContent = totalTimer.seconds
               }
         }, 1000)
            refs.buttonStart.removeEventListener('click', calcTime)
            }
      }
   },
};
flatpickr(refs.inputCalendar, options)

function pad(value) {
   return String(value).padStart(2, "0")
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Remaining days
const days = pad(Math.floor(ms / day));
// Remaining hours
const hours = pad(Math.floor((ms % day) / hour));
// Remaining minutes
const minutes = pad(Math.floor(((ms % day) % hour) / minute));
// Remaining seconds
const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

return { days, hours, minutes, seconds };
}