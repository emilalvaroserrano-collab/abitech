import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inner-hero-CsUI3ymL.js
var import_jsx_runtime = require_jsx_runtime();
function InnerHero({ eyebrow, title, lede, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-linear-to-b from-bg-hero to-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[800px] px-5 py-14 text-center lg:px-8 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-bold uppercase tracking-[0.18em] text-primary",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-fg-muted",
					children: lede
				}),
				children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 flex justify-center gap-3",
					children
				}) : null
			]
		})
	});
}
//#endregion
export { InnerHero as t };
