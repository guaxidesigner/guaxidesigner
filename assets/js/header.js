const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".menu");
    const navLinks = document.querySelectorAll(".menu li");

    //Toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                setTimeout(() => {
                    link.style.animation = "";
                }, 500);
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 7 + 0.3
                }s`;
            }
        });

        //Burger Animation
        burger.classList.toggle("toggle");
    });
};

navSlide();
