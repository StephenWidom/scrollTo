/*
 * scrollTo: A simple jQuery plugin to perform an action (function) when an element is scrolled into view
 * Github: https://github.com/StephenWidom/scrollTo
 * By Stephen Widom - http://stephenwidom.com
 *
 */
(function($) {

    $.fn.scrollTo = function(options, callback) {

        if ($.isFunction(options))
            callback = options;

        var settings = $.extend({
                offset: 0,
                scrollUp: function() {},
                scrollDown: function() {}
            }, options),
            $el = $(this),
            elOffset = $el.offset().top + settings.offset,
            done = false,
            doneUp = true;

        $(window).on("scroll", function() {

            var scrollTop = $(this).scrollTop(),
                viewportHeight = $(window).height();

            if (!done && scrollTop + viewportHeight > elOffset) {

                done = true;

                if (typeof callback !== undefined && $.isFunction(callback))
                    callback.call($el);

            }

            if (doneUp && scrollTop + viewportHeight > elOffset) {

                doneUp = false;
                settings.scrollDown.call($el);

            }

            if (!doneUp && scrollTop + viewportHeight < elOffset) {

                doneUp = true;
                settings.scrollUp.call($el);

            }

        });

        return this;

    }

}(jQuery));
