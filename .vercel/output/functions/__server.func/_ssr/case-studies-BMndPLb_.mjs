import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { j as ArrowRight } from "../_libs/lucide-react.mjs";
import { s as CASE_STUDIES } from "./router-Dh1S71Is.mjs";
import { t as InnerHero } from "./inner-hero-CsUI3ymL.mjs";
import { t as CtaBanner } from "./cta-banner-Dcysj22m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies-BMndPLb_.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudiesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnerHero, {
			eyebrow: "Case studies",
			title: "Real results. Real impact.",
			lede: "A sample of the systems we have put into production. Names of clients are withheld where agreements require it — the numbers are not."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[1100px] px-5 py-12 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-8",
				children: CASE_STUDIES.map((cs) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid overflow-hidden rounded-2xl shadow-[var(--shadow-card)] md:grid-cols-[1.1fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: cs.image,
						alt: "",
						className: "h-full min-h-56 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wide text-fg-subtle",
								children: cs.industry
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 text-2xl font-bold",
								children: cs.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-fg-muted",
								children: cs.challenge
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-5 grid grid-cols-3 gap-3",
								children: cs.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xl font-extrabold text-primary",
									children: m.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "text-[11px] text-fg-muted",
									children: m.label
								})] }, m.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/case-studies/$slug",
								params: { slug: cs.slug },
								className: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary",
								children: ["Read full case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						]
					})]
				}) }, cs.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { CaseStudiesPage as component };
