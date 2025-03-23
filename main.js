//Header Hamburgur Menu Functionality

document.addEventListener("DOMContentLoaded", function () {
	const mobileMenuToggle = document.getElementById("mobileMenuToggle");
	const navLinks = document.getElementById("navLinks");

	mobileMenuToggle.addEventListener("click", function () {
		navLinks.classList.toggle("active");

		// Change icon based on menu state
		const icon = mobileMenuToggle.querySelector("i");
		if (navLinks.classList.contains("active")) {
			icon.classList.remove("bi-list");
			icon.classList.add("bi-x-lg");
		} else {
			icon.classList.remove("bi-x-lg");
			icon.classList.add("bi-list");
		}
	});

	document.addEventListener("click", function (event) {
		if (
			!navLinks.contains(event.target) &&
			!mobileMenuToggle.contains(event.target)
		) {
			navLinks.classList.remove("active");
			const icon = mobileMenuToggle.querySelector("i");
			icon.classList.remove("bi-x-lg");
			icon.classList.add("bi-list");
		}
	});
});

//Section 4 Sliding Functionality
document.addEventListener("DOMContentLoaded", function () {
	const testimonials = [
		{
			quote:
				"They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
			name: "Michael Kaizer",
			position: "CEO of Basecamp Corp",
		},
		{
			quote:
				"Working with this team has been a game-changer for our business. Their attention to detail and innovative strategies have significantly improved our brand presence and customer engagement.",
			name: "Sarah Thompson",
			position: "Marketing Director at Creative Solutions",
		},
		{
			quote:
				"The expertise and dedication of this team are unparalleled. They consistently deliver outstanding results, helping us achieve our goals and exceed expectations.",
			name: "David White",
			position: "Founder of WhiteTech Innovations",
		},
	];

	let currentIndex = 0;
	const quoteElement = document.querySelector(".testimonial-quote");
	const nameElement = document.querySelector(".testimonial-details h4");
	const positionElement = document.querySelector(".testimonial-details p");
	const counterElement = document.querySelector(".counter b u");
	const prevButton = document.querySelector(".prev");
	const nextButton = document.querySelector(".next");

	function updateTestimonial(index) {
		quoteElement.textContent = `" ${testimonials[index].quote} "`;
		nameElement.textContent = testimonials[index].name;
		positionElement.textContent = testimonials[index].position;
		counterElement.textContent = `0${index + 1}`;
	}

	prevButton.addEventListener("click", function () {
		currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
		updateTestimonial(currentIndex);
	});

	nextButton.addEventListener("click", function () {
		currentIndex = (currentIndex + 1) % testimonials.length;
		updateTestimonial(currentIndex);
	});

	updateTestimonial(currentIndex);
});

//Section 5 Accordion Functionality
$(document).ready(function () {
	$(".accordion-header").click(function () {
		const item = $(this).parent();
		const iconPlus = item.find(".accordion-icon-plus");
		const iconMinus = item.find(".accordion-icon-minus");
		const content = item.find(".accordion-content");

		// Toggle active class
		if (item.hasClass("active")) {
			item.removeClass("active"); // Close if already open
			content.slideUp();
			iconPlus.show();
			iconMinus.hide();
		} else {
			$(".accordion-item").removeClass("active"); // Close all
			$(".accordion-content").slideUp(); // Hide all content
			$(".accordion-icon-plus").show(); // Reset all icons
			$(".accordion-icon-minus").hide(); // Reset all icons

			item.addClass("active"); // Open selected
			content.slideDown();
			iconPlus.hide();
			iconMinus.show();
		}
	});

	// Ensure first item starts as active but can be toggled
	$(".accordion-item:first-child").addClass("active");
	$(".accordion-item:first-child .accordion-content").show();
	$(".accordion-item:first-child .accordion-icon-plus").hide();
	$(".accordion-item:first-child .accordion-icon-minus").show();
});
