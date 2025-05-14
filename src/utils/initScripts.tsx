/**
 * Initializes external JavaScript libraries after React components have mounted
 */
export const initSliders = (): void => {
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
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  }
};

/**
 * Initialize all third-party scripts that need to run after component mounting
 */
export const initAllScripts = (): void => {
  // Call all initialization functions
  initSliders();
  
  // Initialize WOW.js animations if available
  if (typeof window.WOW === 'function') {
    new window.WOW().init();
  }
  
  // Manually hide preloader if it still exists
  const preloader = document.querySelector('.preloader') as HTMLElement;
  if (preloader) {
    preloader.style.display = 'none';
  }
  
  // Initialize any other third-party scripts as needed
};

// Type declaration for jQuery and other libraries
declare global {
  interface Window {
    jQuery: any;
    $: any;
    WOW: any;
  }
}

// Export typings for initAllScripts
export default initAllScripts;
