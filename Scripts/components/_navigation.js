var NavigationComponent = (function() {
    var header,
        triggerNav;

    function bindEvents() {
        triggerNav.addEventListener('click', function() {
            header.classList.toggle('open');
        });
    }

    function init() {
        triggerNav = document.querySelector('.trigger-nav');
        header = document.querySelector('.global-header');

        header && triggerNav && bindEvents();
    }

    return {
        init: init
    }
})();
