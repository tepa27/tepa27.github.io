let menuPopup = (function(options){
  let menu = document.querySelector(options.menuList);
  let items = menu.children;
  let popupMenu = document.querySelectorAll(options.popup);
  let activeItem = document.querySelectorAll(options.activeItem);

  let popupClass = 'nav-popup__item';
  let attr = 'data-position';
  let popupActive = 'nav-popup--active';

  let init = function(){
    for (let i = 0; i < activeItem.length; i++){
      let _openMenu = function(event){
        event.preventDefault();
        if (!this.hasAttribute(attr)){
          console.log('введите атрибут data-position');
          return;
        };
        let attrValue = this.getAttribute(attr);
        let width = this.offsetWidth;
        let left = 0;
        let padding = parseFloat(getComputedStyle(menu).paddingLeft);

        for(let j = 0; j < (attrValue - 1); j++){
          left = items[j].offsetWidth + left;
        }
        
        for (let i = 0; i < popupMenu.length; i++){
          if (popupMenu[i].getAttribute(attr) === attrValue){
            popupMenu[i].style.width = width + 'px';
            popupMenu[i].style.left = left + padding + 'px';
            popupMenu[i].classList.toggle(popupActive);
          }
        }
      }
      activeItem[i].addEventListener('click', _openMenu);
      activeItem[i].addEventListener('mouseover', _openMenu);
    }

    // activeItem.forEach(function(element) {
    //   let _openMenu = function(event){
    //     event.preventDefault();
    //     if (!this.hasAttribute(attr)){
    //       console.log('введите атрибут data-position');
    //       return;
    //     };
    //     let attrValue = this.getAttribute(attr);
    //     let width = this.offsetWidth;
    //     let left = 0;
    //     let padding = parseFloat(getComputedStyle(menu).paddingLeft);

    //     for(let j = 0; j < (attrValue - 1); j++){
    //       left = items[j].offsetWidth + left;
    //     }
        
    //     for (let i = 0; i < popupMenu.length; i++){
    //       if (popupMenu[i].getAttribute(attr) === attrValue){
    //         popupMenu[i].style.width = width + 'px';
    //         popupMenu[i].style.left = left + padding + 'px';
    //         popupMenu[i].classList.toggle(popupActive);
    //       }
    //     }
    //   }
    //   element.addEventListener('click', _openMenu);
    //   element.addEventListener('mouseover', _openMenu);
    // });
  };

  return{
    init: init
  }
})({
  menuList: '.nav__list',
  menuItem: '.nav__item',
  activeItem: '.nav__item--popup',
  popup: '.nav-popup'
})

menuPopup.init();