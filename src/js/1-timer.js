// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// user datapicker value
let userSelectedDate = null;
let countdown = 0;

// datapicker options
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // validation
    userSelectedDate = selectedDates[0];
    disableStartBtn(validationDateForFuture(userSelectedDate));
  },
};

// disable stat button by dafault
const disableStartBtn = (state = true) => {
  const btn = document.querySelector('button[data-start]');
  state
    ? btn.setAttribute('disabled', 'disabled')
    : btn.removeAttribute('disabled');
};
disableStartBtn(true); // disabled by default

// distance for countdown (by default return NaN)
const getDistance = userSelectedDate => {
  return Math.floor(Date.parse(userSelectedDate)) - Math.floor(Date.now());
};

// validation datapicker
const validationDateForFuture = userSelectedDate => {
  if (getDistance(userSelectedDate) < 0) {
    iziToast.error({
      title: 'Error.',
      message: 'Please choose a date in the future.',
      position: 'topRight',
      timeout: 5000,
    });
    return true;
  } else {
    return false;
  }
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => value.toString().padStart(2, '0');

const renderFragment = (
  days = '00',
  hours = '00',
  minutes = '00',
  seconds = '00'
) => {
  return `<div class="field">
        <span class="value" data-days>${addLeadingZero(days)}</span>
        <span class="label">Days</span>
    </div>
    <div class="field">
        <span class="value" data-hours>${addLeadingZero(hours)}</span>
        <span class="label">Hours</span>
    </div>
    <div class="field">
        <span class="value" data-minutes>${addLeadingZero(minutes)}</span>
        <span class="label">Minutes</span>
    </div>
    <div class="field">
        <span class="value" data-seconds>${addLeadingZero(seconds)}</span>
        <span class="label">Seconds</span>
    </div>`;
};

// btn start click handler
document.querySelector('button[data-start]').addEventListener('click', e => {
  disableStartBtn(true); // disable start btn
  iziToast.success({
    title: 'Attention.',
    message: 'Press "Esc" button for reset countdown.',
    position: 'topRight',
    timeout: 5000,
  });
  countdown = setInterval(() => {
    let distance = getDistance(userSelectedDate);
    if (0 === distance) {
      clearInterval(countdown);
    }
    const { days, hours, minutes, seconds } = convertMs(distance);
    // render
    document.querySelector('.timer').innerHTML = renderFragment(
      days,
      hours,
      minutes,
      seconds
    );
  }, 1000);
});

document.addEventListener('keydown', event => {
  if (countdown && event.key === 'Escape') {
    clearInterval(countdown);
    document.querySelector('.timer').innerHTML = renderFragment(); // reset 00 00 00 00
    disableStartBtn(false); // enable start btn
    iziToast.success({
      title: 'Done.',
      message: 'Countdown was reseted.',
      position: 'topRight',
      timeout: 5000,
    });
  }
});

// GO!
try {
  flatpickr('#datetime-picker', options);
} catch (e) {
  console.log(e);
}
