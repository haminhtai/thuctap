
export default class Emcompass {
    constructor () {
      this.$html = $('html')
      this.$content = $('.content-list')
      this.$title = $('.title')
      this.$slider = $('.slider')
      this.$scrollbar = $('#test')
      this.$sliderLogo = $('.slider-logo')
    }

    hideContent() {
        $(this.$content).on('click', () => {
            this.$content.hide();
        })
    }

    showContent() {
        $(this.$title).on('click', () => {
            this.$content.show();
        })
   }

    addSlick() {
        $(this.$slider).slick({
            rows: 0,
            // adaptiveHeight: true, // chiều cao tương thích 
            // infinite: true, // cho phép chạy vô tận
            // autoplay: true, // tự động chạy
            // autoplaySpeed: 1000, // sau 1s
            // draggable: false, // không cho kéo
            arrows: true, // tắt nút next và prev 
            slide: '.slide-item',
            appendArrows: $('.group-arrow'),
            prevArrow: '<button type="button" class="btn arrows"><span class="icomoon icon-chevron-left"></span></button>',
            nextArrow: '<button type="button" class="btn arrows"><span class="icomoon icon-chevron-right"></span></button>'
        }); 
    }

    slickLogo() {
        $(this.$sliderLogo).slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            // autoplay: true, // tự động chạy
            // autoplaySpeed: 1000, // sau 1s
            prevArrow: '<button type="button" class="btn slick-prev arrows"><span class="icomoon icon-chevron-left"></span></button>',
            nextArrow: '<button type="button" class="btn slick-next arrows"><span class="icomoon icon-chevron-right"></span></button>',
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
            ]
        }); 
    }

    animationSlick() {
        $(this.$title).on('click', () => {
            this.$slider.animate({
                height: 'toggle'
            });
        });
    }

    // scrollbar() {
    //     $(this.$scrollbar).mCustomScrollbar({
    //         theme: "rounded-dots-dark"
    //     });
    // }

    test1 () {
        console.log('test3')
    }

    init () {
        this.hideContent()
        this.showContent()
        this.addSlick()
        this.slickLogo()
        this.animationSlick()
        //this.scrollbar()
        this.test1()
        this.$html.addClass('test')
    }
  }
  
  new Emcompass().init()
  