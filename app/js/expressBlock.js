function ExpressBlock() {
            
	let tabFormField = document.querySelectorAll('.tab__form-field:not(:last-child)');
    tabFormField.forEach(elems => {
        elems.addEventListener("click", function() {  
            let formFieldBody = this.querySelector('.form__field-body');
            formFieldBody.classList.toggle('form__field-body-active'); 
            formFieldBody.style.borderColor = "#ffcc00";   

            let tabFormFieldSelect = this.querySelector('.tab__form-field-select');
            if(tabFormFieldSelect.style.background == "" || tabFormFieldSelect.style.borderColor == "") {
                tabFormFieldSelect.style.background = "#ffcc00";
                tabFormFieldSelect.style.borderColor = "#ffcc00";
            } else {
                tabFormFieldSelect.style.background = "";
                tabFormFieldSelect.style.borderColor = "";
            };  

             let fieldIcon = this.querySelector('.field__icon');
             if(fieldIcon.style.borderLeftColor == "" || fieldIcon.style.borderLeftColor == "rgb(255, 255, 255)") {
                fieldIcon.style.borderLeftColor = "#ba0000";
            } else {
                fieldIcon.style.borderLeftColor = "#fff";
            };  

             let fieldCurrent = this.querySelector('.field__current');
            if(fieldCurrent.style.color == "" || fieldCurrent.style.color == "rgb(255, 255, 255)") {
                fieldCurrent.style.color = "#ba0000";
            } else {
                fieldCurrent.style.color = "#fff";
            };   

             let faChevronDown = this.querySelector('.fa-chevron-down');
            if(faChevronDown.style.transform == "" || faChevronDown.style.transform == "rotate(0deg)") {
                faChevronDown.style.transform = "rotate(-180deg)";
                faChevronDown.style.color = "#ba0000";
            } else {
                faChevronDown.style.transform = "rotate(0deg)";
                faChevronDown.style.color = "#fff";
            };

        });
    });

    let formFieldBody = document.querySelectorAll('.form__field-body');
    formFieldBody.forEach(el => {
        el.addEventListener("click", function(event) {
            let current = event.target;
            let textCont = current.textContent;
            let fieldCurrent = current.closest('.tab__form-field').querySelector('.field__current');
            fieldCurrent.textContent = textCont;
        });
    });

};
    
ExpressBlock();