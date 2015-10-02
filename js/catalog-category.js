var $range = $("#range"),
    $from = $("#minCost"),
    $to = $("#maxCost"),
    range,
    min = 0,
    max = 30000,
    from,
    to;

var updateValues = function () {
    $from.prop("value", from);
    $to.prop("value", to);
};

$range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    grid: false,
    grid_num: 10,
    onChange: function (data) {
        from = data.from;
        to = data.to;
        
        updateValues();
    }
});

range = $range.data("ionRangeSlider");

var updateRange = function () {
    range.update({
        from: from,
        to: to
    });
};

$from.on("change", function () {
    from = +$(this).prop("value");
    if (from < min) {
        from = min;
    }
    if (from > to) {
        from = to;
    }

    updateValues();    
    updateRange();
});

$to.on("change", function () {
    to = +$(this).prop("value");
    if (to > max) {
        to = max;
    }
    if (to < from) {
        to = from;
    }

    updateValues();    
    updateRange();
});