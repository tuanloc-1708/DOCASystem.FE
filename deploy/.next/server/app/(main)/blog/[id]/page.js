(() => {
  var e = {};
  (e.id = 132),
    (e.ids = [132]),
    (e.modules = {
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      7790: (e) => {
        "use strict";
        e.exports = require("assert");
      },
      4770: (e) => {
        "use strict";
        e.exports = require("crypto");
      },
      7702: (e) => {
        "use strict";
        e.exports = require("events");
      },
      2048: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      2615: (e) => {
        "use strict";
        e.exports = require("http");
      },
      8791: (e) => {
        "use strict";
        e.exports = require("https");
      },
      9801: (e) => {
        "use strict";
        e.exports = require("os");
      },
      5315: (e) => {
        "use strict";
        e.exports = require("path");
      },
      6162: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      4175: (e) => {
        "use strict";
        e.exports = require("tty");
      },
      7360: (e) => {
        "use strict";
        e.exports = require("url");
      },
      1764: (e) => {
        "use strict";
        e.exports = require("util");
      },
      1568: (e) => {
        "use strict";
        e.exports = require("zlib");
      },
      5611: (e, s, t) => {
        "use strict";
        t.r(s),
          t.d(s, {
            GlobalError: () => n.a,
            __next_app__: () => m,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => x,
            tree: () => c,
          }),
          t(1337),
          t(2980),
          t(3817),
          t(2523);
        var r = t(3191),
          a = t(8716),
          i = t(7922),
          n = t.n(i),
          l = t(5231),
          o = {};
        for (let e in l)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (o[e] = () => l[e]);
        t.d(s, o);
        let c = [
            "",
            {
              children: [
                "(main)",
                {
                  children: [
                    "blog",
                    {
                      children: [
                        "[id]",
                        {
                          children: [
                            "__PAGE__",
                            {},
                            {
                              page: [
                                () => Promise.resolve().then(t.bind(t, 1337)),
                                "D:\\CN8-FPT\\EXE\\FE\\doca-system-fe\\src\\app\\(main)\\blog\\[id]\\page.tsx",
                              ],
                            },
                          ],
                        },
                        {},
                      ],
                    },
                    {},
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(t.bind(t, 2980)),
                    "D:\\CN8-FPT\\EXE\\FE\\doca-system-fe\\src\\app\\(main)\\layout.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 3817)),
                "D:\\CN8-FPT\\EXE\\FE\\doca-system-fe\\src\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(t.bind(t, 2523)),
                "D:\\CN8-FPT\\EXE\\FE\\doca-system-fe\\src\\app\\not-found.tsx",
              ],
            },
          ],
          d = [
            "D:\\CN8-FPT\\EXE\\FE\\doca-system-fe\\src\\app\\(main)\\blog\\[id]\\page.tsx",
          ],
          u = "/(main)/blog/[id]/page",
          m = { require: t, loadChunk: () => Promise.resolve() },
          x = new r.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/(main)/blog/[id]/page",
              pathname: "/blog/[id]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      9854: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 7852));
      },
      5047: (e, s, t) => {
        "use strict";
        var r = t(7389);
        t.o(r, "useParams") &&
          t.d(s, {
            useParams: function () {
              return r.useParams;
            },
          }),
          t.o(r, "usePathname") &&
            t.d(s, {
              usePathname: function () {
                return r.usePathname;
              },
            }),
          t.o(r, "useRouter") &&
            t.d(s, {
              useRouter: function () {
                return r.useRouter;
              },
            }),
          t.o(r, "useSearchParams") &&
            t.d(s, {
              useSearchParams: function () {
                return r.useSearchParams;
              },
            });
      },
      7852: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => l });
        var r = t(326),
          a = t(7577),
          i = t(434),
          n = t(6226);
        function l({ params: e }) {
          var s;
          let [t, l] = (0, a.useState)(null),
            [o, c] = (0, a.useState)(!0),
            [d, u] = (0, a.useState)(null);
          if (o)
            return r.jsx("div", {
              className: "container mx-auto py-20 text-center",
              children: r.jsx("div", {
                className: "animate-pulse",
                children: "Đang tải th\xf4ng tin b\xe0i viết...",
              }),
            });
          if (d || !t)
            return (0, r.jsxs)("div", {
              className: "container mx-auto py-20 text-center",
              children: [
                r.jsx("div", {
                  className: "text-red-500",
                  children: d || "Kh\xf4ng t\xecm thấy b\xe0i viết",
                }),
                r.jsx(i.default, {
                  href: "/blog",
                  className:
                    "mt-4 inline-block bg-pink-doca text-white px-4 py-2 rounded",
                  children: "Quay lại trang blog",
                }),
              ],
            });
          let m =
            t.blogCategories
              ?.map((e) => e.name)
              .filter(Boolean)
              .join(", ") || "";
          return (0, r.jsxs)("div", {
            className: "container mx-auto py-10 px-4",
            children: [
              r.jsx("div", {
                className: "mb-6",
                children: (0, r.jsxs)(i.default, {
                  href: "/blog",
                  className:
                    "text-gray-600 hover:text-pink-doca flex items-center gap-2",
                  children: [
                    r.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "h-5 w-5",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      children: r.jsx("path", {
                        fillRule: "evenodd",
                        d: "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",
                        clipRule: "evenodd",
                      }),
                    }),
                    "Quay lại trang blog",
                  ],
                }),
              }),
              (0, r.jsxs)("article", {
                className: "max-w-4xl mx-auto",
                children: [
                  (0, r.jsxs)("header", {
                    className: "mb-10",
                    children: [
                      r.jsx("h1", {
                        className: "text-3xl md:text-4xl font-bold mb-4",
                        children: t.name,
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-wrap items-center text-gray-600 mb-6 gap-4",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              r.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5 mr-1",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: r.jsx("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                                }),
                              }),
                              r.jsx("span", {
                                children: (s = t.createdAt)
                                  ? new Date(s).toLocaleDateString("vi-VN", {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    })
                                  : "",
                              }),
                            ],
                          }),
                          m &&
                            (0, r.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                r.jsx("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "h-5 w-5 mr-1",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  children: r.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                                  }),
                                }),
                                r.jsx("span", { children: m }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  r.jsx("div", {
                    className:
                      "relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden",
                    children: r.jsx(n.default, {
                      src: "/images/blog-placeholder.png",
                      alt: t.name || "B\xe0i viết",
                      fill: !0,
                      sizes: "100%",
                      className: "object-cover",
                      priority: !0,
                    }),
                  }),
                  r.jsx("div", {
                    className: "prose prose-lg max-w-none",
                    children: r.jsx("div", {
                      className: "whitespace-pre-line",
                      children: t.description,
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        t(1173);
      },
      1337: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => r });
        let r = (0, t(8570).createProxy)(
          String.raw`D:\CN8-FPT\EXE\FE\doca-system-fe\src\app\(main)\blog\[id]\page.tsx#default`
        );
      },
    });
  var s = require("../../../../webpack-runtime.js");
  s.C(e);
  var t = (e) => s((s.s = e)),
    r = s.X(0, [95, 772, 821, 455], () => t(5611));
  module.exports = r;
})();
