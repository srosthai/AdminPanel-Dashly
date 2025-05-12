(self.webpackChunkdashly = self.webpackChunkdashly || []).push([[58], {
    228: t => {
        "use strict";
        var e = Object.prototype.hasOwnProperty
            , n = "~";
        function s() { }
        function r(t, e, n) {
            this.fn = t,
                this.context = e,
                this.once = n || !1
        }
        function i(t, e, s, i, o) {
            if ("function" != typeof s)
                throw new TypeError("The listener must be a function");
            var l = new r(s, i || t, o)
                , a = n ? n + e : e;
            return t._events[a] ? t._events[a].fn ? t._events[a] = [t._events[a], l] : t._events[a].push(l) : (t._events[a] = l,
                t._eventsCount++),
                t
        }
        function o(t, e) {
            0 == --t._eventsCount ? t._events = new s : delete t._events[e]
        }
        function l() {
            this._events = new s,
                this._eventsCount = 0
        }
        Object.create && (s.prototype = Object.create(null),
            (new s).__proto__ || (n = !1)),
            l.prototype.eventNames = function () {
                var t, s, r = [];
                if (0 === this._eventsCount)
                    return r;
                for (s in t = this._events)
                    e.call(t, s) && r.push(n ? s.slice(1) : s);
                return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
            }
            ,
            l.prototype.listeners = function (t) {
                var e = n ? n + t : t
                    , s = this._events[e];
                if (!s)
                    return [];
                if (s.fn)
                    return [s.fn];
                for (var r = 0, i = s.length, o = new Array(i); r < i; r++)
                    o[r] = s[r].fn;
                return o
            }
            ,
            l.prototype.listenerCount = function (t) {
                var e = n ? n + t : t
                    , s = this._events[e];
                return s ? s.fn ? 1 : s.length : 0
            }
            ,
            l.prototype.emit = function (t, e, s, r, i, o) {
                var l = n ? n + t : t;
                if (!this._events[l])
                    return !1;
                var a, c, u = this._events[l], h = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(t, u.fn, void 0, !0),
                    h) {
                        case 1:
                            return u.fn.call(u.context),
                                !0;
                        case 2:
                            return u.fn.call(u.context, e),
                                !0;
                        case 3:
                            return u.fn.call(u.context, e, s),
                                !0;
                        case 4:
                            return u.fn.call(u.context, e, s, r),
                                !0;
                        case 5:
                            return u.fn.call(u.context, e, s, r, i),
                                !0;
                        case 6:
                            return u.fn.call(u.context, e, s, r, i, o),
                                !0
                    }
                    for (c = 1,
                        a = new Array(h - 1); c < h; c++)
                        a[c - 1] = arguments[c];
                    u.fn.apply(u.context, a)
                } else {
                    var d, f = u.length;
                    for (c = 0; c < f; c++)
                        switch (u[c].once && this.removeListener(t, u[c].fn, void 0, !0),
                        h) {
                            case 1:
                                u[c].fn.call(u[c].context);
                                break;
                            case 2:
                                u[c].fn.call(u[c].context, e);
                                break;
                            case 3:
                                u[c].fn.call(u[c].context, e, s);
                                break;
                            case 4:
                                u[c].fn.call(u[c].context, e, s, r);
                                break;
                            default:
                                if (!a)
                                    for (d = 1,
                                        a = new Array(h - 1); d < h; d++)
                                        a[d - 1] = arguments[d];
                                u[c].fn.apply(u[c].context, a)
                        }
                }
                return !0
            }
            ,
            l.prototype.on = function (t, e, n) {
                return i(this, t, e, n, !1)
            }
            ,
            l.prototype.once = function (t, e, n) {
                return i(this, t, e, n, !0)
            }
            ,
            l.prototype.removeListener = function (t, e, s, r) {
                var i = n ? n + t : t;
                if (!this._events[i])
                    return this;
                if (!e)
                    return o(this, i),
                        this;
                var l = this._events[i];
                if (l.fn)
                    l.fn !== e || r && !l.once || s && l.context !== s || o(this, i);
                else {
                    for (var a = 0, c = [], u = l.length; a < u; a++)
                        (l[a].fn !== e || r && !l[a].once || s && l[a].context !== s) && c.push(l[a]);
                    c.length ? this._events[i] = 1 === c.length ? c[0] : c : o(this, i)
                }
                return this
            }
            ,
            l.prototype.removeAllListeners = function (t) {
                var e;
                return t ? (e = n ? n + t : t,
                    this._events[e] && o(this, e)) : (this._events = new s,
                        this._eventsCount = 0),
                    this
            }
            ,
            l.prototype.off = l.prototype.removeListener,
            l.prototype.addListener = l.prototype.on,
            l.prefixed = n,
            l.EventEmitter = l,
            t.exports = l
    }
    ,
    5606: t => {
        var e = -1;
        function n(t, f, p, g, m) {
            if (t === f)
                return t ? [[0, t]] : [];
            if (null != p) {
                var y = function (t, e, n) {
                    var s = "number" == typeof n ? {
                        index: n,
                        length: 0
                    } : n.oldRange
                        , r = "number" == typeof n ? null : n.newRange
                        , i = t.length
                        , o = e.length;
                    if (0 === s.length && (null === r || 0 === r.length)) {
                        var l = s.index
                            , a = t.slice(0, l)
                            , c = t.slice(l)
                            , u = r ? r.index : null
                            , h = l + o - i;
                        if ((null === u || u === h) && !(h < 0 || h > o)) {
                            var d = e.slice(0, h);
                            if ((g = e.slice(h)) === c) {
                                var f = Math.min(l, h);
                                if ((y = a.slice(0, f)) === (x = d.slice(0, f)))
                                    return b(y, a.slice(f), d.slice(f), c)
                            }
                        }
                        if (null === u || u === l) {
                            var p = l
                                , g = (d = e.slice(0, p),
                                    e.slice(p));
                            if (d === a) {
                                var m = Math.min(i - p, o - p);
                                if ((v = c.slice(c.length - m)) === (N = g.slice(g.length - m)))
                                    return b(a, c.slice(0, c.length - m), g.slice(0, g.length - m), v)
                            }
                        }
                    }
                    if (s.length > 0 && r && 0 === r.length) {
                        var y = t.slice(0, s.index)
                            , v = t.slice(s.index + s.length);
                        if (!(o < (f = y.length) + (m = v.length))) {
                            var x = e.slice(0, f)
                                , N = e.slice(o - m);
                            if (y === x && v === N)
                                return b(y, t.slice(f, i - m), e.slice(f, o - m), v)
                        }
                    }
                    return null
                }(t, f, p);
                if (y)
                    return y
            }
            var v = r(t, f)
                , x = t.substring(0, v);
            v = o(t = t.substring(v), f = f.substring(v));
            var N = t.substring(t.length - v)
                , E = function (t, i) {
                    var l;
                    if (!t)
                        return [[1, i]];
                    if (!i)
                        return [[e, t]];
                    var a = t.length > i.length ? t : i
                        , c = t.length > i.length ? i : t
                        , u = a.indexOf(c);
                    if (-1 !== u)
                        return l = [[1, a.substring(0, u)], [0, c], [1, a.substring(u + c.length)]],
                            t.length > i.length && (l[0][0] = l[2][0] = e),
                            l;
                    if (1 === c.length)
                        return [[e, t], [1, i]];
                    var h = function (t, e) {
                        var n = t.length > e.length ? t : e
                            , s = t.length > e.length ? e : t;
                        if (n.length < 4 || 2 * s.length < n.length)
                            return null;
                        function i(t, e, n) {
                            for (var s, i, l, a, c = t.substring(n, n + Math.floor(t.length / 4)), u = -1, h = ""; -1 !== (u = e.indexOf(c, u + 1));) {
                                var d = r(t.substring(n), e.substring(u))
                                    , f = o(t.substring(0, n), e.substring(0, u));
                                h.length < f + d && (h = e.substring(u - f, u) + e.substring(u, u + d),
                                    s = t.substring(0, n - f),
                                    i = t.substring(n + d),
                                    l = e.substring(0, u - f),
                                    a = e.substring(u + d))
                            }
                            return 2 * h.length >= t.length ? [s, i, l, a, h] : null
                        }
                        var l, a, c, u, h, d = i(n, s, Math.ceil(n.length / 4)), f = i(n, s, Math.ceil(n.length / 2));
                        if (!d && !f)
                            return null;
                        l = f ? d && d[4].length > f[4].length ? d : f : d;
                        t.length > e.length ? (a = l[0],
                            c = l[1],
                            u = l[2],
                            h = l[3]) : (u = l[0],
                                h = l[1],
                                a = l[2],
                                c = l[3]);
                        var p = l[4];
                        return [a, c, u, h, p]
                    }(t, i);
                    if (h) {
                        var d = h[0]
                            , f = h[1]
                            , p = h[2]
                            , g = h[3]
                            , m = h[4]
                            , b = n(d, p)
                            , y = n(f, g);
                        return b.concat([[0, m]], y)
                    }
                    return function (t, n) {
                        for (var r = t.length, i = n.length, o = Math.ceil((r + i) / 2), l = o, a = 2 * o, c = new Array(a), u = new Array(a), h = 0; h < a; h++)
                            c[h] = -1,
                                u[h] = -1;
                        c[l + 1] = 0,
                            u[l + 1] = 0;
                        for (var d = r - i, f = d % 2 != 0, p = 0, g = 0, m = 0, b = 0, y = 0; y < o; y++) {
                            for (var v = -y + p; v <= y - g; v += 2) {
                                for (var x = l + v, N = (k = v === -y || v !== y && c[x - 1] < c[x + 1] ? c[x + 1] : c[x - 1] + 1) - v; k < r && N < i && t.charAt(k) === n.charAt(N);)
                                    k++,
                                        N++;
                                if (c[x] = k,
                                    k > r)
                                    g += 2;
                                else if (N > i)
                                    p += 2;
                                else if (f) {
                                    if ((A = l + d - v) >= 0 && A < a && -1 !== u[A])
                                        if (k >= (w = r - u[A]))
                                            return s(t, n, k, N)
                                }
                            }
                            for (var E = -y + m; E <= y - b; E += 2) {
                                for (var w, A = l + E, q = (w = E === -y || E !== y && u[A - 1] < u[A + 1] ? u[A + 1] : u[A - 1] + 1) - E; w < r && q < i && t.charAt(r - w - 1) === n.charAt(i - q - 1);)
                                    w++,
                                        q++;
                                if (u[A] = w,
                                    w > r)
                                    b += 2;
                                else if (q > i)
                                    m += 2;
                                else if (!f) {
                                    if ((x = l + d - E) >= 0 && x < a && -1 !== c[x]) {
                                        var k;
                                        N = l + (k = c[x]) - x;
                                        if (k >= (w = r - w))
                                            return s(t, n, k, N)
                                    }
                                }
                            }
                        }
                        return [[e, t], [1, n]]
                    }(t, i)
                }(t = t.substring(0, t.length - v), f = f.substring(0, f.length - v));
            return x && E.unshift([0, x]),
                N && E.push([0, N]),
                d(E, m),
                g && function (t) {
                    var n = !1
                        , s = []
                        , r = 0
                        , f = null
                        , p = 0
                        , g = 0
                        , m = 0
                        , b = 0
                        , y = 0;
                    for (; p < t.length;)
                        0 == t[p][0] ? (s[r++] = p,
                            g = b,
                            m = y,
                            b = 0,
                            y = 0,
                            f = t[p][1]) : (1 == t[p][0] ? b += t[p][1].length : y += t[p][1].length,
                                f && f.length <= Math.max(g, m) && f.length <= Math.max(b, y) && (t.splice(s[r - 1], 0, [e, f]),
                                    t[s[r - 1] + 1][0] = 1,
                                    r--,
                                    p = --r > 0 ? s[r - 1] : -1,
                                    g = 0,
                                    m = 0,
                                    b = 0,
                                    y = 0,
                                    f = null,
                                    n = !0)),
                            p++;
                    n && d(t);
                    (function (t) {
                        function e(t, e) {
                            if (!t || !e)
                                return 6;
                            var n = t.charAt(t.length - 1)
                                , s = e.charAt(0)
                                , r = n.match(l)
                                , i = s.match(l)
                                , o = r && n.match(a)
                                , d = i && s.match(a)
                                , f = o && n.match(c)
                                , p = d && s.match(c)
                                , g = f && t.match(u)
                                , m = p && e.match(h);
                            return g || m ? 5 : f || p ? 4 : r && !o && d ? 3 : o || d ? 2 : r || i ? 1 : 0
                        }
                        var n = 1;
                        for (; n < t.length - 1;) {
                            if (0 == t[n - 1][0] && 0 == t[n + 1][0]) {
                                var s = t[n - 1][1]
                                    , r = t[n][1]
                                    , i = t[n + 1][1]
                                    , d = o(s, r);
                                if (d) {
                                    var f = r.substring(r.length - d);
                                    s = s.substring(0, s.length - d),
                                        r = f + r.substring(0, r.length - d),
                                        i = f + i
                                }
                                for (var p = s, g = r, m = i, b = e(s, r) + e(r, i); r.charAt(0) === i.charAt(0);) {
                                    s += r.charAt(0),
                                        r = r.substring(1) + i.charAt(0),
                                        i = i.substring(1);
                                    var y = e(s, r) + e(r, i);
                                    y >= b && (b = y,
                                        p = s,
                                        g = r,
                                        m = i)
                                }
                                t[n - 1][1] != p && (p ? t[n - 1][1] = p : (t.splice(n - 1, 1),
                                    n--),
                                    t[n][1] = g,
                                    m ? t[n + 1][1] = m : (t.splice(n + 1, 1),
                                        n--))
                            }
                            n++
                        }
                    }
                    )(t),
                        p = 1;
                    for (; p < t.length;) {
                        if (t[p - 1][0] == e && 1 == t[p][0]) {
                            var v = t[p - 1][1]
                                , x = t[p][1]
                                , N = i(v, x)
                                , E = i(x, v);
                            N >= E ? (N >= v.length / 2 || N >= x.length / 2) && (t.splice(p, 0, [0, x.substring(0, N)]),
                                t[p - 1][1] = v.substring(0, v.length - N),
                                t[p + 1][1] = x.substring(N),
                                p++) : (E >= v.length / 2 || E >= x.length / 2) && (t.splice(p, 0, [0, v.substring(0, E)]),
                                    t[p - 1][0] = 1,
                                    t[p - 1][1] = x.substring(0, x.length - E),
                                    t[p + 1][0] = e,
                                    t[p + 1][1] = v.substring(E),
                                    p++),
                                p++
                        }
                        p++
                    }
                }(E),
                E
        }
        function s(t, e, s, r) {
            var i = t.substring(0, s)
                , o = e.substring(0, r)
                , l = t.substring(s)
                , a = e.substring(r)
                , c = n(i, o)
                , u = n(l, a);
            return c.concat(u)
        }
        function r(t, e) {
            if (!t || !e || t.charAt(0) !== e.charAt(0))
                return 0;
            for (var n = 0, s = Math.min(t.length, e.length), r = s, i = 0; n < r;)
                t.substring(i, r) == e.substring(i, r) ? i = n = r : s = r,
                    r = Math.floor((s - n) / 2 + n);
            return f(t.charCodeAt(r - 1)) && r--,
                r
        }
        function i(t, e) {
            var n = t.length
                , s = e.length;
            if (0 == n || 0 == s)
                return 0;
            n > s ? t = t.substring(n - s) : n < s && (e = e.substring(0, n));
            var r = Math.min(n, s);
            if (t == e)
                return r;
            for (var i = 0, o = 1; ;) {
                var l = t.substring(r - o)
                    , a = e.indexOf(l);
                if (-1 == a)
                    return i;
                o += a,
                    0 != a && t.substring(r - o) != e.substring(0, o) || (i = o,
                        o++)
            }
        }
        function o(t, e) {
            if (!t || !e || t.slice(-1) !== e.slice(-1))
                return 0;
            for (var n = 0, s = Math.min(t.length, e.length), r = s, i = 0; n < r;)
                t.substring(t.length - r, t.length - i) == e.substring(e.length - r, e.length - i) ? i = n = r : s = r,
                    r = Math.floor((s - n) / 2 + n);
            return p(t.charCodeAt(t.length - r)) && r--,
                r
        }
        var l = /[^a-zA-Z0-9]/
            , a = /\s/
            , c = /[\r\n]/
            , u = /\n\r?\n$/
            , h = /^\r?\n\r?\n/;
        function d(t, n) {
            t.push([0, ""]);
            for (var s, i = 0, l = 0, a = 0, c = "", u = ""; i < t.length;)
                if (i < t.length - 1 && !t[i][1])
                    t.splice(i, 1);
                else
                    switch (t[i][0]) {
                        case 1:
                            a++,
                                u += t[i][1],
                                i++;
                            break;
                        case e:
                            l++,
                                c += t[i][1],
                                i++;
                            break;
                        case 0:
                            var h = i - a - l - 1;
                            if (n) {
                                if (h >= 0 && m(t[h][1])) {
                                    var f = t[h][1].slice(-1);
                                    if (t[h][1] = t[h][1].slice(0, -1),
                                        c = f + c,
                                        u = f + u,
                                        !t[h][1]) {
                                        t.splice(h, 1),
                                            i--;
                                        var p = h - 1;
                                        t[p] && 1 === t[p][0] && (a++,
                                            u = t[p][1] + u,
                                            p--),
                                            t[p] && t[p][0] === e && (l++,
                                                c = t[p][1] + c,
                                                p--),
                                            h = p
                                    }
                                }
                                if (g(t[i][1])) {
                                    f = t[i][1].charAt(0);
                                    t[i][1] = t[i][1].slice(1),
                                        c += f,
                                        u += f
                                }
                            }
                            if (i < t.length - 1 && !t[i][1]) {
                                t.splice(i, 1);
                                break
                            }
                            if (c.length > 0 || u.length > 0) {
                                c.length > 0 && u.length > 0 && (0 !== (s = r(u, c)) && (h >= 0 ? t[h][1] += u.substring(0, s) : (t.splice(0, 0, [0, u.substring(0, s)]),
                                    i++),
                                    u = u.substring(s),
                                    c = c.substring(s)),
                                    0 !== (s = o(u, c)) && (t[i][1] = u.substring(u.length - s) + t[i][1],
                                        u = u.substring(0, u.length - s),
                                        c = c.substring(0, c.length - s)));
                                var b = a + l;
                                0 === c.length && 0 === u.length ? (t.splice(i - b, b),
                                    i -= b) : 0 === c.length ? (t.splice(i - b, b, [1, u]),
                                        i = i - b + 1) : 0 === u.length ? (t.splice(i - b, b, [e, c]),
                                            i = i - b + 1) : (t.splice(i - b, b, [e, c], [1, u]),
                                                i = i - b + 2)
                            }
                            0 !== i && 0 === t[i - 1][0] ? (t[i - 1][1] += t[i][1],
                                t.splice(i, 1)) : i++,
                                a = 0,
                                l = 0,
                                c = "",
                                u = ""
                    }
            "" === t[t.length - 1][1] && t.pop();
            var y = !1;
            for (i = 1; i < t.length - 1;)
                0 === t[i - 1][0] && 0 === t[i + 1][0] && (t[i][1].substring(t[i][1].length - t[i - 1][1].length) === t[i - 1][1] ? (t[i][1] = t[i - 1][1] + t[i][1].substring(0, t[i][1].length - t[i - 1][1].length),
                    t[i + 1][1] = t[i - 1][1] + t[i + 1][1],
                    t.splice(i - 1, 1),
                    y = !0) : t[i][1].substring(0, t[i + 1][1].length) == t[i + 1][1] && (t[i - 1][1] += t[i + 1][1],
                        t[i][1] = t[i][1].substring(t[i + 1][1].length) + t[i + 1][1],
                        t.splice(i + 1, 1),
                        y = !0)),
                    i++;
            y && d(t, n)
        }
        function f(t) {
            return t >= 55296 && t <= 56319
        }
        function p(t) {
            return t >= 56320 && t <= 57343
        }
        function g(t) {
            return p(t.charCodeAt(0))
        }
        function m(t) {
            return f(t.charCodeAt(t.length - 1))
        }
        function b(t, n, s, r) {
            return m(t) || g(r) ? null : function (t) {
                for (var e = [], n = 0; n < t.length; n++)
                    t[n][1].length > 0 && e.push(t[n]);
                return e
            }([[0, t], [e, n], [1, s], [0, r]])
        }
        function y(t, e, s, r) {
            return n(t, e, s, r, !0)
        }
        y.INSERT = 1,
            y.DELETE = e,
            y.EQUAL = 0,
            t.exports = y
    }
    ,
    7193: (t, e, n) => {
        t = n.nmd(t);
        var s = "__lodash_hash_undefined__"
            , r = 9007199254740991
            , i = "[object Arguments]"
            , o = "[object Boolean]"
            , l = "[object Date]"
            , a = "[object Function]"
            , c = "[object GeneratorFunction]"
            , u = "[object Map]"
            , h = "[object Number]"
            , d = "[object Object]"
            , f = "[object Promise]"
            , p = "[object RegExp]"
            , g = "[object Set]"
            , m = "[object String]"
            , b = "[object Symbol]"
            , y = "[object WeakMap]"
            , v = "[object ArrayBuffer]"
            , x = "[object DataView]"
            , N = "[object Float32Array]"
            , E = "[object Float64Array]"
            , w = "[object Int8Array]"
            , A = "[object Int16Array]"
            , q = "[object Int32Array]"
            , k = "[object Uint8Array]"
            , _ = "[object Uint8ClampedArray]"
            , L = "[object Uint16Array]"
            , O = "[object Uint32Array]"
            , S = /\w*$/
            , T = /^\[object .+?Constructor\]$/
            , j = /^(?:0|[1-9]\d*)$/
            , C = {};
        C[i] = C["[object Array]"] = C[v] = C[x] = C[o] = C[l] = C[N] = C[E] = C[w] = C[A] = C[q] = C[u] = C[h] = C[d] = C[p] = C[g] = C[m] = C[b] = C[k] = C[_] = C[L] = C[O] = !0,
            C["[object Error]"] = C[a] = C[y] = !1;
        var R = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
            , I = "object" == typeof self && self && self.Object === Object && self
            , M = R || I || Function("return this")()
            , B = e && !e.nodeType && e
            , D = B && t && !t.nodeType && t
            , U = D && D.exports === B;
        function P(t, e) {
            return t.set(e[0], e[1]),
                t
        }
        function z(t, e) {
            return t.add(e),
                t
        }
        function F(t, e, n, s) {
            var r = -1
                , i = t ? t.length : 0;
            for (s && i && (n = t[++r]); ++r < i;)
                n = e(n, t[r], r, t);
            return n
        }
        function H(t) {
            var e = !1;
            if (null != t && "function" != typeof t.toString)
                try {
                    e = !!(t + "")
                } catch (t) { }
            return e
        }
        function $(t) {
            var e = -1
                , n = Array(t.size);
            return t.forEach((function (t, s) {
                n[++e] = [s, t]
            }
            )),
                n
        }
        function V(t, e) {
            return function (n) {
                return t(e(n))
            }
        }
        function K(t) {
            var e = -1
                , n = Array(t.size);
            return t.forEach((function (t) {
                n[++e] = t
            }
            )),
                n
        }
        var W, Z = Array.prototype, G = Function.prototype, X = Object.prototype, Y = M["__core-js_shared__"], Q = (W = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "")) ? "Symbol(src)_1." + W : "", J = G.toString, tt = X.hasOwnProperty, et = X.toString, nt = RegExp("^" + J.call(tt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), st = U ? M.Buffer : void 0, rt = M.Symbol, it = M.Uint8Array, ot = V(Object.getPrototypeOf, Object), lt = Object.create, at = X.propertyIsEnumerable, ct = Z.splice, ut = Object.getOwnPropertySymbols, ht = st ? st.isBuffer : void 0, dt = V(Object.keys, Object), ft = Dt(M, "DataView"), pt = Dt(M, "Map"), gt = Dt(M, "Promise"), mt = Dt(M, "Set"), bt = Dt(M, "WeakMap"), yt = Dt(Object, "create"), vt = Ht(ft), xt = Ht(pt), Nt = Ht(gt), Et = Ht(mt), wt = Ht(bt), At = rt ? rt.prototype : void 0, qt = At ? At.valueOf : void 0;
        function kt(t) {
            var e = -1
                , n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var s = t[e];
                this.set(s[0], s[1])
            }
        }
        function _t(t) {
            var e = -1
                , n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var s = t[e];
                this.set(s[0], s[1])
            }
        }
        function Lt(t) {
            var e = -1
                , n = t ? t.length : 0;
            for (this.clear(); ++e < n;) {
                var s = t[e];
                this.set(s[0], s[1])
            }
        }
        function Ot(t) {
            this.__data__ = new _t(t)
        }
        function St(t, e) {
            var n = Vt(t) || function (t) {
                return function (t) {
                    return function (t) {
                        return !!t && "object" == typeof t
                    }(t) && Kt(t)
                }(t) && tt.call(t, "callee") && (!at.call(t, "callee") || et.call(t) == i)
            }(t) ? function (t, e) {
                for (var n = -1, s = Array(t); ++n < t;)
                    s[n] = e(n);
                return s
            }(t.length, String) : []
                , s = n.length
                , r = !!s;
            for (var o in t)
                !e && !tt.call(t, o) || r && ("length" == o || zt(o, s)) || n.push(o);
            return n
        }
        function Tt(t, e, n) {
            var s = t[e];
            tt.call(t, e) && $t(s, n) && (void 0 !== n || e in t) || (t[e] = n)
        }
        function jt(t, e) {
            for (var n = t.length; n--;)
                if ($t(t[n][0], e))
                    return n;
            return -1
        }
        function Ct(t, e, n, s, r, f, y) {
            var T;
            if (s && (T = f ? s(t, r, f, y) : s(t)),
                void 0 !== T)
                return T;
            if (!Gt(t))
                return t;
            var j = Vt(t);
            if (j) {
                if (T = function (t) {
                    var e = t.length
                        , n = t.constructor(e);
                    e && "string" == typeof t[0] && tt.call(t, "index") && (n.index = t.index,
                        n.input = t.input);
                    return n
                }(t),
                    !e)
                    return function (t, e) {
                        var n = -1
                            , s = t.length;
                        e || (e = Array(s));
                        for (; ++n < s;)
                            e[n] = t[n];
                        return e
                    }(t, T)
            } else {
                var R = Pt(t)
                    , I = R == a || R == c;
                if (Wt(t))
                    return function (t, e) {
                        if (e)
                            return t.slice();
                        var n = new t.constructor(t.length);
                        return t.copy(n),
                            n
                    }(t, e);
                if (R == d || R == i || I && !f) {
                    if (H(t))
                        return f ? t : {};
                    if (T = function (t) {
                        return "function" != typeof t.constructor || Ft(t) ? {} : (e = ot(t),
                            Gt(e) ? lt(e) : {});
                        var e
                    }(I ? {} : t),
                        !e)
                        return function (t, e) {
                            return Mt(t, Ut(t), e)
                        }(t, function (t, e) {
                            return t && Mt(e, Xt(e), t)
                        }(T, t))
                } else {
                    if (!C[R])
                        return f ? t : {};
                    T = function (t, e, n, s) {
                        var r = t.constructor;
                        switch (e) {
                            case v:
                                return It(t);
                            case o:
                            case l:
                                return new r(+t);
                            case x:
                                return function (t, e) {
                                    var n = e ? It(t.buffer) : t.buffer;
                                    return new t.constructor(n, t.byteOffset, t.byteLength)
                                }(t, s);
                            case N:
                            case E:
                            case w:
                            case A:
                            case q:
                            case k:
                            case _:
                            case L:
                            case O:
                                return function (t, e) {
                                    var n = e ? It(t.buffer) : t.buffer;
                                    return new t.constructor(n, t.byteOffset, t.length)
                                }(t, s);
                            case u:
                                return function (t, e, n) {
                                    var s = e ? n($(t), !0) : $(t);
                                    return F(s, P, new t.constructor)
                                }(t, s, n);
                            case h:
                            case m:
                                return new r(t);
                            case p:
                                return function (t) {
                                    var e = new t.constructor(t.source, S.exec(t));
                                    return e.lastIndex = t.lastIndex,
                                        e
                                }(t);
                            case g:
                                return function (t, e, n) {
                                    var s = e ? n(K(t), !0) : K(t);
                                    return F(s, z, new t.constructor)
                                }(t, s, n);
                            case b:
                                return i = t,
                                    qt ? Object(qt.call(i)) : {}
                        }
                        var i
                    }(t, R, Ct, e)
                }
            }
            y || (y = new Ot);
            var M = y.get(t);
            if (M)
                return M;
            if (y.set(t, T),
                !j)
                var B = n ? function (t) {
                    return function (t, e, n) {
                        var s = e(t);
                        return Vt(t) ? s : function (t, e) {
                            for (var n = -1, s = e.length, r = t.length; ++n < s;)
                                t[r + n] = e[n];
                            return t
                        }(s, n(t))
                    }(t, Xt, Ut)
                }(t) : Xt(t);
            return function (t, e) {
                for (var n = -1, s = t ? t.length : 0; ++n < s && !1 !== e(t[n], n, t);)
                    ;
            }(B || t, (function (r, i) {
                B && (r = t[i = r]),
                    Tt(T, i, Ct(r, e, n, s, i, t, y))
            }
            )),
                T
        }
        function Rt(t) {
            return !(!Gt(t) || (e = t,
                Q && Q in e)) && (Zt(t) || H(t) ? nt : T).test(Ht(t));
            var e
        }
        function It(t) {
            var e = new t.constructor(t.byteLength);
            return new it(e).set(new it(t)),
                e
        }
        function Mt(t, e, n, s) {
            n || (n = {});
            for (var r = -1, i = e.length; ++r < i;) {
                var o = e[r]
                    , l = s ? s(n[o], t[o], o, n, t) : void 0;
                Tt(n, o, void 0 === l ? t[o] : l)
            }
            return n
        }
        function Bt(t, e) {
            var n, s, r = t.__data__;
            return ("string" == (s = typeof (n = e)) || "number" == s || "symbol" == s || "boolean" == s ? "__proto__" !== n : null === n) ? r["string" == typeof e ? "string" : "hash"] : r.map
        }
        function Dt(t, e) {
            var n = function (t, e) {
                return null == t ? void 0 : t[e]
            }(t, e);
            return Rt(n) ? n : void 0
        }
        kt.prototype.clear = function () {
            this.__data__ = yt ? yt(null) : {}
        }
            ,
            kt.prototype.delete = function (t) {
                return this.has(t) && delete this.__data__[t]
            }
            ,
            kt.prototype.get = function (t) {
                var e = this.__data__;
                if (yt) {
                    var n = e[t];
                    return n === s ? void 0 : n
                }
                return tt.call(e, t) ? e[t] : void 0
            }
            ,
            kt.prototype.has = function (t) {
                var e = this.__data__;
                return yt ? void 0 !== e[t] : tt.call(e, t)
            }
            ,
            kt.prototype.set = function (t, e) {
                return this.__data__[t] = yt && void 0 === e ? s : e,
                    this
            }
            ,
            _t.prototype.clear = function () {
                this.__data__ = []
            }
            ,
            _t.prototype.delete = function (t) {
                var e = this.__data__
                    , n = jt(e, t);
                return !(n < 0) && (n == e.length - 1 ? e.pop() : ct.call(e, n, 1),
                    !0)
            }
            ,
            _t.prototype.get = function (t) {
                var e = this.__data__
                    , n = jt(e, t);
                return n < 0 ? void 0 : e[n][1]
            }
            ,
            _t.prototype.has = function (t) {
                return jt(this.__data__, t) > -1
            }
            ,
            _t.prototype.set = function (t, e) {
                var n = this.__data__
                    , s = jt(n, t);
                return s < 0 ? n.push([t, e]) : n[s][1] = e,
                    this
            }
            ,
            Lt.prototype.clear = function () {
                this.__data__ = {
                    hash: new kt,
                    map: new (pt || _t),
                    string: new kt
                }
            }
            ,
            Lt.prototype.delete = function (t) {
                return Bt(this, t).delete(t)
            }
            ,
            Lt.prototype.get = function (t) {
                return Bt(this, t).get(t)
            }
            ,
            Lt.prototype.has = function (t) {
                return Bt(this, t).has(t)
            }
            ,
            Lt.prototype.set = function (t, e) {
                return Bt(this, t).set(t, e),
                    this
            }
            ,
            Ot.prototype.clear = function () {
                this.__data__ = new _t
            }
            ,
            Ot.prototype.delete = function (t) {
                return this.__data__.delete(t)
            }
            ,
            Ot.prototype.get = function (t) {
                return this.__data__.get(t)
            }
            ,
            Ot.prototype.has = function (t) {
                return this.__data__.has(t)
            }
            ,
            Ot.prototype.set = function (t, e) {
                var n = this.__data__;
                if (n instanceof _t) {
                    var s = n.__data__;
                    if (!pt || s.length < 199)
                        return s.push([t, e]),
                            this;
                    n = this.__data__ = new Lt(s)
                }
                return n.set(t, e),
                    this
            }
            ;
        var Ut = ut ? V(ut, Object) : function () {
            return []
        }
            , Pt = function (t) {
                return et.call(t)
            };
        function zt(t, e) {
            return !!(e = null == e ? r : e) && ("number" == typeof t || j.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
        function Ft(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || X)
        }
        function Ht(t) {
            if (null != t) {
                try {
                    return J.call(t)
                } catch (t) { }
                try {
                    return t + ""
                } catch (t) { }
            }
            return ""
        }
        function $t(t, e) {
            return t === e || t != t && e != e
        }
        (ft && Pt(new ft(new ArrayBuffer(1))) != x || pt && Pt(new pt) != u || gt && Pt(gt.resolve()) != f || mt && Pt(new mt) != g || bt && Pt(new bt) != y) && (Pt = function (t) {
            var e = et.call(t)
                , n = e == d ? t.constructor : void 0
                , s = n ? Ht(n) : void 0;
            if (s)
                switch (s) {
                    case vt:
                        return x;
                    case xt:
                        return u;
                    case Nt:
                        return f;
                    case Et:
                        return g;
                    case wt:
                        return y
                }
            return e
        }
        );
        var Vt = Array.isArray;
        function Kt(t) {
            return null != t && function (t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
            }(t.length) && !Zt(t)
        }
        var Wt = ht || function () {
            return !1
        }
            ;
        function Zt(t) {
            var e = Gt(t) ? et.call(t) : "";
            return e == a || e == c
        }
        function Gt(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        function Xt(t) {
            return Kt(t) ? St(t) : function (t) {
                if (!Ft(t))
                    return dt(t);
                var e = [];
                for (var n in Object(t))
                    tt.call(t, n) && "constructor" != n && e.push(n);
                return e
            }(t)
        }
        t.exports = function (t) {
            return Ct(t, !0, !0)
        }
    }
    ,
    8142: (t, e, n) => {
        t = n.nmd(t);
        var s = "__lodash_hash_undefined__"
            , r = 9007199254740991
            , i = "[object Arguments]"
            , o = "[object Array]"
            , l = "[object Boolean]"
            , a = "[object Date]"
            , c = "[object Error]"
            , u = "[object Function]"
            , h = "[object Map]"
            , d = "[object Number]"
            , f = "[object Object]"
            , p = "[object Promise]"
            , g = "[object RegExp]"
            , m = "[object Set]"
            , b = "[object String]"
            , y = "[object Symbol]"
            , v = "[object WeakMap]"
            , x = "[object ArrayBuffer]"
            , N = "[object DataView]"
            , E = /^\[object .+?Constructor\]$/
            , w = /^(?:0|[1-9]\d*)$/
            , A = {};
        A["[object Float32Array]"] = A["[object Float64Array]"] = A["[object Int8Array]"] = A["[object Int16Array]"] = A["[object Int32Array]"] = A["[object Uint8Array]"] = A["[object Uint8ClampedArray]"] = A["[object Uint16Array]"] = A["[object Uint32Array]"] = !0,
            A[i] = A[o] = A[x] = A[l] = A[N] = A[a] = A[c] = A[u] = A[h] = A[d] = A[f] = A[g] = A[m] = A[b] = A[v] = !1;
        var q = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
            , k = "object" == typeof self && self && self.Object === Object && self
            , _ = q || k || Function("return this")()
            , L = e && !e.nodeType && e
            , O = L && t && !t.nodeType && t
            , S = O && O.exports === L
            , T = S && q.process
            , j = function () {
                try {
                    return T && T.binding && T.binding("util")
                } catch (t) { }
            }()
            , C = j && j.isTypedArray;
        function R(t, e) {
            for (var n = -1, s = null == t ? 0 : t.length; ++n < s;)
                if (e(t[n], n, t))
                    return !0;
            return !1
        }
        function I(t) {
            var e = -1
                , n = Array(t.size);
            return t.forEach((function (t, s) {
                n[++e] = [s, t]
            }
            )),
                n
        }
        function M(t) {
            var e = -1
                , n = Array(t.size);
            return t.forEach((function (t) {
                n[++e] = t
            }
            )),
                n
        }
        var B, D, U, P = Array.prototype, z = Function.prototype, F = Object.prototype, H = _["__core-js_shared__"], $ = z.toString, V = F.hasOwnProperty, K = (B = /[^.]+$/.exec(H && H.keys && H.keys.IE_PROTO || "")) ? "Symbol(src)_1." + B : "", W = F.toString, Z = RegExp("^" + $.call(V).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), G = S ? _.Buffer : void 0, X = _.Symbol, Y = _.Uint8Array, Q = F.propertyIsEnumerable, J = P.splice, tt = X ? X.toStringTag : void 0, et = Object.getOwnPropertySymbols, nt = G ? G.isBuffer : void 0, st = (D = Object.keys,
            U = Object,
            function (t) {
                return D(U(t))
            }
        ), rt = jt(_, "DataView"), it = jt(_, "Map"), ot = jt(_, "Promise"), lt = jt(_, "Set"), at = jt(_, "WeakMap"), ct = jt(Object, "create"), ut = Mt(rt), ht = Mt(it), dt = Mt(ot), ft = Mt(lt), pt = Mt(at), gt = X ? X.prototype : void 0, mt = gt ? gt.valueOf : void 0;
        function bt(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var s = t[e];
                this.set(s[0], s[1])
            }
        }
        function yt(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var s = t[e];
                this.set(s[0], s[1])
            }
        }
        function vt(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var s = t[e];
                this.set(s[0], s[1])
            }
        }
        function xt(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.__data__ = new vt; ++e < n;)
                this.add(t[e])
        }
        function Nt(t) {
            var e = this.__data__ = new yt(t);
            this.size = e.size
        }
        function Et(t, e) {
            var n = Ut(t)
                , s = !n && Dt(t)
                , r = !n && !s && Pt(t)
                , i = !n && !s && !r && Vt(t)
                , o = n || s || r || i
                , l = o ? function (t, e) {
                    for (var n = -1, s = Array(t); ++n < t;)
                        s[n] = e(n);
                    return s
                }(t.length, String) : []
                , a = l.length;
            for (var c in t)
                !e && !V.call(t, c) || o && ("length" == c || r && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || It(c, a)) || l.push(c);
            return l
        }
        function wt(t, e) {
            for (var n = t.length; n--;)
                if (Bt(t[n][0], e))
                    return n;
            return -1
        }
        function At(t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : tt && tt in Object(t) ? function (t) {
                var e = V.call(t, tt)
                    , n = t[tt];
                try {
                    t[tt] = void 0;
                    var s = !0
                } catch (t) { }
                var r = W.call(t);
                s && (e ? t[tt] = n : delete t[tt]);
                return r
            }(t) : function (t) {
                return W.call(t)
            }(t)
        }
        function qt(t) {
            return $t(t) && At(t) == i
        }
        function kt(t, e, n, s, r) {
            return t === e || (null == t || null == e || !$t(t) && !$t(e) ? t != t && e != e : function (t, e, n, s, r, u) {
                var p = Ut(t)
                    , v = Ut(e)
                    , E = p ? o : Rt(t)
                    , w = v ? o : Rt(e)
                    , A = (E = E == i ? f : E) == f
                    , q = (w = w == i ? f : w) == f
                    , k = E == w;
                if (k && Pt(t)) {
                    if (!Pt(e))
                        return !1;
                    p = !0,
                        A = !1
                }
                if (k && !A)
                    return u || (u = new Nt),
                        p || Vt(t) ? Ot(t, e, n, s, r, u) : function (t, e, n, s, r, i, o) {
                            switch (n) {
                                case N:
                                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                                        return !1;
                                    t = t.buffer,
                                        e = e.buffer;
                                case x:
                                    return !(t.byteLength != e.byteLength || !i(new Y(t), new Y(e)));
                                case l:
                                case a:
                                case d:
                                    return Bt(+t, +e);
                                case c:
                                    return t.name == e.name && t.message == e.message;
                                case g:
                                case b:
                                    return t == e + "";
                                case h:
                                    var u = I;
                                case m:
                                    var f = 1 & s;
                                    if (u || (u = M),
                                        t.size != e.size && !f)
                                        return !1;
                                    var p = o.get(t);
                                    if (p)
                                        return p == e;
                                    s |= 2,
                                        o.set(t, e);
                                    var v = Ot(u(t), u(e), s, r, i, o);
                                    return o.delete(t),
                                        v;
                                case y:
                                    if (mt)
                                        return mt.call(t) == mt.call(e)
                            }
                            return !1
                        }(t, e, E, n, s, r, u);
                if (!(1 & n)) {
                    var _ = A && V.call(t, "__wrapped__")
                        , L = q && V.call(e, "__wrapped__");
                    if (_ || L) {
                        var O = _ ? t.value() : t
                            , S = L ? e.value() : e;
                        return u || (u = new Nt),
                            r(O, S, n, s, u)
                    }
                }
                if (!k)
                    return !1;
                return u || (u = new Nt),
                    function (t, e, n, s, r, i) {
                        var o = 1 & n
                            , l = St(t)
                            , a = l.length
                            , c = St(e)
                            , u = c.length;
                        if (a != u && !o)
                            return !1;
                        var h = a;
                        for (; h--;) {
                            var d = l[h];
                            if (!(o ? d in e : V.call(e, d)))
                                return !1
                        }
                        var f = i.get(t);
                        if (f && i.get(e))
                            return f == e;
                        var p = !0;
                        i.set(t, e),
                            i.set(e, t);
                        var g = o;
                        for (; ++h < a;) {
                            var m = t[d = l[h]]
                                , b = e[d];
                            if (s)
                                var y = o ? s(b, m, d, e, t, i) : s(m, b, d, t, e, i);
                            if (!(void 0 === y ? m === b || r(m, b, n, s, i) : y)) {
                                p = !1;
                                break
                            }
                            g || (g = "constructor" == d)
                        }
                        if (p && !g) {
                            var v = t.constructor
                                , x = e.constructor;
                            v == x || !("constructor" in t) || !("constructor" in e) || "function" == typeof v && v instanceof v && "function" == typeof x && x instanceof x || (p = !1)
                        }
                        return i.delete(t),
                            i.delete(e),
                            p
                    }(t, e, n, s, r, u)
            }(t, e, n, s, kt, r))
        }
        function _t(t) {
            return !(!Ht(t) || function (t) {
                return !!K && K in t
            }(t)) && (zt(t) ? Z : E).test(Mt(t))
        }
        function Lt(t) {
            if (n = (e = t) && e.constructor,
                s = "function" == typeof n && n.prototype || F,
                e !== s)
                return st(t);
            var e, n, s, r = [];
            for (var i in Object(t))
                V.call(t, i) && "constructor" != i && r.push(i);
            return r
        }
        function Ot(t, e, n, s, r, i) {
            var o = 1 & n
                , l = t.length
                , a = e.length;
            if (l != a && !(o && a > l))
                return !1;
            var c = i.get(t);
            if (c && i.get(e))
                return c == e;
            var u = -1
                , h = !0
                , d = 2 & n ? new xt : void 0;
            for (i.set(t, e),
                i.set(e, t); ++u < l;) {
                var f = t[u]
                    , p = e[u];
                if (s)
                    var g = o ? s(p, f, u, e, t, i) : s(f, p, u, t, e, i);
                if (void 0 !== g) {
                    if (g)
                        continue;
                    h = !1;
                    break
                }
                if (d) {
                    if (!R(e, (function (t, e) {
                        if (o = e,
                            !d.has(o) && (f === t || r(f, t, n, s, i)))
                            return d.push(e);
                        var o
                    }
                    ))) {
                        h = !1;
                        break
                    }
                } else if (f !== p && !r(f, p, n, s, i)) {
                    h = !1;
                    break
                }
            }
            return i.delete(t),
                i.delete(e),
                h
        }
        function St(t) {
            return function (t, e, n) {
                var s = e(t);
                return Ut(t) ? s : function (t, e) {
                    for (var n = -1, s = e.length, r = t.length; ++n < s;)
                        t[r + n] = e[n];
                    return t
                }(s, n(t))
            }(t, Kt, Ct)
        }
        function Tt(t, e) {
            var n, s, r = t.__data__;
            return ("string" == (s = typeof (n = e)) || "number" == s || "symbol" == s || "boolean" == s ? "__proto__" !== n : null === n) ? r["string" == typeof e ? "string" : "hash"] : r.map
        }
        function jt(t, e) {
            var n = function (t, e) {
                return null == t ? void 0 : t[e]
            }(t, e);
            return _t(n) ? n : void 0
        }
        bt.prototype.clear = function () {
            this.__data__ = ct ? ct(null) : {},
                this.size = 0
        }
            ,
            bt.prototype.delete = function (t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0,
                    e
            }
            ,
            bt.prototype.get = function (t) {
                var e = this.__data__;
                if (ct) {
                    var n = e[t];
                    return n === s ? void 0 : n
                }
                return V.call(e, t) ? e[t] : void 0
            }
            ,
            bt.prototype.has = function (t) {
                var e = this.__data__;
                return ct ? void 0 !== e[t] : V.call(e, t)
            }
            ,
            bt.prototype.set = function (t, e) {
                var n = this.__data__;
                return this.size += this.has(t) ? 0 : 1,
                    n[t] = ct && void 0 === e ? s : e,
                    this
            }
            ,
            yt.prototype.clear = function () {
                this.__data__ = [],
                    this.size = 0
            }
            ,
            yt.prototype.delete = function (t) {
                var e = this.__data__
                    , n = wt(e, t);
                return !(n < 0) && (n == e.length - 1 ? e.pop() : J.call(e, n, 1),
                    --this.size,
                    !0)
            }
            ,
            yt.prototype.get = function (t) {
                var e = this.__data__
                    , n = wt(e, t);
                return n < 0 ? void 0 : e[n][1]
            }
            ,
            yt.prototype.has = function (t) {
                return wt(this.__data__, t) > -1
            }
            ,
            yt.prototype.set = function (t, e) {
                var n = this.__data__
                    , s = wt(n, t);
                return s < 0 ? (++this.size,
                    n.push([t, e])) : n[s][1] = e,
                    this
            }
            ,
            vt.prototype.clear = function () {
                this.size = 0,
                    this.__data__ = {
                        hash: new bt,
                        map: new (it || yt),
                        string: new bt
                    }
            }
            ,
            vt.prototype.delete = function (t) {
                var e = Tt(this, t).delete(t);
                return this.size -= e ? 1 : 0,
                    e
            }
            ,
            vt.prototype.get = function (t) {
                return Tt(this, t).get(t)
            }
            ,
            vt.prototype.has = function (t) {
                return Tt(this, t).has(t)
            }
            ,
            vt.prototype.set = function (t, e) {
                var n = Tt(this, t)
                    , s = n.size;
                return n.set(t, e),
                    this.size += n.size == s ? 0 : 1,
                    this
            }
            ,
            xt.prototype.add = xt.prototype.push = function (t) {
                return this.__data__.set(t, s),
                    this
            }
            ,
            xt.prototype.has = function (t) {
                return this.__data__.has(t)
            }
            ,
            Nt.prototype.clear = function () {
                this.__data__ = new yt,
                    this.size = 0
            }
            ,
            Nt.prototype.delete = function (t) {
                var e = this.__data__
                    , n = e.delete(t);
                return this.size = e.size,
                    n
            }
            ,
            Nt.prototype.get = function (t) {
                return this.__data__.get(t)
            }
            ,
            Nt.prototype.has = function (t) {
                return this.__data__.has(t)
            }
            ,
            Nt.prototype.set = function (t, e) {
                var n = this.__data__;
                if (n instanceof yt) {
                    var s = n.__data__;
                    if (!it || s.length < 199)
                        return s.push([t, e]),
                            this.size = ++n.size,
                            this;
                    n = this.__data__ = new vt(s)
                }
                return n.set(t, e),
                    this.size = n.size,
                    this
            }
            ;
        var Ct = et ? function (t) {
            return null == t ? [] : (t = Object(t),
                function (t, e) {
                    for (var n = -1, s = null == t ? 0 : t.length, r = 0, i = []; ++n < s;) {
                        var o = t[n];
                        e(o, n, t) && (i[r++] = o)
                    }
                    return i
                }(et(t), (function (e) {
                    return Q.call(t, e)
                }
                )))
        }
            : function () {
                return []
            }
            , Rt = At;
        function It(t, e) {
            return !!(e = null == e ? r : e) && ("number" == typeof t || w.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
        function Mt(t) {
            if (null != t) {
                try {
                    return $.call(t)
                } catch (t) { }
                try {
                    return t + ""
                } catch (t) { }
            }
            return ""
        }
        function Bt(t, e) {
            return t === e || t != t && e != e
        }
        (rt && Rt(new rt(new ArrayBuffer(1))) != N || it && Rt(new it) != h || ot && Rt(ot.resolve()) != p || lt && Rt(new lt) != m || at && Rt(new at) != v) && (Rt = function (t) {
            var e = At(t)
                , n = e == f ? t.constructor : void 0
                , s = n ? Mt(n) : "";
            if (s)
                switch (s) {
                    case ut:
                        return N;
                    case ht:
                        return h;
                    case dt:
                        return p;
                    case ft:
                        return m;
                    case pt:
                        return v
                }
            return e
        }
        );
        var Dt = qt(function () {
            return arguments
        }()) ? qt : function (t) {
            return $t(t) && V.call(t, "callee") && !Q.call(t, "callee")
        }
            , Ut = Array.isArray;
        var Pt = nt || function () {
            return !1
        }
            ;
        function zt(t) {
            if (!Ht(t))
                return !1;
            var e = At(t);
            return e == u || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
        }
        function Ft(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
        }
        function Ht(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
        function $t(t) {
            return null != t && "object" == typeof t
        }
        var Vt = C ? function (t) {
            return function (e) {
                return t(e)
            }
        }(C) : function (t) {
            return $t(t) && Ft(t.length) && !!A[At(t)]
        }
            ;
        function Kt(t) {
            return null != (e = t) && Ft(e.length) && !zt(e) ? Et(t) : Lt(t);
            var e
        }
        t.exports = function (t, e) {
            return kt(t, e)
        }
    }
    ,
    9106: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const s = n(7193)
            , r = n(8142);
        var i;
        !function (t) {
            t.compose = function (t = {}, e = {}, n = !1) {
                "object" != typeof t && (t = {}),
                    "object" != typeof e && (e = {});
                let r = s(e);
                n || (r = Object.keys(r).reduce(((t, e) => (null != r[e] && (t[e] = r[e]),
                    t)), {}));
                for (const n in t)
                    void 0 !== t[n] && void 0 === e[n] && (r[n] = t[n]);
                return Object.keys(r).length > 0 ? r : void 0
            }
                ,
                t.diff = function (t = {}, e = {}) {
                    "object" != typeof t && (t = {}),
                        "object" != typeof e && (e = {});
                    const n = Object.keys(t).concat(Object.keys(e)).reduce(((n, s) => (r(t[s], e[s]) || (n[s] = void 0 === e[s] ? null : e[s]),
                        n)), {});
                    return Object.keys(n).length > 0 ? n : void 0
                }
                ,
                t.invert = function (t = {}, e = {}) {
                    t = t || {};
                    const n = Object.keys(e).reduce(((n, s) => (e[s] !== t[s] && void 0 !== t[s] && (n[s] = e[s]),
                        n)), {});
                    return Object.keys(t).reduce(((n, s) => (t[s] !== e[s] && void 0 === e[s] && (n[s] = null),
                        n)), n)
                }
                ,
                t.transform = function (t, e, n = !1) {
                    if ("object" != typeof t)
                        return e;
                    if ("object" != typeof e)
                        return;
                    if (!n)
                        return e;
                    const s = Object.keys(e).reduce(((n, s) => (void 0 === t[s] && (n[s] = e[s]),
                        n)), {});
                    return Object.keys(s).length > 0 ? s : void 0
                }
        }(i || (i = {})),
            e.default = i
    }
    ,
    2660: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.AttributeMap = e.OpIterator = e.Op = void 0;
        const s = n(5606)
            , r = n(7193)
            , i = n(8142)
            , o = n(9106);
        e.AttributeMap = o.default;
        const l = n(5759);
        e.Op = l.default;
        const a = n(8317);
        e.OpIterator = a.default;
        const c = String.fromCharCode(0)
            , u = (t, e) => {
                if ("object" != typeof t || null === t)
                    throw new Error("cannot retain a " + typeof t);
                if ("object" != typeof e || null === e)
                    throw new Error("cannot retain a " + typeof e);
                const n = Object.keys(t)[0];
                if (!n || n !== Object.keys(e)[0])
                    throw new Error(`embed types not matched: ${n} != ${Object.keys(e)[0]}`);
                return [n, t[n], e[n]]
            }
            ;
        class h {
            constructor(t) {
                Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = []
            }
            static registerEmbed(t, e) {
                this.handlers[t] = e
            }
            static unregisterEmbed(t) {
                delete this.handlers[t]
            }
            static getHandler(t) {
                const e = this.handlers[t];
                if (!e)
                    throw new Error(`no handlers for embed type "${t}"`);
                return e
            }
            insert(t, e) {
                const n = {};
                return "string" == typeof t && 0 === t.length ? this : (n.insert = t,
                    null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e),
                    this.push(n))
            }
            delete(t) {
                return t <= 0 ? this : this.push({
                    delete: t
                })
            }
            retain(t, e) {
                if ("number" == typeof t && t <= 0)
                    return this;
                const n = {
                    retain: t
                };
                return null != e && "object" == typeof e && Object.keys(e).length > 0 && (n.attributes = e),
                    this.push(n)
            }
            push(t) {
                let e = this.ops.length
                    , n = this.ops[e - 1];
                if (t = r(t),
                    "object" == typeof n) {
                    if ("number" == typeof t.delete && "number" == typeof n.delete)
                        return this.ops[e - 1] = {
                            delete: n.delete + t.delete
                        },
                            this;
                    if ("number" == typeof n.delete && null != t.insert && (e -= 1,
                        n = this.ops[e - 1],
                        "object" != typeof n))
                        return this.ops.unshift(t),
                            this;
                    if (i(t.attributes, n.attributes)) {
                        if ("string" == typeof t.insert && "string" == typeof n.insert)
                            return this.ops[e - 1] = {
                                insert: n.insert + t.insert
                            },
                                "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes),
                                this;
                        if ("number" == typeof t.retain && "number" == typeof n.retain)
                            return this.ops[e - 1] = {
                                retain: n.retain + t.retain
                            },
                                "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes),
                                this
                    }
                }
                return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t),
                    this
            }
            chop() {
                const t = this.ops[this.ops.length - 1];
                return t && "number" == typeof t.retain && !t.attributes && this.ops.pop(),
                    this
            }
            filter(t) {
                return this.ops.filter(t)
            }
            forEach(t) {
                this.ops.forEach(t)
            }
            map(t) {
                return this.ops.map(t)
            }
            partition(t) {
                const e = []
                    , n = [];
                return this.forEach((s => {
                    (t(s) ? e : n).push(s)
                }
                )),
                    [e, n]
            }
            reduce(t, e) {
                return this.ops.reduce(t, e)
            }
            changeLength() {
                return this.reduce(((t, e) => e.insert ? t + l.default.length(e) : e.delete ? t - e.delete : t), 0)
            }
            length() {
                return this.reduce(((t, e) => t + l.default.length(e)), 0)
            }
            slice(t = 0, e = 1 / 0) {
                const n = []
                    , s = new a.default(this.ops);
                let r = 0;
                for (; r < e && s.hasNext();) {
                    let i;
                    r < t ? i = s.next(t - r) : (i = s.next(e - r),
                        n.push(i)),
                        r += l.default.length(i)
                }
                return new h(n)
            }
            compose(t) {
                const e = new a.default(this.ops)
                    , n = new a.default(t.ops)
                    , s = []
                    , r = n.peek();
                if (null != r && "number" == typeof r.retain && null == r.attributes) {
                    let t = r.retain;
                    for (; "insert" === e.peekType() && e.peekLength() <= t;)
                        t -= e.peekLength(),
                            s.push(e.next());
                    r.retain - t > 0 && n.next(r.retain - t)
                }
                const l = new h(s);
                for (; e.hasNext() || n.hasNext();)
                    if ("insert" === n.peekType())
                        l.push(n.next());
                    else if ("delete" === e.peekType())
                        l.push(e.next());
                    else {
                        const t = Math.min(e.peekLength(), n.peekLength())
                            , s = e.next(t)
                            , r = n.next(t);
                        if (r.retain) {
                            const a = {};
                            if ("number" == typeof s.retain)
                                a.retain = "number" == typeof r.retain ? t : r.retain;
                            else if ("number" == typeof r.retain)
                                null == s.retain ? a.insert = s.insert : a.retain = s.retain;
                            else {
                                const t = null == s.retain ? "insert" : "retain"
                                    , [e, n, i] = u(s[t], r.retain)
                                    , o = h.getHandler(e);
                                a[t] = {
                                    [e]: o.compose(n, i, "retain" === t)
                                }
                            }
                            const c = o.default.compose(s.attributes, r.attributes, "number" == typeof s.retain);
                            if (c && (a.attributes = c),
                                l.push(a),
                                !n.hasNext() && i(l.ops[l.ops.length - 1], a)) {
                                const t = new h(e.rest());
                                return l.concat(t).chop()
                            }
                        } else
                            "number" == typeof r.delete && ("number" == typeof s.retain || "object" == typeof s.retain && null !== s.retain) && l.push(r)
                    }
                return l.chop()
            }
            concat(t) {
                const e = new h(this.ops.slice());
                return t.ops.length > 0 && (e.push(t.ops[0]),
                    e.ops = e.ops.concat(t.ops.slice(1))),
                    e
            }
            diff(t, e) {
                if (this.ops === t.ops)
                    return new h;
                const n = [this, t].map((e => e.map((n => {
                    if (null != n.insert)
                        return "string" == typeof n.insert ? n.insert : c;
                    throw new Error("diff() called " + (e === t ? "on" : "with") + " non-document")
                }
                )).join("")))
                    , r = new h
                    , l = s(n[0], n[1], e, !0)
                    , u = new a.default(this.ops)
                    , d = new a.default(t.ops);
                return l.forEach((t => {
                    let e = t[1].length;
                    for (; e > 0;) {
                        let n = 0;
                        switch (t[0]) {
                            case s.INSERT:
                                n = Math.min(d.peekLength(), e),
                                    r.push(d.next(n));
                                break;
                            case s.DELETE:
                                n = Math.min(e, u.peekLength()),
                                    u.next(n),
                                    r.delete(n);
                                break;
                            case s.EQUAL:
                                n = Math.min(u.peekLength(), d.peekLength(), e);
                                const t = u.next(n)
                                    , l = d.next(n);
                                i(t.insert, l.insert) ? r.retain(n, o.default.diff(t.attributes, l.attributes)) : r.push(l).delete(n)
                        }
                        e -= n
                    }
                }
                )),
                    r.chop()
            }
            eachLine(t, e = "\n") {
                const n = new a.default(this.ops);
                let s = new h
                    , r = 0;
                for (; n.hasNext();) {
                    if ("insert" !== n.peekType())
                        return;
                    const i = n.peek()
                        , o = l.default.length(i) - n.peekLength()
                        , a = "string" == typeof i.insert ? i.insert.indexOf(e, o) - o : -1;
                    if (a < 0)
                        s.push(n.next());
                    else if (a > 0)
                        s.push(n.next(a));
                    else {
                        if (!1 === t(s, n.next(1).attributes || {}, r))
                            return;
                        r += 1,
                            s = new h
                    }
                }
                s.length() > 0 && t(s, {}, r)
            }
            invert(t) {
                const e = new h;
                return this.reduce(((n, s) => {
                    if (s.insert)
                        e.delete(l.default.length(s));
                    else {
                        if ("number" == typeof s.retain && null == s.attributes)
                            return e.retain(s.retain),
                                n + s.retain;
                        if (s.delete || "number" == typeof s.retain) {
                            const r = s.delete || s.retain;
                            return t.slice(n, n + r).forEach((t => {
                                s.delete ? e.push(t) : s.retain && s.attributes && e.retain(l.default.length(t), o.default.invert(s.attributes, t.attributes))
                            }
                            )),
                                n + r
                        }
                        if ("object" == typeof s.retain && null !== s.retain) {
                            const r = t.slice(n, n + 1)
                                , i = new a.default(r.ops).next()
                                , [l, c, d] = u(s.retain, i.insert)
                                , f = h.getHandler(l);
                            return e.retain({
                                [l]: f.invert(c, d)
                            }, o.default.invert(s.attributes, i.attributes)),
                                n + 1
                        }
                    }
                    return n
                }
                ), 0),
                    e.chop()
            }
            transform(t, e = !1) {
                if (e = !!e,
                    "number" == typeof t)
                    return this.transformPosition(t, e);
                const n = t
                    , s = new a.default(this.ops)
                    , r = new a.default(n.ops)
                    , i = new h;
                for (; s.hasNext() || r.hasNext();)
                    if ("insert" !== s.peekType() || !e && "insert" === r.peekType())
                        if ("insert" === r.peekType())
                            i.push(r.next());
                        else {
                            const t = Math.min(s.peekLength(), r.peekLength())
                                , n = s.next(t)
                                , l = r.next(t);
                            if (n.delete)
                                continue;
                            if (l.delete)
                                i.push(l);
                            else {
                                const s = n.retain
                                    , r = l.retain;
                                let a = "object" == typeof r && null !== r ? r : t;
                                if ("object" == typeof s && null !== s && "object" == typeof r && null !== r) {
                                    const t = Object.keys(s)[0];
                                    if (t === Object.keys(r)[0]) {
                                        const n = h.getHandler(t);
                                        n && (a = {
                                            [t]: n.transform(s[t], r[t], e)
                                        })
                                    }
                                }
                                i.retain(a, o.default.transform(n.attributes, l.attributes, e))
                            }
                        }
                    else
                        i.retain(l.default.length(s.next()));
                return i.chop()
            }
            transformPosition(t, e = !1) {
                e = !!e;
                const n = new a.default(this.ops);
                let s = 0;
                for (; n.hasNext() && s <= t;) {
                    const r = n.peekLength()
                        , i = n.peekType();
                    n.next(),
                        "delete" !== i ? ("insert" === i && (s < t || !e) && (t += r),
                            s += r) : t -= Math.min(r, t - s)
                }
                return t
            }
        }
        h.Op = l.default,
            h.OpIterator = a.default,
            h.AttributeMap = o.default,
            h.handlers = {},
            e.default = h,
            t.exports = h,
            t.exports.default = h
    }
    ,
    5759: (t, e) => {
        "use strict";
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            function (t) {
                t.length = function (t) {
                    return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "object" == typeof t.retain && null !== t.retain ? 1 : "string" == typeof t.insert ? t.insert.length : 1
                }
            }(n || (n = {})),
            e.default = n
    }
    ,
    8317: (t, e, n) => {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        const s = n(5759);
        e.default = class {
            constructor(t) {
                this.ops = t,
                    this.index = 0,
                    this.offset = 0
            }
            hasNext() {
                return this.peekLength() < 1 / 0
            }
            next(t) {
                t || (t = 1 / 0);
                const e = this.ops[this.index];
                if (e) {
                    const n = this.offset
                        , r = s.default.length(e);
                    if (t >= r - n ? (t = r - n,
                        this.index += 1,
                        this.offset = 0) : this.offset += t,
                        "number" == typeof e.delete)
                        return {
                            delete: t
                        };
                    {
                        const s = {};
                        return e.attributes && (s.attributes = e.attributes),
                            "number" == typeof e.retain ? s.retain = t : "object" == typeof e.retain && null !== e.retain ? s.retain = e.retain : "string" == typeof e.insert ? s.insert = e.insert.substr(n, t) : s.insert = e.insert,
                            s
                    }
                }
                return {
                    retain: 1 / 0
                }
            }
            peek() {
                return this.ops[this.index]
            }
            peekLength() {
                return this.ops[this.index] ? s.default.length(this.ops[this.index]) - this.offset : 1 / 0
            }
            peekType() {
                const t = this.ops[this.index];
                return t ? "number" == typeof t.delete ? "delete" : "number" == typeof t.retain || "object" == typeof t.retain && null !== t.retain ? "retain" : "insert" : "retain"
            }
            rest() {
                if (this.hasNext()) {
                    if (0 === this.offset)
                        return this.ops.slice(this.index);
                    {
                        const t = this.offset
                            , e = this.index
                            , n = this.next()
                            , s = this.ops.slice(this.index);
                        return this.offset = t,
                            this.index = e,
                            [n].concat(s)
                    }
                }
                return []
            }
        }
    }
    ,
    2508: (t, e, n) => {
        "use strict";
        n.r(e),
            n.d(e, {
                AttributeMap: () => bn.AttributeMap,
                Delta: () => bn,
                Module: () => Nr,
                Op: () => bn.Op,
                OpIterator: () => bn.OpIterator,
                Parchment: () => s,
                Range: () => ur,
                default: () => el
            });
        var s = {};
        n.r(s),
            n.d(s, {
                Attributor: () => ze,
                AttributorStore: () => Ge,
                BlockBlot: () => an,
                ClassAttributor: () => Ke,
                ContainerBlot: () => un,
                EmbedBlot: () => hn,
                InlineBlot: () => on,
                LeafBlot: () => Je,
                ParentBlot: () => sn,
                Registry: () => $e,
                Scope: () => Pe,
                ScrollBlot: () => pn,
                StyleAttributor: () => Ze,
                TextBlot: () => mn
            });
        const r = function () {
            this.__data__ = [],
                this.size = 0
        };
        const i = function (t, e) {
            return t === e || t != t && e != e
        };
        const o = function (t, e) {
            for (var n = t.length; n--;)
                if (i(t[n][0], e))
                    return n;
            return -1
        };
        var l = Array.prototype.splice;
        const a = function (t) {
            var e = this.__data__
                , n = o(e, t);
            return !(n < 0) && (n == e.length - 1 ? e.pop() : l.call(e, n, 1),
                --this.size,
                !0)
        };
        const c = function (t) {
            var e = this.__data__
                , n = o(e, t);
            return n < 0 ? void 0 : e[n][1]
        };
        const u = function (t) {
            return o(this.__data__, t) > -1
        };
        const h = function (t, e) {
            var n = this.__data__
                , s = o(n, t);
            return s < 0 ? (++this.size,
                n.push([t, e])) : n[s][1] = e,
                this
        };
        function d(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var s = t[e];
                this.set(s[0], s[1])
            }
        }
        d.prototype.clear = r,
            d.prototype.delete = a,
            d.prototype.get = c,
            d.prototype.has = u,
            d.prototype.set = h;
        const f = d;
        const p = function () {
            this.__data__ = new f,
                this.size = 0
        };
        const g = function (t) {
            var e = this.__data__
                , n = e.delete(t);
            return this.size = e.size,
                n
        };
        const m = function (t) {
            return this.__data__.get(t)
        };
        const b = function (t) {
            return this.__data__.has(t)
        };
        const y = "object" == typeof global && global && global.Object === Object && global;
        var v = "object" == typeof self && self && self.Object === Object && self;
        const x = y || v || Function("return this")();
        const N = x.Symbol;
        var E = Object.prototype
            , w = E.hasOwnProperty
            , A = E.toString
            , q = N ? N.toStringTag : void 0;
        const k = function (t) {
            var e = w.call(t, q)
                , n = t[q];
            try {
                t[q] = void 0;
                var s = !0
            } catch (t) { }
            var r = A.call(t);
            return s && (e ? t[q] = n : delete t[q]),
                r
        };
        var _ = Object.prototype.toString;
        const L = function (t) {
            return _.call(t)
        };
        var O = N ? N.toStringTag : void 0;
        const S = function (t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : O && O in Object(t) ? k(t) : L(t)
        };
        const T = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        };
        const j = function (t) {
            if (!T(t))
                return !1;
            var e = S(t);
            return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
        };
        const C = x["__core-js_shared__"];
        var R, I = (R = /[^.]+$/.exec(C && C.keys && C.keys.IE_PROTO || "")) ? "Symbol(src)_1." + R : "";
        const M = function (t) {
            return !!I && I in t
        };
        var B = Function.prototype.toString;
        const D = function (t) {
            if (null != t) {
                try {
                    return B.call(t)
                } catch (t) { }
                try {
                    return t + ""
                } catch (t) { }
            }
            return ""
        };
        var U = /^\[object .+?Constructor\]$/
            , P = Function.prototype
            , z = Object.prototype
            , F = P.toString
            , H = z.hasOwnProperty
            , $ = RegExp("^" + F.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        const V = function (t) {
            return !(!T(t) || M(t)) && (j(t) ? $ : U).test(D(t))
        };
        const K = function (t, e) {
            return null == t ? void 0 : t[e]
        };
        const W = function (t, e) {
            var n = K(t, e);
            return V(n) ? n : void 0
        };
        const Z = W(x, "Map");
        const G = W(Object, "create");
        const X = function () {
            this.__data__ = G ? G(null) : {},
                this.size = 0
        };
        const Y = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0,
                e
        };
        var Q = Object.prototype.hasOwnProperty;
        const J = function (t) {
            var e = this.__data__;
            if (G) {
                var n = e[t];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return Q.call(e, t) ? e[t] : void 0
        };
        var tt = Object.prototype.hasOwnProperty;
        const et = function (t) {
            var e = this.__data__;
            return G ? void 0 !== e[t] : tt.call(e, t)
        };
        const nt = function (t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1,
                n[t] = G && void 0 === e ? "__lodash_hash_undefined__" : e,
                this
        };
        function st(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var s = t[e];
                this.set(s[0], s[1])
            }
        }
        st.prototype.clear = X,
            st.prototype.delete = Y,
            st.prototype.get = J,
            st.prototype.has = et,
            st.prototype.set = nt;
        const rt = st;
        const it = function () {
            this.size = 0,
                this.__data__ = {
                    hash: new rt,
                    map: new (Z || f),
                    string: new rt
                }
        };
        const ot = function (t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        };
        const lt = function (t, e) {
            var n = t.__data__;
            return ot(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        };
        const at = function (t) {
            var e = lt(this, t).delete(t);
            return this.size -= e ? 1 : 0,
                e
        };
        const ct = function (t) {
            return lt(this, t).get(t)
        };
        const ut = function (t) {
            return lt(this, t).has(t)
        };
        const ht = function (t, e) {
            var n = lt(this, t)
                , s = n.size;
            return n.set(t, e),
                this.size += n.size == s ? 0 : 1,
                this
        };
        function dt(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var s = t[e];
                this.set(s[0], s[1])
            }
        }
        dt.prototype.clear = it,
            dt.prototype.delete = at,
            dt.prototype.get = ct,
            dt.prototype.has = ut,
            dt.prototype.set = ht;
        const ft = dt;
        const pt = function (t, e) {
            var n = this.__data__;
            if (n instanceof f) {
                var s = n.__data__;
                if (!Z || s.length < 199)
                    return s.push([t, e]),
                        this.size = ++n.size,
                        this;
                n = this.__data__ = new ft(s)
            }
            return n.set(t, e),
                this.size = n.size,
                this
        };
        function gt(t) {
            var e = this.__data__ = new f(t);
            this.size = e.size
        }
        gt.prototype.clear = p,
            gt.prototype.delete = g,
            gt.prototype.get = m,
            gt.prototype.has = b,
            gt.prototype.set = pt;
        const mt = gt;
        const bt = function () {
            try {
                var t = W(Object, "defineProperty");
                return t({}, "", {}),
                    t
            } catch (t) { }
        }();
        const yt = function (t, e, n) {
            "__proto__" == e && bt ? bt(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : t[e] = n
        };
        const vt = function (t, e, n) {
            (void 0 !== n && !i(t[e], n) || void 0 === n && !(e in t)) && yt(t, e, n)
        };
        const xt = function (t) {
            return function (e, n, s) {
                for (var r = -1, i = Object(e), o = s(e), l = o.length; l--;) {
                    var a = o[t ? l : ++r];
                    if (!1 === n(i[a], a, i))
                        break
                }
                return e
            }
        }();
        var Nt = "object" == typeof exports && exports && !exports.nodeType && exports
            , Et = Nt && "object" == typeof module && module && !module.nodeType && module
            , wt = Et && Et.exports === Nt ? x.Buffer : void 0
            , At = wt ? wt.allocUnsafe : void 0;
        const qt = function (t, e) {
            if (e)
                return t.slice();
            var n = t.length
                , s = At ? At(n) : new t.constructor(n);
            return t.copy(s),
                s
        };
        const kt = x.Uint8Array;
        const _t = function (t) {
            var e = new t.constructor(t.byteLength);
            return new kt(e).set(new kt(t)),
                e
        };
        const Lt = function (t, e) {
            var n = e ? _t(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.length)
        };
        const Ot = function (t, e) {
            var n = -1
                , s = t.length;
            for (e || (e = Array(s)); ++n < s;)
                e[n] = t[n];
            return e
        };
        var St = Object.create;
        const Tt = function () {
            function t() { }
            return function (e) {
                if (!T(e))
                    return {};
                if (St)
                    return St(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0,
                    n
            }
        }();
        const jt = function (t, e) {
            return function (n) {
                return t(e(n))
            }
        };
        const Ct = jt(Object.getPrototypeOf, Object);
        var Rt = Object.prototype;
        const It = function (t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || Rt)
        };
        const Mt = function (t) {
            return "function" != typeof t.constructor || It(t) ? {} : Tt(Ct(t))
        };
        const Bt = function (t) {
            return null != t && "object" == typeof t
        };
        const Dt = function (t) {
            return Bt(t) && "[object Arguments]" == S(t)
        };
        var Ut = Object.prototype
            , Pt = Ut.hasOwnProperty
            , zt = Ut.propertyIsEnumerable;
        const Ft = Dt(function () {
            return arguments
        }()) ? Dt : function (t) {
            return Bt(t) && Pt.call(t, "callee") && !zt.call(t, "callee")
        }
            ;
        const Ht = Array.isArray;
        const $t = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        };
        const Vt = function (t) {
            return null != t && $t(t.length) && !j(t)
        };
        const Kt = function (t) {
            return Bt(t) && Vt(t)
        };
        const Wt = function () {
            return !1
        };
        var Zt = "object" == typeof exports && exports && !exports.nodeType && exports
            , Gt = Zt && "object" == typeof module && module && !module.nodeType && module
            , Xt = Gt && Gt.exports === Zt ? x.Buffer : void 0;
        const Yt = (Xt ? Xt.isBuffer : void 0) || Wt;
        var Qt = Function.prototype
            , Jt = Object.prototype
            , te = Qt.toString
            , ee = Jt.hasOwnProperty
            , ne = te.call(Object);
        const se = function (t) {
            if (!Bt(t) || "[object Object]" != S(t))
                return !1;
            var e = Ct(t);
            if (null === e)
                return !0;
            var n = ee.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && te.call(n) == ne
        };
        var re = {};
        re["[object Float32Array]"] = re["[object Float64Array]"] = re["[object Int8Array]"] = re["[object Int16Array]"] = re["[object Int32Array]"] = re["[object Uint8Array]"] = re["[object Uint8ClampedArray]"] = re["[object Uint16Array]"] = re["[object Uint32Array]"] = !0,
            re["[object Arguments]"] = re["[object Array]"] = re["[object ArrayBuffer]"] = re["[object Boolean]"] = re["[object DataView]"] = re["[object Date]"] = re["[object Error]"] = re["[object Function]"] = re["[object Map]"] = re["[object Number]"] = re["[object Object]"] = re["[object RegExp]"] = re["[object Set]"] = re["[object String]"] = re["[object WeakMap]"] = !1;
        const ie = function (t) {
            return Bt(t) && $t(t.length) && !!re[S(t)]
        };
        const oe = function (t) {
            return function (e) {
                return t(e)
            }
        };
        var le = "object" == typeof exports && exports && !exports.nodeType && exports
            , ae = le && "object" == typeof module && module && !module.nodeType && module
            , ce = ae && ae.exports === le && y.process;
        const ue = function () {
            try {
                var t = ae && ae.require && ae.require("util").types;
                return t || ce && ce.binding && ce.binding("util")
            } catch (t) { }
        }();
        var he = ue && ue.isTypedArray;
        const de = he ? oe(he) : ie;
        const fe = function (t, e) {
            if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e)
                return t[e]
        };
        var pe = Object.prototype.hasOwnProperty;
        const ge = function (t, e, n) {
            var s = t[e];
            pe.call(t, e) && i(s, n) && (void 0 !== n || e in t) || yt(t, e, n)
        };
        const me = function (t, e, n, s) {
            var r = !n;
            n || (n = {});
            for (var i = -1, o = e.length; ++i < o;) {
                var l = e[i]
                    , a = s ? s(n[l], t[l], l, n, t) : void 0;
                void 0 === a && (a = t[l]),
                    r ? yt(n, l, a) : ge(n, l, a)
            }
            return n
        };
        const be = function (t, e) {
            for (var n = -1, s = Array(t); ++n < t;)
                s[n] = e(n);
            return s
        };
        var ye = /^(?:0|[1-9]\d*)$/;
        const ve = function (t, e) {
            var n = typeof t;
            return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && ye.test(t)) && t > -1 && t % 1 == 0 && t < e
        };
        var xe = Object.prototype.hasOwnProperty;
        const Ne = function (t, e) {
            var n = Ht(t)
                , s = !n && Ft(t)
                , r = !n && !s && Yt(t)
                , i = !n && !s && !r && de(t)
                , o = n || s || r || i
                , l = o ? be(t.length, String) : []
                , a = l.length;
            for (var c in t)
                !e && !xe.call(t, c) || o && ("length" == c || r && ("offset" == c || "parent" == c) || i && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || ve(c, a)) || l.push(c);
            return l
        };
        const Ee = function (t) {
            var e = [];
            if (null != t)
                for (var n in Object(t))
                    e.push(n);
            return e
        };
        var we = Object.prototype.hasOwnProperty;
        const Ae = function (t) {
            if (!T(t))
                return Ee(t);
            var e = It(t)
                , n = [];
            for (var s in t)
                ("constructor" != s || !e && we.call(t, s)) && n.push(s);
            return n
        };
        const qe = function (t) {
            return Vt(t) ? Ne(t, !0) : Ae(t)
        };
        const ke = function (t) {
            return me(t, qe(t))
        };
        const _e = function (t, e, n, s, r, i, o) {
            var l = fe(t, n)
                , a = fe(e, n)
                , c = o.get(a);
            if (c)
                vt(t, n, c);
            else {
                var u = i ? i(l, a, n + "", t, e, o) : void 0
                    , h = void 0 === u;
                if (h) {
                    var d = Ht(a)
                        , f = !d && Yt(a)
                        , p = !d && !f && de(a);
                    u = a,
                        d || f || p ? Ht(l) ? u = l : Kt(l) ? u = Ot(l) : f ? (h = !1,
                            u = qt(a, !0)) : p ? (h = !1,
                                u = Lt(a, !0)) : u = [] : se(a) || Ft(a) ? (u = l,
                                    Ft(l) ? u = ke(l) : T(l) && !j(l) || (u = Mt(a))) : h = !1
                }
                h && (o.set(a, u),
                    r(u, a, s, i, o),
                    o.delete(a)),
                    vt(t, n, u)
            }
        };
        const Le = function t(e, n, s, r, i) {
            e !== n && xt(n, (function (o, l) {
                if (i || (i = new mt),
                    T(o))
                    _e(e, n, l, s, t, r, i);
                else {
                    var a = r ? r(fe(e, l), o, l + "", e, n, i) : void 0;
                    void 0 === a && (a = o),
                        vt(e, l, a)
                }
            }
            ), qe)
        };
        const Oe = function (t) {
            return t
        };
        const Se = function (t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2])
            }
            return t.apply(e, n)
        };
        var Te = Math.max;
        const je = function (t, e, n) {
            return e = Te(void 0 === e ? t.length - 1 : e, 0),
                function () {
                    for (var s = arguments, r = -1, i = Te(s.length - e, 0), o = Array(i); ++r < i;)
                        o[r] = s[e + r];
                    r = -1;
                    for (var l = Array(e + 1); ++r < e;)
                        l[r] = s[r];
                    return l[e] = n(o),
                        Se(t, this, l)
                }
        };
        const Ce = function (t) {
            return function () {
                return t
            }
        };
        const Re = bt ? function (t, e) {
            return bt(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Ce(e),
                writable: !0
            })
        }
            : Oe;
        var Ie = Date.now;
        const Me = function (t) {
            var e = 0
                , n = 0;
            return function () {
                var s = Ie()
                    , r = 16 - (s - n);
                if (n = s,
                    r > 0) {
                    if (++e >= 800)
                        return arguments[0]
                } else
                    e = 0;
                return t.apply(void 0, arguments)
            }
        }(Re);
        const Be = function (t, e) {
            return Me(je(t, e, Oe), t + "")
        };
        const De = function (t, e, n) {
            if (!T(n))
                return !1;
            var s = typeof e;
            return !!("number" == s ? Vt(n) && ve(e, n.length) : "string" == s && e in n) && i(n[e], t)
        };
        const Ue = function (t) {
            return Be((function (e, n) {
                var s = -1
                    , r = n.length
                    , i = r > 1 ? n[r - 1] : void 0
                    , o = r > 2 ? n[2] : void 0;
                for (i = t.length > 3 && "function" == typeof i ? (r--,
                    i) : void 0,
                    o && De(n[0], n[1], o) && (i = r < 3 ? void 0 : i,
                        r = 1),
                    e = Object(e); ++s < r;) {
                    var l = n[s];
                    l && t(e, l, s, i)
                }
                return e
            }
            ))
        }((function (t, e, n) {
            Le(t, e, n)
        }
        ));
        var Pe = (t => (t[t.TYPE = 3] = "TYPE",
            t[t.LEVEL = 12] = "LEVEL",
            t[t.ATTRIBUTE = 13] = "ATTRIBUTE",
            t[t.BLOT = 14] = "BLOT",
            t[t.INLINE = 7] = "INLINE",
            t[t.BLOCK = 11] = "BLOCK",
            t[t.BLOCK_BLOT = 10] = "BLOCK_BLOT",
            t[t.INLINE_BLOT = 6] = "INLINE_BLOT",
            t[t.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE",
            t[t.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE",
            t[t.ANY = 15] = "ANY",
            t))(Pe || {});
        class ze {
            constructor(t, e, n = {}) {
                this.attrName = t,
                    this.keyName = e;
                const s = Pe.TYPE & Pe.ATTRIBUTE;
                this.scope = null != n.scope ? n.scope & Pe.LEVEL | s : Pe.ATTRIBUTE,
                    null != n.whitelist && (this.whitelist = n.whitelist)
            }
            static keys(t) {
                return Array.from(t.attributes).map((t => t.name))
            }
            add(t, e) {
                return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e),
                    !0)
            }
            canAdd(t, e) {
                return null == this.whitelist || ("string" == typeof e ? this.whitelist.indexOf(e.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e) > -1)
            }
            remove(t) {
                t.removeAttribute(this.keyName)
            }
            value(t) {
                const e = t.getAttribute(this.keyName);
                return this.canAdd(t, e) && e ? e : ""
            }
        }
        class Fe extends Error {
            constructor(t) {
                super(t = "[Parchment] " + t),
                    this.message = t,
                    this.name = this.constructor.name
            }
        }
        const He = class t {
            constructor() {
                this.attributes = {},
                    this.classes = {},
                    this.tags = {},
                    this.types = {}
            }
            static find(t, e = !1) {
                if (null == t)
                    return null;
                if (this.blots.has(t))
                    return this.blots.get(t) || null;
                if (e) {
                    let n = null;
                    try {
                        n = t.parentNode
                    } catch {
                        return null
                    }
                    return this.find(n, e)
                }
                return null
            }
            create(e, n, s) {
                const r = this.query(n);
                if (null == r)
                    throw new Fe(`Unable to create ${n} blot`);
                const i = r
                    , o = n instanceof Node || n.nodeType === Node.TEXT_NODE ? n : i.create(s)
                    , l = new i(e, o, s);
                return t.blots.set(l.domNode, l),
                    l
            }
            find(e, n = !1) {
                return t.find(e, n)
            }
            query(t, e = Pe.ANY) {
                let n;
                return "string" == typeof t ? n = this.types[t] || this.attributes[t] : t instanceof Text || t.nodeType === Node.TEXT_NODE ? n = this.types.text : "number" == typeof t ? t & Pe.LEVEL & Pe.BLOCK ? n = this.types.block : t & Pe.LEVEL & Pe.INLINE && (n = this.types.inline) : t instanceof Element && ((t.getAttribute("class") || "").split(/\s+/).some((t => (n = this.classes[t],
                    !!n))),
                    n = n || this.tags[t.tagName]),
                    null == n ? null : "scope" in n && e & Pe.LEVEL & n.scope && e & Pe.TYPE & n.scope ? n : null
            }
            register(...t) {
                return t.map((t => {
                    const e = "blotName" in t
                        , n = "attrName" in t;
                    if (!e && !n)
                        throw new Fe("Invalid definition");
                    if (e && "abstract" === t.blotName)
                        throw new Fe("Cannot register abstract class");
                    const s = e ? t.blotName : n ? t.attrName : void 0;
                    return this.types[s] = t,
                        n ? "string" == typeof t.keyName && (this.attributes[t.keyName] = t) : e && (t.className && (this.classes[t.className] = t),
                            t.tagName && (Array.isArray(t.tagName) ? t.tagName = t.tagName.map((t => t.toUpperCase())) : t.tagName = t.tagName.toUpperCase(),
                                (Array.isArray(t.tagName) ? t.tagName : [t.tagName]).forEach((e => {
                                    (null == this.tags[e] || null == t.className) && (this.tags[e] = t)
                                }
                                )))),
                        t
                }
                ))
            }
        }
            ;
        He.blots = new WeakMap;
        let $e = He;
        function Ve(t, e) {
            return (t.getAttribute("class") || "").split(/\s+/).filter((t => 0 === t.indexOf(`${e}-`)))
        }
        const Ke = class extends ze {
            static keys(t) {
                return (t.getAttribute("class") || "").split(/\s+/).map((t => t.split("-").slice(0, -1).join("-")))
            }
            add(t, e) {
                return !!this.canAdd(t, e) && (this.remove(t),
                    t.classList.add(`${this.keyName}-${e}`),
                    !0)
            }
            remove(t) {
                Ve(t, this.keyName).forEach((e => {
                    t.classList.remove(e)
                }
                )),
                    0 === t.classList.length && t.removeAttribute("class")
            }
            value(t) {
                const e = (Ve(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
                return this.canAdd(t, e) ? e : ""
            }
        }
            ;
        function We(t) {
            const e = t.split("-")
                , n = e.slice(1).map((t => t[0].toUpperCase() + t.slice(1))).join("");
            return e[0] + n
        }
        const Ze = class extends ze {
            static keys(t) {
                return (t.getAttribute("style") || "").split(";").map((t => t.split(":")[0].trim()))
            }
            add(t, e) {
                return !!this.canAdd(t, e) && (t.style[We(this.keyName)] = e,
                    !0)
            }
            remove(t) {
                t.style[We(this.keyName)] = "",
                    t.getAttribute("style") || t.removeAttribute("style")
            }
            value(t) {
                const e = t.style[We(this.keyName)];
                return this.canAdd(t, e) ? e : ""
            }
        }
            ;
        const Ge = class {
            constructor(t) {
                this.attributes = {},
                    this.domNode = t,
                    this.build()
            }
            attribute(t, e) {
                e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? this.attributes[t.attrName] = t : delete this.attributes[t.attrName]) : (t.remove(this.domNode),
                    delete this.attributes[t.attrName])
            }
            build() {
                this.attributes = {};
                const t = $e.find(this.domNode);
                if (null == t)
                    return;
                const e = ze.keys(this.domNode)
                    , n = Ke.keys(this.domNode)
                    , s = Ze.keys(this.domNode);
                e.concat(n).concat(s).forEach((e => {
                    const n = t.scroll.query(e, Pe.ATTRIBUTE);
                    n instanceof ze && (this.attributes[n.attrName] = n)
                }
                ))
            }
            copy(t) {
                Object.keys(this.attributes).forEach((e => {
                    const n = this.attributes[e].value(this.domNode);
                    t.format(e, n)
                }
                ))
            }
            move(t) {
                this.copy(t),
                    Object.keys(this.attributes).forEach((t => {
                        this.attributes[t].remove(this.domNode)
                    }
                    )),
                    this.attributes = {}
            }
            values() {
                return Object.keys(this.attributes).reduce(((t, e) => (t[e] = this.attributes[e].value(this.domNode),
                    t)), {})
            }
        }
            , Xe = class {
                constructor(t, e) {
                    this.scroll = t,
                        this.domNode = e,
                        $e.blots.set(e, this),
                        this.prev = null,
                        this.next = null
                }
                static create(t) {
                    if (null == this.tagName)
                        throw new Fe("Blot definition missing tagName");
                    let e, n;
                    return Array.isArray(this.tagName) ? ("string" == typeof t ? (n = t.toUpperCase(),
                        parseInt(n, 10).toString() === n && (n = parseInt(n, 10))) : "number" == typeof t && (n = t),
                        e = "number" == typeof n ? document.createElement(this.tagName[n - 1]) : n && this.tagName.indexOf(n) > -1 ? document.createElement(n) : document.createElement(this.tagName[0])) : e = document.createElement(this.tagName),
                        this.className && e.classList.add(this.className),
                        e
                }
                get statics() {
                    return this.constructor
                }
                attach() { }
                clone() {
                    const t = this.domNode.cloneNode(!1);
                    return this.scroll.create(t)
                }
                detach() {
                    null != this.parent && this.parent.removeChild(this),
                        $e.blots.delete(this.domNode)
                }
                deleteAt(t, e) {
                    this.isolate(t, e).remove()
                }
                formatAt(t, e, n, s) {
                    const r = this.isolate(t, e);
                    if (null != this.scroll.query(n, Pe.BLOT) && s)
                        r.wrap(n, s);
                    else if (null != this.scroll.query(n, Pe.ATTRIBUTE)) {
                        const t = this.scroll.create(this.statics.scope);
                        r.wrap(t),
                            t.format(n, s)
                    }
                }
                insertAt(t, e, n) {
                    const s = null == n ? this.scroll.create("text", e) : this.scroll.create(e, n)
                        , r = this.split(t);
                    this.parent.insertBefore(s, r || void 0)
                }
                isolate(t, e) {
                    const n = this.split(t);
                    if (null == n)
                        throw new Error("Attempt to isolate at end");
                    return n.split(e),
                        n
                }
                length() {
                    return 1
                }
                offset(t = this.parent) {
                    return null == this.parent || this === t ? 0 : this.parent.children.offset(this) + this.parent.offset(t)
                }
                optimize(t) {
                    this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer) && this.wrap(this.statics.requiredContainer.blotName)
                }
                remove() {
                    null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode),
                        this.detach()
                }
                replaceWith(t, e) {
                    const n = "string" == typeof t ? this.scroll.create(t, e) : t;
                    return null != this.parent && (this.parent.insertBefore(n, this.next || void 0),
                        this.remove()),
                        n
                }
                split(t, e) {
                    return 0 === t ? this : this.next
                }
                update(t, e) { }
                wrap(t, e) {
                    const n = "string" == typeof t ? this.scroll.create(t, e) : t;
                    if (null != this.parent && this.parent.insertBefore(n, this.next || void 0),
                        "function" != typeof n.appendChild)
                        throw new Fe(`Cannot wrap ${t}`);
                    return n.appendChild(this),
                        n
                }
            }
            ;
        Xe.blotName = "abstract";
        let Ye = Xe;
        const Qe = class extends Ye {
            static value(t) {
                return !0
            }
            index(t, e) {
                return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1
            }
            position(t, e) {
                let n = Array.from(this.parent.domNode.childNodes).indexOf(this.domNode);
                return t > 0 && (n += 1),
                    [this.parent.domNode, n]
            }
            value() {
                return {
                    [this.statics.blotName]: this.statics.value(this.domNode) || !0
                }
            }
        }
            ;
        Qe.scope = Pe.INLINE_BLOT;
        const Je = Qe;
        class tn {
            constructor() {
                this.head = null,
                    this.tail = null,
                    this.length = 0
            }
            append(...t) {
                if (this.insertBefore(t[0], null),
                    t.length > 1) {
                    const e = t.slice(1);
                    this.append(...e)
                }
            }
            at(t) {
                const e = this.iterator();
                let n = e();
                for (; n && t > 0;)
                    t -= 1,
                        n = e();
                return n
            }
            contains(t) {
                const e = this.iterator();
                let n = e();
                for (; n;) {
                    if (n === t)
                        return !0;
                    n = e()
                }
                return !1
            }
            indexOf(t) {
                const e = this.iterator();
                let n = e()
                    , s = 0;
                for (; n;) {
                    if (n === t)
                        return s;
                    s += 1,
                        n = e()
                }
                return -1
            }
            insertBefore(t, e) {
                null != t && (this.remove(t),
                    t.next = e,
                    null != e ? (t.prev = e.prev,
                        null != e.prev && (e.prev.next = t),
                        e.prev = t,
                        e === this.head && (this.head = t)) : null != this.tail ? (this.tail.next = t,
                            t.prev = this.tail,
                            this.tail = t) : (t.prev = null,
                                this.head = this.tail = t),
                    this.length += 1)
            }
            offset(t) {
                let e = 0
                    , n = this.head;
                for (; null != n;) {
                    if (n === t)
                        return e;
                    e += n.length(),
                        n = n.next
                }
                return -1
            }
            remove(t) {
                this.contains(t) && (null != t.prev && (t.prev.next = t.next),
                    null != t.next && (t.next.prev = t.prev),
                    t === this.head && (this.head = t.next),
                    t === this.tail && (this.tail = t.prev),
                    this.length -= 1)
            }
            iterator(t = this.head) {
                return () => {
                    const e = t;
                    return null != t && (t = t.next),
                        e
                }
            }
            find(t, e = !1) {
                const n = this.iterator();
                let s = n();
                for (; s;) {
                    const r = s.length();
                    if (t < r || e && t === r && (null == s.next || 0 !== s.next.length()))
                        return [s, t];
                    t -= r,
                        s = n()
                }
                return [null, 0]
            }
            forEach(t) {
                const e = this.iterator();
                let n = e();
                for (; n;)
                    t(n),
                        n = e()
            }
            forEachAt(t, e, n) {
                if (e <= 0)
                    return;
                const [s, r] = this.find(t);
                let i = t - r;
                const o = this.iterator(s);
                let l = o();
                for (; l && i < t + e;) {
                    const s = l.length();
                    t > i ? n(l, t - i, Math.min(e, i + s - t)) : n(l, 0, Math.min(s, t + e - i)),
                        i += s,
                        l = o()
                }
            }
            map(t) {
                return this.reduce(((e, n) => (e.push(t(n)),
                    e)), [])
            }
            reduce(t, e) {
                const n = this.iterator();
                let s = n();
                for (; s;)
                    e = t(e, s),
                        s = n();
                return e
            }
        }
        function en(t, e) {
            const n = e.find(t);
            if (n)
                return n;
            try {
                return e.create(t)
            } catch {
                const n = e.create(Pe.INLINE);
                return Array.from(t.childNodes).forEach((t => {
                    n.domNode.appendChild(t)
                }
                )),
                    t.parentNode && t.parentNode.replaceChild(n.domNode, t),
                    n.attach(),
                    n
            }
        }
        const nn = class t extends Ye {
            constructor(t, e) {
                super(t, e),
                    this.uiNode = null,
                    this.build()
            }
            appendChild(t) {
                this.insertBefore(t)
            }
            attach() {
                super.attach(),
                    this.children.forEach((t => {
                        t.attach()
                    }
                    ))
            }
            attachUI(e) {
                null != this.uiNode && this.uiNode.remove(),
                    this.uiNode = e,
                    t.uiClass && this.uiNode.classList.add(t.uiClass),
                    this.uiNode.setAttribute("contenteditable", "false"),
                    this.domNode.insertBefore(this.uiNode, this.domNode.firstChild)
            }
            build() {
                this.children = new tn,
                    Array.from(this.domNode.childNodes).filter((t => t !== this.uiNode)).reverse().forEach((t => {
                        try {
                            const e = en(t, this.scroll);
                            this.insertBefore(e, this.children.head || void 0)
                        } catch (t) {
                            if (t instanceof Fe)
                                return;
                            throw t
                        }
                    }
                    ))
            }
            deleteAt(t, e) {
                if (0 === t && e === this.length())
                    return this.remove();
                this.children.forEachAt(t, e, ((t, e, n) => {
                    t.deleteAt(e, n)
                }
                ))
            }
            descendant(e, n = 0) {
                const [s, r] = this.children.find(n);
                return null == e.blotName && e(s) || null != e.blotName && s instanceof e ? [s, r] : s instanceof t ? s.descendant(e, r) : [null, -1]
            }
            descendants(e, n = 0, s = Number.MAX_VALUE) {
                let r = []
                    , i = s;
                return this.children.forEachAt(n, s, ((n, s, o) => {
                    (null == e.blotName && e(n) || null != e.blotName && n instanceof e) && r.push(n),
                        n instanceof t && (r = r.concat(n.descendants(e, s, i))),
                        i -= o
                }
                )),
                    r
            }
            detach() {
                this.children.forEach((t => {
                    t.detach()
                }
                )),
                    super.detach()
            }
            enforceAllowedChildren() {
                let e = !1;
                this.children.forEach((n => {
                    e || this.statics.allowedChildren.some((t => n instanceof t)) || (n.statics.scope === Pe.BLOCK_BLOT ? (null != n.next && this.splitAfter(n),
                        null != n.prev && this.splitAfter(n.prev),
                        n.parent.unwrap(),
                        e = !0) : n instanceof t ? n.unwrap() : n.remove())
                }
                ))
            }
            formatAt(t, e, n, s) {
                this.children.forEachAt(t, e, ((t, e, r) => {
                    t.formatAt(e, r, n, s)
                }
                ))
            }
            insertAt(t, e, n) {
                const [s, r] = this.children.find(t);
                if (s)
                    s.insertAt(r, e, n);
                else {
                    const t = null == n ? this.scroll.create("text", e) : this.scroll.create(e, n);
                    this.appendChild(t)
                }
            }
            insertBefore(t, e) {
                null != t.parent && t.parent.children.remove(t);
                let n = null;
                this.children.insertBefore(t, e || null),
                    t.parent = this,
                    null != e && (n = e.domNode),
                    (this.domNode.parentNode !== t.domNode || this.domNode.nextSibling !== n) && this.domNode.insertBefore(t.domNode, n),
                    t.attach()
            }
            length() {
                return this.children.reduce(((t, e) => t + e.length()), 0)
            }
            moveChildren(t, e) {
                this.children.forEach((n => {
                    t.insertBefore(n, e)
                }
                ))
            }
            optimize(t) {
                if (super.optimize(t),
                    this.enforceAllowedChildren(),
                    null != this.uiNode && this.uiNode !== this.domNode.firstChild && this.domNode.insertBefore(this.uiNode, this.domNode.firstChild),
                    0 === this.children.length)
                    if (null != this.statics.defaultChild) {
                        const t = this.scroll.create(this.statics.defaultChild.blotName);
                        this.appendChild(t)
                    } else
                        this.remove()
            }
            path(e, n = !1) {
                const [s, r] = this.children.find(e, n)
                    , i = [[this, e]];
                return s instanceof t ? i.concat(s.path(r, n)) : (null != s && i.push([s, r]),
                    i)
            }
            removeChild(t) {
                this.children.remove(t)
            }
            replaceWith(e, n) {
                const s = "string" == typeof e ? this.scroll.create(e, n) : e;
                return s instanceof t && this.moveChildren(s),
                    super.replaceWith(s)
            }
            split(t, e = !1) {
                if (!e) {
                    if (0 === t)
                        return this;
                    if (t === this.length())
                        return this.next
                }
                const n = this.clone();
                return this.parent && this.parent.insertBefore(n, this.next || void 0),
                    this.children.forEachAt(t, this.length(), ((t, s, r) => {
                        const i = t.split(s, e);
                        null != i && n.appendChild(i)
                    }
                    )),
                    n
            }
            splitAfter(t) {
                const e = this.clone();
                for (; null != t.next;)
                    e.appendChild(t.next);
                return this.parent && this.parent.insertBefore(e, this.next || void 0),
                    e
            }
            unwrap() {
                this.parent && this.moveChildren(this.parent, this.next || void 0),
                    this.remove()
            }
            update(t, e) {
                const n = []
                    , s = [];
                t.forEach((t => {
                    t.target === this.domNode && "childList" === t.type && (n.push(...t.addedNodes),
                        s.push(...t.removedNodes))
                }
                )),
                    s.forEach((t => {
                        if (null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY)
                            return;
                        const e = this.scroll.find(t);
                        null != e && (null == e.domNode.parentNode || e.domNode.parentNode === this.domNode) && e.detach()
                    }
                    )),
                    n.filter((t => t.parentNode === this.domNode && t !== this.uiNode)).sort(((t, e) => t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1)).forEach((t => {
                        let e = null;
                        null != t.nextSibling && (e = this.scroll.find(t.nextSibling));
                        const n = en(t, this.scroll);
                        (n.next !== e || null == n.next) && (null != n.parent && n.parent.removeChild(this),
                            this.insertBefore(n, e || void 0))
                    }
                    )),
                    this.enforceAllowedChildren()
            }
        }
            ;
        nn.uiClass = "";
        const sn = nn;
        const rn = class t extends sn {
            static create(t) {
                return super.create(t)
            }
            static formats(e, n) {
                const s = n.query(t.blotName);
                if (null == s || e.tagName !== s.tagName) {
                    if ("string" == typeof this.tagName)
                        return !0;
                    if (Array.isArray(this.tagName))
                        return e.tagName.toLowerCase()
                }
            }
            constructor(t, e) {
                super(t, e),
                    this.attributes = new Ge(this.domNode)
            }
            format(e, n) {
                if (e !== this.statics.blotName || n) {
                    const t = this.scroll.query(e, Pe.INLINE);
                    if (null == t)
                        return;
                    t instanceof ze ? this.attributes.attribute(t, n) : n && (e !== this.statics.blotName || this.formats()[e] !== n) && this.replaceWith(e, n)
                } else
                    this.children.forEach((e => {
                        e instanceof t || (e = e.wrap(t.blotName, !0)),
                            this.attributes.copy(e)
                    }
                    )),
                        this.unwrap()
            }
            formats() {
                const t = this.attributes.values()
                    , e = this.statics.formats(this.domNode, this.scroll);
                return null != e && (t[this.statics.blotName] = e),
                    t
            }
            formatAt(t, e, n, s) {
                null != this.formats()[n] || this.scroll.query(n, Pe.ATTRIBUTE) ? this.isolate(t, e).format(n, s) : super.formatAt(t, e, n, s)
            }
            optimize(e) {
                super.optimize(e);
                const n = this.formats();
                if (0 === Object.keys(n).length)
                    return this.unwrap();
                const s = this.next;
                s instanceof t && s.prev === this && function (t, e) {
                    if (Object.keys(t).length !== Object.keys(e).length)
                        return !1;
                    for (const n in t)
                        if (t[n] !== e[n])
                            return !1;
                    return !0
                }(n, s.formats()) && (s.moveChildren(this),
                    s.remove())
            }
            replaceWith(t, e) {
                const n = super.replaceWith(t, e);
                return this.attributes.copy(n),
                    n
            }
            update(t, e) {
                super.update(t, e),
                    t.some((t => t.target === this.domNode && "attributes" === t.type)) && this.attributes.build()
            }
            wrap(e, n) {
                const s = super.wrap(e, n);
                return s instanceof t && this.attributes.move(s),
                    s
            }
        }
            ;
        rn.allowedChildren = [rn, Je],
            rn.blotName = "inline",
            rn.scope = Pe.INLINE_BLOT,
            rn.tagName = "SPAN";
        const on = rn
            , ln = class t extends sn {
                static create(t) {
                    return super.create(t)
                }
                static formats(e, n) {
                    const s = n.query(t.blotName);
                    if (null == s || e.tagName !== s.tagName) {
                        if ("string" == typeof this.tagName)
                            return !0;
                        if (Array.isArray(this.tagName))
                            return e.tagName.toLowerCase()
                    }
                }
                constructor(t, e) {
                    super(t, e),
                        this.attributes = new Ge(this.domNode)
                }
                format(e, n) {
                    const s = this.scroll.query(e, Pe.BLOCK);
                    null != s && (s instanceof ze ? this.attributes.attribute(s, n) : e !== this.statics.blotName || n ? n && (e !== this.statics.blotName || this.formats()[e] !== n) && this.replaceWith(e, n) : this.replaceWith(t.blotName))
                }
                formats() {
                    const t = this.attributes.values()
                        , e = this.statics.formats(this.domNode, this.scroll);
                    return null != e && (t[this.statics.blotName] = e),
                        t
                }
                formatAt(t, e, n, s) {
                    null != this.scroll.query(n, Pe.BLOCK) ? this.format(n, s) : super.formatAt(t, e, n, s)
                }
                insertAt(t, e, n) {
                    if (null == n || null != this.scroll.query(e, Pe.INLINE))
                        super.insertAt(t, e, n);
                    else {
                        const s = this.split(t);
                        if (null == s)
                            throw new Error("Attempt to insertAt after block boundaries");
                        {
                            const t = this.scroll.create(e, n);
                            s.parent.insertBefore(t, s)
                        }
                    }
                }
                replaceWith(t, e) {
                    const n = super.replaceWith(t, e);
                    return this.attributes.copy(n),
                        n
                }
                update(t, e) {
                    super.update(t, e),
                        t.some((t => t.target === this.domNode && "attributes" === t.type)) && this.attributes.build()
                }
            }
            ;
        ln.blotName = "block",
            ln.scope = Pe.BLOCK_BLOT,
            ln.tagName = "P",
            ln.allowedChildren = [on, ln, Je];
        const an = ln
            , cn = class extends sn {
                checkMerge() {
                    return null !== this.next && this.next.statics.blotName === this.statics.blotName
                }
                deleteAt(t, e) {
                    super.deleteAt(t, e),
                        this.enforceAllowedChildren()
                }
                formatAt(t, e, n, s) {
                    super.formatAt(t, e, n, s),
                        this.enforceAllowedChildren()
                }
                insertAt(t, e, n) {
                    super.insertAt(t, e, n),
                        this.enforceAllowedChildren()
                }
                optimize(t) {
                    super.optimize(t),
                        this.children.length > 0 && null != this.next && this.checkMerge() && (this.next.moveChildren(this),
                            this.next.remove())
                }
            }
            ;
        cn.blotName = "container",
            cn.scope = Pe.BLOCK_BLOT;
        const un = cn;
        const hn = class extends Je {
            static formats(t, e) { }
            format(t, e) {
                super.formatAt(0, this.length(), t, e)
            }
            formatAt(t, e, n, s) {
                0 === t && e === this.length() ? this.format(n, s) : super.formatAt(t, e, n, s)
            }
            formats() {
                return this.statics.formats(this.domNode, this.scroll)
            }
        }
            , dn = {
                attributes: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            }
            , fn = class extends sn {
                constructor(t, e) {
                    super(null, e),
                        this.registry = t,
                        this.scroll = this,
                        this.build(),
                        this.observer = new MutationObserver((t => {
                            this.update(t)
                        }
                        )),
                        this.observer.observe(this.domNode, dn),
                        this.attach()
                }
                create(t, e) {
                    return this.registry.create(this, t, e)
                }
                find(t, e = !1) {
                    const n = this.registry.find(t, e);
                    return n ? n.scroll === this ? n : e ? this.find(n.scroll.domNode.parentNode, !0) : null : null
                }
                query(t, e = Pe.ANY) {
                    return this.registry.query(t, e)
                }
                register(...t) {
                    return this.registry.register(...t)
                }
                build() {
                    null != this.scroll && super.build()
                }
                detach() {
                    super.detach(),
                        this.observer.disconnect()
                }
                deleteAt(t, e) {
                    this.update(),
                        0 === t && e === this.length() ? this.children.forEach((t => {
                            t.remove()
                        }
                        )) : super.deleteAt(t, e)
                }
                formatAt(t, e, n, s) {
                    this.update(),
                        super.formatAt(t, e, n, s)
                }
                insertAt(t, e, n) {
                    this.update(),
                        super.insertAt(t, e, n)
                }
                optimize(t = [], e = {}) {
                    super.optimize(e);
                    const n = e.mutationsMap || new WeakMap;
                    let s = Array.from(this.observer.takeRecords());
                    for (; s.length > 0;)
                        t.push(s.pop());
                    const r = (t, e = !0) => {
                        null == t || t === this || null != t.domNode.parentNode && (n.has(t.domNode) || n.set(t.domNode, []),
                            e && r(t.parent))
                    }
                        , i = t => {
                            n.has(t.domNode) && (t instanceof sn && t.children.forEach(i),
                                n.delete(t.domNode),
                                t.optimize(e))
                        }
                        ;
                    let o = t;
                    for (let e = 0; o.length > 0; e += 1) {
                        if (e >= 100)
                            throw new Error("[Parchment] Maximum optimize iterations reached");
                        for (o.forEach((t => {
                            const e = this.find(t.target, !0);
                            null != e && (e.domNode === t.target && ("childList" === t.type ? (r(this.find(t.previousSibling, !1)),
                                Array.from(t.addedNodes).forEach((t => {
                                    const e = this.find(t, !1);
                                    r(e, !1),
                                        e instanceof sn && e.children.forEach((t => {
                                            r(t, !1)
                                        }
                                        ))
                                }
                                ))) : "attributes" === t.type && r(e.prev)),
                                r(e))
                        }
                        )),
                            this.children.forEach(i),
                            o = Array.from(this.observer.takeRecords()),
                            s = o.slice(); s.length > 0;)
                            t.push(s.pop())
                    }
                }
                update(t, e = {}) {
                    t = t || this.observer.takeRecords();
                    const n = new WeakMap;
                    t.map((t => {
                        const e = this.find(t.target, !0);
                        return null == e ? null : n.has(e.domNode) ? (n.get(e.domNode).push(t),
                            null) : (n.set(e.domNode, [t]),
                                e)
                    }
                    )).forEach((t => {
                        null != t && t !== this && n.has(t.domNode) && t.update(n.get(t.domNode) || [], e)
                    }
                    )),
                        e.mutationsMap = n,
                        n.has(this.domNode) && super.update(n.get(this.domNode), e),
                        this.optimize(t, e)
                }
            }
            ;
        fn.blotName = "scroll",
            fn.defaultChild = an,
            fn.allowedChildren = [an, un],
            fn.scope = Pe.BLOCK_BLOT,
            fn.tagName = "DIV";
        const pn = fn
            , gn = class t extends Je {
                static create(t) {
                    return document.createTextNode(t)
                }
                static value(t) {
                    return t.data
                }
                constructor(t, e) {
                    super(t, e),
                        this.text = this.statics.value(this.domNode)
                }
                deleteAt(t, e) {
                    this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e)
                }
                index(t, e) {
                    return this.domNode === t ? e : -1
                }
                insertAt(t, e, n) {
                    null == n ? (this.text = this.text.slice(0, t) + e + this.text.slice(t),
                        this.domNode.data = this.text) : super.insertAt(t, e, n)
                }
                length() {
                    return this.text.length
                }
                optimize(e) {
                    super.optimize(e),
                        this.text = this.statics.value(this.domNode),
                        0 === this.text.length ? this.remove() : this.next instanceof t && this.next.prev === this && (this.insertAt(this.length(), this.next.value()),
                            this.next.remove())
                }
                position(t, e = !1) {
                    return [this.domNode, t]
                }
                split(t, e = !1) {
                    if (!e) {
                        if (0 === t)
                            return this;
                        if (t === this.length())
                            return this.next
                    }
                    const n = this.scroll.create(this.domNode.splitText(t));
                    return this.parent.insertBefore(n, this.next || void 0),
                        this.text = this.statics.value(this.domNode),
                        n
                }
                update(t, e) {
                    t.some((t => "characterData" === t.type && t.target === this.domNode)) && (this.text = this.statics.value(this.domNode))
                }
                value() {
                    return this.text
                }
            }
            ;
        gn.blotName = "text",
            gn.scope = Pe.INLINE_BLOT;
        const mn = gn;
        var bn = n(2660);
        const yn = function (t, e) {
            for (var n = -1, s = null == t ? 0 : t.length; ++n < s && !1 !== e(t[n], n, t);)
                ;
            return t
        };
        const vn = jt(Object.keys, Object);
        var xn = Object.prototype.hasOwnProperty;
        const Nn = function (t) {
            if (!It(t))
                return vn(t);
            var e = [];
            for (var n in Object(t))
                xn.call(t, n) && "constructor" != n && e.push(n);
            return e
        };
        const En = function (t) {
            return Vt(t) ? Ne(t) : Nn(t)
        };
        const wn = function (t, e) {
            return t && me(e, En(e), t)
        };
        const An = function (t, e) {
            return t && me(e, qe(e), t)
        };
        const qn = function (t, e) {
            for (var n = -1, s = null == t ? 0 : t.length, r = 0, i = []; ++n < s;) {
                var o = t[n];
                e(o, n, t) && (i[r++] = o)
            }
            return i
        };
        const kn = function () {
            return []
        };
        var _n = Object.prototype.propertyIsEnumerable
            , Ln = Object.getOwnPropertySymbols;
        const On = Ln ? function (t) {
            return null == t ? [] : (t = Object(t),
                qn(Ln(t), (function (e) {
                    return _n.call(t, e)
                }
                )))
        }
            : kn;
        const Sn = function (t, e) {
            return me(t, On(t), e)
        };
        const Tn = function (t, e) {
            for (var n = -1, s = e.length, r = t.length; ++n < s;)
                t[r + n] = e[n];
            return t
        };
        const jn = Object.getOwnPropertySymbols ? function (t) {
            for (var e = []; t;)
                Tn(e, On(t)),
                    t = Ct(t);
            return e
        }
            : kn;
        const Cn = function (t, e) {
            return me(t, jn(t), e)
        };
        const Rn = function (t, e, n) {
            var s = e(t);
            return Ht(t) ? s : Tn(s, n(t))
        };
        const In = function (t) {
            return Rn(t, En, On)
        };
        const Mn = function (t) {
            return Rn(t, qe, jn)
        };
        const Bn = W(x, "DataView");
        const Dn = W(x, "Promise");
        const Un = W(x, "Set");
        const Pn = W(x, "WeakMap");
        var zn = "[object Map]"
            , Fn = "[object Promise]"
            , Hn = "[object Set]"
            , $n = "[object WeakMap]"
            , Vn = "[object DataView]"
            , Kn = D(Bn)
            , Wn = D(Z)
            , Zn = D(Dn)
            , Gn = D(Un)
            , Xn = D(Pn)
            , Yn = S;
        (Bn && Yn(new Bn(new ArrayBuffer(1))) != Vn || Z && Yn(new Z) != zn || Dn && Yn(Dn.resolve()) != Fn || Un && Yn(new Un) != Hn || Pn && Yn(new Pn) != $n) && (Yn = function (t) {
            var e = S(t)
                , n = "[object Object]" == e ? t.constructor : void 0
                , s = n ? D(n) : "";
            if (s)
                switch (s) {
                    case Kn:
                        return Vn;
                    case Wn:
                        return zn;
                    case Zn:
                        return Fn;
                    case Gn:
                        return Hn;
                    case Xn:
                        return $n
                }
            return e
        }
        );
        const Qn = Yn;
        var Jn = Object.prototype.hasOwnProperty;
        const ts = function (t) {
            var e = t.length
                , n = new t.constructor(e);
            return e && "string" == typeof t[0] && Jn.call(t, "index") && (n.index = t.index,
                n.input = t.input),
                n
        };
        const es = function (t, e) {
            var n = e ? _t(t.buffer) : t.buffer;
            return new t.constructor(n, t.byteOffset, t.byteLength)
        };
        var ns = /\w*$/;
        const ss = function (t) {
            var e = new t.constructor(t.source, ns.exec(t));
            return e.lastIndex = t.lastIndex,
                e
        };
        var rs = N ? N.prototype : void 0
            , is = rs ? rs.valueOf : void 0;
        const os = function (t) {
            return is ? Object(is.call(t)) : {}
        };
        const ls = function (t, e, n) {
            var s = t.constructor;
            switch (e) {
                case "[object ArrayBuffer]":
                    return _t(t);
                case "[object Boolean]":
                case "[object Date]":
                    return new s(+t);
                case "[object DataView]":
                    return es(t, n);
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return Lt(t, n);
                case "[object Map]":
                case "[object Set]":
                    return new s;
                case "[object Number]":
                case "[object String]":
                    return new s(t);
                case "[object RegExp]":
                    return ss(t);
                case "[object Symbol]":
                    return os(t)
            }
        };
        const as = function (t) {
            return Bt(t) && "[object Map]" == Qn(t)
        };
        var cs = ue && ue.isMap;
        const us = cs ? oe(cs) : as;
        const hs = function (t) {
            return Bt(t) && "[object Set]" == Qn(t)
        };
        var ds = ue && ue.isSet;
        const fs = ds ? oe(ds) : hs;
        var ps = "[object Arguments]"
            , gs = "[object Function]"
            , ms = "[object Object]"
            , bs = {};
        bs[ps] = bs["[object Array]"] = bs["[object ArrayBuffer]"] = bs["[object DataView]"] = bs["[object Boolean]"] = bs["[object Date]"] = bs["[object Float32Array]"] = bs["[object Float64Array]"] = bs["[object Int8Array]"] = bs["[object Int16Array]"] = bs["[object Int32Array]"] = bs["[object Map]"] = bs["[object Number]"] = bs[ms] = bs["[object RegExp]"] = bs["[object Set]"] = bs["[object String]"] = bs["[object Symbol]"] = bs["[object Uint8Array]"] = bs["[object Uint8ClampedArray]"] = bs["[object Uint16Array]"] = bs["[object Uint32Array]"] = !0,
            bs["[object Error]"] = bs[gs] = bs["[object WeakMap]"] = !1;
        const ys = function t(e, n, s, r, i, o) {
            var l, a = 1 & n, c = 2 & n, u = 4 & n;
            if (s && (l = i ? s(e, r, i, o) : s(e)),
                void 0 !== l)
                return l;
            if (!T(e))
                return e;
            var h = Ht(e);
            if (h) {
                if (l = ts(e),
                    !a)
                    return Ot(e, l)
            } else {
                var d = Qn(e)
                    , f = d == gs || "[object GeneratorFunction]" == d;
                if (Yt(e))
                    return qt(e, a);
                if (d == ms || d == ps || f && !i) {
                    if (l = c || f ? {} : Mt(e),
                        !a)
                        return c ? Cn(e, An(l, e)) : Sn(e, wn(l, e))
                } else {
                    if (!bs[d])
                        return i ? e : {};
                    l = ls(e, d, a)
                }
            }
            o || (o = new mt);
            var p = o.get(e);
            if (p)
                return p;
            o.set(e, l),
                fs(e) ? e.forEach((function (r) {
                    l.add(t(r, n, s, r, e, o))
                }
                )) : us(e) && e.forEach((function (r, i) {
                    l.set(i, t(r, n, s, i, e, o))
                }
                ));
            var g = h ? void 0 : (u ? c ? Mn : In : c ? qe : En)(e);
            return yn(g || e, (function (r, i) {
                g && (r = e[i = r]),
                    ge(l, i, t(r, n, s, i, e, o))
            }
            )),
                l
        };
        const vs = function (t) {
            return ys(t, 5)
        };
        const xs = function (t) {
            return this.__data__.set(t, "__lodash_hash_undefined__"),
                this
        };
        const Ns = function (t) {
            return this.__data__.has(t)
        };
        function Es(t) {
            var e = -1
                , n = null == t ? 0 : t.length;
            for (this.__data__ = new ft; ++e < n;)
                this.add(t[e])
        }
        Es.prototype.add = Es.prototype.push = xs,
            Es.prototype.has = Ns;
        const ws = Es;
        const As = function (t, e) {
            for (var n = -1, s = null == t ? 0 : t.length; ++n < s;)
                if (e(t[n], n, t))
                    return !0;
            return !1
        };
        const qs = function (t, e) {
            return t.has(e)
        };
        const ks = function (t, e, n, s, r, i) {
            var o = 1 & n
                , l = t.length
                , a = e.length;
            if (l != a && !(o && a > l))
                return !1;
            var c = i.get(t)
                , u = i.get(e);
            if (c && u)
                return c == e && u == t;
            var h = -1
                , d = !0
                , f = 2 & n ? new ws : void 0;
            for (i.set(t, e),
                i.set(e, t); ++h < l;) {
                var p = t[h]
                    , g = e[h];
                if (s)
                    var m = o ? s(g, p, h, e, t, i) : s(p, g, h, t, e, i);
                if (void 0 !== m) {
                    if (m)
                        continue;
                    d = !1;
                    break
                }
                if (f) {
                    if (!As(e, (function (t, e) {
                        if (!qs(f, e) && (p === t || r(p, t, n, s, i)))
                            return f.push(e)
                    }
                    ))) {
                        d = !1;
                        break
                    }
                } else if (p !== g && !r(p, g, n, s, i)) {
                    d = !1;
                    break
                }
            }
            return i.delete(t),
                i.delete(e),
                d
        };
        const _s = function (t) {
            var e = -1
                , n = Array(t.size);
            return t.forEach((function (t, s) {
                n[++e] = [s, t]
            }
            )),
                n
        };
        const Ls = function (t) {
            var e = -1
                , n = Array(t.size);
            return t.forEach((function (t) {
                n[++e] = t
            }
            )),
                n
        };
        var Os = N ? N.prototype : void 0
            , Ss = Os ? Os.valueOf : void 0;
        const Ts = function (t, e, n, s, r, o, l) {
            switch (n) {
                case "[object DataView]":
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                        return !1;
                    t = t.buffer,
                        e = e.buffer;
                case "[object ArrayBuffer]":
                    return !(t.byteLength != e.byteLength || !o(new kt(t), new kt(e)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return i(+t, +e);
                case "[object Error]":
                    return t.name == e.name && t.message == e.message;
                case "[object RegExp]":
                case "[object String]":
                    return t == e + "";
                case "[object Map]":
                    var a = _s;
                case "[object Set]":
                    var c = 1 & s;
                    if (a || (a = Ls),
                        t.size != e.size && !c)
                        return !1;
                    var u = l.get(t);
                    if (u)
                        return u == e;
                    s |= 2,
                        l.set(t, e);
                    var h = ks(a(t), a(e), s, r, o, l);
                    return l.delete(t),
                        h;
                case "[object Symbol]":
                    if (Ss)
                        return Ss.call(t) == Ss.call(e)
            }
            return !1
        };
        var js = Object.prototype.hasOwnProperty;
        const Cs = function (t, e, n, s, r, i) {
            var o = 1 & n
                , l = In(t)
                , a = l.length;
            if (a != In(e).length && !o)
                return !1;
            for (var c = a; c--;) {
                var u = l[c];
                if (!(o ? u in e : js.call(e, u)))
                    return !1
            }
            var h = i.get(t)
                , d = i.get(e);
            if (h && d)
                return h == e && d == t;
            var f = !0;
            i.set(t, e),
                i.set(e, t);
            for (var p = o; ++c < a;) {
                var g = t[u = l[c]]
                    , m = e[u];
                if (s)
                    var b = o ? s(m, g, u, e, t, i) : s(g, m, u, t, e, i);
                if (!(void 0 === b ? g === m || r(g, m, n, s, i) : b)) {
                    f = !1;
                    break
                }
                p || (p = "constructor" == u)
            }
            if (f && !p) {
                var y = t.constructor
                    , v = e.constructor;
                y == v || !("constructor" in t) || !("constructor" in e) || "function" == typeof y && y instanceof y && "function" == typeof v && v instanceof v || (f = !1)
            }
            return i.delete(t),
                i.delete(e),
                f
        };
        var Rs = "[object Arguments]"
            , Is = "[object Array]"
            , Ms = "[object Object]"
            , Bs = Object.prototype.hasOwnProperty;
        const Ds = function (t, e, n, s, r, i) {
            var o = Ht(t)
                , l = Ht(e)
                , a = o ? Is : Qn(t)
                , c = l ? Is : Qn(e)
                , u = (a = a == Rs ? Ms : a) == Ms
                , h = (c = c == Rs ? Ms : c) == Ms
                , d = a == c;
            if (d && Yt(t)) {
                if (!Yt(e))
                    return !1;
                o = !0,
                    u = !1
            }
            if (d && !u)
                return i || (i = new mt),
                    o || de(t) ? ks(t, e, n, s, r, i) : Ts(t, e, a, n, s, r, i);
            if (!(1 & n)) {
                var f = u && Bs.call(t, "__wrapped__")
                    , p = h && Bs.call(e, "__wrapped__");
                if (f || p) {
                    var g = f ? t.value() : t
                        , m = p ? e.value() : e;
                    return i || (i = new mt),
                        r(g, m, n, s, i)
                }
            }
            return !!d && (i || (i = new mt),
                Cs(t, e, n, s, r, i))
        };
        const Us = function t(e, n, s, r, i) {
            return e === n || (null == e || null == n || !Bt(e) && !Bt(n) ? e != e && n != n : Ds(e, n, s, r, t, i))
        };
        const Ps = function (t, e) {
            return Us(t, e)
        };
        class zs extends hn {
            static value() { }
            optimize() {
                (this.prev || this.next) && this.remove()
            }
            length() {
                return 0
            }
            value() {
                return ""
            }
        }
        zs.blotName = "break",
            zs.tagName = "BR";
        const Fs = zs;
        class Hs extends mn {
        }
        const $s = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        function Vs(t) {
            return t.replace(/[&<>"']/g, (t => $s[t]))
        }
        class Ks extends on {
            static allowedChildren = [Ks, Fs, hn, Hs];
            static order = ["cursor", "inline", "link", "underline", "strike", "italic", "bold", "script", "code"];
            static compare(t, e) {
                const n = Ks.order.indexOf(t)
                    , s = Ks.order.indexOf(e);
                return n >= 0 || s >= 0 ? n - s : t === e ? 0 : t < e ? -1 : 1
            }
            formatAt(t, e, n, s) {
                if (Ks.compare(this.statics.blotName, n) < 0 && this.scroll.query(n, Pe.BLOT)) {
                    const r = this.isolate(t, e);
                    s && r.wrap(n, s)
                } else
                    super.formatAt(t, e, n, s)
            }
            optimize(t) {
                if (super.optimize(t),
                    this.parent instanceof Ks && Ks.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
                    const t = this.parent.isolate(this.offset(), this.length());
                    this.moveChildren(t),
                        t.wrap(this)
                }
            }
        }
        const Ws = Ks;
        class Zs extends an {
            cache = {};
            delta() {
                return null == this.cache.delta && (this.cache.delta = Xs(this)),
                    this.cache.delta
            }
            deleteAt(t, e) {
                super.deleteAt(t, e),
                    this.cache = {}
            }
            formatAt(t, e, n, s) {
                e <= 0 || (this.scroll.query(n, Pe.BLOCK) ? t + e === this.length() && this.format(n, s) : super.formatAt(t, Math.min(e, this.length() - t - 1), n, s),
                    this.cache = {})
            }
            insertAt(t, e, n) {
                if (null != n)
                    return super.insertAt(t, e, n),
                        void (this.cache = {});
                if (0 === e.length)
                    return;
                const s = e.split("\n")
                    , r = s.shift();
                r.length > 0 && (t < this.length() - 1 || null == this.children.tail ? super.insertAt(Math.min(t, this.length() - 1), r) : this.children.tail.insertAt(this.children.tail.length(), r),
                    this.cache = {});
                let i = this;
                s.reduce(((t, e) => (i = i.split(t, !0),
                    i.insertAt(0, e),
                    e.length)), t + r.length)
            }
            insertBefore(t, e) {
                const { head: n } = this.children;
                super.insertBefore(t, e),
                    n instanceof Fs && n.remove(),
                    this.cache = {}
            }
            length() {
                return null == this.cache.length && (this.cache.length = super.length() + 1),
                    this.cache.length
            }
            moveChildren(t, e) {
                super.moveChildren(t, e),
                    this.cache = {}
            }
            optimize(t) {
                super.optimize(t),
                    this.cache = {}
            }
            path(t) {
                return super.path(t, !0)
            }
            removeChild(t) {
                super.removeChild(t),
                    this.cache = {}
            }
            split(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e && (0 === t || t >= this.length() - 1)) {
                    const e = this.clone();
                    return 0 === t ? (this.parent.insertBefore(e, this),
                        this) : (this.parent.insertBefore(e, this.next),
                            e)
                }
                const n = super.split(t, e);
                return this.cache = {},
                    n
            }
        }
        Zs.blotName = "block",
            Zs.tagName = "P",
            Zs.defaultChild = Fs,
            Zs.allowedChildren = [Fs, Ws, hn, Hs];
        class Gs extends hn {
            attach() {
                super.attach(),
                    this.attributes = new Ge(this.domNode)
            }
            delta() {
                return (new bn).insert(this.value(), {
                    ...this.formats(),
                    ...this.attributes.values()
                })
            }
            format(t, e) {
                const n = this.scroll.query(t, Pe.BLOCK_ATTRIBUTE);
                null != n && this.attributes.attribute(n, e)
            }
            formatAt(t, e, n, s) {
                this.format(n, s)
            }
            insertAt(t, e, n) {
                if (null != n)
                    return void super.insertAt(t, e, n);
                const s = e.split("\n")
                    , r = s.pop()
                    , i = s.map((t => {
                        const e = this.scroll.create(Zs.blotName);
                        return e.insertAt(0, t),
                            e
                    }
                    ))
                    , o = this.split(t);
                i.forEach((t => {
                    this.parent.insertBefore(t, o)
                }
                )),
                    r && this.parent.insertBefore(this.scroll.create("text", r), o)
            }
        }
        function Xs(t) {
            let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return t.descendants(Je).reduce(((t, n) => 0 === n.length() ? t : t.insert(n.value(), Ys(n, {}, e))), new bn).insert("\n", Ys(t))
        }
        function Ys(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            return null == t ? e : ("formats" in t && "function" == typeof t.formats && (e = {
                ...e,
                ...t.formats()
            },
                n && delete e["code-token"]),
                null == t.parent || "scroll" === t.parent.statics.blotName || t.parent.statics.scope !== t.statics.scope ? e : Ys(t.parent, e, n))
        }
        Gs.scope = Pe.BLOCK_BLOT;
        class Qs extends hn {
            static blotName = "cursor";
            static className = "ql-cursor";
            static tagName = "span";
            static CONTENTS = "\ufeff";
            static value() { }
            constructor(t, e, n) {
                super(t, e),
                    this.selection = n,
                    this.textNode = document.createTextNode(Qs.CONTENTS),
                    this.domNode.appendChild(this.textNode),
                    this.savedLength = 0
            }
            detach() {
                null != this.parent && this.parent.removeChild(this)
            }
            format(t, e) {
                if (0 !== this.savedLength)
                    return void super.format(t, e);
                let n = this
                    , s = 0;
                for (; null != n && n.statics.scope !== Pe.BLOCK_BLOT;)
                    s += n.offset(n.parent),
                        n = n.parent;
                null != n && (this.savedLength = Qs.CONTENTS.length,
                    n.optimize(),
                    n.formatAt(s, Qs.CONTENTS.length, t, e),
                    this.savedLength = 0)
            }
            index(t, e) {
                return t === this.textNode ? 0 : super.index(t, e)
            }
            length() {
                return this.savedLength
            }
            position() {
                return [this.textNode, this.textNode.data.length]
            }
            remove() {
                super.remove(),
                    this.parent = null
            }
            restore() {
                if (this.selection.composing || null == this.parent)
                    return null;
                const t = this.selection.getNativeRange();
                for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode;)
                    this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
                const e = this.prev instanceof Hs ? this.prev : null
                    , n = e ? e.length() : 0
                    , s = this.next instanceof Hs ? this.next : null
                    , r = s ? s.text : ""
                    , { textNode: i } = this
                    , o = i.data.split(Qs.CONTENTS).join("");
                let l;
                if (i.data = Qs.CONTENTS,
                    e)
                    l = e,
                        (o || s) && (e.insertAt(e.length(), o + r),
                            s && s.remove());
                else if (s)
                    l = s,
                        s.insertAt(0, o);
                else {
                    const t = document.createTextNode(o);
                    l = this.scroll.create(t),
                        this.parent.insertBefore(l, this)
                }
                if (this.remove(),
                    t) {
                    const r = (t, r) => e && t === e.domNode ? r : t === i ? n + r - 1 : s && t === s.domNode ? n + o.length + r : null
                        , a = r(t.start.node, t.start.offset)
                        , c = r(t.end.node, t.end.offset);
                    if (null !== a && null !== c)
                        return {
                            startNode: l.domNode,
                            startOffset: a,
                            endNode: l.domNode,
                            endOffset: c
                        }
                }
                return null
            }
            update(t, e) {
                if (t.some((t => "characterData" === t.type && t.target === this.textNode))) {
                    const t = this.restore();
                    t && (e.range = t)
                }
            }
            optimize(t) {
                super.optimize(t);
                let { parent: e } = this;
                for (; e;) {
                    if ("A" === e.domNode.tagName) {
                        this.savedLength = Qs.CONTENTS.length,
                            e.isolate(this.offset(e), this.length()).unwrap(),
                            this.savedLength = 0;
                        break
                    }
                    e = e.parent
                }
            }
            value() {
                return ""
            }
        }
        const Js = Qs;
        var tr = n(228);
        const er = new WeakMap
            , nr = ["error", "warn", "log", "info"];
        let sr = "warn";
        function rr(t) {
            if (sr && nr.indexOf(t) <= nr.indexOf(sr)) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                    n[s - 1] = arguments[s];
                console[t](...n)
            }
        }
        function ir(t) {
            return nr.reduce(((e, n) => (e[n] = rr.bind(console, n, t),
                e)), {})
        }
        ir.level = t => {
            sr = t
        }
            ,
            rr.level = ir.level;
        const or = ir
            , lr = or("quill:events");
        ["selectionchange", "mousedown", "mouseup", "click"].forEach((t => {
            document.addEventListener(t, (function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                Array.from(document.querySelectorAll(".ql-container")).forEach((t => {
                    const n = er.get(t);
                    n && n.emitter && n.emitter.handleDOM(...e)
                }
                ))
            }
            ))
        }
        ));
        const ar = class extends tr {
            static events = {
                EDITOR_CHANGE: "editor-change",
                SCROLL_BEFORE_UPDATE: "scroll-before-update",
                SCROLL_BLOT_MOUNT: "scroll-blot-mount",
                SCROLL_BLOT_UNMOUNT: "scroll-blot-unmount",
                SCROLL_OPTIMIZE: "scroll-optimize",
                SCROLL_UPDATE: "scroll-update",
                SCROLL_EMBED_UPDATE: "scroll-embed-update",
                SELECTION_CHANGE: "selection-change",
                TEXT_CHANGE: "text-change",
                COMPOSITION_BEFORE_START: "composition-before-start",
                COMPOSITION_START: "composition-start",
                COMPOSITION_BEFORE_END: "composition-before-end",
                COMPOSITION_END: "composition-end"
            };
            static sources = {
                API: "api",
                SILENT: "silent",
                USER: "user"
            };
            constructor() {
                super(),
                    this.domListeners = {},
                    this.on("error", lr.error)
            }
            emit() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return lr.log.call(lr, ...e),
                    super.emit(...e)
            }
            handleDOM(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
                    n[s - 1] = arguments[s];
                (this.domListeners[t.type] || []).forEach((e => {
                    let { node: s, handler: r } = e;
                    (t.target === s || s.contains(t.target)) && r(t, ...n)
                }
                ))
            }
            listenDOM(t, e, n) {
                this.domListeners[t] || (this.domListeners[t] = []),
                    this.domListeners[t].push({
                        node: e,
                        handler: n
                    })
            }
        }
            , cr = or("quill:selection");
        class ur {
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.index = t,
                    this.length = e
            }
        }
        function hr(t, e) {
            try {
                e.parentNode
            } catch (t) {
                return !1
            }
            return t.contains(e)
        }
        const dr = class {
            constructor(t, e) {
                this.emitter = e,
                    this.scroll = t,
                    this.composing = !1,
                    this.mouseDown = !1,
                    this.root = this.scroll.domNode,
                    this.cursor = this.scroll.create("cursor", this),
                    this.savedRange = new ur(0, 0),
                    this.lastRange = this.savedRange,
                    this.lastNative = null,
                    this.handleComposition(),
                    this.handleDragging(),
                    this.emitter.listenDOM("selectionchange", document, (() => {
                        this.mouseDown || this.composing || setTimeout(this.update.bind(this, ar.sources.USER), 1)
                    }
                    )),
                    this.emitter.on(ar.events.SCROLL_BEFORE_UPDATE, (() => {
                        if (!this.hasFocus())
                            return;
                        const t = this.getNativeRange();
                        null != t && t.start.node !== this.cursor.textNode && this.emitter.once(ar.events.SCROLL_UPDATE, ((e, n) => {
                            try {
                                this.root.contains(t.start.node) && this.root.contains(t.end.node) && this.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset);
                                const s = n.some((t => "characterData" === t.type || "childList" === t.type || "attributes" === t.type && t.target === this.root));
                                this.update(s ? ar.sources.SILENT : e)
                            } catch (t) { }
                        }
                        ))
                    }
                    )),
                    this.emitter.on(ar.events.SCROLL_OPTIMIZE, ((t, e) => {
                        if (e.range) {
                            const { startNode: t, startOffset: n, endNode: s, endOffset: r } = e.range;
                            this.setNativeRange(t, n, s, r),
                                this.update(ar.sources.SILENT)
                        }
                    }
                    )),
                    this.update(ar.sources.SILENT)
            }
            handleComposition() {
                this.emitter.on(ar.events.COMPOSITION_BEFORE_START, (() => {
                    this.composing = !0
                }
                )),
                    this.emitter.on(ar.events.COMPOSITION_END, (() => {
                        if (this.composing = !1,
                            this.cursor.parent) {
                            const t = this.cursor.restore();
                            if (!t)
                                return;
                            setTimeout((() => {
                                this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset)
                            }
                            ), 1)
                        }
                    }
                    ))
            }
            handleDragging() {
                this.emitter.listenDOM("mousedown", document.body, (() => {
                    this.mouseDown = !0
                }
                )),
                    this.emitter.listenDOM("mouseup", document.body, (() => {
                        this.mouseDown = !1,
                            this.update(ar.sources.USER)
                    }
                    ))
            }
            focus() {
                this.hasFocus() || (this.root.focus({
                    preventScroll: !0
                }),
                    this.setRange(this.savedRange))
            }
            format(t, e) {
                this.scroll.update();
                const n = this.getNativeRange();
                if (null != n && n.native.collapsed && !this.scroll.query(t, Pe.BLOCK)) {
                    if (n.start.node !== this.cursor.textNode) {
                        const t = this.scroll.find(n.start.node, !1);
                        if (null == t)
                            return;
                        if (t instanceof Je) {
                            const e = t.split(n.start.offset);
                            t.parent.insertBefore(this.cursor, e)
                        } else
                            t.insertBefore(this.cursor, n.start.node);
                        this.cursor.attach()
                    }
                    this.cursor.format(t, e),
                        this.scroll.optimize(),
                        this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length),
                        this.update()
                }
            }
            getBounds(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                const n = this.scroll.length();
                let s;
                t = Math.min(t, n - 1),
                    e = Math.min(t + e, n - 1) - t;
                let [r, i] = this.scroll.leaf(t);
                if (null == r)
                    return null;
                if (e > 0 && i === r.length()) {
                    const [e] = this.scroll.leaf(t + 1);
                    if (e) {
                        const [n] = this.scroll.line(t)
                            , [s] = this.scroll.line(t + 1);
                        n === s && (r = e,
                            i = 0)
                    }
                }
                [s, i] = r.position(i, !0);
                const o = document.createRange();
                if (e > 0)
                    return o.setStart(s, i),
                        [r, i] = this.scroll.leaf(t + e),
                        null == r ? null : ([s, i] = r.position(i, !0),
                            o.setEnd(s, i),
                            o.getBoundingClientRect());
                let l, a = "left";
                if (s instanceof Text) {
                    if (!s.data.length)
                        return null;
                    i < s.data.length ? (o.setStart(s, i),
                        o.setEnd(s, i + 1)) : (o.setStart(s, i - 1),
                            o.setEnd(s, i),
                            a = "right"),
                        l = o.getBoundingClientRect()
                } else {
                    if (!(r.domNode instanceof Element))
                        return null;
                    l = r.domNode.getBoundingClientRect(),
                        i > 0 && (a = "right")
                }
                return {
                    bottom: l.top + l.height,
                    height: l.height,
                    left: l[a],
                    right: l[a],
                    top: l.top,
                    width: 0
                }
            }
            getNativeRange() {
                const t = document.getSelection();
                if (null == t || t.rangeCount <= 0)
                    return null;
                const e = t.getRangeAt(0);
                if (null == e)
                    return null;
                const n = this.normalizeNative(e);
                return cr.info("getNativeRange", n),
                    n
            }
            getRange() {
                const t = this.scroll.domNode;
                if ("isConnected" in t && !t.isConnected)
                    return [null, null];
                const e = this.getNativeRange();
                if (null == e)
                    return [null, null];
                return [this.normalizedToRange(e), e]
            }
            hasFocus() {
                return document.activeElement === this.root || null != document.activeElement && hr(this.root, document.activeElement)
            }
            normalizedToRange(t) {
                const e = [[t.start.node, t.start.offset]];
                t.native.collapsed || e.push([t.end.node, t.end.offset]);
                const n = e.map((t => {
                    const [e, n] = t
                        , s = this.scroll.find(e, !0)
                        , r = s.offset(this.scroll);
                    return 0 === n ? r : s instanceof Je ? r + s.index(e, n) : r + s.length()
                }
                ))
                    , s = Math.min(Math.max(...n), this.scroll.length() - 1)
                    , r = Math.min(s, ...n);
                return new ur(r, s - r)
            }
            normalizeNative(t) {
                if (!hr(this.root, t.startContainer) || !t.collapsed && !hr(this.root, t.endContainer))
                    return null;
                const e = {
                    start: {
                        node: t.startContainer,
                        offset: t.startOffset
                    },
                    end: {
                        node: t.endContainer,
                        offset: t.endOffset
                    },
                    native: t
                };
                return [e.start, e.end].forEach((t => {
                    let { node: e, offset: n } = t;
                    for (; !(e instanceof Text) && e.childNodes.length > 0;)
                        if (e.childNodes.length > n)
                            e = e.childNodes[n],
                                n = 0;
                        else {
                            if (e.childNodes.length !== n)
                                break;
                            e = e.lastChild,
                                n = e instanceof Text ? e.data.length : e.childNodes.length > 0 ? e.childNodes.length : e.childNodes.length + 1
                        }
                    t.node = e,
                        t.offset = n
                }
                )),
                    e
            }
            rangeToNative(t) {
                const e = this.scroll.length()
                    , n = (t, n) => {
                        t = Math.min(e - 1, t);
                        const [s, r] = this.scroll.leaf(t);
                        return s ? s.position(r, n) : [null, -1]
                    }
                    ;
                return [...n(t.index, !1), ...n(t.index + t.length, !0)]
            }
            setNativeRange(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t
                    , s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e
                    , r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (cr.info("setNativeRange", t, e, n, s),
                    null != t && (null == this.root.parentNode || null == t.parentNode || null == n.parentNode))
                    return;
                const i = document.getSelection();
                if (null != i)
                    if (null != t) {
                        this.hasFocus() || this.root.focus({
                            preventScroll: !0
                        });
                        const { native: o } = this.getNativeRange() || {};
                        if (null == o || r || t !== o.startContainer || e !== o.startOffset || n !== o.endContainer || s !== o.endOffset) {
                            t instanceof Element && "BR" === t.tagName && (e = Array.from(t.parentNode.childNodes).indexOf(t),
                                t = t.parentNode),
                                n instanceof Element && "BR" === n.tagName && (s = Array.from(n.parentNode.childNodes).indexOf(n),
                                    n = n.parentNode);
                            const r = document.createRange();
                            r.setStart(t, e),
                                r.setEnd(n, s),
                                i.removeAllRanges(),
                                i.addRange(r)
                        }
                    } else
                        i.removeAllRanges(),
                            this.root.blur()
            }
            setRange(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                    , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ar.sources.API;
                if ("string" == typeof e && (n = e,
                    e = !1),
                    cr.info("setRange", t),
                    null != t) {
                    const n = this.rangeToNative(t);
                    this.setNativeRange(...n, e)
                } else
                    this.setNativeRange(null);
                this.update(n)
            }
            update() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ar.sources.USER;
                const e = this.lastRange
                    , [n, s] = this.getRange();
                if (this.lastRange = n,
                    this.lastNative = s,
                    null != this.lastRange && (this.savedRange = this.lastRange),
                    !Ps(e, this.lastRange)) {
                    if (!this.composing && null != s && s.native.collapsed && s.start.node !== this.cursor.textNode) {
                        const t = this.cursor.restore();
                        t && this.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset)
                    }
                    const n = [ar.events.SELECTION_CHANGE, vs(this.lastRange), vs(e), t];
                    this.emitter.emit(ar.events.EDITOR_CHANGE, ...n),
                        t !== ar.sources.SILENT && this.emitter.emit(...n)
                }
            }
        }
            , fr = /^[ -~]*$/;
        function pr(t, e, n) {
            if (0 === t.length) {
                const [t] = br(n.pop());
                return e <= 0 ? `</li></${t}>` : `</li></${t}>${pr([], e - 1, n)}`
            }
            const [{ child: s, offset: r, length: i, indent: o, type: l }, ...a] = t
                , [c, u] = br(l);
            if (o > e)
                return n.push(l),
                    o === e + 1 ? `<${c}><li${u}>${gr(s, r, i)}${pr(a, o, n)}` : `<${c}><li>${pr(t, e + 1, n)}`;
            const h = n[n.length - 1];
            if (o === e && l === h)
                return `</li><li${u}>${gr(s, r, i)}${pr(a, o, n)}`;
            const [d] = br(n.pop());
            return `</li></${d}>${pr(t, e - 1, n)}`
        }
        function gr(t, e, n) {
            let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if ("html" in t && "function" == typeof t.html)
                return t.html(e, n);
            if (t instanceof Hs) {
                return Vs(t.value().slice(e, e + n)).replaceAll(" ", "&nbsp;")
            }
            if (t instanceof sn) {
                if ("list-container" === t.statics.blotName) {
                    const s = [];
                    return t.children.forEachAt(e, n, ((t, e, n) => {
                        const r = "formats" in t && "function" == typeof t.formats ? t.formats() : {};
                        s.push({
                            child: t,
                            offset: e,
                            length: n,
                            indent: r.indent || 0,
                            type: r.list
                        })
                    }
                    )),
                        pr(s, -1, [])
                }
                const r = [];
                if (t.children.forEachAt(e, n, ((t, e, n) => {
                    r.push(gr(t, e, n))
                }
                )),
                    s || "list" === t.statics.blotName)
                    return r.join("");
                const { outerHTML: i, innerHTML: o } = t.domNode
                    , [l, a] = i.split(`>${o}<`);
                return "<table" === l ? `<table style="border: 1px solid #000;">${r.join("")}<${a}` : `${l}>${r.join("")}<${a}`
            }
            return t.domNode instanceof Element ? t.domNode.outerHTML : ""
        }
        function mr(t, e) {
            return Object.keys(e).reduce(((n, s) => {
                if (null == t[s])
                    return n;
                const r = e[s];
                return r === t[s] ? n[s] = r : Array.isArray(r) ? r.indexOf(t[s]) < 0 ? n[s] = r.concat([t[s]]) : n[s] = r : n[s] = [r, t[s]],
                    n
            }
            ), {})
        }
        function br(t) {
            const e = "ordered" === t ? "ol" : "ul";
            switch (t) {
                case "checked":
                    return [e, ' data-list="checked"'];
                case "unchecked":
                    return [e, ' data-list="unchecked"'];
                default:
                    return [e, ""]
            }
        }
        function yr(t) {
            return t.reduce(((t, e) => {
                if ("string" == typeof e.insert) {
                    const n = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                    return t.insert(n, e.attributes)
                }
                return t.push(e)
            }
            ), new bn)
        }
        function vr(t, e) {
            let { index: n, length: s } = t;
            return new ur(n + e, s)
        }
        const xr = class {
            constructor(t) {
                this.scroll = t,
                    this.delta = this.getDelta()
            }
            applyDelta(t) {
                this.scroll.update();
                let e = this.scroll.length();
                this.scroll.batchStart();
                const n = yr(t)
                    , s = new bn;
                return function (t) {
                    const e = [];
                    return t.forEach((t => {
                        if ("string" == typeof t.insert) {
                            t.insert.split("\n").forEach(((n, s) => {
                                s && e.push({
                                    insert: "\n",
                                    attributes: t.attributes
                                }),
                                    n && e.push({
                                        insert: n,
                                        attributes: t.attributes
                                    })
                            }
                            ))
                        } else
                            e.push(t)
                    }
                    )),
                        e
                }(n.ops.slice()).reduce(((t, n) => {
                    const r = bn.Op.length(n);
                    let i = n.attributes || {}
                        , o = !1
                        , l = !1;
                    if (null != n.insert) {
                        if (s.retain(r),
                            "string" == typeof n.insert) {
                            const s = n.insert;
                            l = !s.endsWith("\n") && (e <= t || !!this.scroll.descendant(Gs, t)[0]),
                                this.scroll.insertAt(t, s);
                            const [r, o] = this.scroll.line(t);
                            let a = Ue({}, Ys(r));
                            if (r instanceof Zs) {
                                const [t] = r.descendant(Je, o);
                                t && (a = Ue(a, Ys(t)))
                            }
                            i = bn.AttributeMap.diff(a, i) || {}
                        } else if ("object" == typeof n.insert) {
                            const s = Object.keys(n.insert)[0];
                            if (null == s)
                                return t;
                            const r = null != this.scroll.query(s, Pe.INLINE);
                            if (r)
                                (e <= t || this.scroll.descendant(Gs, t)[0]) && (l = !0);
                            else if (t > 0) {
                                const [e, n] = this.scroll.descendant(Je, t - 1);
                                if (e instanceof Hs) {
                                    "\n" !== e.value()[n] && (o = !0)
                                } else
                                    e instanceof hn && e.statics.scope === Pe.INLINE_BLOT && (o = !0)
                            }
                            if (this.scroll.insertAt(t, s, n.insert[s]),
                                r) {
                                const [e] = this.scroll.descendant(Je, t);
                                if (e) {
                                    const t = Ue({}, Ys(e));
                                    i = bn.AttributeMap.diff(t, i) || {}
                                }
                            }
                        }
                        e += r
                    } else if (s.push(n),
                        null !== n.retain && "object" == typeof n.retain) {
                        const e = Object.keys(n.retain)[0];
                        if (null == e)
                            return t;
                        this.scroll.updateEmbedAt(t, e, n.retain[e])
                    }
                    Object.keys(i).forEach((e => {
                        this.scroll.formatAt(t, r, e, i[e])
                    }
                    ));
                    const a = o ? 1 : 0
                        , c = l ? 1 : 0;
                    return e += a + c,
                        s.retain(a),
                        s.delete(c),
                        t + r + a + c
                }
                ), 0),
                    s.reduce(((t, e) => "number" == typeof e.delete ? (this.scroll.deleteAt(t, e.delete),
                        t) : t + bn.Op.length(e)), 0),
                    this.scroll.batchEnd(),
                    this.scroll.optimize(),
                    this.update(n)
            }
            deleteText(t, e) {
                return this.scroll.deleteAt(t, e),
                    this.update((new bn).retain(t).delete(e))
            }
            formatLine(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                this.scroll.update(),
                    Object.keys(n).forEach((s => {
                        this.scroll.lines(t, Math.max(e, 1)).forEach((t => {
                            t.format(s, n[s])
                        }
                        ))
                    }
                    )),
                    this.scroll.optimize();
                const s = (new bn).retain(t).retain(e, vs(n));
                return this.update(s)
            }
            formatText(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                Object.keys(n).forEach((s => {
                    this.scroll.formatAt(t, e, s, n[s])
                }
                ));
                const s = (new bn).retain(t).retain(e, vs(n));
                return this.update(s)
            }
            getContents(t, e) {
                return this.delta.slice(t, t + e)
            }
            getDelta() {
                return this.scroll.lines().reduce(((t, e) => t.concat(e.delta())), new bn)
            }
            getFormat(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                    , n = []
                    , s = [];
                0 === e ? this.scroll.path(t).forEach((t => {
                    const [e] = t;
                    e instanceof Zs ? n.push(e) : e instanceof Je && s.push(e)
                }
                )) : (n = this.scroll.lines(t, e),
                    s = this.scroll.descendants(Je, t, e));
                const [r, i] = [n, s].map((t => {
                    const e = t.shift();
                    if (null == e)
                        return {};
                    let n = Ys(e);
                    for (; Object.keys(n).length > 0;) {
                        const e = t.shift();
                        if (null == e)
                            return n;
                        n = mr(Ys(e), n)
                    }
                    return n
                }
                ));
                return {
                    ...r,
                    ...i
                }
            }
            getHTML(t, e) {
                const [n, s] = this.scroll.line(t);
                if (n) {
                    const r = n.length();
                    return !(n.length() >= s + e) || 0 === s && e === r ? gr(this.scroll, t, e, !0) : gr(n, s, e, !0)
                }
                return ""
            }
            getText(t, e) {
                return this.getContents(t, e).filter((t => "string" == typeof t.insert)).map((t => t.insert)).join("")
            }
            insertContents(t, e) {
                const n = yr(e)
                    , s = (new bn).retain(t).concat(n);
                return this.scroll.insertContents(t, n),
                    this.update(s)
            }
            insertEmbed(t, e, n) {
                return this.scroll.insertAt(t, e, n),
                    this.update((new bn).retain(t).insert({
                        [e]: n
                    }))
            }
            insertText(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n"),
                    this.scroll.insertAt(t, e),
                    Object.keys(n).forEach((s => {
                        this.scroll.formatAt(t, e.length, s, n[s])
                    }
                    )),
                    this.update((new bn).retain(t).insert(e, vs(n)))
            }
            isBlank() {
                if (0 === this.scroll.children.length)
                    return !0;
                if (this.scroll.children.length > 1)
                    return !1;
                const t = this.scroll.children.head;
                if (t?.statics.blotName !== Zs.blotName)
                    return !1;
                const e = t;
                return !(e.children.length > 1) && e.children.head instanceof Fs
            }
            removeFormat(t, e) {
                const n = this.getText(t, e)
                    , [s, r] = this.scroll.line(t + e);
                let i = 0
                    , o = new bn;
                null != s && (i = s.length() - r,
                    o = s.delta().slice(r, r + i - 1).insert("\n"));
                const l = this.getContents(t, e + i).diff((new bn).insert(n).concat(o))
                    , a = (new bn).retain(t).concat(l);
                return this.applyDelta(a)
            }
            update(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                    , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                const s = this.delta;
                if (1 === e.length && "characterData" === e[0].type && e[0].target.data.match(fr) && this.scroll.find(e[0].target)) {
                    const r = this.scroll.find(e[0].target)
                        , i = Ys(r)
                        , o = r.offset(this.scroll)
                        , l = e[0].oldValue.replace(Js.CONTENTS, "")
                        , a = (new bn).insert(l)
                        , c = (new bn).insert(r.value())
                        , u = n && {
                            oldRange: vr(n.oldRange, -o),
                            newRange: vr(n.newRange, -o)
                        };
                    t = (new bn).retain(o).concat(a.diff(c, u)).reduce(((t, e) => e.insert ? t.insert(e.insert, i) : t.push(e)), new bn),
                        this.delta = s.compose(t)
                } else
                    this.delta = this.getDelta(),
                        t && Ps(s.compose(t), this.delta) || (t = s.diff(this.delta, n));
                return t
            }
        }
            ;
        const Nr = class {
            static DEFAULTS = {};
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.quill = t,
                    this.options = e
            }
        }
            , Er = "\ufeff";
        const wr = class extends hn {
            constructor(t, e) {
                super(t, e),
                    this.contentNode = document.createElement("span"),
                    this.contentNode.setAttribute("contenteditable", "false"),
                    Array.from(this.domNode.childNodes).forEach((t => {
                        this.contentNode.appendChild(t)
                    }
                    )),
                    this.leftGuard = document.createTextNode(Er),
                    this.rightGuard = document.createTextNode(Er),
                    this.domNode.appendChild(this.leftGuard),
                    this.domNode.appendChild(this.contentNode),
                    this.domNode.appendChild(this.rightGuard)
            }
            index(t, e) {
                return t === this.leftGuard ? 0 : t === this.rightGuard ? 1 : super.index(t, e)
            }
            restore(t) {
                let e, n = null;
                const s = t.data.split(Er).join("");
                if (t === this.leftGuard)
                    if (this.prev instanceof Hs) {
                        const t = this.prev.length();
                        this.prev.insertAt(t, s),
                            n = {
                                startNode: this.prev.domNode,
                                startOffset: t + s.length
                            }
                    } else
                        e = document.createTextNode(s),
                            this.parent.insertBefore(this.scroll.create(e), this),
                            n = {
                                startNode: e,
                                startOffset: s.length
                            };
                else
                    t === this.rightGuard && (this.next instanceof Hs ? (this.next.insertAt(0, s),
                        n = {
                            startNode: this.next.domNode,
                            startOffset: s.length
                        }) : (e = document.createTextNode(s),
                            this.parent.insertBefore(this.scroll.create(e), this.next),
                            n = {
                                startNode: e,
                                startOffset: s.length
                            }));
                return t.data = Er,
                    n
            }
            update(t, e) {
                t.forEach((t => {
                    if ("characterData" === t.type && (t.target === this.leftGuard || t.target === this.rightGuard)) {
                        const n = this.restore(t.target);
                        n && (e.range = n)
                    }
                }
                ))
            }
        }
            ;
        const Ar = class {
            isComposing = !1;
            constructor(t, e) {
                this.scroll = t,
                    this.emitter = e,
                    this.setupListeners()
            }
            setupListeners() {
                this.scroll.domNode.addEventListener("compositionstart", (t => {
                    this.isComposing || this.handleCompositionStart(t)
                }
                )),
                    this.scroll.domNode.addEventListener("compositionend", (t => {
                        this.isComposing && queueMicrotask((() => {
                            this.handleCompositionEnd(t)
                        }
                        ))
                    }
                    ))
            }
            handleCompositionStart(t) {
                const e = t.target instanceof Node ? this.scroll.find(t.target, !0) : null;
                !e || e instanceof wr || (this.emitter.emit(ar.events.COMPOSITION_BEFORE_START, t),
                    this.scroll.batchStart(),
                    this.emitter.emit(ar.events.COMPOSITION_START, t),
                    this.isComposing = !0)
            }
            handleCompositionEnd(t) {
                this.emitter.emit(ar.events.COMPOSITION_BEFORE_END, t),
                    this.scroll.batchEnd(),
                    this.emitter.emit(ar.events.COMPOSITION_END, t),
                    this.isComposing = !1
            }
        }
            ;
        class qr {
            static DEFAULTS = {
                modules: {}
            };
            static themes = {
                default: qr
            };
            modules = {};
            constructor(t, e) {
                this.quill = t,
                    this.options = e
            }
            init() {
                Object.keys(this.options.modules).forEach((t => {
                    null == this.modules[t] && this.addModule(t)
                }
                ))
            }
            addModule(t) {
                const e = this.quill.constructor.import(`modules/${t}`);
                return this.modules[t] = new e(this.quill, this.options.modules[t] || {}),
                    this.modules[t]
            }
        }
        const kr = qr
            , _r = t => {
                const e = t.getBoundingClientRect()
                    , n = "offsetWidth" in t && Math.abs(e.width) / t.offsetWidth || 1
                    , s = "offsetHeight" in t && Math.abs(e.height) / t.offsetHeight || 1;
                return {
                    top: e.top,
                    right: e.left + t.clientWidth * n,
                    bottom: e.top + t.clientHeight * s,
                    left: e.left
                }
            }
            , Lr = t => {
                const e = parseInt(t, 10);
                return Number.isNaN(e) ? 0 : e
            }
            , Or = (t, e, n, s, r, i) => t < n && e > s ? 0 : t < n ? -(n - t + r) : e > s ? e - t > s - n ? t + r - n : e - s + i : 0
            , Sr = (t, e) => {
                const n = t.ownerDocument;
                let s = e
                    , r = t;
                for (; r;) {
                    const t = r === n.body
                        , e = t ? {
                            top: 0,
                            right: window.visualViewport?.width ?? n.documentElement.clientWidth,
                            bottom: window.visualViewport?.height ?? n.documentElement.clientHeight,
                            left: 0
                        } : _r(r)
                        , o = getComputedStyle(r)
                        , l = Or(s.left, s.right, e.left, e.right, Lr(o.scrollPaddingLeft), Lr(o.scrollPaddingRight))
                        , a = Or(s.top, s.bottom, e.top, e.bottom, Lr(o.scrollPaddingTop), Lr(o.scrollPaddingBottom));
                    if (l || a)
                        if (t)
                            n.defaultView?.scrollBy(l, a);
                        else {
                            const { scrollLeft: t, scrollTop: e } = r;
                            a && (r.scrollTop += a),
                                l && (r.scrollLeft += l);
                            const n = r.scrollLeft - t
                                , i = r.scrollTop - e;
                            s = {
                                left: s.left - n,
                                top: s.top - i,
                                right: s.right - n,
                                bottom: s.bottom - i
                            }
                        }
                    r = t || "fixed" === o.position ? null : (i = r).parentElement || i.getRootNode().host || null
                }
                var i
            }
            , Tr = ["block", "break", "cursor", "inline", "scroll", "text"]
            , jr = (t, e, n) => {
                const s = new $e;
                return Tr.forEach((t => {
                    const n = e.query(t);
                    n && s.register(n)
                }
                )),
                    t.forEach((t => {
                        let r = e.query(t);
                        r || n.error(`Cannot register "${t}" specified in "formats" config. Are you sure it was registered?`);
                        let i = 0;
                        for (; r;)
                            if (s.register(r),
                                r = "blotName" in r ? r.requiredContainer ?? null : null,
                                i += 1,
                                i > 100) {
                                n.error(`Cycle detected in registering blot requiredContainer: "${t}"`);
                                break
                            }
                    }
                    )),
                    s
            }
            , Cr = or("quill")
            , Rr = new $e;
        sn.uiClass = "ql-ui";
        class Ir {
            static DEFAULTS = {
                bounds: null,
                modules: {
                    clipboard: !0,
                    keyboard: !0,
                    history: !0,
                    uploader: !0
                },
                placeholder: "",
                readOnly: !1,
                registry: Rr,
                theme: "default"
            };
            static events = ar.events;
            static sources = ar.sources;
            static version = "2.0.3";
            static imports = {
                delta: bn,
                parchment: s,
                "core/module": Nr,
                "core/theme": kr
            };
            static debug(t) {
                !0 === t && (t = "log"),
                    or.level(t)
            }
            static find(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return er.get(t) || Rr.find(t, e)
            }
            static import(t) {
                return null == this.imports[t] && Cr.error(`Cannot import ${t}. Are you sure it was registered?`),
                    this.imports[t]
            }
            static register() {
                if ("string" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    const t = arguments.length <= 0 ? void 0 : arguments[0]
                        , e = !!(arguments.length <= 1 ? void 0 : arguments[1])
                        , n = "attrName" in t ? t.attrName : t.blotName;
                    "string" == typeof n ? this.register(`formats/${n}`, t, e) : Object.keys(t).forEach((n => {
                        this.register(n, t[n], e)
                    }
                    ))
                } else {
                    const t = arguments.length <= 0 ? void 0 : arguments[0]
                        , e = arguments.length <= 1 ? void 0 : arguments[1]
                        , n = !!(arguments.length <= 2 ? void 0 : arguments[2]);
                    null == this.imports[t] || n || Cr.warn(`Overwriting ${t} with`, e),
                        this.imports[t] = e,
                        (t.startsWith("blots/") || t.startsWith("formats/")) && e && "boolean" != typeof e && "abstract" !== e.blotName && Rr.register(e),
                        "function" == typeof e.register && e.register(Rr)
                }
            }
            constructor(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this.options = function (t, e) {
                    const n = Mr(t);
                    if (!n)
                        throw new Error("Invalid Quill container");
                    const s = !e.theme || e.theme === Ir.DEFAULTS.theme
                        , r = s ? kr : Ir.import(`themes/${e.theme}`);
                    if (!r)
                        throw new Error(`Invalid theme ${e.theme}. Did you register it?`);
                    const { modules: i, ...o } = Ir.DEFAULTS
                        , { modules: l, ...a } = r.DEFAULTS;
                    let c = Br(e.modules);
                    null != c && c.toolbar && c.toolbar.constructor !== Object && (c = {
                        ...c,
                        toolbar: {
                            container: c.toolbar
                        }
                    });
                    const u = Ue({}, Br(i), Br(l), c)
                        , h = {
                            ...o,
                            ...Dr(a),
                            ...Dr(e)
                        };
                    let d = e.registry;
                    d ? e.formats && Cr.warn('Ignoring "formats" option because "registry" is specified') : d = e.formats ? jr(e.formats, h.registry, Cr) : h.registry;
                    return {
                        ...h,
                        registry: d,
                        container: n,
                        theme: r,
                        modules: Object.entries(u).reduce(((t, e) => {
                            let [n, s] = e;
                            if (!s)
                                return t;
                            const r = Ir.import(`modules/${n}`);
                            return null == r ? (Cr.error(`Cannot load ${n} module. Are you sure you registered it?`),
                                t) : {
                                ...t,
                                [n]: Ue({}, r.DEFAULTS || {}, s)
                            }
                        }
                        ), {}),
                        bounds: Mr(h.bounds)
                    }
                }(t, e),
                    this.container = this.options.container,
                    null == this.container)
                    return void Cr.error("Invalid Quill container", t);
                this.options.debug && Ir.debug(this.options.debug);
                const n = this.container.innerHTML.trim();
                this.container.classList.add("ql-container"),
                    this.container.innerHTML = "",
                    er.set(this.container, this),
                    this.root = this.addContainer("ql-editor"),
                    this.root.classList.add("ql-blank"),
                    this.emitter = new ar;
                const s = pn.blotName
                    , r = this.options.registry.query(s);
                if (!r || !("blotName" in r))
                    throw new Error(`Cannot initialize Quill without "${s}" blot`);
                if (this.scroll = new r(this.options.registry, this.root, {
                    emitter: this.emitter
                }),
                    this.editor = new xr(this.scroll),
                    this.selection = new dr(this.scroll, this.emitter),
                    this.composition = new Ar(this.scroll, this.emitter),
                    this.theme = new this.options.theme(this, this.options),
                    this.keyboard = this.theme.addModule("keyboard"),
                    this.clipboard = this.theme.addModule("clipboard"),
                    this.history = this.theme.addModule("history"),
                    this.uploader = this.theme.addModule("uploader"),
                    this.theme.addModule("input"),
                    this.theme.addModule("uiNode"),
                    this.theme.init(),
                    this.emitter.on(ar.events.EDITOR_CHANGE, (t => {
                        t === ar.events.TEXT_CHANGE && this.root.classList.toggle("ql-blank", this.editor.isBlank())
                    }
                    )),
                    this.emitter.on(ar.events.SCROLL_UPDATE, ((t, e) => {
                        const n = this.selection.lastRange
                            , [s] = this.selection.getRange()
                            , r = n && s ? {
                                oldRange: n,
                                newRange: s
                            } : void 0;
                        Ur.call(this, (() => this.editor.update(null, e, r)), t)
                    }
                    )),
                    this.emitter.on(ar.events.SCROLL_EMBED_UPDATE, ((t, e) => {
                        const n = this.selection.lastRange
                            , [s] = this.selection.getRange()
                            , r = n && s ? {
                                oldRange: n,
                                newRange: s
                            } : void 0;
                        Ur.call(this, (() => {
                            const n = (new bn).retain(t.offset(this)).retain({
                                [t.statics.blotName]: e
                            });
                            return this.editor.update(n, [], r)
                        }
                        ), Ir.sources.USER)
                    }
                    )),
                    n) {
                    const t = this.clipboard.convert({
                        html: `${n}<p><br></p>`,
                        text: "\n"
                    });
                    this.setContents(t)
                }
                this.history.clear(),
                    this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder),
                    this.options.readOnly && this.disable(),
                    this.allowReadOnlyEdits = !1
            }
            addContainer(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ("string" == typeof t) {
                    const e = t;
                    (t = document.createElement("div")).classList.add(e)
                }
                return this.container.insertBefore(t, e),
                    t
            }
            blur() {
                this.selection.setRange(null)
            }
            deleteText(t, e, n) {
                return [t, e, , n] = Pr(t, e, n),
                    Ur.call(this, (() => this.editor.deleteText(t, e)), n, t, -1 * e)
            }
            disable() {
                this.enable(!1)
            }
            editReadOnly(t) {
                this.allowReadOnlyEdits = !0;
                const e = t();
                return this.allowReadOnlyEdits = !1,
                    e
            }
            enable() {
                let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.scroll.enable(t),
                    this.container.classList.toggle("ql-disabled", !t)
            }
            focus() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.selection.focus(),
                    t.preventScroll || this.scrollSelectionIntoView()
            }
            format(t, e) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ar.sources.API;
                return Ur.call(this, (() => {
                    const n = this.getSelection(!0);
                    let s = new bn;
                    if (null == n)
                        return s;
                    if (this.scroll.query(t, Pe.BLOCK))
                        s = this.editor.formatLine(n.index, n.length, {
                            [t]: e
                        });
                    else {
                        if (0 === n.length)
                            return this.selection.format(t, e),
                                s;
                        s = this.editor.formatText(n.index, n.length, {
                            [t]: e
                        })
                    }
                    return this.setSelection(n, ar.sources.SILENT),
                        s
                }
                ), n)
            }
            formatLine(t, e, n, s, r) {
                let i;
                return [t, e, i, r] = Pr(t, e, n, s, r),
                    Ur.call(this, (() => this.editor.formatLine(t, e, i)), r, t, 0)
            }
            formatText(t, e, n, s, r) {
                let i;
                return [t, e, i, r] = Pr(t, e, n, s, r),
                    Ur.call(this, (() => this.editor.formatText(t, e, i)), r, t, 0)
            }
            getBounds(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                    , n = null;
                if (n = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length),
                    !n)
                    return null;
                const s = this.container.getBoundingClientRect();
                return {
                    bottom: n.bottom - s.top,
                    height: n.height,
                    left: n.left - s.left,
                    right: n.right - s.left,
                    top: n.top - s.top,
                    width: n.width
                }
            }
            getContents() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t;
                return [t, e] = Pr(t, e),
                    this.editor.getContents(t, e)
            }
            getFormat() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0)
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length)
            }
            getIndex(t) {
                return t.offset(this.scroll)
            }
            getLength() {
                return this.scroll.length()
            }
            getLeaf(t) {
                return this.scroll.leaf(t)
            }
            getLine(t) {
                return this.scroll.line(t)
            }
            getLines() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e)
            }
            getModule(t) {
                return this.theme.modules[t]
            }
            getSelection() {
                return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(),
                    this.update(),
                    this.selection.getRange()[0]
            }
            getSemanticHTML() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , e = arguments.length > 1 ? arguments[1] : void 0;
                return "number" == typeof t && (e = e ?? this.getLength() - t),
                    [t, e] = Pr(t, e),
                    this.editor.getHTML(t, e)
            }
            getText() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , e = arguments.length > 1 ? arguments[1] : void 0;
                return "number" == typeof t && (e = e ?? this.getLength() - t),
                    [t, e] = Pr(t, e),
                    this.editor.getText(t, e)
            }
            hasFocus() {
                return this.selection.hasFocus()
            }
            insertEmbed(t, e, n) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ir.sources.API;
                return Ur.call(this, (() => this.editor.insertEmbed(t, e, n)), s, t)
            }
            insertText(t, e, n, s, r) {
                let i;
                return [t, , i, r] = Pr(t, 0, n, s, r),
                    Ur.call(this, (() => this.editor.insertText(t, e, i)), r, t, e.length)
            }
            isEnabled() {
                return this.scroll.isEnabled()
            }
            off() {
                return this.emitter.off(...arguments)
            }
            on() {
                return this.emitter.on(...arguments)
            }
            once() {
                return this.emitter.once(...arguments)
            }
            removeFormat(t, e, n) {
                return [t, e, , n] = Pr(t, e, n),
                    Ur.call(this, (() => this.editor.removeFormat(t, e)), n, t)
            }
            scrollRectIntoView(t) {
                Sr(this.root, t)
            }
            scrollIntoView() {
                console.warn("Quill#scrollIntoView() has been deprecated and will be removed in the near future. Please use Quill#scrollSelectionIntoView() instead."),
                    this.scrollSelectionIntoView()
            }
            scrollSelectionIntoView() {
                const t = this.selection.lastRange
                    , e = t && this.selection.getBounds(t.index, t.length);
                e && this.scrollRectIntoView(e)
            }
            setContents(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ar.sources.API;
                return Ur.call(this, (() => {
                    t = new bn(t);
                    const e = this.getLength()
                        , n = this.editor.deleteText(0, e)
                        , s = this.editor.insertContents(0, t)
                        , r = this.editor.deleteText(this.getLength() - 1, 1);
                    return n.compose(s).compose(r)
                }
                ), e)
            }
            setSelection(t, e, n) {
                null == t ? this.selection.setRange(null, e || Ir.sources.API) : ([t, e, , n] = Pr(t, e, n),
                    this.selection.setRange(new ur(Math.max(0, t), e), n),
                    n !== ar.sources.SILENT && this.scrollSelectionIntoView())
            }
            setText(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ar.sources.API;
                const n = (new bn).insert(t);
                return this.setContents(n, e)
            }
            update() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ar.sources.USER;
                const e = this.scroll.update(t);
                return this.selection.update(t),
                    e
            }
            updateContents(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ar.sources.API;
                return Ur.call(this, (() => (t = new bn(t),
                    this.editor.applyDelta(t))), e, !0)
            }
        }
        function Mr(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }
        function Br(t) {
            return Object.entries(t ?? {}).reduce(((t, e) => {
                let [n, s] = e;
                return {
                    ...t,
                    [n]: !0 === s ? {} : s
                }
            }
            ), {})
        }
        function Dr(t) {
            return Object.fromEntries(Object.entries(t).filter((t => void 0 !== t[1])))
        }
        function Ur(t, e, n, s) {
            if (!this.isEnabled() && e === ar.sources.USER && !this.allowReadOnlyEdits)
                return new bn;
            let r = null == n ? null : this.getSelection();
            const i = this.editor.delta
                , o = t();
            if (null != r && (!0 === n && (n = r.index),
                null == s ? r = zr(r, o, e) : 0 !== s && (r = zr(r, n, s, e)),
                this.setSelection(r, ar.sources.SILENT)),
                o.length() > 0) {
                const t = [ar.events.TEXT_CHANGE, o, i, e];
                this.emitter.emit(ar.events.EDITOR_CHANGE, ...t),
                    e !== ar.sources.SILENT && this.emitter.emit(...t)
            }
            return o
        }
        function Pr(t, e, n, s, r) {
            let i = {};
            return "number" == typeof t.index && "number" == typeof t.length ? "number" != typeof e ? (r = s,
                s = n,
                n = e,
                e = t.length,
                t = t.index) : (e = t.length,
                    t = t.index) : "number" != typeof e && (r = s,
                        s = n,
                        n = e,
                        e = 0),
                "object" == typeof n ? (i = n,
                    r = s) : "string" == typeof n && (null != s ? i[n] = s : r = n),
                [t, e, i, r = r || ar.sources.API]
        }
        function zr(t, e, n, s) {
            const r = "number" == typeof n ? n : 0;
            if (null == t)
                return null;
            let i, o;
            return e && "function" == typeof e.transformPosition ? [i, o] = [t.index, t.index + t.length].map((t => e.transformPosition(t, s !== ar.sources.USER))) : [i, o] = [t.index, t.index + t.length].map((t => t < e || t === e && s === ar.sources.USER ? t : r >= 0 ? t + r : Math.max(e, t + r))),
                new ur(i, o - i)
        }
        const Fr = class extends un {
        }
            ;
        function Hr(t) {
            return t instanceof Zs || t instanceof Gs
        }
        function $r(t) {
            return "function" == typeof t.updateContent
        }
        function Vr(t, e, n) {
            n.reduce(((e, n) => {
                const s = bn.Op.length(n);
                let r = n.attributes || {};
                if (null != n.insert)
                    if ("string" == typeof n.insert) {
                        const s = n.insert;
                        t.insertAt(e, s);
                        const [i] = t.descendant(Je, e)
                            , o = Ys(i);
                        r = bn.AttributeMap.diff(o, r) || {}
                    } else if ("object" == typeof n.insert) {
                        const s = Object.keys(n.insert)[0];
                        if (null == s)
                            return e;
                        t.insertAt(e, s, n.insert[s]);
                        if (null != t.scroll.query(s, Pe.INLINE)) {
                            const [n] = t.descendant(Je, e)
                                , s = Ys(n);
                            r = bn.AttributeMap.diff(s, r) || {}
                        }
                    }
                return Object.keys(r).forEach((n => {
                    t.formatAt(e, s, n, r[n])
                }
                )),
                    e + s
            }
            ), e)
        }
        const Kr = class extends pn {
            static blotName = "scroll";
            static className = "ql-editor";
            static tagName = "DIV";
            static defaultChild = Zs;
            static allowedChildren = [Zs, Gs, Fr];
            constructor(t, e, n) {
                let { emitter: s } = n;
                super(t, e),
                    this.emitter = s,
                    this.batch = !1,
                    this.optimize(),
                    this.enable(),
                    this.domNode.addEventListener("dragstart", (t => this.handleDragStart(t)))
            }
            batchStart() {
                Array.isArray(this.batch) || (this.batch = [])
            }
            batchEnd() {
                if (!this.batch)
                    return;
                const t = this.batch;
                this.batch = !1,
                    this.update(t)
            }
            emitMount(t) {
                this.emitter.emit(ar.events.SCROLL_BLOT_MOUNT, t)
            }
            emitUnmount(t) {
                this.emitter.emit(ar.events.SCROLL_BLOT_UNMOUNT, t)
            }
            emitEmbedUpdate(t, e) {
                this.emitter.emit(ar.events.SCROLL_EMBED_UPDATE, t, e)
            }
            deleteAt(t, e) {
                const [n, s] = this.line(t)
                    , [r] = this.line(t + e);
                if (super.deleteAt(t, e),
                    null != r && n !== r && s > 0) {
                    if (n instanceof Gs || r instanceof Gs)
                        return void this.optimize();
                    const t = r.children.head instanceof Fs ? null : r.children.head;
                    n.moveChildren(r, t),
                        n.remove()
                }
                this.optimize()
            }
            enable() {
                let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.domNode.setAttribute("contenteditable", t ? "true" : "false")
            }
            formatAt(t, e, n, s) {
                super.formatAt(t, e, n, s),
                    this.optimize()
            }
            insertAt(t, e, n) {
                if (t >= this.length())
                    if (null == n || null == this.scroll.query(e, Pe.BLOCK)) {
                        const t = this.scroll.create(this.statics.defaultChild.blotName);
                        this.appendChild(t),
                            null == n && e.endsWith("\n") ? t.insertAt(0, e.slice(0, -1), n) : t.insertAt(0, e, n)
                    } else {
                        const t = this.scroll.create(e, n);
                        this.appendChild(t)
                    }
                else
                    super.insertAt(t, e, n);
                this.optimize()
            }
            insertBefore(t, e) {
                if (t.statics.scope === Pe.INLINE_BLOT) {
                    const n = this.scroll.create(this.statics.defaultChild.blotName);
                    n.appendChild(t),
                        super.insertBefore(n, e)
                } else
                    super.insertBefore(t, e)
            }
            insertContents(t, e) {
                const n = this.deltaToRenderBlocks(e.concat((new bn).insert("\n")))
                    , s = n.pop();
                if (null == s)
                    return;
                this.batchStart();
                const r = n.shift();
                if (r) {
                    const e = "block" === r.type && (0 === r.delta.length() || !this.descendant(Gs, t)[0] && t < this.length())
                        , n = "block" === r.type ? r.delta : (new bn).insert({
                            [r.key]: r.value
                        });
                    Vr(this, t, n);
                    const s = "block" === r.type ? 1 : 0
                        , i = t + n.length() + s;
                    e && this.insertAt(i - 1, "\n");
                    const o = Ys(this.line(t)[0])
                        , l = bn.AttributeMap.diff(o, r.attributes) || {};
                    Object.keys(l).forEach((t => {
                        this.formatAt(i - 1, 1, t, l[t])
                    }
                    )),
                        t = i
                }
                let [i, o] = this.children.find(t);
                if (n.length && (i && (i = i.split(o),
                    o = 0),
                    n.forEach((t => {
                        if ("block" === t.type) {
                            Vr(this.createBlock(t.attributes, i || void 0), 0, t.delta)
                        } else {
                            const e = this.create(t.key, t.value);
                            this.insertBefore(e, i || void 0),
                                Object.keys(t.attributes).forEach((n => {
                                    e.format(n, t.attributes[n])
                                }
                                ))
                        }
                    }
                    ))),
                    "block" === s.type && s.delta.length()) {
                    Vr(this, i ? i.offset(i.scroll) + o : this.length(), s.delta)
                }
                this.batchEnd(),
                    this.optimize()
            }
            isEnabled() {
                return "true" === this.domNode.getAttribute("contenteditable")
            }
            leaf(t) {
                const e = this.path(t).pop();
                if (!e)
                    return [null, -1];
                const [n, s] = e;
                return n instanceof Je ? [n, s] : [null, -1]
            }
            line(t) {
                return t === this.length() ? this.line(t - 1) : this.descendant(Hr, t)
            }
            lines() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
                const n = (t, e, s) => {
                    let r = []
                        , i = s;
                    return t.children.forEachAt(e, s, ((t, e, s) => {
                        Hr(t) ? r.push(t) : t instanceof un && (r = r.concat(n(t, e, i))),
                            i -= s
                    }
                    )),
                        r
                }
                    ;
                return n(this, t, e)
            }
            optimize() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.batch || (super.optimize(t, e),
                    t.length > 0 && this.emitter.emit(ar.events.SCROLL_OPTIMIZE, t, e))
            }
            path(t) {
                return super.path(t).slice(1)
            }
            remove() { }
            update(t) {
                if (this.batch)
                    return void (Array.isArray(t) && (this.batch = this.batch.concat(t)));
                let e = ar.sources.USER;
                "string" == typeof t && (e = t),
                    Array.isArray(t) || (t = this.observer.takeRecords()),
                    (t = t.filter((t => {
                        let { target: e } = t;
                        const n = this.find(e, !0);
                        return n && !$r(n)
                    }
                    ))).length > 0 && this.emitter.emit(ar.events.SCROLL_BEFORE_UPDATE, e, t),
                    super.update(t.concat([])),
                    t.length > 0 && this.emitter.emit(ar.events.SCROLL_UPDATE, e, t)
            }
            updateEmbedAt(t, e, n) {
                const [s] = this.descendant((t => t instanceof Gs), t);
                s && s.statics.blotName === e && $r(s) && s.updateContent(n)
            }
            handleDragStart(t) {
                t.preventDefault()
            }
            deltaToRenderBlocks(t) {
                const e = [];
                let n = new bn;
                return t.forEach((t => {
                    const s = t?.insert;
                    if (s)
                        if ("string" == typeof s) {
                            const r = s.split("\n");
                            r.slice(0, -1).forEach((s => {
                                n.insert(s, t.attributes),
                                    e.push({
                                        type: "block",
                                        delta: n,
                                        attributes: t.attributes ?? {}
                                    }),
                                    n = new bn
                            }
                            ));
                            const i = r[r.length - 1];
                            i && n.insert(i, t.attributes)
                        } else {
                            const r = Object.keys(s)[0];
                            if (!r)
                                return;
                            this.query(r, Pe.INLINE) ? n.push(t) : (n.length() && e.push({
                                type: "block",
                                delta: n,
                                attributes: {}
                            }),
                                n = new bn,
                                e.push({
                                    type: "blockEmbed",
                                    key: r,
                                    value: s[r],
                                    attributes: t.attributes ?? {}
                                }))
                        }
                }
                )),
                    n.length() && e.push({
                        type: "block",
                        delta: n,
                        attributes: {}
                    }),
                    e
            }
            createBlock(t, e) {
                let n;
                const s = {};
                Object.entries(t).forEach((t => {
                    let [e, r] = t;
                    null != this.query(e, Pe.BLOCK & Pe.BLOT) ? n = e : s[e] = r
                }
                ));
                const r = this.create(n || this.statics.defaultChild.blotName, n ? t[n] : void 0);
                this.insertBefore(r, e || void 0);
                const i = r.length();
                return Object.entries(s).forEach((t => {
                    let [e, n] = t;
                    r.formatAt(0, i, e, n)
                }
                )),
                    r
            }
        }
            , Wr = {
                scope: Pe.BLOCK,
                whitelist: ["right", "center", "justify"]
            }
            , Zr = new ze("align", "align", Wr)
            , Gr = new Ke("align", "ql-align", Wr)
            , Xr = new Ze("align", "text-align", Wr);
        class Yr extends Ze {
            value(t) {
                let e = super.value(t);
                if (!e.startsWith("rgb("))
                    return e;
                e = e.replace(/^[^\d]+/, "").replace(/[^\d]+$/, "");
                return `#${e.split(",").map((t => `00${parseInt(t, 10).toString(16)}`.slice(-2))).join("")}`
            }
        }
        const Qr = new Ke("color", "ql-color", {
            scope: Pe.INLINE
        })
            , Jr = new Yr("color", "color", {
                scope: Pe.INLINE
            })
            , ti = new Ke("background", "ql-bg", {
                scope: Pe.INLINE
            })
            , ei = new Yr("background", "background-color", {
                scope: Pe.INLINE
            });
        class ni extends Fr {
            static create(t) {
                const e = super.create(t);
                return e.setAttribute("spellcheck", "false"),
                    e
            }
            code(t, e) {
                return this.children.map((t => t.length() <= 1 ? "" : t.domNode.innerText)).join("\n").slice(t, t + e)
            }
            html(t, e) {
                return `<pre>\n${Vs(this.code(t, e))}\n</pre>`
            }
        }
        class si extends Zs {
            static TAB = "  ";
            static register() {
                Ir.register(ni)
            }
        }
        class ri extends Ws {
        }
        ri.blotName = "code",
            ri.tagName = "CODE",
            si.blotName = "code-block",
            si.className = "ql-code-block",
            si.tagName = "DIV",
            ni.blotName = "code-block-container",
            ni.className = "ql-code-block-container",
            ni.tagName = "DIV",
            ni.allowedChildren = [si],
            si.allowedChildren = [Hs, Fs, Js],
            si.requiredContainer = ni;
        const ii = {
            scope: Pe.BLOCK,
            whitelist: ["rtl"]
        }
            , oi = new ze("direction", "dir", ii)
            , li = new Ke("direction", "ql-direction", ii)
            , ai = new Ze("direction", "direction", ii)
            , ci = {
                scope: Pe.INLINE,
                whitelist: ["serif", "monospace"]
            }
            , ui = new Ke("font", "ql-font", ci);
        const hi = new class extends Ze {
            value(t) {
                return super.value(t).replace(/["']/g, "")
            }
        }
            ("font", "font-family", ci)
            , di = new Ke("size", "ql-size", {
                scope: Pe.INLINE,
                whitelist: ["small", "large", "huge"]
            })
            , fi = new Ze("size", "font-size", {
                scope: Pe.INLINE,
                whitelist: ["10px", "18px", "32px"]
            })
            , pi = or("quill:keyboard")
            , gi = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey";
        class mi extends Nr {
            static match(t, e) {
                return !["altKey", "ctrlKey", "metaKey", "shiftKey"].some((n => !!e[n] !== t[n] && null !== e[n])) && (e.key === t.key || e.key === t.which)
            }
            constructor(t, e) {
                super(t, e),
                    this.bindings = {},
                    Object.keys(this.options.bindings).forEach((t => {
                        this.options.bindings[t] && this.addBinding(this.options.bindings[t])
                    }
                    )),
                    this.addBinding({
                        key: "Enter",
                        shiftKey: null
                    }, this.handleEnter),
                    this.addBinding({
                        key: "Enter",
                        metaKey: null,
                        ctrlKey: null,
                        altKey: null
                    }, (() => { }
                    )),
                    /Firefox/i.test(navigator.userAgent) ? (this.addBinding({
                        key: "Backspace"
                    }, {
                        collapsed: !0
                    }, this.handleBackspace),
                        this.addBinding({
                            key: "Delete"
                        }, {
                            collapsed: !0
                        }, this.handleDelete)) : (this.addBinding({
                            key: "Backspace"
                        }, {
                            collapsed: !0,
                            prefix: /^.?$/
                        }, this.handleBackspace),
                            this.addBinding({
                                key: "Delete"
                            }, {
                                collapsed: !0,
                                suffix: /^.?$/
                            }, this.handleDelete)),
                    this.addBinding({
                        key: "Backspace"
                    }, {
                        collapsed: !1
                    }, this.handleDeleteRange),
                    this.addBinding({
                        key: "Delete"
                    }, {
                        collapsed: !1
                    }, this.handleDeleteRange),
                    this.addBinding({
                        key: "Backspace",
                        altKey: null,
                        ctrlKey: null,
                        metaKey: null,
                        shiftKey: null
                    }, {
                        collapsed: !0,
                        offset: 0
                    }, this.handleBackspace),
                    this.listen()
            }
            addBinding(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const s = function (t) {
                    if ("string" == typeof t || "number" == typeof t)
                        t = {
                            key: t
                        };
                    else {
                        if ("object" != typeof t)
                            return null;
                        t = vs(t)
                    }
                    t.shortKey && (t[gi] = t.shortKey,
                        delete t.shortKey);
                    return t
                }(t);
                if (null == s)
                    return void pi.warn("Attempted to add invalid keyboard binding", s);
                "function" == typeof e && (e = {
                    handler: e
                }),
                    "function" == typeof n && (n = {
                        handler: n
                    });
                (Array.isArray(s.key) ? s.key : [s.key]).forEach((t => {
                    const r = {
                        ...s,
                        key: t,
                        ...e,
                        ...n
                    };
                    this.bindings[r.key] = this.bindings[r.key] || [],
                        this.bindings[r.key].push(r)
                }
                ))
            }
            listen() {
                this.quill.root.addEventListener("keydown", (t => {
                    if (t.defaultPrevented || t.isComposing)
                        return;
                    if (229 === t.keyCode && ("Enter" === t.key || "Backspace" === t.key))
                        return;
                    const e = (this.bindings[t.key] || []).concat(this.bindings[t.which] || []).filter((e => mi.match(t, e)));
                    if (0 === e.length)
                        return;
                    const n = Ir.find(t.target, !0);
                    if (n && n.scroll !== this.quill.scroll)
                        return;
                    const s = this.quill.getSelection();
                    if (null == s || !this.quill.hasFocus())
                        return;
                    const [r, i] = this.quill.getLine(s.index)
                        , [o, l] = this.quill.getLeaf(s.index)
                        , [a, c] = 0 === s.length ? [o, l] : this.quill.getLeaf(s.index + s.length)
                        , u = o instanceof mn ? o.value().slice(0, l) : ""
                        , h = a instanceof mn ? a.value().slice(c) : ""
                        , d = {
                            collapsed: 0 === s.length,
                            empty: 0 === s.length && r.length() <= 1,
                            format: this.quill.getFormat(s),
                            line: r,
                            offset: i,
                            prefix: u,
                            suffix: h,
                            event: t
                        };
                    e.some((t => {
                        if (null != t.collapsed && t.collapsed !== d.collapsed)
                            return !1;
                        if (null != t.empty && t.empty !== d.empty)
                            return !1;
                        if (null != t.offset && t.offset !== d.offset)
                            return !1;
                        if (Array.isArray(t.format)) {
                            if (t.format.every((t => null == d.format[t])))
                                return !1
                        } else if ("object" == typeof t.format && !Object.keys(t.format).every((e => !0 === t.format[e] ? null != d.format[e] : !1 === t.format[e] ? null == d.format[e] : Ps(t.format[e], d.format[e]))))
                            return !1;
                        return !(null != t.prefix && !t.prefix.test(d.prefix)) && (!(null != t.suffix && !t.suffix.test(d.suffix)) && !0 !== t.handler.call(this, s, d, t))
                    }
                    )) && t.preventDefault()
                }
                ))
            }
            handleBackspace(t, e) {
                const n = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1;
                if (0 === t.index || this.quill.getLength() <= 1)
                    return;
                let s = {};
                const [r] = this.quill.getLine(t.index);
                let i = (new bn).retain(t.index - n).delete(n);
                if (0 === e.offset) {
                    const [e] = this.quill.getLine(t.index - 1);
                    if (e) {
                        if (!("block" === e.statics.blotName && e.length() <= 1)) {
                            const e = r.formats()
                                , n = this.quill.getFormat(t.index - 1, 1);
                            if (s = bn.AttributeMap.diff(e, n) || {},
                                Object.keys(s).length > 0) {
                                const e = (new bn).retain(t.index + r.length() - 2).retain(1, s);
                                i = i.compose(e)
                            }
                        }
                    }
                }
                this.quill.updateContents(i, Ir.sources.USER),
                    this.quill.focus()
            }
            handleDelete(t, e) {
                const n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
                if (t.index >= this.quill.getLength() - n)
                    return;
                let s = {};
                const [r] = this.quill.getLine(t.index);
                let i = (new bn).retain(t.index).delete(n);
                if (e.offset >= r.length() - 1) {
                    const [e] = this.quill.getLine(t.index + 1);
                    if (e) {
                        const n = r.formats()
                            , o = this.quill.getFormat(t.index, 1);
                        s = bn.AttributeMap.diff(n, o) || {},
                            Object.keys(s).length > 0 && (i = i.retain(e.length() - 1).retain(1, s))
                    }
                }
                this.quill.updateContents(i, Ir.sources.USER),
                    this.quill.focus()
            }
            handleDeleteRange(t) {
                Ei({
                    range: t,
                    quill: this.quill
                }),
                    this.quill.focus()
            }
            handleEnter(t, e) {
                const n = Object.keys(e.format).reduce(((t, n) => (this.quill.scroll.query(n, Pe.BLOCK) && !Array.isArray(e.format[n]) && (t[n] = e.format[n]),
                    t)), {})
                    , s = (new bn).retain(t.index).delete(t.length).insert("\n", n);
                this.quill.updateContents(s, Ir.sources.USER),
                    this.quill.setSelection(t.index + 1, Ir.sources.SILENT),
                    this.quill.focus()
            }
        }
        const bi = {
            bindings: {
                bold: xi("bold"),
                italic: xi("italic"),
                underline: xi("underline"),
                indent: {
                    key: "Tab",
                    format: ["blockquote", "indent", "list"],
                    handler(t, e) {
                        return !(!e.collapsed || 0 === e.offset) || (this.quill.format("indent", "+1", Ir.sources.USER),
                            !1)
                    }
                },
                outdent: {
                    key: "Tab",
                    shiftKey: !0,
                    format: ["blockquote", "indent", "list"],
                    handler(t, e) {
                        return !(!e.collapsed || 0 === e.offset) || (this.quill.format("indent", "-1", Ir.sources.USER),
                            !1)
                    }
                },
                "outdent backspace": {
                    key: "Backspace",
                    collapsed: !0,
                    shiftKey: null,
                    metaKey: null,
                    ctrlKey: null,
                    altKey: null,
                    format: ["indent", "list"],
                    offset: 0,
                    handler(t, e) {
                        null != e.format.indent ? this.quill.format("indent", "-1", Ir.sources.USER) : null != e.format.list && this.quill.format("list", !1, Ir.sources.USER)
                    }
                },
                "indent code-block": yi(!0),
                "outdent code-block": yi(!1),
                "remove tab": {
                    key: "Tab",
                    shiftKey: !0,
                    collapsed: !0,
                    prefix: /\t$/,
                    handler(t) {
                        this.quill.deleteText(t.index - 1, 1, Ir.sources.USER)
                    }
                },
                tab: {
                    key: "Tab",
                    handler(t, e) {
                        if (e.format.table)
                            return !0;
                        this.quill.history.cutoff();
                        const n = (new bn).retain(t.index).delete(t.length).insert("\t");
                        return this.quill.updateContents(n, Ir.sources.USER),
                            this.quill.history.cutoff(),
                            this.quill.setSelection(t.index + 1, Ir.sources.SILENT),
                            !1
                    }
                },
                "blockquote empty enter": {
                    key: "Enter",
                    collapsed: !0,
                    format: ["blockquote"],
                    empty: !0,
                    handler() {
                        this.quill.format("blockquote", !1, Ir.sources.USER)
                    }
                },
                "list empty enter": {
                    key: "Enter",
                    collapsed: !0,
                    format: ["list"],
                    empty: !0,
                    handler(t, e) {
                        const n = {
                            list: !1
                        };
                        e.format.indent && (n.indent = !1),
                            this.quill.formatLine(t.index, t.length, n, Ir.sources.USER)
                    }
                },
                "checklist enter": {
                    key: "Enter",
                    collapsed: !0,
                    format: {
                        list: "checked"
                    },
                    handler(t) {
                        const [e, n] = this.quill.getLine(t.index)
                            , s = {
                                ...e.formats(),
                                list: "checked"
                            }
                            , r = (new bn).retain(t.index).insert("\n", s).retain(e.length() - n - 1).retain(1, {
                                list: "unchecked"
                            });
                        this.quill.updateContents(r, Ir.sources.USER),
                            this.quill.setSelection(t.index + 1, Ir.sources.SILENT),
                            this.quill.scrollSelectionIntoView()
                    }
                },
                "header enter": {
                    key: "Enter",
                    collapsed: !0,
                    format: ["header"],
                    suffix: /^$/,
                    handler(t, e) {
                        const [n, s] = this.quill.getLine(t.index)
                            , r = (new bn).retain(t.index).insert("\n", e.format).retain(n.length() - s - 1).retain(1, {
                                header: null
                            });
                        this.quill.updateContents(r, Ir.sources.USER),
                            this.quill.setSelection(t.index + 1, Ir.sources.SILENT),
                            this.quill.scrollSelectionIntoView()
                    }
                },
                "table backspace": {
                    key: "Backspace",
                    format: ["table"],
                    collapsed: !0,
                    offset: 0,
                    handler() { }
                },
                "table delete": {
                    key: "Delete",
                    format: ["table"],
                    collapsed: !0,
                    suffix: /^$/,
                    handler() { }
                },
                "table enter": {
                    key: "Enter",
                    shiftKey: null,
                    format: ["table"],
                    handler(t) {
                        const e = this.quill.getModule("table");
                        if (e) {
                            const [n, s, r, i] = e.getTable(t)
                                , o = function (t, e, n, s) {
                                    if (null == e.prev && null == e.next)
                                        return null == n.prev && null == n.next ? 0 === s ? -1 : 1 : null == n.prev ? -1 : 1;
                                    if (null == e.prev)
                                        return -1;
                                    if (null == e.next)
                                        return 1;
                                    return null
                                }(0, s, r, i);
                            if (null == o)
                                return;
                            let l = n.offset();
                            if (o < 0) {
                                const e = (new bn).retain(l).insert("\n");
                                this.quill.updateContents(e, Ir.sources.USER),
                                    this.quill.setSelection(t.index + 1, t.length, Ir.sources.SILENT)
                            } else if (o > 0) {
                                l += n.length();
                                const t = (new bn).retain(l).insert("\n");
                                this.quill.updateContents(t, Ir.sources.USER),
                                    this.quill.setSelection(l, Ir.sources.USER)
                            }
                        }
                    }
                },
                "table tab": {
                    key: "Tab",
                    shiftKey: null,
                    format: ["table"],
                    handler(t, e) {
                        const { event: n, line: s } = e
                            , r = s.offset(this.quill.scroll);
                        n.shiftKey ? this.quill.setSelection(r - 1, Ir.sources.USER) : this.quill.setSelection(r + s.length(), Ir.sources.USER)
                    }
                },
                "list autofill": {
                    key: " ",
                    shiftKey: null,
                    collapsed: !0,
                    format: {
                        "code-block": !1,
                        blockquote: !1,
                        table: !1
                    },
                    prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                    handler(t, e) {
                        if (null == this.quill.scroll.query("list"))
                            return !0;
                        const { length: n } = e.prefix
                            , [s, r] = this.quill.getLine(t.index);
                        if (r > n)
                            return !0;
                        let i;
                        switch (e.prefix.trim()) {
                            case "[]":
                            case "[ ]":
                                i = "unchecked";
                                break;
                            case "[x]":
                                i = "checked";
                                break;
                            case "-":
                            case "*":
                                i = "bullet";
                                break;
                            default:
                                i = "ordered"
                        }
                        this.quill.insertText(t.index, " ", Ir.sources.USER),
                            this.quill.history.cutoff();
                        const o = (new bn).retain(t.index - r).delete(n + 1).retain(s.length() - 2 - r).retain(1, {
                            list: i
                        });
                        return this.quill.updateContents(o, Ir.sources.USER),
                            this.quill.history.cutoff(),
                            this.quill.setSelection(t.index - n, Ir.sources.SILENT),
                            !1
                    }
                },
                "code exit": {
                    key: "Enter",
                    collapsed: !0,
                    format: ["code-block"],
                    prefix: /^$/,
                    suffix: /^\s*$/,
                    handler(t) {
                        const [e, n] = this.quill.getLine(t.index);
                        let s = 2
                            , r = e;
                        for (; null != r && r.length() <= 1 && r.formats()["code-block"];)
                            if (r = r.prev,
                                s -= 1,
                                s <= 0) {
                                const s = (new bn).retain(t.index + e.length() - n - 2).retain(1, {
                                    "code-block": null
                                }).delete(1);
                                return this.quill.updateContents(s, Ir.sources.USER),
                                    this.quill.setSelection(t.index - 1, Ir.sources.SILENT),
                                    !1
                            }
                        return !0
                    }
                },
                "embed left": vi("ArrowLeft", !1),
                "embed left shift": vi("ArrowLeft", !0),
                "embed right": vi("ArrowRight", !1),
                "embed right shift": vi("ArrowRight", !0),
                "table down": Ni(!1),
                "table up": Ni(!0)
            }
        };
        function yi(t) {
            return {
                key: "Tab",
                shiftKey: !t,
                format: {
                    "code-block": !0
                },
                handler(e, n) {
                    let { event: s } = n;
                    const r = this.quill.scroll.query("code-block")
                        , { TAB: i } = r;
                    if (0 === e.length && !s.shiftKey)
                        return this.quill.insertText(e.index, i, Ir.sources.USER),
                            void this.quill.setSelection(e.index + i.length, Ir.sources.SILENT);
                    const o = 0 === e.length ? this.quill.getLines(e.index, 1) : this.quill.getLines(e);
                    let { index: l, length: a } = e;
                    o.forEach(((e, n) => {
                        t ? (e.insertAt(0, i),
                            0 === n ? l += i.length : a += i.length) : e.domNode.textContent.startsWith(i) && (e.deleteAt(0, i.length),
                                0 === n ? l -= i.length : a -= i.length)
                    }
                    )),
                        this.quill.update(Ir.sources.USER),
                        this.quill.setSelection(l, a, Ir.sources.SILENT)
                }
            }
        }
        function vi(t, e) {
            const n = "ArrowLeft" === t ? "prefix" : "suffix";
            return {
                key: t,
                shiftKey: e,
                altKey: null,
                [n]: /^$/,
                handler(n) {
                    let { index: s } = n;
                    "ArrowRight" === t && (s += n.length + 1);
                    const [r] = this.quill.getLeaf(s);
                    return !(r instanceof hn) || ("ArrowLeft" === t ? e ? this.quill.setSelection(n.index - 1, n.length + 1, Ir.sources.USER) : this.quill.setSelection(n.index - 1, Ir.sources.USER) : e ? this.quill.setSelection(n.index, n.length + 1, Ir.sources.USER) : this.quill.setSelection(n.index + n.length + 1, Ir.sources.USER),
                        !1)
                }
            }
        }
        function xi(t) {
            return {
                key: t[0],
                shortKey: !0,
                handler(e, n) {
                    this.quill.format(t, !n.format[t], Ir.sources.USER)
                }
            }
        }
        function Ni(t) {
            return {
                key: t ? "ArrowUp" : "ArrowDown",
                collapsed: !0,
                format: ["table"],
                handler(e, n) {
                    const s = t ? "prev" : "next"
                        , r = n.line
                        , i = r.parent[s];
                    if (null != i) {
                        if ("table-row" === i.statics.blotName) {
                            let t = i.children.head
                                , e = r;
                            for (; null != e.prev;)
                                e = e.prev,
                                    t = t.next;
                            const s = t.offset(this.quill.scroll) + Math.min(n.offset, t.length() - 1);
                            this.quill.setSelection(s, 0, Ir.sources.USER)
                        }
                    } else {
                        const e = r.table()[s];
                        null != e && (t ? this.quill.setSelection(e.offset(this.quill.scroll) + e.length() - 1, 0, Ir.sources.USER) : this.quill.setSelection(e.offset(this.quill.scroll), 0, Ir.sources.USER))
                    }
                    return !1
                }
            }
        }
        function Ei(t) {
            let { quill: e, range: n } = t;
            const s = e.getLines(n);
            let r = {};
            if (s.length > 1) {
                const t = s[0].formats()
                    , e = s[s.length - 1].formats();
                r = bn.AttributeMap.diff(e, t) || {}
            }
            e.deleteText(n, Ir.sources.USER),
                Object.keys(r).length > 0 && e.formatLine(n.index, 1, r, Ir.sources.USER),
                e.setSelection(n.index, Ir.sources.SILENT)
        }
        mi.DEFAULTS = bi;
        const wi = /font-weight:\s*normal/
            , Ai = ["P", "OL", "UL"]
            , qi = t => t && Ai.includes(t.tagName);
        const ki = /\bmso-list:[^;]*ignore/i
            , _i = /\bmso-list:[^;]*\bl(\d+)/i
            , Li = /\bmso-list:[^;]*\blevel(\d+)/i
            , Oi = t => {
                const e = Array.from(t.querySelectorAll("[style*=mso-list]"))
                    , n = []
                    , s = [];
                e.forEach((t => {
                    (t.getAttribute("style") || "").match(ki) ? n.push(t) : s.push(t)
                }
                )),
                    n.forEach((t => t.parentNode?.removeChild(t)));
                const r = t.documentElement.innerHTML
                    , i = s.map((t => ((t, e) => {
                        const n = t.getAttribute("style")
                            , s = n?.match(_i);
                        if (!s)
                            return null;
                        const r = Number(s[1])
                            , i = n?.match(Li)
                            , o = i ? Number(i[1]) : 1
                            , l = new RegExp(`@list l${r}:level${o}\\s*\\{[^\\}]*mso-level-number-format:\\s*([\\w-]+)`, "i")
                            , a = e.match(l);
                        return {
                            id: r,
                            indent: o,
                            type: a && "bullet" === a[1] ? "bullet" : "ordered",
                            element: t
                        }
                    }
                    )(t, r))).filter((t => t));
                for (; i.length;) {
                    const t = [];
                    let e = i.shift();
                    for (; e;)
                        t.push(e),
                            e = i.length && i[0]?.element === e.element.nextElementSibling && i[0].id === e.id ? i.shift() : null;
                    const n = document.createElement("ul");
                    t.forEach((t => {
                        const e = document.createElement("li");
                        e.setAttribute("data-list", t.type),
                            t.indent > 1 && e.setAttribute("class", "ql-indent-" + (t.indent - 1)),
                            e.innerHTML = t.element.innerHTML,
                            n.appendChild(e)
                    }
                    ));
                    const s = t[0]?.element
                        , { parentNode: r } = s ?? {};
                    s && r?.replaceChild(n, s),
                        t.slice(1).forEach((t => {
                            let { element: e } = t;
                            r?.removeChild(e)
                        }
                        ))
                }
            }
            ;
        const Si = [function (t) {
            "urn:schemas-microsoft-com:office:word" === t.documentElement.getAttribute("xmlns:w") && Oi(t)
        }
            , function (t) {
                t.querySelector('[id^="docs-internal-guid-"]') && ((t => {
                    Array.from(t.querySelectorAll('b[style*="font-weight"]')).filter((t => t.getAttribute("style")?.match(wi))).forEach((e => {
                        const n = t.createDocumentFragment();
                        n.append(...e.childNodes),
                            e.parentNode?.replaceChild(n, e)
                    }
                    ))
                }
                )(t),
                    (t => {
                        Array.from(t.querySelectorAll("br")).filter((t => qi(t.previousElementSibling) && qi(t.nextElementSibling))).forEach((t => {
                            t.parentNode?.removeChild(t)
                        }
                        ))
                    }
                    )(t))
            }
        ]
            , Ti = t => {
                t.documentElement && Si.forEach((e => {
                    e(t)
                }
                ))
            }
            , ji = or("quill:clipboard")
            , Ci = [[Node.TEXT_NODE, function (t, e, n) {
                let s = t.data;
                if ("O:P" === t.parentElement?.tagName)
                    return e.insert(s.trim());
                if (!Pi(t)) {
                    if (0 === s.trim().length && s.includes("\n") && !function (t, e) {
                        return t.previousElementSibling && t.nextElementSibling && !Di(t.previousElementSibling, e) && !Di(t.nextElementSibling, e)
                    }(t, n))
                        return e;
                    s = s.replace(/[^\S\u00a0]/g, " "),
                        s = s.replace(/ {2,}/g, " "),
                        (null == t.previousSibling && null != t.parentElement && Di(t.parentElement, n) || t.previousSibling instanceof Element && Di(t.previousSibling, n)) && (s = s.replace(/^ /, "")),
                        (null == t.nextSibling && null != t.parentElement && Di(t.parentElement, n) || t.nextSibling instanceof Element && Di(t.nextSibling, n)) && (s = s.replace(/ $/, "")),
                        s = s.replaceAll(" ", " ")
                }
                return e.insert(s)
            }
            ], [Node.TEXT_NODE, Hi], ["br", function (t, e) {
                Bi(e, "\n") || e.insert("\n");
                return e
            }
            ], [Node.ELEMENT_NODE, Hi], [Node.ELEMENT_NODE, function (t, e, n) {
                const s = n.query(t);
                if (null == s)
                    return e;
                if (s.prototype instanceof hn) {
                    const e = {}
                        , r = s.value(t);
                    if (null != r)
                        return e[s.blotName] = r,
                            (new bn).insert(e, s.formats(t, n))
                } else if (s.prototype instanceof an && !Bi(e, "\n") && e.insert("\n"),
                    "blotName" in s && "formats" in s && "function" == typeof s.formats)
                    return Mi(e, s.blotName, s.formats(t, n), n);
                return e
            }
            ], [Node.ELEMENT_NODE, function (t, e, n) {
                const s = ze.keys(t)
                    , r = Ke.keys(t)
                    , i = Ze.keys(t)
                    , o = {};
                return s.concat(r).concat(i).forEach((e => {
                    let s = n.query(e, Pe.ATTRIBUTE);
                    null != s && (o[s.attrName] = s.value(t),
                        o[s.attrName]) || (s = Ri[e],
                            null == s || s.attrName !== e && s.keyName !== e || (o[s.attrName] = s.value(t) || void 0),
                            s = Ii[e],
                            null == s || s.attrName !== e && s.keyName !== e || (s = Ii[e],
                                o[s.attrName] = s.value(t) || void 0))
                }
                )),
                    Object.entries(o).reduce(((t, e) => {
                        let [s, r] = e;
                        return Mi(t, s, r, n)
                    }
                    ), e)
            }
            ], [Node.ELEMENT_NODE, function (t, e, n) {
                const s = {}
                    , r = t.style || {};
                "italic" === r.fontStyle && (s.italic = !0);
                "underline" === r.textDecoration && (s.underline = !0);
                "line-through" === r.textDecoration && (s.strike = !0);
                (r.fontWeight?.startsWith("bold") || parseInt(r.fontWeight, 10) >= 700) && (s.bold = !0);
                if (e = Object.entries(s).reduce(((t, e) => {
                    let [s, r] = e;
                    return Mi(t, s, r, n)
                }
                ), e),
                    parseFloat(r.textIndent || 0) > 0)
                    return (new bn).insert("\t").concat(e);
                return e
            }
            ], ["li", function (t, e, n) {
                const s = n.query(t);
                if (null == s || "list" !== s.blotName || !Bi(e, "\n"))
                    return e;
                let r = -1
                    , i = t.parentNode;
                for (; null != i;)
                    ["OL", "UL"].includes(i.tagName) && (r += 1),
                        i = i.parentNode;
                return r <= 0 ? e : e.reduce(((t, e) => e.insert ? e.attributes && "number" == typeof e.attributes.indent ? t.push(e) : t.insert(e.insert, {
                    indent: r,
                    ...e.attributes || {}
                }) : t), new bn)
            }
            ], ["ol, ul", function (t, e, n) {
                const s = t;
                let r = "OL" === s.tagName ? "ordered" : "bullet";
                const i = s.getAttribute("data-checked");
                i && (r = "true" === i ? "checked" : "unchecked");
                return Mi(e, "list", r, n)
            }
            ], ["pre", function (t, e, n) {
                const s = n.query("code-block")
                    , r = !s || !("formats" in s) || "function" != typeof s.formats || s.formats(t, n);
                return Mi(e, "code-block", r, n)
            }
            ], ["tr", function (t, e, n) {
                const s = "TABLE" === t.parentElement?.tagName ? t.parentElement : t.parentElement?.parentElement;
                if (null != s) {
                    return Mi(e, "table", Array.from(s.querySelectorAll("tr")).indexOf(t) + 1, n)
                }
                return e
            }
            ], ["b", Fi("bold")], ["i", Fi("italic")], ["strike", Fi("strike")], ["style", function () {
                return new bn
            }
            ]]
            , Ri = [Zr, oi].reduce(((t, e) => (t[e.keyName] = e,
                t)), {})
            , Ii = [Xr, ei, Jr, ai, hi, fi].reduce(((t, e) => (t[e.keyName] = e,
                t)), {});
        function Mi(t, e, n, s) {
            return s.query(e) ? t.reduce(((t, s) => {
                if (!s.insert)
                    return t;
                if (s.attributes && s.attributes[e])
                    return t.push(s);
                const r = n ? {
                    [e]: n
                } : {};
                return t.insert(s.insert, {
                    ...r,
                    ...s.attributes
                })
            }
            ), new bn) : t
        }
        function Bi(t, e) {
            let n = "";
            for (let s = t.ops.length - 1; s >= 0 && n.length < e.length; --s) {
                const e = t.ops[s];
                if ("string" != typeof e.insert)
                    break;
                n = e.insert + n
            }
            return n.slice(-1 * e.length) === e
        }
        function Di(t, e) {
            if (!(t instanceof Element))
                return !1;
            const n = e.query(t);
            return !(n && n.prototype instanceof hn) && ["address", "article", "blockquote", "canvas", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "iframe", "li", "main", "nav", "ol", "output", "p", "pre", "section", "table", "td", "tr", "ul", "video"].includes(t.tagName.toLowerCase())
        }
        const Ui = new WeakMap;
        function Pi(t) {
            return null != t && (Ui.has(t) || ("PRE" === t.tagName ? Ui.set(t, !0) : Ui.set(t, Pi(t.parentNode))),
                Ui.get(t))
        }
        function zi(t, e, n, s, r) {
            return e.nodeType === e.TEXT_NODE ? s.reduce(((n, s) => s(e, n, t)), new bn) : e.nodeType === e.ELEMENT_NODE ? Array.from(e.childNodes || []).reduce(((i, o) => {
                let l = zi(t, o, n, s, r);
                return o.nodeType === e.ELEMENT_NODE && (l = n.reduce(((e, n) => n(o, e, t)), l),
                    l = (r.get(o) || []).reduce(((e, n) => n(o, e, t)), l)),
                    i.concat(l)
            }
            ), new bn) : new bn
        }
        function Fi(t) {
            return (e, n, s) => Mi(n, t, !0, s)
        }
        function Hi(t, e, n) {
            if (!Bi(e, "\n")) {
                if (Di(t, n) && (t.childNodes.length > 0 || t instanceof HTMLParagraphElement))
                    return e.insert("\n");
                if (e.length() > 0 && t.nextSibling) {
                    let s = t.nextSibling;
                    for (; null != s;) {
                        if (Di(s, n))
                            return e.insert("\n");
                        const t = n.query(s);
                        if (t && t.prototype instanceof Gs)
                            return e.insert("\n");
                        s = s.firstChild
                    }
                }
            }
            return e
        }
        function $i(t, e) {
            let n = e;
            for (let e = t.length - 1; e >= 0; e -= 1) {
                const s = t[e];
                t[e] = {
                    delta: n.transform(s.delta, !0),
                    range: s.range && Vi(s.range, n)
                },
                    n = s.delta.transform(n),
                    0 === t[e].delta.length() && t.splice(e, 1)
            }
        }
        function Vi(t, e) {
            if (!t)
                return t;
            const n = e.transformPosition(t.index);
            return {
                index: n,
                length: e.transformPosition(t.index + t.length) - n
            }
        }
        class Ki extends Nr {
            constructor(t, e) {
                super(t, e),
                    t.root.addEventListener("drop", (e => {
                        e.preventDefault();
                        let n = null;
                        if (document.caretRangeFromPoint)
                            n = document.caretRangeFromPoint(e.clientX, e.clientY);
                        else if (document.caretPositionFromPoint) {
                            const t = document.caretPositionFromPoint(e.clientX, e.clientY);
                            n = document.createRange(),
                                n.setStart(t.offsetNode, t.offset),
                                n.setEnd(t.offsetNode, t.offset)
                        }
                        const s = n && t.selection.normalizeNative(n);
                        if (s) {
                            const n = t.selection.normalizedToRange(s);
                            e.dataTransfer?.files && this.upload(n, e.dataTransfer.files)
                        }
                    }
                    ))
            }
            upload(t, e) {
                const n = [];
                Array.from(e).forEach((t => {
                    t && this.options.mimetypes?.includes(t.type) && n.push(t)
                }
                )),
                    n.length > 0 && this.options.handler.call(this, t, n)
            }
        }
        Ki.DEFAULTS = {
            mimetypes: ["image/png", "image/jpeg"],
            handler(t, e) {
                if (!this.quill.scroll.query("image"))
                    return;
                const n = e.map((t => new Promise((e => {
                    const n = new FileReader;
                    n.onload = () => {
                        e(n.result)
                    }
                        ,
                        n.readAsDataURL(t)
                }
                ))));
                Promise.all(n).then((e => {
                    const n = e.reduce(((t, e) => t.insert({
                        image: e
                    })), (new bn).retain(t.index).delete(t.length));
                    this.quill.updateContents(n, ar.sources.USER),
                        this.quill.setSelection(t.index + e.length, ar.sources.SILENT)
                }
                ))
            }
        };
        const Wi = Ki
            , Zi = ["insertText", "insertReplacementText"];
        const Gi = class extends Nr {
            constructor(t, e) {
                super(t, e),
                    t.root.addEventListener("beforeinput", (t => {
                        this.handleBeforeInput(t)
                    }
                    )),
                    /Android/i.test(navigator.userAgent) || t.on(Ir.events.COMPOSITION_BEFORE_START, (() => {
                        this.handleCompositionStart()
                    }
                    ))
            }
            deleteRange(t) {
                Ei({
                    range: t,
                    quill: this.quill
                })
            }
            replaceText(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (0 === t.length)
                    return !1;
                if (e) {
                    const n = this.quill.getFormat(t.index, 1);
                    this.deleteRange(t),
                        this.quill.updateContents((new bn).retain(t.index).insert(e, n), Ir.sources.USER)
                } else
                    this.deleteRange(t);
                return this.quill.setSelection(t.index + e.length, 0, Ir.sources.SILENT),
                    !0
            }
            handleBeforeInput(t) {
                if (this.quill.composition.isComposing || t.defaultPrevented || !Zi.includes(t.inputType))
                    return;
                const e = t.getTargetRanges ? t.getTargetRanges()[0] : null;
                if (!e || !0 === e.collapsed)
                    return;
                const n = function (t) {
                    if ("string" == typeof t.data)
                        return t.data;
                    if (t.dataTransfer?.types.includes("text/plain"))
                        return t.dataTransfer.getData("text/plain");
                    return null
                }(t);
                if (null == n)
                    return;
                const s = this.quill.selection.normalizeNative(e)
                    , r = s ? this.quill.selection.normalizedToRange(s) : null;
                r && this.replaceText(r, n) && t.preventDefault()
            }
            handleCompositionStart() {
                const t = this.quill.getSelection();
                t && this.replaceText(t)
            }
        }
            , Xi = /Mac/i.test(navigator.platform);
        const Yi = class extends Nr {
            isListening = !1;
            selectionChangeDeadline = 0;
            constructor(t, e) {
                super(t, e),
                    this.handleArrowKeys(),
                    this.handleNavigationShortcuts()
            }
            handleArrowKeys() {
                this.quill.keyboard.addBinding({
                    key: ["ArrowLeft", "ArrowRight"],
                    offset: 0,
                    shiftKey: null,
                    handler(t, e) {
                        let { line: n, event: s } = e;
                        if (!(n instanceof sn && n.uiNode))
                            return !0;
                        const r = "rtl" === getComputedStyle(n.domNode).direction;
                        return !!(r && "ArrowRight" !== s.key || !r && "ArrowLeft" !== s.key) || (this.quill.setSelection(t.index - 1, t.length + (s.shiftKey ? 1 : 0), Ir.sources.USER),
                            !1)
                    }
                })
            }
            handleNavigationShortcuts() {
                this.quill.root.addEventListener("keydown", (t => {
                    !t.defaultPrevented && (t => "ArrowLeft" === t.key || "ArrowRight" === t.key || "ArrowUp" === t.key || "ArrowDown" === t.key || "Home" === t.key || !(!Xi || "a" !== t.key || !0 !== t.ctrlKey))(t) && this.ensureListeningToSelectionChange()
                }
                ))
            }
            ensureListeningToSelectionChange() {
                if (this.selectionChangeDeadline = Date.now() + 100,
                    this.isListening)
                    return;
                this.isListening = !0;
                document.addEventListener("selectionchange", (() => {
                    this.isListening = !1,
                        Date.now() <= this.selectionChangeDeadline && this.handleSelectionChange()
                }
                ), {
                    once: !0
                })
            }
            handleSelectionChange() {
                const t = document.getSelection();
                if (!t)
                    return;
                const e = t.getRangeAt(0);
                if (!0 !== e.collapsed || 0 !== e.startOffset)
                    return;
                const n = this.quill.scroll.find(e.startContainer);
                if (!(n instanceof sn && n.uiNode))
                    return;
                const s = document.createRange();
                s.setStartAfter(n.uiNode),
                    s.setEndAfter(n.uiNode),
                    t.removeAllRanges(),
                    t.addRange(s)
            }
        }
            ;
        Ir.register({
            "blots/block": Zs,
            "blots/block/embed": Gs,
            "blots/break": Fs,
            "blots/container": Fr,
            "blots/cursor": Js,
            "blots/embed": wr,
            "blots/inline": Ws,
            "blots/scroll": Kr,
            "blots/text": Hs,
            "modules/clipboard": class extends Nr {
                static DEFAULTS = {
                    matchers: []
                };
                constructor(t, e) {
                    super(t, e),
                        this.quill.root.addEventListener("copy", (t => this.onCaptureCopy(t, !1))),
                        this.quill.root.addEventListener("cut", (t => this.onCaptureCopy(t, !0))),
                        this.quill.root.addEventListener("paste", this.onCapturePaste.bind(this)),
                        this.matchers = [],
                        Ci.concat(this.options.matchers ?? []).forEach((t => {
                            let [e, n] = t;
                            this.addMatcher(e, n)
                        }
                        ))
                }
                addMatcher(t, e) {
                    this.matchers.push([t, e])
                }
                convert(t) {
                    let { html: e, text: n } = t
                        , s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (s[si.blotName])
                        return (new bn).insert(n || "", {
                            [si.blotName]: s[si.blotName]
                        });
                    if (!e)
                        return (new bn).insert(n || "", s);
                    const r = this.convertHTML(e);
                    return Bi(r, "\n") && (null == r.ops[r.ops.length - 1].attributes || s.table) ? r.compose((new bn).retain(r.length() - 1).delete(1)) : r
                }
                normalizeHTML(t) {
                    Ti(t)
                }
                convertHTML(t) {
                    const e = (new DOMParser).parseFromString(t, "text/html");
                    this.normalizeHTML(e);
                    const n = e.body
                        , s = new WeakMap
                        , [r, i] = this.prepareMatching(n, s);
                    return zi(this.quill.scroll, n, r, i, s)
                }
                dangerouslyPasteHTML(t, e) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ir.sources.API;
                    if ("string" == typeof t) {
                        const n = this.convert({
                            html: t,
                            text: ""
                        });
                        this.quill.setContents(n, e),
                            this.quill.setSelection(0, Ir.sources.SILENT)
                    } else {
                        const s = this.convert({
                            html: e,
                            text: ""
                        });
                        this.quill.updateContents((new bn).retain(t).concat(s), n),
                            this.quill.setSelection(t + s.length(), Ir.sources.SILENT)
                    }
                }
                onCaptureCopy(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (t.defaultPrevented)
                        return;
                    t.preventDefault();
                    const [n] = this.quill.selection.getRange();
                    if (null == n)
                        return;
                    const { html: s, text: r } = this.onCopy(n, e);
                    t.clipboardData?.setData("text/plain", r),
                        t.clipboardData?.setData("text/html", s),
                        e && Ei({
                            range: n,
                            quill: this.quill
                        })
                }
                normalizeURIList(t) {
                    return t.split(/\r?\n/).filter((t => "#" !== t[0])).join("\n")
                }
                onCapturePaste(t) {
                    if (t.defaultPrevented || !this.quill.isEnabled())
                        return;
                    t.preventDefault();
                    const e = this.quill.getSelection(!0);
                    if (null == e)
                        return;
                    const n = t.clipboardData?.getData("text/html");
                    let s = t.clipboardData?.getData("text/plain");
                    if (!n && !s) {
                        const e = t.clipboardData?.getData("text/uri-list");
                        e && (s = this.normalizeURIList(e))
                    }
                    const r = Array.from(t.clipboardData?.files || []);
                    if (!n && r.length > 0)
                        this.quill.uploader.upload(e, r);
                    else {
                        if (n && r.length > 0) {
                            const t = (new DOMParser).parseFromString(n, "text/html");
                            if (1 === t.body.childElementCount && "IMG" === t.body.firstElementChild?.tagName)
                                return void this.quill.uploader.upload(e, r)
                        }
                        this.onPaste(e, {
                            html: n,
                            text: s
                        })
                    }
                }
                onCopy(t) {
                    const e = this.quill.getText(t);
                    return {
                        html: this.quill.getSemanticHTML(t),
                        text: e
                    }
                }
                onPaste(t, e) {
                    let { text: n, html: s } = e;
                    const r = this.quill.getFormat(t.index)
                        , i = this.convert({
                            text: n,
                            html: s
                        }, r);
                    ji.log("onPaste", i, {
                        text: n,
                        html: s
                    });
                    const o = (new bn).retain(t.index).delete(t.length).concat(i);
                    this.quill.updateContents(o, Ir.sources.USER),
                        this.quill.setSelection(o.length() - t.length, Ir.sources.SILENT),
                        this.quill.scrollSelectionIntoView()
                }
                prepareMatching(t, e) {
                    const n = []
                        , s = [];
                    return this.matchers.forEach((r => {
                        const [i, o] = r;
                        switch (i) {
                            case Node.TEXT_NODE:
                                s.push(o);
                                break;
                            case Node.ELEMENT_NODE:
                                n.push(o);
                                break;
                            default:
                                Array.from(t.querySelectorAll(i)).forEach((t => {
                                    if (e.has(t)) {
                                        const n = e.get(t);
                                        n?.push(o)
                                    } else
                                        e.set(t, [o])
                                }
                                ))
                        }
                    }
                    )),
                        [n, s]
                }
            }
            ,
            "modules/history": class extends Nr {
                static DEFAULTS = {
                    delay: 1e3,
                    maxStack: 100,
                    userOnly: !1
                };
                lastRecorded = 0;
                ignoreChange = !1;
                stack = {
                    undo: [],
                    redo: []
                };
                currentRange = null;
                constructor(t, e) {
                    super(t, e),
                        this.quill.on(Ir.events.EDITOR_CHANGE, ((t, e, n, s) => {
                            t === Ir.events.SELECTION_CHANGE ? e && s !== Ir.sources.SILENT && (this.currentRange = e) : t === Ir.events.TEXT_CHANGE && (this.ignoreChange || (this.options.userOnly && s !== Ir.sources.USER ? this.transform(e) : this.record(e, n)),
                                this.currentRange = Vi(this.currentRange, e))
                        }
                        )),
                        this.quill.keyboard.addBinding({
                            key: "z",
                            shortKey: !0
                        }, this.undo.bind(this)),
                        this.quill.keyboard.addBinding({
                            key: ["z", "Z"],
                            shortKey: !0,
                            shiftKey: !0
                        }, this.redo.bind(this)),
                        /Win/i.test(navigator.platform) && this.quill.keyboard.addBinding({
                            key: "y",
                            shortKey: !0
                        }, this.redo.bind(this)),
                        this.quill.root.addEventListener("beforeinput", (t => {
                            "historyUndo" === t.inputType ? (this.undo(),
                                t.preventDefault()) : "historyRedo" === t.inputType && (this.redo(),
                                    t.preventDefault())
                        }
                        ))
                }
                change(t, e) {
                    if (0 === this.stack[t].length)
                        return;
                    const n = this.stack[t].pop();
                    if (!n)
                        return;
                    const s = this.quill.getContents()
                        , r = n.delta.invert(s);
                    this.stack[e].push({
                        delta: r,
                        range: Vi(n.range, r)
                    }),
                        this.lastRecorded = 0,
                        this.ignoreChange = !0,
                        this.quill.updateContents(n.delta, Ir.sources.USER),
                        this.ignoreChange = !1,
                        this.restoreSelection(n)
                }
                clear() {
                    this.stack = {
                        undo: [],
                        redo: []
                    }
                }
                cutoff() {
                    this.lastRecorded = 0
                }
                record(t, e) {
                    if (0 === t.ops.length)
                        return;
                    this.stack.redo = [];
                    let n = t.invert(e)
                        , s = this.currentRange;
                    const r = Date.now();
                    if (this.lastRecorded + this.options.delay > r && this.stack.undo.length > 0) {
                        const t = this.stack.undo.pop();
                        t && (n = n.compose(t.delta),
                            s = t.range)
                    } else
                        this.lastRecorded = r;
                    0 !== n.length() && (this.stack.undo.push({
                        delta: n,
                        range: s
                    }),
                        this.stack.undo.length > this.options.maxStack && this.stack.undo.shift())
                }
                redo() {
                    this.change("redo", "undo")
                }
                transform(t) {
                    $i(this.stack.undo, t),
                        $i(this.stack.redo, t)
                }
                undo() {
                    this.change("undo", "redo")
                }
                restoreSelection(t) {
                    if (t.range)
                        this.quill.setSelection(t.range, Ir.sources.USER);
                    else {
                        const e = function (t, e) {
                            const n = e.reduce(((t, e) => t + (e.delete || 0)), 0);
                            let s = e.length() - n;
                            (function (t, e) {
                                const n = e.ops[e.ops.length - 1];
                                if (null == n)
                                    return !1;
                                if (null != n.insert)
                                    return "string" == typeof n.insert && n.insert.endsWith("\n");
                                if (null != n.attributes)
                                    return Object.keys(n.attributes).some((e => null != t.query(e, Pe.BLOCK)));
                                return !1
                            }
                            )(t, e) && (s -= 1);
                            return s
                        }(this.quill.scroll, t.delta);
                        this.quill.setSelection(e, Ir.sources.USER)
                    }
                }
            }
            ,
            "modules/keyboard": mi,
            "modules/uploader": Wi,
            "modules/input": Gi,
            "modules/uiNode": Yi
        });
        const Qi = Ir;
        const Ji = new class extends Ke {
            add(t, e) {
                let n = 0;
                if ("+1" === e || "-1" === e) {
                    const s = this.value(t) || 0;
                    n = "+1" === e ? s + 1 : s - 1
                } else
                    "number" == typeof e && (n = e);
                return 0 === n ? (this.remove(t),
                    !0) : super.add(t, n.toString())
            }
            canAdd(t, e) {
                return super.canAdd(t, e) || super.canAdd(t, parseInt(e, 10))
            }
            value(t) {
                return parseInt(super.value(t), 10) || void 0
            }
        }
            ("indent", "ql-indent", {
                scope: Pe.BLOCK,
                whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
            })
            , to = Ji;
        const eo = class extends Zs {
            static blotName = "blockquote";
            static tagName = "blockquote"
        }
            ;
        const no = class extends Zs {
            static blotName = "header";
            static tagName = ["H1", "H2", "H3", "H4", "H5", "H6"];
            static formats(t) {
                return this.tagName.indexOf(t.tagName) + 1
            }
        }
            ;
        class so extends Fr {
        }
        so.blotName = "list-container",
            so.tagName = "OL";
        class ro extends Zs {
            static create(t) {
                const e = super.create();
                return e.setAttribute("data-list", t),
                    e
            }
            static formats(t) {
                return t.getAttribute("data-list") || void 0
            }
            static register() {
                Ir.register(so)
            }
            constructor(t, e) {
                super(t, e);
                const n = e.ownerDocument.createElement("span")
                    , s = n => {
                        if (!t.isEnabled())
                            return;
                        const s = this.statics.formats(e, t);
                        "checked" === s ? (this.format("list", "unchecked"),
                            n.preventDefault()) : "unchecked" === s && (this.format("list", "checked"),
                                n.preventDefault())
                    }
                    ;
                n.addEventListener("mousedown", s),
                    n.addEventListener("touchstart", s),
                    this.attachUI(n)
            }
            format(t, e) {
                t === this.statics.blotName && e ? this.domNode.setAttribute("data-list", e) : super.format(t, e)
            }
        }
        ro.blotName = "list",
            ro.tagName = "LI",
            so.allowedChildren = [ro],
            ro.requiredContainer = so;
        const io = class extends Ws {
            static blotName = "bold";
            static tagName = ["STRONG", "B"];
            static create() {
                return super.create()
            }
            static formats() {
                return !0
            }
            optimize(t) {
                super.optimize(t),
                    this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName)
            }
        }
            ;
        const oo = class extends io {
            static blotName = "italic";
            static tagName = ["EM", "I"]
        }
            ;
        class lo extends Ws {
            static blotName = "link";
            static tagName = "A";
            static SANITIZED_URL = "about:blank";
            static PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel", "sms"];
            static create(t) {
                const e = super.create(t);
                return e.setAttribute("href", this.sanitize(t)),
                    e.setAttribute("rel", "noopener noreferrer"),
                    e.setAttribute("target", "_blank"),
                    e
            }
            static formats(t) {
                return t.getAttribute("href")
            }
            static sanitize(t) {
                return ao(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL
            }
            format(t, e) {
                t === this.statics.blotName && e ? this.domNode.setAttribute("href", this.constructor.sanitize(e)) : super.format(t, e)
            }
        }
        function ao(t, e) {
            const n = document.createElement("a");
            n.href = t;
            const s = n.href.slice(0, n.href.indexOf(":"));
            return e.indexOf(s) > -1
        }
        const co = class extends Ws {
            static blotName = "script";
            static tagName = ["SUB", "SUP"];
            static create(t) {
                return "super" === t ? document.createElement("sup") : "sub" === t ? document.createElement("sub") : super.create(t)
            }
            static formats(t) {
                return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0
            }
        }
            ;
        const uo = class extends io {
            static blotName = "strike";
            static tagName = ["S", "STRIKE"]
        }
            ;
        const ho = class extends Ws {
            static blotName = "underline";
            static tagName = "U"
        }
            ;
        const fo = class extends wr {
            static blotName = "formula";
            static className = "ql-formula";
            static tagName = "SPAN";
            static create(t) {
                if (null == window.katex)
                    throw new Error("Formula module requires KaTeX.");
                const e = super.create(t);
                return "string" == typeof t && (window.katex.render(t, e, {
                    throwOnError: !1,
                    errorColor: "#f00"
                }),
                    e.setAttribute("data-value", t)),
                    e
            }
            static value(t) {
                return t.getAttribute("data-value")
            }
            html() {
                const { formula: t } = this.value();
                return `<span>${t}</span>`
            }
        }
            , po = ["alt", "height", "width"];
        const go = class extends hn {
            static blotName = "image";
            static tagName = "IMG";
            static create(t) {
                const e = super.create(t);
                return "string" == typeof t && e.setAttribute("src", this.sanitize(t)),
                    e
            }
            static formats(t) {
                return po.reduce(((e, n) => (t.hasAttribute(n) && (e[n] = t.getAttribute(n)),
                    e)), {})
            }
            static match(t) {
                return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t)
            }
            static sanitize(t) {
                return ao(t, ["http", "https", "data"]) ? t : "//:0"
            }
            static value(t) {
                return t.getAttribute("src")
            }
            format(t, e) {
                po.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e)
            }
        }
            , mo = ["height", "width"];
        const bo = class extends Gs {
            static blotName = "video";
            static className = "ql-video";
            static tagName = "IFRAME";
            static create(t) {
                const e = super.create(t);
                return e.setAttribute("frameborder", "0"),
                    e.setAttribute("allowfullscreen", "true"),
                    e.setAttribute("src", this.sanitize(t)),
                    e
            }
            static formats(t) {
                return mo.reduce(((e, n) => (t.hasAttribute(n) && (e[n] = t.getAttribute(n)),
                    e)), {})
            }
            static sanitize(t) {
                return lo.sanitize(t)
            }
            static value(t) {
                return t.getAttribute("src")
            }
            format(t, e) {
                mo.indexOf(t) > -1 ? e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t) : super.format(t, e)
            }
            html() {
                const { video: t } = this.value();
                return `<a href="${t}">${t}</a>`
            }
        }
            , yo = new Ke("code-token", "hljs", {
                scope: Pe.INLINE
            });
        class vo extends Ws {
            static formats(t, e) {
                for (; null != t && t !== e.domNode;) {
                    if (t.classList && t.classList.contains(si.className))
                        return super.formats(t, e);
                    t = t.parentNode
                }
            }
            constructor(t, e, n) {
                super(t, e, n),
                    yo.add(this.domNode, n)
            }
            format(t, e) {
                t !== vo.blotName ? super.format(t, e) : e ? yo.add(this.domNode, e) : (yo.remove(this.domNode),
                    this.domNode.classList.remove(this.statics.className))
            }
            optimize() {
                super.optimize(...arguments),
                    yo.value(this.domNode) || this.unwrap()
            }
        }
        vo.blotName = "code-token",
            vo.className = "ql-token";
        class xo extends si {
            static create(t) {
                const e = super.create(t);
                return "string" == typeof t && e.setAttribute("data-language", t),
                    e
            }
            static formats(t) {
                return t.getAttribute("data-language") || "plain"
            }
            static register() { }
            format(t, e) {
                t === this.statics.blotName && e ? this.domNode.setAttribute("data-language", e) : super.format(t, e)
            }
            replaceWith(t, e) {
                return this.formatAt(0, this.length(), vo.blotName, !1),
                    super.replaceWith(t, e)
            }
        }
        class No extends ni {
            attach() {
                super.attach(),
                    this.forceNext = !1,
                    this.scroll.emitMount(this)
            }
            format(t, e) {
                t === xo.blotName && (this.forceNext = !0,
                    this.children.forEach((n => {
                        n.format(t, e)
                    }
                    )))
            }
            formatAt(t, e, n, s) {
                n === xo.blotName && (this.forceNext = !0),
                    super.formatAt(t, e, n, s)
            }
            highlight(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (null == this.children.head)
                    return;
                const n = `${Array.from(this.domNode.childNodes).filter((t => t !== this.uiNode)).map((t => t.textContent)).join("\n")}\n`
                    , s = xo.formats(this.children.head.domNode);
                if (e || this.forceNext || this.cachedText !== n) {
                    if (n.trim().length > 0 || null == this.cachedText) {
                        const e = this.children.reduce(((t, e) => t.concat(Xs(e, !1))), new bn)
                            , r = t(n, s);
                        e.diff(r).reduce(((t, e) => {
                            let { retain: n, attributes: s } = e;
                            return n ? (s && Object.keys(s).forEach((e => {
                                [xo.blotName, vo.blotName].includes(e) && this.formatAt(t, n, e, s[e])
                            }
                            )),
                                t + n) : t
                        }
                        ), 0)
                    }
                    this.cachedText = n,
                        this.forceNext = !1
                }
            }
            html(t, e) {
                const [n] = this.children.find(t);
                return `<pre data-language="${n ? xo.formats(n.domNode) : "plain"}">\n${Vs(this.code(t, e))}\n</pre>`
            }
            optimize(t) {
                if (super.optimize(t),
                    null != this.parent && null != this.children.head && null != this.uiNode) {
                    const t = xo.formats(this.children.head.domNode);
                    t !== this.uiNode.value && (this.uiNode.value = t)
                }
            }
        }
        No.allowedChildren = [xo],
            xo.requiredContainer = No,
            xo.allowedChildren = [vo, Js, Hs, Fs];
        class Eo extends Nr {
            static register() {
                Ir.register(vo, !0),
                    Ir.register(xo, !0),
                    Ir.register(No, !0)
            }
            constructor(t, e) {
                if (super(t, e),
                    null == this.options.hljs)
                    throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
                this.languages = this.options.languages.reduce(((t, e) => {
                    let { key: n } = e;
                    return t[n] = !0,
                        t
                }
                ), {}),
                    this.highlightBlot = this.highlightBlot.bind(this),
                    this.initListener(),
                    this.initTimer()
            }
            initListener() {
                this.quill.on(Ir.events.SCROLL_BLOT_MOUNT, (t => {
                    if (!(t instanceof No))
                        return;
                    const e = this.quill.root.ownerDocument.createElement("select");
                    this.options.languages.forEach((t => {
                        let { key: n, label: s } = t;
                        const r = e.ownerDocument.createElement("option");
                        r.textContent = s,
                            r.setAttribute("value", n),
                            e.appendChild(r)
                    }
                    )),
                        e.addEventListener("change", (() => {
                            t.format(xo.blotName, e.value),
                                this.quill.root.focus(),
                                this.highlight(t, !0)
                        }
                        )),
                        null == t.uiNode && (t.attachUI(e),
                            t.children.head && (e.value = xo.formats(t.children.head.domNode)))
                }
                ))
            }
            initTimer() {
                let t = null;
                this.quill.on(Ir.events.SCROLL_OPTIMIZE, (() => {
                    t && clearTimeout(t),
                        t = setTimeout((() => {
                            this.highlight(),
                                t = null
                        }
                        ), this.options.interval)
                }
                ))
            }
            highlight() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                    , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.quill.selection.composing)
                    return;
                this.quill.update(Ir.sources.USER);
                const n = this.quill.getSelection();
                (null == t ? this.quill.scroll.descendants(No) : [t]).forEach((t => {
                    t.highlight(this.highlightBlot, e)
                }
                )),
                    this.quill.update(Ir.sources.SILENT),
                    null != n && this.quill.setSelection(n, Ir.sources.SILENT)
            }
            highlightBlot(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "plain";
                if (e = this.languages[e] ? e : "plain",
                    "plain" === e)
                    return Vs(t).split("\n").reduce(((t, n, s) => (0 !== s && t.insert("\n", {
                        [si.blotName]: e
                    }),
                        t.insert(n))), new bn);
                const n = this.quill.root.ownerDocument.createElement("div");
                return n.classList.add(si.className),
                    n.innerHTML = ((t, e, n) => {
                        if ("string" == typeof t.versionString) {
                            const s = t.versionString.split(".")[0];
                            if (parseInt(s, 10) >= 11)
                                return t.highlight(n, {
                                    language: e
                                }).value
                        }
                        return t.highlight(e, n).value
                    }
                    )(this.options.hljs, e, t),
                    zi(this.quill.scroll, n, [(t, e) => {
                        const n = yo.value(t);
                        return n ? e.compose((new bn).retain(e.length(), {
                            [vo.blotName]: n
                        })) : e
                    }
                    ], [(t, n) => t.data.split("\n").reduce(((t, n, s) => (0 !== s && t.insert("\n", {
                        [si.blotName]: e
                    }),
                        t.insert(n))), n)], new WeakMap)
            }
        }
        Eo.DEFAULTS = {
            hljs: window.hljs,
            interval: 1e3,
            languages: [{
                key: "plain",
                label: "Plain"
            }, {
                key: "bash",
                label: "Bash"
            }, {
                key: "cpp",
                label: "C++"
            }, {
                key: "cs",
                label: "C#"
            }, {
                key: "css",
                label: "CSS"
            }, {
                key: "diff",
                label: "Diff"
            }, {
                key: "xml",
                label: "HTML/XML"
            }, {
                key: "java",
                label: "Java"
            }, {
                key: "javascript",
                label: "JavaScript"
            }, {
                key: "markdown",
                label: "Markdown"
            }, {
                key: "php",
                label: "PHP"
            }, {
                key: "python",
                label: "Python"
            }, {
                key: "ruby",
                label: "Ruby"
            }, {
                key: "sql",
                label: "SQL"
            }]
        };
        class wo extends Zs {
            static blotName = "table";
            static tagName = "TD";
            static create(t) {
                const e = super.create();
                return t ? e.setAttribute("data-row", t) : e.setAttribute("data-row", _o()),
                    e
            }
            static formats(t) {
                if (t.hasAttribute("data-row"))
                    return t.getAttribute("data-row")
            }
            cellOffset() {
                return this.parent ? this.parent.children.indexOf(this) : -1
            }
            format(t, e) {
                t === wo.blotName && e ? this.domNode.setAttribute("data-row", e) : super.format(t, e)
            }
            row() {
                return this.parent
            }
            rowOffset() {
                return this.row() ? this.row().rowOffset() : -1
            }
            table() {
                return this.row() && this.row().table()
            }
        }
        class Ao extends Fr {
            static blotName = "table-row";
            static tagName = "TR";
            checkMerge() {
                if (super.checkMerge() && null != this.next.children.head) {
                    const t = this.children.head.formats()
                        , e = this.children.tail.formats()
                        , n = this.next.children.head.formats()
                        , s = this.next.children.tail.formats();
                    return t.table === e.table && t.table === n.table && t.table === s.table
                }
                return !1
            }
            optimize(t) {
                super.optimize(t),
                    this.children.forEach((t => {
                        if (null == t.next)
                            return;
                        const e = t.formats()
                            , n = t.next.formats();
                        if (e.table !== n.table) {
                            const e = this.splitAfter(t);
                            e && e.optimize(),
                                this.prev && this.prev.optimize()
                        }
                    }
                    ))
            }
            rowOffset() {
                return this.parent ? this.parent.children.indexOf(this) : -1
            }
            table() {
                return this.parent && this.parent.parent
            }
        }
        class qo extends Fr {
            static blotName = "table-body";
            static tagName = "TBODY"
        }
        class ko extends Fr {
            static blotName = "table-container";
            static tagName = "TABLE";
            balanceCells() {
                const t = this.descendants(Ao)
                    , e = t.reduce(((t, e) => Math.max(e.children.length, t)), 0);
                t.forEach((t => {
                    new Array(e - t.children.length).fill(0).forEach((() => {
                        let e;
                        null != t.children.head && (e = wo.formats(t.children.head.domNode));
                        const n = this.scroll.create(wo.blotName, e);
                        t.appendChild(n),
                            n.optimize()
                    }
                    ))
                }
                ))
            }
            cells(t) {
                return this.rows().map((e => e.children.at(t)))
            }
            deleteColumn(t) {
                const [e] = this.descendant(qo);
                null != e && null != e.children.head && e.children.forEach((e => {
                    const n = e.children.at(t);
                    null != n && n.remove()
                }
                ))
            }
            insertColumn(t) {
                const [e] = this.descendant(qo);
                null != e && null != e.children.head && e.children.forEach((e => {
                    const n = e.children.at(t)
                        , s = wo.formats(e.children.head.domNode)
                        , r = this.scroll.create(wo.blotName, s);
                    e.insertBefore(r, n)
                }
                ))
            }
            insertRow(t) {
                const [e] = this.descendant(qo);
                if (null == e || null == e.children.head)
                    return;
                const n = _o()
                    , s = this.scroll.create(Ao.blotName);
                e.children.head.children.forEach((() => {
                    const t = this.scroll.create(wo.blotName, n);
                    s.appendChild(t)
                }
                ));
                const r = e.children.at(t);
                e.insertBefore(s, r)
            }
            rows() {
                const t = this.children.head;
                return null == t ? [] : t.children.map((t => t))
            }
        }
        function _o() {
            return `row-${Math.random().toString(36).slice(2, 6)}`
        }
        ko.allowedChildren = [qo],
            qo.requiredContainer = ko,
            qo.allowedChildren = [Ao],
            Ao.requiredContainer = qo,
            Ao.allowedChildren = [wo],
            wo.requiredContainer = Ao;
        const Lo = class extends Nr {
            static register() {
                Ir.register(wo),
                    Ir.register(Ao),
                    Ir.register(qo),
                    Ir.register(ko)
            }
            constructor() {
                super(...arguments),
                    this.listenBalanceCells()
            }
            balanceTables() {
                this.quill.scroll.descendants(ko).forEach((t => {
                    t.balanceCells()
                }
                ))
            }
            deleteColumn() {
                const [t, , e] = this.getTable();
                null != e && (t.deleteColumn(e.cellOffset()),
                    this.quill.update(Ir.sources.USER))
            }
            deleteRow() {
                const [, t] = this.getTable();
                null != t && (t.remove(),
                    this.quill.update(Ir.sources.USER))
            }
            deleteTable() {
                const [t] = this.getTable();
                if (null == t)
                    return;
                const e = t.offset();
                t.remove(),
                    this.quill.update(Ir.sources.USER),
                    this.quill.setSelection(e, Ir.sources.SILENT)
            }
            getTable() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.quill.getSelection();
                if (null == t)
                    return [null, null, null, -1];
                const [e, n] = this.quill.getLine(t.index);
                if (null == e || e.statics.blotName !== wo.blotName)
                    return [null, null, null, -1];
                const s = e.parent;
                return [s.parent.parent, s, e, n]
            }
            insertColumn(t) {
                const e = this.quill.getSelection();
                if (!e)
                    return;
                const [n, s, r] = this.getTable(e);
                if (null == r)
                    return;
                const i = r.cellOffset();
                n.insertColumn(i + t),
                    this.quill.update(Ir.sources.USER);
                let o = s.rowOffset();
                0 === t && (o += 1),
                    this.quill.setSelection(e.index + o, e.length, Ir.sources.SILENT)
            }
            insertColumnLeft() {
                this.insertColumn(0)
            }
            insertColumnRight() {
                this.insertColumn(1)
            }
            insertRow(t) {
                const e = this.quill.getSelection();
                if (!e)
                    return;
                const [n, s, r] = this.getTable(e);
                if (null == r)
                    return;
                const i = s.rowOffset();
                n.insertRow(i + t),
                    this.quill.update(Ir.sources.USER),
                    t > 0 ? this.quill.setSelection(e, Ir.sources.SILENT) : this.quill.setSelection(e.index + s.children.length, e.length, Ir.sources.SILENT)
            }
            insertRowAbove() {
                this.insertRow(0)
            }
            insertRowBelow() {
                this.insertRow(1)
            }
            insertTable(t, e) {
                const n = this.quill.getSelection();
                if (null == n)
                    return;
                const s = new Array(t).fill(0).reduce((t => {
                    const n = new Array(e).fill("\n").join("");
                    return t.insert(n, {
                        table: _o()
                    })
                }
                ), (new bn).retain(n.index));
                this.quill.updateContents(s, Ir.sources.USER),
                    this.quill.setSelection(n.index, Ir.sources.SILENT),
                    this.balanceTables()
            }
            listenBalanceCells() {
                this.quill.on(Ir.events.SCROLL_OPTIMIZE, (t => {
                    t.some((t => !!["TD", "TR", "TBODY", "TABLE"].includes(t.target.tagName) && (this.quill.once(Ir.events.TEXT_CHANGE, ((t, e, n) => {
                        n === Ir.sources.USER && this.balanceTables()
                    }
                    )),
                        !0)))
                }
                ))
            }
        }
            , Oo = or("quill:toolbar");
        class So extends Nr {
            constructor(t, e) {
                if (super(t, e),
                    Array.isArray(this.options.container)) {
                    const e = document.createElement("div");
                    e.setAttribute("role", "toolbar"),
                        function (t, e) {
                            Array.isArray(e[0]) || (e = [e]);
                            e.forEach((e => {
                                const n = document.createElement("span");
                                n.classList.add("ql-formats"),
                                    e.forEach((t => {
                                        if ("string" == typeof t)
                                            To(n, t);
                                        else {
                                            const e = Object.keys(t)[0]
                                                , s = t[e];
                                            Array.isArray(s) ? function (t, e, n) {
                                                const s = document.createElement("select");
                                                s.classList.add(`ql-${e}`),
                                                    n.forEach((t => {
                                                        const e = document.createElement("option");
                                                        !1 !== t ? e.setAttribute("value", String(t)) : e.setAttribute("selected", "selected"),
                                                            s.appendChild(e)
                                                    }
                                                    )),
                                                    t.appendChild(s)
                                            }(n, e, s) : To(n, e, s)
                                        }
                                    }
                                    )),
                                    t.appendChild(n)
                            }
                            ))
                        }(e, this.options.container),
                        t.container?.parentNode?.insertBefore(e, t.container),
                        this.container = e
                } else
                    "string" == typeof this.options.container ? this.container = document.querySelector(this.options.container) : this.container = this.options.container;
                this.container instanceof HTMLElement ? (this.container.classList.add("ql-toolbar"),
                    this.controls = [],
                    this.handlers = {},
                    this.options.handlers && Object.keys(this.options.handlers).forEach((t => {
                        const e = this.options.handlers?.[t];
                        e && this.addHandler(t, e)
                    }
                    )),
                    Array.from(this.container.querySelectorAll("button, select")).forEach((t => {
                        this.attach(t)
                    }
                    )),
                    this.quill.on(Ir.events.EDITOR_CHANGE, (() => {
                        const [t] = this.quill.selection.getRange();
                        this.update(t)
                    }
                    ))) : Oo.error("Container required for toolbar", this.options)
            }
            addHandler(t, e) {
                this.handlers[t] = e
            }
            attach(t) {
                let e = Array.from(t.classList).find((t => 0 === t.indexOf("ql-")));
                if (!e)
                    return;
                if (e = e.slice(3),
                    "BUTTON" === t.tagName && t.setAttribute("type", "button"),
                    null == this.handlers[e] && null == this.quill.scroll.query(e))
                    return void Oo.warn("ignoring attaching to nonexistent format", e, t);
                const n = "SELECT" === t.tagName ? "change" : "click";
                t.addEventListener(n, (n => {
                    let s;
                    if ("SELECT" === t.tagName) {
                        if (t.selectedIndex < 0)
                            return;
                        const e = t.options[t.selectedIndex];
                        s = !e.hasAttribute("selected") && (e.value || !1)
                    } else
                        s = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value")),
                            n.preventDefault();
                    this.quill.focus();
                    const [r] = this.quill.selection.getRange();
                    if (null != this.handlers[e])
                        this.handlers[e].call(this, s);
                    else if (this.quill.scroll.query(e).prototype instanceof hn) {
                        if (s = prompt(`Enter ${e}`),
                            !s)
                            return;
                        this.quill.updateContents((new bn).retain(r.index).delete(r.length).insert({
                            [e]: s
                        }), Ir.sources.USER)
                    } else
                        this.quill.format(e, s, Ir.sources.USER);
                    this.update(r)
                }
                )),
                    this.controls.push([e, t])
            }
            update(t) {
                const e = null == t ? {} : this.quill.getFormat(t);
                this.controls.forEach((n => {
                    const [s, r] = n;
                    if ("SELECT" === r.tagName) {
                        let n = null;
                        if (null == t)
                            n = null;
                        else if (null == e[s])
                            n = r.querySelector("option[selected]");
                        else if (!Array.isArray(e[s])) {
                            let t = e[s];
                            "string" == typeof t && (t = t.replace(/"/g, '\\"')),
                                n = r.querySelector(`option[value="${t}"]`)
                        }
                        null == n ? (r.value = "",
                            r.selectedIndex = -1) : n.selected = !0
                    } else if (null == t)
                        r.classList.remove("ql-active"),
                            r.setAttribute("aria-pressed", "false");
                    else if (r.hasAttribute("value")) {
                        const t = e[s]
                            , n = t === r.getAttribute("value") || null != t && t.toString() === r.getAttribute("value") || null == t && !r.getAttribute("value");
                        r.classList.toggle("ql-active", n),
                            r.setAttribute("aria-pressed", n.toString())
                    } else {
                        const t = null != e[s];
                        r.classList.toggle("ql-active", t),
                            r.setAttribute("aria-pressed", t.toString())
                    }
                }
                ))
            }
        }
        function To(t, e, n) {
            const s = document.createElement("button");
            s.setAttribute("type", "button"),
                s.classList.add(`ql-${e}`),
                s.setAttribute("aria-pressed", "false"),
                null != n ? (s.value = n,
                    s.setAttribute("aria-label", `${e}: ${n}`)) : s.setAttribute("aria-label", e),
                t.appendChild(s)
        }
        So.DEFAULTS = {},
            So.DEFAULTS = {
                container: null,
                handlers: {
                    clean() {
                        const t = this.quill.getSelection();
                        if (null != t)
                            if (0 === t.length) {
                                const t = this.quill.getFormat();
                                Object.keys(t).forEach((t => {
                                    null != this.quill.scroll.query(t, Pe.INLINE) && this.quill.format(t, !1, Ir.sources.USER)
                                }
                                ))
                            } else
                                this.quill.removeFormat(t.index, t.length, Ir.sources.USER)
                    },
                    direction(t) {
                        const { align: e } = this.quill.getFormat();
                        "rtl" === t && null == e ? this.quill.format("align", "right", Ir.sources.USER) : t || "right" !== e || this.quill.format("align", !1, Ir.sources.USER),
                            this.quill.format("direction", t, Ir.sources.USER)
                    },
                    indent(t) {
                        const e = this.quill.getSelection()
                            , n = this.quill.getFormat(e)
                            , s = parseInt(n.indent || 0, 10);
                        if ("+1" === t || "-1" === t) {
                            let e = "+1" === t ? 1 : -1;
                            "rtl" === n.direction && (e *= -1),
                                this.quill.format("indent", s + e, Ir.sources.USER)
                        }
                    },
                    link(t) {
                        !0 === t && (t = prompt("Enter link URL:")),
                            this.quill.format("link", t, Ir.sources.USER)
                    },
                    list(t) {
                        const e = this.quill.getSelection()
                            , n = this.quill.getFormat(e);
                        "check" === t ? "checked" === n.list || "unchecked" === n.list ? this.quill.format("list", !1, Ir.sources.USER) : this.quill.format("list", "unchecked", Ir.sources.USER) : this.quill.format("list", t, Ir.sources.USER)
                    }
                }
            };
        const jo = '<svg viewbox="0 0 18 18"><polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"/><polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"/><line class="ql-stroke" x1="10" x2="8" y1="5" y2="13"/></svg>'
            , Co = {
                align: {
                    "": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"/></svg>',
                    center: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"/><line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"/></svg>',
                    right: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"/></svg>',
                    justify: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="15" x2="3" y1="14" y2="14"/><line class="ql-stroke" x1="15" x2="3" y1="4" y2="4"/></svg>'
                },
                background: '<svg viewbox="0 0 18 18"><g class="ql-fill ql-color-label"><polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"/><rect height="1" width="1" x="4" y="4"/><polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"/><rect height="1" width="1" x="2" y="6"/><rect height="1" width="1" x="3" y="5"/><rect height="1" width="1" x="4" y="7"/><polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"/><rect height="1" width="1" x="2" y="12"/><rect height="1" width="1" x="2" y="9"/><rect height="1" width="1" x="2" y="15"/><polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"/><rect height="1" width="1" x="3" y="8"/><path d="M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z"/><path d="M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z"/><path d="M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z"/><rect height="1" width="1" x="12" y="2"/><rect height="1" width="1" x="11" y="3"/><path d="M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z"/><rect height="1" width="1" x="2" y="3"/><rect height="1" width="1" x="6" y="2"/><rect height="1" width="1" x="3" y="2"/><rect height="1" width="1" x="5" y="3"/><rect height="1" width="1" x="9" y="2"/><rect height="1" width="1" x="15" y="14"/><polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"/><rect height="1" width="1" x="13" y="7"/><rect height="1" width="1" x="15" y="5"/><rect height="1" width="1" x="14" y="6"/><rect height="1" width="1" x="15" y="8"/><rect height="1" width="1" x="14" y="9"/><path d="M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z"/><rect height="1" width="1" x="14" y="3"/><polygon points="12 6.868 12 6 11.62 6 12 6.868"/><rect height="1" width="1" x="15" y="2"/><rect height="1" width="1" x="12" y="5"/><rect height="1" width="1" x="13" y="4"/><polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"/><rect height="1" width="1" x="9" y="14"/><rect height="1" width="1" x="8" y="15"/><path d="M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z"/><rect height="1" width="1" x="5" y="15"/><path d="M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z"/><rect height="1" width="1" x="11" y="15"/><path d="M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z"/><rect height="1" width="1" x="14" y="15"/><rect height="1" width="1" x="15" y="11"/></g><polyline class="ql-stroke" points="5.5 13 9 5 12.5 13"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="11" y2="11"/></svg>',
                blockquote: '<svg viewbox="0 0 18 18"><rect class="ql-fill ql-stroke" height="3" width="3" x="4" y="5"/><rect class="ql-fill ql-stroke" height="3" width="3" x="11" y="5"/><path class="ql-even ql-fill ql-stroke" d="M7,8c0,4.031-3,5-3,5"/><path class="ql-even ql-fill ql-stroke" d="M14,8c0,4.031-3,5-3,5"/></svg>',
                bold: '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"/><path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"/></svg>',
                clean: '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"/><line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"/><line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"/><line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"/></svg>',
                code: jo,
                "code-block": jo,
                color: '<svg viewbox="0 0 18 18"><line class="ql-color-label ql-stroke ql-transparent" x1="3" x2="15" y1="15" y2="15"/><polyline class="ql-stroke" points="5.5 11 9 3 12.5 11"/><line class="ql-stroke" x1="11.63" x2="6.38" y1="9" y2="9"/></svg>',
                direction: {
                    "": '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"/><line class="ql-stroke ql-fill" x1="15" x2="11" y1="4" y2="4"/><path class="ql-fill" d="M11,3a3,3,0,0,0,0,6h1V3H11Z"/><rect class="ql-fill" height="11" width="1" x="11" y="4"/><rect class="ql-fill" height="11" width="1" x="13" y="4"/></svg>',
                    rtl: '<svg viewbox="0 0 18 18"><polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"/><line class="ql-stroke ql-fill" x1="9" x2="5" y1="4" y2="4"/><path class="ql-fill" d="M5,3A3,3,0,0,0,5,9H6V3H5Z"/><rect class="ql-fill" height="11" width="1" x="5" y="4"/><rect class="ql-fill" height="11" width="1" x="7" y="4"/></svg>'
                },
                formula: '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"/><rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"/><path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"/></svg>',
                header: {
                    1: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z"/></svg>',
                    2: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
                    3: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.65186,12.30664a2.6742,2.6742,0,0,1-2.915,2.68457,3.96592,3.96592,0,0,1-2.25537-.6709.56007.56007,0,0,1-.13232-.83594L11.64648,13c.209-.34082.48389-.36328.82471-.1543a2.32654,2.32654,0,0,0,1.12256.33008c.71484,0,1.12207-.35156,1.12207-.78125,0-.61523-.61621-.86816-1.46338-.86816H13.2085a.65159.65159,0,0,1-.68213-.41895l-.05518-.10937a.67114.67114,0,0,1,.14307-.78125l.71533-.86914a8.55289,8.55289,0,0,1,.68213-.7373V8.58887a3.93913,3.93913,0,0,1-.748.05469H11.9873a.54085.54085,0,0,1-.605-.60547V7.59863a.54085.54085,0,0,1,.605-.60547h3.75146a.53773.53773,0,0,1,.60547.59375v.17676a1.03723,1.03723,0,0,1-.27539.748L14.74854,10.0293A2.31132,2.31132,0,0,1,16.65186,12.30664ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
                    4: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm7.05371,7.96582v.38477c0,.39648-.165.60547-.46191.60547h-.47314v1.29785a.54085.54085,0,0,1-.605.60547h-.69336a.54085.54085,0,0,1-.605-.60547V12.95605H11.333a.5412.5412,0,0,1-.60547-.60547v-.15332a1.199,1.199,0,0,1,.22021-.748l2.56348-4.05957a.7819.7819,0,0,1,.72607-.39648h1.27637a.54085.54085,0,0,1,.605.60547v3.7627h.33008A.54055.54055,0,0,1,17.05371,11.96582ZM14.28125,8.7207h-.022a4.18969,4.18969,0,0,1-.38525.81348l-1.188,1.80469v.02246h1.5293V9.60059A7.04058,7.04058,0,0,1,14.28125,8.7207Z"/></svg>',
                    5: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M16.74023,12.18555a2.75131,2.75131,0,0,1-2.91553,2.80566,3.908,3.908,0,0,1-2.25537-.68164.54809.54809,0,0,1-.13184-.8252L11.73438,13c.209-.34082.48389-.36328.8252-.1543a2.23757,2.23757,0,0,0,1.1001.33008,1.01827,1.01827,0,0,0,1.1001-.96777c0-.61621-.53906-.97949-1.25439-.97949a2.15554,2.15554,0,0,0-.64893.09961,1.15209,1.15209,0,0,1-.814.01074l-.12109-.04395a.64116.64116,0,0,1-.45117-.71484l.231-3.00391a.56666.56666,0,0,1,.62744-.583H15.541a.54085.54085,0,0,1,.605.60547v.43945a.54085.54085,0,0,1-.605.60547H13.41748l-.04395.72559a1.29306,1.29306,0,0,1-.04395.30859h.022a2.39776,2.39776,0,0,1,.57227-.07715A2.53266,2.53266,0,0,1,16.74023,12.18555ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z"/></svg>',
                    6: '<svg viewBox="0 0 18 18"><path class="ql-fill" d="M14.51758,9.64453a1.85627,1.85627,0,0,0-1.24316.38477H13.252a1.73532,1.73532,0,0,1,1.72754-1.4082,2.66491,2.66491,0,0,1,.5498.06641c.35254.05469.57227.01074.70508-.40723l.16406-.5166a.53393.53393,0,0,0-.373-.75977,4.83723,4.83723,0,0,0-1.17773-.14258c-2.43164,0-3.7627,2.17773-3.7627,4.43359,0,2.47559,1.60645,3.69629,3.19043,3.69629A2.70585,2.70585,0,0,0,16.96,12.19727,2.43861,2.43861,0,0,0,14.51758,9.64453Zm-.23047,3.58691c-.67187,0-1.22168-.81445-1.22168-1.45215,0-.47363.30762-.583.72559-.583.96875,0,1.27734.59375,1.27734,1.12207A.82182.82182,0,0,1,14.28711,13.23145ZM10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Z"/></svg>'
                },
                italic: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"/><line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"/><line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"/></svg>',
                image: '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="10" width="12" x="3" y="4"/><circle class="ql-fill" cx="6" cy="7" r="1"/><polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"/></svg>',
                indent: {
                    "+1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"/></svg>',
                    "-1": '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="3" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="5 7 5 11 3 9 5 7"/></svg>'
                },
                link: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"/><path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"/><path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"/></svg>',
                list: {
                    bullet: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"/><line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"/><line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"/><line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"/></svg>',
                    check: '<svg class="" viewbox="0 0 18 18"><line class="ql-stroke" x1="9" x2="15" y1="4" y2="4"/><polyline class="ql-stroke" points="3 4 4 5 6 3"/><line class="ql-stroke" x1="9" x2="15" y1="14" y2="14"/><polyline class="ql-stroke" points="3 14 4 15 6 13"/><line class="ql-stroke" x1="9" x2="15" y1="9" y2="9"/><polyline class="ql-stroke" points="3 9 4 10 6 8"/></svg>',
                    ordered: '<svg viewbox="0 0 18 18"><line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"/><line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"/><line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"/><line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"/><path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"/><path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"/><path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"/></svg>'
                },
                script: {
                    sub: '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z"/><path class="ql-fill" d="M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z"/></svg>',
                    super: '<svg viewbox="0 0 18 18"><path class="ql-fill" d="M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z"/><path class="ql-fill" d="M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z"/></svg>'
                },
                strike: '<svg viewbox="0 0 18 18"><line class="ql-stroke ql-thin" x1="15.5" x2="2.5" y1="8.5" y2="9.5"/><path class="ql-fill" d="M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z"/><path class="ql-fill" d="M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z"/></svg>',
                table: '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="2" width="3" x="5" y="5"/><rect class="ql-fill" height="2" width="4" x="9" y="5"/><g class="ql-fill ql-transparent"><rect height="2" width="3" x="5" y="8"/><rect height="2" width="4" x="9" y="8"/><rect height="2" width="3" x="5" y="11"/><rect height="2" width="4" x="9" y="11"/></g></svg>',
                underline: '<svg viewbox="0 0 18 18"><path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"/><rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"/></svg>',
                video: '<svg viewbox="0 0 18 18"><rect class="ql-stroke" height="12" width="12" x="3" y="3"/><rect class="ql-fill" height="12" width="1" x="5" y="3"/><rect class="ql-fill" height="12" width="1" x="12" y="3"/><rect class="ql-fill" height="2" width="8" x="5" y="8"/><rect class="ql-fill" height="1" width="3" x="3" y="5"/><rect class="ql-fill" height="1" width="3" x="3" y="7"/><rect class="ql-fill" height="1" width="3" x="3" y="10"/><rect class="ql-fill" height="1" width="3" x="3" y="12"/><rect class="ql-fill" height="1" width="3" x="12" y="5"/><rect class="ql-fill" height="1" width="3" x="12" y="7"/><rect class="ql-fill" height="1" width="3" x="12" y="10"/><rect class="ql-fill" height="1" width="3" x="12" y="12"/></svg>'
            };
        let Ro = 0;
        function Io(t, e) {
            t.setAttribute(e, `${!("true" === t.getAttribute(e))}`)
        }
        const Mo = class {
            constructor(t) {
                this.select = t,
                    this.container = document.createElement("span"),
                    this.buildPicker(),
                    this.select.style.display = "none",
                    this.select.parentNode.insertBefore(this.container, this.select),
                    this.label.addEventListener("mousedown", (() => {
                        this.togglePicker()
                    }
                    )),
                    this.label.addEventListener("keydown", (t => {
                        switch (t.key) {
                            case "Enter":
                                this.togglePicker();
                                break;
                            case "Escape":
                                this.escape(),
                                    t.preventDefault()
                        }
                    }
                    )),
                    this.select.addEventListener("change", this.update.bind(this))
            }
            togglePicker() {
                this.container.classList.toggle("ql-expanded"),
                    Io(this.label, "aria-expanded"),
                    Io(this.options, "aria-hidden")
            }
            buildItem(t) {
                const e = document.createElement("span");
                e.tabIndex = "0",
                    e.setAttribute("role", "button"),
                    e.classList.add("ql-picker-item");
                const n = t.getAttribute("value");
                return n && e.setAttribute("data-value", n),
                    t.textContent && e.setAttribute("data-label", t.textContent),
                    e.addEventListener("click", (() => {
                        this.selectItem(e, !0)
                    }
                    )),
                    e.addEventListener("keydown", (t => {
                        switch (t.key) {
                            case "Enter":
                                this.selectItem(e, !0),
                                    t.preventDefault();
                                break;
                            case "Escape":
                                this.escape(),
                                    t.preventDefault()
                        }
                    }
                    )),
                    e
            }
            buildLabel() {
                const t = document.createElement("span");
                return t.classList.add("ql-picker-label"),
                    t.innerHTML = '<svg viewbox="0 0 18 18"><polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"/><polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"/></svg>',
                    t.tabIndex = "0",
                    t.setAttribute("role", "button"),
                    t.setAttribute("aria-expanded", "false"),
                    this.container.appendChild(t),
                    t
            }
            buildOptions() {
                const t = document.createElement("span");
                t.classList.add("ql-picker-options"),
                    t.setAttribute("aria-hidden", "true"),
                    t.tabIndex = "-1",
                    t.id = `ql-picker-options-${Ro}`,
                    Ro += 1,
                    this.label.setAttribute("aria-controls", t.id),
                    this.options = t,
                    Array.from(this.select.options).forEach((e => {
                        const n = this.buildItem(e);
                        t.appendChild(n),
                            !0 === e.selected && this.selectItem(n)
                    }
                    )),
                    this.container.appendChild(t)
            }
            buildPicker() {
                Array.from(this.select.attributes).forEach((t => {
                    this.container.setAttribute(t.name, t.value)
                }
                )),
                    this.container.classList.add("ql-picker"),
                    this.label = this.buildLabel(),
                    this.buildOptions()
            }
            escape() {
                this.close(),
                    setTimeout((() => this.label.focus()), 1)
            }
            close() {
                this.container.classList.remove("ql-expanded"),
                    this.label.setAttribute("aria-expanded", "false"),
                    this.options.setAttribute("aria-hidden", "true")
            }
            selectItem(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const n = this.container.querySelector(".ql-selected");
                t !== n && (null != n && n.classList.remove("ql-selected"),
                    null != t && (t.classList.add("ql-selected"),
                        this.select.selectedIndex = Array.from(t.parentNode.children).indexOf(t),
                        t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"),
                        t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"),
                        e && (this.select.dispatchEvent(new Event("change")),
                            this.close())))
            }
            update() {
                let t;
                if (this.select.selectedIndex > -1) {
                    const e = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
                    t = this.select.options[this.select.selectedIndex],
                        this.selectItem(e)
                } else
                    this.selectItem(null);
                const e = null != t && t !== this.select.querySelector("option[selected]");
                this.label.classList.toggle("ql-active", e)
            }
        }
            ;
        const Bo = class extends Mo {
            constructor(t, e) {
                super(t),
                    this.label.innerHTML = e,
                    this.container.classList.add("ql-color-picker"),
                    Array.from(this.container.querySelectorAll(".ql-picker-item")).slice(0, 7).forEach((t => {
                        t.classList.add("ql-primary")
                    }
                    ))
            }
            buildItem(t) {
                const e = super.buildItem(t);
                return e.style.backgroundColor = t.getAttribute("value") || "",
                    e
            }
            selectItem(t, e) {
                super.selectItem(t, e);
                const n = this.label.querySelector(".ql-color-label")
                    , s = t && t.getAttribute("data-value") || "";
                n && ("line" === n.tagName ? n.style.stroke = s : n.style.fill = s)
            }
        }
            ;
        const Do = class extends Mo {
            constructor(t, e) {
                super(t),
                    this.container.classList.add("ql-icon-picker"),
                    Array.from(this.container.querySelectorAll(".ql-picker-item")).forEach((t => {
                        t.innerHTML = e[t.getAttribute("data-value") || ""]
                    }
                    )),
                    this.defaultItem = this.container.querySelector(".ql-selected"),
                    this.selectItem(this.defaultItem)
            }
            selectItem(t, e) {
                super.selectItem(t, e);
                const n = t || this.defaultItem;
                if (null != n) {
                    if (this.label.innerHTML === n.innerHTML)
                        return;
                    this.label.innerHTML = n.innerHTML
                }
            }
        }
            ;
        const Uo = class {
            constructor(t, e) {
                this.quill = t,
                    this.boundsContainer = e || document.body,
                    this.root = t.addContainer("ql-tooltip"),
                    this.root.innerHTML = this.constructor.TEMPLATE,
                    (t => {
                        const { overflowY: e } = getComputedStyle(t, null);
                        return "visible" !== e && "clip" !== e
                    }
                    )(this.quill.root) && this.quill.root.addEventListener("scroll", (() => {
                        this.root.style.marginTop = -1 * this.quill.root.scrollTop + "px"
                    }
                    )),
                    this.hide()
            }
            hide() {
                this.root.classList.add("ql-hidden")
            }
            position(t) {
                const e = t.left + t.width / 2 - this.root.offsetWidth / 2
                    , n = t.bottom + this.quill.root.scrollTop;
                this.root.style.left = `${e}px`,
                    this.root.style.top = `${n}px`,
                    this.root.classList.remove("ql-flip");
                const s = this.boundsContainer.getBoundingClientRect()
                    , r = this.root.getBoundingClientRect();
                let i = 0;
                if (r.right > s.right && (i = s.right - r.right,
                    this.root.style.left = `${e + i}px`),
                    r.left < s.left && (i = s.left - r.left,
                        this.root.style.left = `${e + i}px`),
                    r.bottom > s.bottom) {
                    const e = r.bottom - r.top
                        , s = t.bottom - t.top + e;
                    this.root.style.top = n - s + "px",
                        this.root.classList.add("ql-flip")
                }
                return i
            }
            show() {
                this.root.classList.remove("ql-editing"),
                    this.root.classList.remove("ql-hidden")
            }
        }
            , Po = [!1, "center", "right", "justify"]
            , zo = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"]
            , Fo = [!1, "serif", "monospace"]
            , Ho = ["1", "2", "3", !1]
            , $o = ["small", !1, "large", "huge"];
        class Vo extends kr {
            constructor(t, e) {
                super(t, e);
                const n = e => {
                    document.body.contains(t.root) ? (null == this.tooltip || this.tooltip.root.contains(e.target) || document.activeElement === this.tooltip.textbox || this.quill.hasFocus() || this.tooltip.hide(),
                        null != this.pickers && this.pickers.forEach((t => {
                            t.container.contains(e.target) || t.close()
                        }
                        ))) : document.body.removeEventListener("click", n)
                }
                    ;
                t.emitter.listenDOM("click", document.body, n)
            }
            addModule(t) {
                const e = super.addModule(t);
                return "toolbar" === t && this.extendToolbar(e),
                    e
            }
            buildButtons(t, e) {
                Array.from(t).forEach((t => {
                    (t.getAttribute("class") || "").split(/\s+/).forEach((n => {
                        if (n.startsWith("ql-") && (n = n.slice(3),
                            null != e[n]))
                            if ("direction" === n)
                                t.innerHTML = e[n][""] + e[n].rtl;
                            else if ("string" == typeof e[n])
                                t.innerHTML = e[n];
                            else {
                                const s = t.value || "";
                                null != s && e[n][s] && (t.innerHTML = e[n][s])
                            }
                    }
                    ))
                }
                ))
            }
            buildPickers(t, e) {
                this.pickers = Array.from(t).map((t => {
                    if (t.classList.contains("ql-align") && (null == t.querySelector("option") && Wo(t, Po),
                        "object" == typeof e.align))
                        return new Do(t, e.align);
                    if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
                        const n = t.classList.contains("ql-background") ? "background" : "color";
                        return null == t.querySelector("option") && Wo(t, zo, "background" === n ? "#ffffff" : "#000000"),
                            new Bo(t, e[n])
                    }
                    return null == t.querySelector("option") && (t.classList.contains("ql-font") ? Wo(t, Fo) : t.classList.contains("ql-header") ? Wo(t, Ho) : t.classList.contains("ql-size") && Wo(t, $o)),
                        new Mo(t)
                }
                ));
                this.quill.on(ar.events.EDITOR_CHANGE, (() => {
                    this.pickers.forEach((t => {
                        t.update()
                    }
                    ))
                }
                ))
            }
        }
        Vo.DEFAULTS = Ue({}, kr.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        formula() {
                            this.quill.theme.tooltip.edit("formula")
                        },
                        image() {
                            let t = this.container.querySelector("input.ql-image[type=file]");
                            null == t && (t = document.createElement("input"),
                                t.setAttribute("type", "file"),
                                t.setAttribute("accept", this.quill.uploader.options.mimetypes.join(", ")),
                                t.classList.add("ql-image"),
                                t.addEventListener("change", (() => {
                                    const e = this.quill.getSelection(!0);
                                    this.quill.uploader.upload(e, t.files),
                                        t.value = ""
                                }
                                )),
                                this.container.appendChild(t)),
                                t.click()
                        },
                        video() {
                            this.quill.theme.tooltip.edit("video")
                        }
                    }
                }
            }
        });
        class Ko extends Uo {
            constructor(t, e) {
                super(t, e),
                    this.textbox = this.root.querySelector('input[type="text"]'),
                    this.listen()
            }
            listen() {
                this.textbox.addEventListener("keydown", (t => {
                    "Enter" === t.key ? (this.save(),
                        t.preventDefault()) : "Escape" === t.key && (this.cancel(),
                            t.preventDefault())
                }
                ))
            }
            cancel() {
                this.hide(),
                    this.restoreFocus()
            }
            edit() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link"
                    , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (this.root.classList.remove("ql-hidden"),
                    this.root.classList.add("ql-editing"),
                    null == this.textbox)
                    return;
                null != e ? this.textbox.value = e : t !== this.root.getAttribute("data-mode") && (this.textbox.value = "");
                const n = this.quill.getBounds(this.quill.selection.savedRange);
                null != n && this.position(n),
                    this.textbox.select(),
                    this.textbox.setAttribute("placeholder", this.textbox.getAttribute(`data-${t}`) || ""),
                    this.root.setAttribute("data-mode", t)
            }
            restoreFocus() {
                this.quill.focus({
                    preventScroll: !0
                })
            }
            save() {
                let { value: t } = this.textbox;
                switch (this.root.getAttribute("data-mode")) {
                    case "link":
                        {
                            const { scrollTop: e } = this.quill.root;
                            this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, ar.sources.USER),
                                delete this.linkRange) : (this.restoreFocus(),
                                    this.quill.format("link", t, ar.sources.USER)),
                                this.quill.root.scrollTop = e;
                            break
                        }
                    case "video":
                        t = function (t) {
                            let e = t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
                            if (e)
                                return `${e[1] || "https"}://www.youtube.com/embed/${e[2]}?showinfo=0`;
                            if (e = t.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/))
                                return `${e[1] || "https"}://player.vimeo.com/video/${e[2]}/`;
                            return t
                        }(t);
                    case "formula":
                        {
                            if (!t)
                                break;
                            const e = this.quill.getSelection(!0);
                            if (null != e) {
                                const n = e.index + e.length;
                                this.quill.insertEmbed(n, this.root.getAttribute("data-mode"), t, ar.sources.USER),
                                    "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(n + 1, " ", ar.sources.USER),
                                    this.quill.setSelection(n + 2, ar.sources.USER)
                            }
                            break
                        }
                }
                this.textbox.value = "",
                    this.hide()
            }
        }
        function Wo(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e.forEach((e => {
                const s = document.createElement("option");
                e === n ? s.setAttribute("selected", "selected") : s.setAttribute("value", String(e)),
                    t.appendChild(s)
            }
            ))
        }
        const Zo = [["bold", "italic", "link"], [{
            header: 1
        }, {
            header: 2
        }, "blockquote"]];
        class Go extends Ko {
            static TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join("");
            constructor(t, e) {
                super(t, e),
                    this.quill.on(ar.events.EDITOR_CHANGE, ((t, e, n, s) => {
                        if (t === ar.events.SELECTION_CHANGE)
                            if (null != e && e.length > 0 && s === ar.sources.USER) {
                                this.show(),
                                    this.root.style.left = "0px",
                                    this.root.style.width = "",
                                    this.root.style.width = `${this.root.offsetWidth}px`;
                                const t = this.quill.getLines(e.index, e.length);
                                if (1 === t.length) {
                                    const t = this.quill.getBounds(e);
                                    null != t && this.position(t)
                                } else {
                                    const n = t[t.length - 1]
                                        , s = this.quill.getIndex(n)
                                        , r = Math.min(n.length() - 1, e.index + e.length - s)
                                        , i = this.quill.getBounds(new ur(s, r));
                                    null != i && this.position(i)
                                }
                            } else
                                document.activeElement !== this.textbox && this.quill.hasFocus() && this.hide()
                    }
                    ))
            }
            listen() {
                super.listen(),
                    this.root.querySelector(".ql-close").addEventListener("click", (() => {
                        this.root.classList.remove("ql-editing")
                    }
                    )),
                    this.quill.on(ar.events.SCROLL_OPTIMIZE, (() => {
                        setTimeout((() => {
                            if (this.root.classList.contains("ql-hidden"))
                                return;
                            const t = this.quill.getSelection();
                            if (null != t) {
                                const e = this.quill.getBounds(t);
                                null != e && this.position(e)
                            }
                        }
                        ), 1)
                    }
                    ))
            }
            cancel() {
                this.show()
            }
            position(t) {
                const e = super.position(t)
                    , n = this.root.querySelector(".ql-tooltip-arrow");
                return n.style.marginLeft = "",
                    0 !== e && (n.style.marginLeft = -1 * e - n.offsetWidth / 2 + "px"),
                    e
            }
        }
        class Xo extends Vo {
            constructor(t, e) {
                null != e.modules.toolbar && null == e.modules.toolbar.container && (e.modules.toolbar.container = Zo),
                    super(t, e),
                    this.quill.container.classList.add("ql-bubble")
            }
            extendToolbar(t) {
                this.tooltip = new Go(this.quill, this.options.bounds),
                    null != t.container && (this.tooltip.root.appendChild(t.container),
                        this.buildButtons(t.container.querySelectorAll("button"), Co),
                        this.buildPickers(t.container.querySelectorAll("select"), Co))
            }
        }
        Xo.DEFAULTS = Ue({}, Vo.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        link(t) {
                            t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1, Ir.sources.USER)
                        }
                    }
                }
            }
        });
        const Yo = [[{
            header: ["1", "2", "3", !1]
        }], ["bold", "italic", "underline", "link"], [{
            list: "ordered"
        }, {
            list: "bullet"
        }], ["clean"]];
        class Qo extends Ko {
            static TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join("");
            preview = this.root.querySelector("a.ql-preview");
            listen() {
                super.listen(),
                    this.root.querySelector("a.ql-action").addEventListener("click", (t => {
                        this.root.classList.contains("ql-editing") ? this.save() : this.edit("link", this.preview.textContent),
                            t.preventDefault()
                    }
                    )),
                    this.root.querySelector("a.ql-remove").addEventListener("click", (t => {
                        if (null != this.linkRange) {
                            const t = this.linkRange;
                            this.restoreFocus(),
                                this.quill.formatText(t, "link", !1, ar.sources.USER),
                                delete this.linkRange
                        }
                        t.preventDefault(),
                            this.hide()
                    }
                    )),
                    this.quill.on(ar.events.SELECTION_CHANGE, ((t, e, n) => {
                        if (null != t) {
                            if (0 === t.length && n === ar.sources.USER) {
                                const [e, n] = this.quill.scroll.descendant(lo, t.index);
                                if (null != e) {
                                    this.linkRange = new ur(t.index - n, e.length());
                                    const s = lo.formats(e.domNode);
                                    this.preview.textContent = s,
                                        this.preview.setAttribute("href", s),
                                        this.show();
                                    const r = this.quill.getBounds(this.linkRange);
                                    return void (null != r && this.position(r))
                                }
                            } else
                                delete this.linkRange;
                            this.hide()
                        }
                    }
                    ))
            }
            show() {
                super.show(),
                    this.root.removeAttribute("data-mode")
            }
        }
        class Jo extends Vo {
            constructor(t, e) {
                null != e.modules.toolbar && null == e.modules.toolbar.container && (e.modules.toolbar.container = Yo),
                    super(t, e),
                    this.quill.container.classList.add("ql-snow")
            }
            extendToolbar(t) {
                null != t.container && (t.container.classList.add("ql-snow"),
                    this.buildButtons(t.container.querySelectorAll("button"), Co),
                    this.buildPickers(t.container.querySelectorAll("select"), Co),
                    this.tooltip = new Qo(this.quill, this.options.bounds),
                    t.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({
                        key: "k",
                        shortKey: !0
                    }, ((e, n) => {
                        t.handlers.link.call(t, !n.format.link)
                    }
                    )))
            }
        }
        Jo.DEFAULTS = Ue({}, Vo.DEFAULTS, {
            modules: {
                toolbar: {
                    handlers: {
                        link(t) {
                            if (t) {
                                const t = this.quill.getSelection();
                                if (null == t || 0 === t.length)
                                    return;
                                let e = this.quill.getText(t);
                                /^\S+@\S+\.\S+$/.test(e) && 0 !== e.indexOf("mailto:") && (e = `mailto:${e}`);
                                const { tooltip: n } = this.quill.theme;
                                n.edit("link", e)
                            } else
                                this.quill.format("link", !1, Ir.sources.USER)
                        }
                    }
                }
            }
        });
        const tl = Jo;
        Qi.register({
            "attributors/attribute/direction": oi,
            "attributors/class/align": Gr,
            "attributors/class/background": ti,
            "attributors/class/color": Qr,
            "attributors/class/direction": li,
            "attributors/class/font": ui,
            "attributors/class/size": di,
            "attributors/style/align": Xr,
            "attributors/style/background": ei,
            "attributors/style/color": Jr,
            "attributors/style/direction": ai,
            "attributors/style/font": hi,
            "attributors/style/size": fi
        }, !0),
            Qi.register({
                "formats/align": Gr,
                "formats/direction": li,
                "formats/indent": to,
                "formats/background": ei,
                "formats/color": Jr,
                "formats/font": ui,
                "formats/size": di,
                "formats/blockquote": eo,
                "formats/code-block": si,
                "formats/header": no,
                "formats/list": ro,
                "formats/bold": io,
                "formats/code": ri,
                "formats/italic": oo,
                "formats/link": lo,
                "formats/script": co,
                "formats/strike": uo,
                "formats/underline": ho,
                "formats/formula": fo,
                "formats/image": go,
                "formats/video": bo,
                "modules/syntax": Eo,
                "modules/table": Lo,
                "modules/toolbar": So,
                "themes/bubble": Xo,
                "themes/snow": tl,
                "ui/icons": Co,
                "ui/picker": Mo,
                "ui/icon-picker": Do,
                "ui/color-picker": Bo,
                "ui/tooltip": Uo
            }, !0);
        const el = Qi
    }
}]);
