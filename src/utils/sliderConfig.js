export const getSliderConfig = (nextArrow, prevArrow, firstBreakPtSlides = 4, overrides = {}) => {
  return {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow,
    prevArrow,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: firstBreakPtSlides,
          slidesToScroll: firstBreakPtSlides,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    ...overrides,
  };
};
