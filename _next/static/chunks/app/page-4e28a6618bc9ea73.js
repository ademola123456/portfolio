(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    193: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 7953));
    },
    7953: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => ec });
      var i = s(7437),
        l = s(9582),
        r = s(1204),
        a = s(2801);
      let n = () => {
        l.p8.registerPlugin(r.Z, a.Z);
      };
      var c = s(9072),
        d = s(2265),
        o = s(1839),
        m = s.n(o),
        h = s(6098),
        x = s.n(h),
        u = s(5582),
        g = s.n(u);
      s(945);
      let f = (e) => {
          l.ZP.to(window, {
            duration: 1,
            scrollTo: { y: e, autoKill: !1, offsetY: -85 },
            ease: "power2",
          });
        },
        p = (e) => {
          let {} = e;
          return (
            (0, d.useEffect)(() => {
              l.ZP.registerPlugin(x(), g());
              let e = l.ZP.utils.toArray(".pin-nav"),
                t = l.ZP.utils.toArray(".all-businesses .business-section "),
                s = document.querySelector(".innerBar");
              [
                { selector: ".about-tag", color: "black" },
                { selector: ".project-tag", color: "black" },
                { selector: ".tools-tag", color: "black" },
              ].forEach((e) => {
                let { selector: t, color: i } = e;
                x().create({
                  trigger: t,
                  start: "top center",
                  end: "bottom center",
                  onEnter: () => {
                    s && (s.style.color = i), console.log(s, "navElement");
                  },
                  onLeaveBack: () => {
                    s && (s.style.color = "white");
                  },
                });
              }),
                x().create({
                  trigger: ".footer",
                  start: "top center",
                  onEnter: () => {
                    s && (s.style.color = "black");
                  },
                }),
                l.ZP.to(".fixedbar", {
                  scrollTrigger: {
                    trigger: ".footer",
                    toggleActions: "play none none reverse",
                    end: "top top",
                  },
                  opacity: 0,
                  rotateX: 0,
                  yPercent: 300,
                  duration: 0.2,
                  ease: "easeIn",
                }),
                e.forEach((s, i) => {
                  let l = x().create({ trigger: t[i], start: "top top" });
                  s.addEventListener("click", () => {
                    0 === i && f(0),
                      f(l.start),
                      e.forEach((e) => e.classList.remove("active-tag")),
                      s.classList.add("active-tag");
                  });
                }),
                t.forEach((t, s) => {
                  x().create({
                    trigger: t,
                    scroller: window,
                    start: "top top",
                    end: "bottom center",
                    onToggle: (t) => {
                      var i;
                      return (
                        t.isActive &&
                        ((i = e[s]),
                        void (e.forEach((e) =>
                          e.classList.remove("active-tag")
                        ),
                        i.classList.add("active-tag")))
                      );
                    },
                  });
                });
            }),
            (0, i.jsx)("header", {
              className: "".concat(v, " fixedbar opacity-1 mb-11"),
              children: (0, i.jsx)("nav", {
                className: "innerBar ".concat(b),
                style: { backgroundColor: "#ADACAC29", color: "white" },
                children: (0, i.jsxs)("ul", {
                  className: "flex w-full justify-between items-center",
                  children: [
                    (0, i.jsx)("li", {
                      className: "pin-nav active-tag",
                      children: (0, i.jsx)("div", {
                        className:
                          "tosin-tag inline-flex gap-1.5 md:gap-3 items-center p-1.5 md:p-2 rounded-md",
                        children: (0, i.jsx)("p", {
                          className:
                            "text-sm md:text-[1.2rem] leading-[1.2rem]  font-mainlux font-[100] whitespace-nowrap",
                          children: "TY",
                        }),
                      }),
                    }),
                    (0, i.jsx)("li", {
                      className: "pin-nav  ",
                      children: (0, i.jsx)("div", {
                        className:
                          "about-tag inline-flex gap-1.5 md:gap-3 items-center p-1.5 md:p-3 rounded-md",
                        children: (0, i.jsx)("p", {
                          className:
                            "text-sm md:text-[1.2rem] leading-[1.2rem]  font-mainlux font-[100] whitespace-nowrap",
                          children: "About",
                        }),
                      }),
                    }),
                    (0, i.jsx)("li", {
                      className: "pin-nav ",
                      children: (0, i.jsx)("div", {
                        className:
                          "project-tag inline-flex gap-1.5 md:gap-3 items-center p-1.5 md:p-3 rounded-md ",
                        children: (0, i.jsx)("p", {
                          className:
                            "text-sm md:text-[1.2rem] leading-[1.2rem]  font-mainlux font-[100] whitespace-nowrap",
                          children: "Projects",
                        }),
                      }),
                    }),
                    (0, i.jsx)("li", {
                      className: "pin-nav ",
                      children: (0, i.jsx)("div", {
                        className:
                          "tools-tag inline-flex gap-1.5 md:gap-3 items-center p-1.5 md:p-2 rounded-md ",
                        children: (0, i.jsx)("p", {
                          className:
                            "text-sm md:text-[1.2rem] leading-[1.2rem]  font-mainlux font-[100] whitespace-nowrap",
                          children: "Tools",
                        }),
                      }),
                    }),
                    (0, i.jsx)("li", {
                      className: "pin-nav ",
                      children: (0, i.jsx)("div", {
                        className:
                          "tools-tag inline-flex gap-1.5 md:gap-3 items-center p-1.5 md:p-2 rounded-md ",
                        children: (0, i.jsx)("p", {
                          className:
                            "text-sm md:text-[1.2rem] leading-[1.2rem]  font-mainlux font-[100] whitespace-nowrap",
                          children: "Contact",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        v = m()(
          "\n\n  fixed\n  bottom-0\n  left-0\n  w-full\n  z-[9998]\n  pb-3\n  lg:h-auto\n"
        ),
        b = m()(
          "\n\n  flex\n  items-center\n  rounded-xl\n  justify-center\n  lg:justify-start\n  backdrop-blur-[30px]\n  p-[3px]\n  md:p-2\n  sticky-nav\n  md:max-w-[650px]\n  mx-auto\n"
        ),
        j = () => (0, i.jsx)(p, {}),
        w = () =>
          (0, i.jsxs)("section", {
            className: "heroBackground business-section h-[100vh] relative",
            id: "tosin",
            children: [
              (0, i.jsx)(c.Z, {}),
              (0, i.jsxs)("div", {
                className: "",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex justify-center flex-col items-center absolute bottom-[230px] left-0 right-0 mx-auto",
                    children: [
                      (0, i.jsx)("p", {
                        className:
                          "font-mainlux font-[300] text-[1.25rem] leading-8 text-[#fff]",
                        children: "Senior Frontend Engineer",
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "font-spartans leading-[88.32px] text-[2rem] md:text-[6rem] font-[500] text-[#fff]",
                        children: "Oloruntomi Ademola",
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", { children: (0, i.jsx)(j, {}) }),
                ],
              }),
            ],
          });
      s(2721);
      let N = () =>
          (0, i.jsx)("section", {
            className:
              "min-h-screen pt-14 md:pt-1 business-section relative scroll-snap-start flex items-center justify-center",
            id: "about",
            children: (0, i.jsxs)("div", {
              className: "w-full",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "flex flex-col justify-center items-center w-fit mx-auto",
                  children: (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("div", {
                        className: "w-[70%] border border-[#1E1E1E]",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "font-spartans text-[1.7rem] md:text-[2.25rem] leading-[2.07rem] font-[400] pt-2 text-[#1E1E1E]",
                        children: "About me",
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)("div", {
                  className:
                    "about_section flex-col md:flex-row mt-[2rem] md:mt-[5rem]",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex-1 md:pl-8 px-5",
                      children: [
                        (0, i.jsx)("p", {
                          className:
                            "font-mainlux leading-[2rem] md:leading-[3rem] font-[300] text-[1.5rem] md:text-[2rem]",
                          children:
                            "I’m a Software Engineer With a Strong Focus on Front-end Development Based in Lagos, Nigeria",
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "font-mainlux leading-[1.72rem] font-[300] text-[1rem] pt-5",
                          children:
                            "My journey into software engineering began five years ago, driven by a deep interest in turning creative designs into interactive, dynamic web applications. Over time, I’ve expanded my skills to become proficient in both front-end and back-end development, giving me the versatility to build end-to-end solutions.",
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "font-mainlux leading-[1.72rem] font-[300] text-[1rem] pt-9",
                          children:
                            "I’m passionate about using modern technologies to develop fast, responsive, and accessible user interfaces. I am equally comfortable building server-side logic, integrating APIs, and ensuring that my applications are scalable and efficient.",
                        }),
                        (0, i.jsx)("p", {
                          className:
                            "font-mainlux leading-[1.72rem] font-[300] text-[1rem] pt-9",
                          children:
                            "Whether I’m collaborating with a team or building something from the ground up, I take pride in delivering high-quality software that meets users’ needs and exceeds their expectations.",
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "flex-none w-[1px] mx-4 border border-[#1E1E1E]",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "overflow-hidden whitespace-nowrap relative h-64 flex-1 flex items-center justify-center",
                      children: (0, i.jsxs)("div", {
                        className:
                          "flex animate-scroll items-center justify-center",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "w-64 h-full m-4",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux",
                                children: "Full stack Engineer",
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "text-[3rem] leading-[5.16rem] font-[300] font-mainlux",
                                children: "Eze",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "w-64 h-full m-4",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux",
                                children: "Senior Frontend Engineer",
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "text-[3rem] leading-[5.16rem] font-[300] font-mainlux",
                                children: "Niyo",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "w-64 h-full m-4",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux",
                                children: "Frontend Engineer",
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "text-[3rem] leading-[5.16rem] font-[300] font-mainlux",
                                children: "Oluapede",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "w-64 h-full m-4",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux",
                                children: "Full stack Engineer",
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "text-[3rem] leading-[5.16rem] font-[300] font-mainlux",
                                children: "Eze",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "w-64 h-full m-4",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux",
                                children: "Senior Frontend Engineer",
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "text-[3rem] leading-[5.16rem] font-[300] font-mainlux",
                                children: "Niyo",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "w-64 h-full m-4",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "text-[1.25rem] leading-[2.15rem] font-[300] font-mainlux",
                                children: "Frontend Engineer",
                              }),
                              (0, i.jsx)("div", {
                                className:
                                  "text-[3rem] leading-[5.16rem] font-[300] font-mainlux",
                                children: "Oluapede",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        y = {
          src: "/_next/static/media/niyolabs.322c2141.svg",
          height: 328,
          width: 451,
          blurWidth: 0,
          blurHeight: 0,
        },
        k = {
          src: "/_next/static/media/eze.76c63cd7.svg",
          height: 328,
          width: 451,
          blurWidth: 0,
          blurHeight: 0,
        },
        E = {
          src: "/_next/static/media/clubarant.80eeb222.svg",
          height: 328,
          width: 451,
          blurWidth: 0,
          blurHeight: 0,
        };
      var _ = s(6648),
        F = s(7138);
      let W = () =>
          (0, i.jsx)("section", {
            className:
              "min-h-screen business-section scroll-snap-start flex items-center justify-center px-5 md:px-8 pt-14 md:pt-1",
            id: "project",
            children: (0, i.jsxs)("div", {
              className: "w-full",
              children: [
                (0, i.jsx)("div", {
                  className:
                    "flex flex-col justify-center items-center w-fit mx-auto",
                  children: (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsx)("div", {
                        className: "w-[70%] border border-[#1E1E1E]",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "font-spartans text-[1.7rem] md:text-[2.25rem] leading-[2.07rem] font-[400] pt-2",
                        children: "Projects",
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "rounded-lg min-h-[15rem] w-full h-full relative",
                      children: [
                        (0, i.jsx)(F.default, {
                          href: "/niyolabs",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, i.jsx)("div", {
                            children: (0, i.jsx)(_.default, {
                              src: y,
                              className: "h-full w-full",
                              alt: "projects",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className:
                            "font-mainlux font-[300] text-[1.5rem] leading-[3.44rem] pt-4",
                          children: "NiyoLabs",
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "rounded-lg min-h-[15rem]",
                      children: (0, i.jsxs)(F.default, {
                        href: "/enterprise",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                          (0, i.jsx)("div", {
                            children: (0, i.jsx)(_.default, {
                              src: k,
                              className: "h-full w-full",
                              alt: "projects",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "font-mainlux font-[300] text-[1.5rem] leading-[3.44rem] pt-4",
                            children: "Eze Enterprise",
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "rounded-lg min-h-[15rem]",
                      children: (0, i.jsxs)(F.default, {
                        href: "/clubarant",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                          (0, i.jsx)("div", {
                            children: (0, i.jsx)(_.default, {
                              src: E,
                              className: "h-full w-full",
                              alt: "projects",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "font-mainlux font-[300] text-[1.5rem] leading-[3.44rem] pt-4",
                            children: "Clubarant",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        H = {
          src: "/_next/static/media/javascript.2fbdc20f.svg",
          height: 62,
          width: 180,
          blurWidth: 0,
          blurHeight: 0,
        },
        C = {
          src: "/_next/static/media/project2.127421df.svg",
          height: 62,
          width: 156,
          blurWidth: 0,
          blurHeight: 0,
        },
        z = {
          src: "/_next/static/media/project3.d1bb5b2e.svg",
          height: 62,
          width: 145,
          blurWidth: 0,
          blurHeight: 0,
        },
        L = {
          src: "/_next/static/media/project4.232085db.svg",
          height: 62,
          width: 193,
          blurWidth: 0,
          blurHeight: 0,
        },
        P = {
          src: "/_next/static/media/project5.2a328854.svg",
          height: 62,
          width: 137,
          blurWidth: 0,
          blurHeight: 0,
        },
        Z = {
          src: "/_next/static/media/css.31ba833a.svg",
          height: 62,
          width: 117,
          blurWidth: 0,
          blurHeight: 0,
        },
        T = {
          src: "/_next/static/media/vuejs.2f11cb72.svg",
          height: 62,
          width: 136,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
          src: "/_next/static/media/tailwind.2714549b.svg",
          height: 62,
          width: 229,
          blurWidth: 0,
          blurHeight: 0,
        },
        O = {
          src: "/_next/static/media/scss.3967b128.svg",
          height: 62,
          width: 132,
          blurWidth: 0,
          blurHeight: 0,
        },
        B = {
          src: "/_next/static/media/mui.80b6c499.svg",
          height: 62,
          width: 190,
          blurWidth: 0,
          blurHeight: 0,
        },
        I = () =>
          (0, i.jsx)("div", {
            className: "",
            children: (0, i.jsx)("div", {
              className:
                "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-4",
              children: [
                { color: "#f0db4f", image: H },
                { color: "#61dbfb", image: C },
                { color: "#fff", image: z },
                { color: "#2196F3", image: L },
                { color: "#FF5722", image: P },
                { color: "#f0db4f", image: Z },
                { color: "#61dbfb", image: T },
                { color: "#fff", image: A },
                { color: "#2196F3", image: O },
                { color: "#FF5722", image: B },
              ].map((e, t) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className:
                      " flex justify-center rounded-lg min-h-[10rem] max-h-[15rem]  relative overflow-hidden bg-[#F2F2F2E3] px-4 md:px-0",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute inset-0 transition-transform duration-500 ease-out origin-left z-0 bg-[".concat(
                            e,
                            "] scale-x-0 group-hover:scale-x-100"
                          ),
                        style: { backgroundColor: e.color },
                      }),
                      (0, i.jsx)("div", {
                        className: "relative z-10 flex items-center",
                        children: (0, i.jsx)(_.default, {
                          src: e.image,
                          className: "h-full",
                          alt: "projects",
                        }),
                      }),
                    ],
                  },
                  t
                )
              ),
            }),
          }),
        S = {
          src: "/_next/static/media/node.b8bbe0fe.svg",
          height: 62,
          width: 151,
          blurWidth: 0,
          blurHeight: 0,
        },
        D = {
          src: "/_next/static/media/nest.cc8aaabe.svg",
          height: 62,
          width: 143,
          blurWidth: 0,
          blurHeight: 0,
        },
        Y = {
          src: "/_next/static/media/laravel.374866e9.svg",
          height: 62,
          width: 143,
          blurWidth: 0,
          blurHeight: 0,
        },
        V = {
          src: "/_next/static/media/mongo.c50d5373.svg",
          height: 62,
          width: 179,
          blurWidth: 0,
          blurHeight: 0,
        },
        q = {
          src: "/_next/static/media/postgress.5e8fcddb.svg",
          height: 62,
          width: 179,
          blurWidth: 0,
          blurHeight: 0,
        },
        R = () =>
          (0, i.jsx)("div", {
            className: "",
            children: (0, i.jsx)("div", {
              className:
                "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-4",
              children: [
                { color: "#f0db4f", image: S },
                { color: "#61dbfb", image: D },
                { color: "#fff", image: Y },
                { color: "#2196F3", image: V },
                { color: "#FF5722", image: q },
                {},
                {},
                {},
                {},
                {},
              ].map((e, t) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className:
                      "flex justify-center rounded-lg min-h-[10rem] max-h-[15rem]  relative overflow-hidden px-4 md:px-0 ".concat(
                        e.color && "bg-[#F2F2F2E3]"
                      ),
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute inset-0 transition-transform duration-500 ease-out origin-left z-0 bg-[".concat(
                            e,
                            "] scale-x-0 group-hover:scale-x-100"
                          ),
                        style: {
                          backgroundColor:
                            (null == e ? void 0 : e.color) &&
                            (null == e ? void 0 : e.color),
                        },
                      }),
                      (null == e ? void 0 : e.image) &&
                        (0, i.jsx)("div", {
                          className: "relative z-10 flex items-center",
                          children: (0, i.jsx)(_.default, {
                            src: null == e ? void 0 : e.image,
                            className: "h-full",
                            alt: "projects",
                          }),
                        }),
                    ],
                  },
                  t
                )
              ),
            }),
          }),
        G = {
          src: "/_next/static/media/docker.13ccb0f3.svg",
          height: 62,
          width: 147,
          blurWidth: 0,
          blurHeight: 0,
        },
        K = {
          src: "/_next/static/media/kubernetes.dbbe2334.svg",
          height: 62,
          width: 197,
          blurWidth: 0,
          blurHeight: 0,
        },
        M = {
          src: "/_next/static/media/vercel.12b621da.svg",
          height: 62,
          width: 137,
          blurWidth: 0,
          blurHeight: 0,
        },
        X = {
          src: "/_next/static/media/aws.f1df991d.svg",
          height: 62,
          width: 125,
          blurWidth: 0,
          blurHeight: 0,
        },
        J = {
          src: "/_next/static/media/netlify.c8fa3b2f.svg",
          height: 62,
          width: 147,
          blurWidth: 0,
          blurHeight: 0,
        },
        Q = () =>
          (0, i.jsx)("div", {
            className: "",
            children: (0, i.jsx)("div", {
              className:
                "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-4",
              children: [
                { color: "#f0db4f", image: G },
                { color: "#61dbfb", image: K },
                { color: "#fff", image: M },
                { color: "#2196F3", image: X },
                { color: "#FF5722", image: J },
                {},
                {},
                {},
                {},
                {},
              ].map((e, t) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className:
                      "flex justify-center rounded-lg min-h-[10rem] max-h-[15rem]  relative overflow-hidden px-4 md:px-0 ".concat(
                        e.color && "bg-[#F2F2F2E3]"
                      ),
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute inset-0 transition-transform duration-500 ease-out origin-left z-0 bg-[".concat(
                            e,
                            "] scale-x-0 group-hover:scale-x-100"
                          ),
                        style: {
                          backgroundColor:
                            (null == e ? void 0 : e.color) &&
                            (null == e ? void 0 : e.color),
                        },
                      }),
                      (null == e ? void 0 : e.image) &&
                        (0, i.jsx)("div", {
                          className: "relative z-10 flex items-center",
                          children: (0, i.jsx)(_.default, {
                            src: null == e ? void 0 : e.image,
                            className: "h-full",
                            alt: "projects",
                          }),
                        }),
                    ],
                  },
                  t
                )
              ),
            }),
          }),
        U = {
          src: "/_next/static/media/git.8909581d.svg",
          height: 62,
          width: 101,
          blurWidth: 0,
          blurHeight: 0,
        },
        $ = {
          src: "/_next/static/media/slack.42f5fabf.svg",
          height: 62,
          width: 131,
          blurWidth: 0,
          blurHeight: 0,
        },
        ee = {
          src: "/_next/static/media/clickup.ded9f0a1.svg",
          height: 62,
          width: 153,
          blurWidth: 0,
          blurHeight: 0,
        },
        et = {
          src: "/_next/static/media/jira.1c8e34f2.svg",
          height: 48,
          width: 93,
          blurWidth: 0,
          blurHeight: 0,
        },
        es = {
          src: "/_next/static/media/shortcut.a5036ff4.svg",
          height: 62,
          width: 167,
          blurWidth: 0,
          blurHeight: 0,
        },
        ei = () =>
          (0, i.jsx)("div", {
            className: "",
            children: (0, i.jsx)("div", {
              className:
                "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-4",
              children: [
                { color: "#f0db4f", image: U },
                { color: "#61dbfb", image: $ },
                { color: "#fff", image: ee },
                { color: "#2196F3", image: et },
                { color: "#FF5722", image: es },
                {},
                {},
                {},
                {},
                {},
              ].map((e, t) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className:
                      "flex justify-center rounded-lg min-h-[10rem] max-h-[15rem]  relative overflow-hidden px-4 md:px-0 ".concat(
                        e.color && "bg-[#F2F2F2E3]"
                      ),
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute inset-0 transition-transform duration-500 ease-out origin-left z-0 bg-[".concat(
                            e,
                            "] scale-x-0 group-hover:scale-x-100"
                          ),
                        style: {
                          backgroundColor:
                            (null == e ? void 0 : e.color) &&
                            (null == e ? void 0 : e.color),
                        },
                      }),
                      (null == e ? void 0 : e.image) &&
                        (0, i.jsx)("div", {
                          className: "relative z-10 flex items-center",
                          children: (0, i.jsx)(_.default, {
                            src: null == e ? void 0 : e.image,
                            className: "h-full",
                            alt: "projects",
                          }),
                        }),
                    ],
                  },
                  t
                )
              ),
            }),
          });
      s(6429);
      let el = () => {
        let [e, t] = (0, d.useState)("Front-end"),
          [s, l] = (0, d.useState)(!1),
          r = (s) => {
            s !== e &&
              (l(!0),
              setTimeout(() => {
                t(s), l(!1);
              }, 500));
          };
        return (0, i.jsx)("section", {
          className:
            "min-h-screen business-section scroll-snap-start flex items-center justify-center px-5 md:px-8",
          id: "tools",
          children: (0, i.jsxs)("div", {
            className: "w-full",
            children: [
              (0, i.jsx)("div", {
                className:
                  "flex flex-col justify-center items-center w-fit mx-auto",
                children: (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("div", {
                      className: "w-[70%] border border-[#1E1E1E]",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "font-spartans text-[2.25rem] leading-[2.07rem] font-[400] pt-2",
                      children: "Tools",
                    }),
                  ],
                }),
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col items-center mt-8 w-full",
                children: [
                  (0, i.jsxs)("div", {
                    className: "flex gap-3 bg-[#F2F2F2E3] p-2 rounded-lg",
                    children: [
                      (0, i.jsx)("button", {
                        className: "py-2  ".concat(
                          "Front-end" === e
                            ? "bg-black text-white px-[0.5rem] md:px-4 rounded-md"
                            : ""
                        ),
                        onClick: () => r("Front-end"),
                        children: "Front-end",
                      }),
                      (0, i.jsx)("button", {
                        className: "py-2  ".concat(
                          "Back-end" === e
                            ? "bg-black text-white px-[0.5rem] md:px-4 rounded-md"
                            : ""
                        ),
                        onClick: () => r("Back-end"),
                        children: "Back-end",
                      }),
                      (0, i.jsx)("button", {
                        className: "py-2  ".concat(
                          "Dev Ops" === e
                            ? "bg-black text-white px-[0.5rem] md:px-4 rounded-md"
                            : ""
                        ),
                        onClick: () => r("Dev Ops"),
                        children: "Dev Ops",
                      }),
                      (0, i.jsx)("button", {
                        className: "py-2  ".concat(
                          "Version Control" === e
                            ? "bg-black text-white px-[0.5rem] md:px-4 rounded-md"
                            : ""
                        ),
                        onClick: () => r("Version Control"),
                        children: "Version Control",
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "mt-8 duration-500 w-full ".concat(
                      s
                        ? "opacity-0 translate-y-4"
                        : "opacity-100 translate-y-0"
                    ),
                    children: (() => {
                      switch (e) {
                        case "Front-end":
                          return (0, i.jsx)(I, {});
                        case "Back-end":
                          return (0, i.jsx)(R, {});
                        case "Dev Ops":
                          return (0, i.jsx)(Q, {});
                        case "Version Control":
                          return (0, i.jsx)(ei, {});
                        default:
                          return null;
                      }
                    })(),
                  }),
                ],
              }),
            ],
          }),
        });
      };
      var er = s(1124);
      s(5065);
      let ea = {
          src: "/_next/static/media/tosin.116bc7e8.svg",
          height: 196,
          width: 2727,
          blurWidth: 0,
          blurHeight: 0,
        },
        en = () =>
          (0, i.jsx)("section", {
            className: "relative",
            children: (0, i.jsx)("div", {
              className: "flex",
              children: (0, i.jsx)("div", {
                className:
                  "overflow-hidden whitespace-nowrap relative h-64 flex-1 flex items-center justify-center",
                children: (0, i.jsxs)("div", {
                  className: "flex animate-scroll items-center justify-center",
                  children: [
                    (0, i.jsx)(_.default, {
                      src: ea,
                      width: 10800,
                      height: 800,
                      alt: "projects",
                    }),
                    (0, i.jsx)(_.default, {
                      src: ea,
                      width: 10800,
                      height: 800,
                      alt: "projects",
                    }),
                    (0, i.jsx)(_.default, {
                      src: ea,
                      width: 10800,
                      height: 800,
                      alt: "projects",
                    }),
                  ],
                }),
              }),
            }),
          });
      function ec() {
        return (
          (0, d.useEffect)(() => {
            n();
          }, []),
          (0, i.jsx)("main", {
            children: (0, i.jsxs)("div", {
              className: "all-businesses scroll-snap-y scroll-snap-mandatory",
              children: [
                (0, i.jsx)(w, {}),
                (0, i.jsx)(N, {}),
                (0, i.jsx)(W, {}),
                (0, i.jsx)(en, {}),
                (0, i.jsx)("div", {
                  className: "footer",
                  children: (0, i.jsx)(el, {}),
                }),
                (0, i.jsx)(er.Z, {}),
              ],
            }),
          })
        );
      }
    },
    1124: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => a });
      var i = s(7437);
      s(2265);
      var l = s(2764),
        r = s(6648);
      let a = () =>
        (0, i.jsx)("section", {
          className: "relative business-section py-[2rem] px-8 2-[9999]",
          style: { borderTop: "1px solid #8585853B" },
          id: "contact",
          children: (0, i.jsxs)("div", {
            className: "flex flex-col md:flex-row justify-between gap-5",
            children: [
              (0, i.jsx)("div", {
                className: "flex flex-col md:flex-row gap-4 items-center",
                children: (0, i.jsx)("div", {
                  children: (0, i.jsx)(r.default, {
                    width: 100,
                    height: 50,
                    src: l.Z,
                    alt: "Logo",
                  }),
                }),
              }),
              (0, i.jsxs)("div", {
                className: "flex flex-col md:flex-row items-center gap-10",
                children: [
                  (0, i.jsx)("div", {
                    children: (0, i.jsx)("p", {
                      className:
                        "font-mainlux font-[300] text-[1rem] leading-[1.74rem]",
                      children: "yusuftosco66@gmail.com",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    children: (0, i.jsx)("a", {
                      href: "https://www.linkedin.com/in/oluwatosin-yusuf-7a9b7b1b5/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, i.jsx)("p", {
                        className:
                          "font-mainlux font-[300] text-[1rem] leading-[1.74rem]",
                        children: "LinkedIn",
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    children: (0, i.jsx)("a", {
                      href: "https://github.com/Tosinyusuf",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, i.jsx)("p", {
                        className:
                          "font-mainlux font-[300] text-[1rem] leading-[1.74rem]",
                        children: "Githubs",
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    children: (0, i.jsx)("a", {
                      href: "Yusuf_Oluwatosin_Abdulazeez_Resume.pdf",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      download: "OluwatosinYusuf.pdf",
                      children: (0, i.jsx)("p", {
                        className:
                          "font-mainlux font-[300] text-[1rem] leading-[1.74rem]",
                        children: "Download resume",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
    },
    9072: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => o });
      var i = s(7437),
        l = s(6648),
        r = s(9582),
        a = s(2265);
      let n = {
          src: "/_next/static/media/white-full-logo.59862587.svg",
          height: 29,
          width: 86,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: "/_next/static/media/menu.e2a44a13.svg",
          height: 29,
          width: 29,
          blurWidth: 0,
          blurHeight: 0,
        };
      var d = s(7138);
      let o = (e) => {
        let { project: t } = e,
          s = (0, a.useRef)(null),
          o = (0, a.useRef)([]),
          [m, h] = (0, a.useState)(!1),
          x = () => {
            console.log("menuToggle", m), h(!m);
          };
        return (
          (0, a.useEffect)(
            () => (
              m
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "visible"),
              () => {
                document.body.style.overflow = "visible";
              }
            ),
            [m]
          ),
          (0, a.useEffect)(() => {
            m &&
              (r.ZP.fromTo(
                s.current,
                { y: "-100%", opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "easeIn" }
              ),
              r.ZP.fromTo(
                o.current,
                { opacity: 0, x: -20 },
                {
                  opacity: 1,
                  x: 0,
                  duration: 0.4,
                  stagger: 0.1,
                  ease: "power2.out",
                }
              ));
          }, [m]),
          (0, i.jsxs)("nav", {
            className: "relative z-50",
            children: [
              " ",
              !t &&
                (0, i.jsx)("ul", {
                  className:
                    "navList md:flex hidden justify-between items-center gap-5 text-white p-5 md:p-8",
                  children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(l.default, {
                      width: 100,
                      height: 40,
                      src: n,
                      alt: "Logo",
                    }),
                  }),
                }),
              (0, i.jsxs)("div", {
                ref: s,
                className:
                  "bg-[#181818] md:hidden  flex items-start justify-between px-5 fixed top-0 w-full min-h-screen left-0 \n          ".concat(
                    m ? "opacity-1  pt-5" : "opacity-0 hidden",
                    "\n        "
                  ),
                children: [
                  (0, i.jsx)("ul", {
                    className: "pt-14 flex-1 flex flex-col gap-10 text-white",
                    children: [
                      { text: "Tosin", link: "/#tosin" },
                      { text: "About", link: "/#about" },
                      { text: "Projects", link: "/#project" },
                      { text: "Tools", link: "/#tools" },
                    ].map((e, t) =>
                      (0, i.jsx)(
                        d.default,
                        {
                          href: e.link,
                          onClick: x,
                          children: (0, i.jsx)("li", { children: e.text }),
                        },
                        t
                      )
                    ),
                  }),
                  (0, i.jsx)("div", {
                    onClick: x,
                    children: (0, i.jsx)(l.default, {
                      width: 30,
                      height: 40,
                      src: c,
                      alt: "Logo",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className:
                  "flex justify-between px-5 py-5 items-center md:hidden bg-[#181818] fixed w-full",
                children: [
                  (0, i.jsx)("div", {
                    children: (0, i.jsx)(l.default, {
                      width: 70,
                      height: 57,
                      src: n,
                      alt: "Logo",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    onClick: x,
                    children: [
                      " ",
                      (0, i.jsx)(l.default, {
                        width: 30,
                        height: 40,
                        src: c,
                        alt: "Logo",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    2721: () => {},
    5065: () => {},
    945: () => {},
    6429: () => {},
    2764: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => i });
      let i = {
        src: "/_next/static/media/full-Logo.e4eb6137.svg",
        height: 29,
        width: 86,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [172, 922, 881, 621, 821, 130, 215, 744], () => t(193)),
      (_N_E = e.O());
  },
]);
