console.log("Start");

const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
const color = document.querySelector(".color")

console.log(button);

//  типы цветов hexadecimal colors
const colors = ["#FF5733", "#F9FF33", "#3371FF", "red", "green", "rgb(85,255,51)"]

const hex = [
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F",
]


button.addEventListener("click", () => {
	console.log("click");
	console.log(getRandomNumberColors());

	let hexColor = colors[getRandomNumberColors()];
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
})
button2.addEventListener("click", () => {
	console.log("click2");

	let hexColor = generateHex();
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
})


function getRandomNumberColors() {
	return Math.floor(Math.random() * colors.length);
}
function getRandomNumberHex() {
	return Math.floor(Math.random() * hex.length);
}

function generateHex() {
	let hexColor = "#";
	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumberHex()];
	}
	return hexColor;
}

