 $('.cm-common-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
	  speed:4000,
  //autoplaySpeed: 5000,
});

  $('.cm-hero-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
	  speed:4000,
  //autoplaySpeed: 10000,
});
  $('.cm-facility-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
	  speed:4000,
  //autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 833,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 773,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    },
    ]
});

  $('.cm-pg-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});