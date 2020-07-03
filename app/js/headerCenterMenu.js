function headerMainMenu() {

    let dhlLogo = document.querySelector('.dhl_logo');
    
    dhlLogo.addEventListener("click", function(event) {
        let currElem = event.target;
       
        if(currElem.tagName = 'IMG') {
            let headerLogistics = currElem.parentElement.querySelector('.header__logistics');
            headerLogistics.classList.toggle('dhl_logo-active');
        } else {
            return;
        };
    });
    
};
    
headerMainMenu();