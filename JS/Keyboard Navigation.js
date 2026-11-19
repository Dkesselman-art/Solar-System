/* Keyboard Navigation.js - lets visitors use the site without a mouse */

// Let the Tab key stop on the slideshow arrows and dots
var controls = document.querySelectorAll(".prev, .next, .dot");
var i;

for (i = 0; i < controls.length; i++) {
	controls[i].tabIndex = 0;
}

// Listen for keys on the whole page
document.addEventListener("keydown", function (event) {
	var selected = document.activeElement;
	var menu = document.getElementById("myLinks");

	// Enter presses the selected slideshow arrow or dot
	if (event.key === "Enter" && selected.matches(".prev, .next, .dot")) {
		selected.click();
	}

	// Left / Right Arrow change the slide (only on pages with a slideshow)
	if (controls.length > 0) {
		if (event.key === "ArrowRight") {
			plusSlides(1);
		}
		if (event.key === "ArrowLeft") {
			plusSlides(-1);
		}
	}

	// Escape closes the hamburger menu
	if (event.key === "Escape" && menu) {
		menu.style.display = "none";
	}
});
