import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const selectors = {
	date: document.querySelector('input[type="text"]'),
	start: document.querySelector('button[data-start]'),
	days: document.querySelector('span[data-days]'),
	hours: document.querySelector('span[data-hours]'),
	minutes: document.querySelector('span[data-minutes]'),
	seconds: document.querySelector('span[data-seconds]'),
};
const { date, start, days, hours, minutes, seconds } = selectors;

flatpickr(date, {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		const selectedDate = selectedDates[0];
		const actualDate = new Date();
		if (selectedDate < actualDate) {
			Notiflix.Notify.failure("Please choose a date in the future");
			if (!start.hasAttribute('disabled')) {
				start.setAttribute("disabled", true);
			}
		} else {
			start.removeAttribute('disabled');
		}
	},
});

start.addEventListener('click', () => {
	let intervalId = setInterval(() => {
		const msUntilEnd = new Date(date.value).getTime() - new Date().getTime();
		const timeUntilEnd = convertMs(msUntilEnd);
		days.textContent = addLeadingZero(timeUntilEnd.days);
		hours.textContent = addLeadingZero(timeUntilEnd.hours);
		minutes.textContent = addLeadingZero(timeUntilEnd.minutes);
		seconds.textContent = addLeadingZero(timeUntilEnd.seconds);
		if (msUntilEnd <= 0) {
			clearInterval(intervalId);
			days.textContent = '00';
			hours.textContent = '00';
			minutes.textContent = '00';
			seconds.textContent = '00';
		}
	}, 1000);

});

function addLeadingZero(value) {
	return String(value).padStart(2, '0');
}

function convertMs(ms) {
	// Number of milliseconds per unit of time
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	// Remaining days
	const days = Math.floor(ms / day);
	// Remaining hours
	const hours = Math.floor((ms % day) / hour);
	// Remaining minutes
	const minutes = Math.floor(((ms % day) % hour) / minute);
	// Remaining seconds
	const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	return { days, hours, minutes, seconds };
}

