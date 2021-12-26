export default class SliderPartnersFooter {
  constructor() {
    this.$slider = $('.logo-slider')
  }

  addSlick() {
    $(this.$slider).slick({
      rows: 0,
      dots: false,
      arrows: true, // bật/tắt nút next và prev 
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: true, // cho phép chạy vô tận
      adaptiveHeight: false, // chiều cao tương thích 
      // autoplay: true, // tự động chạy
      // autoplaySpeed: 1000, // sau 1s
      // draggable: false, // không cho kéo
      slide: '.logo-slider-item',
      prevArrow: '<button type="button" class="btn slick-prev-2 arrows"><span class="icomoon icon-chevron-left"></span></button>',
      nextArrow: '<button type="button" class="btn slick-next-2 arrows"><span class="icomoon icon-chevron-right"></span></button>',
      responsive: [{
          breakpoint: 1440,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
      ],
    });
  }

  init() {
    this.addSlick()
  }
}

new SliderPartnersFooter().init()
