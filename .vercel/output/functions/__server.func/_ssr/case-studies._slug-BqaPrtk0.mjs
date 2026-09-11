import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { j as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as useUi, i as Route$2, o as Button, s as CASE_STUDIES } from "./router-Dh1S71Is.mjs";
import { t as CtaBanner } from "./cta-banner-Dcysj22m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/case-studies._slug-BqaPrtk0.js
var import_jsx_runtime = require_jsx_runtime();
function CaseDetail() {
	const { study } = Route$2.useLoaderData();
	const openConsult = useUi((s) => s.openConsult);
	const others = CASE_STUDIES.filter((c) => c.slug !== study.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-linear-to-b from-bg-hero to-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[860px] px-5 py-12 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/case-studies",
						className: "text-sm font-semibold text-primary",
						children: "← All case studies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs font-bold uppercase tracking-[0.16em] text-fg-subtle",
						children: study.industry
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl font-extrabold tracking-tight",
						children: study.title
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1100px] px-5 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: study.image,
				alt: "",
				className: "w-full rounded-2xl object-cover aspect-[21/9] shadow-[var(--shadow-card)]"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-[860px] gap-10 px-5 py-12 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "grid grid-cols-3 gap-4 rounded-2xl bg-bg-soft p-6",
					children: study.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-2xl font-extrabold text-primary sm:text-3xl",
							children: m.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-xs text-fg-muted",
							children: m.label
						})]
					}, m.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold",
					children: "The challenge"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed text-fg-muted",
					children: study.challenge
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold",
					children: "What we built"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed text-fg-muted",
					children: study.solution
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: openConsult,
					children: ["Start a similar program", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				}) }),
				others.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold",
					children: "More results"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-4 sm:grid-cols-2",
					children: others.map((cs) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/case-studies/$slug",
						params: { slug: cs.slug },
						className: "block overflow-hidden rounded-xl shadow-[var(--shadow-card)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: cs.image,
							alt: "",
							className: "aspect-[16/9] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block p-4 font-semibold",
							children: cs.title
						})]
					}) }, cs.slug))
				})] }) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { CaseDetail as component };
