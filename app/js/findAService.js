function findService() {
            
    let tabExpress = document.getElementById('tabExpress');
    let tabFormFieldLast = tabExpress.querySelectorAll('.tab__form-field:last-child');
        for(let i = 0; i < tabFormFieldLast.length; i++) {
            tabFormFieldLast[i].addEventListener("click", function() {
                let formFieldMenu = this.querySelector('.form__field-menu');
                formFieldMenu.classList.toggle('form__field-menu-active');
                formFieldMenu.style.borderColor = "#ffcc00"; 
            
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
        };
    
    let specialLi = document.querySelectorAll('.special__li');
        for(let i = 0; i < specialLi.length; i++) {
           specialLi[i].addEventListener("click", function(event) {
               this.querySelector('.special__ul').classList.toggle("special__ul-active");
               event.preventDefault();
               event.stopPropagation();
            });
        };
    
    };
         
findService();