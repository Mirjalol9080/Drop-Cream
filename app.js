const HeaderSearch = document.querySelector('.header-search');
const searchPanel = document.querySelector('.search-panel');
const headersearchclose = document.querySelector('.header-search__close');
const headermobilebutton = document.querySelector('.header-mobile__button');

headermobilebutton.addEventListener('click' , function(){
    searchPanel.classList.add('open')
})

HeaderSearch.addEventListener('click' , function(){
    searchPanel.classList.add('open')
})

headersearchclose.addEventListener('click' ,function(){
    searchPanel.classList.remove('open')
})