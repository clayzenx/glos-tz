// инициализация слайдера
$(document).ready(function(){
    $('#slider').slick({
       arrows: true,
       fade: true,
       autoplay: true,
       autoplaySpeed: 4000,
       appendArrows: '.slider-arrows',
       prevArrow: '<div class="slider-arrows-left"><i class="fas fa-chevron-left"></i></div>',
       nextArrow: '<div class="slider-arrows-right"><i class="fas fa-chevron-right"></i></div>',
    });
});

// Переключатель видимости саб меню каталога
document.querySelector('#product-navigation-menu').onclick = event => {
    if(event.target.tagName = "A"){
        let submenu = event.target.closest('li').querySelector('ul');
        if(submenu.style.display == 'block') submenu.style.display = "none";
        else submenu.style.display = "block";
    }
};

// Обработчик клика по продуктовым картачкам
document.querySelector('.product-cards-grid').onclick = event => {
    if(event.target.closest('.product-cards-grid-item')){
        if(event.target.classList.contains('basket')){
            alert('add to basket');
        } else alert ('redirect to product page')
    }
}

// Обработчик открытия/закрытия формы фидбэка
document.querySelector('#company-contacts-button').onclick = showFeedBack;
document.querySelector('#feedback-mobile-button').onclick = showFeedBack;
document.querySelector('.btnsub').onclick = toggleFeedBack;
document.querySelector('.shape').onclick = toggleFeedBack;

function showFeedBack(event){
    document.querySelector('#background-feedback').style.display = "block";
}

function toggleFeedBack(event){
    document.querySelector('#background-feedback').style.display = "none";
}

