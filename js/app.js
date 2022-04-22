let titleLogoImg = document.querySelector('.title__logo-img');

titleLogoImg.addEventListener('click', () => {
    let titleLogoSrc = document.querySelector('.title__logo-img').getAttribute('src');
    if (titleLogoSrc == "images/icon-moon.svg") {
        titleLogoImg.setAttribute('src', "images/icon-sun.svg");
        document.querySelector('.header__background').style.backgroundImage = "url(../images/bg-desktop-dark.jpg)";
        document.querySelector('.main__input').style.backgroundColor = "var(--dark)";
        document.querySelector('input').style.backgroundColor = "var(--dark)";
        document.querySelector('input').style.color = "var(--white)";
        document.body.style.backgroundColor = "var(--dark-black)";
        document.querySelector('.main__input').style.boxShadow = "2px 4px 40px 2px #000";
        document.querySelector('section').style.boxShadow = "2px 4px 40px 2px #000";
        document.querySelector('.content').style.boxShadow = "2px 4px 40px 2px #000";
        document.querySelector('footer p').style.color = "var(--white)";
        document.querySelector('.content .main__input').style.backgroundColor = "var(--dark)";
    }
    else {
        titleLogoImg.setAttribute('src', "images/icon-moon.svg");
        document.querySelector('.header__background').style.backgroundImage = "url(../images/bg-desktop-light.jpg)";
        document.querySelector('.main__input').style.backgroundColor = "var(--white)";
        document.querySelector('input').style.backgroundColor = "var(--white)";
        document.querySelector('input').style.color = "var(--dark)";
        document.body.style.backgroundColor = "var(--white)";
        document.querySelector('.main__input').style.boxShadow = "2px 3px 40px rgb(210, 211, 219)";
        document.querySelector('section').style.boxShadow = "2px 3px 40px rgb(210, 211, 219)";
        document.querySelector('.content').style.boxShadow = "2px 3px 40px rgb(210, 211, 219)";
        document.querySelector('footer p').style.color = "var(--dark)";
    }
});