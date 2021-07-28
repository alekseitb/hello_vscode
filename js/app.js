console.log("Start");

const button = document.getElementById("btn");
const color = document.querySelector(".color")

console.log(button);

//  типы цветов hexadecimal colors
const colors = ["#FF5733", "#F9FF33", "#3371FF", "red", "green", "rgb(85,255,51)"]


button.addEventListener("click", () => {
	console.log("click");
	console.log(getRandomNumber());

	let hexColor = colors[getRandomNumber()];
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
})

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
