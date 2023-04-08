(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [847], {
        5492: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/full-stack-web-development-bootcamp", function() {
                return n(3439)
            }])
        },
        3439: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(7568),
                s = n(655),
                c = n(5893),
                l = n(7294),
                i = n(5675),
                o = n.n(i),
                r = n(3848),
                d = n(8716),
                u = n(9669),
                h = n.n(u),
                x = n(1163),
                m = n(2783),
                p = n(5066),
                f = n(1048),
                b = n(7593),
                w = n(9481),
                g = n(4718),
                j = n(4708),
                v = n(5144);
            t.default = function() {
                var e = (0, x.useRouter)(),
                    t = (0, v.b)().nextCohortDate,
                    n = (0, l.useState)(!1),
                    i = n[0],
                    u = n[1],
                    y = (0, l.useState)(""),
                    N = y[0],
                    k = y[1],
                    Z = (0, l.useState)(!1),
                    T = Z[0],
                    S = Z[1],
                    C = function() {
                        u(!0)
                    },
                    M = function() {
                        var t = (0, a.Z)((function() {
                            var t, n, a, c, l;
                            return (0, s.__generator)(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        S(!0), s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, 4, 5]), [4, h().get("/api/typeform", {
                                            params: {
                                                query: N
                                            }
                                        })];
                                    case 2:
                                        if (n = s.sent(), console.log(n), !((null === n || void 0 === n || null === (t = n.data) || void 0 === t ? void 0 : t.items.length) > 0)) return u(!1), c = new URLSearchParams(e.query), [2, window.open("https://form.typeform.com/to/ODqFA8Rl/?".concat(c), "_blank")];
                                        switch (a = n.data.items[0].outcome.title, u(!1), a) {
                                            case "The JSM Masterclass Experience looks like\xa0a good fit for you, but...":
                                                return [2, e.push("/out-of-budget")];
                                            case "The JSM Masterclass Experience looks like\xa0an excellent fit for you.":
                                                return [2, e.push({
                                                    pathname: "/made-for-you",
                                                    query: {
                                                        outcome: "perfect-fit"
                                                    }
                                                })];
                                            default:
                                                return [2, e.push("/not-there-yet")]
                                        }
                                        return [3, 5];
                                    case 3:
                                        return l = s.sent(), console.error(l), [3, 5];
                                    case 4:
                                        return S(!1), [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                return (0, c.jsxs)("div", {
                    className: "relative",
                    children: [(0, c.jsx)(g.HJ, {
                        title: "Full Stack Web Development Bootcamp Online - JavaScript Mastery",
                        description: "Web development bootcamps are the fastest way to become a full stack web developer. Learn full stack web development at the best coding bootcamp online.",
                        canonical: "/full-stack-web-development-bootcamp",
                        imageUrl: "https://i.ibb.co/TbjmctR/Masterclass-Thumbnail.jpg",
                        structuredData: f.KXB
                    }), i && (0, c.jsx)("div", {
                        className: "".concat(m.Z.flexCenter, " ").concat(m.Z.paddings, " fixed w-full h-full inset-0 bg-overlay z-10"),
                        children: (0, c.jsxs)("div", {
                            className: "flex flex-col bg-pro-black-400 py-6 px-10 sm:min-w-[350px] rounded-[12px]",
                            children: [(0, c.jsx)("p", {
                                onClick: function() {
                                    return u(!1)
                                },
                                className: "font-poppins text-[19px] font-semibold text-[#ff8746] cursor-pointer text-right w-full mb-8",
                                children: "Close"
                            }), (0, c.jsx)("h3", {
                                className: "".concat(m.Z.heading3, " ").concat(m.Z.white800, " text-left"),
                                children: "One Moment Please..."
                            }), (0, c.jsx)("p", {
                                className: "".concat(m.Z.bodyText, " ").concat(m.Z.white400, " mt-3 max-w-[550px]"),
                                children: "Before we proceed, we would like to get your email to check if you've already taken the quiz."
                            }), (0, c.jsxs)("form", {
                                onSubmit: function(e) {
                                    e.preventDefault(), M()
                                },
                                children: [(0, c.jsx)("p", {
                                    className: "mt-12 ".concat(m.Z.subtitle2, " dark:text-[#A3B3BC] text-pro-w-black mb-3"),
                                    children: "Email Address"
                                }), (0, c.jsx)("input", {
                                    type: "email",
                                    placeholder: "Your Email",
                                    name: "from_email",
                                    value: N,
                                    onChange: function(e) {
                                        return k(e.target.value)
                                    },
                                    className: "".concat(m.Z.bodyText, " w-full px-4 py-3 min-h-[52px] rounded-[10px] outline-none dark:bg-pro-black-2 bg-pro-w-blue dark:text-white text-pro-w-black"),
                                    required: !0
                                }), (0, c.jsx)("button", {
                                    type: "submit",
                                    className: "mt-5 font-poppins font-semibold text-[14px] leading-[16px] py-3 px-6 mx-auto rounded-[8px] blue-gradient text-white w-full",
                                    children: T ? "Please wait while we redirect you..." : "Submit"
                                })]
                            })]
                        })
                    }), (0, c.jsx)("section", {
                        className: "".concat(m.Z.flexCenter, " sm:pb-16 xs:pb-8 pb-12 pt-6 hero-height overflow-x-hidden"),
                        children: (0, c.jsx)(b.FP, {
                            tagTitle: "WANT TO LAND YOUR DREAM PROGRAMMING JOB IN 3-6 MONTHS? THEN DO THIS...",
                            headText: (0, c.jsxs)("div", {
                                className: "".concat(m.Z.heading1, " text-center mt-[50px]"),
                                children: [(0, c.jsxs)("div", {
                                    className: "".concat(m.Z.flexCenter, " xl:flex-row flex-col"),
                                    children: ["Become a\xa0", (0, c.jsx)("span", {
                                        className: "text-gradient",
                                        children: "Software Engineer"
                                    })]
                                }), (0, c.jsx)("p", {
                                    className: "".concat(m.Z.heading1),
                                    children: "Guaranteed."
                                })]
                            }),
                            content: "Skyrocket your career with our flexible and remote program. Graduate in 6 months, land your dream job with support from our mentors, or get your money back.",
                            firstBtnTitle: "Apply now",
                            handleFirstClick: function() {
                                return C()
                            },
                            videoUrl: "https://player.vimeo.com/progressive_redirect/playback/786618359/rendition/720p/file.mp4?loc=external&signature=e5b7ac02c496655d19b3c4ce08e19e20541af3f47f7ce2ceebab083b6a319160",
                            poster: "/assets/jsm-masterclass-course-image.png",
                            isVideo: !0,
                            autoPlay: !0
                        })
                    }), (0, c.jsx)("section", {
                        className: "".concat(m.Z.flexCenter, " ").concat(m.Z.paddings),
                        children: (0, c.jsx)("div", {
                            className: "".concat(m.Z.flexCenter, " ").concat(m.Z.innerWidth, " flex-col"),
                            children: (0, c.jsx)(g.vx, {
                                handleClick: function() {
                                    return C()
                                }
                            })
                        })
                    }), (0, c.jsx)("section", {
                        className: "".concat(m.Z.flexCenter, " ").concat(m.Z.paddings, " flex-col mt-24"),
                        children: (0, c.jsxs)(d.E.div, {
                            variants: p.a_,
                            exit: "exit",
                            initial: "hidden",
                            whileInView: "visible",
                            className: "flex flex-col items-center",
                            children: [(0, c.jsx)("h3", {
                                className: "".concat(m.Z.heading2, " text-gradient text-center"),
                                children: "Portfolio comparison"
                            }), (0, c.jsx)("img", {
                                src: "/assets/portfolio-comparison-fork.svg",
                                className: "".concat(m.Z.flexCenter, " mt-10 lg:block hidden"),
                                alt: "fork"
                            }), (0, c.jsx)(g.u$, {}), (0, c.jsx)("p", {
                                className: "".concat(m.Z.heading3, " mt-28 text-center"),
                                children: "Yikes. I wonder who will the recruiters pick."
                            })]
                        })
                    }), (0, c.jsx)("section", {
                        className: "".concat(m.Z.flexCenter, " ").concat(m.Z.paddings, " flex-col mt-24"),
                        children: (0, c.jsx)(b.n7, {})
                    }), (0, c.jsx)("div", {
                        className: "".concat(m.Z.flexCenter, " ").concat(m.Z.paddings),
                        children: (0, c.jsxs)("div", {
                            className: "".concat(m.Z.flexCenter, " ").concat(m.Z.innerWidth, " flex-col"),
                            children: [(0, c.jsx)("div", {
                                className: "".concat(m.Z.interWidth, " flex-col"),
                                children: (0, c.jsxs)("h2", {
                                    className: "".concat(m.Z.heading2, " ").concat(m.Z.white, " text-center mb-10"),
                                    children: ["The ", (0, c.jsx)("span", {
                                        className: "text-gradient",
                                        children: "Success"
                                    }), " of Our Students ", (0, c.jsx)("br", {
                                        className: "sm:block hidden"
                                    }), " Says It All"]
                                })
                            }), j.Nt.map((function(e) {
                                return (0, c.jsx)(b.Ar, {
                                    title: e.title,
                                    designation: e.designation,
                                    review: e.review,
                                    imgUrl: e.imgUrl,
                                    videoUrl: e.videoUrl,
                                    poster: e.poster,
                                    isReverse: e.isReverse,
                                    results: e.result
                                }, e.id)
                            })), (0, c.jsx)("div", {
                                className: "rounded-full h-fit border-[6px] border-[#FF964B] p-5",
                                children: (0, c.jsx)("button", {
                                    type: "button",
                                    onClick: function() {
                                        return C()
                                    },
                                    className: "".concat(m.Z.flexCenter, " ").concat(m.Z.subtitle2, " text-center blue-gradient px-14 sx:py-5 py-2 rounded-full"),
                                    children: "Apply now and become a success story"
                                })
                            })]
                        })
                    }), (0, c.jsx)("div", {
                        className: "".concat(m.Z.flexCenter, " ").concat(m.Z.paddings),
                        children: (0, c.jsx)("div", {
                            className: "".concat(m.Z.flexCenter, " ").concat(m.Z.innerWidth, " xl:flex-row flex-col"),
                            children: (0, c.jsxs)("div", {
                                className: "".concat(m.Z.interWidth, " flex-col"),
                                children: [(0, c.jsxs)("h2", {
                                    className: "".concat(m.Z.heading2, " ").concat(m.Z.white, " text-left mb-8"),
                                    children: ["Master The Most ", (0, c.jsx)("span", {
                                        className: "text-gradient",
                                        children: "In-Demand Tech Stack"
                                    })]
                                }), (0, c.jsx)("p", {
                                    className: "".concat(m.Z.subtitle2, " ").concat(m.Z.white400, " text-left"),
                                    children: "Inside The JSM Masterclass Experience, you\u2019ll learn the most in-demand technologies, such as JavaScript, TypeScript, React.js, Redux, Next.js, Tailwind CSS, MUI, Node, MongoDB, Express, and more! The program\u2019s flexibility will allow you to choose which technologies you use in your projects."
                                })]
                            })
                        })
                    }), (0, c.jsx)(g.lR, {
                        data: j.Vx,
                        breakPoint: 7
                    }), (0, c.jsx)(d.E.div, {
                        variants: p.oN,
                        exit: "exit",
                        initial: "hidden",
                        whileInView: "visible",
                        className: "flex flex-col items-center mt-8",
                        children: (0, c.jsx)(b.Q4, {
                            content: ["To make landing your dream job even easier, JS Mastery has partnered with Turing. Turing connects developers with fast-growing tech companies and startups looking to hire remote developers right now.", "By the end of the JSM Masterclass Experience, you\u2019ll have all the tools needed to successfully apply to Turing. "]
                        })
                    }), (0, c.jsx)("div", {
                        className: "".concat(m.Z.flexCenter, " ").concat(m.Z.paddings),
                        children: (0, c.jsxs)("div", {
                            className: "".concat(m.Z.flexCenter, " ").concat(m.Z.innerWidth, " flex-col"),
                            children: [(0, c.jsxs)("h2", {
                                className: "".concat(m.Z.heading2, " ").concat(m.Z.white, " text-center mb-10"),
                                children: ["What's Included in the JSM ", (0, c.jsx)("br", {
                                    className: "sm:block hidden"
                                }), " Masterclass Experience?"]
                            }), (0, c.jsx)("div", {
                                className: "relative w-[90%] h-full object-contain",
                                children: (0, c.jsx)(o(), {
                                    src: f._qh,
                                    alt: "jsm-diagram"
                                })
                            })]
                        })
                    }), (0, c.jsx)(b.dj, {
                        tagTitle: "Admissions close ".concat(t),
                        heading: (0, c.jsxs)(c.Fragment, {
                            children: ["Still not sure if ", (0, c.jsx)("span", {
                                className: "text-gradient",
                                children: "JSM Masterclass Experience"
                            }), " is Right for You?"]
                        }),
                        content: "Hey, we all have doubts, whether about what we invest in or whether we are ready and capable to put new knowledge and skills to work to create beautiful outcomes.",
                        subContent: "Take the quiz, answer a few questions about your skills we'll invite you to book a call with our team to discuss whether this is the right fit for you.",
                        btnTitle: "Take the Quiz",
                        handleClick: function() {
                            r.Z.track("Initiate Masterclass Survey"), C()
                        }
                    }), (0, c.jsx)(b.Z0, {
                        data: w.ft
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], (function() {
            return t = 5492, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);