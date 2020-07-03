function headerSearchBox() {
    let elem = document.querySelector(".search-txt");
    elem.addEventListener("focus", hide);

    function hide() {
        this.placeholder = "";
    };

    elem.addEventListener("blur", show);

    function show() {
        this.placeholder = "Введите текст";
    };
};

headerSearchBox();