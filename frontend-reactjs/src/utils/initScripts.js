/**
 * Initializes external JavaScript libraries after React components have mounted
 */
export const initSliders = () => {
  if (window.jQuery && window.jQuery.fn.owlCarousel) {
    // Initialize owl carousels
    window.jQuery('.main-slider__carousel').owlCarousel({
      loop: true,
      items: 1,
      navText: ['<span className="icon-right-arrow"></span>', '<span className="icon-right-arrow2"></span>'],
      margin: 0,
      dots: false,
      nav: true,
      animateOut: 'slideOutDown',
      animateIn: 'fadeIn',
      active: true,
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 7000,
      autoplayHoverPause: false
    });

    window.jQuery('.case-one__carousel').owlCarousel({
      loop: true,
      autoplay: true,
      margin: 30,
      nav: false,
      dots: false,
      smartSpeed: 500,
      autoplayTimeout: 10000,
      navText: ['<span className="icon-left-arrow"></span>', '<span className="icon-next"></span>'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        },
        1500: {
          items: 2
        }
      }
    });
  }
};

export const initCounters = () => {
  if (window.jQuery && window.jQuery.fn.appear) {
    window.jQuery('.odometer').appear(function () {
      const odo = window.jQuery(".odometer");
      odo.each(function () {
        const countNumber = window.jQuery(this).attr("data-count");
        window.jQuery(this).html(countNumber);
      });
    });
  }
};

export const initAnimations = () => {
  if (window.WOW) {
    new window.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }).init();
  }
};

/**
 * Initialize all external scripts
 */
export const initAllScripts = () => {
  initSliders();
  initCounters();
  initAnimations();
  
  // Re-initialize main.js functionality if needed
  if (window.jQuery && typeof window.jQuery.fn.thmOwlInit === 'function') {
    window.jQuery.thmOwlInit();
  }
};