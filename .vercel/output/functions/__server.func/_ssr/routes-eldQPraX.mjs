import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { j as ArrowRight, p as Play } from "../_libs/lucide-react.mjs";
import { a as useUi, c as INDUSTRIES, d as SERVICES, f as STATS, o as Button, p as STEPS, s as CASE_STUDIES, u as PARTNERS } from "./router-Dh1S71Is.mjs";
import { t as CtaBanner } from "./cta-banner-Dcysj22m.mjs";
import { i as STEP_ICONS, n as SERVICE_ICONS, r as STAT_ICONS, t as PILL_ICONS } from "./icons-tKO_ZqPS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-eldQPraX.js
var import_jsx_runtime = require_jsx_runtime();
var PILLS = [
	{ label: "AI Strategy & Consulting" },
	{ label: "Custom AI Solutions" },
	{ label: "Automation & Integration" },
	{ label: "Dedicated Expert Teams" }
];
function Hero() {
	const openConsult = useUi((s) => s.openConsult);
	const openVideo = useUi((s) => s.openVideo);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-linear-to-b from-bg-hero via-bg-tint to-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-primary/10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 lg:px-8 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-[0.18em] text-primary",
						children: "AI strategy. Real implementation. Measurable results."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-[3.35rem]",
						children: ["Turn AI Into", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-primary",
							children: "Real Business Growth"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-[15.5px] leading-relaxed text-fg-muted",
						children: "ABI Tech helps organizations design, build, and deploy AI solutions that actually work — from strategy to implementation, deployment, and long-term support."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "pr-5",
							onClick: openConsult,
							children: ["Schedule a Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							variant: "secondary",
							className: "pr-5",
							onClick: openVideo,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-7 items-center justify-center rounded-full bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5 ml-px fill-current" })
							}), "Watch Our Video"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4",
						children: PILLS.map((p, i) => {
							const Icon = PILL_ICONS[i];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-[12.5px] font-medium text-fg-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-3.5",
										strokeWidth: 2
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "leading-snug",
									children: p.label
								})]
							}, p.label);
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroVisual, {})]
		})]
	});
}
function HeroVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative isolate",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-2xl shadow-[var(--shadow-card)] aspect-[5/4] sm:aspect-[16/11]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-scene.jpg",
					alt: "A consultant and a humanoid robot reviewing a shared interface",
					className: "absolute inset-0 h-full w-full object-cover object-[center_18%]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-tr from-navy/55 via-navy/10 to-navy/30" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-16 left-4 flex flex-col gap-1.5 sm:bottom-20 sm:left-5",
					children: [
						"IDEAS",
						"STRATEGY",
						"IMPLEMENTATION",
						"RESULTS"
					].map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hologram-card w-max rounded-md border border-on-media/35 bg-navy/35 px-2.5 py-1 text-[10px] font-bold tracking-[0.16em] text-on-media backdrop-blur-md sm:text-[11px]",
						children: label
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "absolute right-4 top-4 max-w-[11rem] text-right text-[13px] font-semibold leading-snug text-on-media [text-shadow:0_1px_12px_rgba(7,20,34,0.65)] sm:right-5 sm:top-5 sm:text-[15px]",
					children: "A more intelligent tomorrow, built today."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-4 right-4 text-right sm:bottom-5 sm:right-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-extrabold uppercase tracking-[0.18em] text-on-media [text-shadow:0_1px_10px_rgba(7,20,34,0.7)]",
						children: "People + AI"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-semibold uppercase tracking-[0.12em] text-on-media/90 [text-shadow:0_1px_10px_rgba(7,20,34,0.7)]",
						children: "A brighter tomorrow"
					})]
				})
			]
		})
	});
}
function Trusted() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1240px] px-5 py-8 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle",
				children: "Trusted by innovative companies worldwide"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14",
				children: PARTNERS.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "select-none text-[17px] font-extrabold tracking-tight text-fg-subtle/80 grayscale sm:text-[19px]",
					children: name
				}, name))
			})]
		})
	});
}
function WhatWeDo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1240px] items-start gap-10 px-5 py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:px-8 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle",
					children: "What we do"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl",
					children: "From AI Possibilities to Real-World Impact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-[15px] leading-relaxed text-fg-muted",
					children: "We combine deep technical expertise with business understanding to deliver AI solutions that solve actual problems, improve operations, and create measurable value."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-7 pr-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						children: ["Explore Our Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-4 sm:grid-cols-2",
				children: SERVICES.map((s) => {
					const Icon = SERVICE_ICONS[s.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: s.slug },
						className: "flex h-full flex-col rounded-xl bg-card p-5 shadow-[var(--shadow-card)] transition-[box-shadow,transform] duration-200 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									strokeWidth: 1.8
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-[15px] font-bold text-fg",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-[13.5px] leading-relaxed text-fg-muted",
								children: s.short
							})
						]
					}) }, s.slug);
				})
			})]
		})
	});
}
function Industries() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1240px] px-5 py-6 lg:px-8 lg:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle",
						children: "Industries we serve"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl",
						children: "AI Solutions for Every Industry"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/use-cases",
						className: "hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex",
						children: ["View All Industries", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
					children: INDUSTRIES.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/use-cases/$slug",
						params: { slug: ind.slug },
						className: "group relative block overflow-hidden rounded-xl aspect-[4/5] shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ind.image,
								alt: "",
								className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-navy/85 via-navy/25 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[15px] font-bold text-on-media",
									children: ind.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-[11.5px] leading-snug text-on-media/80",
									children: ind.tagline
								})]
							})
						]
					}) }, ind.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/use-cases",
					className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary sm:hidden",
					children: ["View All Industries", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			]
		})
	});
}
function FeaturedCases() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1240px] px-5 py-14 lg:px-8 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle",
					children: "Featured case studies"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl",
					children: "Real Results. Real Impact."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/case-studies",
					className: "hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary hover:underline sm:inline-flex",
					children: ["View All Case Studies", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-5 md:grid-cols-3",
				children: CASE_STUDIES.map((cs) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/case-studies/$slug",
							params: { slug: cs.slug },
							className: "group overflow-hidden rounded-xl shadow-[var(--shadow-card)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: cs.image,
								alt: "",
								className: "aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
								style: cs.slug === "patient-support" ? { objectPosition: "20% 40%" } : void 0
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs font-semibold text-fg-subtle",
							children: cs.industry
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-lg font-bold leading-snug",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/case-studies/$slug",
								params: { slug: cs.slug },
								className: "hover:text-primary",
								children: cs.title
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-4 grid grid-cols-3 gap-2",
							children: cs.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-lg font-extrabold text-primary sm:text-xl",
								children: m.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "text-[11px] leading-snug text-fg-muted",
								children: m.label
							})] }, m.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/case-studies/$slug",
							params: { slug: cs.slug },
							className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary",
							children: ["Read Case Study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}, cs.slug))
			})]
		})
	});
}
function Approach() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1240px] px-5 py-6 lg:px-8 lg:py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle",
					children: "Our approach"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl",
					children: "A Proven Path to AI Success"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "relative mt-10 grid gap-8 sm:grid-cols-5 sm:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "pointer-events-none absolute top-5 right-[10%] left-[10%] z-0 hidden h-px bg-primary/25 sm:block"
					}), STEPS.map((step) => {
						const Icon = STEP_ICONS[step.icon];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "relative text-center sm:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center gap-3 sm:justify-start",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-10 inline-flex size-10 items-center justify-center rounded-full bg-bg text-sm font-extrabold text-primary shadow-[0_0_0_1px_var(--color-line)]",
									children: step.n
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex flex-col items-center sm:items-start",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-9 items-center justify-center text-fg-muted",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-5",
											strokeWidth: 1.7
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-[15px] font-bold",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[13px] leading-relaxed text-fg-muted",
										children: step.body
									})
								]
							})]
						}, step.n);
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/approach",
						className: "text-sm font-semibold text-primary hover:underline",
						children: "See how an engagement runs →"
					})
				})
			]
		})
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-bold uppercase tracking-[0.18em] text-fg-subtle",
					children: "Why businesses choose ABI Tech"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl",
					children: "A Long-Term Partner You Can Trust"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-[15px] leading-relaxed text-fg-muted",
					children: "We're more than a development vendor — we're your strategic partner in AI implementation, committed to your success."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-7 pr-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						children: ["Learn More About Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-2 gap-6 sm:gap-8",
				children: STATS.map((s) => {
					const Icon = STAT_ICONS[s.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "text-center sm:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-10 items-center justify-center text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-6",
									strokeWidth: 1.6
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl",
								children: s.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-medium text-fg-muted",
								children: s.label
							})
						]
					}, s.label);
				})
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trusted, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeDo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Industries, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCases, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Approach, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { Home as component };
