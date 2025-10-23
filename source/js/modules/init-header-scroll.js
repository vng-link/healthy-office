const initHeaderScroll = () => {
  const pageWrapper = document.querySelector('[data-page-wrapper]');  
  const header = document.querySelector('[data-header]');
  const breakpoint = window.matchMedia(`(max-width:1200px)`);

  if (!pageWrapper || !header) {
    return;
  }


  window.addEventListener("scroll", trackScroll);

  function trackScroll() {

    const pageWrapperCoordY = document.querySelector('[data-page-wrapper]').getBoundingClientRect().y;
    if (breakpoint.matches) {
      if (pageWrapperCoordY > 50) {
          header.classList.remove('is-active'); 
      }else {
        header.classList.add('is-active');
      }
    }else {
      if (pageWrapperCoordY > 38) {
          header.classList.remove('is-active'); 
      }else {
        header.classList.add('is-active');
      }
    }

  }

};

export { initHeaderScroll };