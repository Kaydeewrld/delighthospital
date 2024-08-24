(function ($) {
    $(document).ready(function () {
        $(".nmr-datepicker").each(function (i, item) {
            var settings = {
                changeMonth: true,
                changeYear: true
            };
            if (item.min) {
                settings.minDate = new Date(item.min);
            }
            if (item.max) {
                settings.maxDate = new Date(item.max);
            }
            if (item.dataset.format) {
                settings.dateFormat = item.dataset.format;
            }
            if (item.id) {
                $(`#${item.id}`).datepicker(settings);
            }
        });
    });
})(jQuery);