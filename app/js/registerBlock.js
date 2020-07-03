function registerBlock() {

    let registerBlockHeader = document.querySelector('.register__block-header');
    
        function changeTabs(block) {
           block.addEventListener('click', function() {
    
           let tabExpressOne = document.getElementById('tabExpressOne');
           let tabExpress = document.getElementById('tabExpress');
           let tabLogisticsOne = document.getElementById('tabLogisticsOne');
           let tabLogistics = document.getElementById('tabLogistics');
    
              if(tabLogisticsOne) {
                  tabLogisticsOne.classList.toggle('tabs-active');
                  tabLogistics.classList.toggle('change__form');
                  tabExpressOne.classList.toggle('tabs-active');
                  tabExpress.classList.toggle('change__form');
               }
            });
       
          };
    
        changeTabs(registerBlockHeader); 
    };
    
registerBlock();