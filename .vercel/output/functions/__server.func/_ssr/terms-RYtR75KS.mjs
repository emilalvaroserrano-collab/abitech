import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/terms-RYtR75KS.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-[720px] px-5 py-14 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-extrabold tracking-tight",
				children: "Terms of Service"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-fg-subtle",
				children: ["Last updated ", (/* @__PURE__ */ new Date()).getFullYear()]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 space-y-5 text-[15px] leading-relaxed text-fg-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This website describes ABI Tech and lets you request a conversation. Submitting a form does not create a contract. Paid work is governed by a signed statement of work." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Case-study figures are representative of engagements we have delivered. Client names may be withheld. Do not rely on this site as a guarantee of a specific result." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Content on this site is owned by ABI Tech unless noted. Partner names are trademarks of their owners and do not imply endorsement." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Contact: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "text-primary",
							href: "mailto:hello@abitech.ai",
							children: "hello@abitech.ai"
						}),
						"."
					] })
				]
			})
		]
	});
}
//#endregion
export { TermsPage as component };
