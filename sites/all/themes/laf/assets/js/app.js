/*
 *
 * Build v0.2.0 - (2015-07-08, 23:24)
 * Copyright (C) 2015 Francesco Fonte
 *
 */

function liveReload(a, b) {
    var c = "//" + a + ":" + b + "/livereload.js",
        d = document.createElement("script");
    d.src = c, $("body").append(d)
}

function mediaQueriesDebug() {
    var a = !1,
        b = "mediaQueriesDebug";
    $("body").append('<div id="' + b + '"></div>'), $("#" + b).hide(), $(document).keyup(function(c) {
        return 68 == c.keyCode ? a ? ($("#" + b).hide(), a = !1, !1) : ($("#" + b).show(), a = !0, !1) : void 0
    })
}

function Micro() {
    this.init = function() {
        log("** Load script async", "debug"), log("** Micro is active", "info")
    }, this.device = {
        isMobile: function() {
            return navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i) ? !0 : !1
        },
        isTouch: function() {
            return "undefined" != typeof window.ontouchstart
        }
    }, this.html = {
        scrollTop: function(a, b) {
            return $("html, body").animate({
                scrollTop: a
            }, b), !1
        }
    }, this.string = {
        ucwords: function(a) {
            return (a + "").replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function(a) {
                return a.toUpperCase()
            })
        }
    }
}(function() {
    var a = this,
        b = a._,
        c = Array.prototype,
        d = Object.prototype,
        e = Function.prototype,
        f = c.push,
        g = c.slice,
        h = c.concat,
        i = d.toString,
        j = d.hasOwnProperty,
        k = Array.isArray,
        l = Object.keys,
        m = e.bind,
        n = function(a) {
            return a instanceof n ? a : this instanceof n ? void(this._wrapped = a) : new n(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports._ = n) : a._ = n, n.VERSION = "1.7.0";
    var o = function(a, b, c) {
        if (void 0 === b) return a;
        switch (null == c ? 3 : c) {
            case 1:
                return function(c) {
                    return a.call(b, c)
                };
            case 2:
                return function(c, d) {
                    return a.call(b, c, d)
                };
            case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e)
                };
            case 4:
                return function(c, d, e, f) {
                    return a.call(b, c, d, e, f)
                }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    n.iteratee = function(a, b, c) {
        return null == a ? n.identity : n.isFunction(a) ? o(a, b, c) : n.isObject(a) ? n.matches(a) : n.property(a)
    }, n.each = n.forEach = function(a, b, c) {
        if (null == a) return a;
        b = o(b, c);
        var d, e = a.length;
        if (e === +e)
            for (d = 0; e > d; d++) b(a[d], d, a);
        else {
            var f = n.keys(a);
            for (d = 0, e = f.length; e > d; d++) b(a[f[d]], f[d], a)
        }
        return a
    }, n.map = n.collect = function(a, b, c) {
        if (null == a) return [];
        b = n.iteratee(b, c);
        for (var d, e = a.length !== +a.length && n.keys(a), f = (e || a).length, g = Array(f), h = 0; f > h; h++) d = e ? e[h] : h, g[h] = b(a[d], d, a);
        return g
    };
    var p = "Reduce of empty array with no initial value";
    n.reduce = n.foldl = n.inject = function(a, b, c, d) {
        null == a && (a = []), b = o(b, d, 4);
        var e, f = a.length !== +a.length && n.keys(a),
            g = (f || a).length,
            h = 0;
        if (arguments.length < 3) {
            if (!g) throw new TypeError(p);
            c = a[f ? f[h++] : h++]
        }
        for (; g > h; h++) e = f ? f[h] : h, c = b(c, a[e], e, a);
        return c
    }, n.reduceRight = n.foldr = function(a, b, c, d) {
        null == a && (a = []), b = o(b, d, 4);
        var e, f = a.length !== +a.length && n.keys(a),
            g = (f || a).length;
        if (arguments.length < 3) {
            if (!g) throw new TypeError(p);
            c = a[f ? f[--g] : --g]
        }
        for (; g--;) e = f ? f[g] : g, c = b(c, a[e], e, a);
        return c
    }, n.find = n.detect = function(a, b, c) {
        var d;
        return b = n.iteratee(b, c), n.some(a, function(a, c, e) {
            return b(a, c, e) ? (d = a, !0) : void 0
        }), d
    }, n.filter = n.select = function(a, b, c) {
        var d = [];
        return null == a ? d : (b = n.iteratee(b, c), n.each(a, function(a, c, e) {
            b(a, c, e) && d.push(a)
        }), d)
    }, n.reject = function(a, b, c) {
        return n.filter(a, n.negate(n.iteratee(b)), c)
    }, n.every = n.all = function(a, b, c) {
        if (null == a) return !0;
        b = n.iteratee(b, c);
        var d, e, f = a.length !== +a.length && n.keys(a),
            g = (f || a).length;
        for (d = 0; g > d; d++)
            if (e = f ? f[d] : d, !b(a[e], e, a)) return !1;
        return !0
    }, n.some = n.any = function(a, b, c) {
        if (null == a) return !1;
        b = n.iteratee(b, c);
        var d, e, f = a.length !== +a.length && n.keys(a),
            g = (f || a).length;
        for (d = 0; g > d; d++)
            if (e = f ? f[d] : d, b(a[e], e, a)) return !0;
        return !1
    }, n.contains = n.include = function(a, b) {
        return null == a ? !1 : (a.length !== +a.length && (a = n.values(a)), n.indexOf(a, b) >= 0)
    }, n.invoke = function(a, b) {
        var c = g.call(arguments, 2),
            d = n.isFunction(b);
        return n.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c)
        })
    }, n.pluck = function(a, b) {
        return n.map(a, n.property(b))
    }, n.where = function(a, b) {
        return n.filter(a, n.matches(b))
    }, n.findWhere = function(a, b) {
        return n.find(a, n.matches(b))
    }, n.max = function(a, b, c) {
        var d, e, f = -1 / 0,
            g = -1 / 0;
        if (null == b && null != a) {
            a = a.length === +a.length ? a : n.values(a);
            for (var h = 0, i = a.length; i > h; h++) d = a[h], d > f && (f = d)
        } else b = n.iteratee(b, c), n.each(a, function(a, c, d) {
            e = b(a, c, d), (e > g || e === -1 / 0 && f === -1 / 0) && (f = a, g = e)
        });
        return f
    }, n.min = function(a, b, c) {
        var d, e, f = 1 / 0,
            g = 1 / 0;
        if (null == b && null != a) {
            a = a.length === +a.length ? a : n.values(a);
            for (var h = 0, i = a.length; i > h; h++) d = a[h], f > d && (f = d)
        } else b = n.iteratee(b, c), n.each(a, function(a, c, d) {
            e = b(a, c, d), (g > e || 1 / 0 === e && 1 / 0 === f) && (f = a, g = e)
        });
        return f
    }, n.shuffle = function(a) {
        for (var b, c = a && a.length === +a.length ? a : n.values(a), d = c.length, e = Array(d), f = 0; d > f; f++) b = n.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
        return e
    }, n.sample = function(a, b, c) {
        return null == b || c ? (a.length !== +a.length && (a = n.values(a)), a[n.random(a.length - 1)]) : n.shuffle(a).slice(0, Math.max(0, b))
    }, n.sortBy = function(a, b, c) {
        return b = n.iteratee(b, c), n.pluck(n.map(a, function(a, c, d) {
            return {
                value: a,
                index: c,
                criteria: b(a, c, d)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1
            }
            return a.index - b.index
        }), "value")
    };
    var q = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = n.iteratee(c, d), n.each(b, function(d, f) {
                var g = c(d, f, b);
                a(e, d, g)
            }), e
        }
    };
    n.groupBy = q(function(a, b, c) {
        n.has(a, c) ? a[c].push(b) : a[c] = [b]
    }), n.indexBy = q(function(a, b, c) {
        a[c] = b
    }), n.countBy = q(function(a, b, c) {
        n.has(a, c) ? a[c]++ : a[c] = 1
    }), n.sortedIndex = function(a, b, c, d) {
        c = n.iteratee(c, d, 1);
        for (var e = c(b), f = 0, g = a.length; g > f;) {
            var h = f + g >>> 1;
            c(a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, n.toArray = function(a) {
        return a ? n.isArray(a) ? g.call(a) : a.length === +a.length ? n.map(a, n.identity) : n.values(a) : []
    }, n.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : n.keys(a).length
    }, n.partition = function(a, b, c) {
        b = n.iteratee(b, c);
        var d = [],
            e = [];
        return n.each(a, function(a, c, f) {
            (b(a, c, f) ? d : e).push(a)
        }), [d, e]
    }, n.first = n.head = n.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : 0 > b ? [] : g.call(a, 0, b)
    }, n.initial = function(a, b, c) {
        return g.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    }, n.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : g.call(a, Math.max(a.length - b, 0))
    }, n.rest = n.tail = n.drop = function(a, b, c) {
        return g.call(a, null == b || c ? 1 : b)
    }, n.compact = function(a) {
        return n.filter(a, n.identity)
    };
    var r = function(a, b, c, d) {
        if (b && n.every(a, n.isArray)) return h.apply(d, a);
        for (var e = 0, g = a.length; g > e; e++) {
            var i = a[e];
            n.isArray(i) || n.isArguments(i) ? b ? f.apply(d, i) : r(i, b, c, d) : c || d.push(i)
        }
        return d
    };
    n.flatten = function(a, b) {
        return r(a, b, !1, [])
    }, n.without = function(a) {
        return n.difference(a, g.call(arguments, 1))
    }, n.uniq = n.unique = function(a, b, c, d) {
        if (null == a) return [];
        n.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = n.iteratee(c, d));
        for (var e = [], f = [], g = 0, h = a.length; h > g; g++) {
            var i = a[g];
            if (b) g && f === i || e.push(i), f = i;
            else if (c) {
                var j = c(i, g, a);
                n.indexOf(f, j) < 0 && (f.push(j), e.push(i))
            } else n.indexOf(e, i) < 0 && e.push(i)
        }
        return e
    }, n.union = function() {
        return n.uniq(r(arguments, !0, !0, []))
    }, n.intersection = function(a) {
        if (null == a) return [];
        for (var b = [], c = arguments.length, d = 0, e = a.length; e > d; d++) {
            var f = a[d];
            if (!n.contains(b, f)) {
                for (var g = 1; c > g && n.contains(arguments[g], f); g++);
                g === c && b.push(f)
            }
        }
        return b
    }, n.difference = function(a) {
        var b = r(g.call(arguments, 1), !0, !0, []);
        return n.filter(a, function(a) {
            return !n.contains(b, a)
        })
    }, n.zip = function(a) {
        if (null == a) return [];
        for (var b = n.max(arguments, "length").length, c = Array(b), d = 0; b > d; d++) c[d] = n.pluck(arguments, d);
        return c
    }, n.object = function(a, b) {
        if (null == a) return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, n.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = 0,
            e = a.length;
        if (c) {
            if ("number" != typeof c) return d = n.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        for (; e > d; d++)
            if (a[d] === b) return d;
        return -1
    }, n.lastIndexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = a.length;
        for ("number" == typeof c && (d = 0 > c ? d + c + 1 : Math.min(d, c + 1)); --d >= 0;)
            if (a[d] === b) return d;
        return -1
    }, n.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = c || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c) e[f] = a;
        return e
    };
    var s = function() {};
    n.bind = function(a, b) {
        var c, d;
        if (m && a.bind === m) return m.apply(a, g.call(arguments, 1));
        if (!n.isFunction(a)) throw new TypeError("Bind must be called on a function");
        return c = g.call(arguments, 2), d = function() {
            if (!(this instanceof d)) return a.apply(b, c.concat(g.call(arguments)));
            s.prototype = a.prototype;
            var e = new s;
            s.prototype = null;
            var f = a.apply(e, c.concat(g.call(arguments)));
            return n.isObject(f) ? f : e
        }
    }, n.partial = function(a) {
        var b = g.call(arguments, 1);
        return function() {
            for (var c = 0, d = b.slice(), e = 0, f = d.length; f > e; e++) d[e] === n && (d[e] = arguments[c++]);
            for (; c < arguments.length;) d.push(arguments[c++]);
            return a.apply(this, d)
        }
    }, n.bindAll = function(a) {
        var b, c, d = arguments.length;
        if (1 >= d) throw new Error("bindAll must be passed function names");
        for (b = 1; d > b; b++) c = arguments[b], a[c] = n.bind(a[c], a);
        return a
    }, n.memoize = function(a, b) {
        var c = function(d) {
            var e = c.cache,
                f = b ? b.apply(this, arguments) : d;
            return n.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
        };
        return c.cache = {}, c
    }, n.delay = function(a, b) {
        var c = g.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }, n.defer = function(a) {
        return n.delay.apply(n, [a, 1].concat(g.call(arguments, 1)))
    }, n.throttle = function(a, b, c) {
        var d, e, f, g = null,
            h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : n.now(), g = null, f = a.apply(d, e), g || (d = e = null)
        };
        return function() {
            var j = n.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k || k > b ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
        }
    }, n.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = n.now() - g;
            b > j && j > 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
        };
        return function() {
            f = this, e = arguments, g = n.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
        }
    }, n.wrap = function(a, b) {
        return n.partial(b, a)
    }, n.negate = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }, n.compose = function() {
        var a = arguments,
            b = a.length - 1;
        return function() {
            for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
            return d
        }
    }, n.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0
        }
    }, n.before = function(a, b) {
        var c;
        return function() {
            return --a > 0 ? c = b.apply(this, arguments) : b = null, c
        }
    }, n.once = n.partial(n.before, 2), n.keys = function(a) {
        if (!n.isObject(a)) return [];
        if (l) return l(a);
        var b = [];
        for (var c in a) n.has(a, c) && b.push(c);
        return b
    }, n.values = function(a) {
        for (var b = n.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d
    }, n.pairs = function(a) {
        for (var b = n.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
        return d
    }, n.invert = function(a) {
        for (var b = {}, c = n.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
        return b
    }, n.functions = n.methods = function(a) {
        var b = [];
        for (var c in a) n.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, n.extend = function(a) {
        if (!n.isObject(a)) return a;
        for (var b, c, d = 1, e = arguments.length; e > d; d++) {
            b = arguments[d];
            for (c in b) j.call(b, c) && (a[c] = b[c])
        }
        return a
    }, n.pick = function(a, b, c) {
        var d, e = {};
        if (null == a) return e;
        if (n.isFunction(b)) {
            b = o(b, c);
            for (d in a) {
                var f = a[d];
                b(f, d, a) && (e[d] = f)
            }
        } else {
            var i = h.apply([], g.call(arguments, 1));
            a = new Object(a);
            for (var j = 0, k = i.length; k > j; j++) d = i[j], d in a && (e[d] = a[d])
        }
        return e
    }, n.omit = function(a, b, c) {
        if (n.isFunction(b)) b = n.negate(b);
        else {
            var d = n.map(h.apply([], g.call(arguments, 1)), String);
            b = function(a, b) {
                return !n.contains(d, b)
            }
        }
        return n.pick(a, b, c)
    }, n.defaults = function(a) {
        if (!n.isObject(a)) return a;
        for (var b = 1, c = arguments.length; c > b; b++) {
            var d = arguments[b];
            for (var e in d) void 0 === a[e] && (a[e] = d[e])
        }
        return a
    }, n.clone = function(a) {
        return n.isObject(a) ? n.isArray(a) ? a.slice() : n.extend({}, a) : a
    }, n.tap = function(a, b) {
        return b(a), a
    };
    var t = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof n && (a = a._wrapped), b instanceof n && (b = b._wrapped);
        var e = i.call(a);
        if (e !== i.call(b)) return !1;
        switch (e) {
            case "[object RegExp]":
            case "[object String]":
                return "" + a == "" + b;
            case "[object Number]":
                return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a === +b
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var f = c.length; f--;)
            if (c[f] === a) return d[f] === b;
        var g = a.constructor,
            h = b.constructor;
        if (g !== h && "constructor" in a && "constructor" in b && !(n.isFunction(g) && g instanceof g && n.isFunction(h) && h instanceof h)) return !1;
        c.push(a), d.push(b);
        var j, k;
        if ("[object Array]" === e) {
            if (j = a.length, k = j === b.length)
                for (; j-- && (k = t(a[j], b[j], c, d)););
        } else {
            var l, m = n.keys(a);
            if (j = m.length, k = n.keys(b).length === j)
                for (; j-- && (l = m[j], k = n.has(b, l) && t(a[l], b[l], c, d)););
        }
        return c.pop(), d.pop(), k
    };
    n.isEqual = function(a, b) {
        return t(a, b, [], [])
    }, n.isEmpty = function(a) {
        if (null == a) return !0;
        if (n.isArray(a) || n.isString(a) || n.isArguments(a)) return 0 === a.length;
        for (var b in a)
            if (n.has(a, b)) return !1;
        return !0
    }, n.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    }, n.isArray = k || function(a) {
        return "[object Array]" === i.call(a)
    }, n.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    }, n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) {
        n["is" + a] = function(b) {
            return i.call(b) === "[object " + a + "]"
        }
    }), n.isArguments(arguments) || (n.isArguments = function(a) {
        return n.has(a, "callee")
    }), "function" != typeof /./ && (n.isFunction = function(a) {
        return "function" == typeof a || !1
    }), n.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, n.isNaN = function(a) {
        return n.isNumber(a) && a !== +a
    }, n.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" === i.call(a)
    }, n.isNull = function(a) {
        return null === a
    }, n.isUndefined = function(a) {
        return void 0 === a
    }, n.has = function(a, b) {
        return null != a && j.call(a, b)
    }, n.noConflict = function() {
        return a._ = b, this
    }, n.identity = function(a) {
        return a
    }, n.constant = function(a) {
        return function() {
            return a
        }
    }, n.noop = function() {}, n.property = function(a) {
        return function(b) {
            return b[a]
        }
    }, n.matches = function(a) {
        var b = n.pairs(a),
            c = b.length;
        return function(a) {
            if (null == a) return !c;
            a = new Object(a);
            for (var d = 0; c > d; d++) {
                var e = b[d],
                    f = e[0];
                if (e[1] !== a[f] || !(f in a)) return !1
            }
            return !0
        }
    }, n.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = o(b, c, 1);
        for (var e = 0; a > e; e++) d[e] = b(e);
        return d
    }, n.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    }, n.now = Date.now || function() {
        return (new Date).getTime()
    };
    var u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        v = n.invert(u),
        w = function(a) {
            var b = function(b) {
                    return a[b]
                },
                c = "(?:" + n.keys(a).join("|") + ")",
                d = RegExp(c),
                e = RegExp(c, "g");
            return function(a) {
                return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
            }
        };
    n.escape = w(u), n.unescape = w(v), n.result = function(a, b) {
        if (null == a) return void 0;
        var c = a[b];
        return n.isFunction(c) ? a[b]() : c
    };
    var x = 0;
    n.uniqueId = function(a) {
        var b = ++x + "";
        return a ? a + b : b
    }, n.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var y = /(.)^/,
        z = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        A = /\\|'|\r|\n|\u2028|\u2029/g,
        B = function(a) {
            return "\\" + z[a]
        };
    n.template = function(a, b, c) {
        !b && c && (b = c), b = n.defaults({}, b, n.templateSettings);
        var d = RegExp([(b.escape || y).source, (b.interpolate || y).source, (b.evaluate || y).source].join("|") + "|$", "g"),
            e = 0,
            f = "__p+='";
        a.replace(d, function(b, c, d, g, h) {
            return f += a.slice(e, h).replace(A, B), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
        }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f)
        } catch (h) {
            throw h.source = f, h
        }
        var i = function(a) {
                return g.call(this, a, n)
            },
            j = b.variable || "obj";
        return i.source = "function(" + j + "){\n" + f + "}", i
    }, n.chain = function(a) {
        var b = n(a);
        return b._chain = !0, b
    };
    var C = function(a) {
        return this._chain ? n(a).chain() : a
    };
    n.mixin = function(a) {
        n.each(n.functions(a), function(b) {
            var c = n[b] = a[b];
            n.prototype[b] = function() {
                var a = [this._wrapped];
                return f.apply(a, arguments), C.call(this, c.apply(n, a))
            }
        })
    }, n.mixin(n), n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = c[a];
        n.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], C.call(this, c)
        }
    }), n.each(["concat", "join", "slice"], function(a) {
        var b = c[a];
        n.prototype[a] = function() {
            return C.call(this, b.apply(this._wrapped, arguments))
        }
    }), n.prototype.value = function() {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return n
    })
}).call(this);
for (var method, noop = function() {}, log = function() {}, methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], lengthMethods = methods.length, console = window.console = window.console || {}; lengthMethods--;) method = methods[lengthMethods], console[method] || (console[method] = noop);
for (var config = {
        environments: ["127.0.0.1", ".loc"],
        label: "** Initialize Local Debug",
        method: "debug",
        url: window.location.href,
        host: window.location.host,
        port: 35729
    }, lengthEnv = config.environments.length; lengthEnv--;) environment = config.environments[lengthEnv], config.url.indexOf(environment) > 0 && (log = function(a, b) {
    null != b ? console[b](a) : console.log(a)
}, liveReload(config.host, config.port), mediaQueriesDebug(), log(config.label, config.method));
var micro = new Micro;
micro.init(),
    function(a) {
        jQuery.fn.extend({
            animateLeft: function(b, c, d) {
                return this.each(function() {
                    a("html, body").stop().animate({
                        scrollLeft: a(this).offset().left + b
                    }, c, d)
                })
            },
            animateTop: function(b, c, d) {
                return this.each(function() {
                    a("html, body").stop().animate({
                        scrollTop: a(this).offset().top + b
                    }, c, d)
                })
            },
            fadeToEach: function(b, c, d) {
                return this.each(function(e) {
                    a(this).delay(e * b).fadeTo(c, d)
                })
            },
            fadeInEach: function(b, c) {
                return this.each(function(d) {
                    a(this).hide().delay(d * b).fadeIn(c)
                })
            },
            fadeOutEach: function(b, c) {
                return this.reverse().each(function(d) {
                    a(this).delay(d * b).fadeOut(c)
                })
            },
            toggleAttr: function(a, b) {
                return this.attr(a, function(a, c) {
                    return c == b ? null : b
                })
            },
            toggleId: function(a) {
                return this.attr("id", function(b, c) {
                    return c == a ? null : a
                })
            },
            toggleHeight: function(b, c) {
                return this.each(function() {
                    a(this).height(a(this).height() == b ? c : b)
                })
            },
            toggleWidth: function(b, c) {
                return this.each(function() {
                    a(this).width(a(this).width() == b ? c : b)
                })
            },
            fadeToggleAttr: function(b, c, d) {
                return this.each(function() {
                    a(this).stop().fadeToggle(d).toggleAttr(b, c)
                })
            },
            fadeToggleClass: function(b, c) {
                return this.each(function() {
                    a(this).stop().fadeToggle(c).toggleClass(b)
                })
            },
            fadeToggleId: function(b, c) {
                return this.each(function() {
                    a(this).stop().fadeToggle(c).toggleId(b)
                })
            },
            slideToggleAttr: function(b, c, d, e) {
                return this.each(function() {
                    a(this).stop().slideToggle(d, e).toggleAttr(b, c)
                })
            },
            slideToggleClass: function(b, c, d) {
                return this.each(function() {
                    a(this).stop().slideToggle(c, d).toggleClass(b)
                })
            },
            slideToggleId: function(b, c, d) {
                return this.each(function() {
                    a(this).stop().slideToggle(c, d).toggleId(b)
                })
            },
            slideToggleHeight: function(b, c, d, e) {
                return this.each(function() {
                    a(this).stop().animate({
                        height: a(this).height() == b ? c : b
                    }, d, e)
                })
            },
            slideToggleWidth: function(b, c, d, e) {
                return this.each(function() {
                    a(this).stop().animate({
                        width: a(this).width() == b ? c : b
                    }, d, e)
                })
            },
            showEach: function(b) {
                return this.each(function(c) {
                    a(this).hide().delay(c * b).show(0)
                })
            },
            hideEach: function(b) {
                return this.reverse().each(function(c) {
                    a(this).delay(c * b).hide(0)
                })
            },
            nextLoop: function(a) {
                return this.next(a).length ? this.next(a) : this.prevAll(a).last()
            },
            prevLoop: function(a) {
                return this.prev(a).length ? this.prev(a) : this.nextAll(a).last()
            },
            scrollBottom: function() {
                return a(document).height() - this.scrollTop() - this.height()
            },
            scrollRight: function() {
                return a(document).width() - this.scrollLeft() - this.width()
            },
            removeAll: function(b, c) {
                return this.each(function() {
                    a(this).removeClass(b).removeAttr(c)
                })
            },
            resizeEnd: function(a, b) {
                var c;
                return this.resize(function() {
                    clearTimeout(c), c = setTimeout(function() {
                        a.call(this)
                    }, b)
                })
            },
            duplicate: function(b) {
                for (var c = [], d = 0; b > d; d++) a.merge(c, this.clone(this).get());
                return this.pushStack(c)
            },
            outerHTML: function() {
                return this.length ? this[0].outerHTML : this
            },
            reverse: [].reverse
        })
    }(jQuery),
    function() {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1
        }

        function c(a) {
            return function() {
                return this[a].apply(this, arguments)
            }
        }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if ("object" == typeof a) {
                b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
            } else b = d[a] || (d[a] = []);
            return b
        }, d.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
            return c
        }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c
        }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
            return this
        }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
            return this.addListener(a, {
                listener: b,
                once: !0
            })
        }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
            return this.getListeners(a), this
        }, d.defineEvents = function(a) {
            for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
            return this
        }, d.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this
        }, d.off = c("removeListener"), d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b)
        }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b)
        }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this
        }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if ("object" === c)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this
        }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this
        }, d.trigger = c("emitEvent"), d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b)
        }, d.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this
        }, d._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, d._getEvents = function() {
            return this._events || (this._events = {})
        }, a.noConflict = function() {
            return e.EventEmitter = f, a
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a
        }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
    }.call(this),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c
        }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function() {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
    }(this),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
    }(window, function(a, b, c) {
        function d(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function e(a) {
            return "[object Array]" === m.call(a)
        }

        function f(a) {
            var b = [];
            if (e(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0, d = a.length; d > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function g(a, b, c) {
            if (!(this instanceof g)) return new g(a, b);
            "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
            var e = this;
            setTimeout(function() {
                e.check()
            })
        }

        function h(a) {
            this.img = a
        }

        function i(a) {
            this.src = a, n[a] = this
        }
        var j = a.jQuery,
            k = a.console,
            l = "undefined" != typeof k,
            m = Object.prototype.toString;
        g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
            this.images = [];
            for (var a = 0, b = this.elements.length; b > a; a++) {
                var c = this.elements[a];
                "IMG" === c.nodeName && this.addImage(c);
                var d = c.nodeType;
                if (d && (1 === d || 9 === d || 11 === d))
                    for (var e = c.querySelectorAll("img"), f = 0, g = e.length; g > f; f++) {
                        var h = e[f];
                        this.addImage(h)
                    }
            }
        }, g.prototype.addImage = function(a) {
            var b = new h(a);
            this.images.push(b)
        }, g.prototype.check = function() {
            function a(a, e) {
                return b.options.debug && l && k.log("confirm", a, e), b.progress(a), c++, c === d && b.complete(), !0
            }
            var b = this,
                c = 0,
                d = this.images.length;
            if (this.hasAnyBroken = !1, !d) return void this.complete();
            for (var e = 0; d > e; e++) {
                var f = this.images[e];
                f.on("confirm", a), f.check()
            }
        }, g.prototype.progress = function(a) {
            this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
            var b = this;
            setTimeout(function() {
                b.emit("progress", b, a), b.jqDeferred && b.jqDeferred.notify && b.jqDeferred.notify(b, a)
            })
        }, g.prototype.complete = function() {
            var a = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var b = this;
            setTimeout(function() {
                if (b.emit(a, b), b.emit("always", b), b.jqDeferred) {
                    var c = b.hasAnyBroken ? "reject" : "resolve";
                    b.jqDeferred[c](b)
                }
            })
        }, j && (j.fn.imagesLoaded = function(a, b) {
            var c = new g(this, a, b);
            return c.jqDeferred.promise(j(this))
        }), h.prototype = new b, h.prototype.check = function() {
            var a = n[this.img.src] || new i(this.img.src);
            if (a.isConfirmed) return void this.confirm(a.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var b = this;
            a.on("confirm", function(a, c) {
                return b.confirm(a.isLoaded, c), !0
            }), a.check()
        }, h.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emit("confirm", this, b)
        };
        var n = {};
        return i.prototype = new b, i.prototype.check = function() {
            if (!this.isChecked) {
                var a = new Image;
                c.bind(a, "load", this), c.bind(a, "error", this), a.src = this.src, this.isChecked = !0
            }
        }, i.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, i.prototype.onload = function(a) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(a)
        }, i.prototype.onerror = function(a) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(a)
        }, i.prototype.confirm = function(a, b) {
            this.isConfirmed = !0, this.isLoaded = a, this.emit("confirm", this, b)
        }, i.prototype.unbindProxyEvents = function(a) {
            c.unbind(a.target, "load", this), c.unbind(a.target, "error", this)
        }, g
    });
var curtainsSection, lastScrollTop;
! function(a, b, c, d) {
    function e(b, c) {
        this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this._ignoreHashChange = !1, this.init()
    }
    var f = "curtain",
        g = {
            scrollSpeed: 400,
            bodyHeight: 0,
            linksArray: [],
            mobile: !1,
            scrollButtons: {},
            controls: null,
            curtainLinks: ".curtain-links",
            enableKeys: !0,
            easing: "swing",
            disabled: !1,
            nextSlide: function() {},
            prevSlide: function() {}
        };
    e.prototype = {
        init: function() {
            var d = this;
            this.$element = a(this.element), this.$li = a(this.element).find(">li"), this.$liLength = this.$li.length, d.$windowHeight = a(b).height(), d.$elDatas = {}, d.$document = a(c), d.$window = a(b), d.webkit = navigator.userAgent.indexOf("Chrome") > -1 || navigator.userAgent.indexOf("Safari") > -1, a.Android = navigator.userAgent.match(/Android/i), a.iPhone = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i), a.iPad = navigator.userAgent.match(/iPad/i), a.iOs4 = /OS [1-4]_[0-9_]+ like Mac OS X/i.test(navigator.userAgent), (a.iPhone || a.iPad || a.Android || d.options.disabled) && (log("mobile?"), this.options.mobile = !0, this.$li.css({
                position: "relative"
            }), this.$element.find(".fixed").css({
                position: "absolute"
            })), this.scrollEl = this.options.mobile ? this.$element : a(a.mozilla || a.msie ? "html" : "body"), d.options.controls && (d.options.scrollButtons.up = a(d.options.controls).find('[href="#up"]'), d.options.scrollButtons.down = a(d.options.controls).find('[href="#down"]'), a.iOs4 || !a.iPhone && !a.iPad || (d.$element.css({
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                "-webkit-overflow-scrolling": "touch",
                overflow: "auto"
            }), a(d.options.controls).css({
                position: "absolute"
            })));
            var e = function() {
                d.setDimensions(), d.$li.eq(0).addClass("current"), d.setCache(), d.options.mobile || d.$li.eq(1).length && d.$li.eq(1).nextAll().addClass("hidden"), d.setEvents(), d.setLinks(), d.isHashIsOnList(location.hash.substring(1))
            };
            d.$element.find("img").length ? d.imageLoaded(e) : e()
        },
        scrollToPosition: function(b) {
            var c = null,
                e = this;
            if (e.scrollEl.is(":animated")) return !1;
            if ("up" === b || "down" == b) {
                var f = "up" === b ? e.$current.prev() : e.$current.next();
                if (e.$step) {
                    e.$current.find(".current-step").length || e.$step.eq(0).addClass("current-step");
                    var g = "up" === b ? e.$current.find(".current-step").prev(".step") : e.$current.find(".current-step").next(".step");
                    g.length && (c = e.options.mobile ? g.position().top + e.$elDatas[e.$current.index()]["data-position"] : g.position().top + e.$elDatas[e.$current.index()]["data-position"])
                }
                c = c || (e.$elDatas[f.index()] === d ? null : e.$elDatas[f.index()]["data-position"]), null !== c && e.scrollEl.animate({
                    scrollTop: c
                }, e.options.scrollSpeed, e.options.easing)
            } else if ("top" === b) e.scrollEl.animate({
                scrollTop: 0
            }, e.options.scrollSpeed, e.options.easing);
            else if ("bottom" === b) e.scrollEl.animate({
                scrollTop: e.options.bodyHeight
            }, e.options.scrollSpeed, e.options.easing);
            else {
                var h = a("#" + b).index(),
                    i = 4 * Math.abs(e.currentIndex - h) * this.options.scrollSpeed / e.$liLength;
                e.scrollEl.animate({
                    scrollTop: e.$elDatas[h]["data-position"] || null
                }, i <= e.options.scrollSpeed ? e.options.scrollSpeed : i, this.options.easing)
            }
        },
        scrollEvent: function() {
            var b = this,
                c = b.$document.scrollTop();
            if (c < b.currentP && b.currentIndex > 0) b._ignoreHashChange = !0, b.$current.prev().attr("id") && b.setHash(b.$current.prev().attr("id")), b.$current.removeClass("current").css(b.webkit ? {
                "-webkit-transform": "translateY(0px) translateZ(0)"
            } : {
                marginTop: 0
            }).nextAll().addClass("hidden").end().prev().addClass("current").removeClass("hidden"), b.setCache(), b.options.prevSlide();
            else if (c < b.currentP + b.currentHeight) {
                if (b.$current.css(b.webkit ? {
                        "-webkit-transform": "translateY(" + -(c - b.currentP) + "px) translateZ(0)"
                    } : {
                        marginTop: -(c - b.currentP)
                    }), b.$fixedLength) {
                    {
                        parseInt(b.$fixed.attr("data-top"), 10)
                    }
                    b.$fixed.css(c + b.$windowHeight >= b.currentP + b.currentHeight ? {
                        position: "fixed"
                    } : {
                        position: "absolute",
                        marginTop: Math.abs(c - b.currentP)
                    })
                }
                b.$stepLength && a.each(b.$step, function(d, e) {
                    return a(e).position().top + b.currentP <= c + 5 && a(e).position().top + b.currentP + a(e).height() >= c + 5 && !a(e).hasClass("current-step") ? (b.$step.removeClass("current-step"), a(e).addClass("current-step"), !1) : void 0
                }), b.parallaxBg && b.$current.css({
                    "background-position-y": c * b.parallaxBg
                }), b.$fade.length && b.$fade.css({
                    opacity: 1 - c / b.$fade.attr("data-fade")
                }), b.$slowScroll.length && b.$slowScroll.css({
                    "margin-top": c / b.$slowScroll.attr("data-slow-scroll")
                })
            } else b._ignoreHashChange = !0, b.$current.next().attr("id") && b.setHash(b.$current.next().attr("id")), b.$current.removeClass("current").addClass("hidden").next("li").addClass("current").next("li").removeClass("hidden"), b.setCache(), b.options.nextSlide()
        },
        scrollMobileEvent: function() {
            var c = this,
                d = a(b).scrollTop();
            c._ignoreHashChange = !0;
            var e = c.$current.attr("data-position"),
                f = c.$current.attr("data-height"),
                g = parseInt(f) + parseInt(e) - 100;
            d > lastScrollTop ? ((d > g || d == g) && (c.$current.removeClass("current").next().addClass("current"), c.setHash(c.$current.next().attr("id"))), c.options.nextSlide()) : (g - d > f && (c.$current.removeClass("current").prev().addClass("current"), c.setHash(c.$current.prev().attr("id"))), c.options.prevSlide()), lastScrollTop = d
        },
        setDimensions: function() {
            var b = this,
                c = 0,
                d = !1,
                e = null;
            b.$windowHeight = b.$window.height(), this.$li.each(function(f) {
                var g = a(this);
                if (d = g.hasClass("cover"), d ? (g.css({
                        height: b.$windowHeight,
                        zIndex: 999 - f
                    }).attr("data-height", b.$windowHeight).attr("data-position", c), b.$elDatas[g.index()] = {
                        "data-height": parseInt(b.$windowHeight, 10),
                        "data-position": parseInt(c, 10)
                    }, c += b.$windowHeight) : (e = g.outerHeight() <= b.$windowHeight ? b.$windowHeight : g.outerHeight(), g.css({
                        zIndex: 999 - f
                    }).attr("data-height", e).attr("data-position", c), b.$elDatas[g.index()] = {
                        "data-height": parseInt(e, 10),
                        "data-position": parseInt(c, 10)
                    }, c += e), g.find(".fixed").length) {
                    var h = g.find(".fixed").css("top");
                    g.find(".fixed").attr("data-top", h)
                }
            }), this.options.mobile || this.setBodyHeight()
        },
        setEvents: function() {
            var c = this;
            a(b).on("resize", function() {
                c.setDimensions()
            }), c.options.mobile ? (lastScrollTop = 0, a(".cover").addClass("current"), a(b).on("scroll", function() {
                c.$current = a(".curtains").find(".current"), c.scrollMobileEvent()
            })) : a(b).on("scroll", function() {
                c.scrollEvent()
            }), c.options.enableKeys && c.$document.on("keydown", function(a) {
                return 38 === a.keyCode || 37 === a.keyCode ? (c.scrollToPosition("up"), a.preventDefault(), !1) : 40 === a.keyCode || 39 === a.keyCode ? (c.scrollToPosition("down"), a.preventDefault(), !1) : 36 === a.keyCode ? (c.scrollToPosition("top"), a.preventDefault(), !1) : 35 === a.keyCode ? (c.scrollToPosition("bottom"), a.preventDefault(), !1) : void 0
            }), c.options.scrollButtons && (c.options.scrollButtons.up && c.options.scrollButtons.up.on("click", function(a) {
                a.preventDefault(), c.scrollToPosition("up")
            }), c.options.scrollButtons.down && c.options.scrollButtons.down.on("click", function(a) {
                a.preventDefault(), c.scrollToPosition("down")
            })), c.options.curtainLinks && a(c.options.curtainLinks).on("click", function(b) {
                b.preventDefault();
                var d = a(this).attr("href");
                if (!c.isHashIsOnList(d.substring(1)) && e) return !1;
                var e = c.$elDatas[a(d).index()]["data-position"] || null;
                return e && c.scrollEl.animate({
                    scrollTop: e
                }, c.options.scrollSpeed, c.options.easing), !1
            }), c.$window.on("hashchange", function() {
                c._ignoreHashChange === !1 && c.isHashIsOnList(location.hash.substring(1)), c._ignoreHashChange = !1
            })
        },
        setBodyHeight: function() {
            var b = 0;
            for (var c in this.$elDatas) {
                var d = this.$elDatas[c];
                b += d["data-height"]
            }
            this.options.bodyHeight = b, a("body").height(b)
        },
        setLinks: function() {
            var b = this;
            this.$li.each(function() {
                var c = a(this).attr("id") || 0;
                b.options.linksArray.push(c)
            })
        },
        setHash: function(b) {
            el = a("[href=#" + b + "]"), el.parent().siblings("li").removeClass("active"), el.parent().addClass("active"), curtainsSection = b
        },
        setCache: function() {
            var a = this;
            a.$current = a.$element.find(".current"), a.$fixed = a.$current.find(".fixed"), a.$fixedLength = a.$fixed.length, a.$step = a.$current.find(".step"), a.$stepLength = a.$step.length, a.currentIndex = a.$current.index(), a.currentP = a.$elDatas[a.currentIndex]["data-position"], a.currentHeight = a.$elDatas[a.currentIndex]["data-height"], a.parallaxBg = a.$current.attr("data-parallax-background"), a.$fade = a.$current.find("[data-fade]"), a.$slowScroll = a.$current.find("[data-slow-scroll]")
        },
        isHashIsOnList: function(b) {
            var c = this;
            a.each(c.options.linksArray, function(a, d) {
                return d === b ? (c.scrollToPosition(b), !1) : void 0
            })
        },
        readyElement: function(a, b) {
            var c = setInterval(function() {
                a.length && (b(a.length), clearInterval(c))
            }, 60)
        },
        imageLoaded: function(b) {
            var c = this,
                e = c.$element.find("img"),
                f = e.length,
                g = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            e.bind("load.imgloaded", function() {
                (--f <= 0 && this.src !== g || a(this).not(":visible")) && (e.unbind("load.imgloaded"), b.call(e, this))
            }).each(function() {
                if (this.complete || this.complete === d) {
                    var a = this.src;
                    this.src = g, this.src = a
                }
            })
        }
    }, a.fn[f] = function(b) {
        return this.each(function() {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        })
    }
}(jQuery, window, document),
function(a) {
    a.fn.onScreen = function(b) {
        var c = a.extend({
            container: window,
            direction: "vertical",
            toggleClass: null,
            doIn: null,
            doOut: null,
            tolerance: 0,
            throttle: null,
            lazyAttr: null,
            lazyPlaceholder: "data:image/gif;base64,R0lGODlhEAAFAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAAACwAAAAAEAAFAAACCIyPqcvtD00BACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIQTGCiywKPmjxUNhjtMlWrAgAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFEiyUf6wCEBHvLPemIHdTzCMDegkACH5BAkJAAYALAAAAAAQAAUAgoSChLS2tIyKjLy+vIyOjMTCxP///wAAAAMUWCQ09jAaAiqQmFosdeXRUAkBCCUAIfkECQkACAAsAAAAABAABQCDvLq83N7c3Nrc9Pb0xMLE/P78vL68/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCEwkCnKGbegvQn4RjGMx8F1HxBi5Il4oEiap2DcVYlpZwQAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCDwnCGHEcIMxPn4VAGMQNBx0zQEZHkiYNiap5RaBKG9EQAh+QQJCQAJACwAAAAAEAAFAIOEgoTMysyMjozs6uyUlpSMiozMzsyUkpTs7uz///8AAAAAAAAAAAAAAAAAAAAAAAAEGTBJiYgoBM09DfhAwHEeKI4dGKLTIHzCwEUAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCAQSTmMEGaco8+UBSACwWBqHxKOJYd+q1iaXFoRRMbtEQAh+QQJCQAIACwAAAAAEAAFAIO8urzc3tzc2tz09vTEwsT8/vy8vrz8+vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAEIhBJWc6wJZAtJh3gcRBAaXiIZV2kiRbgNZbA6VXiUAhGL0QAIfkECQkABgAsAAAAABAABQCChIKEtLa0jIqMvL68jI6MxMLE////AAAAAxRoumxFgoxGCbiANos145e3DJcQJAAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFFi6XCQwtCmAHbPVm9kGWKcEQxkkACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIRlI8SAZsPYnuJMUCRnNksWwAAOw==",
            debug: !1
        }, b);
        return this.each(function() {
            function b() {
                return w ? s < o - c.tolerance && j < s + q - c.tolerance : s < m - c.tolerance && s > -q + c.tolerance
            }

            function d() {
                return w ? s + (q - c.tolerance) < j || s > o - c.tolerance : s > m - c.tolerance || -q + c.tolerance > s
            }

            function e() {
                return w ? t < p - c.tolerance && k < t + r - c.tolerance : t < n - c.tolerance && t > -r + c.tolerance
            }

            function f() {
                return w ? t + (r - c.tolerance) < k || t > p - c.tolerance : t > n - c.tolerance || -r + c.tolerance > t
            }

            function g() {
                return u ? !1 : "horizontal" === c.direction ? e() : b()
            }

            function h() {
                return u ? "horizontal" === c.direction ? f() : d() : !1
            }

            function i(a, b, c) {
                var d, e, f;
                return function() {
                    e = arguments, f = !0, c = c || this, d || ! function() {
                        f ? (a.apply(c, e), f = !1, d = setTimeout(arguments.callee, b)) : d = null
                    }()
                }
            }
            var j, k, l, m, n, o, p, q, r, s, t, u = !1,
                v = a(this),
                w = a.isWindow(c.container),
                x = function() {
                    if (w || "static" !== a(c.container).css("position") || a(c.container).css("position", "relative"), l = a(c.container), m = l.height(), n = l.width(), o = l.scrollTop() + m, p = l.scrollLeft() + n, q = v.outerHeight(!0), r = v.outerWidth(!0), w) {
                        var b = v.offset();
                        s = b.top, t = b.left
                    } else {
                        var d = v.position();
                        s = d.top, t = d.left
                    }
                    if (j = l.scrollTop(), k = l.scrollLeft(), c.debug && (console.log("Container: " + c.container + "\nWidth: " + m + "\nHeight: " + n + "\nBottom: " + o + "\nRight: " + p), console.log("Matched element: " + (void 0 !== v.attr("class") ? v.prop("tagName").toLowerCase() + "." + v.attr("class") : v.prop("tagName").toLowerCase()) + "\nLeft: " + t + "\nTop: " + s + "\nWidth: " + r + "\nHeight: " + q)), g()) {
                        if (c.toggleClass && v.addClass(c.toggleClass), a.isFunction(c.doIn) && c.doIn.call(v[0]), c.lazyAttr && "IMG" === v.prop("tagName")) {
                            var e = v.attr(c.lazyAttr);
                            e !== v.prop("src") && (v.css({
                                background: "url(" + c.lazyPlaceholder + ") 50% 50% no-repeat",
                                minHeight: "5px",
                                minWidth: "16px"
                            }), v.prop("src", e).load(function() {
                                a(this).css({
                                    background: "none"
                                })
                            }))
                        }
                        u = !0
                    } else h() && (c.toggleClass && v.removeClass(c.toggleClass), a.isFunction(c.doOut) && c.doOut.call(v[0]), u = !1)
                };
            window.location.hash ? i(x, 50) : x(), c.throttle && (x = i(x, c.throttle)), a(c.container).on("scroll resize", x), w || a(window).on("resize", x), "object" == typeof module && module && "object" == typeof module.exports ? module.exports = jQuery : "function" == typeof define && define.amd && define("jquery-onscreen", [], function() {
                return jQuery
            })
        })
    }
}(jQuery),
function(a) {
    var b = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        keyboardEnabled: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        onSliderLoad: function() {
            return !0
        },
        onSlideBefore: function() {
            return !0
        },
        onSlideAfter: function() {
            return !0
        },
        onSlideNext: function() {
            return !0
        },
        onSlidePrev: function() {
            return !0
        },
        onSliderResize: function() {
            return !0
        }
    };
    a.fn.bxSlider = function(c) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            a(this).bxSlider(c)
        }), this;
        var d = {},
            e = this,
            f = a(window).width(),
            g = a(window).height(),
            h = function() {
                d.settings = a.extend({}, b, c), d.settings.slideWidth = parseInt(d.settings.slideWidth), d.children = e.children(d.settings.slideSelector), d.children.length < d.settings.minSlides && (d.settings.minSlides = d.children.length), d.children.length < d.settings.maxSlides && (d.settings.maxSlides = d.children.length), d.settings.randomStart && (d.settings.startSlide = Math.floor(Math.random() * d.children.length)), d.active = {
                    index: d.settings.startSlide
                }, d.carousel = d.settings.minSlides > 1 || d.settings.maxSlides > 1 ? !0 : !1, d.carousel && (d.settings.preloadImages = "all"), d.minThreshold = d.settings.minSlides * d.settings.slideWidth + (d.settings.minSlides - 1) * d.settings.slideMargin, d.maxThreshold = d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin, d.working = !1, d.controls = {}, d.interval = null, d.animProp = "vertical" === d.settings.mode ? "top" : "left", d.usingCSS = d.settings.useCSS && "fade" !== d.settings.mode && function() {
                    var a = document.createElement("div"),
                        b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var c in b)
                        if (void 0 !== a.style[b[c]]) return d.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), d.animProp = "-" + d.cssPrefix + "-transform", !0;
                    return !1
                }(), "vertical" === d.settings.mode && (d.settings.maxSlides = d.settings.minSlides), e.data("origStyle", e.attr("style")), e.children(d.settings.slideSelector).each(function() {
                    a(this).data("origStyle", a(this).attr("style"))
                }), j()
            },
            j = function() {
                e.wrap('<div class="' + d.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), d.viewport = e.parent(), d.loader = a('<div class="bx-loading" />'), d.viewport.prepend(d.loader), e.css({
                    width: "horizontal" === d.settings.mode ? 1e3 * d.children.length + 215 + "%" : "auto",
                    position: "absolute"
                }), d.usingCSS && d.settings.easing ? e.css("-" + d.cssPrefix + "-transition-timing-function", d.settings.easing) : d.settings.easing || (d.settings.easing = "swing");
                p();
                d.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), d.viewport.parent().css({
                    maxWidth: n()
                }), d.settings.pager || d.settings.controls || d.viewport.parent().css({
                    margin: "0 auto 0px"
                }), d.children.css({
                    "float": "horizontal" === d.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }), d.children.css("width", o()), "horizontal" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginRight", d.settings.slideMargin), "vertical" === d.settings.mode && d.settings.slideMargin > 0 && d.children.css("marginBottom", d.settings.slideMargin), "fade" === d.settings.mode && (d.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), d.children.eq(d.settings.startSlide).css({
                    zIndex: d.settings.slideZIndex,
                    display: "block"
                })), d.controls.el = a('<div class="bx-controls" />'), d.settings.captions && y(), d.active.last = d.settings.startSlide === q() - 1, d.settings.video && e.fitVids();
                var b = d.children.eq(d.settings.startSlide);
                ("all" === d.settings.preloadImages || d.settings.ticker) && (b = d.children), d.settings.ticker ? d.settings.pager = !1 : (d.settings.controls && w(), d.settings.auto && d.settings.autoControls && x(), d.settings.pager && v(), (d.settings.controls || d.settings.autoControls || d.settings.pager) && d.viewport.after(d.controls.el)), k(b, l)
            },
            k = function(b, c) {
                var d = b.find('img:not([src=""]), iframe').length;
                if (0 === d) return void c();
                var e = 0;
                b.find('img:not([src=""]), iframe').each(function() {
                    a(this).one("load error", function() {
                        ++e === d && c()
                    }).each(function() {
                        this.complete && a(this).load()
                    })
                })
            },
            l = function() {
                if (d.settings.infiniteLoop && "fade" !== d.settings.mode && !d.settings.ticker) {
                    var b = "vertical" === d.settings.mode ? d.settings.minSlides : d.settings.maxSlides,
                        c = d.children.slice(0, b).clone(!0).addClass("bx-clone"),
                        f = d.children.slice(-b).clone(!0).addClass("bx-clone");
                    e.append(c).prepend(f)
                }
                d.loader.remove(), s(), "vertical" === d.settings.mode && (d.settings.adaptiveHeight = !0), d.viewport.height(m()), e.redrawSlider(), d.settings.onSliderLoad(d, d.active.index), d.initialized = !0, d.settings.responsive && a(window).bind("resize", S), d.settings.auto && d.settings.autoStart && (q() > 1 || d.settings.autoSlideForOnePage) && I(), d.settings.ticker && J(), d.settings.pager && E(d.settings.startSlide), d.settings.controls && H(), d.settings.touchEnabled && !d.settings.ticker && N(), d.settings.keyboardEnabled && !d.settings.ticker && a(document).keydown(M)
            },
            m = function() {
                var b = 0,
                    c = a();
                if ("vertical" === d.settings.mode || d.settings.adaptiveHeight)
                    if (d.carousel) {
                        var e = 1 === d.settings.moveSlides ? d.active.index : d.active.index * r();
                        for (c = d.children.eq(e), i = 1; i <= d.settings.maxSlides - 1; i++) c = c.add(e + i >= d.children.length ? d.children.eq(i - 1) : d.children.eq(e + i))
                    } else c = d.children.eq(d.active.index);
                else c = d.children;
                return "vertical" === d.settings.mode ? (c.each(function() {
                    b += a(this).outerHeight()
                }), d.settings.slideMargin > 0 && (b += d.settings.slideMargin * (d.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function() {
                    return a(this).outerHeight(!1)
                }).get()), "border-box" === d.viewport.css("box-sizing") ? b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom")) + parseFloat(d.viewport.css("border-top-width")) + parseFloat(d.viewport.css("border-bottom-width")) : "padding-box" === d.viewport.css("box-sizing") && (b += parseFloat(d.viewport.css("padding-top")) + parseFloat(d.viewport.css("padding-bottom"))), b
            },
            n = function() {
                var a = "100%";
                return d.settings.slideWidth > 0 && (a = "horizontal" === d.settings.mode ? d.settings.maxSlides * d.settings.slideWidth + (d.settings.maxSlides - 1) * d.settings.slideMargin : d.settings.slideWidth), a
            },
            o = function() {
                var a = d.settings.slideWidth,
                    b = d.viewport.width();
                return 0 === d.settings.slideWidth || d.settings.slideWidth > b && !d.carousel || "vertical" === d.settings.mode ? a = b : d.settings.maxSlides > 1 && "horizontal" === d.settings.mode && (b > d.maxThreshold || b < d.minThreshold && (a = (b - d.settings.slideMargin * (d.settings.minSlides - 1)) / d.settings.minSlides)), a
            },
            p = function() {
                var a = 1;
                if ("horizontal" === d.settings.mode && d.settings.slideWidth > 0)
                    if (d.viewport.width() < d.minThreshold) a = d.settings.minSlides;
                    else if (d.viewport.width() > d.maxThreshold) a = d.settings.maxSlides;
                else {
                    var b = d.children.first().width() + d.settings.slideMargin;
                    a = Math.floor((d.viewport.width() + d.settings.slideMargin) / b)
                } else "vertical" === d.settings.mode && (a = d.settings.minSlides);
                return a
            },
            q = function() {
                var a = 0;
                if (d.settings.moveSlides > 0)
                    if (d.settings.infiniteLoop) a = Math.ceil(d.children.length / r());
                    else
                        for (var b = 0, c = 0; b < d.children.length;) ++a, b = c + p(), c += d.settings.moveSlides <= p() ? d.settings.moveSlides : p();
                else a = Math.ceil(d.children.length / p());
                return a
            },
            r = function() {
                return d.settings.moveSlides > 0 && d.settings.moveSlides <= p() ? d.settings.moveSlides : p()
            },
            s = function() {
                var a;
                if (d.children.length > d.settings.maxSlides && d.active.last && !d.settings.infiniteLoop) {
                    if ("horizontal" === d.settings.mode) {
                        var b = d.children.last();
                        a = b.position(), t(-(a.left - (d.viewport.width() - b.outerWidth())), "reset", 0)
                    } else if ("vertical" === d.settings.mode) {
                        var c = d.children.length - d.settings.minSlides;
                        a = d.children.eq(c).position(), t(-a.top, "reset", 0)
                    }
                } else a = d.children.eq(d.active.index * r()).position(), d.active.index === q() - 1 && (d.active.last = !0), void 0 !== a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0))
            },
            t = function(a, b, c, f) {
                if (d.usingCSS) {
                    var g = "vertical" === d.settings.mode ? "translate3d(0, " + a + "px, 0)" : "translate3d(" + a + "px, 0, 0)";
                    e.css("-" + d.cssPrefix + "-transition-duration", c / 1e3 + "s"), "slide" === b ? setTimeout(function() {
                        e.css(d.animProp, g), 0 === a ? F() : e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), F()
                        })
                    }, 0) : "reset" === b ? e.css(d.animProp, g) : "ticker" === b && (e.css("-" + d.cssPrefix + "-transition-timing-function", "linear"), e.css(d.animProp, g), e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                        e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), t(f.resetValue, "reset", 0), K()
                    }))
                } else {
                    var h = {};
                    h[d.animProp] = a, "slide" === b ? e.animate(h, c, d.settings.easing, function() {
                        F()
                    }) : "reset" === b ? e.css(d.animProp, a) : "ticker" === b && e.animate(h, speed, "linear", function() {
                        t(f.resetValue, "reset", 0), K()
                    })
                }
            },
            u = function() {
                for (var b = "", c = q(), e = 0; c > e; e++) {
                    var f = "";
                    d.settings.buildPager && a.isFunction(d.settings.buildPager) || d.settings.pagerCustom ? (f = d.settings.buildPager(e), d.pagerEl.addClass("bx-custom-pager")) : (f = e + 1, d.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + e + '" class="bx-pager-link">' + f + "</a></div>"
                }
                d.pagerEl.html(b)
            },
            v = function() {
                d.settings.pagerCustom ? d.pagerEl = a(d.settings.pagerCustom) : (d.pagerEl = a('<div class="bx-pager" />'), d.settings.pagerSelector ? a(d.settings.pagerSelector).html(d.pagerEl) : d.controls.el.addClass("bx-has-pager").append(d.pagerEl), u()), d.pagerEl.on("click touchend", "a", D)
            },
            w = function() {
                d.controls.next = a('<a class="bx-next" href="">' + d.settings.nextText + "</a>"), d.controls.prev = a('<a class="bx-prev" href="">' + d.settings.prevText + "</a>"), d.controls.next.bind("click touchend", z), d.controls.prev.bind("click touchend", A), d.settings.nextSelector && a(d.settings.nextSelector).append(d.controls.next), d.settings.prevSelector && a(d.settings.prevSelector).append(d.controls.prev), d.settings.nextSelector || d.settings.prevSelector || (d.controls.directionEl = a('<div class="bx-controls-direction" />'), d.controls.directionEl.append(d.controls.prev).append(d.controls.next), d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))
            },
            x = function() {
                d.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + d.settings.startText + "</a></div>"), d.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + d.settings.stopText + "</a></div>"), d.controls.autoEl = a('<div class="bx-controls-auto" />'), d.controls.autoEl.on("click", ".bx-start", B), d.controls.autoEl.on("click", ".bx-stop", C), d.settings.autoControlsCombine ? d.controls.autoEl.append(d.controls.start) : d.controls.autoEl.append(d.controls.start).append(d.controls.stop), d.settings.autoControlsSelector ? a(d.settings.autoControlsSelector).html(d.controls.autoEl) : d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl), G(d.settings.autoStart ? "stop" : "start")
            },
            y = function() {
                d.children.each(function() {
                    var b = a(this).find("img:first").attr("title");
                    void 0 !== b && ("" + b).length && a(this).append('<div class="bx-caption"><span>' + b + "</span></div>")
                })
            },
            z = function(a) {
                a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && e.stopAuto(), e.goToNextSlide())
            },
            A = function(a) {
                a.preventDefault(), d.controls.el.hasClass("disabled") || (d.settings.auto && e.stopAuto(), e.goToPrevSlide())
            },
            B = function(a) {
                e.startAuto(), a.preventDefault()
            },
            C = function(a) {
                e.stopAuto(), a.preventDefault()
            },
            D = function(b) {
                if (b.preventDefault(), !d.controls.el.hasClass("disabled")) {
                    d.settings.auto && e.stopAuto();
                    var c = a(b.currentTarget);
                    if (void 0 !== c.attr("data-slide-index")) {
                        var f = parseInt(c.attr("data-slide-index"));
                        f !== d.active.index && e.goToSlide(f)
                    }
                }
            },
            E = function(b) {
                var c = d.children.length;
                return "short" === d.settings.pagerType ? (d.settings.maxSlides > 1 && (c = Math.ceil(d.children.length / d.settings.maxSlides)), void d.pagerEl.html(b + 1 + d.settings.pagerShortSeparator + c)) : (d.pagerEl.find("a").removeClass("active"), void d.pagerEl.each(function(c, d) {
                    a(d).find("a").eq(b).addClass("active")
                }))
            },
            F = function() {
                if (d.settings.infiniteLoop) {
                    var a = "";
                    0 === d.active.index ? a = d.children.eq(0).position() : d.active.index === q() - 1 && d.carousel ? a = d.children.eq((q() - 1) * r()).position() : d.active.index === d.children.length - 1 && (a = d.children.eq(d.children.length - 1).position()), a && ("horizontal" === d.settings.mode ? t(-a.left, "reset", 0) : "vertical" === d.settings.mode && t(-a.top, "reset", 0))
                }
                d.working = !1, d.settings.onSlideAfter(d.children.eq(d.active.index), d.oldIndex, d.active.index)
            },
            G = function(a) {
                d.settings.autoControlsCombine ? d.controls.autoEl.html(d.controls[a]) : (d.controls.autoEl.find("a").removeClass("active"), d.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active"))
            },
            H = function() {
                1 === q() ? (d.controls.prev.addClass("disabled"), d.controls.next.addClass("disabled")) : !d.settings.infiniteLoop && d.settings.hideControlOnEnd && (0 === d.active.index ? (d.controls.prev.addClass("disabled"), d.controls.next.removeClass("disabled")) : d.active.index === q() - 1 ? (d.controls.next.addClass("disabled"), d.controls.prev.removeClass("disabled")) : (d.controls.prev.removeClass("disabled"), d.controls.next.removeClass("disabled")))
            },
            I = function() {
                if (d.settings.autoDelay > 0) {
                    setTimeout(e.startAuto, d.settings.autoDelay)
                } else e.startAuto(), a(window).focus(function() {
                    e.startAuto()
                }).blur(function() {
                    e.stopAuto()
                });
                d.settings.autoHover && e.hover(function() {
                    d.interval && (e.stopAuto(!0), d.autoPaused = !0)
                }, function() {
                    d.autoPaused && (e.startAuto(!0), d.autoPaused = null)
                })
            },
            J = function() {
                var b = 0;
                if ("next" === d.settings.autoDirection) e.append(d.children.clone().addClass("bx-clone"));
                else {
                    e.prepend(d.children.clone().addClass("bx-clone"));
                    var c = d.children.first().position();
                    b = "horizontal" === d.settings.mode ? -c.left : -c.top
                }
                if (t(b, "reset", 0), d.settings.pager = !1, d.settings.controls = !1, d.settings.autoControls = !1, d.settings.tickerHover)
                    if (d.usingCSS) {
                        var f, g = "horizontal" == d.settings.mode ? 4 : 5;
                        d.viewport.hover(function() {
                            var a = e.css("-" + d.cssPrefix + "-transform");
                            f = parseFloat(a.split(",")[g]), t(f, "reset", 0)
                        }, function() {
                            var b = 0;
                            d.children.each(function() {
                                b += "horizontal" == d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                            });
                            var c = d.settings.speed / b,
                                e = ("horizontal" == d.settings.mode ? "left" : "top", c * (b - Math.abs(parseInt(f))));
                            K(e)
                        })
                    } else d.viewport.hover(function() {
                        e.stop()
                    }, function() {
                        var b = 0;
                        d.children.each(function() {
                            b += "horizontal" == d.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                        });
                        var c = d.settings.speed / b,
                            f = "horizontal" == d.settings.mode ? "left" : "top",
                            g = c * (b - Math.abs(parseInt(e.css(f))));
                        K(g)
                    });
                K()
            },
            K = function(a) {
                speed = a ? a : d.settings.speed;
                var b = {
                        left: 0,
                        top: 0
                    },
                    c = {
                        left: 0,
                        top: 0
                    };
                "next" === d.settings.autoDirection ? b = e.find(".bx-clone").first().position() : c = d.children.first().position();
                var f = "horizontal" === d.settings.mode ? -b.left : -b.top,
                    g = "horizontal" === d.settings.mode ? -c.left : -c.top,
                    h = {
                        resetValue: g
                    };
                t(f, "ticker", speed, h)
            },
            L = function(b) {
                var c = a(window),
                    d = {
                        top: c.scrollTop(),
                        left: c.scrollLeft()
                    };
                d.right = d.left + c.width(), d.bottom = d.top + c.height();
                var e = b.offset();
                return e.right = e.left + b.outerWidth(), e.bottom = e.top + b.outerHeight(), !(d.right < e.left || d.left > e.right || d.bottom < e.top || d.top > e.bottom)
            },
            M = function(a) {
                var b = document.activeElement.tagName.toLowerCase(),
                    c = "input|textarea",
                    d = new RegExp(b, ["i"]),
                    f = d.exec(c);
                if (null == f && L(e)) {
                    if (39 == a.keyCode) return z(a), !1;
                    if (37 == a.keyCode) return A(a), !1
                }
            },
            N = function() {
                d.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                }, d.viewport.bind("touchstart MSPointerDown pointerdown", O), d.viewport.on("click", ".bxslider a", function(a) {
                    d.viewport.hasClass("click-disabled") && (a.preventDefault(), d.viewport.removeClass("click-disabled"))
                })
            },
            O = function(a) {
                if (d.controls.el.addClass("disabled"), d.working) a.preventDefault(), d.controls.el.removeClass("disabled");
                else {
                    d.touch.originalPos = e.position();
                    var b = a.originalEvent,
                        c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b];
                    d.touch.start.x = c[0].pageX, d.touch.start.y = c[0].pageY, d.viewport.get(0).setPointerCapture && (d.pointerId = b.pointerId, d.viewport.get(0).setPointerCapture(d.pointerId)), d.viewport.bind("touchmove MSPointerMove pointermove", Q), d.viewport.bind("touchend MSPointerUp pointerup", R), d.viewport.bind("MSPointerCancel pointercancel", P)
                }
            },
            P = function() {
                t(d.touch.originalPos.left, "reset", 0), d.controls.el.removeClass("disabled"), d.viewport.unbind("MSPointerCancel pointercancel", P), d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId)
            },
            Q = function(a) {
                var b = a.originalEvent,
                    c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b],
                    e = Math.abs(c[0].pageX - d.touch.start.x),
                    f = Math.abs(c[0].pageY - d.touch.start.y);
                if (3 * e > f && d.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * f > e && d.settings.preventDefaultSwipeY && a.preventDefault(), "fade" !== d.settings.mode && d.settings.oneToOneTouch) {
                    var g = 0,
                        h = 0;
                    "horizontal" === d.settings.mode ? (h = c[0].pageX - d.touch.start.x, g = d.touch.originalPos.left + h) : (h = c[0].pageY - d.touch.start.y, g = d.touch.originalPos.top + h), t(g, "reset", 0)
                }
            },
            R = function(a) {
                d.viewport.unbind("touchmove MSPointerMove pointermove", Q), d.controls.el.removeClass("disabled");
                var b = a.originalEvent,
                    c = "undefined" != typeof b.changedTouches ? b.changedTouches : [b],
                    f = 0,
                    g = 0;
                d.touch.end.x = c[0].pageX, d.touch.end.y = c[0].pageY, "fade" === d.settings.mode ? (g = Math.abs(d.touch.start.x - d.touch.end.x), g >= d.settings.swipeThreshold && (d.touch.start.x > d.touch.end.x ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto())) : ("horizontal" === d.settings.mode ? (g = d.touch.end.x - d.touch.start.x, f = d.touch.originalPos.left) : (g = d.touch.end.y - d.touch.start.y, f = d.touch.originalPos.top), !d.settings.infiniteLoop && (0 === d.active.index && g > 0 || d.active.last && 0 > g) ? t(f, "reset", 200) : Math.abs(g) >= d.settings.swipeThreshold ? (0 > g ? e.goToNextSlide() : e.goToPrevSlide(), e.stopAuto()) : t(f, "reset", 200)), d.viewport.unbind("touchend MSPointerUp pointerup", R), d.viewport.get(0).releasePointerCapture && d.viewport.get(0).releasePointerCapture(d.pointerId)
            },
            S = function() {
                if (d.initialized)
                    if (d.working) window.setTimeout(S, 10);
                    else {
                        var b = a(window).width(),
                            c = a(window).height();
                        (f !== b || g !== c) && (f = b, g = c, e.redrawSlider(), d.settings.onSliderResize.call(e, d.active.index))
                    }
            };
        return e.goToSlide = function(b, c) {
            if (!d.working && d.active.index !== b) {
                d.working = !0, d.oldIndex = d.active.index, d.active.index = 0 > b ? q() - 1 : b >= q() ? 0 : b;
                var f = !0;
                if (f = d.settings.onSlideBefore(d.children.eq(d.active.index), d.oldIndex, d.active.index), "undefined" != typeof f && !f) return d.active.index = d.oldIndex, void(d.working = !1);
                if ("next" === c ? d.settings.onSlideNext(d.children.eq(d.active.index), d.oldIndex, d.active.index) || (f = !1) : "prev" === c && (d.settings.onSlidePrev(d.children.eq(d.active.index), d.oldIndex, d.active.index) || (f = !1)), "undefined" != typeof f && !f) return d.active.index = d.oldIndex, void(d.working = !1);
                if (d.active.last = d.active.index >= q() - 1, (d.settings.pager || d.settings.pagerCustom) && E(d.active.index), d.settings.controls && H(), "fade" === d.settings.mode) d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({
                    height: m()
                }, d.settings.adaptiveHeightSpeed), d.children.filter(":visible").fadeOut(d.settings.speed).css({
                    zIndex: 0
                }), d.children.eq(d.active.index).css("zIndex", d.settings.slideZIndex + 1).fadeIn(d.settings.speed, function() {
                    a(this).css("zIndex", d.settings.slideZIndex), F()
                });
                else {
                    d.settings.adaptiveHeight && d.viewport.height() !== m() && d.viewport.animate({
                        height: m()
                    }, d.settings.adaptiveHeightSpeed);
                    var g = 0,
                        h = {
                            left: 0,
                            top: 0
                        },
                        i = null;
                    if (!d.settings.infiniteLoop && d.carousel && d.active.last)
                        if ("horizontal" === d.settings.mode) i = d.children.eq(d.children.length - 1), h = i.position(), g = d.viewport.width() - i.outerWidth();
                        else {
                            var j = d.children.length - d.settings.minSlides;
                            h = d.children.eq(j).position()
                        } else if (d.carousel && d.active.last && "prev" === c) {
                        var k = 1 === d.settings.moveSlides ? d.settings.maxSlides - r() : (q() - 1) * r() - (d.children.length - d.settings.maxSlides);
                        i = e.children(".bx-clone").eq(k), h = i.position()
                    } else if ("next" === c && 0 === d.active.index) h = e.find("> .bx-clone").eq(d.settings.maxSlides).position(), d.active.last = !1;
                    else if (b >= 0) {
                        var l = b * r();
                        h = d.children.eq(l).position()
                    }
                    if ("undefined" != typeof h) {
                        var n = "horizontal" === d.settings.mode ? -(h.left - g) : -h.top;
                        t(n, "slide", d.settings.speed)
                    }
                }
            }
        }, e.goToNextSlide = function() {
            if (d.settings.infiniteLoop || !d.active.last) {
                var a = parseInt(d.active.index) + 1;
                e.goToSlide(a, "next"), log(a)
            }
        }, e.goToPrevSlide = function() {
            if (d.settings.infiniteLoop || 0 !== d.active.index) {
                var a = parseInt(d.active.index) - 1;
                e.goToSlide(a, "prev")
            }
        }, e.startAuto = function(a) {
            d.interval || (d.interval = setInterval(function() {
                "next" === d.settings.autoDirection ? e.goToNextSlide() : e.goToPrevSlide()
            }, d.settings.pause), d.settings.autoControls && a !== !0 && G("stop"))
        }, e.stopAuto = function(a) {
            d.interval && (clearInterval(d.interval), d.interval = null, d.settings.autoControls && a !== !0 && G("start"))
        }, e.getCurrentSlide = function() {
            return d.active.index
        }, e.getCurrentSlideElement = function() {
            return d.children.eq(d.active.index)
        }, e.getSlideCount = function() {
            return d.children.length
        }, e.isWorking = function() {
            return d.working
        }, e.redrawSlider = function() {
            d.children.add(e.find(".bx-clone")).outerWidth(o()), d.viewport.css("height", m()), d.settings.ticker || s(), d.active.last && (d.active.index = q() - 1), d.active.index >= q() && (d.active.last = !0), d.settings.pager && !d.settings.pagerCustom && (u(), E(d.active.index))
        }, e.destroySlider = function() {
            d.initialized && (d.initialized = !1, a(".bx-clone", this).remove(), d.children.each(function() {
                void 0 !== a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
            }), void 0 !== a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), d.controls.el && d.controls.el.remove(), d.controls.next && d.controls.next.remove(), d.controls.prev && d.controls.prev.remove(), d.pagerEl && d.settings.controls && !d.settings.pagerCustom && d.pagerEl.remove(), a(".bx-caption", this).remove(), d.controls.autoEl && d.controls.autoEl.remove(), clearInterval(d.interval), d.settings.responsive && a(window).unbind("resize", S), d.settings.keyboardEnabled && a(document).unbind("keydown", M))
        }, e.reloadSlider = function(a) {
            void 0 !== a && (c = a), e.destroySlider(), h()
        }, h(), this
    }
}(jQuery),
function(a, b) {
    "object" == typeof exports ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], b) : b(a.jQuery)
}(this, function(a) {
    var b = function(a, b) {
            var c, d = document.createElement("canvas");
            a.appendChild(d), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
            var e = d.getContext("2d");
            d.width = d.height = b.size;
            var f = 1;
            window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);
            var g = (b.size - b.lineWidth) / 2;
            b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function() {
                return +new Date
            };
            var h = function(a, b, c) {
                    c = Math.min(Math.max(-1, c || 0), 1);
                    var d = 0 >= c ? !0 : !1;
                    e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
                },
                i = function() {
                    var a, c;
                    e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
                    for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
                    e.restore()
                },
                j = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
                        window.setTimeout(a, 1e3 / 60)
                    }
                }(),
                k = function() {
                    b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
                };
            this.getCanvas = function() {
                return d
            }, this.getCtx = function() {
                return e
            }, this.clear = function() {
                e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
            }, this.draw = function(a) {
                b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
                var d;
                d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
            }.bind(this), this.animate = function(a, c) {
                var d = Date.now();
                b.onStart(a, c);
                var e = function() {
                    var f = Math.min(Date.now() - d, b.animate.duration),
                        g = b.easing(this, f, a, c - a, b.animate.duration);
                    this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
                }.bind(this);
                j(e)
            }.bind(this)
        },
        c = function(a, c) {
            var d = {
                barColor: "#ef1e25",
                trackColor: "#f9f9f9",
                scaleColor: "#dfe0e0",
                scaleLength: 5,
                lineCap: "round",
                lineWidth: 3,
                trackWidth: void 0,
                size: 110,
                rotate: 0,
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                easing: function(a, b, c, d, e) {
                    return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
                },
                onStart: function() {},
                onStep: function() {},
                onStop: function() {}
            };
            if ("undefined" != typeof b) d.renderer = b;
            else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                d.renderer = SVGRenderer
            }
            var e = {},
                f = 0,
                g = function() {
                    this.el = a, this.options = e;
                    for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
                    e.easing = "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? jQuery.easing[e.easing] : d.easing, "number" == typeof e.animate && (e.animate = {
                        duration: e.animate,
                        enabled: !0
                    }), "boolean" != typeof e.animate || e.animate || (e.animate = {
                        duration: 1e3,
                        enabled: e.animate
                    }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")))
                }.bind(this);
            this.update = function(a) {
                return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
            }.bind(this), this.disableAnimation = function() {
                return e.animate.enabled = !1, this
            }, this.enableAnimation = function() {
                return e.animate.enabled = !0, this
            }, g()
        };
    a.fn.easyPieChart = function(b) {
        return this.each(function() {
            var d;
            a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)))
        })
    }
}),
function(a, b, c, d) {
    "use strict";

    function e(a, b, c) {
        return setTimeout(k(a, c), b)
    }

    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }

    function g(a, b, c) {
        var e;
        if (a)
            if (a.forEach) a.forEach(b, c);
            else if (a.length !== d)
            for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
        else
            for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function h(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
        return a
    }

    function i(a, b) {
        return h(a, b, !0)
    }

    function j(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && h(d, c)
    }

    function k(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }

    function l(a, b) {
        return typeof a == kb ? a.apply(b ? b[0] || d : d, b) : a
    }

    function m(a, b) {
        return a === d ? b : a
    }

    function n(a, b, c) {
        g(r(b), function(b) {
            a.addEventListener(b, c, !1)
        })
    }

    function o(a, b, c) {
        g(r(b), function(b) {
            a.removeEventListener(b, c, !1)
        })
    }

    function p(a, b) {
        for (; a;) {
            if (a == b) return !0;
            a = a.parentNode
        }
        return !1
    }

    function q(a, b) {
        return a.indexOf(b) > -1
    }

    function r(a) {
        return a.trim().split(/\s+/g)
    }

    function s(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b) return d;
            d++
        }
        return -1
    }

    function t(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function u(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            s(e, g) < 0 && d.push(a[f]), e[f] = g, f++
        }
        return c && (d = b ? d.sort(function(a, c) {
            return a[b] > c[b]
        }) : d.sort()), d
    }

    function v(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ib.length;) {
            if (c = ib[g], e = c ? c + f : b, e in a) return e;
            g++
        }
        return d
    }

    function w() {
        return ob++
    }

    function x(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow
    }

    function y(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) {
            l(a.options.enable, [a]) && c.handler(b)
        }, this.init()
    }

    function z(a) {
        var b, c = a.options.inputClass;
        return new(b = c ? c : rb ? N : sb ? Q : qb ? S : M)(a, A)
    }

    function A(a, b, c) {
        var d = c.pointers.length,
            e = c.changedPointers.length,
            f = b & yb && d - e === 0,
            g = b & (Ab | Bb) && d - e === 0;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, B(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function B(a, b) {
        var c = a.session,
            d = b.pointers,
            e = d.length;
        c.firstInput || (c.firstInput = E(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = E(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput,
            g = c.firstMultiple,
            h = g ? g.center : f.center,
            i = b.center = F(d);
        b.timeStamp = nb(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = J(h, i), b.distance = I(h, i), C(c, b), b.offsetDirection = H(b.deltaX, b.deltaY), b.scale = g ? L(g.pointers, d) : 1, b.rotation = g ? K(g.pointers, d) : 0, D(c, b);
        var j = a.element;
        p(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j
    }

    function C(a, b) {
        var c = b.center,
            d = a.offsetDelta || {},
            e = a.prevDelta || {},
            f = a.prevInput || {};
        (b.eventType === yb || f.eventType === Ab) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function D(a, b) {
        var c, e, f, g, h = a.lastInterval || b,
            i = b.timeStamp - h.timeStamp;
        if (b.eventType != Bb && (i > xb || h.velocity === d)) {
            var j = h.deltaX - b.deltaX,
                k = h.deltaY - b.deltaY,
                l = G(i, j, k);
            e = l.x, f = l.y, c = mb(l.x) > mb(l.y) ? l.x : l.y, g = H(j, k), a.lastInterval = b
        } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }

    function E(a) {
        for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
            clientX: lb(a.pointers[c].clientX),
            clientY: lb(a.pointers[c].clientY)
        }, c++;
        return {
            timeStamp: nb(),
            pointers: b,
            center: F(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        }
    }

    function F(a) {
        var b = a.length;
        if (1 === b) return {
            x: lb(a[0].clientX),
            y: lb(a[0].clientY)
        };
        for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
        return {
            x: lb(c / b),
            y: lb(d / b)
        }
    }

    function G(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        }
    }

    function H(a, b) {
        return a === b ? Cb : mb(a) >= mb(b) ? a > 0 ? Db : Eb : b > 0 ? Fb : Gb
    }

    function I(a, b, c) {
        c || (c = Kb);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }

    function J(a, b, c) {
        c || (c = Kb);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }

    function K(a, b) {
        return J(b[1], b[0], Lb) - J(a[1], a[0], Lb)
    }

    function L(a, b) {
        return I(b[0], b[1], Lb) / I(a[0], a[1], Lb)
    }

    function M() {
        this.evEl = Nb, this.evWin = Ob, this.allow = !0, this.pressed = !1, y.apply(this, arguments)
    }

    function N() {
        this.evEl = Rb, this.evWin = Sb, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function O() {
        this.evTarget = Ub, this.evWin = Vb, this.started = !1, y.apply(this, arguments)
    }

    function P(a, b) {
        var c = t(a.touches),
            d = t(a.changedTouches);
        return b & (Ab | Bb) && (c = u(c.concat(d), "identifier", !0)), [c, d]
    }

    function Q() {
        this.evTarget = Xb, this.targetIds = {}, y.apply(this, arguments)
    }

    function R(a, b) {
        var c = t(a.touches),
            d = this.targetIds;
        if (b & (yb | zb) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
        var e, f, g = t(a.changedTouches),
            h = [],
            i = this.target;
        if (f = c.filter(function(a) {
                return p(a.target, i)
            }), b === yb)
            for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ab | Bb) && delete d[g[e].identifier], e++;
        return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0
    }

    function S() {
        y.apply(this, arguments);
        var a = k(this.handler, this);
        this.touch = new Q(this.manager, a), this.mouse = new M(this.manager, a)
    }

    function T(a, b) {
        this.manager = a, this.set(b)
    }

    function U(a) {
        if (q(a, bc)) return bc;
        var b = q(a, cc),
            c = q(a, dc);
        return b && c ? cc + " " + dc : b || c ? b ? cc : dc : q(a, ac) ? ac : _b
    }

    function V(a) {
        this.id = w(), this.manager = null, this.options = i(a || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = ec, this.simultaneous = {}, this.requireFail = []
    }

    function W(a) {
        return a & jc ? "cancel" : a & hc ? "end" : a & gc ? "move" : a & fc ? "start" : ""
    }

    function X(a) {
        return a == Gb ? "down" : a == Fb ? "up" : a == Db ? "left" : a == Eb ? "right" : ""
    }

    function Y(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }

    function Z() {
        V.apply(this, arguments)
    }

    function $() {
        Z.apply(this, arguments), this.pX = null, this.pY = null
    }

    function _() {
        Z.apply(this, arguments)
    }

    function ab() {
        V.apply(this, arguments), this._timer = null, this._input = null
    }

    function bb() {
        Z.apply(this, arguments)
    }

    function cb() {
        Z.apply(this, arguments)
    }

    function db() {
        V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function eb(a, b) {
        return b = b || {}, b.recognizers = m(b.recognizers, eb.defaults.preset), new fb(a, b)
    }

    function fb(a, b) {
        b = b || {}, this.options = i(b, eb.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = z(this), this.touchAction = new T(this, this.options.touchAction), gb(this, !0), g(b.recognizers, function(a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
        }, this)
    }

    function gb(a, b) {
        var c = a.element;
        g(a.options.cssProps, function(a, d) {
            c.style[v(c.style, d)] = b ? a : ""
        })
    }

    function hb(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }
    var ib = ["", "webkit", "moz", "MS", "ms", "o"],
        jb = b.createElement("div"),
        kb = "function",
        lb = Math.round,
        mb = Math.abs,
        nb = Date.now,
        ob = 1,
        pb = /mobile|tablet|ip(ad|hone|od)|android/i,
        qb = "ontouchstart" in a,
        rb = v(a, "PointerEvent") !== d,
        sb = qb && pb.test(navigator.userAgent),
        tb = "touch",
        ub = "pen",
        vb = "mouse",
        wb = "kinect",
        xb = 25,
        yb = 1,
        zb = 2,
        Ab = 4,
        Bb = 8,
        Cb = 1,
        Db = 2,
        Eb = 4,
        Fb = 8,
        Gb = 16,
        Hb = Db | Eb,
        Ib = Fb | Gb,
        Jb = Hb | Ib,
        Kb = ["x", "y"],
        Lb = ["clientX", "clientY"];
    y.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(x(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && o(this.element, this.evEl, this.domHandler), this.evTarget && o(this.target, this.evTarget, this.domHandler), this.evWin && o(x(this.element), this.evWin, this.domHandler)
        }
    };
    var Mb = {
            mousedown: yb,
            mousemove: zb,
            mouseup: Ab
        },
        Nb = "mousedown",
        Ob = "mousemove mouseup";
    j(M, y, {
        handler: function(a) {
            var b = Mb[a.type];
            b & yb && 0 === a.button && (this.pressed = !0), b & zb && 1 !== a.which && (b = Ab), this.pressed && this.allow && (b & Ab && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: vb,
                srcEvent: a
            }))
        }
    });
    var Pb = {
            pointerdown: yb,
            pointermove: zb,
            pointerup: Ab,
            pointercancel: Bb,
            pointerout: Bb
        },
        Qb = {
            2: tb,
            3: ub,
            4: vb,
            5: wb
        },
        Rb = "pointerdown",
        Sb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (Rb = "MSPointerDown", Sb = "MSPointerMove MSPointerUp MSPointerCancel"), j(N, y, {
        handler: function(a) {
            var b = this.store,
                c = !1,
                d = a.type.toLowerCase().replace("ms", ""),
                e = Pb[d],
                f = Qb[a.pointerType] || a.pointerType,
                g = f == tb,
                h = s(b, a.pointerId, "pointerId");
            e & yb && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ab | Bb) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var Tb = {
            touchstart: yb,
            touchmove: zb,
            touchend: Ab,
            touchcancel: Bb
        },
        Ub = "touchstart",
        Vb = "touchstart touchmove touchend touchcancel";
    j(O, y, {
        handler: function(a) {
            var b = Tb[a.type];
            if (b === yb && (this.started = !0), this.started) {
                var c = P.call(this, a, b);
                b & (Ab | Bb) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: tb,
                    srcEvent: a
                })
            }
        }
    });
    var Wb = {
            touchstart: yb,
            touchmove: zb,
            touchend: Ab,
            touchcancel: Bb
        },
        Xb = "touchstart touchmove touchend touchcancel";
    j(Q, y, {
        handler: function(a) {
            var b = Wb[a.type],
                c = R.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: tb,
                srcEvent: a
            })
        }
    }), j(S, y, {
        handler: function(a, b, c) {
            var d = c.pointerType == tb,
                e = c.pointerType == vb;
            if (d) this.mouse.allow = !1;
            else if (e && !this.mouse.allow) return;
            b & (Ab | Bb) && (this.mouse.allow = !0), this.callback(a, b, c)
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Yb = v(jb.style, "touchAction"),
        Zb = Yb !== d,
        $b = "compute",
        _b = "auto",
        ac = "manipulation",
        bc = "none",
        cc = "pan-x",
        dc = "pan-y";
    T.prototype = {
        set: function(a) {
            a == $b && (a = this.compute()), Zb && (this.manager.element.style[Yb] = a), this.actions = a.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var a = [];
            return g(this.manager.recognizers, function(b) {
                l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }), U(a.join(" "))
        },
        preventDefaults: function(a) {
            if (!Zb) {
                var b = a.srcEvent,
                    c = a.offsetDirection;
                if (this.manager.session.prevented) return void b.preventDefault();
                var d = this.actions,
                    e = q(d, bc),
                    f = q(d, dc),
                    g = q(d, cc);
                return e || f && c & Hb || g && c & Ib ? this.preventSrc(b) : void 0
            }
        },
        preventSrc: function(a) {
            this.manager.session.prevented = !0, a.preventDefault()
        }
    };
    var ec = 1,
        fc = 2,
        gc = 4,
        hc = 8,
        ic = hc,
        jc = 16,
        kc = 32;
    V.prototype = {
        defaults: {},
        set: function(a) {
            return h(this.options, a), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(a) {
            if (f(a, "recognizeWith", this)) return this;
            var b = this.simultaneous;
            return a = Y(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
        },
        dropRecognizeWith: function(a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = Y(a, this), delete this.simultaneous[a.id], this)
        },
        requireFailure: function(a) {
            if (f(a, "requireFailure", this)) return this;
            var b = this.requireFail;
            return a = Y(a, this), -1 === s(b, a) && (b.push(a), a.requireFailure(this)), this
        },
        dropRequireFailure: function(a) {
            if (f(a, "dropRequireFailure", this)) return this;
            a = Y(a, this);
            var b = s(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(a) {
            return !!this.simultaneous[a.id]
        },
        emit: function(a) {
            function b(b) {
                c.manager.emit(c.options.event + (b ? W(d) : ""), a)
            }
            var c = this,
                d = this.state;
            hc > d && b(!0), b(), d >= hc && b(!0)
        },
        tryEmit: function(a) {
            return this.canEmit() ? this.emit(a) : void(this.state = kc)
        },
        canEmit: function() {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (kc | ec))) return !1;
                a++
            }
            return !0
        },
        recognize: function(a) {
            var b = h({}, a);
            return l(this.options.enable, [this, b]) ? (this.state & (ic | jc | kc) && (this.state = ec), this.state = this.process(b), void(this.state & (fc | gc | hc | jc) && this.tryEmit(b))) : (this.reset(), void(this.state = kc))
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    }, j(Z, V, {
        defaults: {
            pointers: 1
        },
        attrTest: function(a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        },
        process: function(a) {
            var b = this.state,
                c = a.eventType,
                d = b & (fc | gc),
                e = this.attrTest(a);
            return d && (c & Bb || !e) ? b | jc : d || e ? c & Ab ? b | hc : b & fc ? b | gc : fc : kc
        }
    }), j($, Z, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Jb
        },
        getTouchAction: function() {
            var a = this.options.direction,
                b = [];
            return a & Hb && b.push(dc), a & Ib && b.push(cc), b
        },
        directionTest: function(a) {
            var b = this.options,
                c = !0,
                d = a.distance,
                e = a.direction,
                f = a.deltaX,
                g = a.deltaY;
            return e & b.direction || (b.direction & Hb ? (e = 0 === f ? Cb : 0 > f ? Db : Eb, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Cb : 0 > g ? Fb : Gb, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
        },
        attrTest: function(a) {
            return Z.prototype.attrTest.call(this, a) && (this.state & fc || !(this.state & fc) && this.directionTest(a))
        },
        emit: function(a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = X(a.direction);
            b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a)
        }
    }), j(_, Z, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [bc]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & fc)
        },
        emit: function(a) {
            if (this._super.emit.call(this, a), 1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + b, a)
            }
        }
    }), j(ab, V, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [_b]
        },
        process: function(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Ab | Bb) && !f) this.reset();
            else if (a.eventType & yb) this.reset(), this._timer = e(function() {
                this.state = ic, this.tryEmit()
            }, b.time, this);
            else if (a.eventType & Ab) return ic;
            return kc
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(a) {
            this.state === ic && (a && a.eventType & Ab ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = nb(), this.manager.emit(this.options.event, this._input)))
        }
    }), j(bb, Z, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [bc]
        },
        attrTest: function(a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & fc)
        }
    }), j(cb, Z, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: Hb | Ib,
            pointers: 1
        },
        getTouchAction: function() {
            return $.prototype.getTouchAction.call(this)
        },
        attrTest: function(a) {
            var b, c = this.options.direction;
            return c & (Hb | Ib) ? b = a.velocity : c & Hb ? b = a.velocityX : c & Ib && (b = a.velocityY), this._super.attrTest.call(this, a) && c & a.direction && a.distance > this.options.threshold && mb(b) > this.options.velocity && a.eventType & Ab
        },
        emit: function(a) {
            var b = X(a.direction);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
        }
    }), j(db, V, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [ac]
        },
        process: function(a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & yb && 0 === this.count) return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ab) return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                    h = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                var i = this.count % b.taps;
                if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function() {
                    this.state = ic, this.tryEmit()
                }, b.interval, this), fc) : ic
            }
            return kc
        },
        failTimeout: function() {
            return this._timer = e(function() {
                this.state = kc
            }, this.options.interval, this), kc
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == ic && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), eb.VERSION = "2.0.4", eb.defaults = {
        domEvents: !1,
        touchAction: $b,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [bb, {
                enable: !1
            }],
            [_, {
                    enable: !1
                },
                ["rotate"]
            ],
            [cb, {
                direction: Hb
            }],
            [$, {
                    direction: Hb
                },
                ["swipe"]
            ],
            [db],
            [db, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [ab]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var lc = 1,
        mc = 2;
    fb.prototype = {
        set: function(a) {
            return h(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
        },
        stop: function(a) {
            this.session.stopped = a ? mc : lc
        },
        recognize: function(a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers,
                    e = b.curRecognizer;
                (!e || e && e.state & ic) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;) c = d[f], b.stopped === mc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (fc | gc | hc) && (e = b.curRecognizer = c), f++
            }
        },
        get: function(a) {
            if (a instanceof V) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a) return b[c];
            return null
        },
        add: function(a) {
            if (f(a, "add", this)) return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
        },
        remove: function(a) {
            if (f(a, "remove", this)) return this;
            var b = this.recognizers;
            return a = this.get(a), b.splice(s(b, a), 1), this.touchAction.update(), this
        },
        on: function(a, b) {
            var c = this.handlers;
            return g(r(a), function(a) {
                c[a] = c[a] || [], c[a].push(b)
            }), this
        },
        off: function(a, b) {
            var c = this.handlers;
            return g(r(a), function(a) {
                b ? c[a].splice(s(c[a], b), 1) : delete c[a]
            }), this
        },
        emit: function(a, b) {
            this.options.domEvents && hb(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function() {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;) c[d](b), d++
            }
        },
        destroy: function() {
            this.element && gb(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, h(eb, {
        INPUT_START: yb,
        INPUT_MOVE: zb,
        INPUT_END: Ab,
        INPUT_CANCEL: Bb,
        STATE_POSSIBLE: ec,
        STATE_BEGAN: fc,
        STATE_CHANGED: gc,
        STATE_ENDED: hc,
        STATE_RECOGNIZED: ic,
        STATE_CANCELLED: jc,
        STATE_FAILED: kc,
        DIRECTION_NONE: Cb,
        DIRECTION_LEFT: Db,
        DIRECTION_RIGHT: Eb,
        DIRECTION_UP: Fb,
        DIRECTION_DOWN: Gb,
        DIRECTION_HORIZONTAL: Hb,
        DIRECTION_VERTICAL: Ib,
        DIRECTION_ALL: Jb,
        Manager: fb,
        Input: y,
        TouchAction: T,
        TouchInput: Q,
        MouseInput: M,
        PointerEventInput: N,
        TouchMouseInput: S,
        SingleTouchInput: O,
        Recognizer: V,
        AttrRecognizer: Z,
        Tap: db,
        Pan: $,
        Swipe: cb,
        Pinch: _,
        Rotate: bb,
        Press: ab,
        on: n,
        off: o,
        each: g,
        merge: i,
        extend: h,
        inherit: j,
        bindFn: k,
        prefixed: v
    }), typeof define == kb && define.amd ? define(function() {
        return eb
    }) : "undefined" != typeof module && module.exports ? module.exports = eb : a[c] = eb
}(window, document, "Hammer"),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], a) : "object" == typeof exports ? a(require("jquery"), require("hammerjs")) : a(jQuery, Hammer)
}(function(a, b) {
    function c(c, d) {
        var e = a(c);
        e.data("hammer") || e.data("hammer", new b(e[0], d))
    }
    a.fn.hammer = function(a) {
        return this.each(function() {
            c(this, a)
        })
    }, b.Manager.prototype.emit = function(b) {
        return function(c, d) {
            b.call(this, c, d), a(this.element).trigger({
                type: c,
                gesture: d
            })
        }
    }(b.Manager.prototype.emit)
}),
function(a) {
    a.fn.stickyHeaders = function(b) {
        function c() {
            e.find(f.headerSelector).each(function() {
                var b = a(this);
                b.attr("data-originalPOS", b.parent().position().top + e.scrollTop())
            })
        }

        function d() {
            c();
            var b = e.find(f.headerSelector);
            b.each(function(c) {
                var d = a(this),
                    g = b.eq(c + 1),
                    h = b.eq(c - 1),
                    i = d.attr("data-originalPOS");
                if (i <= e.scrollTop())
                    if (d.addClass("fixed"), g.length > 0 && e.scrollTop() > g.attr("data-originalPOS") - d.outerHeight()) {
                        d.addClass("absolute");
                        var j = g.attr("data-originalPOS") - d.outerHeight();
                        d.css("top", j)
                    } else d.css("top", f.containerOffset - a(window).scrollTop()), "function" == typeof f.onHeaderChange && f.onHeaderChange.apply(d);
                else d.removeClass("fixed"), h.length > 0 && e.scrollTop() <= d.attr("data-originalPOS") - h.outerHeight() && h.removeClass("absolute")
            })
        }
        var e = a(this),
            f = a.data(this, "settings");
        return f || (f = a.extend({}, a.fn.stickyHeaders.defaults, b), f.containerOffset = a(this).offset().top, a.data(this, "settings", f)), "updateOriginalPos" == b ? void c() : (a(this).children(f.headerSelector).each(function() {
            var b = a(this).wrap('<div class="stickyWrap" />');
            b.parent().height(b.outerHeight())
        }), c(), a(this).on("scroll", d), a(window).on("scroll", d), this)
    }, a.fn.stickyHeaders.defaults = {
        headerSelector: ".stickyHeader"
    }
}(jQuery),
function(a) {
    var b = function(a) {
            return a.split("").reverse().join("")
        },
        c = {
            numberStep: function(b, c) {
                var d = Math.floor(b),
                    e = a(c.elem);
                e.text(d)
            }
        },
        d = function(a) {
            var b = a.elem;
            if (b.nodeType && b.parentNode) {
                var d = b._animateNumberSetter;
                d || (d = c.numberStep), d(a.now, a)
            }
        };
    a.Tween && a.Tween.propHooks ? a.Tween.propHooks.number = {
        set: d
    } : a.fx.step.number = d;
    var e = function(a, b) {
            for (var c, d, e, f = a.split("").reverse(), g = [], h = 0, i = Math.ceil(a.length / b); i > h; h++) {
                for (c = "", e = 0; b > e && (d = h * b + e, d !== a.length); e++) c += f[d];
                g.push(c)
            }
            return g
        },
        f = function(a) {
            var c = a.length - 1,
                d = b(a[c]);
            return a[c] = b(parseInt(d, 10).toString()), a
        };
    a.animateNumber = {
        numberStepFactories: {
            append: function(b) {
                return function(c, d) {
                    var e = Math.floor(c),
                        f = a(d.elem);
                    f.prop("number", c).text(e + b)
                }
            },
            separator: function(c, d) {
                return c = c || " ", d = d || 3,
                    function(g, h) {
                        var i = Math.floor(g),
                            j = i.toString(),
                            k = a(h.elem);
                        if (j.length > d) {
                            var l = e(j, d);
                            j = f(l).join(c), j = b(j)
                        }
                        k.prop("number", g).text(j)
                    }
            }
        }
    }, a.fn.animateNumber = function() {
        for (var b = arguments[0], d = a.extend({}, c, b), e = a(this), f = [d], g = 1, h = arguments.length; h > g; g++) f.push(arguments[g]);
        if (b.numberStep) {
            var i = this.each(function() {
                    this._animateNumberSetter = b.numberStep
                }),
                j = d.complete;
            d.complete = function() {
                i.each(function() {
                    delete this._animateNumberSetter
                }), j && j.apply(this, arguments)
            }
        }
        return e.animate.apply(e, f)
    }
}(jQuery),
function(a) {
    var b, c, d = "0.4.2",
        e = "hasOwnProperty",
        f = /[\.\/]/,
        g = /\s*,\s*/,
        h = "*",
        i = function(a, b) {
            return a - b
        },
        j = {
            n: {}
        },
        k = function() {
            for (var a = 0, b = this.length; b > a; a++)
                if ("undefined" != typeof this[a]) return this[a]
        },
        l = function() {
            for (var a = this.length; --a;)
                if ("undefined" != typeof this[a]) return this[a]
        },
        m = function(a, d) {
            a = String(a);
            var e, f = c,
                g = Array.prototype.slice.call(arguments, 2),
                h = m.listeners(a),
                j = 0,
                n = [],
                o = {},
                p = [],
                q = b;
            p.firstDefined = k, p.lastDefined = l, b = a, c = 0;
            for (var r = 0, s = h.length; s > r; r++) "zIndex" in h[r] && (n.push(h[r].zIndex), h[r].zIndex < 0 && (o[h[r].zIndex] = h[r]));
            for (n.sort(i); n[j] < 0;)
                if (e = o[n[j++]], p.push(e.apply(d, g)), c) return c = f, p;
            for (r = 0; s > r; r++)
                if (e = h[r], "zIndex" in e)
                    if (e.zIndex == n[j]) {
                        if (p.push(e.apply(d, g)), c) break;
                        do
                            if (j++, e = o[n[j]], e && p.push(e.apply(d, g)), c) break;
                        while (e)
                    } else o[e.zIndex] = e;
            else if (p.push(e.apply(d, g)), c) break;
            return c = f, b = q, p
        };
    m._events = j, m.listeners = function(a) {
        var b, c, d, e, g, i, k, l, m = a.split(f),
            n = j,
            o = [n],
            p = [];
        for (e = 0, g = m.length; g > e; e++) {
            for (l = [], i = 0, k = o.length; k > i; i++)
                for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;) b = c[d], b && (l.push(b), p = p.concat(b.f || []));
            o = l
        }
        return p
    }, m.on = function(a, b) {
        if (a = String(a), "function" != typeof b) return function() {};
        for (var c = a.split(g), d = 0, e = c.length; e > d; d++) ! function(a) {
            for (var c, d = a.split(f), e = j, g = 0, h = d.length; h > g; g++) e = e.n, e = e.hasOwnProperty(d[g]) && e[d[g]] || (e[d[g]] = {
                n: {}
            });
            for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
                if (e.f[g] == b) {
                    c = !0;
                    break
                }!c && e.f.push(b)
        }(c[d]);
        return function(a) {
            +a == +a && (b.zIndex = +a)
        }
    }, m.f = function(a) {
        var b = [].slice.call(arguments, 1);
        return function() {
            m.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, m.stop = function() {
        c = 1
    }, m.nt = function(a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
    }, m.nts = function() {
        return b.split(f)
    }, m.off = m.unbind = function(a, b) {
        if (!a) return void(m._events = j = {
            n: {}
        });
        var c = a.split(g);
        if (c.length > 1)
            for (var d = 0, i = c.length; i > d; d++) m.off(c[d], b);
        else {
            c = a.split(f);
            var k, l, n, d, i, o, p, q = [j];
            for (d = 0, i = c.length; i > d; d++)
                for (o = 0; o < q.length; o += n.length - 2) {
                    if (n = [o, 1], k = q[o].n, c[d] != h) k[c[d]] && n.push(k[c[d]]);
                    else
                        for (l in k) k[e](l) && n.push(k[l]);
                    q.splice.apply(q, n)
                }
            for (d = 0, i = q.length; i > d; d++)
                for (k = q[d]; k.n;) {
                    if (b) {
                        if (k.f) {
                            for (o = 0, p = k.f.length; p > o; o++)
                                if (k.f[o] == b) {
                                    k.f.splice(o, 1);
                                    break
                                }!k.f.length && delete k.f
                        }
                        for (l in k.n)
                            if (k.n[e](l) && k.n[l].f) {
                                var r = k.n[l].f;
                                for (o = 0, p = r.length; p > o; o++)
                                    if (r[o] == b) {
                                        r.splice(o, 1);
                                        break
                                    }!r.length && delete k.n[l].f
                            }
                    } else {
                        delete k.f;
                        for (l in k.n) k.n[e](l) && k.n[l].f && delete k.n[l].f
                    }
                    k = k.n
                }
        }
    }, m.once = function(a, b) {
        var c = function() {
            return m.unbind(a, c), b.apply(this, arguments)
        };
        return m.on(a, c)
    }, m.version = d, m.toString = function() {
        return "You are running Eve " + d
    }, "undefined" != typeof module && module.exports ? module.exports = m : "function" == typeof define && define.amd ? define("eve", [], function() {
        return m
    }) : a.eve = m
}(this),
function(a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function(c) {
        return b(a, c)
    }) : b(a, a.eve)
}(this, function(a, b) {
    var c = function(b) {
            var c = {},
                d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function(a) {
                    setTimeout(a, 16)
                },
                e = Array.isArray || function(a) {
                    return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
                },
                f = 0,
                g = "M" + (+new Date).toString(36),
                h = function() {
                    return g + (f++).toString(36)
                },
                i = Date.now || function() {
                    return +new Date
                },
                j = function(a) {
                    var b = this;
                    if (null == a) return b.s;
                    var c = b.s - a;
                    b.b += b.dur * c, b.B += b.dur * c, b.s = a
                },
                k = function(a) {
                    var b = this;
                    return null == a ? b.spd : void(b.spd = a)
                },
                l = function(a) {
                    var b = this;
                    return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
                },
                m = function() {
                    var a = this;
                    delete c[a.id], a.update(), b("mina.stop." + a.id, a)
                },
                n = function() {
                    var a = this;
                    a.pdif || (delete c[a.id], a.update(), a.pdif = a.get() - a.b)
                },
                o = function() {
                    var a = this;
                    a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
                },
                p = function() {
                    var a, b = this;
                    if (e(b.start)) {
                        a = [];
                        for (var c = 0, d = b.start.length; d > c; c++) a[c] = +b.start[c] + (b.end[c] - b.start[c]) * b.easing(b.s)
                    } else a = +b.start + (b.end - b.start) * b.easing(b.s);
                    b.set(a)
                },
                q = function() {
                    var a = 0;
                    for (var e in c)
                        if (c.hasOwnProperty(e)) {
                            var f = c[e],
                                g = f.get();
                            a++, f.s = (g - f.b) / (f.dur / f.spd), f.s >= 1 && (delete c[e], f.s = 1, a--, function(a) {
                                setTimeout(function() {
                                    b("mina.finish." + a.id, a)
                                })
                            }(f)), f.update()
                        }
                    a && d(q)
                },
                r = function(a, b, e, f, g, i, s) {
                    var t = {
                        id: h(),
                        start: a,
                        end: b,
                        b: e,
                        s: 0,
                        dur: f - e,
                        spd: 1,
                        get: g,
                        set: i,
                        easing: s || r.linear,
                        status: j,
                        speed: k,
                        duration: l,
                        stop: m,
                        pause: n,
                        resume: o,
                        update: p
                    };
                    c[t.id] = t;
                    var u, v = 0;
                    for (u in c)
                        if (c.hasOwnProperty(u) && (v++, 2 == v)) break;
                    return 1 == v && d(q), t
                };
            return r.time = i, r.getById = function(a) {
                return c[a] || null
            }, r.linear = function(a) {
                return a
            }, r.easeout = function(a) {
                return Math.pow(a, 1.7)
            }, r.easein = function(a) {
                return Math.pow(a, .48)
            }, r.easeinout = function(a) {
                if (1 == a) return 1;
                if (0 == a) return 0;
                var b = .48 - a / 1.04,
                    c = Math.sqrt(.1734 + b * b),
                    d = c - b,
                    e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1),
                    f = -c - b,
                    g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1),
                    h = e + g + .5;
                return 3 * (1 - h) * h * h + h * h * h
            }, r.backin = function(a) {
                if (1 == a) return 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            }, r.backout = function(a) {
                if (0 == a) return 0;
                a -= 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a + b) + 1
            }, r.elastic = function(a) {
                return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
            }, r.bounce = function(a) {
                var b, c = 7.5625,
                    d = 2.75;
                return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
            }, a.mina = r, r
        }("undefined" == typeof b ? function() {} : b),
        d = function() {
            function d(a, b) {
                if (a) {
                    if (a.tagName) return y(a);
                    if (f(a, "array") && d.set) return d.set.apply(d, a);
                    if (a instanceof u) return a;
                    if (null == b) return a = z.doc.querySelector(a), y(a)
                }
                return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new x(a, b)
            }

            function e(a, b) {
                if (b) {
                    if ("#text" == a && (a = z.doc.createTextNode(b.text || "")), "string" == typeof a && (a = e(a)), "string" == typeof b) return "xlink:" == b.substring(0, 6) ? a.getAttributeNS(W, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(X, b.substring(4)) : a.getAttribute(b);
                    for (var c in b)
                        if (b[A](c)) {
                            var d = B(b[c]);
                            d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(W, c.substring(6), d) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(X, c.substring(4), d) : a.setAttribute(c, d) : a.removeAttribute(c)
                        }
                } else a = z.doc.createElementNS(X, a);
                return a
            }

            function f(a, b) {
                return b = B.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || L.call(a).slice(8, -1).toLowerCase() == b
            }

            function h(a) {
                if ("function" == typeof a || Object(a) !== a) return a;
                var b = new a.constructor;
                for (var c in a) a[A](c) && (b[c] = h(a[c]));
                return b
            }

            function i(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return a.push(a.splice(c, 1)[0])
            }

            function j(a, b, c) {
                function d() {
                    var e = Array.prototype.slice.call(arguments, 0),
                        f = e.join("␀"),
                        g = d.cache = d.cache || {},
                        h = d.count = d.count || [];
                    return g[A](f) ? (i(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
                }
                return d
            }

            function k(a, b, c, d, e, f) {
                if (null == e) {
                    var g = a - c,
                        h = b - d;
                    return g || h ? (180 + 180 * E.atan2(-h, -g) / I + 360) % 360 : 0
                }
                return k(a, b, e, f) - k(c, d, e, f)
            }

            function l(a) {
                return a % 360 * I / 180
            }

            function m(a) {
                return 180 * a / I % 360
            }

            function n(a) {
                var b = [];
                return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(a, c, d) {
                    return d = d.split(/\s*,\s*|\s+/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (d.length > 2 ? d = d.slice(0, 2) : 2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), b.push("skewX" == c ? ["m", 1, 0, E.tan(l(d[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, E.tan(l(d[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(d)), a
                }), b
            }

            function o(a, b) {
                var c = eb(a),
                    e = new d.Matrix;
                if (c)
                    for (var f = 0, g = c.length; g > f; f++) {
                        var h, i, j, k, l, m = c[f],
                            n = m.length,
                            o = B(m[0]).toLowerCase(),
                            p = m[0] != o,
                            q = p ? e.invert() : 0;
                        "t" == o && 2 == n ? e.translate(m[1], 0) : "t" == o && 3 == n ? p ? (h = q.x(0, 0), i = q.y(0, 0), j = q.x(m[1], m[2]), k = q.y(m[1], m[2]), e.translate(j - h, k - i)) : e.translate(m[1], m[2]) : "r" == o ? 2 == n ? (l = l || b, e.rotate(m[1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n && (p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.rotate(m[1], j, k)) : e.rotate(m[1], m[2], m[3])) : "s" == o ? 2 == n || 3 == n ? (l = l || b, e.scale(m[1], m[n - 1], l.x + l.width / 2, l.y + l.height / 2)) : 4 == n ? p ? (j = q.x(m[2], m[3]), k = q.y(m[2], m[3]), e.scale(m[1], m[1], j, k)) : e.scale(m[1], m[1], m[2], m[3]) : 5 == n && (p ? (j = q.x(m[3], m[4]), k = q.y(m[3], m[4]), e.scale(m[1], m[2], j, k)) : e.scale(m[1], m[2], m[3], m[4])) : "m" == o && 7 == n && e.add(m[1], m[2], m[3], m[4], m[5], m[6])
                    }
                return e
            }

            function p(a, b) {
                if (null == b) {
                    var c = !0;
                    if (b = a.node.getAttribute("linearGradient" == a.type || "radialGradient" == a.type ? "gradientTransform" : "pattern" == a.type ? "patternTransform" : "transform"), !b) return new d.Matrix;
                    b = n(b)
                } else b = d._.rgTransform.test(b) ? B(b).replace(/\.{3}|\u2026/g, a._.transform || J) : n(b), f(b, "array") && (b = d.path ? d.path.toString.call(b) : B(b)), a._.transform = b;
                var e = o(b, a.getBBox(1));
                return c ? e : void(a.matrix = e)
            }

            function q(a) {
                var b = a.node.ownerSVGElement && y(a.node.ownerSVGElement) || a.node.parentNode && y(a.node.parentNode) || d.select("svg") || d(0, 0),
                    c = b.select("defs"),
                    e = null == c ? !1 : c.node;
                return e || (e = w("defs", b.node).node), e
            }

            function r(a) {
                return a.node.ownerSVGElement && y(a.node.ownerSVGElement) || d.select("svg")
            }

            function s(a, b, c) {
                function d(a) {
                    if (null == a) return J;
                    if (a == +a) return a;
                    e(j, {
                        width: a
                    });
                    try {
                        return j.getBBox().width
                    } catch (b) {
                        return 0
                    }
                }

                function f(a) {
                    if (null == a) return J;
                    if (a == +a) return a;
                    e(j, {
                        height: a
                    });
                    try {
                        return j.getBBox().height
                    } catch (b) {
                        return 0
                    }
                }

                function g(d, e) {
                    null == b ? i[d] = e(a.attr(d) || 0) : d == b && (i = e(null == c ? a.attr(d) || 0 : c))
                }
                var h = r(a).node,
                    i = {},
                    j = h.querySelector(".svg---mgr");
                switch (j || (j = e("rect"), e(j, {
                    x: -9e9,
                    y: -9e9,
                    width: 10,
                    height: 10,
                    "class": "svg---mgr",
                    fill: "none"
                }), h.appendChild(j)), a.type) {
                    case "rect":
                        g("rx", d), g("ry", f);
                    case "image":
                        g("width", d), g("height", f);
                    case "text":
                        g("x", d), g("y", f);
                        break;
                    case "circle":
                        g("cx", d), g("cy", f), g("r", d);
                        break;
                    case "ellipse":
                        g("cx", d), g("cy", f), g("rx", d), g("ry", f);
                        break;
                    case "line":
                        g("x1", d), g("x2", d), g("y1", f), g("y2", f);
                        break;
                    case "marker":
                        g("refX", d), g("markerWidth", d), g("refY", f), g("markerHeight", f);
                        break;
                    case "radialGradient":
                        g("fx", d), g("fy", f);
                        break;
                    case "tspan":
                        g("dx", d), g("dy", f);
                        break;
                    default:
                        g(b, d)
                }
                return h.removeChild(j), i
            }

            function t(a) {
                f(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
                for (var b = 0, c = 0, d = this.node; this[b];) delete this[b++];
                for (b = 0; b < a.length; b++) "set" == a[b].type ? a[b].forEach(function(a) {
                    d.appendChild(a.node)
                }) : d.appendChild(a[b].node);
                var e = d.childNodes;
                for (b = 0; b < e.length; b++) this[c++] = y(e[b]);
                return this
            }

            function u(a) {
                if (a.snap in Y) return Y[a.snap];
                var b, c = this.id = V();
                try {
                    b = a.ownerSVGElement
                } catch (d) {}
                if (this.node = a, b && (this.paper = new x(b)), this.type = a.tagName, this.anims = {}, this._ = {
                        transform: []
                    }, a.snap = c, Y[c] = this, "g" == this.type && (this.add = t), this.type in {
                        g: 1,
                        mask: 1,
                        pattern: 1
                    })
                    for (var e in x.prototype) x.prototype[A](e) && (this[e] = x.prototype[e])
            }

            function v(a) {
                this.node = a
            }

            function w(a, b) {
                var c = e(a);
                b.appendChild(c);
                var d = y(c);
                return d
            }

            function x(a, b) {
                var c, d, f, g = x.prototype;
                if (a && "svg" == a.tagName) {
                    if (a.snap in Y) return Y[a.snap];
                    var h = a.ownerDocument;
                    c = new u(a), d = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], d || (d = e("desc"), d.appendChild(h.createTextNode("Created with Snap")), c.node.appendChild(d)), f || (f = e("defs"), c.node.appendChild(f)), c.defs = f;
                    for (var i in g) g[A](i) && (c[i] = g[i]);
                    c.paper = c.root = c
                } else c = w("svg", z.doc.body), e(c.node, {
                    height: b,
                    version: 1.1,
                    width: a,
                    xmlns: X
                });
                return c
            }

            function y(a) {
                return a ? a instanceof u || a instanceof v ? a : a.tagName && "svg" == a.tagName.toLowerCase() ? new x(a) : a.tagName && "object" == a.tagName.toLowerCase() && "image/svg+xml" == a.type ? new x(a.contentDocument.getElementsByTagName("svg")[0]) : new u(a) : a
            }
            d.version = "0.3.0", d.toString = function() {
                return "Snap v" + this.version
            }, d._ = {};
            var z = {
                win: a,
                doc: a.document
            };
            d._.glob = z;
            var A = "hasOwnProperty",
                B = String,
                C = parseFloat,
                D = parseInt,
                E = Math,
                F = E.max,
                G = E.min,
                H = E.abs,
                I = (E.pow, E.PI),
                J = (E.round, ""),
                K = " ",
                L = Object.prototype.toString,
                M = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                N = "	\n\f\r   ᠎             　\u2028\u2029",
                O = (d._.separator = new RegExp("[," + N + "]+"), new RegExp("[" + N + "]", "g"), new RegExp("[" + N + "]*,[" + N + "]*")),
                P = {
                    hs: 1,
                    rg: 1
                },
                Q = new RegExp("([a-z])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
                R = new RegExp("([rstm])[" + N + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + N + "]*,?[" + N + "]*)+)", "ig"),
                S = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + N + "]*,?[" + N + "]*", "ig"),
                T = 0,
                U = "S" + (+new Date).toString(36),
                V = function() {
                    return U + (T++).toString(36)
                },
                W = "http://www.w3.org/1999/xlink",
                X = "http://www.w3.org/2000/svg",
                Y = {},
                Z = d.url = function(a) {
                    return "url('#" + a + "')"
                };
            d._.$ = e, d._.id = V, d.format = function() {
                var a = /\{([^\}]+)\}/g,
                    b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    c = function(a, c, d) {
                        var e = d;
                        return c.replace(b, function(a, b, c, d, f) {
                            b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                        }), e = (null == e || e == d ? a : e) + ""
                    };
                return function(b, d) {
                    return B(b).replace(a, function(a, b) {
                        return c(a, b, d)
                    })
                }
            }(), d._.clone = h, d._.cacher = j, d.rad = l, d.deg = m, d.angle = k, d.is = f, d.snapTo = function(a, b, c) {
                if (c = f(c, "finite") ? c : 10, f(a, "array")) {
                    for (var d = a.length; d--;)
                        if (H(a[d] - b) <= c) return a[d]
                } else {
                    a = +a;
                    var e = b % a;
                    if (c > e) return b - e;
                    if (e > a - c) return b - e + a
                }
                return b
            }, d.getRGB = j(function(a) {
                if (!a || (a = B(a)).indexOf("-") + 1) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: bb
                };
                if ("none" == a) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: bb
                };
                if (!(P[A](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = $(a)), !a) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: bb
                };
                var b, c, e, g, h, i, j = a.match(M);
                return j ? (j[2] && (e = D(j[2].substring(5), 16), c = D(j[2].substring(3, 5), 16), b = D(j[2].substring(1, 3), 16)), j[3] && (e = D((h = j[3].charAt(3)) + h, 16), c = D((h = j[3].charAt(2)) + h, 16), b = D((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), c = C(i[1]), "%" == i[1].slice(-1) && (c *= 2.55), e = C(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = C(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = C(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsb2rgb(b, c, e, g)) : j[6] ? (i = j[6].split(O), b = C(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = C(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = C(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = C(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsl2rgb(b, c, e, g)) : (b = G(E.round(b), 255), c = G(E.round(c), 255), e = G(E.round(e), 255), g = G(F(g, 0), 1), j = {
                    r: b,
                    g: c,
                    b: e,
                    toString: bb
                }, j.hex = "#" + (16777216 | e | c << 8 | b << 16).toString(16).slice(1), j.opacity = f(g, "finite") ? g : 1, j)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: bb
                }
            }, d), d.hsb = j(function(a, b, c) {
                return d.hsb2rgb(a, b, c).hex
            }), d.hsl = j(function(a, b, c) {
                return d.hsl2rgb(a, b, c).hex
            }), d.rgb = j(function(a, b, c, d) {
                if (f(d, "finite")) {
                    var e = E.round;
                    return "rgba(" + [e(a), e(b), e(c), +d.toFixed(2)] + ")"
                }
                return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
            });
            var $ = function(a) {
                    var b = z.doc.getElementsByTagName("head")[0] || z.doc.getElementsByTagName("svg")[0],
                        c = "rgb(255, 0, 0)";
                    return ($ = j(function(a) {
                        if ("red" == a.toLowerCase()) return c;
                        b.style.color = c, b.style.color = a;
                        var d = z.doc.defaultView.getComputedStyle(b, J).getPropertyValue("color");
                        return d == c ? null : d
                    }))(a)
                },
                _ = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                ab = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                bb = function() {
                    return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                },
                cb = function(a, b, c) {
                    if (null == b && f(a, "object") && "r" in a && "g" in a && "b" in a && (c = a.b, b = a.g, a = a.r), null == b && f(a, string)) {
                        var e = d.getRGB(a);
                        a = e.r, b = e.g, c = e.b
                    }
                    return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [a, b, c]
                },
                db = function(a, b, c, e) {
                    a = E.round(255 * a), b = E.round(255 * b), c = E.round(255 * c);
                    var g = {
                        r: a,
                        g: b,
                        b: c,
                        opacity: f(e, "finite") ? e : 1,
                        hex: d.rgb(a, b, c),
                        toString: bb
                    };
                    return f(e, "finite") && (g.opacity = e), g
                };
            d.color = function(a) {
                var b;
                return f(a, "object") && "h" in a && "s" in a && "b" in a ? (b = d.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : f(a, "object") && "h" in a && "s" in a && "l" in a ? (b = d.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (f(a, "string") && (a = d.getRGB(a)), f(a, "object") && "r" in a && "g" in a && "b" in a && !("error" in a) ? (b = d.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = d.rgb2hsb(a), a.v = b.b) : (a = {
                    hex: "none"
                }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = bb, a
            }, d.hsb2rgb = function(a, b, c, d) {
                f(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
                var e, g, h, i, j;
                return a = a % 360 / 60, j = c * b, i = j * (1 - H(a % 2 - 1)), e = g = h = c - j, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], db(e, g, h, d)
            }, d.hsl2rgb = function(a, b, c, d) {
                f(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
                var e, g, h, i, j;
                return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - H(a % 2 - 1)), e = g = h = c - j / 2, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], db(e, g, h, d)
            }, d.rgb2hsb = function(a, b, c) {
                c = cb(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g;
                return f = F(a, b, c), g = f - G(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = 0 == g ? 0 : g / f, {
                    h: d,
                    s: e,
                    b: f,
                    toString: _
                }
            }, d.rgb2hsl = function(a, b, c) {
                c = cb(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g, h, i;
                return g = F(a, b, c), h = G(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
                    h: d,
                    s: e,
                    l: f,
                    toString: ab
                }
            }, d.parsePathString = function(a) {
                if (!a) return null;
                var b = d.path(a);
                if (b.arr) return d.path.clone(b.arr);
                var c = {
                        a: 7,
                        c: 6,
                        o: 2,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        u: 3,
                        z: 0
                    },
                    e = [];
                return f(a, "array") && f(a[0], "array") && (e = d.path.clone(a)), e.length || B(a).replace(Q, function(a, b, d) {
                    var f = [],
                        g = b.toLowerCase();
                    if (d.replace(S, function(a, b) {
                            b && f.push(+b)
                        }), "m" == g && f.length > 2 && (e.push([b].concat(f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == f.length && e.push([b, f[0]]), "r" == g) e.push([b].concat(f));
                    else
                        for (; f.length >= c[g] && (e.push([b].concat(f.splice(0, c[g]))), c[g]););
                }), e.toString = d.path.toString, b.arr = d.path.clone(e), e
            };
            var eb = d.parseTransformString = function(a) {
                if (!a) return null;
                var b = [];
                return f(a, "array") && f(a[0], "array") && (b = d.path.clone(a)), b.length || B(a).replace(R, function(a, c, d) {
                    {
                        var e = [];
                        c.toLowerCase()
                    }
                    d.replace(S, function(a, b) {
                        b && e.push(+b)
                    }), b.push([c].concat(e))
                }), b.toString = d.path.toString, b
            };
            d._.svgTransform2string = n, d._.rgTransform = new RegExp("^[a-z][" + N + "]*-?\\.?\\d", "i"), d._.transform2matrix = o, d._unit2px = s;
            z.doc.contains || z.doc.compareDocumentPosition ? function(a, b) {
                var c = 9 == a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b;)
                        if (b = b.parentNode, b == a) return !0;
                return !1
            };
            d._.getSomeDefs = q, d._.getSomeSVG = r, d.select = function(a) {
                    return y(z.doc.querySelector(a))
                }, d.selectAll = function(a) {
                    for (var b = z.doc.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(y(b[e]));
                    return c
                }, setInterval(function() {
                    for (var a in Y)
                        if (Y[A](a)) {
                            var b = Y[a],
                                c = b.node;
                            ("svg" != b.type && !c.ownerSVGElement || "svg" == b.type && (!c.parentNode || "ownerSVGElement" in c.parentNode && !c.ownerSVGElement)) && delete Y[a]
                        }
                }, 1e4),
                function(a) {
                    function g(a) {
                        function b(a, b) {
                            var c = e(a.node, b);
                            c = c && c.match(g), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (i[c] = (i[c] || []).concat(function(c) {
                                var d = {};
                                d[b] = Z(c), e(a.node, d)
                            })))
                        }

                        function c(a) {
                            var b = e(a.node, "xlink:href");
                            b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function(b) {
                                a.attr("xlink:href", "#" + b)
                            })))
                        }
                        for (var d, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
                            d = f[j], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
                            var l = e(d.node, "id");
                            l && (e(d.node, {
                                id: d.id
                            }), h.push({
                                old: l,
                                id: d.id
                            }))
                        }
                        for (j = 0, k = h.length; k > j; j++) {
                            var m = i[h[j].old];
                            if (m)
                                for (var n = 0, o = m.length; o > n; n++) m[n](h[j].id)
                        }
                    }

                    function h(a, b, c) {
                        return function(d) {
                            var e = d.slice(a, b);
                            return 1 == e.length && (e = e[0]), c ? c(e) : e
                        }
                    }

                    function i(a) {
                        return function() {
                            var b = a ? "<" + this.type : "",
                                c = this.node.attributes,
                                d = this.node.childNodes;
                            if (a)
                                for (var e = 0, f = c.length; f > e; e++) b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                            if (d.length) {
                                for (a && (b += ">"), e = 0, f = d.length; f > e; e++) 3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += y(d[e]).toString());
                                a && (b += "</" + this.type + ">")
                            } else a && (b += "/>");
                            return b
                        }
                    }
                    a.attr = function(a, c) {
                        {
                            var d = this;
                            d.node
                        }
                        if (!a) return d;
                        if (f(a, "string")) {
                            if (!(arguments.length > 1)) return b("snap.util.getattr." + a, d).firstDefined();
                            var e = {};
                            e[a] = c, a = e
                        }
                        for (var g in a) a[A](g) && b("snap.util.attr." + g, d, a[g]);
                        return d
                    }, a.getBBox = function(a) {
                        if (!d.Matrix || !d.path) return this.node.getBBox();
                        var b = this,
                            c = new d.Matrix;
                        if (b.removed) return d._.box();
                        for (;
                            "use" == b.type;)
                            if (a || (c = c.add(b.transform().localMatrix.translate(b.attr("x") || 0, b.attr("y") || 0))), b.original) b = b.original;
                            else {
                                var e = b.attr("xlink:href");
                                b = b.original = b.node.ownerDocument.getElementById(e.substring(e.indexOf("#") + 1))
                            }
                        var f = b._,
                            g = d.path.get[b.type] || d.path.get.deflt;
                        try {
                            return a ? (f.bboxwt = g ? d.path.getBBox(b.realPath = g(b)) : d._.box(b.node.getBBox()), d._.box(f.bboxwt)) : (b.realPath = g(b), b.matrix = b.transform().localMatrix, f.bbox = d.path.getBBox(d.path.map(b.realPath, c.add(b.matrix))), d._.box(f.bbox))
                        } catch (h) {
                            return d._.box()
                        }
                    };
                    var j = function() {
                        return this.string
                    };
                    a.transform = function(a) {
                        var b = this._;
                        if (null == a) {
                            for (var c, f = this, g = new d.Matrix(this.node.getCTM()), h = p(this), i = [h], k = new d.Matrix, l = h.toTransformString(), m = B(h) == B(this.matrix) ? B(b.transform) : l;
                                "svg" != f.type && (f = f.parent());) i.push(p(f));
                            for (c = i.length; c--;) k.add(i[c]);
                            return {
                                string: m,
                                globalMatrix: g,
                                totalMatrix: k,
                                localMatrix: h,
                                diffMatrix: g.clone().add(h.invert()),
                                global: g.toTransformString(),
                                total: k.toTransformString(),
                                local: l,
                                toString: j
                            }
                        }
                        return a instanceof d.Matrix ? this.matrix = a : p(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? e(this.node, {
                            gradientTransform: this.matrix
                        }) : "pattern" == this.type ? e(this.node, {
                            patternTransform: this.matrix
                        }) : e(this.node, {
                            transform: this.matrix
                        })), this
                    }, a.parent = function() {
                        return y(this.node.parentNode)
                    }, a.append = a.add = function(a) {
                        if (a) {
                            if ("set" == a.type) {
                                var b = this;
                                return a.forEach(function(a) {
                                    b.add(a)
                                }), this
                            }
                            a = y(a), this.node.appendChild(a.node), a.paper = this.paper
                        }
                        return this
                    }, a.appendTo = function(a) {
                        return a && (a = y(a), a.append(this)), this
                    }, a.prepend = function(a) {
                        if (a) {
                            if ("set" == a.type) {
                                var b, c = this;
                                return a.forEach(function(a) {
                                    b ? b.after(a) : c.prepend(a), b = a
                                }), this
                            }
                            a = y(a);
                            var d = a.parent();
                            this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), d && d.add()
                        }
                        return this
                    }, a.prependTo = function(a) {
                        return a = y(a), a.prepend(this), this
                    }, a.before = function(a) {
                        if ("set" == a.type) {
                            var b = this;
                            return a.forEach(function(a) {
                                var c = a.parent();
                                b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
                            }), this.parent().add(), this
                        }
                        a = y(a);
                        var c = a.parent();
                        return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
                    }, a.after = function(a) {
                        a = y(a);
                        var b = a.parent();
                        return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
                    }, a.insertBefore = function(a) {
                        a = y(a);
                        var b = this.parent();
                        return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
                    }, a.insertAfter = function(a) {
                        a = y(a);
                        var b = this.parent();
                        return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
                    }, a.remove = function() {
                        var a = this.parent();
                        return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
                    }, a.select = function(a) {
                        return y(this.node.querySelector(a))
                    }, a.selectAll = function(a) {
                        for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++) c.push(y(b[e]));
                        return c
                    }, a.asPX = function(a, b) {
                        return null == b && (b = this.attr(a)), +s(this, a, b)
                    }, a.use = function() {
                        var a, b = this.node.id;
                        return b || (b = this.id, e(this.node, {
                            id: b
                        })), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? w(this.type, this.node.parentNode) : w("use", this.node.parentNode), e(a.node, {
                            "xlink:href": "#" + b
                        }), a.original = this, a
                    };
                    var k = /\S+/g;
                    a.addClass = function(a) {
                        var b, c, d, e, f = (a || "").match(k) || [],
                            g = this.node,
                            h = g.className.baseVal,
                            i = h.match(k) || [];
                        if (f.length) {
                            for (b = 0; d = f[b++];) c = i.indexOf(d), ~c || i.push(d);
                            e = i.join(" "), h != e && (g.className.baseVal = e)
                        }
                        return this
                    }, a.removeClass = function(a) {
                        var b, c, d, e, f = (a || "").match(k) || [],
                            g = this.node,
                            h = g.className.baseVal,
                            i = h.match(k) || [];
                        if (i.length) {
                            for (b = 0; d = f[b++];) c = i.indexOf(d), ~c && i.splice(c, 1);
                            e = i.join(" "), h != e && (g.className.baseVal = e)
                        }
                        return this
                    }, a.hasClass = function(a) {
                        var b = this.node,
                            c = b.className.baseVal,
                            d = c.match(k) || [];
                        return !!~d.indexOf(a)
                    }, a.toggleClass = function(a, b) {
                        if (null != b) return b ? this.addClass(a) : this.removeClass(a);
                        var c, d, e, f, g = (a || "").match(k) || [],
                            h = this.node,
                            i = h.className.baseVal,
                            j = i.match(k) || [];
                        for (c = 0; e = g[c++];) d = j.indexOf(e), ~d ? j.splice(d, 1) : j.push(e);
                        return f = j.join(" "), i != f && (h.className.baseVal = f), this
                    }, a.clone = function() {
                        var a = y(this.node.cloneNode(!0));
                        return e(a.node, "id") && e(a.node, {
                            id: a.id
                        }), g(a), a.insertAfter(this), a
                    }, a.toDefs = function() {
                        var a = q(this);
                        return a.appendChild(this.node), this
                    }, a.pattern = a.toPattern = function(a, b, c, d) {
                        var g = w("pattern", q(this));
                        return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, a = a.x), e(g.node, {
                            x: a,
                            y: b,
                            width: c,
                            height: d,
                            patternUnits: "userSpaceOnUse",
                            id: g.id,
                            viewBox: [a, b, c, d].join(" ")
                        }), g.node.appendChild(this.node), g
                    }, a.marker = function(a, b, c, d, g, h) {
                        var i = w("marker", q(this));
                        return null == a && (a = this.getBBox()), f(a, "object") && "x" in a && (b = a.y, c = a.width, d = a.height, g = a.refX || a.cx, h = a.refY || a.cy, a = a.x), e(i.node, {
                            viewBox: [a, b, c, d].join(K),
                            markerWidth: c,
                            markerHeight: d,
                            orient: "auto",
                            refX: g || 0,
                            refY: h || 0,
                            id: i.id
                        }), i.node.appendChild(this.node), i
                    };
                    var l = function(a, b, d, e) {
                        "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
                    };
                    d._.Animation = l, d.animation = function(a, b, c, d) {
                        return new l(a, b, c, d)
                    }, a.inAnim = function() {
                        var a = this,
                            b = [];
                        for (var c in a.anims) a.anims[A](c) && ! function(a) {
                            b.push({
                                anim: new l(a._attrs, a.dur, a.easing, a._callback),
                                mina: a,
                                curStatus: a.status(),
                                status: function(b) {
                                    return a.status(b)
                                },
                                stop: function() {
                                    a.stop()
                                }
                            })
                        }(a.anims[c]);
                        return b
                    }, d.animate = function(a, d, e, f, g, h) {
                        "function" != typeof g || g.length || (h = g, g = c.linear);
                        var i = c.time(),
                            j = c(a, d, i, i + f, c.time, e, g);
                        return h && b.once("mina.finish." + j.id, h), j
                    }, a.stop = function() {
                        for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++) a[b].stop();
                        return this
                    }, a.animate = function(a, d, e, g) {
                        "function" != typeof e || e.length || (g = e, e = c.linear), a instanceof l && (g = a.callback, e = a.easing, d = e.dur, a = a.attr);
                        var i, j, k, m, n = [],
                            o = [],
                            p = {},
                            q = this;
                        for (var r in a)
                            if (a[A](r)) {
                                q.equal ? (m = q.equal(r, B(a[r])), i = m.from, j = m.to, k = m.f) : (i = +q.attr(r), j = +a[r]);
                                var s = f(i, "array") ? i.length : 1;
                                p[r] = h(n.length, n.length + s, k), n = n.concat(i), o = o.concat(j)
                            }
                        var t = c.time(),
                            u = c(n, o, t, t + d, c.time, function(a) {
                                var b = {};
                                for (var c in p) p[A](c) && (b[c] = p[c](a));
                                q.attr(b)
                            }, e);
                        return q.anims[u.id] = u, u._attrs = a, u._callback = g, b("snap.animcreated." + q.id, u), b.once("mina.finish." + u.id, function() {
                            delete q.anims[u.id], g && g.call(q)
                        }), b.once("mina.stop." + u.id, function() {
                            delete q.anims[u.id]
                        }), q
                    };
                    var m = {};
                    a.data = function(a, c) {
                        var e = m[this.id] = m[this.id] || {};
                        if (0 == arguments.length) return b("snap.data.get." + this.id, this, e, null), e;
                        if (1 == arguments.length) {
                            if (d.is(a, "object")) {
                                for (var f in a) a[A](f) && this.data(f, a[f]);
                                return this
                            }
                            return b("snap.data.get." + this.id, this, e[a], a), e[a]
                        }
                        return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
                    }, a.removeData = function(a) {
                        return null == a ? m[this.id] = {} : m[this.id] && delete m[this.id][a], this
                    }, a.outerSVG = a.toString = i(1), a.innerSVG = i()
                }(u.prototype), d.parse = function(a) {
                    var b = z.doc.createDocumentFragment(),
                        c = !0,
                        d = z.doc.createElement("div");
                    if (a = B(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])
                        if (c) b = a;
                        else
                            for (; a.firstChild;) b.appendChild(a.firstChild);
                    return d.innerHTML = J, new v(b)
                }, v.prototype.select = u.prototype.select, v.prototype.selectAll = u.prototype.selectAll, d.fragment = function() {
                    for (var a = Array.prototype.slice.call(arguments, 0), b = z.doc.createDocumentFragment(), c = 0, e = a.length; e > c; c++) {
                        var f = a[c];
                        f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(d.parse(f).node)
                    }
                    return new v(b)
                }, d._.make = w, d._.wrap = y, x.prototype.el = function(a, b) {
                    var c = w(a, this.node);
                    return b && c.attr(b), c
                }, b.on("snap.util.getattr", function() {
                    var a = b.nt();
                    a = a.substring(a.lastIndexOf(".") + 1);
                    var c = a.replace(/[A-Z]/g, function(a) {
                        return "-" + a.toLowerCase()
                    });
                    return fb[A](c) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : e(this.node, a)
                });
            var fb = {
                "alignment-baseline": 0,
                "baseline-shift": 0,
                clip: 0,
                "clip-path": 0,
                "clip-rule": 0,
                color: 0,
                "color-interpolation": 0,
                "color-interpolation-filters": 0,
                "color-profile": 0,
                "color-rendering": 0,
                cursor: 0,
                direction: 0,
                display: 0,
                "dominant-baseline": 0,
                "enable-background": 0,
                fill: 0,
                "fill-opacity": 0,
                "fill-rule": 0,
                filter: 0,
                "flood-color": 0,
                "flood-opacity": 0,
                font: 0,
                "font-family": 0,
                "font-size": 0,
                "font-size-adjust": 0,
                "font-stretch": 0,
                "font-style": 0,
                "font-variant": 0,
                "font-weight": 0,
                "glyph-orientation-horizontal": 0,
                "glyph-orientation-vertical": 0,
                "image-rendering": 0,
                kerning: 0,
                "letter-spacing": 0,
                "lighting-color": 0,
                marker: 0,
                "marker-end": 0,
                "marker-mid": 0,
                "marker-start": 0,
                mask: 0,
                opacity: 0,
                overflow: 0,
                "pointer-events": 0,
                "shape-rendering": 0,
                "stop-color": 0,
                "stop-opacity": 0,
                stroke: 0,
                "stroke-dasharray": 0,
                "stroke-dashoffset": 0,
                "stroke-linecap": 0,
                "stroke-linejoin": 0,
                "stroke-miterlimit": 0,
                "stroke-opacity": 0,
                "stroke-width": 0,
                "text-anchor": 0,
                "text-decoration": 0,
                "text-rendering": 0,
                "unicode-bidi": 0,
                visibility: 0,
                "word-spacing": 0,
                "writing-mode": 0
            };
            b.on("snap.util.attr", function(a) {
                    var c = b.nt(),
                        d = {};
                    c = c.substring(c.lastIndexOf(".") + 1), d[c] = a;
                    var f = c.replace(/-(\w)/gi, function(a, b) {
                            return b.toUpperCase()
                        }),
                        g = c.replace(/[A-Z]/g, function(a) {
                            return "-" + a.toLowerCase()
                        });
                    fb[A](g) ? this.node.style[f] = null == a ? J : a : e(this.node, d)
                }),
                function() {}(x.prototype), d.ajax = function(a, c, d, e) {
                    var g = new XMLHttpRequest,
                        h = V();
                    if (g) {
                        if (f(c, "function")) e = d, d = c, c = null;
                        else if (f(c, "object")) {
                            var i = [];
                            for (var j in c) c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                            c = i.join("&")
                        }
                        return g.open(c ? "POST" : "GET", a, !0), c && (g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), g.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function() {
                            4 == g.readyState && b("snap.ajax." + h + "." + g.status, e, g)
                        }, 4 == g.readyState ? g : (g.send(c), g)
                    }
                }, d.load = function(a, b, c) {
                    d.ajax(a, function(a) {
                        var e = d.parse(a.responseText);
                        c ? b.call(c, e) : b(e)
                    })
                };
            var gb = function(a) {
                var b = a.getBoundingClientRect(),
                    c = a.ownerDocument,
                    d = c.body,
                    e = c.documentElement,
                    f = e.clientTop || d.clientTop || 0,
                    h = e.clientLeft || d.clientLeft || 0,
                    i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
                    j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
                return {
                    y: i,
                    x: j
                }
            };
            return d.getElementByPoint = function(a, b) {
                var c = this,
                    d = (c.canvas, z.doc.elementFromPoint(a, b));
                if (z.win.opera && "svg" == d.tagName) {
                    var e = gb(d),
                        f = d.createSVGRect();
                    f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
                    var g = d.getIntersectionList(f, null);
                    g.length && (d = g[g.length - 1])
                }
                return d ? y(d) : null
            }, d.plugin = function(a) {
                a(d, u, x, z, v)
            }, z.win.Snap = d, d
        }();
    return d.plugin(function(a) {
        function b(a, b, d, e, f, g) {
            return null == b && "[object SVGMatrix]" == c.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +d, this.d = +e, this.e = +f, this.f = +g) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }
        var c = Object.prototype.toString,
            d = String,
            e = Math,
            f = "";
        ! function(c) {
            function g(a) {
                return a[0] * a[0] + a[1] * a[1]
            }

            function h(a) {
                var b = e.sqrt(g(a));
                a[0] && (a[0] /= b), a[1] && (a[1] /= b)
            }
            c.add = function(a, c, d, e, f, g) {
                var h, i, j, k, l = [
                        [],
                        [],
                        []
                    ],
                    m = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1]
                    ],
                    n = [
                        [a, d, f],
                        [c, e, g],
                        [0, 0, 1]
                    ];
                for (a && a instanceof b && (n = [
                        [a.a, a.c, a.e],
                        [a.b, a.d, a.f],
                        [0, 0, 1]
                    ]), h = 0; 3 > h; h++)
                    for (i = 0; 3 > i; i++) {
                        for (k = 0, j = 0; 3 > j; j++) k += m[h][j] * n[j][i];
                        l[h][i] = k
                    }
                return this.a = l[0][0], this.b = l[1][0], this.c = l[0][1], this.d = l[1][1], this.e = l[0][2], this.f = l[1][2], this
            }, c.invert = function() {
                var a = this,
                    c = a.a * a.d - a.b * a.c;
                return new b(a.d / c, -a.b / c, -a.c / c, a.a / c, (a.c * a.f - a.d * a.e) / c, (a.b * a.e - a.a * a.f) / c)
            }, c.clone = function() {
                return new b(this.a, this.b, this.c, this.d, this.e, this.f)
            }, c.translate = function(a, b) {
                return this.add(1, 0, 0, 1, a, b)
            }, c.scale = function(a, b, c, d) {
                return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
            }, c.rotate = function(b, c, d) {
                b = a.rad(b), c = c || 0, d = d || 0;
                var f = +e.cos(b).toFixed(9),
                    g = +e.sin(b).toFixed(9);
                return this.add(f, g, -g, f, c, d), this.add(1, 0, 0, 1, -c, -d)
            }, c.x = function(a, b) {
                return a * this.a + b * this.c + this.e
            }, c.y = function(a, b) {
                return a * this.b + b * this.d + this.f
            }, c.get = function(a) {
                return +this[d.fromCharCode(97 + a)].toFixed(4)
            }, c.toString = function() {
                return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, c.offset = function() {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, c.determinant = function() {
                return this.a * this.d - this.b * this.c
            }, c.split = function() {
                var b = {};
                b.dx = this.e, b.dy = this.f;
                var c = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                b.scalex = e.sqrt(g(c[0])), h(c[0]), b.shear = c[0][0] * c[1][0] + c[0][1] * c[1][1], c[1] = [c[1][0] - c[0][0] * b.shear, c[1][1] - c[0][1] * b.shear], b.scaley = e.sqrt(g(c[1])), h(c[1]), b.shear /= b.scaley, this.determinant() < 0 && (b.scalex = -b.scalex);
                var d = -c[0][1],
                    f = c[1][1];
                return 0 > f ? (b.rotate = a.deg(e.acos(f)), 0 > d && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(e.asin(d)), b.isSimple = !(+b.shear.toFixed(9) || b.scalex.toFixed(9) != b.scaley.toFixed(9) && b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate, b
            }, c.toTransformString = function(a) {
                var b = a || this.split();
                return +b.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : f) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : f) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : f))
            }
        }(b.prototype), a.Matrix = b, a.matrix = function(a, c, d, e, f, g) {
            return new b(a, c, d, e, f, g)
        }
    }), d.plugin(function(a, c, d, e, f) {
        function g(d) {
            return function(e) {
                if (b.stop(), e instanceof f && 1 == e.node.childNodes.length && ("radialGradient" == e.node.firstChild.tagName || "linearGradient" == e.node.firstChild.tagName || "pattern" == e.node.firstChild.tagName) && (e = e.node.firstChild, n(this).appendChild(e), e = l(e)), e instanceof c)
                    if ("radialGradient" == e.type || "linearGradient" == e.type || "pattern" == e.type) {
                        e.node.id || p(e.node, {
                            id: e.id
                        });
                        var g = q(e.node.id)
                    } else g = e.attr(d);
                else if (g = a.color(e), g.error) {
                    var h = a(n(this).ownerSVGElement).gradient(e);
                    h ? (h.node.id || p(h.node, {
                        id: h.id
                    }), g = q(h.node.id)) : g = e
                } else g = r(g);
                var i = {};
                i[d] = g, p(this.node, i), this.node.style[d] = t
            }
        }

        function h(a) {
            b.stop(), a == +a && (a += "px"), this.node.style.fontSize = a
        }

        function i(a) {
            for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && b.push(1 == f.childNodes.length && 3 == f.firstChild.nodeType ? f.firstChild.nodeValue : i(f))
            }
            return b
        }

        function j() {
            return b.stop(), this.node.style.fontSize
        }
        var k = a._.make,
            l = a._.wrap,
            m = a.is,
            n = a._.getSomeDefs,
            o = /^url\(#?([^)]+)\)$/,
            p = a._.$,
            q = a.url,
            r = String,
            s = a._.separator,
            t = "";
        b.on("snap.util.attr.mask", function(a) {
                if (a instanceof c || a instanceof f) {
                    if (b.stop(), a instanceof f && 1 == a.node.childNodes.length && (a = a.node.firstChild, n(this).appendChild(a), a = l(a)), "mask" == a.type) var d = a;
                    else d = k("mask", n(this)), d.node.appendChild(a.node);
                    !d.node.id && p(d.node, {
                        id: d.id
                    }), p(this.node, {
                        mask: q(d.id)
                    })
                }
            }),
            function(a) {
                b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
            }(function(a) {
                if (a instanceof c || a instanceof f) {
                    if (b.stop(), "clipPath" == a.type) var d = a;
                    else d = k("clipPath", n(this)), d.node.appendChild(a.node), !d.node.id && p(d.node, {
                        id: d.id
                    });
                    p(this.node, {
                        "clip-path": q(d.id)
                    })
                }
            }), b.on("snap.util.attr.fill", g("fill")), b.on("snap.util.attr.stroke", g("stroke"));
        var u = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        b.on("snap.util.grad.parse", function(a) {
                a = r(a);
                var b = a.match(u);
                if (!b) return null;
                var c = b[1],
                    d = b[2],
                    e = b[3];
                return d = d.split(/\s*,\s*/).map(function(a) {
                    return +a == a ? +a : a
                }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function(a) {
                    a = a.split(":");
                    var b = {
                        color: a[0]
                    };
                    return a[1] && (b.offset = parseFloat(a[1])), b
                }), {
                    type: c,
                    params: d,
                    stops: e
                }
            }), b.on("snap.util.attr.d", function(c) {
                b.stop(), m(c, "array") && m(c[0], "array") && (c = a.path.toString.call(c)), c = r(c), c.match(/[ruo]/i) && (c = a.path.toAbsolute(c)), p(this.node, {
                    d: c
                })
            })(-1), b.on("snap.util.attr.#text", function(a) {
                b.stop(), a = r(a);
                for (var c = e.doc.createTextNode(a); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
                this.node.appendChild(c)
            })(-1), b.on("snap.util.attr.path", function(a) {
                b.stop(), this.attr({
                    d: a
                })
            })(-1), b.on("snap.util.attr.class", function(a) {
                b.stop(), this.node.className.baseVal = a
            })(-1), b.on("snap.util.attr.viewBox", function(a) {
                var c;
                c = m(a, "object") && "x" in a ? [a.x, a.y, a.width, a.height].join(" ") : m(a, "array") ? a.join(" ") : a, p(this.node, {
                    viewBox: c
                }), b.stop()
            })(-1), b.on("snap.util.attr.transform", function(a) {
                this.transform(a), b.stop()
            })(-1), b.on("snap.util.attr.r", function(a) {
                "rect" == this.type && (b.stop(), p(this.node, {
                    rx: a,
                    ry: a
                }))
            })(-1), b.on("snap.util.attr.textpath", function(a) {
                if (b.stop(), "text" == this.type) {
                    var d, e, f;
                    if (!a && this.textPath) {
                        for (e = this.textPath; e.node.firstChild;) this.node.appendChild(e.node.firstChild);
                        return e.remove(), void delete this.textPath
                    }
                    if (m(a, "string")) {
                        var g = n(this),
                            h = l(g.parentNode).path(a);
                        g.appendChild(h.node), d = h.id, h.attr({
                            id: d
                        })
                    } else a = l(a), a instanceof c && (d = a.attr("id"), d || (d = a.id, a.attr({
                        id: d
                    })));
                    if (d)
                        if (e = this.textPath, f = this.node, e) e.attr({
                            "xlink:href": "#" + d
                        });
                        else {
                            for (e = p("textPath", {
                                    "xlink:href": "#" + d
                                }); f.firstChild;) e.appendChild(f.firstChild);
                            f.appendChild(e), this.textPath = l(e)
                        }
                }
            })(-1), b.on("snap.util.attr.text", function(a) {
                if ("text" == this.type) {
                    for (var c = this.node, d = function(a) {
                            var b = p("tspan");
                            if (m(a, "array"))
                                for (var c = 0; c < a.length; c++) b.appendChild(d(a[c]));
                            else b.appendChild(e.doc.createTextNode(a));
                            return b.normalize && b.normalize(), b
                        }; c.firstChild;) c.removeChild(c.firstChild);
                    for (var f = d(a); f.firstChild;) c.appendChild(f.firstChild)
                }
                b.stop()
            })(-1), b.on("snap.util.attr.fontSize", h)(-1), b.on("snap.util.attr.font-size", h)(-1), b.on("snap.util.getattr.transform", function() {
                return b.stop(), this.transform()
            })(-1), b.on("snap.util.getattr.textpath", function() {
                return b.stop(), this.textPath
            })(-1),
            function() {
                function c(c) {
                    return function() {
                        b.stop();
                        var d = e.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + c);
                        return "none" == d ? d : a(e.doc.getElementById(d.match(o)[1]))
                    }
                }

                function d(a) {
                    return function(c) {
                        b.stop();
                        var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                        if ("" == c || !c) return void(this.node.style[d] = "none");
                        if ("marker" == c.type) {
                            var e = c.node.id;
                            return e || p(c.node, {
                                id: c.id
                            }), void(this.node.style[d] = q(e))
                        }
                    }
                }
                b.on("snap.util.getattr.marker-end", c("end"))(-1), b.on("snap.util.getattr.markerEnd", c("end"))(-1), b.on("snap.util.getattr.marker-start", c("start"))(-1), b.on("snap.util.getattr.markerStart", c("start"))(-1), b.on("snap.util.getattr.marker-mid", c("mid"))(-1), b.on("snap.util.getattr.markerMid", c("mid"))(-1), b.on("snap.util.attr.marker-end", d("end"))(-1), b.on("snap.util.attr.markerEnd", d("end"))(-1), b.on("snap.util.attr.marker-start", d("start"))(-1), b.on("snap.util.attr.markerStart", d("start"))(-1), b.on("snap.util.attr.marker-mid", d("mid"))(-1), b.on("snap.util.attr.markerMid", d("mid"))(-1)
            }(), b.on("snap.util.getattr.r", function() {
                return "rect" == this.type && p(this.node, "rx") == p(this.node, "ry") ? (b.stop(), p(this.node, "rx")) : void 0
            })(-1), b.on("snap.util.getattr.text", function() {
                if ("text" == this.type || "tspan" == this.type) {
                    b.stop();
                    var a = i(this.node);
                    return 1 == a.length ? a[0] : a
                }
            })(-1), b.on("snap.util.getattr.#text", function() {
                return this.node.textContent
            })(-1), b.on("snap.util.getattr.viewBox", function() {
                b.stop();
                var c = p(this.node, "viewBox");
                return c ? (c = c.split(s), a._.box(+c[0], +c[1], +c[2], +c[3])) : void 0
            })(-1), b.on("snap.util.getattr.points", function() {
                var a = p(this.node, "points");
                return b.stop(), a ? a.split(s) : void 0
            })(-1), b.on("snap.util.getattr.path", function() {
                var a = p(this.node, "d");
                return b.stop(), a
            })(-1), b.on("snap.util.getattr.class", function() {
                return this.node.className.baseVal
            })(-1), b.on("snap.util.getattr.fontSize", j)(-1), b.on("snap.util.getattr.font-size", j)(-1)
    }), d.plugin(function() {
        function a(a) {
            return a
        }

        function c(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }
        var d = {
                "+": function(a, b) {
                    return a + b
                },
                "-": function(a, b) {
                    return a - b
                },
                "/": function(a, b) {
                    return a / b
                },
                "*": function(a, b) {
                    return a * b
                }
            },
            e = String,
            f = /[a-z]+$/i,
            g = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        b.on("snap.util.attr", function(a) {
            var c = e(a).match(g);
            if (c) {
                var h = b.nt(),
                    i = h.substring(h.lastIndexOf(".") + 1),
                    j = this.attr(i),
                    k = {};
                b.stop();
                var l = c[3] || "",
                    m = j.match(f),
                    n = d[c[1]];
                if (m && m == l ? a = n(parseFloat(j), +c[2]) : (j = this.asPX(i), a = n(this.asPX(i), this.asPX(i, c[2] + l))), isNaN(j) || isNaN(a)) return;
                k[i] = a, this.attr(k)
            }
        })(-10), b.on("snap.util.equal", function(h, i) {
            var j = e(this.attr(h) || ""),
                k = e(i).match(g);
            if (k) {
                b.stop();
                var l = k[3] || "",
                    m = j.match(f),
                    n = d[k[1]];
                return m && m == l ? {
                    from: parseFloat(j),
                    to: n(parseFloat(j), +k[2]),
                    f: c(m)
                } : (j = this.asPX(h), {
                    from: j,
                    to: n(j, this.asPX(h, k[2] + l)),
                    f: a
                })
            }
        })(-10)
    }), d.plugin(function(a, c, d, e) {
        var f = d.prototype,
            g = a.is;
        f.rect = function(a, b, c, d, e, f) {
            var h;
            return null == f && (f = e), g(a, "object") && "[object Object]" == a ? h = a : null != a && (h = {
                x: a,
                y: b,
                width: c,
                height: d
            }, null != e && (h.rx = e, h.ry = f)), this.el("rect", h)
        }, f.circle = function(a, b, c) {
            var d;
            return g(a, "object") && "[object Object]" == a ? d = a : null != a && (d = {
                cx: a,
                cy: b,
                r: c
            }), this.el("circle", d)
        };
        var h = function() {
            function a() {
                this.parentNode.removeChild(this)
            }
            return function(b, c) {
                var d = e.doc.createElement("img"),
                    f = e.doc.body;
                d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function() {
                    c.call(d), d.onload = d.onerror = null, f.removeChild(d)
                }, d.onerror = a, f.appendChild(d), d.src = b
            }
        }();
        f.image = function(b, c, d, e, f) {
                var i = this.el("image");
                if (g(b, "object") && "src" in b) i.attr(b);
                else if (null != b) {
                    var j = {
                        "xlink:href": b,
                        preserveAspectRatio: "none"
                    };
                    null != c && null != d && (j.x = c, j.y = d), null != e && null != f ? (j.width = e, j.height = f) : h(b, function() {
                        a._.$(i.node, {
                            width: this.offsetWidth,
                            height: this.offsetHeight
                        })
                    }), a._.$(i.node, j)
                }
                return i
            }, f.ellipse = function(a, b, c, d) {
                var e;
                return g(a, "object") && "[object Object]" == a ? e = a : null != a && (e = {
                    cx: a,
                    cy: b,
                    rx: c,
                    ry: d
                }), this.el("ellipse", e)
            }, f.path = function(a) {
                var b;
                return g(a, "object") && !g(a, "array") ? b = a : a && (b = {
                    d: a
                }), this.el("path", b)
            }, f.group = f.g = function(a) {
                var b = this.el("g");
                return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
            }, f.svg = function(a, b, c, d, e, f, h, i) {
                var j = {};
                return g(a, "object") && null == b ? j = a : (null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != h && null != i && (j.viewBox = [e, f, h, i])), this.el("svg", j)
            }, f.mask = function(a) {
                var b = this.el("mask");
                return 1 == arguments.length && a && !a.type ? b.attr(a) : arguments.length && b.add(Array.prototype.slice.call(arguments, 0)), b
            }, f.ptrn = function(a, b, c, d, e, f, h, i) {
                if (g(a, "object")) var j = a;
                else arguments.length ? (j = {}, null != a && (j.x = a), null != b && (j.y = b), null != c && (j.width = c), null != d && (j.height = d), null != e && null != f && null != h && null != i && (j.viewBox = [e, f, h, i])) : j = {
                    patternUnits: "userSpaceOnUse"
                };
                return this.el("pattern", j)
            }, f.use = function(a) {
                if (null != a) {
                    {
                        make("use", this.node)
                    }
                    return a instanceof c && (a.attr("id") || a.attr({
                        id: ID()
                    }), a = a.attr("id")), this.el("use", {
                        "xlink:href": a
                    })
                }
                return c.prototype.use.call(this)
            }, f.text = function(a, b, c) {
                var d = {};
                return g(a, "object") ? d = a : null != a && (d = {
                    x: a,
                    y: b,
                    text: c || ""
                }), this.el("text", d)
            }, f.line = function(a, b, c, d) {
                var e = {};
                return g(a, "object") ? e = a : null != a && (e = {
                    x1: a,
                    x2: c,
                    y1: b,
                    y2: d
                }), this.el("line", e)
            }, f.polyline = function(a) {
                arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                var b = {};
                return g(a, "object") && !g(a, "array") ? b = a : null != a && (b = {
                    points: a
                }), this.el("polyline", b)
            }, f.polygon = function(a) {
                arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                var b = {};
                return g(a, "object") && !g(a, "array") ? b = a : null != a && (b = {
                    points: a
                }), this.el("polygon", b)
            },
            function() {
                function c() {
                    return this.selectAll("stop")
                }

                function d(b, c) {
                    var d = j("stop"),
                        e = {
                            offset: +c + "%"
                        };
                    return b = a.color(b), e["stop-color"] = b.hex, b.opacity < 1 && (e["stop-opacity"] = b.opacity), j(d, e), this.node.appendChild(d), this
                }

                function e() {
                    if ("linearGradient" == this.type) {
                        var b = j(this.node, "x1") || 0,
                            c = j(this.node, "x2") || 1,
                            d = j(this.node, "y1") || 0,
                            e = j(this.node, "y2") || 0;
                        return a._.box(b, d, math.abs(c - b), math.abs(e - d))
                    }
                    var f = this.node.cx || .5,
                        g = this.node.cy || .5,
                        h = this.node.r || 0;
                    return a._.box(f - h, g - h, 2 * h, 2 * h)
                }

                function g(a, c) {
                    function d(a, b) {
                        for (var c = (b - l) / (a - m), d = m; a > d; d++) g[d].offset = +(+l + c * (d - m)).toFixed(2);
                        m = a, l = b
                    }
                    var e, f = b("snap.util.grad.parse", null, c).firstDefined();
                    if (!f) return null;
                    f.params.unshift(a), e = "l" == f.type.toLowerCase() ? h.apply(0, f.params) : i.apply(0, f.params), f.type != f.type.toLowerCase() && j(e.node, {
                        gradientUnits: "userSpaceOnUse"
                    });
                    var g = f.stops,
                        k = g.length,
                        l = 0,
                        m = 0;
                    k--;
                    for (var n = 0; k > n; n++) "offset" in g[n] && d(n, g[n].offset);
                    for (g[k].offset = g[k].offset || 100, d(k, g[k].offset), n = 0; k >= n; n++) {
                        var o = g[n];
                        e.addStop(o.color, o.offset)
                    }
                    return e
                }

                function h(b, f, g, h, i) {
                    var k = a._.make("linearGradient", b);
                    return k.stops = c, k.addStop = d, k.getBBox = e, null != f && j(k.node, {
                        x1: f,
                        y1: g,
                        x2: h,
                        y2: i
                    }), k
                }

                function i(b, f, g, h, i, k) {
                    var l = a._.make("radialGradient", b);
                    return l.stops = c, l.addStop = d, l.getBBox = e, null != f && j(l.node, {
                        cx: f,
                        cy: g,
                        r: h
                    }), null != i && null != k && j(l.node, {
                        fx: i,
                        fy: k
                    }), l
                }
                var j = a._.$;
                f.gradient = function(a) {
                    return g(this.defs, a)
                }, f.gradientLinear = function(a, b, c, d) {
                    return h(this.defs, a, b, c, d)
                }, f.gradientRadial = function(a, b, c, d, e) {
                    return i(this.defs, a, b, c, d, e)
                }, f.toString = function() {
                    var b, c = this.node.ownerDocument,
                        d = c.createDocumentFragment(),
                        e = c.createElement("div"),
                        f = this.node.cloneNode(!0);
                    return d.appendChild(e), e.appendChild(f), a._.$(f, {
                        xmlns: "http://www.w3.org/2000/svg"
                    }), b = e.innerHTML, d.removeChild(d.firstChild), b
                }, f.clear = function() {
                    for (var a, b = this.node.firstChild; b;) a = b.nextSibling, "defs" != b.tagName ? b.parentNode.removeChild(b) : f.clear.call({
                        node: b
                    }), b = a
                }
            }()
    }), d.plugin(function(a, b) {
        function c(a) {
            var b = c.ps = c.ps || {};
            return b[a] ? b[a].sleep = 100 : b[a] = {
                sleep: 100
            }, setTimeout(function() {
                for (var c in b) b[K](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
            }), b[a]
        }

        function d(a, b, c, d) {
            return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
                x: a,
                y: b,
                width: c,
                w: c,
                height: d,
                h: d,
                x2: a + c,
                y2: b + d,
                cx: a + c / 2,
                cy: b + d / 2,
                r1: N.min(c, d) / 2,
                r2: N.max(c, d) / 2,
                r0: N.sqrt(c * c + d * d) / 2,
                path: w(a, b, c, d),
                vb: [a, b, c, d].join(" ")
            }
        }

        function e() {
            return this.join(",").replace(L, "$1")
        }

        function f(a) {
            var b = J(a);
            return b.toString = e, b
        }

        function g(a, b, c, d, e, f, g, h, j) {
            return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
        }

        function h(c, d) {
            function e(a) {
                return +(+a).toFixed(3)
            }
            return a._.cacher(function(a, f, h) {
                a instanceof b && (a = a.attr("d")), a = E(a);
                for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                    if (l = a[r], "M" == l[0]) j = +l[1], k = +l[2];
                    else {
                        if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                            if (d && !p.start) {
                                if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h) return o;
                                p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
                                continue
                            }
                            if (!c && !d) return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
                        }
                        q += m, j = +l[5], k = +l[6]
                    }
                    o += l.shift() + l
                }
                return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
            }, null, a._.clone)
        }

        function i(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i,
                k = R(j, 3),
                l = R(j, 2),
                m = i * i,
                n = m * i,
                o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
                p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
                q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
                r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
                s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
                t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
                u = j * a + i * c,
                v = j * b + i * d,
                w = j * e + i * g,
                x = j * f + i * h,
                y = 90 - 180 * N.atan2(q - s, r - t) / O;
            return {
                x: o,
                y: p,
                m: {
                    x: q,
                    y: r
                },
                n: {
                    x: s,
                    y: t
                },
                start: {
                    x: u,
                    y: v
                },
                end: {
                    x: w,
                    y: x
                },
                alpha: y
            }
        }

        function j(b, c, e, f, g, h, i, j) {
            a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
            var k = D.apply(null, b);
            return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
        }

        function k(a, b, c) {
            return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
        }

        function l(a, b) {
            return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
        }

        function m(a, b, c, d, e) {
            var f = -3 * b + 9 * c - 9 * d + 3 * e,
                g = a * f + 6 * b - 12 * c + 6 * d;
            return a * g - 3 * b + 3 * c
        }

        function n(a, b, c, d, e, f, g, h, i) {
            null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
            for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
                var q = j * l[p] + j,
                    r = m(q, a, c, e, g),
                    s = m(q, b, d, f, h),
                    t = r * r + s * s;
                o += n[p] * N.sqrt(t)
            }
            return j * o
        }

        function o(a, b, c, d, e, f, g, h, i) {
            if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
                var j, k = 1,
                    l = k / 2,
                    m = k - l,
                    o = .01;
                for (j = n(a, b, c, d, e, f, g, h, m); S(j - i) > o;) l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
                return m
            }
        }

        function p(a, b, c, d, e, f, g, h) {
            if (!(Q(a, c) < P(e, g) || P(a, c) > Q(e, g) || Q(b, d) < P(f, h) || P(b, d) > Q(f, h))) {
                var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                    j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                    k = (a - c) * (f - h) - (b - d) * (e - g);
                if (k) {
                    var l = i / k,
                        m = j / k,
                        n = +l.toFixed(2),
                        o = +m.toFixed(2);
                    if (!(n < +P(a, c).toFixed(2) || n > +Q(a, c).toFixed(2) || n < +P(e, g).toFixed(2) || n > +Q(e, g).toFixed(2) || o < +P(b, d).toFixed(2) || o > +Q(b, d).toFixed(2) || o < +P(f, h).toFixed(2) || o > +Q(f, h).toFixed(2))) return {
                        x: l,
                        y: m
                    }
                }
            }
        }

        function q(a, b, c) {
            var d = j(a),
                e = j(b);
            if (!l(d, e)) return c ? 0 : [];
            for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 8), k = ~~(g / 8), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
                var t = i.apply(0, a.concat(s / h));
                m.push({
                    x: t.x,
                    y: t.y,
                    t: s / h
                })
            }
            for (s = 0; k + 1 > s; s++) t = i.apply(0, b.concat(s / k)), o.push({
                x: t.x,
                y: t.y,
                t: s / k
            });
            for (s = 0; h > s; s++)
                for (var u = 0; k > u; u++) {
                    var v = m[s],
                        w = m[s + 1],
                        x = o[u],
                        y = o[u + 1],
                        z = S(w.x - v.x) < .001 ? "y" : "x",
                        A = S(y.x - x.x) < .001 ? "y" : "x",
                        B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                    if (B) {
                        if (q[B.x.toFixed(4)] == B.y.toFixed(4)) continue;
                        q[B.x.toFixed(4)] = B.y.toFixed(4);
                        var C = v.t + S((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t),
                            D = x.t + S((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                        C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({
                            x: B.x,
                            y: B.y,
                            t1: C,
                            t2: D
                        }))
                    }
                }
            return r
        }

        function r(a, b) {
            return t(a, b)
        }

        function s(a, b) {
            return t(a, b, 1)
        }

        function t(a, b, c) {
            a = E(a), b = E(b);
            for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                var r = a[o];
                if ("M" == r[0]) d = h = r[1], e = i = r[2];
                else {
                    "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
                    for (var s = 0, t = b.length; t > s; s++) {
                        var u = b[s];
                        if ("M" == u[0]) f = j = u[1], g = k = u[2];
                        else {
                            "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
                            var v = q(l, m, c);
                            if (c) n += v;
                            else {
                                for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
                                n = n.concat(v)
                            }
                        }
                    }
                }
            }
            return n
        }

        function u(a, b, c) {
            var d = v(a);
            return k(d, b, c) && t(a, [
                ["M", b, c],
                ["H", d.x2 + 10]
            ], 1) % 2 == 1
        }

        function v(a) {
            var b = c(a);
            if (b.bbox) return J(b.bbox);
            if (!a) return d();
            a = E(a);
            for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)
                if (e = a[j], "M" == e[0]) f = e[1], g = e[2], h.push(f), i.push(g);
                else {
                    var l = D(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
                    h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
                }
            var m = P.apply(0, h),
                n = P.apply(0, i),
                o = Q.apply(0, h),
                p = Q.apply(0, i),
                q = d(m, n, o - m, p - n);
            return b.bbox = J(q), q
        }

        function w(a, b, c, d, f) {
            if (f) return [
                ["M", +a + +f, b],
                ["l", c - 2 * f, 0],
                ["a", f, f, 0, 0, 1, f, f],
                ["l", 0, d - 2 * f],
                ["a", f, f, 0, 0, 1, -f, f],
                ["l", 2 * f - c, 0],
                ["a", f, f, 0, 0, 1, -f, -f],
                ["l", 0, 2 * f - d],
                ["a", f, f, 0, 0, 1, f, -f],
                ["z"]
            ];
            var g = [
                ["M", a, b],
                ["l", c, 0],
                ["l", 0, d],
                ["l", -c, 0],
                ["z"]
            ];
            return g.toString = e, g
        }

        function x(a, b, c, d, f) {
            if (null == f && null == d && (d = c), a = +a, b = +b, c = +c, d = +d, null != f) var g = Math.PI / 180,
                h = a + c * Math.cos(-d * g),
                i = a + c * Math.cos(-f * g),
                j = b + c * Math.sin(-d * g),
                k = b + c * Math.sin(-f * g),
                l = [
                    ["M", h, j],
                    ["A", c, c, 0, +(f - d > 180), 0, i, k]
                ];
            else l = [
                ["M", a, b],
                ["m", 0, -d],
                ["a", c, d, 0, 1, 1, 0, 2 * d],
                ["a", c, d, 0, 1, 1, 0, -2 * d],
                ["z"]
            ];
            return l.toString = e, l
        }

        function y(b) {
            var d = c(b),
                g = String.prototype.toLowerCase;
            if (d.rel) return f(d.rel);
            a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
            var h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
            for (var n = m, o = b.length; o > n; n++) {
                var p = h[n] = [],
                    q = b[n];
                if (q[0] != g.call(q[0])) switch (p[0] = g.call(q[0]), p[0]) {
                    case "a":
                        p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
                        break;
                    case "v":
                        p[1] = +(q[1] - j).toFixed(3);
                        break;
                    case "m":
                        k = q[1], l = q[2];
                    default:
                        for (var r = 1, s = q.length; s > r; r++) p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
                } else {
                    p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
                    for (var t = 0, u = q.length; u > t; t++) h[n][t] = q[t]
                }
                var v = h[n].length;
                switch (h[n][0]) {
                    case "z":
                        i = k, j = l;
                        break;
                    case "h":
                        i += +h[n][v - 1];
                        break;
                    case "v":
                        j += +h[n][v - 1];
                        break;
                    default:
                        i += +h[n][v - 2], j += +h[n][v - 1]
                }
            }
            return h.toString = e, d.rel = f(h), h
        }

        function z(b) {
            var d = c(b);
            if (d.abs) return f(d.abs);
            if (I(b, "array") && I(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length) return [
                ["M", 0, 0]
            ];
            var g, h = [],
                i = 0,
                j = 0,
                k = 0,
                l = 0,
                m = 0;
            "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
            for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase()) switch (n[0] = g.toUpperCase(), n[0]) {
                        case "A":
                            n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +o[6] + i, n[7] = +o[7] + j;
                            break;
                        case "V":
                            n[1] = +o[1] + j;
                            break;
                        case "H":
                            n[1] = +o[1] + i;
                            break;
                        case "R":
                            for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++) s[t] = +s[t] + i, s[++t] = +s[t] + j;
                            h.pop(), h = h.concat(G(s, p));
                            break;
                        case "O":
                            h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                            break;
                        case "U":
                            h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                            break;
                        case "M":
                            k = +o[1] + i, l = +o[2] + j;
                        default:
                            for (t = 1, u = o.length; u > t; t++) n[t] = +o[t] + (t % 2 ? i : j)
                    } else if ("R" == g) s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(G(s, p)), n = ["R"].concat(o.slice(-2));
                    else if ("O" == g) h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                else if ("U" == g) h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                else
                    for (var v = 0, w = o.length; w > v; v++) n[v] = o[v];
                if (g = g.toUpperCase(), "O" != g) switch (n[0]) {
                    case "Z":
                        i = +k, j = +l;
                        break;
                    case "H":
                        i = n[1];
                        break;
                    case "V":
                        j = n[1];
                        break;
                    case "M":
                        k = n[n.length - 2], l = n[n.length - 1];
                    default:
                        i = n[n.length - 2], j = n[n.length - 1]
                }
            }
            return h.toString = e, d.abs = f(h), h
        }

        function A(a, b, c, d) {
            return [a, b, c, d, c, d]
        }

        function B(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        }

        function C(b, c, d, e, f, g, h, i, j, k) {
            var l, m = 120 * O / 180,
                n = O / 180 * (+f || 0),
                o = [],
                p = a._.cacher(function(a, b, c) {
                    var d = a * N.cos(c) - b * N.sin(c),
                        e = a * N.sin(c) + b * N.cos(c);
                    return {
                        x: d,
                        y: e
                    }
                });
            if (k) y = k[0], z = k[1], w = k[2], x = k[3];
            else {
                l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                var q = (N.cos(O / 180 * f), N.sin(O / 180 * f), (b - i) / 2),
                    r = (c - j) / 2,
                    s = q * q / (d * d) + r * r / (e * e);
                s > 1 && (s = N.sqrt(s), d = s * d, e = s * e);
                var t = d * d,
                    u = e * e,
                    v = (g == h ? -1 : 1) * N.sqrt(S((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
                    w = v * d * r / e + (b + i) / 2,
                    x = v * -e * q / d + (c + j) / 2,
                    y = N.asin(((c - x) / e).toFixed(9)),
                    z = N.asin(((j - x) / e).toFixed(9));
                y = w > b ? O - y : y, z = w > i ? O - z : z, 0 > y && (y = 2 * O + y), 0 > z && (z = 2 * O + z), h && y > z && (y -= 2 * O), !h && z > y && (z -= 2 * O)
            }
            var A = z - y;
            if (S(A) > m) {
                var B = z,
                    D = i,
                    E = j;
                z = y + m * (h && z > y ? 1 : -1), i = w + d * N.cos(z), j = x + e * N.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
            }
            A = z - y;
            var F = N.cos(y),
                G = N.sin(y),
                H = N.cos(z),
                I = N.sin(z),
                J = N.tan(A / 4),
                K = 4 / 3 * d * J,
                L = 4 / 3 * e * J,
                M = [b, c],
                P = [b + K * G, c - L * F],
                Q = [i + K * I, j - L * H],
                R = [i, j];
            if (P[0] = 2 * M[0] - P[0], P[1] = 2 * M[1] - P[1], k) return [P, Q, R].concat(o);
            o = [P, Q, R].concat(o).join().split(",");
            for (var T = [], U = 0, V = o.length; V > U; U++) T[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
            return T
        }

        function D(a, b, c, d, e, f, g, h) {
            for (var i, j, k, l, m, n, o, p, q = [], r = [
                    [],
                    []
                ], s = 0; 2 > s; ++s)
                if (0 == s ? (j = 6 * a - 12 * c + 6 * e, i = -3 * a + 9 * c - 9 * e + 3 * g, k = 3 * c - 3 * a) : (j = 6 * b - 12 * d + 6 * f, i = -3 * b + 9 * d - 9 * f + 3 * h, k = 3 * d - 3 * b), S(i) < 1e-12) {
                    if (S(j) < 1e-12) continue;
                    l = -k / j, l > 0 && 1 > l && q.push(l)
                } else o = j * j - 4 * k * i, p = N.sqrt(o), 0 > o || (m = (-j + p) / (2 * i), m > 0 && 1 > m && q.push(m), n = (-j - p) / (2 * i), n > 0 && 1 > n && q.push(n));
            for (var t, u = q.length, v = u; u--;) l = q[u], t = 1 - l, r[0][u] = t * t * t * a + 3 * t * t * l * c + 3 * t * l * l * e + l * l * l * g, r[1][u] = t * t * t * b + 3 * t * t * l * d + 3 * t * l * l * f + l * l * l * h;
            return r[0][v] = a, r[1][v] = b, r[0][v + 1] = g, r[1][v + 1] = h, r[0].length = r[1].length = v + 2, {
                min: {
                    x: P.apply(0, r[0]),
                    y: P.apply(0, r[1])
                },
                max: {
                    x: Q.apply(0, r[0]),
                    y: Q.apply(0, r[1])
                }
            }
        }

        function E(a, b) {
            var d = !b && c(a);
            if (!b && d.curve) return f(d.curve);
            for (var e = z(a), g = b && z(b), h = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, i = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, j = (function(a, b, c) {
                    var d, e;
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0] in {
                        T: 1,
                        Q: 1
                    }) && (b.qx = b.qy = null), a[0]) {
                        case "M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case "A":
                            a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
                            break;
                        case "S":
                            "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e].concat(a.slice(1));
                            break;
                        case "T":
                            "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case "Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case "L":
                            a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
                            break;
                        case "H":
                            a = ["C"].concat(A(b.x, b.y, a[1], b.y));
                            break;
                        case "V":
                            a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
                            break;
                        case "Z":
                            a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), k = function(a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;) m[b] = "A", g && (n[b] = "A"), a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                        a.splice(b, 1), r = Q(e.length, g && g.length || 0)
                    }
                }, l = function(a, b, c, d, f) {
                    a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], r = Q(e.length, g && g.length || 0))
                }, m = [], n = [], o = "", p = "", q = 0, r = Q(e.length, g && g.length || 0); r > q; q++) {
                e[q] && (o = e[q][0]), "C" != o && (m[q] = o, q && (p = m[q - 1])), e[q] = j(e[q], h, p), "A" != m[q] && "C" == o && (m[q] = "C"), k(e, q), g && (g[q] && (o = g[q][0]), "C" != o && (n[q] = o, q && (p = n[q - 1])), g[q] = j(g[q], i, p), "A" != n[q] && "C" == o && (n[q] = "C"), k(g, q)), l(e, g, h, i, q), l(g, e, i, h, q);
                var s = e[q],
                    t = g && g[q],
                    u = s.length,
                    v = g && t.length;
                h.x = s[u - 2], h.y = s[u - 1], h.bx = M(s[u - 4]) || h.x, h.by = M(s[u - 3]) || h.y, i.bx = g && (M(t[v - 4]) || i.x), i.by = g && (M(t[v - 3]) || i.y), i.x = g && t[v - 2], i.y = g && t[v - 1]
            }
            return g || (d.curve = f(e)), g ? [e, g] : e
        }

        function F(a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = E(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        }

        function G(a, b) {
            for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                var f = [{
                    x: +a[d - 2],
                    y: +a[d - 1]
                }, {
                    x: +a[d],
                    y: +a[d + 1]
                }, {
                    x: +a[d + 2],
                    y: +a[d + 3]
                }, {
                    x: +a[d + 4],
                    y: +a[d + 5]
                }];
                b ? d ? e - 4 == d ? f[3] = {
                    x: +a[0],
                    y: +a[1]
                } : e - 2 == d && (f[2] = {
                    x: +a[0],
                    y: +a[1]
                }, f[3] = {
                    x: +a[2],
                    y: +a[3]
                }) : f[0] = {
                    x: +a[e - 2],
                    y: +a[e - 1]
                } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                    x: +a[d],
                    y: +a[d + 1]
                }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
            }
            return c
        }
        var H = b.prototype,
            I = a.is,
            J = a._.clone,
            K = "hasOwnProperty",
            L = /,?([a-z]),?/gi,
            M = parseFloat,
            N = Math,
            O = N.PI,
            P = N.min,
            Q = N.max,
            R = N.pow,
            S = N.abs,
            T = h(1),
            U = h(),
            V = h(0, 1),
            W = a._unit2px,
            X = {
                path: function(a) {
                    return a.attr("path")
                },
                circle: function(a) {
                    var b = W(a);
                    return x(b.cx, b.cy, b.r)
                },
                ellipse: function(a) {
                    var b = W(a);
                    return x(b.cx || 0, b.cy || 0, b.rx, b.ry)
                },
                rect: function(a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height, b.rx, b.ry)
                },
                image: function(a) {
                    var b = W(a);
                    return w(b.x || 0, b.y || 0, b.width, b.height)
                },
                line: function(a) {
                    return "M" + [a.attr("x1") || 0, a.attr("y1") || 0, a.attr("x2"), a.attr("y2")]
                },
                polyline: function(a) {
                    return "M" + a.attr("points")
                },
                polygon: function(a) {
                    return "M" + a.attr("points") + "z"
                },
                deflt: function(a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                }
            };
        a.path = c, a.path.getTotalLength = T, a.path.getPointAtLength = U, a.path.getSubpath = function(a, b, c) {
            if (this.getTotalLength(a) - c < 1e-6) return V(a, b).end;
            var d = V(a, c, 1);
            return b ? V(d, b).end : d
        }, H.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, H.getPointAtLength = function(a) {
            return U(this.attr("d"), a)
        }, H.getSubpath = function(b, c) {
            return a.path.getSubpath(this.attr("d"), b, c)
        }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = X, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = E, a.path.map = F, a.path.toString = e, a.path.clone = f
    }), d.plugin(function(a) {
        var d = Math.max,
            e = Math.min,
            f = function(a) {
                if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", a)
                    for (var b = 0, c = a.length; c > b; b++) a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
            },
            g = f.prototype;
        g.push = function() {
            for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
            return this
        }, g.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, g.forEach = function(a, b) {
            for (var c = 0, d = this.items.length; d > c; c++)
                if (a.call(b, this.items[c], c) === !1) return this;
            return this
        }, g.animate = function(d, e, f, g) {
            "function" != typeof f || f.length || (g = f, f = c.linear), d instanceof a._.Animation && (g = d.callback, f = d.easing, e = f.dur, d = d.attr);
            var h = arguments;
            if (a.is(d, "array") && a.is(h[h.length - 1], "array")) var i = !0;
            var j, k = function() {
                    j ? this.b = j : j = this.b
                },
                l = 0,
                m = g && function() {
                    l++ == this.length && g.call(this)
                };
            return this.forEach(function(a, c) {
                b.once("snap.animcreated." + a.id, k), i ? h[c] && a.animate.apply(a, h[c]) : a.animate(d, e, f, m)
            })
        }, g.remove = function() {
            for (; this.length;) this.pop().remove();
            return this
        }, g.bind = function(a, b, c) {
            var d = {};
            if ("function" == typeof b) this.bindings[a] = b;
            else {
                var e = c || a;
                this.bindings[a] = function(a) {
                    d[e] = a, b.attr(d)
                }
            }
            return this
        }, g.attr = function(a) {
            var b = {};
            for (var c in a) this.bindings[c] ? this.bindings[c](a[c]) : b[c] = a[c];
            for (var d = 0, e = this.items.length; e > d; d++) this.items[d].attr(b);
            return this
        }, g.clear = function() {
            for (; this.length;) this.pop()
        }, g.splice = function(a, b) {
            a = 0 > a ? d(this.length + a, 0) : a, b = d(0, e(this.length - a, b));
            var c, g = [],
                h = [],
                i = [];
            for (c = 2; c < arguments.length; c++) i.push(arguments[c]);
            for (c = 0; b > c; c++) h.push(this[a + c]);
            for (; c < this.length - a; c++) g.push(this[a + c]);
            var j = i.length;
            for (c = 0; c < j + g.length; c++) this.items[a + c] = this[a + c] = j > c ? i[c] : g[c - j];
            for (c = this.items.length = this.length -= b - j; this[c];) delete this[c++];
            return new f(h)
        }, g.exclude = function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] == a) return this.splice(b, 1), !0;
            return !1
        }, g.insertAfter = function(a) {
            for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
            return this
        }, g.getBBox = function() {
            for (var a = [], b = [], c = [], f = [], g = this.items.length; g--;)
                if (!this.items[g].removed) {
                    var h = this.items[g].getBBox();
                    a.push(h.x), b.push(h.y), c.push(h.x + h.width), f.push(h.y + h.height)
                }
            return a = e.apply(0, a), b = e.apply(0, b), c = d.apply(0, c), f = d.apply(0, f), {
                x: a,
                y: b,
                x2: c,
                y2: f,
                width: c - a,
                height: f - b,
                cx: a + (c - a) / 2,
                cy: b + (f - b) / 2
            }
        }, g.clone = function(a) {
            a = new f;
            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
            return a
        }, g.toString = function() {
            return "Snap‘s set"
        }, g.type = "set", a.set = function() {
            var a = new f;
            return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
        }
    }), d.plugin(function(a, c) {
        function d(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
                case "t":
                    return [b, 0, 0];
                case "m":
                    return [b, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                case "s":
                    return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        }

        function e(b, c, e) {
            c = m(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
            for (var f, g, h, k, l = Math.max(b.length, c.length), n = [], o = [], p = 0; l > p; p++) {
                if (h = b[p] || d(c[p]), k = c[p] || d(h), h[0] != k[0] || "r" == h[0].toLowerCase() && (h[2] != k[2] || h[3] != k[3]) || "s" == h[0].toLowerCase() && (h[3] != k[3] || h[4] != k[4])) {
                    b = a._.transform2matrix(b, e()), c = a._.transform2matrix(c, e()), n = [
                        ["m", b.a, b.b, b.c, b.d, b.e, b.f]
                    ], o = [
                        ["m", c.a, c.b, c.c, c.d, c.e, c.f]
                    ];
                    break
                }
                for (n[p] = [], o[p] = [], f = 0, g = Math.max(h.length, k.length); g > f; f++) f in h && (n[p][f] = h[f]), f in k && (o[p][f] = k[f])
            }
            return {
                from: j(n),
                to: j(o),
                f: i(n)
            }
        }

        function f(a) {
            return a
        }

        function g(a) {
            return function(b) {
                return +b.toFixed(3) + a
            }
        }

        function h(b) {
            return a.rgb(b[0], b[1], b[2])
        }

        function i(a) {
            var b, c, d, e, f, g, h = 0,
                i = [];
            for (b = 0, c = a.length; c > b; b++) {
                for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++) g[d] = "val[" + h++ + "]";
                f += g + "]", i[b] = f
            }
            return Function("val", "return Snap.path.toString.call([" + i + "])")
        }

        function j(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++)
                for (var e = 1, f = a[c].length; f > e; e++) b.push(a[c][e]);
            return b
        }
        var k = {},
            l = /[a-z]+$/i,
            m = String;
        k.stroke = k.fill = "colour", c.prototype.equal = function(a, c) {
            return b("snap.util.equal", this, a, c).firstDefined()
        }, b.on("snap.util.equal", function(b, c) {
            var d, n, o = m(this.attr(b) || ""),
                p = this;
            if (o == +o && c == +c) return {
                from: +o,
                to: +c,
                f: f
            };
            if ("colour" == k[b]) return d = a.color(o), n = a.color(c), {
                from: [d.r, d.g, d.b, d.opacity],
                to: [n.r, n.g, n.b, n.opacity],
                f: h
            };
            if ("transform" == b || "gradientTransform" == b || "patternTransform" == b) return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), e(o, c, function() {
                return p.getBBox(1)
            });
            if ("d" == b || "path" == b) return d = a.path.toCubic(o, c), {
                from: j(d[0]),
                to: j(d[1]),
                f: i(d[0])
            };
            if ("points" == b) return d = m(o).split(a._.separator), n = m(c).split(a._.separator), {
                from: d,
                to: n,
                f: function(a) {
                    return a
                }
            };
            aUnit = o.match(l);
            var q = m(c).match(l);
            return aUnit && aUnit == q ? {
                from: parseFloat(o),
                to: parseFloat(c),
                f: g(aUnit)
            } : {
                from: this.asPX(b),
                to: this.asPX(b, c),
                f: f
            }
        })
    }), d.plugin(function(a, c, d, e) {
        for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch" in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, k = (function(a, b) {
                var c = "y" == a ? "scrollTop" : "scrollLeft",
                    d = b && b.node ? b.node.ownerDocument : e.doc;
                return d[c in d.documentElement ? "documentElement" : "body"][c]
            }), l = function() {
                this.returnValue = !1
            }, m = function() {
                return this.originalEvent.preventDefault()
            }, n = function() {
                this.cancelBubble = !0
            }, o = function() {
                return this.originalEvent.stopPropagation()
            }, p = function() {
                return e.doc.addEventListener ? function(a, b, c, d) {
                    var e = h && j[b] ? j[b] : b,
                        f = function(e) {
                            var f = k("y", d),
                                i = k("x", d);
                            if (h && j[g](b))
                                for (var l = 0, n = e.targetTouches && e.targetTouches.length; n > l; l++)
                                    if (e.targetTouches[l].target == a || a.contains(e.targetTouches[l].target)) {
                                        var p = e;
                                        e = e.targetTouches[l], e.originalEvent = p, e.preventDefault = m, e.stopPropagation = o;
                                        break
                                    }
                            var q = e.clientX + i,
                                r = e.clientY + f;
                            return c.call(d, e, q, r)
                        };
                    return b !== e && a.addEventListener(b, f, !1), a.addEventListener(e, f, !1),
                        function() {
                            return b !== e && a.removeEventListener(b, f, !1), a.removeEventListener(e, f, !1), !0
                        }
                } : e.doc.attachEvent ? function(a, b, c, d) {
                    var e = function(a) {
                        a = a || d.node.ownerDocument.window.event;
                        var b = k("y", d),
                            e = k("x", d),
                            f = a.clientX + e,
                            g = a.clientY + b;
                        return a.preventDefault = a.preventDefault || l, a.stopPropagation = a.stopPropagation || n, c.call(d, a, f, g)
                    };
                    a.attachEvent("on" + b, e);
                    var f = function() {
                        return a.detachEvent("on" + b, e), !0
                    };
                    return f
                } : void 0
            }(), q = [], r = function(a) {
                for (var c, d = a.clientX, e = a.clientY, f = k("y"), g = k("x"), i = q.length; i--;) {
                    if (c = q[i], h) {
                        for (var j, l = a.touches && a.touches.length; l--;)
                            if (j = a.touches[l], j.identifier == c.el._drag.id || c.el.node.contains(j.target)) {
                                d = j.clientX, e = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                                break
                            }
                    } else a.preventDefault(); {
                        var m = c.el.node;
                        m.nextSibling, m.parentNode, m.style.display
                    }
                    d += g, e += f, b("snap.drag.move." + c.el.id, c.move_scope || c.el, d - c.el._drag.x, e - c.el._drag.y, d, e, a)
                }
            }, s = function(c) {
                a.unmousemove(r).unmouseup(s);
                for (var d, e = q.length; e--;) d = q[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
                q = []
            }, t = i.length; t--;) ! function(b) {
            a[b] = f[b] = function(c, d) {
                return a.is(c, "function") && (this.events = this.events || [], this.events.push({
                    name: b,
                    f: c,
                    unbind: p(this.node || document, b, c, d || this)
                })), this
            }, a["un" + b] = f["un" + b] = function(a) {
                for (var c = this.events || [], d = c.length; d--;)
                    if (c[d].name == b && (c[d].f == a || !a)) return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
                return this
            }
        }(i[t]);
        f.hover = function(a, b, c, d) {
            return this.mouseover(a, c).mouseout(b, d || c)
        }, f.unhover = function(a, b) {
            return this.unmouseover(a).unmouseout(b)
        };
        var u = [];
        f.drag = function(c, d, e, f, g, h) {
            function i(i, j, k) {
                (i.originalEvent || i).preventDefault(), this._drag.x = j, this._drag.y = k, this._drag.id = i.identifier, !q.length && a.mousemove(r).mouseup(s), q.push({
                    el: this,
                    move_scope: f,
                    start_scope: g,
                    end_scope: h
                }), d && b.on("snap.drag.start." + this.id, d), c && b.on("snap.drag.move." + this.id, c), e && b.on("snap.drag.end." + this.id, e), b("snap.drag.start." + this.id, g || f || this, j, k, i)
            }
            if (!arguments.length) {
                var j;
                return this.drag(function(a, b) {
                    this.attr({
                        transform: j + (j ? "T" : "t") + [a, b]
                    })
                }, function() {
                    j = this.transform().local
                })
            }
            return this._drag = {}, u.push({
                el: this,
                start: i
            }), this.mousedown(i), this
        }, f.undrag = function() {
            for (var c = u.length; c--;) u[c].el == this && (this.unmousedown(u[c].start), u.splice(c, 1), b.unbind("snap.drag.*." + this.id));
            return !u.length && a.unmousemove(r).unmouseup(s), this
        }
    }), d.plugin(function(a, c, d) {
        var e = (c.prototype, d.prototype),
            f = /^\s*url\((.+)\)/,
            g = String,
            h = a._.$;
        a.filter = {}, e.filter = function(b) {
            var d = this;
            "svg" != d.type && (d = d.paper);
            var e = a.parse(g(b)),
                f = a._.id(),
                i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
            return h(i, {
                id: f,
                filterUnits: "userSpaceOnUse"
            }), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
        }, b.on("snap.util.getattr.filter", function() {
            b.stop();
            var c = h(this.node, "filter");
            if (c) {
                var d = g(c).match(f);
                return d && a.select(d[1])
            }
        }), b.on("snap.util.attr.filter", function(d) {
            if (d instanceof c && "filter" == d.type) {
                b.stop();
                var e = d.node.id;
                e || (h(d.node, {
                    id: d.id
                }), e = d.id), h(this.node, {
                    filter: a.url(e)
                })
            }
            d && "none" != d || (b.stop(), this.node.removeAttribute("filter"))
        }), a.filter.blur = function(b, c) {
            null == b && (b = 2);
            var d = null == c ? b : [b, c];
            return a.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: d
            })
        }, a.filter.blur.toString = function() {
            return this()
        }, a.filter.shadow = function(b, c, d, e, f) {
            return "string" == typeof d && (e = d, f = e, d = 4), "string" != typeof e && (f = e, e = "#000"), e = e || "#000", null == d && (d = 4), null == f && (f = 1), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: e,
                dx: b,
                dy: c,
                blur: d,
                opacity: f
            })
        }, a.filter.shadow.toString = function() {
            return this()
        }, a.filter.grayscale = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - b),
                b: .7152 - .7152 * (1 - b),
                c: .0722 - .0722 * (1 - b),
                d: .2126 - .2126 * (1 - b),
                e: .7152 + .2848 * (1 - b),
                f: .0722 - .0722 * (1 - b),
                g: .2126 - .2126 * (1 - b),
                h: .0722 + .9278 * (1 - b)
            })
        }, a.filter.grayscale.toString = function() {
            return this()
        }, a.filter.sepia = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - b),
                b: .769 - .769 * (1 - b),
                c: .189 - .189 * (1 - b),
                d: .349 - .349 * (1 - b),
                e: .686 + .314 * (1 - b),
                f: .168 - .168 * (1 - b),
                g: .272 - .272 * (1 - b),
                h: .534 - .534 * (1 - b),
                i: .131 + .869 * (1 - b)
            })
        }, a.filter.sepia.toString = function() {
            return this()
        }, a.filter.saturate = function(b) {
            return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - b
            })
        }, a.filter.saturate.toString = function() {
            return this()
        }, a.filter.hueRotate = function(b) {
            return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: b
            })
        }, a.filter.hueRotate.toString = function() {
            return this()
        }, a.filter.invert = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: 1 - b
            })
        }, a.filter.invert.toString = function() {
            return this()
        }, a.filter.brightness = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: b
            })
        }, a.filter.brightness.toString = function() {
            return this()
        }, a.filter.contrast = function(b) {
            return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: b,
                amount2: .5 - b / 2
            })
        }, a.filter.contrast.toString = function() {
            return this()
        }
    }), d
}),
function(a, b, c) {
    "use strict";

    function d(a, b) {
        this.element = a, this.layers = a.getElementsByClassName("layer");
        var c = {
            calibrateX: this.data(this.element, "calibrate-x"),
            calibrateY: this.data(this.element, "calibrate-y"),
            invertX: this.data(this.element, "invert-x"),
            invertY: this.data(this.element, "invert-y"),
            limitX: this.data(this.element, "limit-x"),
            limitY: this.data(this.element, "limit-y"),
            scalarX: this.data(this.element, "scalar-x"),
            scalarY: this.data(this.element, "scalar-y"),
            frictionX: this.data(this.element, "friction-x"),
            frictionY: this.data(this.element, "friction-y"),
            originX: this.data(this.element, "origin-x"),
            originY: this.data(this.element, "origin-y")
        };
        for (var d in c) null === c[d] && delete c[d];
        this.extend(this, g, b, c), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }
    var e = "Parallax",
        f = 30,
        g = {
            relativeInput: !1,
            clipRelativeInput: !1,
            calibrationThreshold: 100,
            calibrationDelay: 500,
            supportDelay: 500,
            calibrateX: !1,
            calibrateY: !0,
            invertX: !0,
            invertY: !0,
            limitX: !1,
            limitY: !1,
            scalarX: 10,
            scalarY: 10,
            frictionX: .1,
            frictionY: .1,
            originX: .5,
            originY: .5
        };
    d.prototype.extend = function() {
        if (arguments.length > 1)
            for (var a = arguments[0], b = 1, c = arguments.length; c > b; b++) {
                var d = arguments[b];
                for (var e in d) a[e] = d[e]
            }
    }, d.prototype.data = function(a, b) {
        return this.deserialize(a.getAttribute("data-" + b))
    }, d.prototype.deserialize = function(a) {
        return "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : !isNaN(parseFloat(a)) && isFinite(a) ? parseFloat(a) : a
    }, d.prototype.camelCase = function(a) {
        return a.replace(/-+(.)?/g, function(a, b) {
            return b ? b.toUpperCase() : ""
        })
    }, d.prototype.transformSupport = function(d) {
        for (var e = b.createElement("div"), f = !1, g = null, h = !1, i = null, j = null, k = 0, l = this.vendors.length; l > k; k++)
            if (null !== this.vendors[k] ? (i = this.vendors[k][0] + "transform", j = this.vendors[k][1] + "Transform") : (i = "transform", j = "transform"), e.style[j] !== c) {
                f = !0;
                break
            }
        switch (d) {
            case "2D":
                h = f;
                break;
            case "3D":
                if (f) {
                    var m = b.body || b.createElement("body"),
                        n = b.documentElement,
                        o = n.style.overflow;
                    b.body || (n.style.overflow = "hidden", n.appendChild(m), m.style.overflow = "hidden", m.style.background = ""), m.appendChild(e), e.style[j] = "translate3d(1px,1px,1px)", g = a.getComputedStyle(e).getPropertyValue(i), h = g !== c && g.length > 0 && "none" !== g, n.style.overflow = o, m.removeChild(e)
                }
        }
        return h
    }, d.prototype.ww = null, d.prototype.wh = null, d.prototype.wcx = null, d.prototype.wcy = null, d.prototype.wrx = null, d.prototype.wry = null, d.prototype.portrait = null, d.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), d.prototype.vendors = [null, ["-webkit-", "webkit"],
        ["-moz-", "Moz"],
        ["-o-", "O"],
        ["-ms-", "ms"]
    ], d.prototype.motionSupport = !!a.DeviceMotionEvent, d.prototype.orientationSupport = !!a.DeviceOrientationEvent, d.prototype.orientationStatus = 0, d.prototype.transform2DSupport = d.prototype.transformSupport("2D"), d.prototype.transform3DSupport = d.prototype.transformSupport("3D"), d.prototype.propertyCache = {}, d.prototype.initialise = function() {
        this.transform3DSupport && this.accelerate(this.element);
        var b = a.getComputedStyle(this.element);
        "static" === b.getPropertyValue("position") && (this.element.style.position = "relative"), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, d.prototype.updateLayers = function() {
        this.layers = this.element.getElementsByClassName("layer"), this.depths = [];
        for (var a = 0, b = this.layers.length; b > a; a++) {
            var c = this.layers[a];
            this.transform3DSupport && this.accelerate(c), c.style.position = a ? "absolute" : "relative", c.style.display = "block", c.style.left = 0, c.style.top = 0, this.depths.push(this.data(c, "depth") || 0)
        }
    }, d.prototype.updateDimensions = function() {
        this.ww = a.innerWidth, this.wh = a.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, d.prototype.updateBounds = function() {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, d.prototype.queueCalibration = function(a) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, a)
    }, d.prototype.enable = function() {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, a.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, a.addEventListener("mousemove", this.onMouseMove)), a.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, d.prototype.disable = function() {
        this.enabled && (this.enabled = !1, this.orientationSupport ? a.removeEventListener("deviceorientation", this.onDeviceOrientation) : a.removeEventListener("mousemove", this.onMouseMove), a.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, d.prototype.calibrate = function(a, b) {
        this.calibrateX = a === c ? this.calibrateX : a, this.calibrateY = b === c ? this.calibrateY : b
    }, d.prototype.invert = function(a, b) {
        this.invertX = a === c ? this.invertX : a, this.invertY = b === c ? this.invertY : b
    }, d.prototype.friction = function(a, b) {
        this.frictionX = a === c ? this.frictionX : a, this.frictionY = b === c ? this.frictionY : b
    }, d.prototype.scalar = function(a, b) {
        this.scalarX = a === c ? this.scalarX : a, this.scalarY = b === c ? this.scalarY : b
    }, d.prototype.limit = function(a, b) {
        this.limitX = a === c ? this.limitX : a, this.limitY = b === c ? this.limitY : b
    }, d.prototype.origin = function(a, b) {
        this.originX = a === c ? this.originX : a, this.originY = b === c ? this.originY : b
    }, d.prototype.clamp = function(a, b, c) {
        return a = Math.max(a, b), a = Math.min(a, c)
    }, d.prototype.css = function(a, b, d) {
        var e = this.propertyCache[b];
        if (!e)
            for (var f = 0, g = this.vendors.length; g > f; f++)
                if (e = null !== this.vendors[f] ? this.camelCase(this.vendors[f][1] + "-" + b) : b, a.style[e] !== c) {
                    this.propertyCache[b] = e;
                    break
                }
        a.style[e] = d
    }, d.prototype.accelerate = function(a) {
        this.css(a, "transform", "translate3d(0,0,0)"), this.css(a, "transform-style", "preserve-3d"), this.css(a, "backface-visibility", "hidden")
    }, d.prototype.setPosition = function(a, b, c) {
        b += "px", c += "px", this.transform3DSupport ? this.css(a, "transform", "translate3d(" + b + "," + c + ",0)") : this.transform2DSupport ? this.css(a, "transform", "translate(" + b + "," + c + ")") : (a.style.left = b, a.style.top = c)
    }, d.prototype.onOrientationTimer = function() {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, d.prototype.onCalibrationTimer = function() {
        this.calibrationFlag = !0
    }, d.prototype.onWindowResize = function() {
        this.updateDimensions()
    }, d.prototype.onAnimationFrame = function() {
        this.updateBounds();
        var a = this.ix - this.cx,
            b = this.iy - this.cy;
        (Math.abs(a) > this.calibrationThreshold || Math.abs(b) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? b : this.iy, this.my = this.calibrateY ? a : this.ix) : (this.mx = this.calibrateX ? a : this.ix, this.my = this.calibrateY ? b : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var c = 0, d = this.layers.length; d > c; c++) {
            var e = this.layers[c],
                f = this.depths[c],
                g = this.vx * f * (this.invertX ? -1 : 1),
                h = this.vy * f * (this.invertY ? -1 : 1);
            this.setPosition(e, g, h)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, d.prototype.onDeviceOrientation = function(a) {
        if (!this.desktop && null !== a.beta && null !== a.gamma) {
            this.orientationStatus = 1;
            var b = (a.beta || 0) / f,
                c = (a.gamma || 0) / f,
                d = this.wh > this.ww;
            this.portrait !== d && (this.portrait = d, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = b, this.cy = c), this.ix = b, this.iy = c
        }
    }, d.prototype.onMouseMove = function(a) {
        var b = a.clientX,
            c = a.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (b = Math.max(b, this.ex), b = Math.min(b, this.ex + this.ew), c = Math.max(c, this.ey), c = Math.min(c, this.ey + this.eh)), this.ix = (b - this.ex - this.ecx) / this.erx, this.iy = (c - this.ey - this.ecy) / this.ery) : (this.ix = (b - this.wcx) / this.wrx, this.iy = (c - this.wcy) / this.wry)
    }, a[e] = d
}(window, document),
function() {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
        var c = (new Date).getTime(),
            d = Math.max(0, 16 - (c - a)),
            e = window.setTimeout(function() {
                b(c + d)
            }, d);
        return a = c + d, e
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    })
}(),
function($, window, document, undefined) {
    "use strict";
    var SCREEN_IPHONE = 668,
        SCREEN_IPAD_PORT = 976,
        SCREEN_IPAD = 992,
        SCREEN_BROWSER = 1200,
        ARROW_RIGHT = 39,
        ARROW_LEFT = 37,
        activeKeyCodeGallery = !1,
        activeKeyCodeCase = !1,
        app, utils, dom, sliderImage, sliderCase, win = $(window),
        svg, globalAnimation = [],
        activeLoop = !0,
        hashNetworkDefault = eval(coord.networkDefault.value),
        classBgImg = ".bg-img",
        body = $("body"),
        loader = $("#loader"),
        fabPreloader = $(".logo-loaded"),
        singleCase = $(".single-case"),
        textCase = $(".text-case"),
        footer = $(".footer"),
        menu = $("#menu"),
        curtainsLi = $(".curtains li"),
        btnTop = $(".btn-top"),
        fabText = $(".fab-text"),
        fabFilter = $(".fab-filter"),
        fabTextWrap = $(".fab-text-wrap"),
        panelMenu = $(".panel-menu"),
        panelFilter = $(".panel-filter"),
        imgCasePresent = $(".img-case-present"),
        singleCaseStudy = $(".single-case-study"),
        gridIcon = $(".icon-grid"),
        panelInfoCase = $(".panel-info-case"),
        sliderClientCase = [],
        topOffset = [],
        dataFilter = $(".datafilter"),
        listNetwork = $(".list"),
        chart = $(".chart"),
        chartSingleSlider = $(".chart-single-slider"),
        chartNr = $(".chart-content"),
        chartNrSingleSlider = $(".chart-content-slider"),
        chartData = $(".chart-data"),
        chartDataSlider = $(".chart-data-slider"),
        chartSlider, main, easing, navigatorUserIE = navigator.userAgent.indexOf("Trident/7.0") > 0,
        activeHoverIcon = !1,
        noHover = !1,
        submenu = !1,
        pageScroll = 0,
        currentCase, currentImage, map, mapNet, mapId = "map-canvas",
        position, marker, newMarker, markerOff = [],
        markerNet = [],
        styles = [{
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "administrative.land_parcel",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape.man_made",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                visibility: "simplified"
            }, {
                lightness: 20
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                hue: "#f49935"
            }]
        }, {
            featureType: "road.highway",
            elementType: "labels",
            stylers: [{
                visibility: "simplified"
            }]
        }, {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{
                hue: "#fad959"
            }]
        }, {
            featureType: "road.arterial",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{
                visibility: "simplified"
            }]
        }, {
            featureType: "road.local",
            elementType: "labels",
            stylers: [{
                visibility: "simplified"
            }]
        }, {
            featureType: "transit",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "all",
            stylers: [{
                hue: "#a1cdfc"
            }, {
                saturation: 30
            }, {
                lightness: 49
            }]
        }];
    $(function() {
        utils = {
            centerVerticalElement: function(a) {
                return (win.height() - a.height()) / 2
            },
            centerVerticalElementInElement: function(a) {
                return parseInt(a.parent().height() - a.outerHeight()) / 2
            }
        }, dom = {
            filterPanel: {
                cOpen: $(".c-filter.c-open"),
                cClose: $(".c-filter.c-close"),
                tabFilter: $(".tab-filter"),
                listevent: function() {
                    this.cOpen.on("click", function() {
                        dom.filterPanel.open()
                    }), this.tabFilter.on("click", function() {
                        dom.filterPanel.close(), $(this).removeClass("c-show")
                    }), this.cClose.on("click", function() {
                        dom.filterPanel.close()
                    })
                },
                close: function() {
                    panelFilter.addClass("hide"), this.cClose.removeClass("c-show"), this.cOpen.addClass("c-show")
                },
                open: function() {
                    panelFilter.removeClass("hide"), this.cOpen.removeClass("c-show"), this.cClose.addClass("c-show")
                },
                setFilter: function() {
                    this.cOpen.removeClass("c-show"), this.cClose.removeClass("c-show"), this.tabFilter.addClass("c-show")
                },
                unsetFilter: function() {
                    this.tabFilter.removeClass("c-show")
                }
            }
        }, app = {
            loadPage: function(a) {
                fabPreloader.css("margin-top", utils.centerVerticalElement(fabPreloader)), singleCase.css("height", win.height() + "px"), singleCase.find(".hover").css("height", win.height() + "px"), footer.css("height", win.height() + "px"), fabPreloader.parent().removeClass("hide"), fabPreloader.addClass("fadeIn"), Modernizr.cssanimations || fabPreloader.fadeIn(), app.intervalLogo();
                var b, c = document.querySelectorAll(classBgImg),
                    d = new imagesLoaded(c, {
                        background: !0
                    });
                d.on("always", function() {
                    log("ALWAYS - all images have been loaded")
                }).on("done", function() {
                    log("done"), clearTimeout(b), b = setTimeout(function() {
                        loader.addClass("fadeOut"), Modernizr.cssanimations || loader.fadeOut(), null != a && a()
                    }, 800)
                })
            },
            intervalLogo: function() {
                var a, b, c = 0,
                    d = 200;
                a = setInterval(function() {
                    c > -1 ? (b = fabPreloader.height() * c, 6 == c && (c = 0), fabPreloader.css("background-position", "0px -" + b + "px"), c++) : window.clearInterval(a)
                }, d)
            },
            loadCurtains: function() {
                $(".curtains").curtain({
                    scrollSpeed: 300,
                    enableKeys: !1
                })
            },
            animationLoadPage: function(a) {
                var b = setTimeout(function() {
                    a && (a.addClass("fadeIn"), Modernizr.cssanimations || a.animate({
                        opacity: 1
                    })), menu.delay(500).queue(function() {
                        $(this).addClass("close"), body.hasClass("case") && gridIcon.addClass("block")
                    }), loader.remove(), clearTimeout(b)
                }, 1e3);
                app.eventListener()
            },
            createMap: function() {
                position = new google.maps.LatLng(eval(coord.officeDefault.value).lat, eval(coord.officeDefault.value).lng);
                var draggable = !0;
                micro.device.isMobile() && (draggable = !1);
                var icon = {
                    url: markers.markerOfficeIconSvg,
                    size: new google.maps.Size(32, 38),
                    origin: new google.maps.Point(0, 0)
                };
                if (navigatorUserIE) var icon = markers.markerOfficeIconPng;
                var options = {
                    center: position,
                    draggable: draggable,
                    zoom: 16,
                    maxZoom: 18,
                    minZoom: 13,
                    mapTypeControl: !1,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL
                    },
                    streetViewControl: !1,
                    scrollwheel: !1,
                    styles: styles
                };
                map = new google.maps.Map(document.getElementById(mapId), options), marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    icon: icon
                }), window.addEventListener("orientationchange", function() {
                    map.setCenter(position)
                })
            },
            setIconNetworkAcctive: function(a, b) {
                newMarker && newMarker.setMap(null);
                var c = {
                    url: markers.markerNetworkIconSvgActive,
                    size: new google.maps.Size(16, 16),
                    origin: new google.maps.Point(0, 0)
                };
                navigatorUserIE && (c = markers.markerNetworkIconPngActive), newMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(a, b),
                    zIndex: 1e4,
                    map: mapNet,
                    icon: c
                })
            },
            createNetworkMap: function() {
                function a(a) {
                    var b;
                    _.each(listNetwork.children("li"), function(c) {
                        $(c).data("map") == a && (b = $(c).data("position"), $(c).addClass("active"))
                    }), $(".scrolling").animate({
                        scrollTop: b
                    }, 500)
                }
                position = new google.maps.LatLng(0, 0);
                var b = !0;
                micro.device.isMobile() && (b = !1);
                var c = {
                        url: markers.markerOfficeIconSvg,
                        size: new google.maps.Size(24, 28),
                        origin: new google.maps.Point(0, 0)
                    },
                    d = {
                        url: markers.markerNetworkIconSvg,
                        size: new google.maps.Size(13, 13),
                        origin: new google.maps.Point(0, 0)
                    };
                navigatorUserIE && (c = markers.markerOfficeIconPng, d = markers.markerNetworkIconPng);
                var e = {
                    draggable: b,
                    zoom: 5,
                    maxZoom: 18,
                    minZoom: 3,
                    mapTypeControl: !1,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL
                    },
                    streetViewControl: !1,
                    scrollwheel: !1,
                    styles: styles
                };
                mapNet = new google.maps.Map(document.getElementById(mapId), e), _.each(coord.office, function(b, d) {
                    markerOff[d] = new google.maps.Marker({
                        position: new google.maps.LatLng(b.lat, b.lng),
                        map: mapNet,
                        icon: c
                    }), google.maps.event.addListener(markerOff[d], "click", function() {
                        listNetwork.children("li").removeClass("active"), mapNet.panTo(markerOff[d].getPosition()), window.location.hash = b.link, a(b.link, b.lat, b.lng), newMarker && newMarker.setMap(null)
                    })
                }), _.each(coord.network, function(b, c) {
                    markerNet[c] = new google.maps.Marker({
                        position: new google.maps.LatLng(b.lat, b.lng),
                        zIndex: 999,
                        map: mapNet,
                        icon: d
                    }), google.maps.event.addListener(markerNet[c], "click", function() {
                        listNetwork.children("li").removeClass("active"), mapNet.panTo(markerNet[c].getPosition()), window.location.hash = b.link, a(b.link, b.lat, b.lng), app.setIconNetworkAcctive(b.lat, b.lng)
                    })
                })
            },
            setNetworkMap: function(obj, callback) {
                var coordLat = eval("coord." + obj + ".lat"),
                    coordLng = eval("coord." + obj + ".lng"),
                    pos = new google.maps.LatLng(coordLat, coordLng);
                mapNet.panTo(pos), mapNet.setZoom(5), 0 == obj.indexOf("network") && app.setIconNetworkAcctive(coordLat, coordLng), null != callback && callback()
            },
            filterWorks: function(a) {
                function b() {
                    $(".works-grid." + a).append(e.toArray().sort(function(a, b) {
                        var c = parseInt(a.getAttribute("data-sort")),
                            d = parseInt(b.getAttribute("data-sort"));
                        return d - c
                    }))
                }

                function c(a) {
                    e.attr("data-sort", 0), _.each(e, function(c) {
                        var d = ($(c), $(c).attr("data-filter").split(","));
                        _.each(d, function(d) {
                            var e = d.split(":");
                            e[0] == a && ($(c).attr("data-sort", e[1]), b())
                        })
                    })
                }
                var d, e = $(".works-grid." + a + " .item");
                _.each(dataFilter, function(a) {
                    $(a).on("click", function() {
                        setTimeout(function() {
                            e.removeClass("sort")
                        }, 200);
                        d = $(this).attr("data-title"), d = d.toLowerCase(), dom.filterPanel.close(), "all" != d && (dom.filterPanel.setFilter(), $(".tab-filter").html(d)), e.addClass("sort").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                            c(d)
                        })
                    })
                })
            },
            counterNumber: function(a, b) {
                var c = a.attr("data-number");
                c = parseInt(c);
                var d = $.animateNumber.numberStepFactories.separator(".");
                $("#data-number-" + b).animateNumber({
                    number: c,
                    numberStep: d
                }, 5e3)
            },
            showPanelCase: function() {
                panelInfoCase.onScreen({
                    doIn: function() {
                        panelInfoCase.find(".panel").addClass("block");
                        var a = setTimeout(function() {
                            clearInterval(a), _.each($(".number"), function(a, b) {
                                app.counterNumber($(a), b)
                            })
                        }, 600)
                    }
                })
            },
            createChart: function() {
                chartData.onScreen({
                    doIn: function() {
                        chart.easyPieChart({
                            scaleColor: !1,
                            lineWidth: 12,
                            size: 178,
                            trackColor: "#ececec",
                            lineCap: "square",
                            animate: 2e3,
                            onStep: function(a, b, c) {
                                $(this.el).find(".percent").text(Math.round(c))
                            }
                        })
                    }
                }), chartDataSlider.onScreen({
                    doIn: function() {
                        chartSingleSlider.easyPieChart({
                            scaleColor: !1,
                            lineWidth: 12,
                            size: 178,
                            trackColor: "#ececec",
                            lineCap: "square",
                            animate: 2e3,
                            onStep: function(a, b, c) {
                                $(this.el).find(".percent").text(Math.round(c))
                            }
                        })
                    }
                }), chartSlider = $(".chart-slider").bxSlider({
                    infiniteLoop: !1,
                    controls: !1,
                    speed: 800,
                    easing: easing,
                    pagerSelector: $(".pager-chart"),
                    touchEnabled: !1
                }), micro.device.isTouch() && ($(".chart-slider").hammer().bind("swipeleft", function() {
                    chartSlider.goToNextSlide()
                }), $(".chart-slider").hammer().bind("swiperight", function() {
                    chartSlider.goToPrevSlide()
                }))
            },
            calculateHeightEngine: function() {
                var a = $(".content").outerHeight(!0),
                    b = win.height() - a;
                $(".scrolling").height(b), _.each(listNetwork.children("li"), function(a) {
                    $(a).attr("data-position", $(a).offset().top - 174)
                }), win.width() < SCREEN_IPAD_PORT ? $(".scrolling").addClass("important") : $(".scrolling").removeClass("important")
            },
            calculateHeightNetwork: function() {
                var a = $(".content").outerHeight(!0),
                    b = win.height() - a - 4;
                $(".wrap-scroll, .scrolling").height(b), _.each(listNetwork.children("li"), function(a) {
                    $(a).attr("data-position", $(a).offset().top - 87 - 171)
                }), listNetwork.children("li").on("click", function() {
                    var a = $(this);
                    newMarker && newMarker.setMap(null), clearTimeout(d), listNetwork.css("overflow", "hidden"), listNetwork.children("li").removeClass("active"), a.addClass("active");
                    var b = $(this).attr("data-map"),
                        c = $(this).attr("data-position");
                    app.setNetworkMap(b, function() {
                        window.location.hash = b, $(".scrolling").animate({
                            scrollTop: c
                        }, 500)
                    });
                    var d = setTimeout(function() {
                        listNetwork.css("overflow", "auto")
                    }, 1e3)
                })
            },
            resetVideo: function() {
                var a = $("iframe"),
                    b = a.attr("src");
                a.attr("src", b)
            },
            createSliderImage: function() {
                function a() {
                    var a = sliderImage.getCurrentSlide(),
                        b = sliderImage.getSlideCount(),
                        c = $(".img-case-present .prev-image"),
                        d = $(".img-case-present .next-image");
                    0 == a ? c.addClass("inactive") : c.removeClass("inactive"), a == b - 1 ? d.addClass("inactive") : d.removeClass("inactive")
                }
                $(".images li").width(win.width()), sliderImage = $(".images").bxSlider({
                    infiniteLoop: !1,
                    controls: !1,
                    speed: 800,
                    easing: easing,
                    pagerSelector: $(".pager-images"),
                    touchEnabled: !1,
                    onSlideAfter: function() {
                        a()
                    }
                }), $(".img-case-present .prev-image").addClass("inactive");
                var b = $(".img-case-present .next-image"),
                    c = $(".img-case-present .prev-image"),
                    d = $(".img-case-present .bx-viewport");
                micro.device.isTouch() ? (d.hammer().bind("swipeleft", function() {
                    sliderImage.goToNextSlide()
                }), d.hammer().bind("swiperight", function() {
                    sliderImage.goToPrevSlide()
                })) : (b.on("click", function() {
                    sliderImage.goToNextSlide(), app.resetVideo()
                }), c.on("click", function() {
                    sliderImage.goToPrevSlide(), app.resetVideo()
                }), $(".img-case-present").onScreen({
                    doIn: function() {
                        activeKeyCodeGallery = !0, log("img-case do in")
                    },
                    doOut: function() {
                        activeKeyCodeGallery = !1, log("img-case do out")
                    }
                }))
            },
            createSliderCase: function() {
                function a() {
                    var a = sliderCase.getCurrentSlide(),
                        b = sliderCase.getSlideCount();
                    $(".desc").hide(), $("#desc_" + a).fadeIn(200);
                    var c = $(".slider .prev-image"),
                        d = $(".slider .next-image");
                    0 == a ? c.addClass("inactive") : c.removeClass("inactive"), a == b - 1 ? d.addClass("inactive") : d.removeClass("inactive")
                }
                sliderCase = $(".images-case").bxSlider({
                    infiniteLoop: !1,
                    controls: !1,
                    speed: 800,
                    easing: easing,
                    pagerSelector: $(".pager"),
                    touchEnabled: !1,
                    onSlideAfter: function() {
                        a()
                    }
                }), $(".slider .prev-image").addClass("inactive"), $(".images-case li").height(win.height());
                var b = $(".slider .next-image"),
                    c = $(".slider .prev-image"),
                    d = $(".slider .bx-viewport"),
                    e = $(".panel-info-case .content-text");
                micro.device.isTouch() ? (b.remove(), c.remove(), d.hammer().bind("swipeleft", function() {
                    sliderCase.goToNextSlide()
                }), d.hammer().bind("swiperight", function() {
                    sliderCase.goToPrevSlide()
                })) : ($(".pager .bx-pager-link").on("click", function() {
                    e.animate({
                        scrollTop: 0
                    }, 200)
                }), b.on("click", function() {
                    sliderCase.goToNextSlide(), e.animate({
                        scrollTop: 0
                    }, 200), app.resetVideo()
                }), c.on("click", function() {
                    sliderCase.goToPrevSlide(), e.animate({
                        scrollTop: 0
                    }, 200), app.resetVideo()
                }), $(".slider").onScreen({
                    doIn: function() {
                        activeKeyCodeCase = !0, log("slider do in")
                    },
                    doOut: function() {
                        activeKeyCodeCase = !1, log("slider do out")
                    }
                }))
            },
            setDimensionPageCase: function() {
                win.width() > SCREEN_IPAD_PORT ? $(".slider-pan").addClass("back-panel-info") : $(".slider-pan").removeClass("back-panel-info").removeAttr("style"), $(".images").find("div").width(win.width()).height(win.height()), $(".images").find("iframe").width(win.width()).height(win.height() - 36), $(".wrapper, .bx-wrapper, .back-panel-info").height(win.height()), $(".panel-info-case .content-text").height(win.height() - 80)
            },
            eventListener: function() {
                $("body").on("keydown", function(a) {
                    activeKeyCodeGallery && (a.keyCode == ARROW_RIGHT && sliderImage.goToNextSlide(), a.keyCode == ARROW_LEFT && sliderImage.goToPrevSlide()), activeKeyCodeCase && (a.keyCode == ARROW_RIGHT && sliderCase.goToNextSlide(), a.keyCode == ARROW_LEFT && sliderCase.goToPrevSlide())
                }), _.each(singleCase, function(a) {
                    $(a).mouseover(function() {
                        $(this).children().fadeIn()
                    }).mouseleave(function() {
                        $(this).children().fadeOut(100)
                    })
                }), menu.on("click", function(a) {
                    a.stopPropagation()
                }), menu.find(".filter").on("click", function() {
                    fabFilter.removeClass("block"), menu.removeClass("close").addClass("open").addClass("panel-filter"), panelFilter.addClass("scroll")
                }), menu.find(".icon").on("click", function(a) {
                    a.stopPropagation(), menu.removeClass("close").addClass("open").addClass("panel-menu"), panelMenu.addClass("scroll")
                }).on("mouseover", function() {
                    activeHoverIcon = !0, fabText.removeClass("block"), noHover && btnTop.addClass("show"), btnTop.on("mouseover", function() {
                        activeHoverIcon = !0, fabText.removeClass("block")
                    }).on("mouseout", function() {
                        activeHoverIcon = !1, $(this).removeClass("show"), noHover && fabText.addClass("block")
                    })
                }), menu.find(".btn-top").on("click", function() {
                    activeHoverIcon = !0, micro.html.scrollTop(0, 300)
                }), fabTextWrap.on("mouseout", function() {
                    activeHoverIcon = !1, btnTop.removeClass("show"), noHover && fabText.addClass("block")
                }), menu.find(".icon-close").on("click", function(a) {
                    a.stopPropagation(), submenu = !1, activeLoop = !1, menu.find(".submenu").fadeOut(), fabText.removeClass("block"), menu.removeClass("open panel-menu panel-filter").addClass("close")
                }), menu.find(".lang .active").on("click", function(a) {
                    a.stopPropagation(), submenu ? (submenu = !1, menu.find(".submenu").fadeOut()) : (submenu = !0, menu.find(".submenu").fadeIn())
                }), menu.find("a").on("click", function(a) {
                    a.stopPropagation()
                }), menu.find(".promise").on("click", function(a) {
                    a.preventDefault(), a.stopPropagation(), $(".panel-menu").addClass("panel-page"), $(".overlay-menu").fadeIn(), $(".panel-menu-intern").fadeOut(500, function() {
                        $(".content-page-promise").fadeIn(), $("html").addClass("no-scroll")
                    })
                }), menu.find(".contact").on("click", function(a) {
                    a.preventDefault(), a.stopPropagation(), $(".panel-menu").addClass("panel-page contacts"), $(".overlay-menu").fadeIn(), $(".panel-menu-intern").fadeOut(500, function() {
                        $(".content-page-contact").fadeIn(), $("html").addClass("no-scroll")
                    })
                }), menu.find(".legals").on("click", function(a) {
                    a.preventDefault(), a.stopPropagation(), $(".panel-menu").addClass("panel-page"), $(".overlay-menu").fadeIn(), $(".panel-menu-intern").fadeOut(500, function() {
                        $(".content-page-legals").fadeIn(), $("html").addClass("no-scroll")
                    })
                }), menu.find(".cookie").on("click", function(a) {
                    a.preventDefault(), a.stopPropagation(), $(".panel-menu").addClass("panel-page"), $(".overlay-menu").fadeIn(), $(".panel-menu-intern").fadeOut(500, function() {
                        $(".content-page-cookie").fadeIn(), $("html").addClass("no-scroll")
                    })
                }), menu.find(".close-page").on("click", function(a) {
                    a.preventDefault(), $(".panel-menu").removeClass("panel-page contacts"), $(".panel-menu-intern").fadeIn(), $(".overlay-menu").fadeOut(), $(".content-page-promise").hide(), $(".content-page-contact").hide(), $(".content-page-legals").hide(), $(".content-page-cookie").hide(), $("html").removeClass("no-scroll")
                }), $(".overlay-menu").on("click", function(a) {
                    a.stopPropagation(), $(".panel-menu").removeClass("panel-page contacts"), $(".panel-menu-intern").fadeIn(), $(".overlay-menu").fadeOut(), $(".content-page-promise").hide(), $(".content-page-contact").hide(), $(".content-page-legals").hide(), $(".content-page-cookie").hide(), $("html").removeClass("no-scroll")
                }), $("body").on("click", function() {
                    submenu = !1, menu.find(".submenu").fadeOut(), menu.removeClass("open panel-menu panel-filter").addClass("close")
                }), $(".tab").on("click", function(a) {
                    a.preventDefault();
                    var b = $(this).attr("data-tab");
                    $(".works-grid").hide(), $(".tab").removeClass("active"), $("#" + b).show(), app.filterWorks("case"), "clients" == b ? ($(".wrapper-grid-top").addClass("tab-client-open"), $(".c-open").addClass("disable")) : ($(".wrapper-grid-top").removeClass("tab-client-open"), $(".c-open").removeClass("disable")), $(this).addClass("active"), "clients" == b && _.each($(".bxslider-clients"), function(a, b) {
                        var c = $(a).attr("id");
                        sliderClientCase[b] = $("#" + c).bxSlider({
                            infiniteLoop: !1,
                            controls: !1,
                            speed: 800,
                            easing: easing,
                            touchEnabled: !1
                        }), micro.device.isTouch() && (sliderClientCase[b].hammer().bind("swipeleft", function() {
                            sliderClientCase[b].goToNextSlide()
                        }), sliderClientCase[b].hammer().bind("swiperight", function() {
                            sliderClientCase[b].goToPrevSlide()
                        }))
                    }), _.each(textCase, function(a) {
                        $(a).css("top", utils.centerVerticalElementInElement($(a)))
                    }), dom.filterPanel.close(), dom.filterPanel.unsetFilter()
                })
            },
            listenerEngine: function() {
                function a() {
                    main = !1, $(".main-page").animate({
                        opacity: 0
                    }, 300), app.removeAnimation()
                }

                function b() {
                    main = !0, activeLoop = !1, $(".main-page").animate({
                        opacity: 1
                    }, 300), app.removeAnimation()
                } {
                    var c = document.getElementById("svg-page");
                    new Parallax(c)
                }
                main = !0;
                var d = $(".list.engine");
                svg = Snap("#svg"), d.find(".icon-close").on("click", function(a) {
                    a.stopPropagation(), d.find("li").removeClass("active"), b()
                }), _.each(d.find("li"), function(b) {
                    $(b).on("click", function(b) {
                        b.stopPropagation(), activeLoop = $(this).hasClass("database") ? !0 : !1, $(this).hasClass("active") || a();
                        var c = $(this).attr("data-position");
                        if ($(".scrolling").animate({
                                scrollTop: c
                            }, 500), d.find("li").removeClass("active"), $(this).addClass("active"), !main) {
                            main = !0;
                            var e = $(this).attr("class");
                            e = e.replace(" active", "");
                            var f = $("#svg #" + e);
                            $("#svg #group").append(f.clone(!0)), f.remove(); {
                                setTimeout(function() {
                                    app.removeAnimation(), app.animationSvg(svg, e)
                                }, 200)
                            }
                        }
                    })
                })
            },
            animateElementRotate: function(a, b, c, d) {
                var e = a.getBBox(),
                    f = e.x + e.width / 2,
                    g = e.y + e.height / 2;
                globalAnimation.push(b.transform("r" + 0 * d + " " + f + " " + g)), globalAnimation.push(b.animate({
                    transform: "r" + 360 * d + " " + f + " " + g
                }, c, mina.linear, app.animateElementRotate.bind(null, a, b, c, d)))
            },
            animateElementScale: function(a, b, c) {
                var d, e = a.getBBox(),
                    f = e.x + e.width / 2,
                    g = e.y + e.height / 2;
                d = "-" + f * (b - 1) + " -" + g * (b - 1), b > c ? (globalAnimation.push(a.animate({
                    transform: "t0 0"
                }, 200, mina.linear)), globalAnimation.push(a.animate({
                    transform: "s1"
                }, 200, mina.linear))) : (a.attr("transform", "translate(" + d + ") scale(" + b + ")"), globalAnimation.push(a.animate({
                    transform: "s" + c
                }, 200, mina.linear)))
            },
            animateCameraFlash: function(a, b, c) {
                var d = function(e, f) {
                    log("CALL: animationFlash");
                    var g = e.clone();
                    g.attr("transform", "translate(" + i + ") scale(" + b + ")"), g.addClass("flash"), g.animate({
                        transform: "s" + c,
                        "fill-opacity": 0,
                        "stroke-opacity": 0
                    }, f, mina.linear, function() {
                        return g.removeClass("flash"), g.attr("transform", "translate(0 0) scale(1)"), activeLoop ? (log("CALL: animationFlash Intern"), g.remove(), d(a.items[Math.floor(Math.random() * a.items.length)], j[Math.floor(Math.random() * j.length)])) : void 0
                    })
                };
                if (activeLoop) {
                    var e, f = a.getBBox(),
                        g = f.x + f.width / 2,
                        h = f.y + f.height / 2,
                        i = "-" + g * (b - 1) + " -" + h * (b - 1),
                        j = [500, 700, 400, 600, 800],
                        k = 15,
                        l = [],
                        m = [];
                    for (e = 0; k > e; e++) l[e] = a.items[Math.floor(Math.random() * a.items.length)], m[e] = d(l[e], j[Math.floor(Math.random() * j.length)]), log(l[e].matrix)
                }
            },
            animateScaleLine: function(a, b) {
                b ? (a.select("#fp-line-dx").animate({
                    x1: 202,
                    y1: 15,
                    x2: 243,
                    y2: 130
                }, 200, mina.linear), a.select("#fp-line-sx").animate({
                    x1: 246,
                    y1: -25,
                    x2: 354,
                    y2: 29
                }, 200, mina.linear)) : (a.select("#fp-line-dx").animate({
                    x1: 191.098,
                    y1: 2.331,
                    x2: 252,
                    y2: 143.102
                }, 200, mina.linear), a.select("#fp-line-sx").animate({
                    x1: 236.37,
                    y1: -35.203,
                    x2: 365.062,
                    y2: 40.33
                }, 200, mina.linear))
            },
            animateScaleRadius: function(a, b, c, d) {
                globalAnimation.push(a.animate({
                    r: b
                }, d, mina.easeinout, function() {
                    globalAnimation.push(a.animate({
                        r: c
                    }, d, mina.easeinout, app.animateScaleRadius.bind(null, a, b, c, d)))
                }))
            },
            removeAnimation: function() {
                _.each(globalAnimation, function(a) {
                    a.stop()
                }), svg.select("#database").removeClass("animation"), app.animateElementScale(svg.select("#database"), 1.2, 1), app.animateElementScale(svg.select("#corona"), 1.2, 1), svg.select("#corona").removeClass("animationCorona"), svg.select("#movement").removeClass("animation"), app.animateElementScale(svg.select("#movement"), 1.2, 1), svg.select("#mv-outline").animate({
                    r: 65
                }, 150, mina.easeinout), svg.select("#energy").removeClass("animation"), app.animateElementScale(svg.select("#energy"), 1.2, 1), svg.select("#en-circle-external").animate({
                    r: 45
                }, 150, mina.easeinout), svg.select("#en-outline").animate({
                    r: 65
                }, 150, mina.easeinout), svg.select("#fuel").removeClass("animation"), svg.select("#fuel-part-1").removeClass("animation"), svg.select("#fuel-part-2").removeClass("animation"), app.animateScaleLine(svg.select("#fuel-part-2"), !1), app.animateElementScale(svg.select("#fuel"), 1.2, 1), app.animateElementScale(svg.select("#fuel-part-1"), 1.2, 1), app.animateElementScale(svg.select("#fuel-part-2"), 1.2, 1), svg.select("#fab").removeClass("animation"), app.animateElementScale(svg.select("#fab"), 1.2, 1), svg.select("#star").removeClass("animationstar")
            },
            animationSvg: function(a, b) {
                app.animateElementRotate(a.select("#database"), a.select("#db-internal-triangle"), 5e3, -1), app.animateElementRotate(a.select("#database"), a.select("#db-external-triangle"), 5e3, 1), app.animateElementRotate(a.select("#movement"), a.select("#mv-outline"), 5e3, 1), app.animateElementRotate(a.select("#movement"), a.select("#mv-triangle"), 5e3, -1), app.animateElementRotate(a.select("#movement"), a.select("#mv-poligon-internal"), 5e3, 1), app.animateElementRotate(a.select("#movement"), a.select("#mv-poligon-external"), 5e3, -1), app.animateElementRotate(a.select("#energy"), a.select("#en-outline"), 5e3, 1), app.animateElementRotate(a.select("#energy"), a.select("#en-polygon"), 5e3, -1), app.animateElementRotate(a.select("#energy"), a.select("#en-triangle"), 5e3, 1), app.animateElementRotate(a.select("#fuel"), a.select("#fu-circle-outline"), 1e4, 1), app.animateElementRotate(a.select("#fuel"), a.select("#fu-polygon"), 5e3, -1), app.animateElementRotate(a.select("#fuel-part-1"), a.select("#fp-triangle"), 5e3, 1), app.animateElementRotate(a.select("#fab"), a.select("#fb-outline"), 5e3, -1), app.animateElementRotate(a.select("#fab"), a.select("#fb-polygon"), 5e3, 1);
                var c = a.select("#" + b);
                switch (c.addClass("animation"), b) {
                    case "database":
                        app.animateElementScale(c, 1, 1.2), a.select("#corona").addClass("animationCorona"), app.animateElementScale(a.select("#corona"), 1, 1.2), clearTimeout(d);
                        var d = setTimeout(function() {
                            app.animateCameraFlash(a.selectAll(".path"), 1, 2.5)
                        }, 400);
                        break;
                    case "movement":
                        app.animateElementScale(c, 1, 1.2), app.animateScaleRadius(svg.select("#mv-outline"), 75, 65, 500);
                        break;
                    case "energy":
                        app.animateElementScale(c, 1, 1.2), app.animateScaleRadius(svg.select("#en-circle-external"), 85, 45, 1500), app.animateScaleRadius(svg.select("#en-outline"), 85, 65, 1500);
                        break;
                    case "fuel":
                        app.animateElementScale(c, 1, 1.2), app.animateElementScale(a.select("#fuel-part-1"), 1, 1.2), app.animateElementScale(a.select("#fuel-part-2"), 1, 1.2), app.animateScaleLine(a.select("#fuel-part-2"), !0), a.select("#fuel-part-1").addClass("animation"), a.select("#fuel-part-2").addClass("animation");
                        break;
                    case "fab":
                        app.animateElementScale(c, 1, 1.2), a.select("#star").addClass("animationstar")
                }
            },
            nobgCover: function() {
                var a = (win.height(), win.outerWidth());
                a > 1660 ? win.height() < 893 ? $(".home").addClass("no-bg-home") : $(".home").removeClass("no-bg-home") : win.height() < 684 ? $(".home").addClass("no-bg-home") : $(".home").removeClass("no-bg-home")
            },
            init: function() {
                if (easing = Modernizr.cssanimations ? "cubic-bezier(0.785, 0.035, 0.400, 0.960)" : "linear", body.hasClass("home") && (pageScroll = 83 * win.height() / 100, app.nobgCover(), app.loadPage(function() {
                        app.loadCurtains(), app.animationLoadPage($(".home")), app.createMap()
                    }), _.each(textCase, function(a) {
                        $(a).parent().show(), $(a).css("margin-top", "-" + parseInt($(a).outerHeight() / 2) + "px"), $(a).parent().hide()
                    })), body.hasClass("case")) {
                    $(".pager-images").hide(), $(window).scroll(function() {
                        var a = $(this).scrollTop();
                        100 > a ? $(".pager-images").hide() : $(".pager-images").fadeIn()
                    }), pageScroll = 550, app.setDimensionPageCase(), app.loadPage(function() {
                        app.animationLoadPage($(".single-case-study")), chartNr.css("top", utils.centerVerticalElementInElement($(chartNr))), chartNrSingleSlider.css("top", utils.centerVerticalElementInElement($(chartNrSingleSlider))), app.createChart(), app.createSliderCase(), app.createSliderImage(), app.loadCurtains(), app.showPanelCase()
                    });
                    var a = $(".panel-info-case .content-text"),
                        b = 0,
                        c = 0;
                    $(window).on("scroll", function() {
                        var d = $(window).scrollTop() + win.height() == $(document).height();
                        log("doc: " + d), log("scrolltop: " + $("body").scrollTop()), log("win: " + win.height()), log("document: " + $(document).height()), navigator.userAgent.match(/iPad/i) && (d = $(window).scrollTop() + win.height() + 56 == $(document).height()), d && (b = $("body").scrollTop(), a.addClass("scroll")), c = b - 1, b > 0 && $("body").scrollTop() < c && (b = 0, a.animate({
                            scrollTop: 0
                        }, 200, function() {
                            a.removeClass("scroll")
                        }))
                    })
                }
                if (body.hasClass("works") && (pageScroll = 60, app.loadPage(function() {
                        app.animationLoadPage(), _.each(textCase, function(a) {
                            $(a).css("top", utils.centerVerticalElementInElement($(a)))
                        }), app.filterWorks("case"), dom.filterPanel.listevent(), $(".item").on("mouseover", function() {
                            $(this).addClass("add-hover")
                        }), $(".item").on("mouseleave", function() {
                            $(this).removeClass("add-hover")
                        })
                    })), body.hasClass("network") && (app.calculateHeightNetwork(), app.loadPage(function() {
                        if (app.animationLoadPage(), app.createNetworkMap(), window.location.hash) {
                            var a = window.location.hash.replace("#", "");
                            listNetwork.children("li").removeClass("active"), app.setNetworkMap(a, function() {
                                _.each(listNetwork.children("li"), function(b) {
                                    $(b).attr("data-map") === a && $(b).addClass("active")
                                })
                            })
                        } else window.location.hash = hashNetworkDefault, app.setNetworkMap(hashNetworkDefault, null), _.each(listNetwork.children("li"), function(a) {
                            $(a).attr("data-map") === hashNetworkDefault && $(a).addClass("active")
                        })
                    }), micro.device.isMobile() || $(".stickyContainer").stickyHeaders()), body.hasClass("engine")) {
                    var d = $(".main-svg").width(),
                        e = $(".main-svg").height();
                    $("svg").attr("width", d), $("svg").attr("height", e);
                    var f = $(".main-page .text");
                    app.loadPage(function() {
                        app.animationLoadPage(), app.calculateHeightEngine(), app.listenerEngine(), f.css("top", utils.centerVerticalElementInElement(f))
                    })
                }
                win.width() < SCREEN_IPHONE && curtainsLi.first().removeClass("cover")
            }
        }, app.init()
    }), $(window).on("scroll", function() {
        var a = $(this).scrollTop();
        a > pageScroll ? (noHover = !0, activeHoverIcon || fabText.addClass("block")) : (noHover = !1, btnTop.removeClass("show"), fabText.removeClass("block")), body.hasClass("works") && (a > 116 ? $(".container-fluid").addClass("fixed") : $(".container-fluid").removeClass("fixed"))
    }), $(window).resize(function() {
        if (fabPreloader.css("margin-top", utils.centerVerticalElement(fabPreloader)), win.width() < SCREEN_IPHONE ? curtainsLi.first().removeClass("cover") : curtainsLi.first().addClass("cover"), body.hasClass("home") && (app.nobgCover(), _.each(textCase, function(a) {
                $(a).parent().show(), $(a).css("margin-top", "-" + parseInt($(a).outerHeight() / 2) + "px"), $(a).parent().hide()
            })), body.hasClass("case") && (chartNr.css("top", utils.centerVerticalElementInElement($(chartNr))), chartNrSingleSlider.css("top", utils.centerVerticalElementInElement($(chartNrSingleSlider))), app.setDimensionPageCase()), body.hasClass("network") && app.calculateHeightNetwork(), body.hasClass("works") && _.each(textCase, function(a) {
                $(a).css("top", utils.centerVerticalElementInElement($(a)))
            }), body.hasClass("engine")) {
            var a = $(".main-page .text");
            app.calculateHeightEngine(), a.css("top", utils.centerVerticalElementInElement(a))
        }
    })
}(jQuery, window, document);
