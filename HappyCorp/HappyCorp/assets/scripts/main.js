
var filters = null;
$(document).ready(function () {
    carousel();
    accordions();
    tabs();
    styleForm();
    overlayAjaxTrigger();
    validateForm();
    bindOverlayEvents();
    textEllipsis();
    bindNav();
    bindSharepopup();
    filters = new Filters();
    filters.BindEvents();
    stickToTop();
    textCarousel();
    bindTooltips();
    verticalAlign();
    triggerJqueryUI();
    animateScrollToAnchor();
    counter();
    $(window).resize(function () {
        updateLayout();
    });
});


$(window).load(function () {
    updateLayout();
});
