// Padding for body related to the navbar height

document.querySelector('body').style.paddingTop = document.querySelector('nav').offsetHeight + 15 + "px";

// Dynamic bg color for navbar

document.addEventListener('scroll', () => {
    let titleBar = document.querySelector(".title-bar");
    let nav = document.querySelector('nav');
    
    if (titleBar.getBoundingClientRect().top <= nav.offsetHeight) {
        nav.style.background = "rgb(33 37 41)";
    } else {
        nav.style.background = "transparent";
    }
});


// Multi item carousel

document.querySelectorAll('.carousel.slide').forEach((carousel) => {
    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 7;
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })    
})

// Function EXTRA to fade in the carousels when page's scrolling

function isInViewport(elements) {
    elements.forEach((element) => {
        if (element.getBoundingClientRect().top <= window.innerHeight && element.getBoundingClientRect().bottom >= 0) {
            element.classList.add('visibleElement');
        } else {
            element.classList.remove('visibleElement');
        }    
    });
}

let hiddenEl = document.querySelectorAll('.hiddenElement');

document.addEventListener("DOMContentLoaded", () => {
    isInViewport(hiddenEl);
});

window.addEventListener('scroll', () => {
    isInViewport(hiddenEl);
});