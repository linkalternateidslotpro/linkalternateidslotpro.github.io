window.console = window.console || function (t) { };

if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
}

var $progress = $(".progress"),
    $bar = $(".progress__bar"),
    $text = $(".progress__text"),
    percent = 0,
    update,
    resetColors,
    speed = 800,
    orange = 30,
    yellow = 55,
    green = 85,
    timer;

resetColors = function () {

    $bar.
        removeClass("progress__bar--green").
        removeClass("progress__bar--yellow").
        removeClass("progress__bar--orange").
        removeClass("progress__bar--blue");

    $progress.
        removeClass("progress--complete");

};

update = function () {

    timer = setTimeout(function () {

        percent += Math.random() * 1.8;
        percent = parseFloat(percent.toFixed(1));

        $text.find("em").text(percent + "%");

        if (percent >= 100) {

            percent = 100;
            $progress.addClass("progress--complete");
            $bar.addClass("progress__bar--blue");
            $text.find("em").text("Complete");

        } else {

            if (percent >= green) {
                $bar.addClass("progress__bar--green");
            } else

                if (percent >= yellow) {
                    $bar.addClass("progress__bar--yellow");
                } else

                    if (percent >= orange) {
                        $bar.addClass("progress__bar--orange");
                    }

            speed = Math.floor(Math.random() * 700);
            update();

        }

        $bar.css({ width: percent + "%" });

    }, speed);

};

setTimeout(function () {

    $progress.addClass("progress--active");
    update();

}, 700);



