const texts = [];

let hide = true;
let tl = gsap.timeline({paused: true});

window.onload = function () {
    const init = [{welcome: "welcome-about", nav: "nav-about"}, {welcome: "welcome-projects", nav: "nav-projects"},
        {welcome: "welcome-cv", nav: "nav-cv"}, {welcome: "welcome-contact", nav: "nav-contact"}
        , {welcome: "welcome-logo", nav: "nav-logo"}];

    init.forEach(function (t) {
        texts.push(t);
    })

    setTimeout(setUpAnimation, 300);
    texts.forEach(function(t) {
            if (t.nav !== "nav-logo") {
                let target = document.getElementById("scroll-" + t.nav.substring(4));
                document.getElementById(t.nav).onclick = (_) => {
                    window.scrollTo({
                        top: target.getBoundingClientRect().top + window.pageYOffset - 150,
                        behavior: 'smooth'
                    })
                }
                document.getElementById(t.welcome).onclick = (_) => {
                    window.scrollTo({
                        top: target.getBoundingClientRect().top + window.pageYOffset -150,
                        behavior: 'smooth'
                    })
                }
            }
        }
    )
}

function setUpAnimation(){
    tl = gsap.timeline({paused:true});
    texts.forEach(function (t) {
        let nav = document.getElementById(t.nav);
        let welcome = document.getElementById(t.welcome);
        let relativeSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

        let scale = 0;
        // Special scale and y for logo
        if (t.nav === "nav-logo") {
            // If the window is below tailwind:md we have a different scale for the logo
            scale = window.innerWidth < 768 ? 1 / (200 / (4 * relativeSize)) : 1 / (200 / (7 * relativeSize))
        }else{
            scale = (1 / (2.25 / 1.5))
        }
        let y = window.innerHeight/2 - (welcome.offsetTop + welcome.getBoundingClientRect().height / 2) - ((t.nav === "nav-logo") ? 0 : (2.5 * relativeSize))

        tl.to("#" + t.welcome,
            {
                x: (nav.getBoundingClientRect().left + nav.getBoundingClientRect().width / 2) - (welcome.getBoundingClientRect().left + welcome.getBoundingClientRect().width / 2),
                y: y, duration: 1, onComplete: function(){showNavBar(t.welcome)}, scale: scale
            }, 0
        );
    })


}

function showNavBar(name) {
    document.getElementById('navbar').className = document.getElementById('navbar').className.replace("opacity-0", "opacity-100");
    texts.forEach(function (t) {
        if(t.welcome === name) {
            document.getElementById(t.welcome).className = document.getElementById(t.welcome).className.replace("opacity-0", " opacity-100");
            document.getElementById(t.nav).className = document.getElementById(t.nav).className.replace("opacity-0", " opacity-100");
        }
    })

    hide = false;
}
let resizeTimer = null;
function resizeDone(){
    tl.progress(0);
    tl.kill();
    tl.clear();
    setUpAnimation();
    resizeTimer = null;
}

window.onresize = function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeDone, 300);
};

window.onscroll = function(){
    let scrollTop = window.scrollY;
    let winHeight = window.innerHeight;

    if( scrollTop >= 0 && resizeTimer === null){

        tl.progress( scrollTop / ( winHeight* 0.5 ) );

        if(scrollTop <= winHeight*0.5 && !hide){
            texts.forEach(function (t) {
                document.getElementById(t.nav).className = document.getElementById(t.nav).className.replace("opacity-0", " opacity-100");
                document.getElementById(t.welcome).className = document.getElementById(t.welcome).className.replace("opacity-0", " opacity-100");
                document.getElementById('navbar').className = document.getElementById('navbar').className.replace(" opacity-100", " opacity-0");
            })
            hide = true;
        }
    }

}




