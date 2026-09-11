import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as MapPin, j as ArrowRight, v as Mail } from "../_libs/lucide-react.mjs";
import { a as useUi, o as Button } from "./router-Dh1S71Is.mjs";
import { t as InnerHero } from "./inner-hero-CsUI3ymL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CLJTisMx.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const openConsult = useUi((s) => s.openConsult);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnerHero, {
		eyebrow: "Contact",
		title: "Let’s talk about the work, not the hype",
		lede: "Whether you have a scoped problem or a messy one, the first conversation is free and opinionated."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-[1100px] gap-8 px-5 py-12 lg:grid-cols-[1fr_1.2fr] lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "mailto:hello@abitech.ai",
					className: "flex items-start gap-3 rounded-2xl p-5 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-semibold",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-fg-muted",
						children: "hello@abitech.ai"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 rounded-2xl p-5 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-semibold",
						children: "Studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm text-fg-muted",
						children: [
							"Manila, Philippines",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Serving clients worldwide"
						]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "mt-2 w-full sm:w-auto",
					onClick: openConsult,
					children: ["Schedule a consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/images/manila.jpg",
			alt: "Manila skyline",
			className: "w-full rounded-2xl object-cover aspect-[16/11] shadow-[var(--shadow-card)]"
		})]
	})] });
}
//#endregion
export { ContactPage as component };
