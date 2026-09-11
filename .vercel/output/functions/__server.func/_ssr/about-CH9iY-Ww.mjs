import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { j as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as useUi, f as STATS, o as Button } from "./router-Dh1S71Is.mjs";
import { t as InnerHero } from "./inner-hero-CsUI3ymL.mjs";
import { t as CtaBanner } from "./cta-banner-Dcysj22m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CH9iY-Ww.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const openConsult = useUi((s) => s.openConsult);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnerHero, {
			eyebrow: "About ABI Tech",
			title: "The implementation firm for teams who are done with AI theatre",
			lede: "We were founded in Manila to do one thing well: take an AI idea that sounds expensive and make it a working system your operators will actually use.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: openConsult,
				children: ["Talk with us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/about-office.jpg",
				alt: "ABI Tech team collaborating around a table",
				className: "w-full rounded-2xl object-cover aspect-[16/11] shadow-[var(--shadow-card)]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold tracking-tight",
					children: "Why we exist"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[15px] leading-relaxed text-fg-muted",
					children: "Most companies do not have an AI strategy problem. They have an implementation problem. Proofs of concept stall. Vendors disappear after the demo. Models never meet the system of record. ABI Tech was built to close that gap — strategy through support, under one roof."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[15px] leading-relaxed text-fg-muted",
					children: "We work with operators in healthcare, finance, retail, education, manufacturing, and the public sector. Our home is Manila; our clients are worldwide."
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-bg-soft",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-[1100px] gap-8 px-5 py-14 sm:grid-cols-3 lg:px-8",
				children: [
					{
						t: "Operators first",
						d: "We design for the person who will live with the system on a Tuesday afternoon — not the slide that wins the RFP."
					},
					{
						t: "Measurable or it doesn't ship",
						d: "Every engagement has a baseline, a target, and a way to see whether we hit it. Vanity metrics stay off the dashboard."
					},
					{
						t: "Stay after go-live",
						d: "Models drift. Processes change. We keep a team on the system so it does not quietly rot six months later."
					}
				].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-card p-6 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold",
						children: v.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-fg-muted",
						children: v.d
					})]
				}, v.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[1100px] px-5 py-14 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold",
					children: "By the numbers"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4",
					children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-4xl font-extrabold text-primary",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-fg-muted",
						children: s.label
					})] }, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/workshop.jpg",
					alt: "Leadership workshop",
					className: "mt-10 w-full rounded-2xl object-cover aspect-[21/9] shadow-[var(--shadow-card)]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/careers",
							children: ["We're hiring", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: "Visit us in Manila"
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { AboutPage as component };
