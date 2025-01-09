const share = document.querySelector('.link');
const shareIcon = document.querySelector('.link svg');
const mobileShare = document.querySelector('.share_mobile');
const desktopShare = document.querySelector('.share_desktop');
const profile = document.querySelector('.profile');
const mediaQuery = window.matchMedia("(max-width: 499px)");


share.addEventListener('click', () => {
    if (mediaQuery.matches) {
        profile.classList.add('hide');
        document.querySelector('.share_link').style.backgroundColor = 'var(--desaturated-dark-blue)';
        document.querySelector('.icon').style.fill = 'var(--light-grayish-blue)';
        mobileShare.classList.remove('hide');
    }
    else {
        share.style.backgroundColor = 'var(--desaturated-dark-blue)';
        shareIcon.style.fill = 'var(--light-grayish-blue)';
        desktopShare.classList.remove('hide');
    }
});