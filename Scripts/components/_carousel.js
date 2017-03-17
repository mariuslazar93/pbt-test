var CarouselComponent = (function() {
    var carousel,
        slideList,
        navList;

    function handleClick(e) {
        var self = this;
        navList.forEach(function(item){
          if(item === self){
            item.classList.add('active');
          }
          else {
            item.classList.remove('active');
          }
        });
        var slideToActivate = self.dataset.target - 1;
        slideList.forEach(function(elem, index) {
            if (index == slideToActivate) {
                elem.classList.add('active');
            } else {
                elem.classList.remove('active');
            }
        });
    }

    function bindEvents() {
        navList.forEach(function(item) {
            item.addEventListener('click', handleClick);
        });
    }

    function init() {
        carousel = document.querySelector('.carousel');
        slideList = carousel.querySelectorAll('.carousel__slide');
        navList = carousel.querySelectorAll('.carousel__nav-icon');

        carousel && slideList && navList && bindEvents();
    }

    return {
        init: init
    }
})();
