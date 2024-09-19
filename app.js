const HeaderSearch = document.querySelector('.header-search');
const searchPanel = document.querySelector('.search-panel');
const headersearchclose = document.querySelector('.header-search__close');
const headermobilebutton = document.querySelector('.header-mobile__button');
const MenuButton = document.querySelector('.menu-button');
const Modal = document.querySelector('.modal');
const ModalBg = document.querySelector('.modal-bg');
const ModalCloseBtn = document.querySelector('.modal-close__btn')


MenuButton.addEventListener('click' , function(){
    if(!Modal.classList.contains('open')){
        Modal.classList.add('open');
        searchPanel.classList.remove('open')
        document.body.style.overflow = 'hidden';
    }
})

ModalBg.addEventListener('click' , function(){
    if(Modal.classList.contains('open')){
        Modal.classList.remove('open');
        document.body.style.overflow = '';
    }
})

ModalCloseBtn.addEventListener('click' , function(){
    if(Modal.classList.contains('open')){
        Modal.classList.remove('open');
        document.body.style.overflow = '';
    }
})

headermobilebutton.addEventListener('click' , function(){
    searchPanel.classList.add('open')
})

HeaderSearch.addEventListener('click' , function(){
    searchPanel.classList.add('open')
})

headersearchclose.addEventListener('click' ,function(){
    searchPanel.classList.remove('open')
})
