const texts = [];

let hide = true;
var tl = gsap.timeline({paused:true});

window.onload = function () {
    const init = [{welcome: "welcome-about", nav: "nav-about"}, {welcome: "welcome-projects", nav: "nav-projects"},
        {welcome: "welcome-pictures", nav: "nav-pictures"}, {welcome: "welcome-contact", nav: "nav-contact"}
        , {welcome: "welcome-logo", nav: "nav-logo"}];

    init.forEach(function (t) {
        texts.push(t);
    })

    setUpAnimation();
}

function setUpAnimation(){
    tl = gsap.timeline({paused:true});
    texts.forEach(function (t) {

        let nav = document.getElementById(t.nav);
        let welcome = document.getElementById(t.welcome);

        // Special scale and y for logo
        let scale = (t.nav === "nav-logo") ? 1 / (200 / (7 * parseFloat(getComputedStyle(document.documentElement).fontSize))) : (1 / (2.25 / 1.5));
        let y = window.innerHeight/2 - (welcome.offsetTop + welcome.getBoundingClientRect().height / 2) - ((t.nav === "nav-logo") ? 0 :(2.5 * parseFloat(getComputedStyle(document.documentElement).fontSize)))

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

window.onscroll = function(){
    let scrollTop = window.scrollY;
    let winHeight = window.innerHeight;

    if( scrollTop >= 0){
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
window.onresize = function(){
    tl.kill();
    setUpAnimation();
};