export default class ModTestimonials {
    constructor () {
      this.$slider = $('.slider-list')
    }

    addSlick() {
        $(this.$slider).slick({
            rows: 0,
            dots: false,
            arrows: true, // bật/tắt nút next và prev 
            slidesToScroll: 1,
            slidesToShow: 1,
            infinite: true, // cho phép chạy vô tận
            adaptiveHeight: false, // chiều cao tương thích 
            // autoplay: true, // tự động chạy
            // autoplaySpeed: 1000, // sau 1s
            // draggable: false, // không cho kéo
            slide: '.slide-item',
            appendArrows: $('.arrow-append'),
            prevArrow: '<button type="button" class="btn slick-prev-1 arrows"><span class="icomoon icon-chevron-left"></span></button>',
            nextArrow: '<button type="button" class="btn slick-next-1 arrows"><span class="icomoon icon-chevron-right"></span></button>'
        }); 
    }

    init () {
        this.addSlick()
    }
  }
  
  new ModTestimonials().init()
  