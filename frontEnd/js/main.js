document.addEventListener("DOMContentLoaded", () => {


    // ==============================
    // HERO BUTTON SCROLL
    // ==============================

    const exploreBtn = document.querySelector(".btn1");
    const joinBtn = document.querySelector(".btn2");


    if (exploreBtn) {

        exploreBtn.addEventListener("click", (e) => {

            e.preventDefault();

            const products = document.querySelector("#products");

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

            const plans = document.querySelector("#plans");

            if (plans) {

                plans.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }



    // ==============================
    // CTA BUTTON
    // ==============================

    const ctaBtn = document.querySelector(".cta a");


    if (ctaBtn) {

        ctaBtn.addEventListener("click", (e) => {

            e.preventDefault();

            const products = document.querySelector("#products");

            if (products) {

                products.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }



    // ==============================
    // WISHLIST FUNCTION
    // ==============================

    const wishIcons = document.querySelectorAll(".wish i");


    wishIcons.forEach(icon => {

        icon.addEventListener("click", () => {


            icon.classList.toggle("fa-regular");

            icon.classList.toggle("fa-solid");


            if (icon.classList.contains("fa-solid")) {

                icon.style.color = "red";

            } else {

                icon.style.color = "#555";

            }


        });

    });



    // ==============================
    // ADD TO CART FUNCTION
    // ==============================

    const cartButtons = document.querySelectorAll(".best-card button");


    cartButtons.forEach(button => {


        button.addEventListener("click", () => {


            button.innerHTML = "Added ✓";

            button.style.background = "#D4A017";


            setTimeout(() => {


                button.innerHTML = "Add to Cart";

                button.style.background = "";


            }, 1500);


        });


    });




    // ==============================
    // NAVBAR ACTIVE LINK
    // ==============================

    const navLinks = document.querySelectorAll("nav a");


    navLinks.forEach(link => {


        link.addEventListener("click", (e) => {


            e.preventDefault();


            navLinks.forEach(item => {

                item.classList.remove("active");

            });


            link.classList.add("active");


        });


    });



});
