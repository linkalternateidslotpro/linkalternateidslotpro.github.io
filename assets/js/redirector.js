var redirector = {
    isMirrorFound: false,
    successMirrorIndex: -1,
    successCallback: utils.http.redirect,
    isNeedPassParamsToSuccessCallback: true,
    timeouts: {
        afterSuccessPing: 500,
        pingDomains: 5000
    },
    // here comes di
    failCallback: function () {
    },
    redirectUrlMask: '',
    loadTime: new Date().getTime(),
    statsUrl: ''
};
// dummy 
var site = {
    id: 0,
    alternativeDomains: []
};

function mirrorCookieName(mirror) {
    return ['ping', mirror.site_id, mirror.id].join('.');
}

function checkAvailability(index, timeoutId) {
    if (
        !redirector.isMirrorFound
        && document.cookie.indexOf(mirrorCookieName(site.alternativeDomains[index]) + "=1") != -1
    ) {
        redirector.isMirrorFound = true;
        redirector.successMirrorIndex = index;
        clearTimeout(timeoutId);
        var successParams = redirector.isNeedPassParamsToSuccessCallback ? generateRedirectUrl() : null;
        return redirector.successCallback(successParams, 'cookie');
    }
    var img = new Image();
    img.onload = function () {
        site.alternativeDomains[index].status = 1;

        if (!redirector.isMirrorFound) {
            redirector.isMirrorFound = true;
            redirector.successMirrorIndex = index;
            clearTimeout(timeoutId);
            setTimeout(function () {
                sendStats();
                var successParams = redirector.isNeedPassParamsToSuccessCallback ? generateRedirectUrl() : null;
                redirector.successCallback(successParams);
            }, redirector.timeouts.afterSuccessPing);
        }
    }
    img.onerror = function () {
        site.alternativeDomains[index].status = 0;
    }
    var currentTimestamp = new Date().getTime();
    img.src = Base64.decode(site.alternativeDomains[index].ping_url) + '?' + currentTimestamp;

}

function pingDomains() {
    var timeoutId = setTimeout(function () {
        sendStats();
        if (redirector.isMirrorFound) {
            var successParams = redirector.isNeedPassParamsToSuccessCallback ? generateRedirectUrl() : null;
            redirector.successCallback(successParams);
        } else {
            redirector.failCallback();
        }
    }, redirector.timeouts.pingDomains);

    for (index in site.alternativeDomains) {
        checkAvailability(index, timeoutId);
    }
}

function sendStats() {
    var queryParams = [];
    if (redirector.successMirrorIndex != -1) {
        queryParams.push('id=' + site.alternativeDomains[redirector.successMirrorIndex].id);
    }
    for (let domain of Object.values(site.alternativeDomains)) {
        let domainStatus = (domain.status !== undefined && domain.in_rotation) ? domain.status : 2;
        queryParams.push('ping_results[' + domain.id + ']=' + domainStatus);
        if (domainStatus == 1) {
            utils.cookie.set(mirrorCookieName(domain), 1, {expires: parseInt(3600, 10)});
        }
    }
    utils.http.get(redirector.statsUrl + '&' + queryParams.join("&"));
}

function generateRedirectUrl() {
    var successMirror = site.alternativeDomains[redirector.successMirrorIndex],
        domain = Base64.decode(successMirror.domain);
    return redirector.redirectUrlMask.replace('{{domain}}', domain);
}
