var Filters = function (options) {
    /*variables*/
    var self = this;
    this.resultsWrapper = ".js-results-wrapper";
    this.reloadClickTriggerSelector = ".js-click-filter-trigger"; //for clickable trigger
    this.reloadChangeTriggerSelector = ".js-change-filter-trigger"; //for onchange triggers
    this.reloadFieldInputSelector = ".js-field-filter-input"; //for clickable that gets the value of a field
    this.reloadFieldTriggerSelector = ".js-field-filter-trigger"; //for fields
    this.loadMoreTriggerSelector = ".js-load-more-trigger";
    this.cleanAlwaysFieldSelector = ".js-cleanalways-target";
    this.resetFiltersTrigger = ".js-reset-filters-trigger";
    this.removeFilterTrigger = ".js-remove-filter-trigger";
    this.inputs = ["currentPagePiD", "parentFolderPiD", "categoriesPiD", "assetType", "authorPid", "queryString", "orderBy", "take", "skip"]
    this.ajaxLoadingHTML = "<div class=' ajax-loading js-grid-sizer box-4'></div><div class=' ajax-loading box-12  js-grid-item'><div class=' inner'><div class='form-notification js-form-notification info'><div class='icon'><span class='fa fa-cog fa-spin text-gold'></span></div><div class='copy'><p><strong>Loading:</strong> Please wait...</p></div></div></div></div>";
    this.twitterImpulseAjaxLoadingHTML = "<div class='spinner-blue twitter-ajax-loading'><p>Please wait...</p></div>";
    this.twitterImpulseWrapper = ".js-twitter-impulse";
    this.categoryFilterItem = ".js-category-filter-item";
    this.filteringCookie = "gt_filteringCookie";

    /*functions*/
    /*******************************/
    /*bind the events*/
    this.BindEvents = function () {
        $("body").on("click", self.reloadClickTriggerSelector, function (e) {
            e.preventDefault();
            self.updateFilters($(this));
            self.reloadResults($(this), true);
        });
        $("body").on("click", self.loadMoreTriggerSelector, function (e) {
            e.preventDefault();
            $(this).remove();
            self.updateFilters($(this));
            self.reloadResults($(this), false);
        });
        $("body").on("change", self.reloadChangeTriggerSelector, function (e) {
            e.preventDefault();
            self.updateFilters($(this));
            self.reloadResults($(this), true);
        });
        $("body").on("click", self.reloadFieldTriggerSelector, function (e) {
            e.preventDefault();
            var inputSelector = $(this).attr("data-source");
            if ($(inputSelector).val() != "") {
                self.updateFilters($(inputSelector));
                self.reloadResults($(inputSelector), true);
            }
        });
        $("body").on("click", self.resetFiltersTrigger, function (e) {
            e.preventDefault();
            self.resetAllFilters($(this));
            self.reloadResults(null, true);
        });
        $("body").on("click", self.removeFilterTrigger, function (e) {
            e.preventDefault();
            self.removeActiveFilter($(this));
            self.reloadResults($(this), true);
        });
        $("body").on("focus", self.reloadFieldInputSelector, function (e) {
            $(this).bind('keypress', function (e) {
                if (e.keyCode == 13) {
                    e.preventDefault();
                    var inputSelector = $(this).attr("data-source");
                    self.updateFilters($(this));
                    self.reloadResults($(this), true);
                }
            });
        });
        $("body").on("click", self.categoryFilterItem, function (e) {
            e.preventDefault();
            self.reloadTweets($(this));
        });

        /*activate filter triggers that match the hidden filters when page loads*/
        self.activatePreloadedFilters();


        /*when user leaves the page*/
        window.onbeforeunload = function (e) { self.createFilteringCookie(); }

        /*when the user clicks back or forward*/
        window.onpopstate = function () { if (!isIOS()) { location.reload(); } };

    };

    /*creates a cookie with the query string parameter, in case you want to reuse this in another page*/
    this.createFilteringCookie = function () {
        var locationHref = window.location.href;
        if (locationHref.indexOf("?") != -1) {
            var querystring = window.location.href.slice(window.location.href.indexOf('?') + 1);
            setCookie(self.filteringCookie, querystring, 1);
        } else {
            setCookie(self.filteringCookie, "", 1);
        }
    }

    /*activates the filters that match the value of the hidden fields when the page loads*/
    this.activatePreloadedFilters = function () {
        /*activate clickable filters*/
        $(this.reloadClickTriggerSelector).each(function () {
            var trigger = $(this);
            var targetString = trigger.attr("data-target");
            var targetInput = $("#input_" + targetString);
            var currentValue = targetInput.val();
            if (typeof currentValue !== "undefined" && currentValue != "") {
                if (currentValue.indexOf(trigger.attr("data-value")) != -1) {
                    $(this).addClass("active-filter");
                    $("*[data-target=" + targetString + "][data-value='']").removeClass("active-filter");
                }
            }
        });
        /*TODO activate other filters*/
    }

    /*update the hidden and visible filters*/
    this.updateFilters = function (trigger) {
        var targetString = trigger.attr("data-target");
        var targetInput = $("#input_" + targetString);
        var currentValue = targetInput.val();
        var newValue = self.getTriggerValue(trigger);
        /*remove the hidden field value*/
        if (!targetInput.hasClass(self.cleanAlwaysFieldSelector)) {
            $(self.cleanAlwaysFieldSelector).val("");
        }
        /*handle the new value in case the target is multiple values capable*/
        if (targetInput.hasClass("js-multiple-values") && currentValue !== undefined && currentValue != "" && !trigger.hasClass("js-empty-target")) {
            if (newValue != "") {
                if ((currentValue.indexOf(newValue) == -1)) //if value is not currently in the input
                {
                    newValue = currentValue + "," + newValue;
                }
                else if ((trigger.is(":checkbox") || trigger.is(":radio")) && !trigger.is(":checked") || trigger.hasClass(self.reloadClickTriggerSelector.replace(".", ""))) //if value is in the input and is a checkbox and is checked
                {
                    newValue = currentValue.replace("," + newValue, "").replace(newValue, "");
                }
            }
        }
        targetInput.val(newValue);
        if (!trigger.hasClass("js-load-more-trigger")) {
            /*if it's not a load more trigger, update the query string normally*/
            updateQueryStringParameter(trigger.attr("data-target"), targetInput.val());
        } else {
            /*this bit is to prevent load more to show less articles when accessing by URL*/
            var takeNumer = parseInt($("#input_take").val());
            var skipNumer = parseInt(targetInput.val());
            var newValue = takeNumer + skipNumer;
            updateQueryStringParameter("take", newValue);
        }
    };

    /*reload twitter impulses by selected category*/
    this.reloadTweets = function (trigger) {
        if ($(".js-twitter-impulse").lengsh) {
            var newValue = self.getTriggerValue(trigger);
            if (!trigger.hasClass("js-load-more-trigger")) {
                dataString = "event=reloadTweetImpulse&target=" + trigger.attr("data-target") + "&value=" + newValue;
                $(self.twitterImpulseWrapper).html(self.twitterImpulseAjaxLoadingHTML);
                $.ajax({
                    url: "/AjaxHandler.ashx",
                    data: dataString,
                    type: 'POST',
                    success: function (data) {
                        $(self.twitterImpulseWrapper).html(data);
                        $('.twitter-ajax-loading').remove();
                    }
                });
            }
        }
    };

    /*remove active filter*/
    this.removeActiveFilter = function (trigger) {
        $(".active-filter").removeClass("active-filter");
        var dataTarget = trigger.attr("data-target");
        var targetInput = $("#input_" + dataTarget);
        var currentInputValue = targetInput.val();
        var newInputValue = targetInput.attr("data-default");
        if (targetInput.hasClass("js-multiple-values")) {
            newInputValue = currentInputValue.replace("," + trigger.attr("data-value"), "").replace(trigger.attr("data-value"), "");
        }
        targetInput.val(newInputValue);
        trigger.closest(".js-active-filter-item").remove();
        if (!trigger.hasClass("js-load-more-trigger")) {
            updateQueryStringParameter(trigger.attr("data-target"), newInputValue);
        }
        if ($(".js-active-filters-impulse").find(".js-active-filter-item").lengsh <= 0) {
            $(".js-active-filters-impulse").hide();
        }
    };

    /*reset filters filter*/
    this.resetAllFilters = function (trigger) {
        $(".active-filter").removeClass("active-filter");
        $(".js-filtes-wrapper").find("*").each(function () {
            $(this).val($(this).attr("data-default"));
        });
        $('.js-field-filter-input').val('');
        $(".js-active-filters-wrapper").html("");
        $(".js-active-filters-impulse").hide();
    };

    /*returns the value of the trigger*/
    this.getTriggerValue = function (trigger) {
        if (trigger.is("input") || trigger.is("textarea") || trigger.is("select")) {
            newValue = trigger.val();
        } else {
            newValue = trigger.attr("data-value");
        }
        return newValue;
    };

    /*activate the triggers that match the new value*/
    this.activateTriggers = function (trigger, reset) {
        if (trigger !== null && trigger !== undefined) {
            var triggerTarget = trigger.attr("data-target");
            var targetInput = $("#input_" + triggerTarget);
            var currentValue = targetInput.val();
            var newValue = self.getTriggerValue(trigger);
            if (!targetInput.hasClass("js-multiple-values")) {
                $("*[data-target=" + triggerTarget + "]").removeClass("active-filter");
            } else {
                if (trigger.attr("data-value") == "") {
                    /*if the target is multiple but the trigger is empty value, remove the active class from the others*/
                    $("*[data-target=" + triggerTarget + "]").removeClass("active-filter");
                    trigger.addClass("active-filter");
                } else {
                    /*if the target is multiple but the trigger is not empty value, remove the active class from the one empty*/
                    $("*[data-target=" + triggerTarget + "][data-value='']").removeClass("active-filter");
                }
            }
            trigger.addClass("active-filter");
            if ((currentValue.indexOf(newValue) == -1)) //if value is not currently in the input
            {
                trigger.removeClass("active-filter");
            }
            /*if the new value is empty, activate the triggers that achieve that same result*/
            if (currentValue == "") {
                $("*[data-target=" + triggerTarget + "][data-value='']").addClass("active-filter");
            }
        }
    }

    /*reloads the results into the results wrapper*/
    this.reloadResults = function (trigger, reset) {
        if ($(".js-hide-on-filter").is(":visible")) {
            var takeDefault = parseInt($("#input_take").attr("data-default")) * 2 - $(".js-featured-entry").length;
            $("#input_take").attr("data-default", takeDefault);
            reset = true;
        }
        $(".js-hide-on-filter").hide();
        self.activateTriggers(trigger, reset);
        /*make ajax call*/
        if (reset) {
            $(self.resultsWrapper).html("");
            $("#input_take").val($("#input_take").attr("data-default"));
            if (trigger != null) {
                if (trigger.attr("data-target") != "skip")
                    $("#input_skip").val(0);
            }
        }
        /*get current values*/
        var dataSerializeInputs = $(".filters").find("input, select, textarea").serialize();
        var resetParameter = reset ? "&reset=true" : "";
        var dataString = dataSerializeInputs + resetParameter;
        $(self.resultsWrapper).append(self.ajaxLoadingHTML);
        updateLayout();
        $.ajax({
            url: "/AjaxHandler.ashx",
            data: dataString,
            type: 'POST',
            success: function (data) {
                var resultsWrapper = $(self.resultsWrapper);
                /*this statement affects the map*/
                if (resultsWrapper.hasClass("js-map-info-wrapper")) {
                    var avoidUpdate = false;
                    var countryVal = $("#input_parentFolderPiD").val();
                    var markerVal = $("#input_resultAssetPiD").val();
                    var thereisaddress = typeof map.addressMarker !== "undefined" && map.addressMarker != null;
                    if (countryVal != "" && !thereisaddress && markerVal == "")
                        avoidUpdate = true;
                    if (!avoidUpdate)
                        resultsWrapper.html(data);
                    else
                        resultsWrapper.html("");
                } else {
                    if (reset)
                        resultsWrapper.hide().html(data).show();
                    else
                        resultsWrapper.append(data);
                    $('.ajax-loading').remove();
                    //updateLayout();
                    resultsWrapper.imagesLoaded().done(function (instance) {
                        updateLayout();
                    });
                }
            }
        });

    };
}
