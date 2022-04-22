let titleLogoImg = document.querySelector('.title__logo-img');

titleLogoImg.addEventListener('click', () => {
    let titleLogoSrc = document.querySelector('.title__logo-img').getAttribute('src');
    if (titleLogoSrc == "images/icon-moon.svg") {
        titleLogoImg.setAttribute('src', "images/icon-sun.svg");
        document.querySelector('.header__background').style.backgroundImage = "url(../images/bg-desktop-dark.jpg)";
    }
    else {
        titleLogoImg.setAttribute('src', "images/icon-moon.svg");
        document.querySelector('.header__background').style.backgroundImage = "url(../images/bg-desktop-light.jpg)";
    }
});