/*!!
 * Matomo - free/libre analytics platform
 *
 * JavaScript tracking client
 *
 * @link https://piwik.org
 * @source https://github.com/matomo-org/matomo/blob/master/js/piwik.js
 * @license https://piwik.org/free-software/bsd/ BSD-3 Clause (also in js/LICENSE.txt)
 * @license magnet:?xt=urn:btih:c80d50af7d3db9be66a4d0a86db0286e4fd33292&dn=bsd-3-clause.txt BSD-3-Clause
 */
;
if (typeof _paq !== "object") {
    _paq = []
}
if (typeof window.Matomo !== "object") {
    window.Matomo = window.Piwik = (function() {
        var r, b = {},
            z = {},
            J = document,
            g = navigator,
            ab = screen,
            W = window,
            h = W.performance || W.mozPerformance || W.msPerformance || W.webkitPerformance,
            t = W.encodeURIComponent,
            V = W.decodeURIComponent,
            k = unescape,
            L = [],
            H, u, al = [],
            y = 0,
            af = 0,
            X = 0,
            m = false;

        function p(at) {
            try {
                return V(at)
            } catch (au) {
                return unescape(at)
            }
        }

        function M(au) {
            var at = typeof au;
            return at !== "undefined"
        }

        function C(at) {
            return typeof at === "function"
        }

        function Z(at) {
            return typeof at === "object"
        }

        function x(at) {
            return typeof at === "string" || at instanceof String
        }

        function ak(at) {
            return typeof at === "number" || at instanceof Number
        }

        function ac(at) {
            return M(at) && (ak(at) || (x(at) && at.length))
        }

        function D(au) {
            if (!au) {
                return true
            }
            var at;
            var av = true;
            for (at in au) {
                if (Object.prototype.hasOwnProperty.call(au, at)) {
                    av = false
                }
            }
            return av
        }

        function ao(at) {
            var au = typeof console;
            if (au !== "undefined" && console && console.error) {
                console.error(at)
            }
        }

        function aj() {
            var ay, ax, aA, au, at;
            for (ay = 0; ay < arguments.length; ay += 1) {
                at = null;
                if (arguments[ay] && arguments[ay].slice) {
                    at = arguments[ay].slice()
                }
                au = arguments[ay];
                aA = au.shift();
                var az, av;
                var aw = x(aA) && aA.indexOf("::") > 0;
                if (aw) {
                    az = aA.split("::");
                    av = az[0];
                    aA = az[1];
                    if ("object" === typeof u[av] && "function" === typeof u[av][aA]) {
                        u[av][aA].apply(u[av], au)
                    } else {
                        if (at) {
                            al.push(at)
                        }
                    }
                } else {
                    for (ax = 0; ax < L.length; ax++) {
                        if (x(aA)) {
                            av = L[ax];
                            var aB = aA.indexOf(".") > 0;
                            if (aB) {
                                az = aA.split(".");
                                if (av && "object" === typeof av[az[0]]) {
                                    av = av[az[0]];
                                    aA = az[1]
                                } else {
                                    if (at) {
                                        al.push(at);
                                        break
                                    }
                                }
                            }
                            if (av[aA]) {
                                av[aA].apply(av, au)
                            } else {
                                var aC = "The method '" + aA + '\' was not found in "_paq" variable.  Please have a look at the Matomo tracker documentation: https://developer.matomo.org/api-reference/tracking-javascript';
                                ao(aC);
                                if (!aB) {
                                    throw new TypeError(aC)
                                }
                            }
                            if (aA === "addTracker") {
                                break
                            }
                            if (aA === "setTrackerUrl" || aA === "setSiteId") {
                                break
                            }
                        } else {
                            aA.apply(L[ax], au)
                        }
                    }
                }
            }
        }

        function ar(aw, av, au, at) {
            if (aw.addEventListener) {
                aw.addEventListener(av, au, at);
                return true
            }
            if (aw.attachEvent) {
                return aw.attachEvent("on" + av, au)
            }
            aw["on" + av] = au
        }

        function n(at) {
            if (J.readyState === "complete") {
                at()
            } else {
                if (W.addEventListener) {
                    W.addEventListener("load", at, false)
                } else {
                    if (W.attachEvent) {
                        W.attachEvent("onload", at)
                    }
                }
            }
        }

        function q(aw) {
            var at = false;
            if (J.attachEvent) {
                at = J.readyState === "complete"
            } else {
                at = J.readyState !== "loading"
            }
            if (at) {
                aw();
                return
            }
            var av;
            if (J.addEventListener) {
                ar(J, "DOMContentLoaded", function au() {
                    J.removeEventListener("DOMContentLoaded", au, false);
                    if (!at) {
                        at = true;
                        aw()
                    }
                })
            } else {
                if (J.attachEvent) {
                    J.attachEvent("onreadystatechange", function au() {
                        if (J.readyState === "complete") {
                            J.detachEvent("onreadystatechange", au);
                            if (!at) {
                                at = true;
                                aw()
                            }
                        }
                    });
                    if (J.documentElement.doScroll && W === W.top) {
                        (function au() {
                            if (!at) {
                                try {
                                    J.documentElement.doScroll("left")
                                } catch (ax) {
                                    setTimeout(au, 0);
                                    return
                                }
                                at = true;
                                aw()
                            }
                        }())
                    }
                }
            }
            ar(W, "load", function() {
                if (!at) {
                    at = true;
                    aw()
                }
            }, false)
        }

        function ag(au, az, aA) {
            if (!au) {
                return ""
            }
            var at = "",
                aw, av, ax, ay;
            for (aw in b) {
                if (Object.prototype.hasOwnProperty.call(b, aw)) {
                    ay = b[aw] && "function" === typeof b[aw][au];
                    if (ay) {
                        av = b[aw][au];
                        ax = av(az || {}, aA);
                        if (ax) {
                            at += ax
                        }
                    }
                }
            }
            return at
        }

        function am(au) {
            var at;
            m = true;
            ag("unload");
            at = new Date();
            var av = at.getTimeAlias();
            if ((r - av) > 3000) {
                r = av + 3000
            }
            if (r) {
                do {
                    at = new Date()
                } while (at.getTimeAlias() < r)
            }
        }

        function o(av, au) {
            var at = J.createElement("script");
            at.type = "text/javascript";
            at.src = av;
            if (at.readyState) {
                at.onreadystatechange = function() {
                    var aw = this.readyState;
                    if (aw === "loaded" || aw === "complete") {
                        at.onreadystatechange = null;
                        au()
                    }
                }
            } else {
                at.onload = au
            }
            J.getElementsByTagName("head")[0].appendChild(at)
        }

        function N() {
            var at = "";
            try {
                at = W.top.document.referrer
            } catch (av) {
                if (W.parent) {
                    try {
                        at = W.parent.document.referrer
                    } catch (au) {
                        at = ""
                    }
                }
            }
            if (at === "") {
                at = J.referrer
            }
            return at
        }

        function s(at) {
            var av = new RegExp("^([a-z]+):"),
                au = av.exec(at);
            return au ? au[1] : null
        }

        function d(at) {
            var av = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
                au = av.exec(at);
            return au ? au[1] : at
        }

        function G(at) {
            return (/^[0-9][0-9]*(\.[0-9]+)?$/).test(at)
        }

        function Q(av, aw) {
            var at = {},
                au;
            for (au in av) {
                if (av.hasOwnProperty(au) && aw(av[au])) {
                    at[au] = av[au]
                }
            }
            return at
        }

        function B(av) {
            var at = {},
                au;
            for (au in av) {
                if (av.hasOwnProperty(au)) {
                    if (G(av[au])) {
                        at[au] = Math.round(av[au])
                    } else {
                        throw new Error('Parameter "' + au + '" provided value "' + av[au] + '" is not valid. Please provide a numeric value.')
                    }
                }
            }
            return at
        }

        function l(au) {
            var av = "",
                at;
            for (at in au) {
                if (au.hasOwnProperty(at)) {
                    av += "&" + t(at) + "=" + t(au[at])
                }
            }
            return av
        }

        function an(au, at) {
            au = String(au);
            return au.lastIndexOf(at, 0) === 0
        }

        function U(au, at) {
            au = String(au);
            return au.indexOf(at, au.length - at.length) !== -1
        }

        function A(au, at) {
            au = String(au);
            return au.indexOf(at) !== -1
        }

        function f(au, at) {
            au = String(au);
            return au.substr(0, au.length - at)
        }

        function I(aw, av, ay) {
            aw = String(aw);
            if (!ay) {
                ay = ""
            }
            var at = aw.indexOf("#");
            var az = aw.length;
            if (at === -1) {
                at = az
            }
            var ax = aw.substr(0, at);
            var au = aw.substr(at, az - at);
            if (ax.indexOf("?") === -1) {
                ax += "?"
            } else {
                if (!U(ax, "?")) {
                    ax += "&"
                }
            }
            return ax + t(av) + "=" + t(ay) + au
        }

        function j(au, av) {
            au = String(au);
            if (au.indexOf("?" + av + "=") === -1 && au.indexOf("&" + av + "=") === -1) {
                return au
            }
            var aw = au.indexOf("?");
            if (aw === -1) {
                return au
            }
            var at = au.substr(aw + 1);
            var aA = au.substr(0, aw);
            if (at) {
                var aB = "";
                var aD = at.indexOf("#");
                if (aD !== -1) {
                    aB = at.substr(aD + 1);
                    at = at.substr(0, aD)
                }
                var ax;
                var az = at.split("&");
                var ay = az.length - 1;
                for (ay; ay >= 0; ay--) {
                    ax = az[ay].split("=")[0];
                    if (ax === av) {
                        az.splice(ay, 1)
                    }
                }
                var aC = az.join("&");
                if (aC) {
                    aA = aA + "?" + aC
                }
                if (aB) {
                    aA += "#" + aB
                }
            }
            return aA
        }

        function e(av, au) {
            var at = "[\\?&#]" + au + "=([^&#]*)";
            var ax = new RegExp(at);
            var aw = ax.exec(av);
            return aw ? p(aw[1]) : ""
        }

        function a(at) {
            if (at && String(at) === at) {
                return at.replace(/^\s+|\s+$/g, "")
            }
            return at
        }

        function F(at) {
            return unescape(t(at))
        }

        function aq(aI) {
            var av = function(aO, aN) {
                    return (aO << aN) | (aO >>> (32 - aN))
                },
                aJ = function(aQ) {
                    var aO = "",
                        aP, aN;
                    for (aP = 7; aP >= 0; aP--) {
                        aN = (aQ >>> (aP * 4)) & 15;
                        aO += aN.toString(16)
                    }
                    return aO
                },
                ay, aL, aK, au = [],
                aC = 1732584193,
                aA = 4023233417,
                az = 2562383102,
                ax = 271733878,
                aw = 3285377520,
                aH, aG, aF, aE, aD, aM, at, aB = [];
            aI = F(aI);
            at = aI.length;
            for (aL = 0; aL < at - 3; aL += 4) {
                aK = aI.charCodeAt(aL) << 24 | aI.charCodeAt(aL + 1) << 16 | aI.charCodeAt(aL + 2) << 8 | aI.charCodeAt(aL + 3);
                aB.push(aK)
            }
            switch (at & 3) {
                case 0:
                    aL = 2147483648;
                    break;
                case 1:
                    aL = aI.charCodeAt(at - 1) << 24 | 8388608;
                    break;
                case 2:
                    aL = aI.charCodeAt(at - 2) << 24 | aI.charCodeAt(at - 1) << 16 | 32768;
                    break;
                case 3:
                    aL = aI.charCodeAt(at - 3) << 24 | aI.charCodeAt(at - 2) << 16 | aI.charCodeAt(at - 1) << 8 | 128;
                    break
            }
            aB.push(aL);
            while ((aB.length & 15) !== 14) {
                aB.push(0)
            }
            aB.push(at >>> 29);
            aB.push((at << 3) & 4294967295);
            for (ay = 0; ay < aB.length; ay += 16) {
                for (aL = 0; aL < 16; aL++) {
                    au[aL] = aB[ay + aL]
                }
                for (aL = 16; aL <= 79; aL++) {
                    au[aL] = av(au[aL - 3] ^ au[aL - 8] ^ au[aL - 14] ^ au[aL - 16], 1)
                }
                aH = aC;
                aG = aA;
                aF = az;
                aE = ax;
                aD = aw;
                for (aL = 0; aL <= 19; aL++) {
                    aM = (av(aH, 5) + ((aG & aF) | (~aG & aE)) + aD + au[aL] + 1518500249) & 4294967295;
                    aD = aE;
                    aE = aF;
                    aF = av(aG, 30);
                    aG = aH;
                    aH = aM
                }
                for (aL = 20; aL <= 39; aL++) {
                    aM = (av(aH, 5) + (aG ^ aF ^ aE) + aD + au[aL] + 1859775393) & 4294967295;
                    aD = aE;
                    aE = aF;
                    aF = av(aG, 30);
                    aG = aH;
                    aH = aM
                }
                for (aL = 40; aL <= 59; aL++) {
                    aM = (av(aH, 5) + ((aG & aF) | (aG & aE) | (aF & aE)) + aD + au[aL] + 2400959708) & 4294967295;
                    aD = aE;
                    aE = aF;
                    aF = av(aG, 30);
                    aG = aH;
                    aH = aM
                }
                for (aL = 60; aL <= 79; aL++) {
                    aM = (av(aH, 5) + (aG ^ aF ^ aE) + aD + au[aL] + 3395469782) & 4294967295;
                    aD = aE;
                    aE = aF;
                    aF = av(aG, 30);
                    aG = aH;
                    aH = aM
                }
                aC = (aC + aH) & 4294967295;
                aA = (aA + aG) & 4294967295;
                az = (az + aF) & 4294967295;
                ax = (ax + aE) & 4294967295;
                aw = (aw + aD) & 4294967295
            }
            aM = aJ(aC) + aJ(aA) + aJ(az) + aJ(ax) + aJ(aw);
            return aM.toLowerCase()
        }

        function ae(av, at, au) {
            if (!av) {
                av = ""
            }
            if (!at) {
                at = ""
            }
            if (av === "translate.googleusercontent.com") {
                if (au === "") {
                    au = at
                }
                at = e(at, "u");
                av = d(at)
            } else {
                if (av === "cc.bingj.com" || av === "webcache.googleusercontent.com" || av.slice(0, 5) === "74.6.") {
                    at = J.links[0].href;
                    av = d(at)
                }
            }
            return [av, at, au]
        }

        function O(au) {
            var at = au.length;
            if (au.charAt(--at) === ".") {
                au = au.slice(0, at)
            }
            if (au.slice(0, 2) === "*.") {
                au = au.slice(1)
            }
            if (au.indexOf("/") !== -1) {
                au = au.substr(0, au.indexOf("/"))
            }
            return au
        }

        function ap(au) {
            au = au && au.text ? au.text : au;
            if (!x(au)) {
                var at = J.getElementsByTagName("title");
                if (at && M(at[0])) {
                    au = at[0].text
                }
            }
            return au
        }

        function S(at) {
            if (!at) {
                return []
            }
            if (!M(at.children) && M(at.childNodes)) {
                return at.children
            }
            if (M(at.children)) {
                return at.children
            }
            return []
        }

        function Y(au, at) {
            if (!au || !at) {
                return false
            }
            if (au.contains) {
                return au.contains(at)
            }
            if (au === at) {
                return true
            }
            if (au.compareDocumentPosition) {
                return !!(au.compareDocumentPosition(at) & 16)
            }
            return false
        }

        function P(av, aw) {
            if (av && av.indexOf) {
                return av.indexOf(aw)
            }
            if (!M(av) || av === null) {
                return -1
            }
            if (!av.length) {
                return -1
            }
            var at = av.length;
            if (at === 0) {
                return -1
            }
            var au = 0;
            while (au < at) {
                if (av[au] === aw) {
                    return au
                }
                au++
            }
            return -1
        }

        function i(av) {
            if (!av) {
                return false
            }

            function at(ax, ay) {
                if (W.getComputedStyle) {
                    return J.defaultView.getComputedStyle(ax, null)[ay]
                }
                if (ax.currentStyle) {
                    return ax.currentStyle[ay]
                }
            }

            function aw(ax) {
                ax = ax.parentNode;
                while (ax) {
                    if (ax === J) {
                        return true
                    }
                    ax = ax.parentNode
                }
                return false
            }

            function au(az, aF, ax, aC, aA, aD, aB) {
                var ay = az.parentNode,
                    aE = 1;
                if (!aw(az)) {
                    return false
                }
                if (9 === ay.nodeType) {
                    return true
                }
                if ("0" === at(az, "opacity") || "none" === at(az, "display") || "hidden" === at(az, "visibility")) {
                    return false
                }
                if (!M(aF) || !M(ax) || !M(aC) || !M(aA) || !M(aD) || !M(aB)) {
                    aF = az.offsetTop;
                    aA = az.offsetLeft;
                    aC = aF + az.offsetHeight;
                    ax = aA + az.offsetWidth;
                    aD = az.offsetWidth;
                    aB = az.offsetHeight
                }
                if (av === az && (0 === aB || 0 === aD) && "hidden" === at(az, "overflow")) {
                    return false
                }
                if (ay) {
                    if (("hidden" === at(ay, "overflow") || "scroll" === at(ay, "overflow"))) {
                        if (aA + aE > ay.offsetWidth + ay.scrollLeft || aA + aD - aE < ay.scrollLeft || aF + aE > ay.offsetHeight + ay.scrollTop || aF + aB - aE < ay.scrollTop) {
                            return false
                        }
                    }
                    if (az.offsetParent === ay) {
                        aA += ay.offsetLeft;
                        aF += ay.offsetTop
                    }
                    return au(ay, aF, ax, aC, aA, aD, aB)
                }
                return true
            }
            return au(av)
        }
        var ai = {
            htmlCollectionToArray: function(av) {
                var at = [],
                    au;
                if (!av || !av.length) {
                    return at
                }
                for (au = 0; au < av.length; au++) {
                    at.push(av[au])
                }
                return at
            },
            find: function(at) {
                if (!document.querySelectorAll || !at) {
                    return []
                }
                var au = document.querySelectorAll(at);
                return this.htmlCollectionToArray(au)
            },
            findMultiple: function(av) {
                if (!av || !av.length) {
                    return []
                }
                var au, aw;
                var at = [];
                for (au = 0; au < av.length; au++) {
                    aw = this.find(av[au]);
                    at = at.concat(aw)
                }
                at = this.makeNodesUnique(at);
                return at
            },
            findNodesByTagName: function(au, at) {
                if (!au || !at || !au.getElementsByTagName) {
                    return []
                }
                var av = au.getElementsByTagName(at);
                return this.htmlCollectionToArray(av)
            },
            makeNodesUnique: function(at) {
                var ay = [].concat(at);
                at.sort(function(aA, az) {
                    if (aA === az) {
                        return 0
                    }
                    var aC = P(ay, aA);
                    var aB = P(ay, az);
                    if (aC === aB) {
                        return 0
                    }
                    return aC > aB ? -1 : 1
                });
                if (at.length <= 1) {
                    return at
                }
                var au = 0;
                var aw = 0;
                var ax = [];
                var av;
                av = at[au++];
                while (av) {
                    if (av === at[au]) {
                        aw = ax.push(au)
                    }
                    av = at[au++] || null
                }
                while (aw--) {
                    at.splice(ax[aw], 1)
                }
                return at
            },
            getAttributeValueFromNode: function(ax, av) {
                if (!this.hasNodeAttribute(ax, av)) {
                    return
                }
                if (ax && ax.getAttribute) {
                    return ax.getAttribute(av)
                }
                if (!ax || !ax.attributes) {
                    return
                }
                var aw = (typeof ax.attributes[av]);
                if ("undefined" === aw) {
                    return
                }
                if (ax.attributes[av].value) {
                    return ax.attributes[av].value
                }
                if (ax.attributes[av].nodeValue) {
                    return ax.attributes[av].nodeValue
                }
                var au;
                var at = ax.attributes;
                if (!at) {
                    return
                }
                for (au = 0; au < at.length; au++) {
                    if (at[au].nodeName === av) {
                        return at[au].nodeValue
                    }
                }
                return null
            },
            hasNodeAttributeWithValue: function(au, at) {
                var av = this.getAttributeValueFromNode(au, at);
                return !!av
            },
            hasNodeAttribute: function(av, at) {
                if (av && av.hasAttribute) {
                    return av.hasAttribute(at)
                }
                if (av && av.attributes) {
                    var au = (typeof av.attributes[at]);
                    return "undefined" !== au
                }
                return false
            },
            hasNodeCssClass: function(av, at) {
                if (av && at && av.className) {
                    var au = typeof av.className === "string" ? av.className.split(" ") : [];
                    if (-1 !== P(au, at)) {
                        return true
                    }
                }
                return false
            },
            findNodesHavingAttribute: function(ax, av, at) {
                if (!at) {
                    at = []
                }
                if (!ax || !av) {
                    return at
                }
                var aw = S(ax);
                if (!aw || !aw.length) {
                    return at
                }
                var au, ay;
                for (au = 0; au < aw.length; au++) {
                    ay = aw[au];
                    if (this.hasNodeAttribute(ay, av)) {
                        at.push(ay)
                    }
                    at = this.findNodesHavingAttribute(ay, av, at)
                }
                return at
            },
            findFirstNodeHavingAttribute: function(av, au) {
                if (!av || !au) {
                    return
                }
                if (this.hasNodeAttribute(av, au)) {
                    return av
                }
                var at = this.findNodesHavingAttribute(av, au);
                if (at && at.length) {
                    return at[0]
                }
            },
            findFirstNodeHavingAttributeWithValue: function(aw, av) {
                if (!aw || !av) {
                    return
                }
                if (this.hasNodeAttributeWithValue(aw, av)) {
                    return aw
                }
                var at = this.findNodesHavingAttribute(aw, av);
                if (!at || !at.length) {
                    return
                }
                var au;
                for (au = 0; au < at.length; au++) {
                    if (this.getAttributeValueFromNode(at[au], av)) {
                        return at[au]
                    }
                }
            },
            findNodesHavingCssClass: function(ax, aw, at) {
                if (!at) {
                    at = []
                }
                if (!ax || !aw) {
                    return at
                }
                if (ax.getElementsByClassName) {
                    var ay = ax.getElementsByClassName(aw);
                    return this.htmlCollectionToArray(ay)
                }
                var av = S(ax);
                if (!av || !av.length) {
                    return []
                }
                var au, az;
                for (au = 0; au < av.length; au++) {
                    az = av[au];
                    if (this.hasNodeCssClass(az, aw)) {
                        at.push(az)
                    }
                    at = this.findNodesHavingCssClass(az, aw, at)
                }
                return at
            },
            findFirstNodeHavingClass: function(av, au) {
                if (!av || !au) {
                    return
                }
                if (this.hasNodeCssClass(av, au)) {
                    return av
                }
                var at = this.findNodesHavingCssClass(av, au);
                if (at && at.length) {
                    return at[0]
                }
            },
            isLinkElement: function(au) {
                if (!au) {
                    return false
                }
                var at = String(au.nodeName).toLowerCase();
                var aw = ["a", "area"];
                var av = P(aw, at);
                return av !== -1
            },
            setAnyAttribute: function(au, at, av) {
                if (!au || !at) {
                    return
                }
                if (au.setAttribute) {
                    au.setAttribute(at, av)
                } else {
                    au[at] = av
                }
            }
        };
        var w = {
            CONTENT_ATTR: "data-track-content",
            CONTENT_CLASS: "matomoTrackContent",
            LEGACY_CONTENT_CLASS: "piwikTrackContent",
            CONTENT_NAME_ATTR: "data-content-name",
            CONTENT_PIECE_ATTR: "data-content-piece",
            CONTENT_PIECE_CLASS: "matomoContentPiece",
            LEGACY_CONTENT_PIECE_CLASS: "piwikContentPiece",
            CONTENT_TARGET_ATTR: "data-content-target",
            CONTENT_TARGET_CLASS: "matomoContentTarget",
            LEGACY_CONTENT_TARGET_CLASS: "piwikContentTarget",
            CONTENT_IGNOREINTERACTION_ATTR: "data-content-ignoreinteraction",
            CONTENT_IGNOREINTERACTION_CLASS: "matomoContentIgnoreInteraction",
            LEGACY_CONTENT_IGNOREINTERACTION_CLASS: "piwikContentIgnoreInteraction",
            location: undefined,
            findContentNodes: function() {
                var au = "." + this.CONTENT_CLASS;
                var av = "." + this.LEGACY_CONTENT_CLASS;
                var at = "[" + this.CONTENT_ATTR + "]";
                var aw = ai.findMultiple([au, av, at]);
                return aw
            },
            findContentNodesWithinNode: function(aw) {
                if (!aw) {
                    return []
                }
                var au = ai.findNodesHavingCssClass(aw, this.CONTENT_CLASS);
                au = ai.findNodesHavingCssClass(aw, this.LEGACY_CONTENT_CLASS, au);
                var at = ai.findNodesHavingAttribute(aw, this.CONTENT_ATTR);
                if (at && at.length) {
                    var av;
                    for (av = 0; av < at.length; av++) {
                        au.push(at[av])
                    }
                }
                if (ai.hasNodeAttribute(aw, this.CONTENT_ATTR)) {
                    au.push(aw)
                } else {
                    if (ai.hasNodeCssClass(aw, this.CONTENT_CLASS)) {
                        au.push(aw)
                    } else {
                        if (ai.hasNodeCssClass(aw, this.LEGACY_CONTENT_CLASS)) {
                            au.push(aw)
                        }
                    }
                }
                au = ai.makeNodesUnique(au);
                return au
            },
            findParentContentNode: function(au) {
                if (!au) {
                    return
                }
                var av = au;
                var at = 0;
                while (av && av !== J && av.parentNode) {
                    if (ai.hasNodeAttribute(av, this.CONTENT_ATTR)) {
                        return av
                    }
                    if (ai.hasNodeCssClass(av, this.CONTENT_CLASS)) {
                        return av
                    }
                    if (ai.hasNodeCssClass(av, this.LEGACY_CONTENT_CLASS)) {
                        return av
                    }
                    av = av.parentNode;
                    if (at > 1000) {
                        break
                    }
                    at++
                }
            },
            findPieceNode: function(au) {
                var at;
                at = ai.findFirstNodeHavingAttribute(au, this.CONTENT_PIECE_ATTR);
                if (!at) {
                    at = ai.findFirstNodeHavingClass(au, this.CONTENT_PIECE_CLASS)
                }
                if (!at) {
                    at = ai.findFirstNodeHavingClass(au, this.LEGACY_CONTENT_PIECE_CLASS)
                }
                if (at) {
                    return at
                }
                return au
            },
            findTargetNodeNoDefault: function(at) {
                if (!at) {
                    return
                }
                var au = ai.findFirstNodeHavingAttributeWithValue(at, this.CONTENT_TARGET_ATTR);
                if (au) {
                    return au
                }
                au = ai.findFirstNodeHavingAttribute(at, this.CONTENT_TARGET_ATTR);
                if (au) {
                    return au
                }
                au = ai.findFirstNodeHavingClass(at, this.CONTENT_TARGET_CLASS);
                if (au) {
                    return au
                }
                au = ai.findFirstNodeHavingClass(at, this.LEGACY_CONTENT_TARGET_CLASS);
                if (au) {
                    return au
                }
            },
            findTargetNode: function(at) {
                var au = this.findTargetNodeNoDefault(at);
                if (au) {
                    return au
                }
                return at
            },
            findContentName: function(au) {
                if (!au) {
                    return
                }
                var ax = ai.findFirstNodeHavingAttributeWithValue(au, this.CONTENT_NAME_ATTR);
                if (ax) {
                    return ai.getAttributeValueFromNode(ax, this.CONTENT_NAME_ATTR)
                }
                var at = this.findContentPiece(au);
                if (at) {
                    return this.removeDomainIfIsInLink(at)
                }
                if (ai.hasNodeAttributeWithValue(au, "title")) {
                    return ai.getAttributeValueFromNode(au, "title")
                }
                var av = this.findPieceNode(au);
                if (ai.hasNodeAttributeWithValue(av, "title")) {
                    return ai.getAttributeValueFromNode(av, "title")
                }
                var aw = this.findTargetNode(au);
                if (ai.hasNodeAttributeWithValue(aw, "title")) {
                    return ai.getAttributeValueFromNode(aw, "title")
                }
            },
            findContentPiece: function(au) {
                if (!au) {
                    return
                }
                var aw = ai.findFirstNodeHavingAttributeWithValue(au, this.CONTENT_PIECE_ATTR);
                if (aw) {
                    return ai.getAttributeValueFromNode(aw, this.CONTENT_PIECE_ATTR)
                }
                var at = this.findPieceNode(au);
                var av = this.findMediaUrlInNode(at);
                if (av) {
                    return this.toAbsoluteUrl(av)
                }
            },
            findContentTarget: function(av) {
                if (!av) {
                    return
                }
                var aw = this.findTargetNode(av);
                if (ai.hasNodeAttributeWithValue(aw, this.CONTENT_TARGET_ATTR)) {
                    return ai.getAttributeValueFromNode(aw, this.CONTENT_TARGET_ATTR)
                }
                var au;
                if (ai.hasNodeAttributeWithValue(aw, "href")) {
                    au = ai.getAttributeValueFromNode(aw, "href");
                    return this.toAbsoluteUrl(au)
                }
                var at = this.findPieceNode(av);
                if (ai.hasNodeAttributeWithValue(at, "href")) {
                    au = ai.getAttributeValueFromNode(at, "href");
                    return this.toAbsoluteUrl(au)
                }
            },
            isSameDomain: function(at) {
                if (!at || !at.indexOf) {
                    return false
                }
                if (0 === at.indexOf(this.getLocation().origin)) {
                    return true
                }
                var au = at.indexOf(this.getLocation().host);
                if (8 >= au && 0 <= au) {
                    return true
                }
                return false
            },
            removeDomainIfIsInLink: function(av) {
                var au = "^https?://[^/]+";
                var at = "^.*//[^/]+";
                if (av && av.search && -1 !== av.search(new RegExp(au)) && this.isSameDomain(av)) {
                    av = av.replace(new RegExp(at), "");
                    if (!av) {
                        av = "/"
                    }
                }
                return av
            },
            findMediaUrlInNode: function(ax) {
                if (!ax) {
                    return
                }
                var av = ["img", "embed", "video", "audio"];
                var at = ax.nodeName.toLowerCase();
                if (-1 !== P(av, at) && ai.findFirstNodeHavingAttributeWithValue(ax, "src")) {
                    var aw = ai.findFirstNodeHavingAttributeWithValue(ax, "src");
                    return ai.getAttributeValueFromNode(aw, "src")
                }
                if (at === "object" && ai.hasNodeAttributeWithValue(ax, "data")) {
                    return ai.getAttributeValueFromNode(ax, "data")
                }
                if (at === "object") {
                    var ay = ai.findNodesByTagName(ax, "param");
                    if (ay && ay.length) {
                        var au;
                        for (au = 0; au < ay.length; au++) {
                            if ("movie" === ai.getAttributeValueFromNode(ay[au], "name") && ai.hasNodeAttributeWithValue(ay[au], "value")) {
                                return ai.getAttributeValueFromNode(ay[au], "value")
                            }
                        }
                    }
                    var az = ai.findNodesByTagName(ax, "embed");
                    if (az && az.length) {
                        return this.findMediaUrlInNode(az[0])
                    }
                }
            },
            trim: function(at) {
                return a(at)
            },
            isOrWasNodeInViewport: function(ay) {
                if (!ay || !ay.getBoundingClientRect || ay.nodeType !== 1) {
                    return true
                }
                var ax = ay.getBoundingClientRect();
                var aw = J.documentElement || {};
                var av = ax.top < 0;
                if (av && ay.offsetTop) {
                    av = (ay.offsetTop + ax.height) > 0
                }
                var au = aw.clientWidth;
                if (W.innerWidth && au > W.innerWidth) {
                    au = W.innerWidth
                }
                var at = aw.clientHeight;
                if (W.innerHeight && at > W.innerHeight) {
                    at = W.innerHeight
                }
                return ((ax.bottom > 0 || av) && ax.right > 0 && ax.left < au && ((ax.top < at) || av))
            },
            isNodeVisible: function(au) {
                var at = i(au);
                var av = this.isOrWasNodeInViewport(au);
                return at && av
            },
            buildInteractionRequestParams: function(at, au, av, aw) {
                var ax = "";
                if (at) {
                    ax += "c_i=" + t(at)
                }
                if (au) {
                    if (ax) {
                        ax += "&"
                    }
                    ax += "c_n=" + t(au)
                }
                if (av) {
                    if (ax) {
                        ax += "&"
                    }
                    ax += "c_p=" + t(av)
                }
                if (aw) {
                    if (ax) {
                        ax += "&"
                    }
                    ax += "c_t=" + t(aw)
                }
                if (ax) {
                    ax += "&ca=1"
                }
                return ax
            },
            buildImpressionRequestParams: function(at, au, av) {
                var aw = "c_n=" + t(at) + "&c_p=" + t(au);
                if (av) {
                    aw += "&c_t=" + t(av)
                }
                if (aw) {
                    aw += "&ca=1"
                }
                return aw
            },
            buildContentBlock: function(av) {
                if (!av) {
                    return
                }
                var at = this.findContentName(av);
                var au = this.findContentPiece(av);
                var aw = this.findContentTarget(av);
                at = this.trim(at);
                au = this.trim(au);
                aw = this.trim(aw);
                return {
                    name: at || "Unknown",
                    piece: au || "Unknown",
                    target: aw || ""
                }
            },
            collectContent: function(aw) {
                if (!aw || !aw.length) {
                    return []
                }
                var av = [];
                var at, au;
                for (at = 0; at < aw.length; at++) {
                    au = this.buildContentBlock(aw[at]);
                    if (M(au)) {
                        av.push(au)
                    }
                }
                return av
            },
            setLocation: function(at) {
                this.location = at
            },
            getLocation: function() {
                var at = this.location || W.location;
                if (!at.origin) {
                    at.origin = at.protocol + "//" + at.hostname + (at.port ? ":" + at.port : "")
                }
                return at
            },
            toAbsoluteUrl: function(au) {
                if ((!au || String(au) !== au) && au !== "") {
                    return au
                }
                if ("" === au) {
                    return this.getLocation().href
                }
                if (au.search(/^\/\//) !== -1) {
                    return this.getLocation().protocol + au
                }
                if (au.search(/:\/\//) !== -1) {
                    return au
                }
                if (0 === au.indexOf("#")) {
                    return this.getLocation().origin + this.getLocation().pathname + au
                }
                if (0 === au.indexOf("?")) {
                    return this.getLocation().origin + this.getLocation().pathname + au
                }
                if (0 === au.search("^[a-zA-Z]{2,11}:")) {
                    return au
                }
                if (au.search(/^\//) !== -1) {
                    return this.getLocation().origin + au
                }
                var at = "(.*/)";
                var av = this.getLocation().origin + this.getLocation().pathname.match(new RegExp(at))[0];
                return av + au
            },
            isUrlToCurrentDomain: function(au) {
                var av = this.toAbsoluteUrl(au);
                if (!av) {
                    return false
                }
                var at = this.getLocation().origin;
                if (at === av) {
                    return true
                }
                if (0 === String(av).indexOf(at)) {
                    if (":" === String(av).substr(at.length, 1)) {
                        return false
                    }
                    return true
                }
                return false
            },
            setHrefAttribute: function(au, at) {
                if (!au || !at) {
                    return
                }
                ai.setAnyAttribute(au, "href", at)
            },
            shouldIgnoreInteraction: function(at) {
                if (ai.hasNodeAttribute(at, this.CONTENT_IGNOREINTERACTION_ATTR)) {
                    return true
                }
                if (ai.hasNodeCssClass(at, this.CONTENT_IGNOREINTERACTION_CLASS)) {
                    return true
                }
                if (ai.hasNodeCssClass(at, this.LEGACY_CONTENT_IGNOREINTERACTION_CLASS)) {
                    return true
                }
                return false
            }
        };

        function aa(au, ax) {
            if (ax) {
                return ax
            }
            au = w.toAbsoluteUrl(au);
            if (A(au, "?")) {
                var aw = au.indexOf("?");
                au = au.slice(0, aw)
            }
            if (U(au, "matomo.php")) {
                au = f(au, "matomo.php".length)
            } else {
                if (U(au, "piwik.php")) {
                    au = f(au, "piwik.php".length)
                } else {
                    if (U(au, ".php")) {
                        var at = au.lastIndexOf("/");
                        var av = 1;
                        au = au.slice(0, at + av)
                    }
                }
            }
            if (U(au, "/js/")) {
                au = f(au, "js/".length)
            }
            return au
        }

        function R(az) {
            var aB = "Matomo_Overlay";
            var au = new RegExp("index\\.php\\?module=Overlay&action=startOverlaySession&idSite=([0-9]+)&period=([^&]+)&date=([^&]+)(&segment=[^&]*)?");
            var av = au.exec(J.referrer);
            if (av) {
                var ax = av[1];
                if (ax !== String(az)) {
                    return false
                }
                var ay = av[2],
                    at = av[3],
                    aw = av[4];
                if (!aw) {
                    aw = ""
                } else {
                    if (aw.indexOf("&segment=") === 0) {
                        aw = aw.substr("&segment=".length)
                    }
                }
                W.name = aB + "###" + ay + "###" + at + "###" + aw
            }
            var aA = W.name.split("###");
            return aA.length === 4 && aA[0] === aB
        }

        function ad(au, az, av) {
            var ay = W.name.split("###"),
                ax = ay[1],
                at = ay[2],
                aw = ay[3],
                aA = aa(au, az);
            o(aA + "plugins/Overlay/client/client.js?v=1", function() {
                Matomo_Overlay_Client.initialize(aA, av, ax, at, aw)
            })
        }

        function v() {
            var av;
            try {
                av = W.frameElement
            } catch (au) {
                return true
            }
            if (M(av)) {
                return (av && String(av.nodeName).toLowerCase() === "iframe") ? true : false
            }
            try {
                return W.self !== W.top
            } catch (at) {
                return true
            }
        }

        function T(cj, cf) {
            var bP = this,
                bj = "mtm_consent",
                cL = "mtm_cookie_consent",
                cU = "mtm_consent_removed",
                ca = ae(J.domain, W.location.href, N()),
                c2 = O(ca[0]),
                bT = p(ca[1]),
                bu = p(ca[2]),
                c0 = false,
                cn = "GET",
                dj = cn,
                aM = "application/x-www-form-urlencoded; charset=UTF-8",
                cE = aM,
                aI = cj || "",
                bO = "",
                c9 = "",
                ct = "",
                cc = cf || "",
                bF = "",
                bU = "",
                ba, bp = "",
                dg = ["7z", "aac", "apk", "arc", "arj", "asf", "asx", "avi", "azw3", "bin", "csv", "deb", "dmg", "doc", "docx", "epub", "exe", "flv", "gif", "gz", "gzip", "hqx", "ibooks", "jar", "jpg", "jpeg", "js", "mobi", "mp2", "mp3", "mp4", "mpg", "mpeg", "mov", "movie", "msi", "msp", "odb", "odf", "odg", "ods", "odt", "ogg", "ogv", "pdf", "phps", "png", "ppt", "pptx", "qt", "qtm", "ra", "ram", "rar", "rpm", "rtf", "sea", "sit", "tar", "tbz", "tbz2", "bz", "bz2", "tgz", "torrent", "txt", "wav", "wma", "wmv", "wpd", "xls", "xlsx", "xml", "z", "zip"],
                aC = [c2],
                bG = [],
                co = [],
                bR = [],
                be = [],
                bQ = 500,
                c5 = true,
                cR, bb, bX, bV, at, cw = ["pk_campaign", "mtm_campaign", "piwik_campaign", "matomo_campaign", "utm_campaign", "utm_source", "utm_medium"],
                bN = ["pk_kwd", "mtm_kwd", "piwik_kwd", "matomo_kwd", "utm_term"],
                bq = "_pk_",
                az = "pk_vid",
                a5 = 180,
                c7, bw, bY = false,
                aN = "Lax",
                bs = false,
                cY, bk, bC, cS = 33955200000,
                cu = 1800000,
                df = 15768000000,
                a8 = true,
                bL = false,
                bn = false,
                bW = false,
                aV = false,
                ch, b2 = {},
                cs = {},
                bt = {},
                bA = 200,
                cA = {},
                da = {},
                dh = {},
                cg = [],
                ck = false,
                cJ = false,
                au = false,
                di = false,
                cV = false,
                aS = false,
                bi = v(),
                cF = null,
                c8 = null,
                aW, bI, cd = aq,
                bv, aQ, bH = false,
                cx = 0,
                bB = ["id", "ses", "cvar", "ref"],
                cI = false,
                bJ = null,
                cT = [],
                cz = [],
                aB = X++,
                aA = false,
                c6 = true;
            try {
                bp = J.title
            } catch (cG) {
                bp = ""
            }

            function aH(dv) {
                if (bs) {
                    return 0
                }
                var dt = new RegExp("(^|;)[ ]*" + dv + "=([^;]*)"),
                    du = dt.exec(J.cookie);
                return du ? V(du[2]) : 0
            }
            bJ = !aH(cU);

            function dn(dx, dy, dB, dA, dv, dw, dz) {
                if (bs && dx !== cU) {
                    return
                }
                var du;
                if (dB) {
                    du = new Date();
                    du.setTime(du.getTime() + dB)
                }
                if (!dz) {
                    dz = "Lax"
                }
                J.cookie = dx + "=" + t(dy) + (dB ? ";expires=" + du.toGMTString() : "") + ";path=" + (dA || "/") + (dv ? ";domain=" + dv : "") + (dw ? ";secure" : "") + ";SameSite=" + dz;
                if ((!dB || dB >= 0) && aH(dx) !== String(dy)) {
                    var dt = "There was an error setting cookie `" + dx + "`. Please check domain and path.";
                    ao(dt)
                }
            }

            function b8(dt) {
                var dv, du;
                dt = j(dt, az);
                for (du = 0; du < co.length; du++) {
                    dt = j(dt, co[du])
                }
                if (bV) {
                    dv = new RegExp("#.*");
                    return dt.replace(dv, "")
                }
                return dt
            }

            function b1(dv, dt) {
                var dw = s(dt),
                    du;
                if (dw) {
                    return dt
                }
                if (dt.slice(0, 1) === "/") {
                    return s(dv) + "://" + d(dv) + dt
                }
                dv = b8(dv);
                du = dv.indexOf("?");
                if (du >= 0) {
                    dv = dv.slice(0, du)
                }
                du = dv.lastIndexOf("/");
                if (du !== dv.length - 1) {
                    dv = dv.slice(0, du + 1)
                }
                return dv + dt
            }

            function cP(dv, dt) {
                var du;
                dv = String(dv).toLowerCase();
                dt = String(dt).toLowerCase();
                if (dv === dt) {
                    return true
                }
                if (dt.slice(0, 1) === ".") {
                    if (dv === dt.slice(1)) {
                        return true
                    }
                    du = dv.length - dt.length;
                    if ((du > 0) && (dv.slice(du) === dt)) {
                        return true
                    }
                }
                return false
            }

            function cr(dt) {
                var du = document.createElement("a");
                if (dt.indexOf("//") !== 0 && dt.indexOf("http") !== 0) {
                    if (dt.indexOf("*") === 0) {
                        dt = dt.substr(1)
                    }
                    if (dt.indexOf(".") === 0) {
                        dt = dt.substr(1)
                    }
                    dt = "http://" + dt
                }
                du.href = w.toAbsoluteUrl(dt);
                if (du.pathname) {
                    return du.pathname
                }
                return ""
            }

            function a9(du, dt) {
                if (!an(dt, "/")) {
                    dt = "/" + dt
                }
                if (!an(du, "/")) {
                    du = "/" + du
                }
                var dv = (dt === "/" || dt === "/*");
                if (dv) {
                    return true
                }
                if (du === dt) {
                    return true
                }
                dt = String(dt).toLowerCase();
                du = String(du).toLowerCase();
                if (U(dt, "*")) {
                    dt = dt.slice(0, -1);
                    dv = (!dt || dt === "/");
                    if (dv) {
                        return true
                    }
                    if (du === dt) {
                        return true
                    }
                    return du.indexOf(dt) === 0
                }
                if (!U(du, "/")) {
                    du += "/"
                }
                if (!U(dt, "/")) {
                    dt += "/"
                }
                return du.indexOf(dt) === 0
            }

            function aw(dx, dz) {
                var du, dt, dv, dw, dy;
                for (du = 0; du < aC.length; du++) {
                    dw = O(aC[du]);
                    dy = cr(aC[du]);
                    if (cP(dx, dw) && a9(dz, dy)) {
                        return true
                    }
                }
                return false
            }

            function a1(dw) {
                var du, dt, dv;
                for (du = 0; du < aC.length; du++) {
                    dt = O(aC[du].toLowerCase());
                    if (dw === dt) {
                        return true
                    }
                    if (dt.slice(0, 1) === ".") {
                        if (dw === dt.slice(1)) {
                            return true
                        }
                        dv = dw.length - dt.length;
                        if ((dv > 0) && (dw.slice(dv) === dt)) {
                            return true
                        }
                    }
                }
                return false
            }

            function cv(dt, dv) {
                dt = dt.replace("send_image=0", "send_image=1");
                var du = new Image(1, 1);
                du.onload = function() {
                    H = 0;
                    if (typeof dv === "function") {
                        dv({
                            request: dt,
                            trackerUrl: aI,
                            success: true
                        })
                    }
                };
                du.onerror = function() {
                    if (typeof dv === "function") {
                        dv({
                            request: dt,
                            trackerUrl: aI,
                            success: false
                        })
                    }
                };
                du.src = aI + (aI.indexOf("?") < 0 ? "?" : "&") + dt
            }

            function cM(dt) {
                if (dj === "POST") {
                    return true
                }
                return dt && (dt.length > 2000 || dt.indexOf('{"requests"') === 0)
            }

            function aP() {
                return "object" === typeof g && "function" === typeof g.sendBeacon && "function" === typeof Blob
            }

            function bc(dx, dA, dz) {
                var dv = aP();
                if (!dv) {
                    return false
                }
                var dw = {
                    type: "application/x-www-form-urlencoded; charset=UTF-8"
                };
                var dB = false;
                var du = aI;
                try {
                    var dt = new Blob([dx], dw);
                    if (dz && !cM(dx)) {
                        dt = new Blob([], dw);
                        du = du + (du.indexOf("?") < 0 ? "?" : "&") + dx
                    }
                    dB = g.sendBeacon(du, dt)
                } catch (dy) {
                    return false
                }
                if (dB && typeof dA === "function") {
                    dA({
                        request: dx,
                        trackerUrl: aI,
                        success: true,
                        isSendBeacon: true
                    })
                }
                return dB
            }

            function de(du, dv, dt) {
                if (!M(dt) || null === dt) {
                    dt = true
                }
                if (m && bc(du, dv, dt)) {
                    return
                }
                setTimeout(function() {
                    if (m && bc(du, dv, dt)) {
                        return
                    }
                    var dy;
                    try {
                        var dx = W.XMLHttpRequest ? new W.XMLHttpRequest() : W.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : null;
                        dx.open("POST", aI, true);
                        dx.onreadystatechange = function() {
                            if (this.readyState === 4 && !(this.status >= 200 && this.status < 300)) {
                                var dz = m && bc(du, dv, dt);
                                if (!dz && dt) {
                                    cv(du, dv)
                                } else {
                                    if (typeof dv === "function") {
                                        dv({
                                            request: du,
                                            trackerUrl: aI,
                                            success: false,
                                            xhr: this
                                        })
                                    }
                                }
                            } else {
                                if (this.readyState === 4 && (typeof dv === "function")) {
                                    dv({
                                        request: du,
                                        trackerUrl: aI,
                                        success: true,
                                        xhr: this
                                    })
                                }
                            }
                        };
                        dx.setRequestHeader("Content-Type", cE);
                        dx.withCredentials = true;
                        dx.send(du)
                    } catch (dw) {
                        dy = m && bc(du, dv, dt);
                        if (!dy && dt) {
                            cv(du, dv)
                        } else {
                            if (typeof dv === "function") {
                                dv({
                                    request: du,
                                    trackerUrl: aI,
                                    success: false
                                })
                            }
                        }
                    }
                }, 50)
            }

            function cl(du) {
                var dt = new Date();
                var dv = dt.getTime() + du;
                if (!r || dv > r) {
                    r = dv
                }
            }

            function bg() {
                bi = true;
                cF = new Date().getTime()
            }

            function dm() {
                var dt = new Date().getTime();
                return !cF || (dt - cF) > bb
            }

            function aD() {
                if (dm()) {
                    bX()
                }
            }

            function a0() {
                if (J.visibilityState === "hidden" && dm()) {
                    bX()
                } else {
                    if (J.visibilityState === "visible") {
                        cF = new Date().getTime()
                    }
                }
            }

            function dq() {
                if (aS || !bb) {
                    return
                }
                aS = true;
                ar(W, "focus", bg);
                ar(W, "blur", aD);
                ar(W, "visibilitychange", a0);
                af++;
                u.addPlugin("HeartBeat" + af, {
                    unload: function() {
                        if (aS && dm()) {
                            bX()
                        }
                    }
                })
            }

            function cK(dx) {
                var du = new Date();
                var dt = du.getTime();
                c8 = dt;
                if (cJ && dt < cJ) {
                    var dv = cJ - dt;
                    setTimeout(dx, dv);
                    cl(dv + 50);
                    cJ += 50;
                    return
                }
                if (cJ === false) {
                    var dw = 800;
                    cJ = dt + dw
                }
                dx()
            }

            function aT() {
                if (aH(cU)) {
                    bJ = false
                } else {
                    if (aH(bj)) {
                        bJ = true
                    }
                }
            }

            function bM(du, dt, dv) {
                aT();
                if (!bJ) {
                    cT.push(du);
                    return
                }
                aA = true;
                if (!cY && du) {
                    if (cI && bJ) {
                        du += "&consent=1"
                    }
                    cK(function() {
                        if (c5 && bc(du, dv, true)) {
                            cl(100);
                            return
                        }
                        if (cM(du)) {
                            de(du, dv)
                        } else {
                            cv(du, dv)
                        }
                        cl(dt)
                    })
                }
                if (!aS) {
                    dq()
                }
            }

            function cq(dt) {
                if (cY) {
                    return false
                }
                return (dt && dt.length)
            }

            function dd(dt, dx) {
                if (!dx || dx >= dt.length) {
                    return [dt]
                }
                var du = 0;
                var dv = dt.length;
                var dw = [];
                for (du; du < dv; du += dx) {
                    dw.push(dt.slice(du, du + dx))
                }
                return dw
            }

            function dp(du, dt) {
                if (!cq(du)) {
                    return
                }
                if (!bJ) {
                    cT.push(du);
                    return
                }
                aA = true;
                cK(function() {
                    var dx = dd(du, 50);
                    var dv = 0,
                        dw;
                    for (dv; dv < dx.length; dv++) {
                        dw = '{"requests":["?' + dx[dv].join('","?') + '"],"send_image":0}';
                        if (c5 && bc(dw, null, false)) {
                            cl(100)
                        } else {
                            de(dw, null, false)
                        }
                    }
                    cl(dt)
                })
            }

            function aY(dt) {
                return bq + dt + "." + cc + "." + bv
            }

            function b5(dv, du, dt) {
                dn(dv, "", -129600000, du, dt)
            }

            function cb() {
                if (bs) {
                    return "0"
                }
                if (!M(W.showModalDialog) && M(g.cookieEnabled)) {
                    return g.cookieEnabled ? "1" : "0"
                }
                var dt = bq + "testcookie";
                dn(dt, "1", undefined, bw, c7, bY, aN);
                var du = aH(dt) === "1" ? "1" : "0";
                b5(dt);
                return du
            }

            function bo() {
                bv = cd((c7 || c2) + (bw || "/")).slice(0, 4)
            }

            function cQ() {
                if (!c6) {
                    return {}
                }
                if (M(dh.res)) {
                    return dh
                }
                var du, dw, dx = {
                    pdf: "application/pdf",
                    qt: "video/quicktime",
                    realp: "audio/x-pn-realaudio-plugin",
                    wma: "application/x-mplayer2",
                    fla: "application/x-shockwave-flash",
                    java: "application/x-java-vm",
                    ag: "application/x-silverlight"
                };
                if (!((new RegExp("MSIE")).test(g.userAgent))) {
                    if (g.mimeTypes && g.mimeTypes.length) {
                        for (du in dx) {
                            if (Object.prototype.hasOwnProperty.call(dx, du)) {
                                dw = g.mimeTypes[dx[du]];
                                dh[du] = (dw && dw.enabledPlugin) ? "1" : "0"
                            }
                        }
                    }
                    if (!((new RegExp("Edge[ /](\\d+[\\.\\d]+)")).test(g.userAgent)) && typeof navigator.javaEnabled !== "unknown" && M(g.javaEnabled) && g.javaEnabled()) {
                        dh.java = "1"
                    }
                    if (!M(W.showModalDialog) && M(g.cookieEnabled)) {
                        dh.cookie = g.cookieEnabled ? "1" : "0"
                    } else {
                        dh.cookie = cb()
                    }
                }
                var dv = parseInt(ab.width, 10);
                var dt = parseInt(ab.height, 10);
                dh.res = parseInt(dv, 10) + "x" + parseInt(dt, 10);
                return dh
            }

            function b3() {
                var du = aY("cvar"),
                    dt = aH(du);
                if (dt && dt.length) {
                    dt = W.JSON.parse(dt);
                    if (Z(dt)) {
                        return dt
                    }
                }
                return {}
            }

            function cN() {
                if (aV === false) {
                    aV = b3()
                }
            }

            function cZ() {
                var dt = cQ();
                return cd((g.userAgent || "") + (g.platform || "") + W.JSON.stringify(dt) + (new Date()).getTime() + Math.random()).slice(0, 16)
            }

            function aF() {
                var dt = cQ();
                return cd((g.userAgent || "") + (g.platform || "") + W.JSON.stringify(dt)).slice(0, 6)
            }

            function bl() {
                return Math.floor((new Date()).getTime() / 1000)
            }

            function aO() {
                var du = bl();
                var dv = aF();
                var dt = String(du) + dv;
                return dt
            }

            function dc(dv) {
                dv = String(dv);
                var dy = aF();
                var dw = dy.length;
                var dx = dv.substr(-1 * dw, dw);
                var du = parseInt(dv.substr(0, dv.length - dw), 10);
                if (du && dx && dx === dy) {
                    var dt = bl();
                    if (a5 <= 0) {
                        return true
                    }
                    if (dt >= du && dt <= (du + a5)) {
                        return true
                    }
                }
                return false
            }

            function dr(dt) {
                if (!cV) {
                    return ""
                }
                var dx = e(dt, az);
                if (!dx) {
                    return ""
                }
                dx = String(dx);
                var dv = new RegExp("^[a-zA-Z0-9]+$");
                if (dx.length === 32 && dv.test(dx)) {
                    var du = dx.substr(16, 32);
                    if (dc(du)) {
                        var dw = dx.substr(0, 16);
                        return dw
                    }
                }
                return ""
            }

            function cW() {
                if (!bU) {
                    bU = dr(bT)
                }
                var dv = new Date(),
                    dt = Math.round(dv.getTime() / 1000),
                    du = aY("id"),
                    dy = aH(du),
                    dx, dw;
                if (dy) {
                    dx = dy.split(".");
                    dx.unshift("0");
                    if (bU.length) {
                        dx[1] = bU
                    }
                    return dx
                }
                if (bU.length) {
                    dw = bU
                } else {
                    if ("0" === cb()) {
                        dw = ""
                    } else {
                        dw = cZ()
                    }
                }
                dx = ["1", dw, dt];
                return dx
            }

            function a4() {
                var dw = cW(),
                    du = dw[0],
                    dv = dw[1],
                    dt = dw[2];
                return {
                    newVisitor: du,
                    uuid: dv,
                    createTs: dt
                }
            }

            function aL() {
                var dw = new Date(),
                    du = dw.getTime(),
                    dx = a4().createTs;
                var dt = parseInt(dx, 10);
                var dv = (dt * 1000) + cS - du;
                return dv
            }

            function aR(dt) {
                if (!cc) {
                    return
                }
                var dv = new Date(),
                    du = Math.round(dv.getTime() / 1000);
                if (!M(dt)) {
                    dt = a4()
                }
                var dw = dt.uuid + "." + dt.createTs + ".";
                dn(aY("id"), dw, aL(), bw, c7, bY, aN)
            }

            function bS() {
                var dt = aH(aY("ref"));
                if (dt.length) {
                    try {
                        dt = W.JSON.parse(dt);
                        if (Z(dt)) {
                            return dt
                        }
                    } catch (du) {}
                }
                return ["", "", 0, ""]
            }

            function bD(dv) {
                var du = bq + "testcookie_domain";
                var dt = "testvalue";
                dn(du, dt, 10000, null, dv, bY, aN);
                if (aH(du) === dt) {
                    b5(du, null, dv);
                    return true
                }
                return false
            }

            function aJ() {
                var du = bs;
                bs = false;
                var dt, dv;
                for (dt = 0; dt < bB.length; dt++) {
                    dv = aY(bB[dt]);
                    if (dv !== cU && dv !== bj && 0 !== aH(dv)) {
                        b5(dv, bw, c7)
                    }
                }
                bs = du
            }

            function b9(dt) {
                cc = dt
            }

            function ds(dx) {
                if (!dx || !Z(dx)) {
                    return
                }
                var dw = [];
                var dv;
                for (dv in dx) {
                    if (Object.prototype.hasOwnProperty.call(dx, dv)) {
                        dw.push(dv)
                    }
                }
                var dy = {};
                dw.sort();
                var dt = dw.length;
                var du;
                for (du = 0; du < dt; du++) {
                    dy[dw[du]] = dx[dw[du]]
                }
                return dy
            }

            function ci() {
                dn(aY("ses"), "1", cu, bw, c7, bY, aN)
            }

            function bm() {
                var dw = "";
                var du = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var dv = du.length;
                var dt;
                for (dt = 0; dt < 6; dt++) {
                    dw += du.charAt(Math.floor(Math.random() * dv))
                }
                return dw
            }

            function aE(du) {
                if (ct !== "") {
                    du += ct;
                    bn = true;
                    return du
                }
                if (!h) {
                    return du
                }
                var dv = (typeof h.timing === "object") && h.timing ? h.timing : undefined;
                if (!dv) {
                    dv = (typeof h.getEntriesByType === "function") && h.getEntriesByType("navigation") ? h.getEntriesByType("navigation")[0] : undefined
                }
                if (!dv) {
                    return du
                }
                var dt = "";
                if (dv.connectEnd && dv.fetchStart) {
                    if (dv.connectEnd < dv.fetchStart) {
                        return
                    }
                    dt += "&pf_net=" + Math.round(dv.connectEnd - dv.fetchStart)
                }
                if (dv.responseStart && dv.requestStart) {
                    if (dv.responseStart < dv.requestStart) {
                        return
                    }
                    dt += "&pf_srv=" + Math.round(dv.responseStart - dv.requestStart)
                }
                if (dv.responseStart && dv.responseEnd) {
                    if (dv.responseEnd < dv.responseStart) {
                        return
                    }
                    dt += "&pf_tfr=" + Math.round(dv.responseEnd - dv.responseStart)
                }
                if (M(dv.domLoading)) {
                    if (dv.domInteractive && dv.domLoading) {
                        if (dv.domInteractive < dv.domLoading) {
                            return
                        }
                        dt += "&pf_dm1=" + Math.round(dv.domInteractive - dv.domLoading)
                    }
                } else {
                    if (dv.domInteractive && dv.responseEnd) {
                        if (dv.domInteractive < dv.responseEnd) {
                            return
                        }
                        dt += "&pf_dm1=" + Math.round(dv.domInteractive - dv.responseEnd)
                    }
                }
                if (dv.domComplete && dv.domInteractive) {
                    if (dv.domComplete < dv.domInteractive) {
                        return
                    }
                    dt += "&pf_dm2=" + Math.round(dv.domComplete - dv.domInteractive)
                }
                if (dv.loadEventEnd && dv.loadEventStart) {
                    if (dv.loadEventEnd < dv.loadEventStart) {
                        return
                    }
                    dt += "&pf_onl=" + Math.round(dv.loadEventEnd - dv.loadEventStart)
                }
                return du + dt
            }

            function cy(dv, dP, dQ) {
                var dO, du = new Date(),
                    dC = Math.round(du.getTime() / 1000),
                    dz, dM, dw = 1024,
                    dV, dD, dL = aV,
                    dx = aY("ses"),
                    dJ = aY("ref"),
                    dG = aY("cvar"),
                    dH = aH(dx),
                    dN = bS(),
                    dR = ba || bT,
                    dA, dt;
                if (bs) {
                    aJ()
                }
                if (cY) {
                    return ""
                }
                var dI = a4();
                var dF = J.characterSet || J.charset;
                if (!dF || dF.toLowerCase() === "utf-8") {
                    dF = null
                }
                dA = dN[0];
                dt = dN[1];
                dz = dN[2];
                dM = dN[3];
                if (!dH) {
                    if (!bC || !dA.length) {
                        for (dO in cw) {
                            if (Object.prototype.hasOwnProperty.call(cw, dO)) {
                                dA = e(dR, cw[dO]);
                                if (dA.length) {
                                    break
                                }
                            }
                        }
                        for (dO in bN) {
                            if (Object.prototype.hasOwnProperty.call(bN, dO)) {
                                dt = e(dR, bN[dO]);
                                if (dt.length) {
                                    break
                                }
                            }
                        }
                    }
                    dV = d(bu);
                    dD = dM.length ? d(dM) : "";
                    if (dV.length && !a1(dV) && (!bC || !dD.length || a1(dD))) {
                        dM = bu
                    }
                    if (dM.length || dA.length) {
                        dz = dC;
                        dN = [dA, dt, dz, b8(dM.slice(0, dw))];
                        dn(dJ, W.JSON.stringify(dN), df, bw, c7, bY, aN)
                    }
                }
                dv += "&idsite=" + cc + "&rec=1&r=" + String(Math.random()).slice(2, 8) + "&h=" + du.getHours() + "&m=" + du.getMinutes() + "&s=" + du.getSeconds() + "&url=" + t(b8(dR)) + (bu.length ? "&urlref=" + t(b8(bu)) : "") + (ac(bF) ? "&uid=" + t(bF) : "") + "&_id=" + dI.uuid + "&_idn=" + dI.newVisitor + (dA.length ? "&_rcn=" + t(dA) : "") + (dt.length ? "&_rck=" + t(dt) : "") + "&_refts=" + dz + (String(dM).length ? "&_ref=" + t(b8(dM.slice(0, dw))) : "") + (dF ? "&cs=" + t(dF) : "") + "&send_image=0";
                var dU = cQ();
                for (dO in dU) {
                    if (Object.prototype.hasOwnProperty.call(dU, dO)) {
                        dv += "&" + dO + "=" + dU[dO]
                    }
                }
                var dT = [];
                if (dP) {
                    for (dO in dP) {
                        if (Object.prototype.hasOwnProperty.call(dP, dO) && /^dimension\d+$/.test(dO)) {
                            var dy = dO.replace("dimension", "");
                            dT.push(parseInt(dy, 10));
                            dT.push(String(dy));
                            dv += "&" + dO + "=" + t(dP[dO]);
                            delete dP[dO]
                        }
                    }
                }
                if (dP && D(dP)) {
                    dP = null
                }
                for (dO in cA) {
                    if (Object.prototype.hasOwnProperty.call(cA, dO)) {
                        dv += "&" + dO + "=" + t(cA[dO])
                    }
                }
                for (dO in bt) {
                    if (Object.prototype.hasOwnProperty.call(bt, dO)) {
                        var dE = (-1 === P(dT, dO));
                        if (dE) {
                            dv += "&dimension" + dO + "=" + t(bt[dO])
                        }
                    }
                }
                if (dP) {
                    dv += "&data=" + t(W.JSON.stringify(dP))
                } else {
                    if (at) {
                        dv += "&data=" + t(W.JSON.stringify(at))
                    }
                }

                function dB(dW, dX) {
                    var dY = W.JSON.stringify(dW);
                    if (dY.length > 2) {
                        return "&" + dX + "=" + t(dY)
                    }
                    return ""
                }
                var dS = ds(b2);
                var dK = ds(cs);
                dv += dB(dS, "cvar");
                dv += dB(dK, "e_cvar");
                if (aV) {
                    dv += dB(aV, "_cvar");
                    for (dO in dL) {
                        if (Object.prototype.hasOwnProperty.call(dL, dO)) {
                            if (aV[dO][0] === "" || aV[dO][1] === "") {
                                delete aV[dO]
                            }
                        }
                    }
                    if (bW) {
                        dn(dG, W.JSON.stringify(aV), cu, bw, c7, bY, aN)
                    }
                }
                if (a8 && bL && !bn) {
                    dv = aE(dv);
                    bn = true
                }
                if (aQ) {
                    dv += "&pv_id=" + aQ
                }
                aR(dI);
                ci();
                dv += ag(dQ, {
                    tracker: bP,
                    request: dv
                });
                if (c9.length) {
                    dv += "&" + c9
                }
                if (C(ch)) {
                    dv = ch(dv)
                }
                return dv
            }
            bX = function bd() {
                var dt = new Date();
                dt = dt.getTime();
                if (!c8) {
                    return false
                }
                if (c8 + bb <= dt) {
                    bP.ping();
                    return true
                }
                return false
            };

            function bx(dw, dv, dA, dx, dt, dD) {
                var dz = "idgoal=0",
                    du = new Date(),
                    dB = [],
                    dC, dy = String(dw).length;
                if (dy) {
                    dz += "&ec_id=" + t(dw)
                }
                dz += "&revenue=" + dv;
                if (String(dA).length) {
                    dz += "&ec_st=" + dA
                }
                if (String(dx).length) {
                    dz += "&ec_tx=" + dx
                }
                if (String(dt).length) {
                    dz += "&ec_sh=" + dt
                }
                if (String(dD).length) {
                    dz += "&ec_dt=" + dD
                }
                if (da) {
                    for (dC in da) {
                        if (Object.prototype.hasOwnProperty.call(da, dC)) {
                            if (!M(da[dC][1])) {
                                da[dC][1] = ""
                            }
                            if (!M(da[dC][2])) {
                                da[dC][2] = ""
                            }
                            if (!M(da[dC][3]) || String(da[dC][3]).length === 0) {
                                da[dC][3] = 0
                            }
                            if (!M(da[dC][4]) || String(da[dC][4]).length === 0) {
                                da[dC][4] = 1
                            }
                            dB.push(da[dC])
                        }
                    }
                    dz += "&ec_items=" + t(W.JSON.stringify(dB))
                }
                dz = cy(dz, at, "ecommerce");
                bM(dz, bQ);
                if (dy) {
                    da = {}
                }
            }

            function b4(dt, dx, dw, dv, du, dy) {
                if (String(dt).length && M(dx)) {
                    bx(dt, dx, dw, dv, du, dy)
                }
            }

            function bz(dt) {
                if (M(dt)) {
                    bx("", dt, "", "", "", "")
                }
            }

            function b6(du, dw, dv) {
                if (!bH) {
                    aQ = bm()
                }
                var dt = cy("action_name=" + t(ap(du || bp)), dw, "log");
                if (a8 && !bn) {
                    dt = aE(dt)
                }
                bM(dt, bQ, dv)
            }

            function a6(dv, du) {
                var dw, dt = "(^| )(piwik[_-]" + du + "|matomo[_-]" + du;
                if (dv) {
                    for (dw = 0; dw < dv.length; dw++) {
                        dt += "|" + dv[dw]
                    }
                }
                dt += ")( |$)";
                return new RegExp(dt)
            }

            function aZ(dt) {
                return (aI && dt && 0 === String(dt).indexOf(aI))
            }

            function cC(dx, dt, dy, du) {
                if (aZ(dt)) {
                    return 0
                }
                var dw = a6(bR, "download"),
                    dv = a6(be, "link"),
                    dz = new RegExp("\\.(" + dg.join("|") + ")([?&#]|$)", "i");
                if (dv.test(dx)) {
                    return "link"
                }
                if (du || dw.test(dx) || dz.test(dt)) {
                    return "download"
                }
                if (dy) {
                    return 0
                }
                return "link"
            }

            function ay(du) {
                var dt;
                dt = du.parentNode;
                while (dt !== null && M(dt)) {
                    if (ai.isLinkElement(du)) {
                        break
                    }
                    du = dt;
                    dt = du.parentNode
                }
                return du
            }

            function dl(dy) {
                dy = ay(dy);
                if (!ai.hasNodeAttribute(dy, "href")) {
                    return
                }
                if (!M(dy.href)) {
                    return
                }
                var dx = ai.getAttributeValueFromNode(dy, "href");
                var du = dy.pathname || cr(dy.href);
                var dz = dy.hostname || d(dy.href);
                var dA = dz.toLowerCase();
                var dv = dy.href.replace(dz, dA);
                var dw = new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto|tel):", "i");
                if (!dw.test(dv)) {
                    var dt = cC(dy.className, dv, aw(dA, du), ai.hasNodeAttribute(dy, "download"));
                    if (dt) {
                        return {
                            type: dt,
                            href: dv
                        }
                    }
                }
            }

            function aU(dt, du, dv, dw) {
                var dx = w.buildInteractionRequestParams(dt, du, dv, dw);
                if (!dx) {
                    return
                }
                return cy(dx, null, "contentInteraction")
            }

            function bh(dt, du) {
                if (!dt || !du) {
                    return false
                }
                var dv = w.findTargetNode(dt);
                if (w.shouldIgnoreInteraction(dv)) {
                    return false
                }
                dv = w.findTargetNodeNoDefault(dt);
                if (dv && !Y(dv, du)) {
                    return false
                }
                return true
            }

            function cB(dv, du, dx) {
                if (!dv) {
                    return
                }
                var dt = w.findParentContentNode(dv);
                if (!dt) {
                    return
                }
                if (!bh(dt, dv)) {
                    return
                }
                var dw = w.buildContentBlock(dt);
                if (!dw) {
                    return
                }
                if (!dw.target && dx) {
                    dw.target = dx
                }
                return w.buildInteractionRequestParams(du, dw.name, dw.piece, dw.target)
            }

            function a2(du) {
                if (!cg || !cg.length) {
                    return false
                }
                var dt, dv;
                for (dt = 0; dt < cg.length; dt++) {
                    dv = cg[dt];
                    if (dv && dv.name === du.name && dv.piece === du.piece && dv.target === du.target) {
                        return true
                    }
                }
                return false
            }

            function a3(dt) {
                return function(dx) {
                    if (!dt) {
                        return
                    }
                    var dv = w.findParentContentNode(dt);
                    var du;
                    if (dx) {
                        du = dx.target || dx.srcElement
                    }
                    if (!du) {
                        du = dt
                    }
                    if (!bh(dv, du)) {
                        return
                    }
                    if (!dv) {
                        return false
                    }
                    var dy = w.findTargetNode(dv);
                    if (!dy || w.shouldIgnoreInteraction(dy)) {
                        return false
                    }
                    var dw = dl(dy);
                    if (di && dw && dw.type) {
                        return dw.type
                    }
                    return bP.trackContentInteractionNode(du, "click")
                }
            }

            function b7(dv) {
                if (!dv || !dv.length) {
                    return
                }
                var dt, du;
                for (dt = 0; dt < dv.length; dt++) {
                    du = w.findTargetNode(dv[dt]);
                    if (du && !du.contentInteractionTrackingSetupDone) {
                        du.contentInteractionTrackingSetupDone = true;
                        ar(du, "click", a3(du))
                    }
                }
            }

            function bE(dv, dw) {
                if (!dv || !dv.length) {
                    return []
                }
                var dt, du;
                for (dt = 0; dt < dv.length; dt++) {
                    if (a2(dv[dt])) {
                        dv.splice(dt, 1);
                        dt--
                    } else {
                        cg.push(dv[dt])
                    }
                }
                if (!dv || !dv.length) {
                    return []
                }
                b7(dw);
                var dx = [];
                for (dt = 0; dt < dv.length; dt++) {
                    du = cy(w.buildImpressionRequestParams(dv[dt].name, dv[dt].piece, dv[dt].target), undefined, "contentImpressions");
                    if (du) {
                        dx.push(du)
                    }
                }
                return dx
            }

            function cH(du) {
                var dt = w.collectContent(du);
                return bE(dt, du)
            }

            function bf(du) {
                if (!du || !du.length) {
                    return []
                }
                var dt;
                for (dt = 0; dt < du.length; dt++) {
                    if (!w.isNodeVisible(du[dt])) {
                        du.splice(dt, 1);
                        dt--
                    }
                }
                if (!du || !du.length) {
                    return []
                }
                return cH(du)
            }

            function aK(dv, dt, du) {
                var dw = w.buildImpressionRequestParams(dv, dt, du);
                return cy(dw, null, "contentImpression")
            }

            function dk(dw, du) {
                if (!dw) {
                    return
                }
                var dt = w.findParentContentNode(dw);
                var dv = w.buildContentBlock(dt);
                if (!dv) {
                    return
                }
                if (!du) {
                    du = "Unknown"
                }
                return aU(du, dv.name, dv.piece, dv.target)
            }

            function cX(du, dw, dt, dv) {
                return "e_c=" + t(du) + "&e_a=" + t(dw) + (M(dt) ? "&e_n=" + t(dt) : "") + (M(dv) ? "&e_v=" + t(dv) : "") + "&ca=1"
            }

            function ax(dv, dx, dt, dw, dz, dy) {
                if (!ac(dv) || !ac(dx)) {
                    ao("Error while logging event: Parameters `category` and `action` must not be empty or filled with whitespaces");
                    return false
                }
                var du = cy(cX(dv, dx, dt, dw), dz, "event");
                bM(du, bQ, dy)
            }

            function ce(dt, dw, du, dx) {
                var dv = cy("search=" + t(dt) + (dw ? "&search_cat=" + t(dw) : "") + (M(du) ? "&search_count=" + du : ""), dx, "sitesearch");
                bM(dv, bQ)
            }

            function c1(dt, dx, dw, dv) {
                var du = cy("idgoal=" + dt + (dx ? "&revenue=" + dx : ""), dw, "goal");
                bM(du, bQ, dv)
            }

            function db(dw, dt, dA, dz, dv) {
                var dy = dt + "=" + t(b8(dw));
                var du = cB(dv, "click", dw);
                if (du) {
                    dy += "&" + du
                }
                var dx = cy(dy, dA, "link");
                bM(dx, bQ, dz)
            }

            function b0(du, dt) {
                if (du !== "") {
                    return du + dt.charAt(0).toUpperCase() + dt.slice(1)
                }
                return dt
            }

            function cm(dy) {
                var dx, dt, dw = ["", "webkit", "ms", "moz"],
                    dv;
                if (!bk) {
                    for (dt = 0; dt < dw.length; dt++) {
                        dv = dw[dt];
                        if (Object.prototype.hasOwnProperty.call(J, b0(dv, "hidden"))) {
                            if (J[b0(dv, "visibilityState")] === "prerender") {
                                dx = true
                            }
                            break
                        }
                    }
                }
                if (dx) {
                    ar(J, dv + "visibilitychange", function du() {
                        J.removeEventListener(dv + "visibilitychange", du, false);
                        dy()
                    });
                    return
                }
                dy()
            }

            function by() {
                var du = bP.getVisitorId();
                var dt = aO();
                return du + dt
            }

            function cp(dt) {
                if (!dt) {
                    return
                }
                if (!ai.hasNodeAttribute(dt, "href")) {
                    return
                }
                var du = ai.getAttributeValueFromNode(dt, "href");
                if (!du || aZ(du)) {
                    return
                }
                if (!bP.getVisitorId()) {
                    return
                }
                du = j(du, az);
                var dv = by();
                du = I(du, az, dv);
                ai.setAnyAttribute(dt, "href", du)
            }

            function br(dw) {
                var dx = ai.getAttributeValueFromNode(dw, "href");
                if (!dx) {
                    return false
                }
                dx = String(dx);
                var du = dx.indexOf("//") === 0 || dx.indexOf("http://") === 0 || dx.indexOf("https://") === 0;
                if (!du) {
                    return false
                }
                var dt = dw.pathname || cr(dw.href);
                var dv = (dw.hostname || d(dw.href)).toLowerCase();
                if (aw(dv, dt)) {
                    if (!cP(c2, O(dv))) {
                        return true
                    }
                    return false
                }
                return false
            }

            function cO(dt) {
                var du = dl(dt);
                if (du && du.type) {
                    du.href = p(du.href);
                    db(du.href, du.type, undefined, null, dt);
                    return
                }
                if (cV) {
                    dt = ay(dt);
                    if (br(dt)) {
                        cp(dt)
                    }
                }
            }

            function cD() {
                return J.all && !J.addEventListener
            }

            function c3(dt) {
                var dv = dt.which;
                var du = (typeof dt.button);
                if (!dv && du !== "undefined") {
                    if (cD()) {
                        if (dt.button & 1) {
                            dv = 1
                        } else {
                            if (dt.button & 2) {
                                dv = 3
                            } else {
                                if (dt.button & 4) {
                                    dv = 2
                                }
                            }
                        }
                    } else {
                        if (dt.button === 0 || dt.button === "0") {
                            dv = 1
                        } else {
                            if (dt.button & 1) {
                                dv = 2
                            } else {
                                if (dt.button & 2) {
                                    dv = 3
                                }
                            }
                        }
                    }
                }
                return dv
            }

            function bZ(dt) {
                switch (c3(dt)) {
                    case 1:
                        return "left";
                    case 2:
                        return "middle";
                    case 3:
                        return "right"
                }
            }

            function a7(dt) {
                return dt.target || dt.srcElement
            }

            function c4(dt) {
                return dt === "A" || dt === "AREA"
            }

            function aG(dt) {
                function du(dw) {
                    var dx = a7(dw);
                    var dy = dx.nodeName;
                    var dv = a6(bG, "ignore");
                    while (!c4(dy) && dx && dx.parentNode) {
                        dx = dx.parentNode;
                        dy = dx.nodeName
                    }
                    if (dx && c4(dy) && !dv.test(dx.className)) {
                        return dx
                    }
                }
                return function(dx) {
                    dx = dx || W.event;
                    var dy = du(dx);
                    if (!dy) {
                        return
                    }
                    var dw = bZ(dx);
                    if (dx.type === "click") {
                        var dv = false;
                        if (dt && dw === "middle") {
                            dv = true
                        }
                        if (dy && !dv) {
                            cO(dy)
                        }
                    } else {
                        if (dx.type === "mousedown") {
                            if (dw === "middle" && dy) {
                                aW = dw;
                                bI = dy
                            } else {
                                aW = bI = null
                            }
                        } else {
                            if (dx.type === "mouseup") {
                                if (dw === aW && dy === bI) {
                                    cO(dy)
                                }
                                aW = bI = null
                            } else {
                                if (dx.type === "contextmenu") {
                                    cO(dy)
                                }
                            }
                        }
                    }
                }
            }

            function av(dw, dv, dt) {
                var du = typeof dv;
                if (du === "undefined") {
                    dv = true
                }
                ar(dw, "click", aG(dv), dt);
                if (dv) {
                    ar(dw, "mouseup", aG(dv), dt);
                    ar(dw, "mousedown", aG(dv), dt);
                    ar(dw, "contextmenu", aG(dv), dt)
                }
            }

            function aX(du, dx, dy) {
                if (ck) {
                    return true
                }
                ck = true;
                var dz = false;
                var dw, dv;

                function dt() {
                    dz = true
                }
                n(function() {
                    function dA(dC) {
                        setTimeout(function() {
                            if (!ck) {
                                return
                            }
                            dz = false;
                            dy.trackVisibleContentImpressions();
                            dA(dC)
                        }, dC)
                    }

                    function dB(dC) {
                        setTimeout(function() {
                            if (!ck) {
                                return
                            }
                            if (dz) {
                                dz = false;
                                dy.trackVisibleContentImpressions()
                            }
                            dB(dC)
                        }, dC)
                    }
                    if (du) {
                        dw = ["scroll", "resize"];
                        for (dv = 0; dv < dw.length; dv++) {
                            if (J.addEventListener) {
                                J.addEventListener(dw[dv], dt, false)
                            } else {
                                W.attachEvent("on" + dw[dv], dt)
                            }
                        }
                        dB(100)
                    }
                    if (dx && dx > 0) {
                        dx = parseInt(dx, 10);
                        dA(dx)
                    }
                })
            }
            var bK = {
                enabled: true,
                requests: [],
                timeout: null,
                interval: 2500,
                sendRequests: function() {
                    var dt = this.requests;
                    this.requests = [];
                    if (dt.length === 1) {
                        bM(dt[0], bQ)
                    } else {
                        dp(dt, bQ)
                    }
                },
                canQueue: function() {
                    return !m && this.enabled
                },
                pushMultiple: function(du) {
                    if (!this.canQueue()) {
                        dp(du, bQ);
                        return
                    }
                    var dt;
                    for (dt = 0; dt < du.length; dt++) {
                        this.push(du[dt])
                    }
                },
                push: function(dt) {
                    if (!dt) {
                        return
                    }
                    if (!this.canQueue()) {
                        bM(dt, bQ);
                        return
                    }
                    bK.requests.push(dt);
                    if (this.timeout) {
                        clearTimeout(this.timeout);
                        this.timeout = null
                    }
                    this.timeout = setTimeout(function() {
                        bK.timeout = null;
                        bK.sendRequests()
                    }, bK.interval);
                    var du = "RequestQueue" + aB;
                    if (!Object.prototype.hasOwnProperty.call(b, du)) {
                        b[du] = {
                            unload: function() {
                                if (bK.timeout) {
                                    clearTimeout(bK.timeout)
                                }
                                bK.sendRequests()
                            }
                        }
                    }
                }
            };
            bo();
            this.hasConsent = function() {
                return bJ
            };
            this.getVisitorInfo = function() {
                if (!aH(aY("id"))) {
                    aR()
                }
                return cW()
            };
            this.getVisitorId = function() {
                return this.getVisitorInfo()[1]
            };
            this.getAttributionInfo = function() {
                return bS()
            };
            this.getAttributionCampaignName = function() {
                return bS()[0]
            };
            this.getAttributionCampaignKeyword = function() {
                return bS()[1]
            };
            this.getAttributionReferrerTimestamp = function() {
                return bS()[2]
            };
            this.getAttributionReferrerUrl = function() {
                return bS()[3]
            };
            this.setTrackerUrl = function(dt) {
                aI = dt
            };
            this.getTrackerUrl = function() {
                return aI
            };
            this.getMatomoUrl = function() {
                return aa(this.getTrackerUrl(), bO)
            };
            this.getPiwikUrl = function() {
                return this.getMatomoUrl()
            };
            this.addTracker = function(dv, du) {
                if (!M(dv) || null === dv) {
                    dv = this.getTrackerUrl()
                }
                var dt = new T(dv, du);
                L.push(dt);
                u.trigger("TrackerAdded", [this]);
                return dt
            };
            this.getSiteId = function() {
                return cc
            };
            this.setSiteId = function(dt) {
                b9(dt)
            };
            this.resetUserId = function() {
                bF = ""
            };
            this.setUserId = function(dt) {
                if (ac(dt)) {
                    bF = dt
                }
            };
            this.setVisitorId = function(du) {
                var dt = /[0-9A-Fa-f]{16}/g;
                if (x(du) && dt.test(du)) {
                    bU = du
                } else {
                    ao("Invalid visitorId set" + du)
                }
            };
            this.getUserId = function() {
                return bF
            };
            this.setCustomData = function(dt, du) {
                if (Z(dt)) {
                    at = dt
                } else {
                    if (!at) {
                        at = {}
                    }
                    at[dt] = du
                }
            };
            this.getCustomData = function() {
                return at
            };
            this.setCustomRequestProcessing = function(dt) {
                ch = dt
            };
            this.appendToTrackingUrl = function(dt) {
                c9 = dt
            };
            this.getRequest = function(dt) {
                return cy(dt)
            };
            this.addPlugin = function(dt, du) {
                b[dt] = du
            };
            this.setCustomDimension = function(dt, du) {
                dt = parseInt(dt, 10);
                if (dt > 0) {
                    if (!M(du)) {
                        du = ""
                    }
                    if (!x(du)) {
                        du = String(du)
                    }
                    bt[dt] = du
                }
            };
            this.getCustomDimension = function(dt) {
                dt = parseInt(dt, 10);
                if (dt > 0 && Object.prototype.hasOwnProperty.call(bt, dt)) {
                    return bt[dt]
                }
            };
            this.deleteCustomDimension = function(dt) {
                dt = parseInt(dt, 10);
                if (dt > 0) {
                    delete bt[dt]
                }
            };
            this.setCustomVariable = function(du, dt, dx, dv) {
                var dw;
                if (!M(dv)) {
                    dv = "visit"
                }
                if (!M(dt)) {
                    return
                }
                if (!M(dx)) {
                    dx = ""
                }
                if (du > 0) {
                    dt = !x(dt) ? String(dt) : dt;
                    dx = !x(dx) ? String(dx) : dx;
                    dw = [dt.slice(0, bA), dx.slice(0, bA)];
                    if (dv === "visit" || dv === 2) {
                        cN();
                        aV[du] = dw
                    } else {
                        if (dv === "page" || dv === 3) {
                            b2[du] = dw
                        } else {
                            if (dv === "event") {
                                cs[du] = dw
                            }
                        }
                    }
                }
            };
            this.getCustomVariable = function(du, dv) {
                var dt;
                if (!M(dv)) {
                    dv = "visit"
                }
                if (dv === "page" || dv === 3) {
                    dt = b2[du]
                } else {
                    if (dv === "event") {
                        dt = cs[du]
                    } else {
                        if (dv === "visit" || dv === 2) {
                            cN();
                            dt = aV[du]
                        }
                    }
                }
                if (!M(dt) || (dt && dt[0] === "")) {
                    return false
                }
                return dt
            };
            this.deleteCustomVariable = function(dt, du) {
                if (this.getCustomVariable(dt, du)) {
                    this.setCustomVariable(dt, "", "", du)
                }
            };
            this.deleteCustomVariables = function(dt) {
                if (dt === "page" || dt === 3) {
                    b2 = {}
                } else {
                    if (dt === "event") {
                        cs = {}
                    } else {
                        if (dt === "visit" || dt === 2) {
                            aV = {}
                        }
                    }
                }
            };
            this.storeCustomVariablesInCookie = function() {
                bW = true
            };
            this.setLinkTrackingTimer = function(dt) {
                bQ = dt
            };
            this.getLinkTrackingTimer = function() {
                return bQ
            };
            this.setDownloadExtensions = function(dt) {
                if (x(dt)) {
                    dt = dt.split("|")
                }
                dg = dt
            };
            this.addDownloadExtensions = function(du) {
                var dt;
                if (x(du)) {
                    du = du.split("|")
                }
                for (dt = 0; dt < du.length; dt++) {
                    dg.push(du[dt])
                }
            };
            this.removeDownloadExtensions = function(dv) {
                var du, dt = [];
                if (x(dv)) {
                    dv = dv.split("|")
                }
                for (du = 0; du < dg.length; du++) {
                    if (P(dv, dg[du]) === -1) {
                        dt.push(dg[du])
                    }
                }
                dg = dt
            };
            this.setDomains = function(dt) {
                aC = x(dt) ? [dt] : dt;
                var dx = false,
                    dv = 0,
                    du;
                for (dv; dv < aC.length; dv++) {
                    du = String(aC[dv]);
                    if (cP(c2, O(du))) {
                        dx = true;
                        break
                    }
                    var dw = cr(du);
                    if (dw && dw !== "/" && dw !== "/*") {
                        dx = true;
                        break
                    }
                }
                if (!dx) {
                    aC.push(c2)
                }
            };
            this.enableCrossDomainLinking = function() {
                cV = true
            };
            this.disableCrossDomainLinking = function() {
                cV = false
            };
            this.isCrossDomainLinkingEnabled = function() {
                return cV
            };
            this.setCrossDomainLinkingTimeout = function(dt) {
                a5 = dt
            };
            this.getCrossDomainLinkingUrlParameter = function() {
                return t(az) + "=" + t(by())
            };
            this.setIgnoreClasses = function(dt) {
                bG = x(dt) ? [dt] : dt
            };
            this.setRequestMethod = function(dt) {
                if (dt) {
                    dj = String(dt).toUpperCase()
                } else {
                    dj = cn
                }
                if (dj === "GET") {
                    this.disableAlwaysUseSendBeacon()
                }
            };
            this.setRequestContentType = function(dt) {
                cE = dt || aM
            };
            this.setGenerationTimeMs = function(dt) {
                ao("setGenerationTimeMs is no longer supported since Matomo 4. The call will be ignored. The replacement is setPagePerformanceTiming.")
            };
            this.setPagePerformanceTiming = function(dx, dz, dy, du, dA, dv) {
                var dw = {
                    pf_net: dx,
                    pf_srv: dz,
                    pf_tfr: dy,
                    pf_dm1: du,
                    pf_dm2: dA,
                    pf_onl: dv
                };
                try {
                    dw = Q(dw, M);
                    dw = B(dw);
                    ct = l(dw);
                    if (ct === "") {
                        ao("setPagePerformanceTiming() called without parameters. This function needs to be called with at least one performance parameter.");
                        return
                    }
                    bn = false;
                    bL = true
                } catch (dt) {
                    ao("setPagePerformanceTiming: " + dt.toString())
                }
            };
            this.setReferrerUrl = function(dt) {
                bu = dt
            };
            this.setCustomUrl = function(dt) {
                ba = b1(bT, dt)
            };
            this.getCurrentUrl = function() {
                return ba || bT
            };
            this.setDocumentTitle = function(dt) {
                bp = dt
            };
            this.setPageViewId = function(dt) {
                aQ = dt;
                bH = true
            };
            this.setAPIUrl = function(dt) {
                bO = dt
            };
            this.setDownloadClasses = function(dt) {
                bR = x(dt) ? [dt] : dt
            };
            this.setLinkClasses = function(dt) {
                be = x(dt) ? [dt] : dt
            };
            this.setCampaignNameKey = function(dt) {
                cw = x(dt) ? [dt] : dt
            };
            this.setCampaignKeywordKey = function(dt) {
                bN = x(dt) ? [dt] : dt
            };
            this.discardHashTag = function(dt) {
                bV = dt
            };
            this.setCookieNamePrefix = function(dt) {
                bq = dt;
                if (aV) {
                    aV = b3()
                }
            };
            this.setCookieDomain = function(dt) {
                var du = O(dt);
                if (!bs && !bD(du)) {
                    ao("Can't write cookie on domain " + dt)
                } else {
                    c7 = du;
                    bo()
                }
            };
            this.setExcludedQueryParams = function(dt) {
                co = x(dt) ? [dt] : dt
            };
            this.getCookieDomain = function() {
                return c7
            };
            this.hasCookies = function() {
                return "1" === cb()
            };
            this.setSessionCookie = function(dv, du, dt) {
                if (!dv) {
                    throw new Error("Missing cookie name")
                }
                if (!M(dt)) {
                    dt = cu
                }
                bB.push(dv);
                dn(aY(dv), du, dt, bw, c7, bY, aN)
            };
            this.getCookie = function(du) {
                var dt = aH(aY(du));
                if (dt === 0) {
                    return null
                }
                return dt
            };
            this.setCookiePath = function(dt) {
                bw = dt;
                bo()
            };
            this.getCookiePath = function(dt) {
                return bw
            };
            this.setVisitorCookieTimeout = function(dt) {
                cS = dt * 1000
            };
            this.setSessionCookieTimeout = function(dt) {
                cu = dt * 1000
            };
            this.getSessionCookieTimeout = function() {
                return cu
            };
            this.setReferralCookieTimeout = function(dt) {
                df = dt * 1000
            };
            this.setConversionAttributionFirstReferrer = function(dt) {
                bC = dt
            };
            this.setSecureCookie = function(dt) {
                if (dt && location.protocol !== "https:") {
                    ao("Error in setSecureCookie: You cannot use `Secure` on http.");
                    return
                }
                bY = dt
            };
            this.setCookieSameSite = function(dt) {
                dt = String(dt);
                dt = dt.charAt(0).toUpperCase() + dt.toLowerCase().slice(1);
                if (dt !== "None" && dt !== "Lax" && dt !== "Strict") {
                    ao("Ignored value for sameSite. Please use either Lax, None, or Strict.");
                    return
                }
                if (dt === "None") {
                    if (location.protocol === "https:") {
                        this.setSecureCookie(true)
                    } else {
                        ao("sameSite=None cannot be used on http, reverted to sameSite=Lax.");
                        dt = "Lax"
                    }
                }
                aN = dt
            };
            this.disableCookies = function() {
                bs = true;
                if (cc) {
                    aJ()
                }
            };
            this.areCookiesEnabled = function() {
                return !bs
            };
            this.setCookieConsentGiven = function() {
                if (bs && !cY) {
                    bs = false;
                    c6 = true;
                    if (cc && aA) {
                        aR();
                        var dt = cy("ping=1", null, "ping");
                        bM(dt, bQ)
                    }
                }
            };
            this.requireCookieConsent = function() {
                if (this.getRememberedCookieConsent()) {
                    return false
                }
                this.disableCookies();
                return true
            };
            this.getRememberedCookieConsent = function() {
                return aH(cL)
            };
            this.forgetCookieConsentGiven = function() {
                b5(cL, bw, c7);
                this.disableCookies()
            };
            this.rememberCookieConsentGiven = function(du) {
                if (du) {
                    du = du * 60 * 60 * 1000
                } else {
                    du = 30 * 365 * 24 * 60 * 60 * 1000
                }
                this.setCookieConsentGiven();
                var dt = new Date().getTime();
                dn(cL, dt, du, bw, c7, bY, aN)
            };
            this.deleteCookies = function() {
                aJ()
            };
            this.setDoNotTrack = function(du) {
                var dt = g.doNotTrack || g.msDoNotTrack;
                cY = du && (dt === "yes" || dt === "1");
                if (cY) {
                    this.disableCookies()
                }
            };
            this.alwaysUseSendBeacon = function() {
                c5 = true
            };
            this.disableAlwaysUseSendBeacon = function() {
                c5 = false
            };
            this.addListener = function(du, dt) {
                av(du, dt, false)
            };
            this.enableLinkTracking = function(du) {
                if (di) {
                    return
                }
                di = true;
                var dt = this;
                q(function() {
                    au = true;
                    var dv = J.body;
                    av(dv, du, true)
                })
            };
            this.enableJSErrorTracking = function() {
                if (c0) {
                    return
                }
                c0 = true;
                var dt = W.onerror;
                W.onerror = function(dy, dw, dv, dx, du) {
                    cm(function() {
                        var dz = "JavaScript Errors";
                        var dA = dw + ":" + dv;
                        if (dx) {
                            dA += ":" + dx
                        }
                        if (P(cz, dz + dA + dy) === -1) {
                            cz.push(dz + dA + dy);
                            ax(dz, dA, dy)
                        }
                    });
                    if (dt) {
                        return dt(dy, dw, dv, dx, du)
                    }
                    return false
                }
            };
            this.disablePerformanceTracking = function() {
                a8 = false
            };
            this.enableHeartBeatTimer = function(dt) {
                dt = Math.max(dt || 15, 5);
                bb = dt * 1000;
                if (c8 !== null) {
                    dq()
                }
            };
            this.disableHeartBeatTimer = function() {
                if (bb || aS) {
                    if (W.removeEventListener) {
                        W.removeEventListener("focus", bg);
                        W.removeEventListener("blur", aD);
                        W.removeEventListener("visibilitychange", a0)
                    } else {
                        if (W.detachEvent) {
                            W.detachEvent("onfocus", bg);
                            W.detachEvent("onblur", aD);
                            W.detachEvent("visibilitychange", a0)
                        }
                    }
                }
                bb = null;
                aS = false
            };
            this.killFrame = function() {
                if (W.location !== W.top.location) {
                    W.top.location = W.location
                }
            };
            this.redirectFile = function(dt) {
                if (W.location.protocol === "file:") {
                    W.location = dt
                }
            };
            this.setCountPreRendered = function(dt) {
                bk = dt
            };
            this.trackGoal = function(dt, dw, dv, du) {
                cm(function() {
                    c1(dt, dw, dv, du)
                })
            };
            this.trackLink = function(du, dt, dw, dv) {
                cm(function() {
                    db(du, dt, dw, dv)
                })
            };
            this.getNumTrackedPageViews = function() {
                return cx
            };
            this.trackPageView = function(dt, dv, du) {
                cg = [];
                cT = [];
                cz = [];
                if (R(cc)) {
                    cm(function() {
                        ad(aI, bO, cc)
                    })
                } else {
                    cm(function() {
                        cx++;
                        b6(dt, dv, du)
                    })
                }
            };
            this.disableBrowserFeatureDetection = function() {
                c6 = false
            };
            this.enableBrowserFeatureDetection = function() {
                c6 = true
            };
            this.trackAllContentImpressions = function() {
                if (R(cc)) {
                    return
                }
                cm(function() {
                    q(function() {
                        var dt = w.findContentNodes();
                        var du = cH(dt);
                        bK.pushMultiple(du)
                    })
                })
            };
            this.trackVisibleContentImpressions = function(dt, du) {
                if (R(cc)) {
                    return
                }
                if (!M(dt)) {
                    dt = true
                }
                if (!M(du)) {
                    du = 750
                }
                aX(dt, du, this);
                cm(function() {
                    n(function() {
                        var dv = w.findContentNodes();
                        var dw = bf(dv);
                        bK.pushMultiple(dw)
                    })
                })
            };
            this.trackContentImpression = function(dv, dt, du) {
                if (R(cc)) {
                    return
                }
                dv = a(dv);
                dt = a(dt);
                du = a(du);
                if (!dv) {
                    return
                }
                dt = dt || "Unknown";
                cm(function() {
                    var dw = aK(dv, dt, du);
                    bK.push(dw)
                })
            };
            this.trackContentImpressionsWithinNode = function(dt) {
                if (R(cc) || !dt) {
                    return
                }
                cm(function() {
                    if (ck) {
                        n(function() {
                            var du = w.findContentNodesWithinNode(dt);
                            var dv = bf(du);
                            bK.pushMultiple(dv)
                        })
                    } else {
                        q(function() {
                            var du = w.findContentNodesWithinNode(dt);
                            var dv = cH(du);
                            bK.pushMultiple(dv)
                        })
                    }
                })
            };
            this.trackContentInteraction = function(dv, dw, dt, du) {
                if (R(cc)) {
                    return
                }
                dv = a(dv);
                dw = a(dw);
                dt = a(dt);
                du = a(du);
                if (!dv || !dw) {
                    return
                }
                dt = dt || "Unknown";
                cm(function() {
                    var dx = aU(dv, dw, dt, du);
                    if (dx) {
                        bK.push(dx)
                    }
                })
            };
            this.trackContentInteractionNode = function(dv, du) {
                if (R(cc) || !dv) {
                    return
                }
                var dt = null;
                cm(function() {
                    dt = dk(dv, du);
                    if (dt) {
                        bK.push(dt)
                    }
                });
                return dt
            };
            this.logAllContentBlocksOnPage = function() {
                var dv = w.findContentNodes();
                var dt = w.collectContent(dv);
                var du = typeof console;
                if (du !== "undefined" && console && console.log) {
                    console.log(dt)
                }
            };
            this.trackEvent = function(du, dw, dt, dv, dy, dx) {
                cm(function() {
                    ax(du, dw, dt, dv, dy, dx)
                })
            };
            this.trackSiteSearch = function(dt, dv, du, dw) {
                cg = [];
                cm(function() {
                    ce(dt, dv, du, dw)
                })
            };
            this.setEcommerceView = function(dx, dt, dv, du) {
                cA = {};
                if (ac(dv)) {
                    dv = String(dv)
                }
                if (!M(dv) || dv === null || dv === false || !dv.length) {
                    dv = ""
                } else {
                    if (dv instanceof Array) {
                        dv = W.JSON.stringify(dv)
                    }
                }
                var dw = "_pkc";
                cA[dw] = dv;
                if (M(du) && du !== null && du !== false && String(du).length) {
                    dw = "_pkp";
                    cA[dw] = du
                }
                if (!ac(dx) && !ac(dt)) {
                    return
                }
                if (ac(dx)) {
                    dw = "_pks";
                    cA[dw] = dx
                }
                if (!ac(dt)) {
                    dt = ""
                }
                dw = "_pkn";
                cA[dw] = dt
            };
            this.getEcommerceItems = function() {
                return JSON.parse(JSON.stringify(da))
            };
            this.addEcommerceItem = function(dx, dt, dv, du, dw) {
                if (ac(dx)) {
                    da[dx] = [String(dx), dt, dv, du, dw]
                }
            };
            this.removeEcommerceItem = function(dt) {
                if (ac(dt)) {
                    dt = String(dt);
                    delete da[dt]
                }
            };
            this.clearEcommerceCart = function() {
                da = {}
            };
            this.trackEcommerceOrder = function(dt, dx, dw, dv, du, dy) {
                b4(dt, dx, dw, dv, du, dy)
            };
            this.trackEcommerceCartUpdate = function(dt) {
                bz(dt)
            };
            this.trackRequest = function(du, dw, dv, dt) {
                cm(function() {
                    var dx = cy(du, dw, dt);
                    bM(dx, bQ, dv)
                })
            };
            this.ping = function() {
                this.trackRequest("ping=1", null, null, "ping")
            };
            this.disableQueueRequest = function() {
                bK.enabled = false
            };
            this.setRequestQueueInterval = function(dt) {
                if (dt < 1000) {
                    throw new Error("Request queue interval needs to be at least 1000ms")
                }
                bK.interval = dt
            };
            this.queueRequest = function(dt) {
                cm(function() {
                    var du = cy(dt);
                    bK.push(du)
                })
            };
            this.isConsentRequired = function() {
                return cI
            };
            this.getRememberedConsent = function() {
                var dt = aH(bj);
                if (aH(cU)) {
                    if (dt) {
                        b5(bj, bw, c7)
                    }
                    return null
                }
                if (!dt || dt === 0) {
                    return null
                }
                return dt
            };
            this.hasRememberedConsent = function() {
                return !!this.getRememberedConsent()
            };
            this.requireConsent = function() {
                cI = true;
                bJ = this.hasRememberedConsent();
                if (!bJ) {
                    bs = true
                }
                y++;
                b["CoreConsent" + y] = {
                    unload: function() {
                        if (!bJ) {
                            aJ()
                        }
                    }
                }
            };
            this.setConsentGiven = function(du) {
                bJ = true;
                c6 = true;
                b5(cU, bw, c7);
                var dv, dt;
                for (dv = 0; dv < cT.length; dv++) {
                    dt = typeof cT[dv];
                    if (dt === "string") {
                        bM(cT[dv], bQ)
                    } else {
                        if (dt === "object") {
                            dp(cT[dv], bQ)
                        }
                    }
                }
                cT = [];
                if (!M(du) || du) {
                    this.setCookieConsentGiven()
                }
            };
            this.rememberConsentGiven = function(dv) {
                if (dv) {
                    dv = dv * 60 * 60 * 1000
                } else {
                    dv = 30 * 365 * 24 * 60 * 60 * 1000
                }
                var dt = true;
                this.setConsentGiven(dt);
                var du = new Date().getTime();
                dn(bj, du, dv, bw, c7, bY, aN)
            };
            this.forgetConsentGiven = function() {
                var dt = 30 * 365 * 24 * 60 * 60 * 1000;
                b5(bj, bw, c7);
                dn(cU, new Date().getTime(), dt, bw, c7, bY, aN);
                this.forgetCookieConsentGiven();
                this.requireConsent()
            };
            this.isUserOptedOut = function() {
                return !bJ
            };
            this.optUserOut = this.forgetConsentGiven;
            this.forgetUserOptOut = function() {
                this.setConsentGiven(false)
            };
            n(function() {
                setTimeout(function() {
                    bL = true
                }, 0)
            });
            u.trigger("TrackerSetup", [this]);
            u.addPlugin("TrackerVisitorIdCookie" + aB, {
                unload: function() {
                    if (!aA) {
                        aR()
                    }
                }
            })
        }

        function K() {
            return {
                push: aj
            }
        }

        function c(ay, ax) {
            var az = {};
            var av, aw;
            for (av = 0; av < ax.length; av++) {
                var at = ax[av];
                az[at] = 1;
                for (aw = 0; aw < ay.length; aw++) {
                    if (ay[aw] && ay[aw][0]) {
                        var au = ay[aw][0];
                        if (at === au) {
                            aj(ay[aw]);
                            delete ay[aw];
                            if (az[au] > 1 && au !== "addTracker" && au !== "enableLinkTracking") {
                                ao("The method " + au + ' is registered more than once in "_paq" variable. Only the last call has an effect. Please have a look at the multiple Matomo trackers documentation: https://developer.matomo.org/guides/tracking-javascript-guide#multiple-piwik-trackers')
                            }
                            az[au]++
                        }
                    }
                }
            }
            return ay
        }
        var E = ["addTracker", "forgetCookieConsentGiven", "requireCookieConsent", "disableBrowserFeatureDetection", "disableCookies", "setTrackerUrl", "setAPIUrl", "enableCrossDomainLinking", "setCrossDomainLinkingTimeout", "setSessionCookieTimeout", "setVisitorCookieTimeout", "setCookieNamePrefix", "setCookieSameSite", "setSecureCookie", "setCookiePath", "setCookieDomain", "setDomains", "setUserId", "setVisitorId", "setSiteId", "alwaysUseSendBeacon", "disableAlwaysUseSendBeacon", "enableLinkTracking", "setCookieConsentGiven", "requireConsent", "setConsentGiven", "disablePerformanceTracking", "setPagePerformanceTiming", "setExcludedQueryParams"];

        function ah(av, au) {
            var at = new T(av, au);
            L.push(at);
            _paq = c(_paq, E);
            for (H = 0; H < _paq.length; H++) {
                if (_paq[H]) {
                    aj(_paq[H])
                }
            }
            _paq = new K();
            u.trigger("TrackerAdded", [at]);
            return at
        }
        ar(W, "beforeunload", am, false);
        ar(W, "visibilitychange", function() {
            if (m) {
                return
            }
            if (J.visibilityState === "hidden") {
                ag("unload")
            }
        }, false);
        ar(W, "online", function() {
            if (M(g.serviceWorker)) {
                g.serviceWorker.ready.then(function(at) {
                    if (at && at.sync) {
                        return at.sync.register("matomoSync")
                    }
                }, function() {})
            }
        }, false);
        ar(W, "message", function(ay) {
            if (!ay || !ay.origin) {
                return
            }
            var aA, aw, au;
            var aB = d(ay.origin);
            var ax = u.getAsyncTrackers();
            for (aw = 0; aw < ax.length; aw++) {
                au = d(ax[aw].getMatomoUrl());
                if (au === aB) {
                    aA = ax[aw];
                    break
                }
            }
            if (!aA) {
                return
            }
            var av = null;
            try {
                av = JSON.parse(ay.data)
            } catch (az) {
                return
            }
            if (!av) {
                return
            }

            function at(aE) {
                var aG = J.getElementsByTagName("iframe");
                for (aw = 0; aw < aG.length; aw++) {
                    var aF = aG[aw];
                    var aC = d(aF.src);
                    if (aF.contentWindow && M(aF.contentWindow.postMessage) && aC === aB) {
                        var aD = JSON.stringify(aE);
                        aF.contentWindow.postMessage(aD, "*")
                    }
                }
            }
            if (M(av.maq_initial_value)) {
                at({
                    maq_opted_in: av.maq_initial_value && aA.hasConsent(),
                    maq_url: aA.getMatomoUrl(),
                    maq_optout_by_default: aA.isConsentRequired()
                })
            } else {
                if (M(av.maq_opted_in)) {
                    ax = u.getAsyncTrackers();
                    for (aw = 0; aw < ax.length; aw++) {
                        aA = ax[aw];
                        if (av.maq_opted_in) {
                            aA.rememberConsentGiven()
                        } else {
                            aA.forgetConsentGiven()
                        }
                    }
                    at({
                        maq_confirm_opted_in: aA.hasConsent(),
                        maq_url: aA.getMatomoUrl(),
                        maq_optout_by_default: aA.isConsentRequired()
                    })
                }
            }
        }, false);
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        u = {
            initialized: false,
            JSON: W.JSON,
            DOM: {
                addEventListener: function(aw, av, au, at) {
                    var ax = typeof at;
                    if (ax === "undefined") {
                        at = false
                    }
                    ar(aw, av, au, at)
                },
                onLoad: n,
                onReady: q,
                isNodeVisible: i,
                isOrWasNodeVisible: w.isNodeVisible
            },
            on: function(au, at) {
                if (!z[au]) {
                    z[au] = []
                }
                z[au].push(at)
            },
            off: function(av, au) {
                if (!z[av]) {
                    return
                }
                var at = 0;
                for (at; at < z[av].length; at++) {
                    if (z[av][at] === au) {
                        z[av].splice(at, 1)
                    }
                }
            },
            trigger: function(av, aw, au) {
                if (!z[av]) {
                    return
                }
                var at = 0;
                for (at; at < z[av].length; at++) {
                    z[av][at].apply(au || W, aw)
                }
            },
            addPlugin: function(at, au) {
                b[at] = au
            },
            getTracker: function(au, at) {
                if (!M(at)) {
                    at = this.getAsyncTracker().getSiteId()
                }
                if (!M(au)) {
                    au = this.getAsyncTracker().getTrackerUrl()
                }
                return new T(au, at)
            },
            getAsyncTrackers: function() {
                return L
            },
            addTracker: function(av, au) {
                var at;
                if (!L.length) {
                    at = ah(av, au)
                } else {
                    at = L[0].addTracker(av, au)
                }
                return at
            },
            getAsyncTracker: function(ax, aw) {
                var av;
                if (L && L.length && L[0]) {
                    av = L[0]
                } else {
                    return ah(ax, aw)
                }
                if (!aw && !ax) {
                    return av
                }
                if ((!M(aw) || null === aw) && av) {
                    aw = av.getSiteId()
                }
                if ((!M(ax) || null === ax) && av) {
                    ax = av.getTrackerUrl()
                }
                var au, at = 0;
                for (at; at < L.length; at++) {
                    au = L[at];
                    if (au && String(au.getSiteId()) === String(aw) && au.getTrackerUrl() === ax) {
                        return au
                    }
                }
            },
            retryMissedPluginCalls: function() {
                var au = al;
                al = [];
                var at = 0;
                for (at; at < au.length; at++) {
                    aj(au[at])
                }
            }
        };
        if (typeof define === "function" && define.amd) {
            define("piwik", [], function() {
                return u
            });
            define("matomo", [], function() {
                return u
            })
        }
        return u
    }())
}
/*!!! pluginTrackerHook */
(function() {
    function b() {
        if ("object" !== typeof _paq) {
            return false
        }
        var c = typeof _paq.length;
        if ("undefined" === c) {
            return false
        }
        return !!_paq.length
    }
    if (window && "object" === typeof window.matomoPluginAsyncInit && window.matomoPluginAsyncInit.length) {
        var a = 0;
        for (a; a < window.matomoPluginAsyncInit.length; a++) {
            if (typeof window.matomoPluginAsyncInit[a] === "function") {
                window.matomoPluginAsyncInit[a]()
            }
        }
    }
    if (window && window.piwikAsyncInit) {
        window.piwikAsyncInit()
    }
    if (window && window.matomoAsyncInit) {
        window.matomoAsyncInit()
    }
    if (!window.Matomo.getAsyncTrackers().length) {
        if (b()) {
            window.Matomo.addTracker()
        } else {
            _paq = {
                push: function(c) {
                    var d = typeof console;
                    if (d !== "undefined" && console && console.error) {
                        console.error("_paq.push() was used but Matomo tracker was not initialized before the matomo.js file was loaded. Make sure to configure the tracker via _paq.push before loading matomo.js. Alternatively, you can create a tracker via Matomo.addTracker() manually and then use _paq.push but it may not fully work as tracker methods may not be executed in the correct order.", c)
                    }
                }
            }
        }
    }
    window.Matomo.trigger("MatomoInitialized", []);
    window.Matomo.initialized = true
}());
(function() {
    var a = (typeof window.AnalyticsTracker);
    if (a === "undefined") {
        window.AnalyticsTracker = window.Matomo
    }
}());
if (typeof window.piwik_log !== "function") {
    window.piwik_log = function(c, e, g, f) {
        function b(h) {
            try {
                if (window["piwik_" + h]) {
                    return window["piwik_" + h]
                }
            } catch (i) {}
            return
        }
        var d, a = window.Matomo.getTracker(g, e);
        a.setDocumentTitle(c);
        a.setCustomData(f);
        d = b("tracker_pause");
        if (d) {
            a.setLinkTrackingTimer(d)
        }
        d = b("download_extensions");
        if (d) {
            a.setDownloadExtensions(d)
        }
        d = b("hosts_alias");
        if (d) {
            a.setDomains(d)
        }
        d = b("ignore_classes");
        if (d) {
            a.setIgnoreClasses(d)
        }
        a.trackPageView();
        if (b("install_tracker")) {
            piwik_track = function(i, j, k, h) {
                a.setSiteId(j);
                a.setTrackerUrl(k);
                a.trackLink(i, h)
            };
            a.enableLinkTracking()
        }
    }
}
/*!! @license-end */
;