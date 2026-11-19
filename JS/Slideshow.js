/* =========================================================
   Slideshow.js — Planet slideshow
   Based on the W3Schools "How To - Slideshow" example
   Linked from The 8 Planets.html, The 5 Dwarf Planets.html and Major Moons.html with:
   <script src="JS/Slideshow.js" defer></script>
   ========================================================= */

var slideIndex = 1;
var slideTimer;
var slideDelay = 4000; // time each planet stays on screen, in milliseconds (4000 = 4 seconds)

// Next / previous arrows
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if (slides.length === 0) { return; }

	// Wrap around at the ends
	if (n > slides.length) { slideIndex = 1; }
	if (n < 1) { slideIndex = slides.length; }

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	if (dots[slideIndex - 1]) {
		dots[slideIndex - 1].className += " active";
	}

	// Automatic sliding: restart the timer every time a slide is shown,
	// so clicking an arrow or dot gives that planet a full turn on screen.
	clearTimeout(slideTimer);
	slideTimer = setTimeout(function () {
		plusSlides(1);
	}, slideDelay);
}

// Start the slideshow when the page loads
showSlides(slideIndex);
