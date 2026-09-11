import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { j as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as useUi, o as Button } from "./router-Dh1S71Is.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cta-banner-Dcysj22m.js
var import_jsx_runtime = require_jsx_runtime();
function CtaBanner() {
	const openConsult = useUi((s) => s.openConsult);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/cta-banner.jpg",
				alt: "Hiker looking out from a mountain summit at sunrise",
				className: "absolute inset-0 h-full w-full object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-navy/80 via-navy/55 to-navy/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-[1240px] items-center gap-8 px-5 py-16 lg:grid-cols-[1fr_auto] lg:px-8 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-[0.18em] text-on-media/70",
						children: "Let's build what's next"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-xl text-3xl font-extrabold tracking-tight text-on-media sm:text-4xl",
						children: "Ready to Implement AI in Your Business?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-lg text-[15px] leading-relaxed text-on-media/85",
						children: "Let's turn your ideas into real-world solutions. Talk to our team today and discover what's possible with ABI Tech."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "pr-5",
							onClick: openConsult,
							children: ["Schedule a Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								children: "Contact Us"
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "max-w-[9rem] text-right text-sm font-extrabold uppercase leading-snug tracking-[0.16em] text-on-media",
					children: [
						"Bolder",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Smarter",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Together"
					]
				})]
			})
		]
	});
}
//#endregion
export { CtaBanner as t };
