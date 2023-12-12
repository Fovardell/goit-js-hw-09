import Notiflix from 'notiflix';
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const button = document.querySelector('button[type="submit"]');

function createPromise(position, delay) {
	return new Promise((resolve, reject) => {
		const shouldResolve = Math.random() > 0.3;
		if (shouldResolve) {
			resolve({ position, delay });
		} else {
			// Reject
			reject({ position, delay });
		}
	});
}

function generateDelayedPromises(delay, step, amount) {
	setTimeout(() => {
		for (let i = 0; i < amount; i++) {
			let id = setTimeout(() => {
				createPromise(i + 1, delay)
					.then(({ position, delay }) => {
						Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
					})
					.catch(({ position, delay }) => {
						Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
					});
				// console.log(i + 1);
			}, step * i);
		}
	}, delay);
}

button.addEventListener('click', (e) => {
	e.preventDefault();
	const valueOfDelay = Number(firstDelay.value);
	const valueOfStep = Number(delayStep.value);
	const valueOfAmount = Number(inputAmount.value);
	generateDelayedPromises(valueOfDelay, valueOfStep, valueOfAmount);
	setTimeout(() => {
		firstDelay.value = "";
		delayStep.value = "";
		inputAmount.value = "";
	}, (valueOfAmount * valueOfStep) + valueOfDelay);
});