(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [517],
  {
    8487: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 5878, 23)),
        Promise.resolve().then(s.bind(s, 7340));
    },
    4802: function (e, t, s) {
      "use strict";
      var n = s(7437);
      s(2265),
        (t.Z = (e) => {
          let {
              currentPage: t,
              totalPages: s,
              onPageChange: a,
              className: c = "",
            } = e,
            l = () => {
              let e = [],
                n = Math.max(1, t - 1),
                a = Math.min(s, t + 1);
              for (let t = n; t <= a; t++) e.push(t);
              return e;
            };
          return s <= 1
            ? null
            : (0, n.jsx)("div", {
                className: "flex justify-center items-center mt-6 ".concat(c),
                children: (0, n.jsxs)("nav", {
                  className: "flex items-center space-x-1",
                  children: [
                    (0, n.jsx)("button", {
                      onClick: () => t > 1 && a(t - 1),
                      disabled: 1 === t,
                      className: "px-3 py-1 rounded-md ".concat(
                        1 === t
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-pink-100"
                      ),
                      children: "\xab",
                    }),
                    !l().includes(1) &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("button", {
                            onClick: () => a(1),
                            className: "px-3 py-1 rounded-md hover:bg-pink-100",
                            children: "1",
                          }),
                          l()[0] > 2 &&
                            (0, n.jsx)("span", {
                              className: "px-2 py-1",
                              children: "...",
                            }),
                        ],
                      }),
                    l().map((e) =>
                      (0, n.jsx)(
                        "button",
                        {
                          onClick: () => a(e),
                          className: "px-3 py-1 rounded-md ".concat(
                            t === e
                              ? "bg-pink-doca text-white"
                              : "hover:bg-pink-100"
                          ),
                          children: e,
                        },
                        e
                      )
                    ),
                    !l().includes(s) &&
                      s > 1 &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          l()[l().length - 1] < s - 1 &&
                            (0, n.jsx)("span", {
                              className: "px-2 py-1",
                              children: "...",
                            }),
                          (0, n.jsx)("button", {
                            onClick: () => a(s),
                            className: "px-3 py-1 rounded-md hover:bg-pink-100",
                            children: s,
                          }),
                        ],
                      }),
                    (0, n.jsx)("button", {
                      onClick: () => t < s && a(t + 1),
                      disabled: t === s,
                      className: "px-3 py-1 rounded-md ".concat(
                        t === s
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-pink-100"
                      ),
                      children: "\xbb",
                    }),
                  ],
                }),
              });
        });
    },
    7340: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return d;
        },
      });
      var n = s(7437),
        a = s(2265),
        c = s(7648),
        l = s(3145),
        i = s(4802),
        r = s(1642);
      function d() {
        let [e, t] = (0, a.useState)([]),
          [s, d] = (0, a.useState)(!0),
          [o, m] = (0, a.useState)(1),
          [h, x] = (0, a.useState)(1);
        (0, a.useEffect)(() => {
          u();
        }, [o]);
        let u = async () => {
            d(!0);
            try {
              let e = (0, r.sO)(o, 9);
              e.data.items && (t(e.data.items), x(e.data.totalPages || 1));
            } catch (e) {
              console.error("Error fetching blogs:", e);
            } finally {
              d(!1);
            }
          },
          p = (e) =>
            e
              ? new Date(e).toLocaleDateString("vi-VN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "";
        return s
          ? (0, n.jsx)("div", {
              className: "container mx-auto text-center py-10",
              children: "Đang tải b\xe0i viết...",
            })
          : (0, n.jsx)("div", {
              className: "container mx-auto px-4",
              children:
                0 === e.length
                  ? (0, n.jsx)("div", {
                      className: "text-center py-10",
                      children: "Kh\xf4ng c\xf3 b\xe0i viết n\xe0o",
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                          children: e.map((e) =>
                            (0, n.jsx)(
                              "div",
                              {
                                className:
                                  "border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow",
                                children: (0, n.jsxs)(c.default, {
                                  href: "/blog/".concat(e.id),
                                  children: [
                                    (0, n.jsx)("div", {
                                      className: "relative h-48",
                                      children: (0, n.jsx)(l.default, {
                                        src: "/images/blog-placeholder.png",
                                        alt: e.name || "B\xe0i viết",
                                        fill: !0,
                                        sizes: "100%",
                                        className: "object-cover",
                                      }),
                                    }),
                                    (0, n.jsxs)("div", {
                                      className: "p-4",
                                      children: [
                                        (0, n.jsx)("div", {
                                          className:
                                            "text-gray-500 text-sm mb-2",
                                          children: p(e.createdAt),
                                        }),
                                        (0, n.jsx)("h3", {
                                          className:
                                            "text-xl font-bold mb-2 line-clamp-2",
                                          children: e.name,
                                        }),
                                        (0, n.jsx)("p", {
                                          className:
                                            "text-gray-600 line-clamp-3",
                                          children: e.description,
                                        }),
                                        (0, n.jsx)("div", {
                                          className:
                                            "mt-4 text-pink-doca font-semibold",
                                          children: "Đọc th\xeam →",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              e.id
                            )
                          ),
                        }),
                        (0, n.jsx)("div", {
                          className: "mt-10 flex justify-center",
                          children: (0, n.jsx)(i.Z, {
                            currentPage: o,
                            totalPages: h,
                            onPageChange: (e) => {
                              m(e);
                            },
                          }),
                        }),
                      ],
                    }),
            });
      }
    },
  },
  function (e) {
    e.O(0, [648, 878, 464, 619, 356, 971, 117, 744], function () {
      return e((e.s = 8487));
    }),
      (_N_E = e.O());
  },
]);
