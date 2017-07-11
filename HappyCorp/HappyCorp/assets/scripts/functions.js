/*GT CAROUSEL*/
/******************************/
function carousel() {
    $('.js-slider').each(function () {
        var thisSlider = $(this);
        thisSlider.iosSlider('destroy');
        var sliderContainer = thisSlider.closest(".slider-container");
        var lastArgs = null;
        thisSlider.iosSlider({
            desktopClickDrag: false,
            snapToChildren: true,
            navPrevSelector: sliderContainer.find('.js-slide-button-prev'),
            navNextSelector: sliderContainer.find('.js-slide-button-next'),
            navSlideSelector: sliderContainer.find('.js-slider-selector'),
            onSlideChange: slideChange,
            onSliderLoaded: setSliderHeight,
            infiniteSlider: true,
            startAtSlide: '1'
        });
        $(window).resize(function () {
            setSliderHeight(lastArgs);
        });
        sliderContainer.find('.js-slide-item:eq(0) img').bind('load', function () {
            sliderContainer.addClass("loaded");
            setSliderHeight(lastArgs);
        });
        function slideChange(args) {
            sliderContainer.find('.js-slider-selector').addClass('.big-Margin');
            sliderContainer.find('.js-slider-selector').removeClass('active');
            sliderContainer.find('.js-slider-selector:eq(' + (args.currentSlideNumber - 1) + ')').addClass('active');
            setSliderHeight(args);
        }
        function setSliderHeight(args) {
            lastArgs = args;

            item = args != null ? (args.currentSlideNumber - 1) : "0";

            var slide = thisSlider.find('.item').eq(item);
            if (args != null) {
                slide = thisSlider.find('.item').eq((args.currentSlideNumber - 1));
            }
            var mobileCaptionHeight = slide.outerHeight();
            sliderContainer.find(".js-slider").css("height", mobileCaptionHeight);
        }
    });
}


/*TEXT CARROUSEL*/
function textCarousel() {
    if ($('.js-text-slides').length) {

        $('.js-text-slides').each(function () {
            var thisSlider = $(this);
            var lastArgs = null;
            var sliderContainer = thisSlider.closest(".js-text-carousel-container");
            function textSlideChange(args) {
                sliderContainer.find('.js-slider-selector').removeClass('active');
                sliderContainer.find('.js-slider-selector:eq(' + (args.currentSlideNumber - 1) + ')').addClass('active');
                setSliderHeight(args);
            }
            thisSlider.iosSlider({
                snapToChildren: true,
                onSlideChange: textSlideChange,
                autoSlide: true,
                navNextSelector: sliderContainer.find('.js-slide-button-prev'),
                navPrevSelector: sliderContainer.find('.js-slide-button-next'),
                navSlideSelector: sliderContainer.find('.js-slider-selector'),
                infiniteSlider: true,
                autoSlideTimer: 2000,
                autoSlideTransTimer: 1000
            });
            $(window).resize(function () {
                setSliderHeight(lastArgs);
            });
            sliderContainer.find('.item:eq(0) img').bind('load', function () {
                sliderContainer.addClass("loaded");
                setSliderHeight(lastArgs);
            });

            function setSliderHeight(args) {
                lastArgs = args;

                item = args != null ? (args.currentSlideNumber - 1) : "0";
                var slide = thisSlider.find('.slide-item').eq(item);
                if (args != null) {
                    slide = thisSlider.find('.slide-item').eq((args.currentSlideNumber - 1));
                }
                var mobileCaptionHeight = slide.outerHeight();
                thisSlider.css("height", mobileCaptionHeight);
            }
        });
    }
}
/*GT ACCORDIONS*/
/******************************/
function accordions() {
    $('.js-accordion-heading').click(function (e) {
        var accHeading = $(this);
        activateAccordion(accHeading);
    });
}

function activateAccordion(accHeading) {
    var wrapper = accHeading.closest(".js-accordions-wrapper");

    var thisAcc = accHeading.closest(".js-accordion");
    if (!accHeading.hasClass('active')) {
        if (wrapper.length) {
            wrapper.find('.js-accordion-heading,.js-contact-acc-heading').removeClass('active');
            wrapper.find('.js-accordion-content').slideUp(function () { updateLayout(); });
        }
        accHeading.addClass('active');
        thisAcc.find('.js-accordion-content').slideDown(function () { updateLayout(); });

    } else {
        accHeading.removeClass('active');
        thisAcc.find('.js-accordion-content').slideUp(function () { updateLayout(); });
    }


    if (typeof accHeading.attr("data-tab") !== "undefined") {
        $(".js-tab-content").hide().removeClass("active");
        var tab = accHeading.attr("data-tab");
        $(tab).fadeIn().addClass("active");
        updateLayout();
    }

}
/*SEARCH*/
/******************************/
function bindSearch() {
    $(".js-search-trigger").click(function (e) {
        var field = $(".js-searchField");
        if (field.val() != "" && field.val() !== undefined) {
            e.preventDefault();
            window.location.href = field.attr("data-url") + "?queryString=" + field.val();
        }
    });
    $(".js-searchField").focus(function () { $(this).bind('keypress', function (e) { if (e.keyCode == 13) { e.preventDefault(); $(".js-search-trigger").click(); } }); });
}


