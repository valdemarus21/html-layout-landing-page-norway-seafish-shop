$(function(){

    $('.header-slider').slick({
        dots: true, 
        
        
        prevArrow: '<button type="button" class="slic-prev"><img src="/images/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slic-next"><img src="/images/next.svg" alt=""></button>',
        vertical: true,
        fade: true,
        responsive: [
          {
            breakpoint: 371,
            settings: {
            dots: false,
            arrows: false,
            autoplay: true, 
            autoplaySpeed: 1000,
            }
          }
        ]
    });


$('.product__name').slick({
    slidesToShow: 6, // количество слайдов для показа
    slidesToScroll: 1, // сколько будет за один раз скролится
    // fade: true, // тип анимации 
    focusOnSelect: true, // при нажатии на один слайд, будет переходить на связанный
    // слайд на другом слайдере 
    asNavFor: '.product__content', // с каким слайдером нужно связать
    vertical: true,  
    prevArrow: '<button type="button" class="product-prev"><img src="/images/product-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="product-next"><img src="/images/product-next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 891,
        settings: {
          vertical: false, 
          slidesToShow: 3,
          dots: true,
          arrows: false,
          centerMode: true, 
        },
        breakpoint: 461,
        settings: {
          vertical: false, 
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  
  });
  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    // dots: true,
    // centerMode: true,
    fade: true, 
    arrows: false,
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  })


});

