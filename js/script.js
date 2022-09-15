console.log("%cZoey was here","color: pink; font-size: 20px");

//side-nav
const navHolderScroll = document.getElementById("nav-holder-scroll");
const navHolder = document.getElementById("nav-holder");
let scrolled = false;

//language witch
const languageButton = document.getElementById("switch-language");
const nlText = Array.from(document.getElementsByClassName("NL"));
const engText = Array.from(document.getElementsByClassName("ENG"));

//side-nav
window.onscroll = function() {
    scrolled = window.scrollY > 100;
    if (window.scrollY > 100) {
        HideNav();
    } else
    {
        ShowNav();
    }
}

navHolderScroll.addEventListener("mouseover", () => {
    ShowNav();
});

navHolderScroll.addEventListener("mouseout", () => {
    HideNav();
});

navHolder.addEventListener("mouseover", () => {
    ShowNav();
});
navHolder.addEventListener("mouseout", () => {
    HideNav();
});

function ShowNav(){
    document.getElementById("sidenav").style.zIndex = "3";
    document.getElementById("projects").style.zIndex = "0";
    navHolder.style.display = "block";
    navHolderScroll.style.display = "none";
};
function HideNav() {
    if(!scrolled) return;
    navHolder.style.display = "none";
    navHolderScroll.style.display = "flex";
    document.getElementById("sidenav").style.zIndex = "1";
}

//language witch
function SwitchLanguage(button) {
    if(button.innerText == "English") {
        nlText.forEach(text => text.style.display = "none");
        engText.forEach(text => text.style.display = "block");
        button.innerText = "Nederlands";
    } else {
        nlText.forEach(text => text.style.display = "block");
        engText.forEach(text => text.style.display = "none");
        button.innerText = "English";
    }
}

// Als er een url parameter is voor language kunnen we die gebruiken.
const param = new URLSearchParams(window.location.search).get('lang');

// Als locale nogsteeds null is dan defaulten we naar engels.
if(param === "en") {
    nlText.forEach(text => text.style.display = "none");
    engText.forEach(text => text.style.display = "block");
    languageButton.innerText = "Nederlands";
}  