const SCROLL_OFFSET = 150;
const ANIMATION_TRIGGER_RATIO = 0.5;
const RESIZE_DEBOUNCE_DELAY = 300;
const ANIMATION_SETUP_DELAY = 300;
const MOBILE_BREAKPOINT = 768;

const navigationItems = [
    { welcome: "welcome-about", nav: "nav-about" },
    { welcome: "welcome-projects", nav: "nav-projects" },
    { welcome: "welcome-cv", nav: "nav-cv" },
    { welcome: "welcome-contact", nav: "nav-contact" },
    { welcome: "welcome-logo", nav: "nav-logo" }
];

let isNavbarHidden = true;
let animationTimeline = gsap.timeline({ paused: true });
let resizeTimer = null;
let cachedElements = {};

window.onload = function() {
    cacheElements();
    setTimeout(setupAnimation, ANIMATION_SETUP_DELAY);
    setupClickHandlers();
};

function cacheElements() {
    cachedElements.navbar = document.getElementById('navbar');

    navigationItems.forEach(function(item) {
        cachedElements[item.nav] = document.getElementById(item.nav);
        cachedElements[item.welcome] = document.getElementById(item.welcome);

        if (item.nav !== "nav-logo") {
            const targetId = "scroll-" + item.nav.substring(4);
            cachedElements[targetId] = document.getElementById(targetId);
        }
    });
}

function setupClickHandlers() {
    navigationItems.forEach(function(item) {
        if (item.nav !== "nav-logo") {
            const targetElement = cachedElements["scroll-" + item.nav.substring(4)];

            if (!targetElement) {
                console.warn(`Target element not found for: ${item.nav}`);
                return;
            }

            const navElement = cachedElements[item.nav];
            const welcomeElement = cachedElements[item.welcome];

            if (navElement && welcomeElement) {
                navElement.addEventListener('click', function() {
                    scrollToTarget(targetElement);
                });

                welcomeElement.addEventListener('click', function() {
                    scrollToTarget(targetElement);
                });
            }
        }
    });
}

function scrollToTarget(targetElement) {
    if (!targetElement) return;

    window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET,
        behavior: 'smooth'
    });
}

function setupAnimation() {
    if (animationTimeline) {
        animationTimeline.progress(0);
        animationTimeline.kill();
        animationTimeline.clear();
    }

    animationTimeline = gsap.timeline({ paused: true });

    navigationItems.forEach(function(item) {
        const navElement = cachedElements[item.nav];
        const welcomeElement = cachedElements[item.welcome];

        if (!navElement || !welcomeElement) {
            console.warn(`Elements not found for: ${item.nav} or ${item.welcome}`);
            return;
        }

        const relativeSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const scale = calculateScale(item.nav, relativeSize);
        const yOffset = calculateYOffset(welcomeElement, navElement, item.nav, relativeSize);
        const xOffset = calculateXOffset(navElement, welcomeElement);

        animationTimeline.to("#" + item.welcome, {
            x: xOffset,
            y: yOffset,
            scale: scale,
            duration: 1,
            onComplete: function() {
                showNavbar(item.welcome);
            }
        }, 0);
    });
}

function calculateScale(navId, relativeSize) {
    if (navId === "nav-logo") {
        return window.innerWidth < MOBILE_BREAKPOINT
            ? 1 / (200 / (4 * relativeSize))
            : 1 / (200 / (7 * relativeSize));
    }
    return 1 / (2.25 / 1.5);
}

function calculateYOffset(welcomeElement, navElement, navId, relativeSize) {
    const welcomeRect = welcomeElement.getBoundingClientRect();
    const welcomeCenter = welcomeElement.offsetTop + welcomeRect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const additionalOffset = navId === "nav-logo" ? 0 : (2.5 * relativeSize);

    return viewportCenter - welcomeCenter - additionalOffset;
}

function calculateXOffset(navElement, welcomeElement) {
    const navRect = navElement.getBoundingClientRect();
    const welcomeRect = welcomeElement.getBoundingClientRect();
    const navCenter = navRect.left + navRect.width / 2;
    const welcomeCenter = welcomeRect.left + welcomeRect.width / 2;

    return navCenter - welcomeCenter;
}

function showNavbar(welcomeElementId) {
    if (!cachedElements.navbar) return;

    toggleOpacity(cachedElements.navbar, true);

    navigationItems.forEach(function(item) {
        if (item.welcome === welcomeElementId) {
            const welcomeElement = cachedElements[item.welcome];
            const navElement = cachedElements[item.nav];

            if (welcomeElement && navElement) {
                toggleOpacity(welcomeElement, true);
                toggleOpacity(navElement, true);
            }
        }
    });

    isNavbarHidden = false;
}

function toggleOpacity(element, show) {
    if (!element) return;

    if (show) {
        element.className = element.className.replace("opacity-0", "opacity-100");
    } else {
        element.className = element.className.replace("opacity-100", "opacity-0");
    }
}

function handleResize() {
    if (resizeTimer) {
        clearTimeout(resizeTimer);
    }

    resizeTimer = setTimeout(function() {
        setupAnimation();
        resizeTimer = null;
    }, RESIZE_DEBOUNCE_DELAY);
}

function handleScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * ANIMATION_TRIGGER_RATIO;

    if (scrollTop >= 0 && resizeTimer === null) {
        const progress = Math.min(scrollTop / triggerPoint, 1);
        animationTimeline.progress(progress);

        if (scrollTop <= triggerPoint && !isNavbarHidden) {
            hideAllElements();
            isNavbarHidden = true;
        }
    }
}

function hideAllElements() {
    if (cachedElements.navbar) {
        toggleOpacity(cachedElements.navbar, false);
    }

    navigationItems.forEach(function(item) {
        const welcomeElement = cachedElements[item.welcome];
        const navElement = cachedElements[item.nav];

        if (welcomeElement && navElement) {
            toggleOpacity(welcomeElement, true);
            toggleOpacity(navElement, true);
        }
    });
}

window.onresize = handleResize;
window.onscroll = handleScroll;