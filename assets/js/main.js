
window.onload = (function () {


    var $html = $('html'),
        $preloader = $('.preloader'),
        $currLang = $('.curr_lang'),
        lang = localStorage.lang,
        langList = ['id', 'en', 'pt', 'ru', 'es', 'hu', 'ro', 'fi', 'jp', 'de', 'pl', 'fr', 'default'];

    if (!lang) {
        // default lang
        var countryToLang = {
            'id': 'id',
            'en': 'en',
            'pt': 'pt',
            'br': 'pt',
            'ru': 'ru',
            'es': 'es',
            'mx': 'es',
            'hu': 'hu',
            'ro': 'ro',
            'fi': 'fi',
            'jp': 'jp',
            'pl': 'pl',
            'de': 'de',
            'au': 'de',
            'dk': 'en',
            'no': 'en',
            'ca': 'en',
            'nz': 'en',
            'fr': 'fr',
            'kz': 'ru',
            'by': 'en',
            'az': 'en',
            'am': 'en',
            'ge': 'en',
            'kg': 'en',
            'md': 'en',
            'mn': 'en',
            'tj': 'en',
            'tm': 'en',
            'pe': 'en',
            'cl': 'es',
            'ar': 'es',
            'in': 'es',
            'ua': 'ru',
            'default': 'id'
        };
        var country = $html.attr('data-country'),
            lang = countryToLang[country] || countryToLang['default'];
        localStorage.lang = lang;
    }

    var langListData = 0;

    for (i = 0; i < langList.length; i++) {
        if (lang === langList[i]) {
            langListData = 1;
        }
    }
    if (langListData === 0) {
        $html.addClass('id');
        lang = 'id';
    }


    if (lang !== 'id') {
        $('#page_title').html('ID PRO Slot & Poker');
        $('#page_favicon').attr('href', 'img/favicon.png');
    }
    if (lang === 'en') {
        $('#page_favicon').attr('href', 'img/favicon-ru.ico');
        $('#page_title').html('ID PRO Slots and Poker');
    }
    if (lang === 'de') {
        $('#page_favicon').attr('href', 'img/favicon-ru.ico');
        $('#page_title').html('ID PRO Spielautomaten und Poker');
    }
    if (lang === 'jp') {
        $('#page_favicon').attr('href', 'img/favicon-ru.ico');
        $('#page_title').html('IDPRO スロットとポーカー');
    }
    if (lang === 'fr') {
        $('#page_favicon').attr('href', 'img/favicon-ru.ico');
        $('#page_title').html('Machines à sous et poker ID PRO');
    }


    if ($html.attr('data-country') === 'ru') {
        $html.addClass('cur_rub');
    }
    if ($html.attr('data-country') === 'ca') {
        $html.addClass('cur_cad');
    }
    if ($html.attr('data-country') === 'nz') {
        $html.addClass('cur_nzd');
    }
    if ($html.attr('data-country') === 'dk') {
        $html.addClass('cur_dkk');
    }
    if ($html.attr('data-country') === 'no') {
        $html.addClass('cur_nok');
    }
    if ($html.attr('data-country') === 'ua') {
        $html.addClass('cur_uah');
    }
    if ($html.attr('data-country') === 'br') {
        $html.addClass('cur_brl');
    }
    if ($html.attr('data-country') === 'mx') {
        $html.addClass('cur_mx');
    }
    if ($html.attr('data-country') === 'pe') {
        $html.addClass('cur_pe');
    }
    if ($html.attr('data-country') === 'ar') {
        $html.addClass('cur_ar');
    }
    if ($html.attr('data-country') === 'cl') {
        $html.addClass('cur_cl');
    }
    if ($html.attr('data-country') === 'in') {
        $html.addClass('cur_in');
    }
    if (
        $html.attr('data-country') === 'by' ||
        $html.attr('data-country') === 'az' ||
        $html.attr('data-country') === 'am' ||
        $html.attr('data-country') === 'ge' ||
        $html.attr('data-country') === 'kg' ||
        $html.attr('data-country') === 'md' ||
        $html.attr('data-country') === 'mn' ||
        $html.attr('data-country') === 'tj' ||
        $html.attr('data-country') === 'tm'
    ) {
        $html.addClass('cur_dol');
    }




    langList.forEach(function (element) {
        $html.removeClass(element).addClass(lang);
    });


    $('.lang_list_item[data-lang="' + lang + '"]')
        .addClass('curr')
        .siblings()
        .removeClass('curr');
    $currLang.html($('.lang_list_item[data-lang="' + lang + '"]').html());

    setTimeout(function () {
        $preloader.fadeOut();
        setTimeout(function () {
            $html.addClass('hide');
        }, 200);
    }, 200);

});



$(document).ready(function () {

    var $langSwitcher = $('.lang_switcher'),
        $langList = $('.lang_list'),
        $langListItem = $('.lang_list_item'),
        $html = $('html'),
        $preloader = $('.preloader'),
        $currLang = $('.curr_lang');

    $langSwitcher.click(function () {
        $langList.toggleClass('act');
    });

    $langListItem.click(function () {
        $preloader.fadeIn();
        $html.removeClass('hide');
        setTimeout(function () {
            $preloader.fadeOut();
            $html.addClass('hide');
        }, 200);
        var lang = $(this).data('lang');
        var langs = $('.lang_list_item').map(function (i, el) {
            return $(el).data('lang');
        }).toArray().join(" ");
        $html.removeClass(langs).addClass(lang);
        localStorage.lang = lang;
        $('.lang_list_item[data-lang="' + lang + '"]')
            .addClass('curr')
            .siblings()
            .removeClass('curr');
        $currLang.html($(this).html());


        if (lang !== 'id') {
            $('#page_title').html('ID PRO Slot & Poker');
            $('#page_favicon').attr('href', 'img/favicon.png');
        }
        if (lang === 'en') {
            $('#page_favicon').attr('href', 'img/favicon-ru.ico');
            $('#page_title').html('ID PRO Slots and Poker');
        }
        if (lang === 'de') {
            $('#page_favicon').attr('href', 'img/favicon-ru.ico');
            $('#page_title').html('ID PRO Spielautomaten und Poker');
        }
        if (lang === 'jp') {
            $('#page_favicon').attr('href', 'img/favicon-ru.ico');
            $('#page_title').html('IDPRO スロットとポーカー');
        }
        if (lang === 'fr') {
            $('#page_favicon').attr('href', 'img/favicon-ru.ico');
            $('#page_title').html('Machines à sous et poker ID PRO');
        }


    });

    $(document).mouseup(function (e) {
        if (!$langSwitcher.is(e.target)
            && $langSwitcher.has(e.target).length === 0) {
            $langList.removeClass('act');
        }
    });

});
