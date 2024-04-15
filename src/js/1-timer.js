import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const fieldDatatime = document.getElementById("datetime-picker");
console.log(fieldDatatime);

const startBtn = document.querySelector("button[data-start]");
console.log(startBtn);

fieldDatatime.addEventListener("click", onClickDatatime);

function onClickDatatime(event) {
  console.log(event);
}

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < Date.now()) {
      iziToast.error({
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  
  },
}

const fp = flatpickr(fieldDatatime, 
);