const HeaderSearch = document.querySelector('.header-search');
const searchPanel = document.querySelector('.search-panel');
const headersearchclose = document.querySelector('.header-search__close');
const headermobilebutton = document.querySelector('.header-mobile__button');
const MenuButton = document.querySelector('.menu-button');
const Modal = document.querySelector('.modal');
const ModalBg = document.querySelector('.modal-bg');
const ModalCloseBtn = document.querySelector('.modal-close__btn');
const LoginButton = document.querySelector('.login-button');
const Login = document.querySelector('.login');
const loginBg = document.querySelector('.login-bg');
const Loginbuttons = document.querySelectorAll('.login-btn');
const Logincards = document.querySelectorAll('.login-card');

Loginbuttons[0].classList.add('active');
Logincards[0].classList.add('open');

for (let i = 0; i < Loginbuttons.length; i++) {
    Loginbuttons[i].addEventListener('click', function() {
        for (let j = 0; j < Logincards.length; j++) {
            if (i === j) {
                Logincards[j].classList.add('open');
                Loginbuttons[j].classList.add('active');
            } else {
                Logincards[j].classList.remove('open');
                Loginbuttons[j].classList.remove('active');
            }
        }
    });
}



LoginButton.addEventListener('click' ,function(){
    if(!Login.classList.contains('open')){
        Login.classList.add('open')
    }
})

loginBg.addEventListener('click', function(){
    if(Login.classList.contains('open')){
       Login.classList.remove('open')
    }
})

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
