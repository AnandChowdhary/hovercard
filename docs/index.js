!(function(e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t();
  else if ("function" == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r];
  }
})(window, function() {
  return (function(e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 0))
    );
  })([
    function(e, t, n) {
      "use strict";
      var r,
        o =
          (this && this.__extends) ||
          ((r = function(e, t) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                  e.__proto__ = t;
                }) ||
              function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
              })(e, t);
          }),
          function(e, t) {
            function n() {
              this.constructor = e;
            }
            r(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        i =
          (this && this.__awaiter) ||
          function(e, t, n, r) {
            return new (n || (n = Promise))(function(o, i) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(e) {
                e.done
                  ? o(e.value)
                  : new n(function(t) {
                      t(e.value);
                    }).then(a, s);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
        a =
          (this && this.__generator) ||
          function(e, t) {
            var n,
              r,
              o,
              i,
              a = {
                label: 0,
                sent: function() {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: []
              };
            return (
              (i = { next: s(0), throw: s(1), return: s(2) }),
              "function" == typeof Symbol &&
                (i[Symbol.iterator] = function() {
                  return this;
                }),
              i
            );
            function s(i) {
              return function(s) {
                return (function(i) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & i[0]
                              ? r.return
                              : i[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                          !(o = o.call(r, i[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                        case 0:
                        case 1:
                          o = i;
                          break;
                        case 4:
                          return a.label++, { value: i[1], done: !1 };
                        case 5:
                          a.label++, (r = i[1]), (i = [0]);
                          continue;
                        case 7:
                          (i = a.ops.pop()), a.trys.pop();
                          continue;
                        default:
                          if (
                            !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0])
                          ) {
                            a = 0;
                            continue;
                          }
                          if (
                            3 === i[0] &&
                            (!o || (i[1] > o[0] && i[1] < o[3]))
                          ) {
                            a.label = i[1];
                            break;
                          }
                          if (6 === i[0] && a.label < o[1]) {
                            (a.label = o[1]), (o = i);
                            break;
                          }
                          if (o && a.label < o[2]) {
                            (a.label = o[2]), a.ops.push(i);
                            break;
                          }
                          o[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i = t.call(e, a);
                    } catch (e) {
                      (i = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & i[0]) throw i[1];
                  return { value: i[0] ? i[1] : void 0, done: !0 };
                })([i, s]);
              };
            }
          },
        s =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = s(n(1)),
        f = s(n(3));
      n(5);
      var p = n(9),
        u = n(10),
        l = window.innerWidth < 550,
        d = function(e) {
          return (
            void 0 === e && (e = { heading: "", body: "" }),
            "\n  " +
              (l
                ? '<button class="hovercard-close" aria-label="Close">&times;</button>'
                : "") +
              '\n  <div class="hovercard-card' +
              (e.image ? " hovercard-has-image" : "") +
              '">\n    <h3 class="hovercard-title">' +
              e.heading +
              '</h3>\n    <p class="hovercard-description">' +
              e.body +
              "</p>\n    " +
              (e.image
                ? '<div class="hovercard-image" style="background-image: url(\'' +
                  e.image +
                  "')\"></div>"
                : "") +
              "\n  </div>\n"
          );
        },
        h = function(e) {
          return (
            e &&
            e.parentElement &&
            e.parentElement.querySelector(":hover") === e
          );
        },
        m = (function(e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.isVisible = !1),
              (n.isLoading = !1),
              (n.settings = t || {}),
              (n.popperElement = document.createElement("div")),
              n.popperElement.classList.add("hovercard-element"),
              l
                ? n.popperElement.classList.add("hovercard-mobile")
                : n.popperElement.addEventListener(
                    "mouseout",
                    n.mouseOut.bind(n)
                  ),
              (n.popperElement.innerHTML =
                "function" == typeof n.settings.template
                  ? n.settings.template()
                  : d()),
              (document.body || document.documentElement).appendChild(
                n.popperElement
              ),
              n.start(),
              n
            );
          }
          return (
            o(t, e),
            (t.prototype.repositionPopper = function(e) {
              this.isVisible
                ? (!l && e && new f.default(e, this.popperElement),
                  this.popperElement.classList.add("visible"))
                : this.popperElement.classList.remove("visible");
            }),
            (t.prototype.start = function() {
              var e = this;
              (this.elements = Array.prototype.slice.call(
                document.querySelectorAll(
                  this.settings.selector || ".hovercard"
                )
              )),
                this.elements.forEach(function(t) {
                  t.removeEventListener("mouseover", e.mouseOver.bind(e)),
                    t.removeEventListener("click", e.mouseOver.bind(e)),
                    t.removeEventListener("mouseout", e.mouseOut.bind(e)),
                    l
                      ? t.addEventListener("click", e.mouseOver.bind(e))
                      : (t.addEventListener("mouseover", e.mouseOver.bind(e)),
                        t.addEventListener("mouseout", e.mouseOut.bind(e)));
                }),
                this.emitter.emit(p.Events.CREATED);
            }),
            (t.prototype.removeHoverCardElement = function(e) {
              if (this.elements) {
                var t = this.elements.filter(function(t) {
                  return t.innerText === e;
                });
                t.forEach(function(e) {
                  return e.classList.remove("hovercard");
                }),
                  (this.elements = this.elements.filter(function(t) {
                    return t.innerText !== e;
                  })),
                  this.emitter.emit(p.Events.REMOVED_ELEMENT, t);
              }
            }),
            (t.prototype.mouseOver = function(e) {
              var t = this;
              if (((this.isLoading = !0), (this.isVisible = !0), e.target)) {
                var n = e.target,
                  r = n.innerText;
                this.getData(r)
                  .then(function(e) {
                    return t.getText(e);
                  })
                  .then(function(e) {
                    return t.updateText(e);
                  })
                  .then(function() {
                    return t.repositionPopper(n);
                  })
                  .catch(function() {
                    t.removeHoverCardElement(r), t.mouseOut();
                  }),
                  this.emitter.emit(p.Events.SHOW, e.target);
              }
            }),
            (t.prototype.mouseOut = function(e, t) {
              void 0 === t && (t = !1);
              var n = !t && h(this.popperElement);
              if (!t && this.elements)
                for (var r = 0; r < this.elements.length; r++)
                  h(this.elements[r]) && (n = !0);
              n || this.close();
            }),
            (t.prototype.close = function() {
              (this.isVisible = !1),
                this.repositionPopper(),
                this.emitter.emit(p.Events.HIDE);
            }),
            (t.prototype.updateText = function(e) {
              this.popperElement.innerHTML =
                "function" == typeof this.settings.template
                  ? this.settings.template(e)
                  : d(e);
              var t = document.querySelector(".hovercard-close");
              t &&
                (t.removeEventListener("click", this.close.bind(this)),
                t.addEventListener("click", this.close.bind(this))),
                this.emitter.emit(p.Events.UPDATE);
            }),
            (t.prototype.getText = function(e) {
              var t, n, r;
              return (
                "function" == typeof this.settings.getBody &&
                  (n = this.settings.getBody(e)),
                "function" == typeof this.settings.getHeading &&
                  (t = this.settings.getHeading(e)),
                "function" == typeof this.settings.getImage &&
                  (r = this.settings.getImage(e)),
                t || (t = e.displaytitle),
                n || (n = e.extract),
                !r &&
                  e.thumbnail &&
                  e.thumbnail.source &&
                  (r = e.thumbnail.source),
                { heading: t, body: n, image: r }
              );
            }),
            (t.prototype.getData = function(e) {
              return i(this, void 0, void 0, function() {
                var t, n, r;
                return a(this, function(o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (t = "hovercard-cache-" + btoa(e)),
                        !this.settings.noCache &&
                        (this.settings.storage || localStorage).getItem(t)
                          ? [
                              2,
                              JSON.parse(
                                (this.settings.storage || localStorage).getItem(
                                  t
                                )
                              )
                            ]
                          : "function" != typeof this.settings.getData
                            ? [3, 2]
                            : [4, this.settings.getData(e)]
                      );
                    case 1:
                      (n = o.sent()), (o.label = 2);
                    case 2:
                      return [
                        4,
                        fetch(
                          this.settings.fetchEndpoint ||
                            "https://" +
                              (this.settings.wikipediaLanguage || "en") +
                              ".wikipedia.org/api/rest_v1/page/summary/" +
                              u.encode(e),
                          this.settings.fetchConfig
                        )
                      ];
                    case 3:
                      if ((r = o.sent()).status >= 300)
                        throw new Error(r.statusText);
                      return [4, r.json()];
                    case 4:
                      return (
                        (n = o.sent()),
                        (this.isLoading = !1),
                        this.settings.noCache ||
                          (this.settings.storage || localStorage).setItem(
                            t,
                            JSON.stringify(n)
                          ),
                        [2, n]
                      );
                  }
                });
              });
            }),
            t
          );
        })(c.default);
      (t.default = m), (window.Hovercard = m);
    },
    function(e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(2)),
        i = (function() {
          function e() {
            this.emitter = new o.default();
          }
          return (
            (e.prototype.on = function(e, t) {
              return this.emitter.on(e, t);
            }),
            (e.prototype.off = function(e, t) {
              return this.emitter.off(e, t);
            }),
            e
          );
        })();
      t.default = i;
    },
    function(e, t, n) {
      "use strict";
      n.r(t),
        (t.default = function(e) {
          return (
            (e = e || Object.create(null)),
            {
              on: function(t, n) {
                (e[t] || (e[t] = [])).push(n);
              },
              off: function(t, n) {
                e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
              },
              emit: function(t, n) {
                (e[t] || []).slice().map(function(e) {
                  e(n);
                }),
                  (e["*"] || []).slice().map(function(e) {
                    e(t, n);
                  });
              }
            }
          );
        });
    },
    function(e, t, n) {
      "use strict";
      n.r(t),
        function(e) {
          for (
            /**!
             * @fileOverview Kickass library to create and place poppers near their reference elements.
             * @version 1.15.0
             * @license
             * Copyright (c) 2016 Federico Zivolo and contributors
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in all
             * copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
             * SOFTWARE.
             */
            var n =
                "undefined" != typeof window && "undefined" != typeof document,
              r = ["Edge", "Trident", "Firefox"],
              o = 0,
              i = 0;
            i < r.length;
            i += 1
          )
            if (n && navigator.userAgent.indexOf(r[i]) >= 0) {
              o = 1;
              break;
            }
          var a =
            n && window.Promise
              ? function(e) {
                  var t = !1;
                  return function() {
                    t ||
                      ((t = !0),
                      window.Promise.resolve().then(function() {
                        (t = !1), e();
                      }));
                  };
                }
              : function(e) {
                  var t = !1;
                  return function() {
                    t ||
                      ((t = !0),
                      setTimeout(function() {
                        (t = !1), e();
                      }, o));
                  };
                };
          function s(e) {
            return e && "[object Function]" === {}.toString.call(e);
          }
          function c(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n;
          }
          function f(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host;
          }
          function p(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
              case "HTML":
              case "BODY":
                return e.ownerDocument.body;
              case "#document":
                return e.body;
            }
            var t = c(e),
              n = t.overflow,
              r = t.overflowX,
              o = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + o + r) ? e : p(f(e));
          }
          var u =
              n && !(!window.MSInputMethodContext || !document.documentMode),
            l = n && /MSIE 10/.test(navigator.userAgent);
          function d(e) {
            return 11 === e ? u : 10 === e ? l : u || l;
          }
          function h(e) {
            if (!e) return document.documentElement;
            for (
              var t = d(10) ? document.body : null, n = e.offsetParent || null;
              n === t && e.nextElementSibling;

            )
              n = (e = e.nextElementSibling).offsetParent;
            var r = n && n.nodeName;
            return r && "BODY" !== r && "HTML" !== r
              ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
                "static" === c(n, "position")
                ? h(n)
                : n
              : e
                ? e.ownerDocument.documentElement
                : document.documentElement;
          }
          function m(e) {
            return null !== e.parentNode ? m(e.parentNode) : e;
          }
          function v(e, t) {
            if (!(e && e.nodeType && t && t.nodeType))
              return document.documentElement;
            var n =
                e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
              r = n ? e : t,
              o = n ? t : e,
              i = document.createRange();
            i.setStart(r, 0), i.setEnd(o, 0);
            var a,
              s,
              c = i.commonAncestorContainer;
            if ((e !== c && t !== c) || r.contains(o))
              return "BODY" === (s = (a = c).nodeName) ||
                ("HTML" !== s && h(a.firstElementChild) !== a)
                ? h(c)
                : c;
            var f = m(e);
            return f.host ? v(f.host, t) : v(e, m(t).host);
          }
          function g(e) {
            var t =
                "top" ===
                (arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "top")
                  ? "scrollTop"
                  : "scrollLeft",
              n = e.nodeName;
            if ("BODY" === n || "HTML" === n) {
              var r = e.ownerDocument.documentElement;
              return (e.ownerDocument.scrollingElement || r)[t];
            }
            return e[t];
          }
          function b(e, t) {
            var n = "x" === t ? "Left" : "Top",
              r = "Left" === n ? "Right" : "Bottom";
            return (
              parseFloat(e["border" + n + "Width"], 10) +
              parseFloat(e["border" + r + "Width"], 10)
            );
          }
          function y(e, t, n, r) {
            return Math.max(
              t["offset" + e],
              t["scroll" + e],
              n["client" + e],
              n["offset" + e],
              n["scroll" + e],
              d(10)
                ? parseInt(n["offset" + e]) +
                  parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) +
                  parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")])
                : 0
            );
          }
          function w(e) {
            var t = e.body,
              n = e.documentElement,
              r = d(10) && getComputedStyle(n);
            return { height: y("Height", t, n, r), width: y("Width", t, n, r) };
          }
          var x = function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            },
            E = (function() {
              function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
              };
            })(),
            O = function(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (e[t] = n),
                e
              );
            },
            L =
              Object.assign ||
              function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              };
          function T(e) {
            return L({}, e, {
              right: e.left + e.width,
              bottom: e.top + e.height
            });
          }
          function C(e) {
            var t = {};
            try {
              if (d(10)) {
                t = e.getBoundingClientRect();
                var n = g(e, "top"),
                  r = g(e, "left");
                (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
              } else t = e.getBoundingClientRect();
            } catch (e) {}
            var o = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
              },
              i = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
              a = i.width || e.clientWidth || o.right - o.left,
              s = i.height || e.clientHeight || o.bottom - o.top,
              f = e.offsetWidth - a,
              p = e.offsetHeight - s;
            if (f || p) {
              var u = c(e);
              (f -= b(u, "x")),
                (p -= b(u, "y")),
                (o.width -= f),
                (o.height -= p);
            }
            return T(o);
          }
          function M(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = d(10),
              o = "HTML" === t.nodeName,
              i = C(e),
              a = C(t),
              s = p(e),
              f = c(t),
              u = parseFloat(f.borderTopWidth, 10),
              l = parseFloat(f.borderLeftWidth, 10);
            n &&
              o &&
              ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
            var h = T({
              top: i.top - a.top - u,
              left: i.left - a.left - l,
              width: i.width,
              height: i.height
            });
            if (((h.marginTop = 0), (h.marginLeft = 0), !r && o)) {
              var m = parseFloat(f.marginTop, 10),
                v = parseFloat(f.marginLeft, 10);
              (h.top -= u - m),
                (h.bottom -= u - m),
                (h.left -= l - v),
                (h.right -= l - v),
                (h.marginTop = m),
                (h.marginLeft = v);
            }
            return (
              (r && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) &&
                (h = (function(e, t) {
                  var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    r = g(t, "top"),
                    o = g(t, "left"),
                    i = n ? -1 : 1;
                  return (
                    (e.top += r * i),
                    (e.bottom += r * i),
                    (e.left += o * i),
                    (e.right += o * i),
                    e
                  );
                })(h, t)),
              h
            );
          }
          function S(e) {
            if (!e || !e.parentElement || d()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === c(t, "transform"); )
              t = t.parentElement;
            return t || document.documentElement;
          }
          function D(e, t, n, r) {
            var o =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              i = { top: 0, left: 0 },
              a = o ? S(e) : v(e, t);
            if ("viewport" === r)
              i = (function(e) {
                var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  n = e.ownerDocument.documentElement,
                  r = M(e, n),
                  o = Math.max(n.clientWidth, window.innerWidth || 0),
                  i = Math.max(n.clientHeight, window.innerHeight || 0),
                  a = t ? 0 : g(n),
                  s = t ? 0 : g(n, "left");
                return T({
                  top: a - r.top + r.marginTop,
                  left: s - r.left + r.marginLeft,
                  width: o,
                  height: i
                });
              })(a, o);
            else {
              var s = void 0;
              "scrollParent" === r
                ? "BODY" === (s = p(f(t))).nodeName &&
                  (s = e.ownerDocument.documentElement)
                : (s = "window" === r ? e.ownerDocument.documentElement : r);
              var u = M(s, a, o);
              if (
                "HTML" !== s.nodeName ||
                (function e(t) {
                  var n = t.nodeName;
                  if ("BODY" === n || "HTML" === n) return !1;
                  if ("fixed" === c(t, "position")) return !0;
                  var r = f(t);
                  return !!r && e(r);
                })(a)
              )
                i = u;
              else {
                var l = w(e.ownerDocument),
                  d = l.height,
                  h = l.width;
                (i.top += u.top - u.marginTop),
                  (i.bottom = d + u.top),
                  (i.left += u.left - u.marginLeft),
                  (i.right = h + u.left);
              }
            }
            var m = "number" == typeof (n = n || 0);
            return (
              (i.left += m ? n : n.left || 0),
              (i.top += m ? n : n.top || 0),
              (i.right -= m ? n : n.right || 0),
              (i.bottom -= m ? n : n.bottom || 0),
              i
            );
          }
          function k(e, t, n, r, o) {
            var i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : 0;
            if (-1 === e.indexOf("auto")) return e;
            var a = D(n, r, i, o),
              s = {
                top: { width: a.width, height: t.top - a.top },
                right: { width: a.right - t.right, height: a.height },
                bottom: { width: a.width, height: a.bottom - t.bottom },
                left: { width: t.left - a.left, height: a.height }
              },
              c = Object.keys(s)
                .map(function(e) {
                  return L({ key: e }, s[e], {
                    area: ((t = s[e]), t.width * t.height)
                  });
                  var t;
                })
                .sort(function(e, t) {
                  return t.area - e.area;
                }),
              f = c.filter(function(e) {
                var t = e.width,
                  r = e.height;
                return t >= n.clientWidth && r >= n.clientHeight;
              }),
              p = f.length > 0 ? f[0].key : c[0].key,
              u = e.split("-")[1];
            return p + (u ? "-" + u : "");
          }
          function N(e, t, n) {
            var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return M(n, r ? S(t) : v(t, n), r);
          }
          function _(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
              n =
                parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
              r =
                parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return { width: e.offsetWidth + r, height: e.offsetHeight + n };
          }
          function j(e) {
            var t = {
              left: "right",
              right: "left",
              bottom: "top",
              top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function(e) {
              return t[e];
            });
          }
          function P(e, t, n) {
            n = n.split("-")[0];
            var r = _(e),
              o = { width: r.width, height: r.height },
              i = -1 !== ["right", "left"].indexOf(n),
              a = i ? "top" : "left",
              s = i ? "left" : "top",
              c = i ? "height" : "width",
              f = i ? "width" : "height";
            return (
              (o[a] = t[a] + t[c] / 2 - r[c] / 2),
              (o[s] = n === s ? t[s] - r[f] : t[j(s)]),
              o
            );
          }
          function H(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0];
          }
          function F(e, t, n) {
            return (
              (void 0 === n
                ? e
                : e.slice(
                    0,
                    (function(e, t, n) {
                      if (Array.prototype.findIndex)
                        return e.findIndex(function(e) {
                          return e[t] === n;
                        });
                      var r = H(e, function(e) {
                        return e[t] === n;
                      });
                      return e.indexOf(r);
                    })(e, "name", n)
                  )
              ).forEach(function(e) {
                e.function &&
                  console.warn(
                    "`modifier.function` is deprecated, use `modifier.fn`!"
                  );
                var n = e.function || e.fn;
                e.enabled &&
                  s(n) &&
                  ((t.offsets.popper = T(t.offsets.popper)),
                  (t.offsets.reference = T(t.offsets.reference)),
                  (t = n(t, e)));
              }),
              t
            );
          }
          function A(e, t) {
            return e.some(function(e) {
              var n = e.name;
              return e.enabled && n === t;
            });
          }
          function I(e) {
            for (
              var t = [!1, "ms", "Webkit", "Moz", "O"],
                n = e.charAt(0).toUpperCase() + e.slice(1),
                r = 0;
              r < t.length;
              r++
            ) {
              var o = t[r],
                i = o ? "" + o + n : e;
              if (void 0 !== document.body.style[i]) return i;
            }
            return null;
          }
          function W(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window;
          }
          function B(e, t, n, r) {
            (n.updateBound = r),
              W(e).addEventListener("resize", n.updateBound, { passive: !0 });
            var o = p(e);
            return (
              (function e(t, n, r, o) {
                var i = "BODY" === t.nodeName,
                  a = i ? t.ownerDocument.defaultView : t;
                a.addEventListener(n, r, { passive: !0 }),
                  i || e(p(a.parentNode), n, r, o),
                  o.push(a);
              })(o, "scroll", n.updateBound, n.scrollParents),
              (n.scrollElement = o),
              (n.eventsEnabled = !0),
              n
            );
          }
          function R() {
            var e, t;
            this.state.eventsEnabled &&
              (cancelAnimationFrame(this.scheduleUpdate),
              (this.state = ((e = this.reference),
              (t = this.state),
              W(e).removeEventListener("resize", t.updateBound),
              t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound);
              }),
              (t.updateBound = null),
              (t.scrollParents = []),
              (t.scrollElement = null),
              (t.eventsEnabled = !1),
              t)));
          }
          function U(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
          }
          function V(e, t) {
            Object.keys(t).forEach(function(n) {
              var r = "";
              -1 !==
                ["width", "height", "top", "right", "bottom", "left"].indexOf(
                  n
                ) &&
                U(t[n]) &&
                (r = "px"),
                (e.style[n] = t[n] + r);
            });
          }
          var q = n && /Firefox/i.test(navigator.userAgent);
          function z(e, t, n) {
            var r = H(e, function(e) {
                return e.name === t;
              }),
              o =
                !!r &&
                e.some(function(e) {
                  return e.name === n && e.enabled && e.order < r.order;
                });
            if (!o) {
              var i = "`" + t + "`",
                a = "`" + n + "`";
              console.warn(
                a +
                  " modifier is required by " +
                  i +
                  " modifier in order to work, be sure to include it before " +
                  i +
                  "!"
              );
            }
            return o;
          }
          var Y = [
              "auto-start",
              "auto",
              "auto-end",
              "top-start",
              "top",
              "top-end",
              "right-start",
              "right",
              "right-end",
              "bottom-end",
              "bottom",
              "bottom-start",
              "left-end",
              "left",
              "left-start"
            ],
            G = Y.slice(3);
          function J(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = G.indexOf(e),
              r = G.slice(n + 1).concat(G.slice(0, n));
            return t ? r.reverse() : r;
          }
          var K = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
          };
          function $(e, t, n, r) {
            var o = [0, 0],
              i = -1 !== ["right", "left"].indexOf(r),
              a = e.split(/(\+|\-)/).map(function(e) {
                return e.trim();
              }),
              s = a.indexOf(
                H(a, function(e) {
                  return -1 !== e.search(/,|\s/);
                })
              );
            a[s] &&
              -1 === a[s].indexOf(",") &&
              console.warn(
                "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
              );
            var c = /\s*,\s*|\s+/,
              f =
                -1 !== s
                  ? [
                      a.slice(0, s).concat([a[s].split(c)[0]]),
                      [a[s].split(c)[1]].concat(a.slice(s + 1))
                    ]
                  : [a];
            return (
              (f = f.map(function(e, r) {
                var o = (1 === r ? !i : i) ? "height" : "width",
                  a = !1;
                return e
                  .reduce(function(e, t) {
                    return "" === e[e.length - 1] &&
                      -1 !== ["+", "-"].indexOf(t)
                      ? ((e[e.length - 1] = t), (a = !0), e)
                      : a
                        ? ((e[e.length - 1] += t), (a = !1), e)
                        : e.concat(t);
                  }, [])
                  .map(function(e) {
                    return (function(e, t, n, r) {
                      var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        i = +o[1],
                        a = o[2];
                      if (!i) return e;
                      if (0 === a.indexOf("%")) {
                        var s = void 0;
                        switch (a) {
                          case "%p":
                            s = n;
                            break;
                          case "%":
                          case "%r":
                          default:
                            s = r;
                        }
                        return (T(s)[t] / 100) * i;
                      }
                      if ("vh" === a || "vw" === a)
                        return (
                          (("vh" === a
                            ? Math.max(
                                document.documentElement.clientHeight,
                                window.innerHeight || 0
                              )
                            : Math.max(
                                document.documentElement.clientWidth,
                                window.innerWidth || 0
                              )) /
                            100) *
                          i
                        );
                      return i;
                    })(e, o, t, n);
                  });
              })).forEach(function(e, t) {
                e.forEach(function(n, r) {
                  U(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1));
                });
              }),
              o
            );
          }
          var X = {
              placement: "bottom",
              positionFixed: !1,
              eventsEnabled: !0,
              removeOnDestroy: !1,
              onCreate: function() {},
              onUpdate: function() {},
              modifiers: {
                shift: {
                  order: 100,
                  enabled: !0,
                  fn: function(e) {
                    var t = e.placement,
                      n = t.split("-")[0],
                      r = t.split("-")[1];
                    if (r) {
                      var o = e.offsets,
                        i = o.reference,
                        a = o.popper,
                        s = -1 !== ["bottom", "top"].indexOf(n),
                        c = s ? "left" : "top",
                        f = s ? "width" : "height",
                        p = {
                          start: O({}, c, i[c]),
                          end: O({}, c, i[c] + i[f] - a[f])
                        };
                      e.offsets.popper = L({}, a, p[r]);
                    }
                    return e;
                  }
                },
                offset: {
                  order: 200,
                  enabled: !0,
                  fn: function(e, t) {
                    var n = t.offset,
                      r = e.placement,
                      o = e.offsets,
                      i = o.popper,
                      a = o.reference,
                      s = r.split("-")[0],
                      c = void 0;
                    return (
                      (c = U(+n) ? [+n, 0] : $(n, i, a, s)),
                      "left" === s
                        ? ((i.top += c[0]), (i.left -= c[1]))
                        : "right" === s
                          ? ((i.top += c[0]), (i.left += c[1]))
                          : "top" === s
                            ? ((i.left += c[0]), (i.top -= c[1]))
                            : "bottom" === s &&
                              ((i.left += c[0]), (i.top += c[1])),
                      (e.popper = i),
                      e
                    );
                  },
                  offset: 0
                },
                preventOverflow: {
                  order: 300,
                  enabled: !0,
                  fn: function(e, t) {
                    var n = t.boundariesElement || h(e.instance.popper);
                    e.instance.reference === n && (n = h(n));
                    var r = I("transform"),
                      o = e.instance.popper.style,
                      i = o.top,
                      a = o.left,
                      s = o[r];
                    (o.top = ""), (o.left = ""), (o[r] = "");
                    var c = D(
                      e.instance.popper,
                      e.instance.reference,
                      t.padding,
                      n,
                      e.positionFixed
                    );
                    (o.top = i), (o.left = a), (o[r] = s), (t.boundaries = c);
                    var f = t.priority,
                      p = e.offsets.popper,
                      u = {
                        primary: function(e) {
                          var n = p[e];
                          return (
                            p[e] < c[e] &&
                              !t.escapeWithReference &&
                              (n = Math.max(p[e], c[e])),
                            O({}, e, n)
                          );
                        },
                        secondary: function(e) {
                          var n = "right" === e ? "left" : "top",
                            r = p[n];
                          return (
                            p[e] > c[e] &&
                              !t.escapeWithReference &&
                              (r = Math.min(
                                p[n],
                                c[e] - ("right" === e ? p.width : p.height)
                              )),
                            O({}, n, r)
                          );
                        }
                      };
                    return (
                      f.forEach(function(e) {
                        var t =
                          -1 !== ["left", "top"].indexOf(e)
                            ? "primary"
                            : "secondary";
                        p = L({}, p, u[t](e));
                      }),
                      (e.offsets.popper = p),
                      e
                    );
                  },
                  priority: ["left", "right", "top", "bottom"],
                  padding: 5,
                  boundariesElement: "scrollParent"
                },
                keepTogether: {
                  order: 400,
                  enabled: !0,
                  fn: function(e) {
                    var t = e.offsets,
                      n = t.popper,
                      r = t.reference,
                      o = e.placement.split("-")[0],
                      i = Math.floor,
                      a = -1 !== ["top", "bottom"].indexOf(o),
                      s = a ? "right" : "bottom",
                      c = a ? "left" : "top",
                      f = a ? "width" : "height";
                    return (
                      n[s] < i(r[c]) && (e.offsets.popper[c] = i(r[c]) - n[f]),
                      n[c] > i(r[s]) && (e.offsets.popper[c] = i(r[s])),
                      e
                    );
                  }
                },
                arrow: {
                  order: 500,
                  enabled: !0,
                  fn: function(e, t) {
                    var n;
                    if (!z(e.instance.modifiers, "arrow", "keepTogether"))
                      return e;
                    var r = t.element;
                    if ("string" == typeof r) {
                      if (!(r = e.instance.popper.querySelector(r))) return e;
                    } else if (!e.instance.popper.contains(r))
                      return (
                        console.warn(
                          "WARNING: `arrow.element` must be child of its popper element!"
                        ),
                        e
                      );
                    var o = e.placement.split("-")[0],
                      i = e.offsets,
                      a = i.popper,
                      s = i.reference,
                      f = -1 !== ["left", "right"].indexOf(o),
                      p = f ? "height" : "width",
                      u = f ? "Top" : "Left",
                      l = u.toLowerCase(),
                      d = f ? "left" : "top",
                      h = f ? "bottom" : "right",
                      m = _(r)[p];
                    s[h] - m < a[l] &&
                      (e.offsets.popper[l] -= a[l] - (s[h] - m)),
                      s[l] + m > a[h] &&
                        (e.offsets.popper[l] += s[l] + m - a[h]),
                      (e.offsets.popper = T(e.offsets.popper));
                    var v = s[l] + s[p] / 2 - m / 2,
                      g = c(e.instance.popper),
                      b = parseFloat(g["margin" + u], 10),
                      y = parseFloat(g["border" + u + "Width"], 10),
                      w = v - e.offsets.popper[l] - b - y;
                    return (
                      (w = Math.max(Math.min(a[p] - m, w), 0)),
                      (e.arrowElement = r),
                      (e.offsets.arrow = (O((n = {}), l, Math.round(w)),
                      O(n, d, ""),
                      n)),
                      e
                    );
                  },
                  element: "[x-arrow]"
                },
                flip: {
                  order: 600,
                  enabled: !0,
                  fn: function(e, t) {
                    if (A(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                      return e;
                    var n = D(
                        e.instance.popper,
                        e.instance.reference,
                        t.padding,
                        t.boundariesElement,
                        e.positionFixed
                      ),
                      r = e.placement.split("-")[0],
                      o = j(r),
                      i = e.placement.split("-")[1] || "",
                      a = [];
                    switch (t.behavior) {
                      case K.FLIP:
                        a = [r, o];
                        break;
                      case K.CLOCKWISE:
                        a = J(r);
                        break;
                      case K.COUNTERCLOCKWISE:
                        a = J(r, !0);
                        break;
                      default:
                        a = t.behavior;
                    }
                    return (
                      a.forEach(function(s, c) {
                        if (r !== s || a.length === c + 1) return e;
                        (r = e.placement.split("-")[0]), (o = j(r));
                        var f = e.offsets.popper,
                          p = e.offsets.reference,
                          u = Math.floor,
                          l =
                            ("left" === r && u(f.right) > u(p.left)) ||
                            ("right" === r && u(f.left) < u(p.right)) ||
                            ("top" === r && u(f.bottom) > u(p.top)) ||
                            ("bottom" === r && u(f.top) < u(p.bottom)),
                          d = u(f.left) < u(n.left),
                          h = u(f.right) > u(n.right),
                          m = u(f.top) < u(n.top),
                          v = u(f.bottom) > u(n.bottom),
                          g =
                            ("left" === r && d) ||
                            ("right" === r && h) ||
                            ("top" === r && m) ||
                            ("bottom" === r && v),
                          b = -1 !== ["top", "bottom"].indexOf(r),
                          y =
                            !!t.flipVariations &&
                            ((b && "start" === i && d) ||
                              (b && "end" === i && h) ||
                              (!b && "start" === i && m) ||
                              (!b && "end" === i && v)),
                          w =
                            !!t.flipVariationsByContent &&
                            ((b && "start" === i && h) ||
                              (b && "end" === i && d) ||
                              (!b && "start" === i && v) ||
                              (!b && "end" === i && m)),
                          x = y || w;
                        (l || g || x) &&
                          ((e.flipped = !0),
                          (l || g) && (r = a[c + 1]),
                          x &&
                            (i = (function(e) {
                              return "end" === e
                                ? "start"
                                : "start" === e
                                  ? "end"
                                  : e;
                            })(i)),
                          (e.placement = r + (i ? "-" + i : "")),
                          (e.offsets.popper = L(
                            {},
                            e.offsets.popper,
                            P(
                              e.instance.popper,
                              e.offsets.reference,
                              e.placement
                            )
                          )),
                          (e = F(e.instance.modifiers, e, "flip")));
                      }),
                      e
                    );
                  },
                  behavior: "flip",
                  padding: 5,
                  boundariesElement: "viewport",
                  flipVariations: !1,
                  flipVariationsByContent: !1
                },
                inner: {
                  order: 700,
                  enabled: !1,
                  fn: function(e) {
                    var t = e.placement,
                      n = t.split("-")[0],
                      r = e.offsets,
                      o = r.popper,
                      i = r.reference,
                      a = -1 !== ["left", "right"].indexOf(n),
                      s = -1 === ["top", "left"].indexOf(n);
                    return (
                      (o[a ? "left" : "top"] =
                        i[n] - (s ? o[a ? "width" : "height"] : 0)),
                      (e.placement = j(t)),
                      (e.offsets.popper = T(o)),
                      e
                    );
                  }
                },
                hide: {
                  order: 800,
                  enabled: !0,
                  fn: function(e) {
                    if (!z(e.instance.modifiers, "hide", "preventOverflow"))
                      return e;
                    var t = e.offsets.reference,
                      n = H(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name;
                      }).boundaries;
                    if (
                      t.bottom < n.top ||
                      t.left > n.right ||
                      t.top > n.bottom ||
                      t.right < n.left
                    ) {
                      if (!0 === e.hide) return e;
                      (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                    } else {
                      if (!1 === e.hide) return e;
                      (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                    }
                    return e;
                  }
                },
                computeStyle: {
                  order: 850,
                  enabled: !0,
                  fn: function(e, t) {
                    var n = t.x,
                      r = t.y,
                      o = e.offsets.popper,
                      i = H(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name;
                      }).gpuAcceleration;
                    void 0 !== i &&
                      console.warn(
                        "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                      );
                    var a = void 0 !== i ? i : t.gpuAcceleration,
                      s = h(e.instance.popper),
                      c = C(s),
                      f = { position: o.position },
                      p = (function(e, t) {
                        var n = e.offsets,
                          r = n.popper,
                          o = n.reference,
                          i = Math.round,
                          a = Math.floor,
                          s = function(e) {
                            return e;
                          },
                          c = i(o.width),
                          f = i(r.width),
                          p = -1 !== ["left", "right"].indexOf(e.placement),
                          u = -1 !== e.placement.indexOf("-"),
                          l = t ? (p || u || c % 2 == f % 2 ? i : a) : s,
                          d = t ? i : s;
                        return {
                          left: l(
                            c % 2 == 1 && f % 2 == 1 && !u && t
                              ? r.left - 1
                              : r.left
                          ),
                          top: d(r.top),
                          bottom: d(r.bottom),
                          right: l(r.right)
                        };
                      })(e, window.devicePixelRatio < 2 || !q),
                      u = "bottom" === n ? "top" : "bottom",
                      l = "right" === r ? "left" : "right",
                      d = I("transform"),
                      m = void 0,
                      v = void 0;
                    if (
                      ((v =
                        "bottom" === u
                          ? "HTML" === s.nodeName
                            ? -s.clientHeight + p.bottom
                            : -c.height + p.bottom
                          : p.top),
                      (m =
                        "right" === l
                          ? "HTML" === s.nodeName
                            ? -s.clientWidth + p.right
                            : -c.width + p.right
                          : p.left),
                      a && d)
                    )
                      (f[d] = "translate3d(" + m + "px, " + v + "px, 0)"),
                        (f[u] = 0),
                        (f[l] = 0),
                        (f.willChange = "transform");
                    else {
                      var g = "bottom" === u ? -1 : 1,
                        b = "right" === l ? -1 : 1;
                      (f[u] = v * g),
                        (f[l] = m * b),
                        (f.willChange = u + ", " + l);
                    }
                    var y = { "x-placement": e.placement };
                    return (
                      (e.attributes = L({}, y, e.attributes)),
                      (e.styles = L({}, f, e.styles)),
                      (e.arrowStyles = L({}, e.offsets.arrow, e.arrowStyles)),
                      e
                    );
                  },
                  gpuAcceleration: !0,
                  x: "bottom",
                  y: "right"
                },
                applyStyle: {
                  order: 900,
                  enabled: !0,
                  fn: function(e) {
                    var t, n;
                    return (
                      V(e.instance.popper, e.styles),
                      (t = e.instance.popper),
                      (n = e.attributes),
                      Object.keys(n).forEach(function(e) {
                        !1 !== n[e]
                          ? t.setAttribute(e, n[e])
                          : t.removeAttribute(e);
                      }),
                      e.arrowElement &&
                        Object.keys(e.arrowStyles).length &&
                        V(e.arrowElement, e.arrowStyles),
                      e
                    );
                  },
                  onLoad: function(e, t, n, r, o) {
                    var i = N(o, t, e, n.positionFixed),
                      a = k(
                        n.placement,
                        i,
                        t,
                        e,
                        n.modifiers.flip.boundariesElement,
                        n.modifiers.flip.padding
                      );
                    return (
                      t.setAttribute("x-placement", a),
                      V(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                      }),
                      n
                    );
                  },
                  gpuAcceleration: void 0
                }
              }
            },
            Q = (function() {
              function e(t, n) {
                var r = this,
                  o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                x(this, e),
                  (this.scheduleUpdate = function() {
                    return requestAnimationFrame(r.update);
                  }),
                  (this.update = a(this.update.bind(this))),
                  (this.options = L({}, e.Defaults, o)),
                  (this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                  }),
                  (this.reference = t && t.jquery ? t[0] : t),
                  (this.popper = n && n.jquery ? n[0] : n),
                  (this.options.modifiers = {}),
                  Object.keys(L({}, e.Defaults.modifiers, o.modifiers)).forEach(
                    function(t) {
                      r.options.modifiers[t] = L(
                        {},
                        e.Defaults.modifiers[t] || {},
                        o.modifiers ? o.modifiers[t] : {}
                      );
                    }
                  ),
                  (this.modifiers = Object.keys(this.options.modifiers)
                    .map(function(e) {
                      return L({ name: e }, r.options.modifiers[e]);
                    })
                    .sort(function(e, t) {
                      return e.order - t.order;
                    })),
                  this.modifiers.forEach(function(e) {
                    e.enabled &&
                      s(e.onLoad) &&
                      e.onLoad(r.reference, r.popper, r.options, e, r.state);
                  }),
                  this.update();
                var i = this.options.eventsEnabled;
                i && this.enableEventListeners(),
                  (this.state.eventsEnabled = i);
              }
              return (
                E(e, [
                  {
                    key: "update",
                    value: function() {
                      return function() {
                        if (!this.state.isDestroyed) {
                          var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                          };
                          (e.offsets.reference = N(
                            this.state,
                            this.popper,
                            this.reference,
                            this.options.positionFixed
                          )),
                            (e.placement = k(
                              this.options.placement,
                              e.offsets.reference,
                              this.popper,
                              this.reference,
                              this.options.modifiers.flip.boundariesElement,
                              this.options.modifiers.flip.padding
                            )),
                            (e.originalPlacement = e.placement),
                            (e.positionFixed = this.options.positionFixed),
                            (e.offsets.popper = P(
                              this.popper,
                              e.offsets.reference,
                              e.placement
                            )),
                            (e.offsets.popper.position = this.options
                              .positionFixed
                              ? "fixed"
                              : "absolute"),
                            (e = F(this.modifiers, e)),
                            this.state.isCreated
                              ? this.options.onUpdate(e)
                              : ((this.state.isCreated = !0),
                                this.options.onCreate(e));
                        }
                      }.call(this);
                    }
                  },
                  {
                    key: "destroy",
                    value: function() {
                      return function() {
                        return (
                          (this.state.isDestroyed = !0),
                          A(this.modifiers, "applyStyle") &&
                            (this.popper.removeAttribute("x-placement"),
                            (this.popper.style.position = ""),
                            (this.popper.style.top = ""),
                            (this.popper.style.left = ""),
                            (this.popper.style.right = ""),
                            (this.popper.style.bottom = ""),
                            (this.popper.style.willChange = ""),
                            (this.popper.style[I("transform")] = "")),
                          this.disableEventListeners(),
                          this.options.removeOnDestroy &&
                            this.popper.parentNode.removeChild(this.popper),
                          this
                        );
                      }.call(this);
                    }
                  },
                  {
                    key: "enableEventListeners",
                    value: function() {
                      return function() {
                        this.state.eventsEnabled ||
                          (this.state = B(
                            this.reference,
                            this.options,
                            this.state,
                            this.scheduleUpdate
                          ));
                      }.call(this);
                    }
                  },
                  {
                    key: "disableEventListeners",
                    value: function() {
                      return R.call(this);
                    }
                  }
                ]),
                e
              );
            })();
          (Q.Utils = ("undefined" != typeof window ? window : e).PopperUtils),
            (Q.placements = Y),
            (Q.Defaults = X),
            (t.default = Q);
        }.call(this, n(4));
    },
    function(e, t) {
      var n;
      n = (function() {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    function(e, t, n) {
      var r = n(6);
      "string" == typeof r && (r = [[e.i, r, ""]]);
      var o = { insert: "head", singleton: !1 };
      n(8)(r, o);
      r.locals && (e.exports = r.locals);
    },
    function(e, t, n) {
      (e.exports = n(7)(!1)).push([
        e.i,
        '.hovercard{white-space:nowrap}.hovercard-element{position:absolute;display:none;text-decoration:none;color:inherit;z-index:15;padding-top:1rem}.hovercard-element .hovercard-card{background-color:#fff;width:330px;padding:15px 20px;border-radius:5px;box-sizing:border-box;box-shadow:0px 5px 10px rgba(0,0,0,0.1);max-height:200px;overflow:hidden}.hovercard-element .hovercard-card h3{padding-top:0;margin-top:0}.hovercard-element .hovercard-card p:last-child{margin-bottom:0}.hovercard-element.visible{display:block}.hovercard-mobile{position:fixed;left:0;right:0;overflow:auto;bottom:0;max-height:100%}.hovercard-mobile .hovercard-description::after{display:none}.hovercard-mobile .hovercard-card{border-radius:0;max-height:none;width:100%}.hovercard-card.hovercard-has-image{width:400px}.hovercard-arrow{position:absolute;z-index:17;height:20px;width:330px;box-sizing:border-box;display:none}.hovercard-card.hovercard-has-image+.hovercard-arrow{width:400px}.hovercard-arrow::before{position:absolute;bottom:0;left:50%;margin-left:-5px;content:"";width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid whitesmoke}[x-placement="top"]+.hovercard-arrow::before{border-bottom:none !important;bottom:auto;top:0;border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px solid whitesmoke}.hovercard-element.hovercard-visible,.hovercard-arrow.hovercard-visible{display:block}.hovercard-close{position:absolute;right:1rem;top:1.5rem;font:inherit;line-height:1;background:none;border:0;padding:0;appearance:none;font-size:150%}.hovercard-element .hovercard-title{margin-top:0;margin-bottom:1rem}.hovercard-element .hovercard-description{margin-bottom:0}.hovercard-card.hovercard-has-image .hovercard-description{max-width:210px}.hovercard-element .hovercard-image{position:absolute;right:0;top:1rem;bottom:0;width:150px;background-size:cover;background-position:center}.hovercard-element .hovercard-description::after{content:"";position:absolute;left:0;right:0;top:175px;height:55px;background:linear-gradient(transparent, whitesmoke)}\n',
        ""
      ]);
    },
    function(e, t, n) {
      "use strict";
      e.exports = function(e) {
        var t = [];
        return (
          (t.toString = function() {
            return this.map(function(t) {
              var n = (function(e, t) {
                var n = e[1] || "",
                  r = e[3];
                if (!r) return n;
                if (t && "function" == typeof btoa) {
                  var o = ((a = r),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      s
                    )),
                    "/*# ".concat(c, " */")),
                    i = r.sources.map(function(e) {
                      return "/*# sourceURL="
                        .concat(r.sourceRoot)
                        .concat(e, " */");
                    });
                  return [n]
                    .concat(i)
                    .concat([o])
                    .join("\n");
                }
                var a, s, c;
                return [n].join("\n");
              })(t, e);
              return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function(e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var r = {}, o = 0; o < this.length; o++) {
              var i = this[o][0];
              null != i && (r[i] = !0);
            }
            for (var a = 0; a < e.length; a++) {
              var s = e[a];
              (null != s[0] && r[s[0]]) ||
                (n && !s[2]
                  ? (s[2] = n)
                  : n && (s[2] = "(".concat(s[2], ") and (").concat(n, ")")),
                t.push(s));
            }
          }),
          t
        );
      };
    },
    function(e, t, n) {
      "use strict";
      var r,
        o = {},
        i = function() {
          return (
            void 0 === r &&
              (r = Boolean(window && document && document.all && !window.atob)),
            r
          );
        },
        a = (function() {
          var e = {};
          return function(t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          };
        })();
      function s(e, t) {
        for (var n = [], r = {}, o = 0; o < e.length; o++) {
          var i = e[o],
            a = t.base ? i[0] + t.base : i[0],
            s = { css: i[1], media: i[2], sourceMap: i[3] };
          r[a] ? r[a].parts.push(s) : n.push((r[a] = { id: a, parts: [s] }));
        }
        return n;
      }
      function c(e, t) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            i = o[r.id],
            a = 0;
          if (i) {
            for (i.refs++; a < i.parts.length; a++) i.parts[a](r.parts[a]);
            for (; a < r.parts.length; a++) i.parts.push(m(r.parts[a], t));
          } else {
            for (var s = []; a < r.parts.length; a++) s.push(m(r.parts[a], t));
            o[r.id] = { id: r.id, refs: 1, parts: s };
          }
        }
      }
      function f(e) {
        var t = document.createElement("style");
        if (void 0 === e.attributes.nonce) {
          var r = n.nc;
          r && (e.attributes.nonce = r);
        }
        if (
          (Object.keys(e.attributes).forEach(function(n) {
            t.setAttribute(n, e.attributes[n]);
          }),
          "function" == typeof e.insert)
        )
          e.insert(t);
        else {
          var o = a(e.insert || "head");
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        }
        return t;
      }
      var p,
        u = ((p = []),
        function(e, t) {
          return (p[e] = t), p.filter(Boolean).join("\n");
        });
      function l(e, t, n, r) {
        var o = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = u(t, o);
        else {
          var i = document.createTextNode(o),
            a = e.childNodes;
          a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
        }
      }
      var d = null,
        h = 0;
      function m(e, t) {
        var n, r, o;
        if (t.singleton) {
          var i = h++;
          (n = d || (d = f(t))),
            (r = l.bind(null, n, i, !1)),
            (o = l.bind(null, n, i, !0));
        } else
          (n = f(t)),
            (r = function(e, t, n) {
              var r = n.css,
                o = n.media,
                i = n.sourceMap;
              if (
                (o && e.setAttribute("media", o),
                i &&
                  btoa &&
                  (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                    " */"
                  )),
                e.styleSheet)
              )
                e.styleSheet.cssText = r;
              else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(r));
              }
            }.bind(null, n, t)),
            (o = function() {
              !(function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            });
        return (
          r(e),
          function(t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              r((e = t));
            } else o();
          }
        );
      }
      e.exports = function(e, t) {
        ((t = t || {}).attributes =
          "object" == typeof t.attributes ? t.attributes : {}),
          t.singleton || "boolean" == typeof t.singleton || (t.singleton = i());
        var n = s(e, t);
        return (
          c(n, t),
          function(e) {
            for (var r = [], i = 0; i < n.length; i++) {
              var a = n[i],
                f = o[a.id];
              f && (f.refs--, r.push(f));
            }
            e && c(s(e, t), t);
            for (var p = 0; p < r.length; p++) {
              var u = r[p];
              if (0 === u.refs) {
                for (var l = 0; l < u.parts.length; l++) u.parts[l]();
                delete o[u.id];
              }
            }
          }
        );
      };
    },
    function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function(e) {
          (e.CREATED = "created"),
            (e.REMOVED_ELEMENT = "removed-element"),
            (e.SHOW = "show"),
            (e.HIDE = "hide"),
            (e.UPDATE = "update");
        })(t.Events || (t.Events = {}));
    },
    function(e, t, n) {
      "use strict";
      const r = n(11),
        o = n(14);
      e.exports = { encode: r, decode: o };
    },
    function(e, t, n) {
      "use strict";
      const r = n(12),
        o = n(13)(),
        i = [
          [/%2C/g, ","],
          [/%3A/g, ":"],
          [/%28/g, "("],
          [/%29/g, ")"],
          [/%20/g, "_"],
          [/%21/g, "!"]
        ];
      for (let e of i) e[2] = !o.test(e[1]);
      e.exports = (e, t = !1) => {
        let n = r(e);
        for (let e of i) (t && !e[2]) || (n = n.replace(e[0], e[1]));
        return n;
      };
    },
    function(e, t, n) {
      "use strict";
      e.exports = e =>
        encodeURIComponent(e).replace(
          /[!'()*]/g,
          e =>
            `%${e
              .charCodeAt(0)
              .toString(16)
              .toUpperCase()}`
        );
    },
    function(e, t, n) {
      "use strict";
      (e.exports = () => /[<>:"\/\\|?*\x00-\x1F]/g),
        (e.exports.windowsNames = () =>
          /^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/i);
    },
    function(e, t, n) {
      "use strict";
      const r = /_/g;
      e.exports = e => decodeURIComponent(e).replace(r, " ");
    }
  ]);
});
