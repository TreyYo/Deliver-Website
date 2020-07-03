function footerNav() {

    let footerMediaCenter = document.querySelector('.footer__media-center');

    footerMediaCenter.addEventListener("click", function(event) {
        let currItem = event.target;
        if(currItem.tagName == 'A') {
            let mediaUl = currItem.nextSibling.nextSibling;
            mediaUl.classList.toggle('media__ul-active');
            event.preventDefault();
        } else {
            return;
        };

     });
    
};

footerNav();