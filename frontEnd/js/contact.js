// Testimonial Slider

const cards = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {

        // Remove active class from all cards
        cards.forEach(card => card.classList.remove("active"));

        // Remove active class from all dots
        dots.forEach(d => d.classList.remove("active"));

        // Show selected card
        cards[index].classList.add("active");

        // Highlight selected dot
        dots[index].classList.add("active");
    });
});
