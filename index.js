var boxes = 6;
var colors = [];
var pickedColor;
var myboxes = document.querySelectorAll(".box");
var rgbSpan = document.getElementById("rgbSpan");
var commentDisplay = document.getElementById("comment");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init() {
	setupButtons();
	setupboxes();
	reset();
}
function setupButtons() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? boxes = 3 : this.textContent === "Medium" ? boxes = 6 : boxes = 9;
			reset();
		});
	}
	resetButton.addEventListener("click", function () {
		reset();
	});
}
function setupboxes() {
	for (var i = 0; i < myboxes.length; i++) {

		myboxes[i].addEventListener("click", function () {

			var clickedColor = this.style.backgroundColor;

			if (clickedColor === pickedColor) {
				commentDisplay.textContent = "Correct you won!";
				resetButton.textContent = "Play Again?";
				changeColors(pickedColor);
				removePointers();
				h1.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				this.classList.remove("squarePointer");
				commentDisplay.textContent = "Try Again!!";
			}
		});
	}
}
function reset() {

	colors = generateRandomColors(boxes);

	pickedColor = pickColor();

	rgbSpan.textContent = pickedColor;

	for (var i = 0; i < myboxes.length; i++) {
		if (colors[i]) {
			myboxes[i].style.display = "block";
			myboxes[i].style.backgroundColor = colors[i];
			myboxes[i].classList.add("boxPointer");
		} else {
			myboxes[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	commentDisplay.textContent = "";
}

function changeColors(color) {

	for (var i = 0; i < myboxes.length; i++) {

		myboxes[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {

	var arr = [];

	for (var i = 0; i < num; i++) {

		arr.push(randomColor())
	}

	return arr;
}
function randomColor() {

	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function removePointers() {
	for (var i = 0; i < myboxes.length; i++) {
		myboxes[i].classList.remove("boxPointer");
	}
}