/*GT OVERLAY*/
/******************************/
function closeOverlay() {
    $(".js-overlay").fadeOut();
    $(".js-overlay-bg, .js-overlay-ajax-bg").fadeOut();
}
function openOverlay(trigger) {
    var overlayselector = trigger.attr("data-overlay-selector");
    $(overlayselector).fadeIn();
    $(".js-overlay-bg").fadeIn();
}
//NON AJAX
function bindOverlayEvents() {
    $("body").on("click", ".js-open-overlay-trigger", function () {
        var trigger = $(this);
        openOverlay(trigger);
    });
    $("body").on("click", ".js-close-overlay-trigger", function () {
        var trigger = $(this);
        closeOverlay(trigger);
    });
}
//Ajax
function overlayAjaxTrigger() {
    $(".js-open-overlay-ajax-trigger").click(function () {
        var ajaxPath = $(this).attr("data-ajax");
        $("body").css("cursor", "progress");
        $.ajax({
            type: "GET",
            url: ajaxPath,
            success: function (response) {
                $("body").append(response);
                $("body").css("cursor", "default");
            }
        });
    });
    $("body").on("click", ".js-close-overlay-trigger", function () { closeOverlay(); });
}


/*GT FORMS*/
/******************************/
function styleForm() {
    $("body").customize({
        selectDropdown: false
    });
    //$("body").customize();
}
function validateForm() {
    $('.js-form-submit').click(function (e) {
        e.preventDefault();
        var trigger = $(this);
        var formWrapper = trigger.closest(".js-form-wrapper");
        var ajaxResponseWrapper = formWrapper.find(".js-ajax-response");
        var ajaxHandlerPath = trigger.attr("data-ajax");

        trigger.addClass("disabled");



        var wrongentriesnotification = '<div class="box-12"><div class="inner"><div class="form-notification js-form-notification error"><div class="icon"><i class="fa fa-close"></i></div><div class="copy"><p><strong>Error:</strong> Check your entries</p></div><a class="close-notification js-close-notification" href="#"><span class="fa  fa-close"></span><span class="hidden">Close</span></a></div></div></div>';

        var fieldsRight = function () {
            var data = formWrapper.find("input,textarea,select").serialize();
            $.ajax({
                url: ajaxHandlerPath,
                data: data,
                type: 'POST',
                success: function (response) {
                    ajaxResponseWrapper.html(response);
                    ajaxResponseWrapper.find(".js-form-notification").fadeIn();
                    //trigger.hide();
                    trigger.removeClass("disabled");
                    updateLayout();
                }
            });
        }
        var fieldsWrong = function () {

            ajaxResponseWrapper.html(wrongentriesnotification);
            ajaxResponseWrapper.find(".js-form-notification").fadeIn();
            trigger.removeClass("disabled");
            updateLayout();
        }
        formWrapper.validate({
            function_allCorrects: fieldsRight,
            function_wrongForm: fieldsWrong
        });
    });


}
/*GT TABS*/
/******************************/
function tabs() {
    $(".js-tab-trigger").click(function (event) {
        event.stopPropagation();
        event.preventDefault();
        $(this).closest(".js-tabs-container").find(".js-tab-trigger").removeClass("active");
        $(this).closest(".js-tabs-container").find(".js-tab-content").removeClass("active");
        $(".js-tab-content").hide().removeClass("active");

        $(this).addClass("active");
        var tab = $(this).attr("href");
        $(tab).fadeIn().addClass("active");
    });
}

/*GT NAVS*/
/******************************/
function bindNav() {
    $(".js-mobile-nav-trigger").click(function (e) {
        e.stopPropagation();
        e.preventDefault();
        var dropdown = $(".js-drop-down-menu");
        if (!dropdown.hasClass("active")) {
            dropdown.addClass("active").slideDown();
            $("body").click(function () {
                dropdown.removeClass("active").fadeOut();
            });
        } else {
            dropdown.removeClass("active").slideUp();
        }
    });
    $(".js-menu-indicator").click(function (e) {
        var trigger = $(this);
        e.stopPropagation();
        e.preventDefault();
        var dropdown = trigger.closest(".menu-item").children(".drop-down");
        if (!dropdown.hasClass("active")) {
            dropdown.addClass("active").slideDown();
        } else {
            dropdown.removeClass("active").slideUp();
        }
    });
    $(window).resize(function () {
        var dropdowns = $(".drop-down-wrapper").find(".drop-down");
        dropdowns.removeAttr("style");
    });
}

/*GT SHARE*/
/******************************/
function bindSharepopup() {
    $(".js-share-trigger").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).next(".share-popup").fadeIn();
    });
    $("body").click(function (e) {
        $(".share-popup").fadeOut();
    });
}

/*Cookies*/
/******************************/
function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString() + ";path=/");
    document.cookie = c_name + "=" + c_value;
}
function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    }
    else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}

