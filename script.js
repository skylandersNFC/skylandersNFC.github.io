function onLoadHandler() {
    class t {
        constructor(t, e) {
            this.TWO_PWR_16_DBL = 65536, this.TWO_PWR_32_DBL = this.TWO_PWR_16_DBL * this.TWO_PWR_16_DBL, this.TWO_PWR_64_DBL = this.TWO_PWR_32_DBL * this.TWO_PWR_32_DBL, this.low = 0 | t, this.high = 0 | e
        }
        fromNumber(e) {
            return e < 0 ? this.fromNumber(-e).neg() : new t(e % this.TWO_PWR_32_DBL | 0, e / this.TWO_PWR_32_DBL | 0)
        }
        neg() {
            return new t(~this.low, ~this.high).add(new t(1, 0))
        }
        add(e) {
            var n = this.high >>> 16,
                r = 65535 & this.high,
                i = this.low >>> 16,
                h = 65535 & this.low,
                o = e.high >>> 16,
                l = 65535 & e.high,
                s = e.low >>> 16,
                a = 0,
                w = 0,
                d = 0,
                u = 0;
            return d += (u += h + (65535 & e.low)) >>> 16, w += (d += i + s) >>> 16, a += (w += r + l) >>> 16, a += n + o, new t((d &= 65535) << 16 | (u &= 65535), (a &= 65535) << 16 | (w &= 65535))
        }
        shiftLeft(e) {
            return 0 == (e &= 63) ? this : e < 32 ? new t(this.low << e, this.high << e | this.low >>> 32 - e) : new t(0, this.low << e - 32)
        }
        xor(e) {
            return new t(this.low ^ e.low, this.high ^ e.high)
        }
        and(e) {
            return new t(this.low & e.low, this.high & e.high)
        }
        equals(t) {
            return this.high === t.high && this.low === t.low
        }
        toBytesLE() {
            var t = this.high,
                e = this.low;
            return [255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24]
        }
        toBytesBE() {
            var t = this.high,
                e = this.low;
            return [t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
        }
    }
    var e = [2, 3, 73, 1103, 2017, 560381651, 12868356821];

    function n(n, r) {
        if (0 === r) return (new t).fromNumber(e[2] * e[4] * e[5]).toBytesBE().slice(2);
        var i = e[0] * e[0] * e[1] * e[3] * e[6],
            h = new Uint8Array(n.length + 1);
        return h.set(n), h.set(new Uint8Array([r]), n.length),
            function(e, n) {
                e = (new t).fromNumber(e);
                var r = new t(2850698899, 1123082731),
                    i = new t(0, 32768),
                    h = new t(4294967295, 65535);
                for (let l = 0; l < n.length; l++) {
                    var o = (new t).fromNumber(n[l]).shiftLeft(40);
                    e = e.xor(o);
                    for (let t = 0; t < 8; t++) e = (e = e.and(i).equals(i) ? (e = e.shiftLeft(1)).xor(r) : e.shiftLeft(1)).and(h)
                }
                return e
            }(i, h).toBytesLE().slice(0, 6)
    }
    var r = null,
        i = document.getElementById("fileInput");

    function h(t, e) {
        var r = new Uint8Array(t.length);
        for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
        if (1024 === r.length) {
            var i = r.slice(0, 4),
                h = 0;
            for (let t = 48; t < r.length; t += 64) {
                var o = n(i, h);
                for (let e = 0; e < o.length; e++) r[t + e] = o[e];
                h++
            }
        }
        if (e) {
            var l = new r.constructor(r.length + 3072);
            return l.set(r, 0), l.set(new Uint8Array(3072), r.length), l
        }
        return r
    }

    function o(t) {
        var e = new Blob([t], {
            type: "application/octet-stream"
        });
        return window.URL.createObjectURL(e)
    }
    i.addEventListener("change", function(t) {
        r = i.files[0];
        var e = new FileReader;
        e.onload = function(t) {
            var n = h(e.result, !1),
                i = document.getElementById("download1k");
            i.download = r.name.replace(/\.[^.]+$/, ".dump"), i.style.display = "inline", i.href = o(n), n = h(e.result, !0);
        }, e.readAsBinaryString(r)
    })
}
window.addEventListener ? window.addEventListener("load", onLoadHandler) : window.attachEvent && window.attachEvent("onload", onLoadHandler);