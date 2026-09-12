/* ========================================
   NAVBAR SCROLL EFFECT
======================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ========================================
   SMOOTH NAVIGATION
======================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const targetId =
            link.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
    document.querySelectorAll(
        ".about-card, .section-title, .legacy-text"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ========================================
   TIMELINE ANIMATION
======================================== */

const timelineItems =
    document.querySelectorAll(
        ".timeline-item"
    );

const timelineObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    timelineObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.2
        }
    );


timelineItems.forEach(item => {

    timelineObserver.observe(item);

});


/* ========================================
   IMAGE PARALLAX EFFECT
======================================== */

const heroImage =
    document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    if (!heroImage) {
        return;
    }

    const scrollPosition =
        window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroImage.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

    }

});


/* ========================================
   ACTIVE NAVIGATION
======================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.style.color = "#d4af37";

        }

    });

});


/* ========================================
   BUTTON RIPPLE EFFECT
======================================== */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", event => {

        const ripple =
            document.createElement("span");

        ripple.style.position = "absolute";

        ripple.style.width = "10px";

        ripple.style.height = "10px";

        ripple.style.background =
            "rgba(255,255,255,0.6)";

        ripple.style.borderRadius =
            "50%";

        ripple.style.pointerEvents =
            "none";

        const rect =
            button.getBoundingClientRect();

        ripple.style.left =
            `${event.clientX - rect.left}px`;

        ripple.style.top =
            `${event.clientY - rect.top}px`;

        button.style.position =
            "relative";

        button.style.overflow =
            "hidden";

        button.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* ========================================
   PAGE LOAD EFFECT
======================================== */

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );

});