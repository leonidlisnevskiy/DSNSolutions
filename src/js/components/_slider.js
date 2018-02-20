$('.owl-carousel').owlCarousel({
  nav: false,
  autoplay: false,
  items: 2.2,
  slideBy: 2,
  loop: true,
  navText: ['<i class="icon-caret-prev"></i>', '<i class="icon-caret-next"></i>'],
  responsive: {
    767: {
      items: 2
    },
    1024: {
      nav: true,
    	items: 4
    }
  }
});
