function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const start = document.querySelector("button[data-start]");
const stop = document.querySelector("button[data-stop]");
let id;
start.addEventListener("click", onStartButton);
function onStartButton() {
	id = setInterval(() => {
		document.querySelector("body").style.backgroundColor = getRandomHexColor();
	}, 1000);
	start.setAttribute("disabled", true);
	stop.removeAttribute('disabled');

}

stop.addEventListener('click', () => {
	clearInterval(id);
	start.removeAttribute('disabled');
	stop.setAttribute("disabled", true);
});