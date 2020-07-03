function headerDropLeftMenu() {
    let headerNavItems = document.querySelector('.header___nav-items');

    headerNavItems.onclick = function(event) {
        if (event.target) {
            document.querySelector('.header__nav-dropdown-menu').
            classList.toggle('header__active');
        }
    };
};

headerDropLeftMenu();

