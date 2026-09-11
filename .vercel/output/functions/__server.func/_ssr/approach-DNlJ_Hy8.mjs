import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { j as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as useUi, o as Button, p as STEPS } from "./router-Dh1S71Is.mjs";
import { t as InnerHero } from "./inner-hero-CsUI3ymL.mjs";
import { t as CtaBanner } from "./cta-banner-Dcysj22m.mjs";
import { i as STEP_ICONS } from "./icons-tKO_ZqPS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/approach-DNlJ_Hy8.js
var import_jsx_runtime = require_jsx_runtime();
var DETAIL = {
	Discover: "Two to four weeks. We interview operators, pull sample data, map the current path of work, and name the constraint. You get a written point of view: where AI will pay, where it will not, and what has to be true before we write a line of code.",
	Design: "We prototype the human and the machine together — screens, handoffs, evaluation sets, and the integration sketch. Stakeholders see a working click-through before we staff a build squad.",
	Develop: "A dedicated pod ships in weekly increments with a live demo, an eval dashboard, and a written risk log. No black-box sprints. If a metric is sliding, you hear it in the standup — not at UAT.",
	Deploy: "We land in your environment with runbooks, access controls, and a rollback. Training is for the people who will use it on day one, not a slide deck left in a shared drive.",
	Scale: "After go-live we watch drift, cost, and adoption. Successful patterns get copied to the next workflow. The squad can stay, shrink, or hand over — you choose with data."
};
function ApproachPage() {
	const openConsult = useUi((s) => s.openConsult);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnerHero, {
			eyebrow: "Our approach",
			title: "A proven path to AI success",
			lede: "Five stages. One owner. No mystery between the workshop and the system in production.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: openConsult,
				children: ["Walk us through a problem", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-[800px] px-5 py-12 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-6",
				children: STEPS.map((step) => {
					const Icon = STEP_ICONS[step.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-4 rounded-2xl p-6 shadow-[var(--shadow-card)] sm:grid-cols-[auto_1fr] sm:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 sm:flex-col sm:items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-extrabold text-primary",
								children: step.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-6 text-fg-muted" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm font-medium text-fg-subtle",
								children: step.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-fg-muted",
								children: DETAIL[step.title]
							})
						] })]
					}, step.n);
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
	] });
}
//#endregion
export { ApproachPage as component };
