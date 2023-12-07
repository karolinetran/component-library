// Accordion
let accordionBtn = document.getElementById("accordion-btn");
let accordionInfo = document.getElementById("accordion-info");
accordionBtn.addEventListener("click",toggleAccordionDisplay);

function toggleAccordionDisplay () {
	if (window.getComputedStyle(accordionInfo).display ==="none"){
		accordionInfo.style.display="block";
		accordionBtn.innerHTML = "Show less";

	}
	else {
		accordionInfo.style.display="none";
		accordionBtn.innerHTML = "Show more";
	}
}

// Counter
let count = 1;
let counterUp = document.getElementById("counter-up");
let counterDown = document.getElementById("counter-down");

counterUp.addEventListener("click", countUp);
counterDown.addEventListener("click", countDown);

function countUp () {
	count++;
	document.getElementById("count").innerHTML = count;
}

function countDown () {
	count--;
	document.getElementById("count").innerHTML = count;
}