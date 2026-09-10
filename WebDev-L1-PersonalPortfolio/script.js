/* =========================================================
   ANJALI K.B — PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const preloader =
    document.getElementById("preloader");

const header =
    document.getElementById("header");

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

const navItems =
    document.querySelectorAll(".nav-link");

const backToTop =
    document.getElementById("backToTop");

const typingText =
    document.getElementById("typing-text");

const revealElements =
    document.querySelectorAll(".reveal");

const skillCategories =
    document.querySelectorAll(".skill-category");



/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (preloader) {

            preloader.classList.add("hidden");

        }

    }, 700);

});



/* =========================================================
   MOBILE MENU
========================================================= */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        navLinks.classList.toggle("open");

        document.body.classList.toggle("menu-open");

    });


    navItems.forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");

            navLinks.classList.remove("open");

            document.body.classList.remove("menu-open");

        });

    });

}



/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

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


    navItems.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);

updateActiveNav();



/* =========================================================
   TYPING ANIMATION
========================================================= */

const roles = [

    "Software Developer",

    "Web Developer",

    "AI Enthusiast",

    "Python Developer",

    "Technology Enthusiast"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeRole() {

    if (!typingText) return;


    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        characterIndex++;

    } else {

        characterIndex--;

    }


    typingText.textContent =
        currentRole.substring(
            0,
            characterIndex
        );


    let typingSpeed =
        deleting ? 45 : 85;


    if (
        !deleting &&
        characterIndex ===
        currentRole.length
    ) {

        typingSpeed = 1600;

        deleting = true;

    }


    else if (
        deleting &&
        characterIndex === 0
    ) {

        deleting = false;

        roleIndex =
            (roleIndex + 1) %
            roles.length;

        typingSpeed = 400;

    }


    setTimeout(
        typeRole,
        typingSpeed
    );

}


setTimeout(
    typeRole,
    1200
);



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12,

            rootMargin:
                "0px 0px -40px 0px"
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================================================
   SKILL BAR ANIMATION
========================================================= */

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target
                        .classList
                        .add("visible");

                    skillObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.25
        }
    );


skillCategories.forEach(category => {

    skillObserver.observe(category);

});



/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

function updateBackToTop() {

    if (!backToTop) return;


    if (window.scrollY > 600) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}



/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.offsetTop -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });



/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursorDot =
    document.querySelector(
        ".cursor-dot"
    );

const cursorOutline =
    document.querySelector(
        ".cursor-outline"
    );


if (
    cursorDot &&
    cursorOutline &&
    window.innerWidth > 760
) {

    let mouseX = 0;

    let mouseY = 0;

    let outlineX = 0;

    let outlineY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX = event.clientX;

            mouseY = event.clientY;


            cursorDot.style.left =
                mouseX + "px";

            cursorDot.style.top =
                mouseY + "px";

        }
    );


    function animateCursor() {

        outlineX +=
            (mouseX - outlineX) * 0.15;

        outlineY +=
            (mouseY - outlineY) * 0.15;


        cursorOutline.style.left =
            outlineX + "px";

        cursorOutline.style.top =
            outlineY + "px";


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    const hoverElements =
        document.querySelectorAll(
            "a, button, .project-card, .about-card, .skill-category"
        );


    hoverElements.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursorOutline.classList
                    .add("hover");

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursorOutline.classList
                    .remove("hover");

            }
        );

    });

}



/* =========================================================
   PROJECT CARD TILT EFFECT
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


if (window.innerWidth > 900) {

    projectCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                        centerY) * -2;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 2;


                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-9px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}



/* =========================================================
   MOUSE GLOW ON CARDS
========================================================= */

const glowCards =
    document.querySelectorAll(
        ".about-card, .skill-category, .certification-card, .contact-card"
    );


glowCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            card.style.background =
                `
                radial-gradient(
                    250px circle at
                    ${x}px ${y}px,
                    rgba(85,183,255,0.08),
                    rgba(10,23,39,0.65) 60%
                )
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
                "";

        }
    );

});



/* =========================================================
   ESC KEY — CLOSE MOBILE MENU
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            if (menuToggle) {

                menuToggle.classList
                    .remove("active");

            }


            if (navLinks) {

                navLinks.classList
                    .remove("open");

            }


            document.body
                .classList
                .remove("menu-open");

        }

    }
);



/* =========================================================
   RESIZE HANDLER
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 760
        ) {

            if (menuToggle) {

                menuToggle.classList
                    .remove("active");

            }


            if (navLinks) {

                navLinks.classList
                    .remove("open");

            }


            document.body
                .classList
                .remove("menu-open");

        }

    }
);



/* =========================================================
   PAGE LOADED
========================================================= */

console.log(
    "Anjali K.B Portfolio loaded successfully."
);