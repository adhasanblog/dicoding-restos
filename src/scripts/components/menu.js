export function stickyHeader() {
  window.addEventListener('scroll', () => {
    const appBar = document.querySelector('.appbar');
    const appBarPosition = appBar.offsetTop;

    if (window.pageYOffset > appBarPosition) {
      appBar.classList.add('sticky');
    } else {
      appBar.classList.remove('sticky');
    }
  });
}

export function hamburgerMenu() {
  const hamburgerButton = document.querySelector('.hamburger');
  const navBar = document.querySelector('nav');
  const menuAnchors = navBar.querySelectorAll('a');

  hamburgerButton.addEventListener('click', (e) => {
    hamburgerButton.classList.toggle('active');
    navBar.classList.toggle('active');
    hamburgerButton.ariaLabel = 'Tombol Ditekan';
    e.stopPropagation();

    menuAnchors.forEach((anchor) => {
      if (hamburgerButton.classList.contains('active')) {
        anchor.tabIndex = 0;
      }
    });
  });

  window.addEventListener('click', (e) => {
    console.log(e.target);
    if (navBar.classList.contains('active') && e.target != hamburgerButton) {
      hamburgerButton.classList.remove('active');
      navBar.classList.remove('active');
    }
  });

  if (!hamburgerButton.classList.contains('active')) {
    menuAnchors.forEach((anchor) => {
      anchor.tabIndex = -1;
    });
  }
}
