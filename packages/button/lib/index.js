export var getTime = function () {
    return Date.now();
};
export var getCookie = function (name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var _i = 0, ca_1 = ca; _i < ca_1.length; _i++) {
        var item = ca_1[_i];
        var c = item;
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return '';
};
var testUa = function (reg) {
    return new RegExp(reg.toLowerCase()).test(navigator.userAgent.toLowerCase());
};
export var getUserAgent = function () { return navigator.userAgent; };
export var isIOS = function () { return testUa('iP(hone|od|ad)'); };
export var isIPhone = function () { return testUa('iP(hone|od)'); };
export var isIPad = function () { return testUa('iPad'); };
export var isAndroid = function () { return testUa('Android'); };
export var isWechat = function () { return testUa('micromessenger'); };
export var isQQ = function () { return testUa('QQ'); };
export var isWeibo = function () { return testUa('weibo'); };
