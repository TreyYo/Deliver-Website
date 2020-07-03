function headerDropRightMenu() {
    let headerNavItemsRight = document.querySelector('#hDRM');

    headerNavItemsRight.onclick = function(event) {
        if (event.target) {
            document.querySelector('.header__nav-dropdown-menu-second').
            classList.toggle('header__active');
        }
    };
};

headerDropRightMenu();