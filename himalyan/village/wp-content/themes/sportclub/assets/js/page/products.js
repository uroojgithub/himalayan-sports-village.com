$(document).on("click", ".cm-products-slide-button-prev", () => {
  $(".cm-products-slider").slick('slickPrev');
});
$(document).on("click", ".cm-products-slide-button-next", () => {
  $(".cm-products-slider").slick('slickNext');
});

$('.cm-products-slider').slick({
    dots: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});