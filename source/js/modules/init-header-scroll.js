const initHeaderScroll = () => {
  const pageWrapper = document.querySelector('[data-page-wrapper]');  
  const header = document.querySelector('[data-header]');

  if (!pageWrapper || !header) {
    return;
  }


  window.addEventListener("scroll", trackScroll);

  function trackScroll() {

    const pageWrapperCoordY = document.querySelector('[data-page-wrapper]').getBoundingClientRect().y;

    if (pageWrapperCoordY > 38) {
        header.classList.remove('is-active'); 
    }else {
       header.classList.add('is-active');
    }

  }

};

export { initHeaderScroll };