var utils = {

    url: {
        getParameterByName: function (name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    },

    http: { 
        get: function (url, async) {
            var xmlHttp = null
                async = async === false? false : true;

            xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, async);
            xmlHttp.send(null);
            return xmlHttp.responseText;
        },

        post: function (url, params) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("POST", url, false);
            xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlHttp.setRequestHeader("Content-length", params.length);
            xmlHttp.setRequestHeader("Connection", "close");
            xmlHttp.send(params);
            return xmlHttp.responseText;
        },

        redirect: function(url) {
            window.onbeforeunload = null;
            window.location.href = url;
        }
    },

    cookie: {
        set: function(name, value, options) {
            options = options || {};

            var expires = options.expires;

            if (typeof expires == "number" && expires) {
                var d = new Date();
                d.setTime(d.getTime() + expires*1000);
                expires = options.expires = d;
            }
            if (expires && expires.toUTCString) { 
                options.expires = expires.toUTCString();
            }

            value = encodeURIComponent(value);

            var updatedCookie = name + "=" + value;

            for(var propName in options) {
                updatedCookie += "; " + propName;
                var propValue = options[propName];    
                if (propValue !== true) { 
                    updatedCookie += "=" + propValue;
                }
            }

            document.cookie = updatedCookie;
        }
    },
    
    popup: {

        confirmationMessages : {
            en: "You will get redirected to the site you wanted to see in just a second. Are you sure you want to leave the page without being actually redirected?",
            ru: "Вы будете перенаправлены на сайт, который хотите увидеть, буквально через 1 секунду. Вы уверены, что хотите покинуть страницу до перенаправления?"
        },

        getLanguage: function() {
            var lang = (window.navigator.userLanguage || window.navigator.language).toLowerCase().substr(0,2);
            var russianLocales = ["ru", "uk", "be"];
            return russianLocales.indexOf(lang) == -1 ? "en" : "ru";
        },

        getCallback: function() {
            var lang = utils.popup.getLanguage(),
                message = utils.popup.confirmationMessages[lang];
            return function(e) { 
                (e || window.event).returnValue = message; //Gecko + IE
                return message;
            }
        }

    }
           
};
