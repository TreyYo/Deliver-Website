function subMenu () {

    let internationalProvider = document.querySelector(".international__provider");
    internationalProvider.addEventListener("click", subMenuItems);

    function subMenuItems(event) {
        let current = event.target;

        if(current.tagName == 'A') {
            tagA(current);
        } else if(current.tagName == 'I') {
            classI(current);
        } else {
            return; 
        };

        function tagA(elem) {
            let parentElement = elem.parentElement.querySelector('.provider__submenu');
            let arrow = elem.parentElement.querySelector('.fa-caret-right');
            if(!parentElement) {
                event.preventDefault();
                return;
            }
            if(arrow.style.transform == "") {
                arrow.style.transform = 'rotate(90deg)';
            } else {
                arrow.style.transform = '';
            };
            event.preventDefault();
            parentElement.classList.toggle('submenu-active');
        };


        function classI(elem) {
            let parentElement = elem.parentElement.querySelector('.provider__submenu');
            let arrow = elem.parentElement.querySelector('.fa-caret-right');
            if(!parentElement) return;
            if(arrow.style.transform == "") {
                arrow.style.transform = 'rotate(90deg)';
            } else {
                arrow.style.transform = '';
            };
            parentElement.classList.toggle('submenu-active');
        };
    
 
    }; 

};

subMenu();
