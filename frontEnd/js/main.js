// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // ================= HERO BUTTONS =================

    const exploreBtn = document.querySelector(".btn1");
    const joinBtn = document.querySelector(".btn2");

    if (exploreBtn) {
        exploreBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const products = document.querySelector(".products");

            if (products) {
                products.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    if (joinBtn) {
        joinBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const plans = document.querySelector(".plans");

            if (plans) {
                plans.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    // ================= CTA BUTTON =================

    const ctaBtn = document.querySelector(".cta a");

    if (ctaBtn) {
        ctaBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const products = document.querySelector(".products");

            if (products) {
                products.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    // ================= WISHLIST =================

    const wishIcons = document.querySelectorAll(".wish i");

    wishIcons.forEach(icon => {
        icon.addEventListener("click", () => {

            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");

            if (icon.classList.contains("fa-solid")) {
                icon.style.color = "red";
            } else {
                icon.style.color = "";
            }

        });
    });

    // ================= ADD TO CART =================

    const cartButtons = document.querySelectorAll(".best-card button");

    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Product added to cart!");
        });
    });

});
