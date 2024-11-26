(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    2431: () => {},
    8054: (e, t, n) => {
      Promise.resolve().then(n.t.bind(n, 5214, 23)),
        Promise.resolve().then(n.bind(n, 375));
    },
    375: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => o });
      var r = n(7437),
        l = n(8364),
        a = n(8216),
        s = n(7641),
        u = n(2265);
      let i = (0, u.createContext)(null);
      function o(e) {
        let { children: t } = e,
          [n, o] = (0, u.useState)(null);
        return (
          (0, u.useLayoutEffect)(() => {
            let e = new l.Z({
              duration: 1.6,
              easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
              infinite: !1,
            });
            o(e);
            let t = setInterval(() => {
                e.resize();
              }, 150),
              n = a.Z.add(function (t) {
                e.raf(t);
              });
            return (
              s.default.events.on("routeChangeStart", () => {
                e.scrollTo(0, { immediate: !0 });
              }),
              () => {
                n(), clearInterval(t), o(null), e.destroy();
              }
            );
          }, []),
          (0, r.jsx)(i.Provider, { value: n, children: t })
        );
      }
    },
    5214: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [788, 881, 685, 130, 215, 744], () => t(8054)), (_N_E = e.O());
  },
]);
