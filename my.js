window.addEventListener('DOMContentLoaded', function (event){
    $(document).ready(function(){
        $('.gallery-slider').slick({
            slidesToShow: 3,            // Показывать 3 изображения на экране
            slidesToScroll: 1,          // Прокручивать по одному изображению
            arrows: true,               // Показывать стрелки
            dots: true,                 // Включить пагинацию (пейджер)
            responsive: [
                {
                    breakpoint: 768,    // На устройствах до 768px
                    settings: {
                        slidesToShow: 1 // Показывать одно изображение
                    }
                }
            ]
        });
    });
});