/*UPDATE URL AND PUSH STATE*/
/*******************************/
function updateQueryStringParameter(key, value) {
    var uri = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    var newUri = uri;
    if (uri.match(re)) {
        newUri = uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        newUri = uri + separator + key + "=" + value;
    }
    //window.location.href = newUri;
    if (window.history.pushState !== undefined)
        window.history.pushState("", "", newUri);
}
function QueryStringGetParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/*DETECT IOS USERS*/
/*******************************/
function isIOS() {
    return (
        (navigator.userAgent.match(/(iPod|iPhone|iPad)/) || !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/))
    );
}

/*TEXT ELLIPSIS*/
/*******************************/
function textEllipsis() {
    $(".js-text-ellipsis").each(function () {
        var item = $(this);
        var outherwith = item.outerWidth();
        //console.log(item.outerWidth() >= 1);
        if (item.outerWidth() >= 1) {

            item.dotdotdot();
        }
    });
    $(window).load(function () { $(".js-text-ellipsis").trigger("update.dot"); });
    $(window).resize(function () { $(".js-text-ellipsis").trigger("update.dot"); });
}

/*VERTICAL ALINGMENTS*/
/*******************************/
function verticalAlign() {
    $(".js-vertical-center").flexVerticalCenter();
}

/*Sticky*/
/******************************/
function stickToTop() {
    $(".js-stick-to-top").sticky({
        'offset': 200,
        'mode': 'animate',
        'onStick': function () { alert("") },
    });
}
function updateSticky() {
    $(".js-stick-to-top").sticky('update');
}

/*Mansory*/
/******************************/
var grid = null;
var msnry = null;
function bindMasonry() {
    if ($('.js-grid').length) {
        var grid = document.querySelector('.js-grid');
        var masonryOptions = {
            columnWidth: '.js-grid-sizer',
            itemSelector: '.js-grid-item'
        }
        msnry = new Masonry(grid, masonryOptions);
    }

}

/*TOOLTIPS*/
/******************************/
function bindTooltips() {
    if ($("*[data-tip]").length) {
        $(".js-tooltip").remove();
        $("*[data-tip]").each(function () {
            var self = $(this);
            var content = self.attr("data-tip");

            self.after("<span class=\"tooltip js-tooltip\">" + content + "</span>");

            var tooltip = null;
            function setTooltipPosition() {
                var offset = self.offset();
                tooltip = self.next(".js-tooltip");
                var tooltipHeight = tooltip.height();
                tooltip.css({ "top": offset.top, "left": offset.left });
                //tooltip.hide();
            }
            setTooltipPosition();

            $(this).mouseenter(function () {
                setTooltipPosition();
            });
        });
    };
}

/*images are loaded jquery extension*/
/***************************************/
$.fn.imagesLoaded = function () {
    var $imgs = this.find('img[src!=""]');
    if (!$imgs.length) { return $.Deferred().resolve().promise(); }
    var dfds = [];
    $imgs.each(function () {
        var dfd = $.Deferred();
        dfds.push(dfd);
        var img = new Image();
        img.onload = function () { dfd.resolve(); }
        img.onerror = function () { dfd.resolve(); }
        img.src = this.src;
    });
    return $.when.apply($, dfds);
}

/*Jquery UI*/
/***************************************/
function triggerJqueryUI() {
    /*date picker*/
    $(".js-date").datepicker();

    /*select dropdown*/
    $(".js-select").each(function () {
        $(this).selectmenu();
        $(this).on('selectmenuchange', function () {
            $(this).change();
        });
    });
    $("body").on("change", ".js-select", function () {
        $(this).selectmenu("refresh");
    });
}

/*Count Jquery*/
/*********************************/

function counter() {

    $('.banner-counter').each(function () {
        var running = false;
        var container = $(this);
        $(window).scroll(function () {
            if (!running) {
                
                var height = $(window).scrollTop();
                var heightBanner = container.offset().top - 200;

                if (height > heightBanner && height < heightBanner + 100) {
                    running = true;
                    container.find(".js-count").each(function () {
                        var n = 1;
                        var thisElement = $(this);
                        var nmax = parseInt(thisElement.attr("data-stop"));
                        var x = setInterval(function () {
                            n = n + 1;
                            thisElement.html(n);
                            // If the count down is over, write some text 
                            if (n > nmax) {
                                clearInterval(x);
                                var num = n + "+";
                                thisElement.html(num)
                            }
                        }, 1);
                    }, function () {
                        running = false;
                    });
                }
            }
        });



    });


}


/*Animate to anchor*/
/*****************************/
function animateScrollToAnchor() {
    $("body").on("click", "a[href*=#]", function (e) {

        var href = $(this).attr("href");
        var anchorItem = $(href);
        if (anchorItem.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: anchorItem.offset().top - 60
            });
        } else if (href == "#") {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            });
        }
    });

}

/*UPDATE FRONT END*/
/******************************/
function updateLayout() {
    carousel();
    textEllipsis();
    verticalAlign();
    bindTooltips();
    updateSticky();
    bindMasonry();


}

