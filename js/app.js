let titleLogoImg = document.querySelector('.title__logo-img');
titleLogoImg.addEventListener('click', () => {
    let titleLogoSrc = document.querySelector('.title__logo-img').getAttribute('src');
    if (titleLogoSrc == "images/icon-moon.svg") {
        titleLogoImg.setAttribute('src', "images/icon-sun.svg");
        document.body.style.backgroundColor = "var(--dark-black)";
        document.querySelector('.header__background').style.backgroundImage = "url(../images/bg-desktop-dark.jpg)";
        document.querySelector('.main__input').style.backgroundColor = "var(--dark)";
        document.querySelector('input').style.backgroundColor = "var(--dark)";
        document.querySelector('input').style.color = "var(--white)";       
        document.querySelector('.main__input').style.boxShadow = "2px 4px 40px 2px #000";
        // document.querySelector('content').style.boxShadow = "2px 4px 40px 2px #000";
        document.querySelector('.content').style.boxShadow = "2px 4px 40px 2px #000";
        document.querySelector('footer p').style.color = "var(--white)";
        document.querySelector('.main__input').style.backgroundColor = "var(--dark)";
        document.querySelector('.content').style.borderRadius = "0";
        document.querySelector('.content .main__input').style.borderRadius = "10px";
        document.querySelector('section').style.backgroundColor = "var(--dark)";
        document.querySelector('.main__input').style.backgroundColor = "var(--dark)";
        let mainInputText = document.querySelectorAll('.main__input');
        mainInputText.forEach(item => {
            item.style.backgroundColor = "var(--dark)";
        });
    }
    else {
        titleLogoImg.setAttribute('src', "images/icon-moon.svg");
        document.body.style.backgroundColor = "var(--white)";
        document.querySelector('.header__background').style.backgroundImage = "url(../images/bg-desktop-light.jpg)";
        document.querySelector('.main__input').style.backgroundColor = "var(--white)";
        document.querySelector('input').style.backgroundColor = "var(--white)";
        document.querySelector('input').style.color = "var(--dark)";       
        document.querySelector('.main__input').style.boxShadow = "2px 3px 40px rgb(210, 211, 219)";
        // document.querySelector('section').style.boxShadow = "2px 3px 40px rgb(210, 211, 219)";
        document.querySelector('.content').style.boxShadow = "2px 3px 40px rgb(210, 211, 219)";
        document.querySelector('footer p').style.color = "var(--dark)";
        document.querySelector('.main__input').style.backgroundColor = "var(--white)";
        document.querySelector('.content').style.borderRadius = "10px";
        document.querySelector('section').style.backgroundColor = "var(--white)";
        document.querySelector('.main__input').style.backgroundColor = "var(--white)";
        let mainInputText = document.querySelectorAll('.main__input');
        mainInputText.forEach(item => {
            item.style.backgroundColor = "var(--white)";
        });
    }
});
