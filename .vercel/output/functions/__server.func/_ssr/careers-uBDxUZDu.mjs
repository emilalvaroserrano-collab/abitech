import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { E as Clock, _ as MapPin } from "../_libs/lucide-react.mjs";
import { a as useUi, l as JOBS, o as Button } from "./router-Dh1S71Is.mjs";
import { t as InnerHero } from "./inner-hero-CsUI3ymL.mjs";
import { t as CtaBanner } from "./cta-banner-Dcysj22m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/careers-uBDxUZDu.js
var import_jsx_runtime = require_jsx_runtime();
function CareersPage() {
	const openApply = useUi((s) => s.openApply);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnerHero, {
			eyebrow: "Careers",
			title: "Build systems people will still be using next year",
			lede: "We hire people who like the unglamorous middle of AI — the integrations, the evals, the Tuesday when a model is wrong and a person has to take over."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-[1100px] items-center gap-10 px-5 py-10 lg:grid-cols-2 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/careers.jpg",
				alt: "Team collaborating at ABI Tech",
				className: "w-full rounded-2xl object-cover aspect-[16/11] shadow-[var(--shadow-card)]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-extrabold",
				children: "How we work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 grid gap-3 text-sm leading-relaxed text-fg-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Small pods. You will know everyone on the engagement." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Manila hub, APAC-friendly hours, clients across time zones." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "We write things down. Decisions live in the repo, not in chat." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No bench-warming. If we hire you, there is real work waiting." })
				]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-[800px] px-5 py-8 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-extrabold",
				children: "Open roles"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 grid gap-4",
				children: JOBS.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-4 rounded-2xl p-5 shadow-[var(--shadow-card)] sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold",
							children: job.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-fg-muted",
							children: job.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 flex flex-wrap gap-3 text-xs text-fg-subtle",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
										" ",
										job.location
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5" }),
										" ",
										job.type
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: job.team })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "shrink-0",
						onClick: () => openApply(job.id),
						children: "Apply"
					})]
				}, job.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { CareersPage as component };
