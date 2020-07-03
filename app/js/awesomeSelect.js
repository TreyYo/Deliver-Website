function select() {
    let select = document.querySelector(".select");
    let selectItem = document.querySelectorAll(".select__item");

    select.addEventListener("click", action);
        function action () {
            this.classList.toggle('is-active');
        }

    selectItem.forEach(elem => {
        elem.addEventListener("click", selectChoose);
    });

    function selectChoose () {
        let text = this.textContent;
        let selectCurrent = document.querySelector('.select__current').
        textContent = text;
    }

};

select();