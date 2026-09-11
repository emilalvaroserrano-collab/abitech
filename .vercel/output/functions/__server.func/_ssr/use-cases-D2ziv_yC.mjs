import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as INDUSTRIES } from "./router-Dh1S71Is.mjs";
import { t as InnerHero } from "./inner-hero-CsUI3ymL.mjs";
import { t as CtaBanner } from "./cta-banner-Dcysj22m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-cases-D2ziv_yC.js
var import_jsx_runtime = require_jsx_runtime();
function UseCasesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnerHero, {
			eyebrow: "Use cases",
			title: "AI solutions for every industry we serve",
			lede: "Same implementation muscle. Different operating reality. Pick a sector to see the work we typically take on."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1100px] px-5 py-12 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: INDUSTRIES.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/use-cases/$slug",
					params: { slug: ind.slug },
					className: "group flex h-full flex-col overflow-hidden rounded-2xl shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/10] overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ind.image,
							alt: "",
							className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-bold",
								children: ind.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-primary",
								children: ind.tagline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-fg-muted",
								children: ind.summary
							})
						]
					})]
				}) }, ind.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { UseCasesPage as component };
