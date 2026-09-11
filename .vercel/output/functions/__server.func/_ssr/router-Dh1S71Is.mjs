import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { R as notFound, _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as Globe, D as CircleCheck, _ as MapPin, a as Twitter, g as Menu, h as Pause, j as ArrowRight, n as X, p as Play, s as TriangleAlert, t as Youtube, v as Mail, x as Instagram, y as Linkedin } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay, i as DialogDescription, l as Slot, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-data-CRRoUqZw.js
var NAV = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Use Cases",
		to: "/use-cases"
	},
	{
		label: "Case Studies",
		to: "/case-studies"
	},
	{
		label: "Our Approach",
		to: "/approach"
	},
	{
		label: "Careers",
		to: "/careers"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var SERVICES = [
	{
		slug: "ai-strategy",
		title: "AI Strategy & Advisory",
		short: "Identify opportunities, define roadmaps, and build AI strategies tailored to your business goals.",
		icon: "lightbulb",
		body: "We sit with your operators, not just your slide deck. In a few weeks we map where AI can move revenue, cost, or risk — and where it cannot. You leave with a sequenced roadmap, a build-vs-buy view, and a business case your board can actually fund.",
		outcomes: [
			"Opportunity map ranked by value, feasibility, and data readiness",
			"12–18 month implementation roadmap with owners and gates",
			"Risk, governance, and model-use policy starter kit",
			"Executive readout your leadership team can decide from"
		]
	},
	{
		slug: "custom-ai",
		title: "Custom AI Development",
		short: "Build and deploy AI agents, voice AI, computer vision, NLP, and more — designed for your use case.",
		icon: "code",
		body: "Off-the-shelf chatbots stall the moment they meet your data. We design, train, and ship production systems — agents, voice, vision, retrieval, and decisioning — that live inside the tools your teams already use.",
		outcomes: [
			"Production-grade agents with tool use, memory, and audit trails",
			"Voice AI for contact centers and field operations",
			"Computer vision for quality, safety, and document intake",
			"Domain NLP and RAG over your private knowledge"
		]
	},
	{
		slug: "automation",
		title: "Automation & Integration",
		short: "Streamline operations and reduce costs through intelligent automation and system integration.",
		icon: "cog",
		body: "Most of the value in AI is not a model — it is the plumbing. We connect models to ERP, CRM, EHR, core banking, and the messy middle of your stack so work actually moves without a human copy-paste.",
		outcomes: [
			"Intelligent document processing with human-in-the-loop review",
			"Workflow automation across SAP, Salesforce, ServiceNow, and custom APIs",
			"Event-driven orchestration with observability and rollback",
			"Cost-to-serve reduction you can measure in a quarter"
		]
	},
	{
		slug: "dedicated-teams",
		title: "Dedicated Teams",
		short: "Skilled AI and software engineers to scale your vision, faster.",
		icon: "users",
		body: "When you need more than a project, we embed a squad — engineers, an applied scientist, and a delivery lead — that works as an extension of your team. Same rituals, same repo, faster throughput.",
		outcomes: [
			"Squads staffed in weeks, not quarters",
			"Senior AI + full-stack coverage in one pod",
			"Knowledge transfer baked into every sprint",
			"Scale up or wind down without a hiring freeze"
		]
	}
];
var INDUSTRIES = [
	{
		slug: "healthcare",
		title: "Healthcare",
		tagline: "Better care. Smarter systems.",
		image: "/images/ind-healthcare.jpg",
		summary: "Clinical operations, patient support, and medical documentation that keep clinicians with patients — not keyboards.",
		useCases: [
			"AI-assisted patient intake and triage",
			"Ambient clinical documentation",
			"Prior-authorization and claims acceleration",
			"Care-gap outreach that patients actually answer"
		]
	},
	{
		slug: "finance",
		title: "Finance",
		tagline: "Faster insights. Lower risk.",
		image: "/images/ind-finance.jpg",
		summary: "From KYC to credit memos, we put models where analysts already work — with the controls a regulated firm requires.",
		useCases: [
			"Automated document processing for KYC and lending",
			"Fraud and AML investigation copilots",
			"Earnings and research summarization",
			"Operations bots for reconciliations and exceptions"
		]
	},
	{
		slug: "retail",
		title: "Retail",
		tagline: "Personalized experiences. Higher sales.",
		image: "/images/ind-retail.jpg",
		summary: "Store, e-commerce, and contact-center AI that treats every shopper as if your best associate is always on shift.",
		useCases: [
			"Real-time multilingual support",
			"Personalized product discovery",
			"Inventory and demand sensing",
			"Associate copilot on the floor"
		]
	},
	{
		slug: "education",
		title: "Education",
		tagline: "More inclusive learning. Greater access.",
		image: "/images/ind-education.jpg",
		summary: "Tutors, content tools, and admin automation that give teachers hours back and students a path that fits them.",
		useCases: [
			"Adaptive tutoring in multiple languages",
			"Assignment feedback at classroom scale",
			"Enrollment and advising assistants",
			"Accessibility tools for diverse learners"
		]
	},
	{
		slug: "manufacturing",
		title: "Manufacturing",
		tagline: "Smarter operations. Higher productivity.",
		image: "/images/ind-manufacturing.jpg",
		summary: "Vision, maintenance, and planning systems that catch defects early and keep lines moving.",
		useCases: [
			"Visual inspection on the line",
			"Predictive maintenance from sensor streams",
			"Work-instruction and safety copilots",
			"Supply-chain exception handling"
		]
	},
	{
		slug: "government",
		title: "Government",
		tagline: "Efficient services. Stronger communities.",
		image: "/images/ind-government.jpg",
		summary: "Citizen services, casework, and records that move at the speed people expect — with the transparency the public deserves.",
		useCases: [
			"Multilingual citizen service desks",
			"Caseworker document assistants",
			"Records search across decades of archives",
			"Benefits eligibility screening with auditability"
		]
	}
];
var CASE_STUDIES = [
	{
		slug: "patient-support",
		industry: "Healthcare",
		industrySlug: "healthcare",
		title: "AI-Powered Patient Support System",
		image: "/images/case-healthcare.jpg",
		challenge: "A regional hospital network was drowning in after-hours calls. Nurses spent nights answering the same five questions, wait times stretched past twenty minutes, and satisfaction scores were sliding.",
		solution: "We designed a voice-and-chat support layer that handles scheduling, refill status, and care-instruction follow-ups, with a warm handoff to a nurse when the model is unsure. It sits on top of their existing EHR — no rip-and-replace.",
		metrics: [
			{
				value: "70%",
				label: "Higher Patient Satisfaction"
			},
			{
				value: "50%",
				label: "Lower Support Costs"
			},
			{
				value: "3X",
				label: "Faster Response Time"
			}
		]
	},
	{
		slug: "document-processing",
		industry: "Finance",
		industrySlug: "finance",
		title: "Automated Document Processing",
		image: "/images/case-finance.jpg",
		challenge: "A Southeast Asian lender was taking six days to underwrite SME facilities because analysts read every bank statement, invoice, and ID by hand. Growth was capped by headcount.",
		solution: "We built an intake pipeline that classifies, extracts, and cross-checks 40+ document types, then writes a structured credit memo for analyst review. Exceptions route to a queue with the original page highlighted.",
		metrics: [
			{
				value: "100,000+",
				label: "Documents Processed Monthly"
			},
			{
				value: "99.5%",
				label: "Accuracy Rate"
			},
			{
				value: "80%",
				label: "Reduced Processing Time"
			}
		]
	},
	{
		slug: "multilingual-support",
		industry: "Retail",
		industrySlug: "retail",
		title: "Real-Time Multilingual Support",
		image: "/images/case-retail.jpg",
		challenge: "A specialty retailer expanding across ASEAN could not staff native speakers for every store and chat channel. Cart abandonment spiked whenever shoppers hit a language wall.",
		solution: "We deployed a real-time multilingual assistant — in-store kiosk, web, and WhatsApp — grounded in the live catalog and return policy, with associate takeover when a sale is on the line.",
		metrics: [
			{
				value: "50+",
				label: "Languages Supported"
			},
			{
				value: "90%",
				label: "Customer Satisfaction Increase"
			},
			{
				value: "2X",
				label: "Higher Conversion Rate"
			}
		]
	}
];
var STEPS = [
	{
		n: "01",
		title: "Discover",
		body: "Understand your goals, challenges, and opportunities.",
		icon: "search"
	},
	{
		n: "02",
		title: "Design",
		body: "Create a tailored AI solution and implementation plan.",
		icon: "pen"
	},
	{
		n: "03",
		title: "Develop",
		body: "Build, test, and iterate with transparency.",
		icon: "code"
	},
	{
		n: "04",
		title: "Deploy",
		body: "Launch and integrate into your operations.",
		icon: "rocket"
	},
	{
		n: "05",
		title: "Scale",
		body: "Optimize, monitor, and expand for greater impact.",
		icon: "bars"
	}
];
var STATS = [
	{
		value: "50+",
		label: "Projects Delivered",
		icon: "globe"
	},
	{
		value: "30+",
		label: "Global Clients",
		icon: "users"
	},
	{
		value: "99%",
		label: "Client Satisfaction",
		icon: "thumb"
	},
	{
		value: "5+",
		label: "Years of Experience",
		icon: "trophy"
	}
];
var JOBS = [
	{
		id: "sr-ai-engineer",
		title: "Senior AI Engineer",
		team: "Delivery",
		location: "Manila · Hybrid",
		type: "Full-time",
		blurb: "Own model integration, evaluation, and production reliability on client squads. You have shipped RAG or agents that real users depend on."
	},
	{
		id: "solutions-consultant",
		title: "AI Solutions Consultant",
		team: "Advisory",
		location: "Manila · Client-facing",
		type: "Full-time",
		blurb: "Translate messy operations into a scoped AI program. You are as comfortable in a boardroom as you are in a process workshop."
	},
	{
		id: "mlops",
		title: "MLOps Engineer",
		team: "Platform",
		location: "Remote · APAC",
		type: "Full-time",
		blurb: "Stand up evaluation, tracing, and deployment pipelines so models do not become mystery boxes after go-live."
	},
	{
		id: "product-designer",
		title: "Product Designer",
		team: "Experience",
		location: "Manila · Hybrid",
		type: "Full-time",
		blurb: "Design the human side of AI products — handoff states, trust, and the moments a person should take over from a model."
	},
	{
		id: "engagement-manager",
		title: "Engagement Manager",
		team: "Delivery",
		location: "Manila · Hybrid",
		type: "Full-time",
		blurb: "Run the engagement. Scope, staffing, executive communication, and the unglamorous work of making a program land."
	}
];
var PARTNERS = [
	"Microsoft",
	"NVIDIA",
	"AWS",
	"Google Cloud",
	"OpenAI",
	"Meta"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dh1S71Is.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		className: cn("size-9 shrink-0", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "abi-g",
				x1: "8",
				y1: "36",
				x2: "34",
				y2: "4",
				gradientUnits: "userSpaceOnUse",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { stopColor: "#1558c4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "1",
					stopColor: "#4ea3ff"
				})]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "url(#abi-g)",
				d: "M20 3.2 37.4 36.2H29.6L20 18.4 10.4 36.2H2.6L20 3.2Z"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "#7ec2ff",
				d: "M20 14.2 27.4 28.2h-4.4L20 22.2l-3 6H12.6L20 14.2Z"
			})
		]
	});
}
function Logo({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2.5 group",
		"aria-label": "ABI Tech home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[17px] font-extrabold tracking-tight text-fg",
				children: "ABI Tech"
			}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:block text-[10px] font-medium tracking-[0.04em] text-fg-subtle",
				children: "AI Business Implementation Technology"
			}) : null]
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-semibold transition-[background-color,color,box-shadow,transform,border-color] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg shadow-[0_8px_20px_rgba(29,111,232,0.28)] hover:bg-primary-hover",
			secondary: "bg-bg text-fg shadow-[0_0_0_1px_var(--color-border)] hover:bg-bg-soft",
			outline: "bg-transparent text-primary-fg shadow-[0_0_0_1.5px_rgba(255,255,255,0.85)] hover:bg-on-media/10",
			ghost: "bg-transparent text-fg hover:bg-primary-soft hover:text-primary",
			link: "bg-transparent text-primary font-semibold hover:underline underline-offset-4 px-0 h-auto"
		},
		size: {
			sm: "h-10 px-4 text-sm rounded-pill",
			md: "h-12 px-6 text-[15px] rounded-pill",
			lg: "h-14 px-7 text-base rounded-pill",
			icon: "size-10 rounded-full"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var useUi = create((set) => ({
	consultOpen: false,
	videoOpen: false,
	applyJob: null,
	openConsult: () => set({ consultOpen: true }),
	closeConsult: () => set({ consultOpen: false }),
	openVideo: () => set({ videoOpen: true }),
	closeVideo: () => set({ videoOpen: false }),
	openApply: (job) => set({ applyJob: job }),
	closeApply: () => set({ applyJob: null })
}));
function Header() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const openConsult = useUi((s) => s.openConsult);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 bg-bg/90 backdrop-blur-md transition-[box-shadow] duration-200", scrolled ? "shadow-[var(--shadow-header)]" : "shadow-none"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-4 px-5 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-0.5",
					"aria-label": "Primary",
					children: NAV.map((item) => {
						const active = item.to === "/" ? pathname === "/" : pathname === item.to || pathname.startsWith(`${item.to}/`);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("relative px-2.5 py-2 text-[13.5px] font-medium rounded-md transition-colors", active ? "text-primary" : "text-fg-muted hover:text-fg"),
							children: [item.label, active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-2.5 right-2.5 -bottom-0.5 h-0.5 rounded-full bg-primary" }) : null]
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "hidden sm:inline-flex size-10 items-center justify-center rounded-full text-fg-muted hover:bg-bg-soft hover:text-fg",
							"aria-label": "Language",
							title: "English",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
								className: "size-[18px]",
								strokeWidth: 1.8
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "pr-3.5 max-sm:h-10 max-sm:px-3 max-sm:text-xs",
							onClick: openConsult,
							children: ["Let's Talk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								strokeWidth: 2.2
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "lg:hidden inline-flex size-11 items-center justify-center rounded-full text-fg hover:bg-bg-soft",
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-border bg-bg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-[1240px] flex-col px-5 py-4",
				"aria-label": "Mobile",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "flex min-h-12 items-center border-b border-border/70 text-[15px] font-medium text-fg",
					children: item.label
				}, item.to))
			})
		}) : null]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-bg-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-fg-muted",
							children: "Building a more intelligent, efficient, and human-centered future through AI."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex items-center gap-2",
							children: [
								{
									Icon: Linkedin,
									label: "LinkedIn"
								},
								{
									Icon: Twitter,
									label: "X"
								},
								{
									Icon: Youtube,
									label: "YouTube"
								},
								{
									Icon: Instagram,
									label: "Instagram"
								}
							].map(({ Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								"aria-label": label,
								className: "inline-flex size-9 items-center justify-center rounded-full text-fg-muted hover:bg-bg hover:text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4",
									strokeWidth: 1.8
								})
							}, label))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-bold text-fg",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-sm text-fg-muted hover:text-primary",
						children: item.label
					}) }, item.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-bold text-fg",
					children: "Our Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2.5",
					children: [SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/$slug",
						params: { slug: s.slug },
						className: "text-sm text-fg-muted hover:text-primary",
						children: s.title
					}) }, s.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "text-sm text-fg-muted hover:text-primary",
						children: "Support & Maintenance"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-bold text-fg",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-fg-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							className: "mt-0.5 size-4 text-primary",
							strokeWidth: 1.8
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hello@abitech.ai",
							className: "hover:text-primary",
							children: "hello@abitech.ai"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
							className: "mt-0.5 size-4 text-primary",
							strokeWidth: 1.8
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Manila, Philippines", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-fg-subtle",
							children: "(Serving Clients Worldwide)"
						})] })]
					})]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1240px] flex-col gap-3 px-5 py-5 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ABI Tech. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "hover:text-fg",
						children: "Privacy Policy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "hover:text-fg",
						children: "Terms of Service"
					})]
				})]
			})
		})]
	});
}
function ConsultModal() {
	const open = useUi((s) => s.consultOpen);
	const onOpenChange = (v) => {
		if (v) useUi.getState().openConsult();
		else useUi.getState().closeConsult();
	};
	const [sent, setSent] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const payload = Object.fromEntries(data.entries());
		setBusy(true);
		window.setTimeout(() => {
			const existing = JSON.parse(localStorage.getItem("abi-inquiries") || "[]");
			existing.push({
				...payload,
				at: (/* @__PURE__ */ new Date()).toISOString()
			});
			localStorage.setItem("abi-inquiries", JSON.stringify(existing));
			setBusy(false);
			setSent(true);
		}, 500);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => {
			onOpenChange(v);
			if (!v) {
				setSent(false);
				setBusy(false);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-navy/50 data-[state=open]:animate-[fade-up_200ms_ease-out]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed left-1/2 top-1/2 z-50 w-[min(560px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-bg p-6 shadow-[var(--shadow-card)] focus:outline-none sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
				className: "absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full text-fg-muted hover:bg-bg-soft hover:text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Close"
				})]
			}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto size-12 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mt-4 text-2xl font-bold",
						children: "Request received"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mt-2 text-fg-muted",
						children: "A partner from ABI Tech will reach out within one business day."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6",
						onClick: () => onOpenChange(false),
						children: "Close"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-2xl font-bold tracking-tight",
					children: "Schedule a consultation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-1.5 text-sm text-fg-muted",
					children: "Tell us a little about your business. We'll come back with a point of view, not a pitch deck."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 grid gap-3",
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							name: "name",
							required: true,
							autoComplete: "name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Work email",
							name: "email",
							type: "email",
							required: true,
							autoComplete: "email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Company",
								name: "company",
								required: true,
								autoComplete: "organization"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Role",
								name: "role",
								autoComplete: "organization-title"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1.5 text-sm font-medium",
							children: ["Industry", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "industry",
								className: "h-12 rounded-xl border-0 bg-bg-soft px-3.5 text-sm font-normal text-fg shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-offset-0 focus:outline-primary",
								defaultValue: "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: "Select an industry"
									}),
									INDUSTRIES.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: i.title,
										children: i.title
									}, i.slug)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Other",
										children: "Other"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1.5 text-sm font-medium",
							children: ["What are you looking to solve?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								required: true,
								rows: 4,
								className: "resize-y rounded-xl border-0 bg-bg-soft px-3.5 py-3 text-sm font-normal text-fg shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-offset-0 focus:outline-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "mt-2 w-full",
							disabled: busy,
							children: [busy ? "Sending…" : "Request a conversation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})
			] })]
		})] })
	});
}
function Field({ label, name, type = "text", required, autoComplete }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "grid gap-1.5 text-sm font-medium",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			autoComplete,
			className: "h-12 rounded-xl border-0 bg-bg-soft px-3.5 text-sm font-normal text-fg shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-offset-0 focus:outline-primary"
		})]
	});
}
var FRAMES = [
	{
		src: "/images/hero-scene.jpg",
		caption: "People + AI, working as one team."
	},
	{
		src: "/images/workshop.jpg",
		caption: "We start with the work — not the model."
	},
	{
		src: "/images/case-healthcare.jpg",
		caption: "Healthcare teams get hours back."
	},
	{
		src: "/images/case-finance.jpg",
		caption: "Documents that used to take days now take minutes."
	},
	{
		src: "/images/cta-banner.jpg",
		caption: "Bolder. Smarter. Together."
	}
];
function VideoModal() {
	const open = useUi((s) => s.videoOpen);
	const close = useUi((s) => s.closeVideo);
	const [i, setI] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (!open) {
			setI(0);
			setPlaying(true);
			return;
		}
		if (!playing) return;
		const id = window.setInterval(() => setI((n) => (n + 1) % FRAMES.length), 3200);
		return () => window.clearInterval(id);
	}, [open, playing]);
	const frame = FRAMES[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => !v ? close() : useUi.getState().openVideo(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-navy/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed left-1/2 top-1/2 z-50 w-[min(920px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-navy shadow-[var(--shadow-card)] focus:outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: "ABI Tech — How we implement AI"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
					className: "absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-full bg-navy/40 text-on-media hover:bg-navy/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Close"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-video bg-navy",
					children: [
						FRAMES.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: f.src,
							alt: "",
							className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
							style: { opacity: idx === i ? 1 : 0 }
						}, f.src)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "absolute bottom-16 left-6 right-6 text-lg font-semibold text-on-media sm:text-2xl",
							children: frame.caption
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-5 left-6 right-6 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setPlaying((p) => !p),
								className: "inline-flex size-10 items-center justify-center rounded-full bg-on-media/15 text-on-media hover:bg-on-media/25",
								"aria-label": playing ? "Pause" : "Play",
								children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4 ml-0.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-1 gap-1.5",
								children: FRAMES.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": `Scene ${idx + 1}`,
									onClick: () => setI(idx),
									className: "h-1 flex-1 overflow-hidden rounded-full bg-on-media/25",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block h-full bg-on-media transition-[width] duration-300",
										style: { width: idx <= i ? "100%" : "0%" }
									})
								}, idx))
							})]
						})
					]
				})
			]
		})] })
	});
}
function ApplyModal() {
	const jobId = useUi((s) => s.applyJob);
	const close = useUi((s) => s.closeApply);
	const job = JOBS.find((j) => j.id === jobId);
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget).entries());
		const existing = JSON.parse(localStorage.getItem("abi-applications") || "[]");
		existing.push({
			...data,
			job: jobId,
			at: (/* @__PURE__ */ new Date()).toISOString()
		});
		localStorage.setItem("abi-applications", JSON.stringify(existing));
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(jobId),
		onOpenChange: (v) => {
			if (!v) {
				close();
				setSent(false);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-navy/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed left-1/2 top-1/2 z-50 w-[min(520px,calc(100%-1.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-bg p-6 shadow-[var(--shadow-card)] focus:outline-none sm:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
				className: "absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full text-fg-muted hover:bg-bg-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Close"
				})]
			}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mx-auto size-12 text-primary" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "mt-4 text-2xl font-bold",
						children: "Application sent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mt-2 text-fg-muted",
						children: "Thanks for your interest. Talent will review and follow up if there's a fit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-6",
						onClick: close,
						children: "Close"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "text-2xl font-bold tracking-tight",
					children: ["Apply — ", job?.title]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
					className: "mt-1.5 text-sm text-fg-muted",
					children: [
						job?.location,
						" · ",
						job?.type
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 grid gap-3",
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1.5 text-sm font-medium",
							children: ["Full name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								required: true,
								className: "h-12 rounded-xl bg-bg-soft px-3.5 text-sm font-normal shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1.5 text-sm font-medium",
							children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "email",
								type: "email",
								required: true,
								className: "h-12 rounded-xl bg-bg-soft px-3.5 text-sm font-normal shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1.5 text-sm font-medium",
							children: ["LinkedIn or portfolio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "link",
								type: "url",
								placeholder: "https://",
								className: "h-12 rounded-xl bg-bg-soft px-3.5 text-sm font-normal shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1.5 text-sm font-medium",
							children: ["Why ABI Tech?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "why",
								rows: 4,
								required: true,
								className: "rounded-xl bg-bg-soft px-3.5 py-3 text-sm font-normal shadow-[0_0_0_1px_var(--color-border)] focus:outline-2 focus:outline-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "mt-2 w-full",
							children: ["Submit application", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				})
			] })]
		})] })
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplyModal, {})
		]
	});
}
var styles_default = "/assets/styles-CPcDdMmB.css";
var APP_NAME = "ABI Tech";
var Route$13 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "ABI Tech helps organizations design, build, and deploy AI solutions that actually work — from strategy to implementation."
			},
			{
				name: "theme-color",
				content: "#1D6FE8"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800&display=swap"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex min-h-[60vh] max-w-[640px] flex-col items-center justify-center px-5 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm font-bold uppercase tracking-[0.16em] text-primary",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-extrabold",
				children: "This page is not on the map"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-fg-muted",
				children: "The link may be old, or the page has moved."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-flex h-12 items-center rounded-pill bg-primary px-6 text-sm font-semibold text-primary-fg",
				children: "Back to home"
			})
		]
	});
}
var $$splitComponentImporter$12 = () => import("./routes-eldQPraX.mjs");
var Route$12 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$12, "component") });
var $$splitComponentImporter$11 = () => import("./about-CH9iY-Ww.mjs");
var Route$11 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({ meta: [{ title: "About — ABI Tech" }] })
});
var $$splitComponentImporter$10 = () => import("./approach-DNlJ_Hy8.mjs");
var Route$10 = createFileRoute("/approach")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({ meta: [{ title: "Our Approach — ABI Tech" }] })
});
var $$splitComponentImporter$9 = () => import("./careers-uBDxUZDu.mjs");
var Route$9 = createFileRoute("/careers")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [{ title: "Careers — ABI Tech" }] })
});
var $$splitComponentImporter$8 = () => import("./case-studies-BMndPLb_.mjs");
var Route$8 = createFileRoute("/case-studies")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [{ title: "Case Studies — ABI Tech" }] })
});
var $$splitComponentImporter$7 = () => import("./contact-CLJTisMx.mjs");
var Route$7 = createFileRoute("/contact")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: "Contact — ABI Tech" }] })
});
var $$splitComponentImporter$6 = () => import("./privacy-CbvRmAqU.mjs");
var Route$6 = createFileRoute("/privacy")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: "Privacy Policy — ABI Tech" }] })
});
var $$splitComponentImporter$5 = () => import("./services-DOY5x80y.mjs");
var Route$5 = createFileRoute("/services")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Services — ABI Tech" }] })
});
var $$splitComponentImporter$4 = () => import("./terms-RYtR75KS.mjs");
var Route$4 = createFileRoute("/terms")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "Terms of Service — ABI Tech" }] })
});
var $$splitComponentImporter$3 = () => import("./use-cases-D2ziv_yC.mjs");
var Route$3 = createFileRoute("/use-cases")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Use Cases — ABI Tech" }] })
});
var $$splitComponentImporter$2 = () => import("./case-studies._slug-BqaPrtk0.mjs");
var Route$2 = createFileRoute("/case-studies/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	loader: ({ params }) => {
		const study = CASE_STUDIES.find((c) => c.slug === params.slug);
		if (!study) throw notFound();
		return { study };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.study.title ?? "Case study"} — ABI Tech` }] })
});
var $$splitComponentImporter$1 = () => import("./services._slug-Bt_9kyrP.mjs");
var Route$1 = createFileRoute("/services/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	loader: ({ params }) => {
		const service = SERVICES.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.service.title ?? "Service"} — ABI Tech` }] })
});
var $$splitComponentImporter = () => import("./use-cases._slug-DEe1oxPa.mjs");
var Route = createFileRoute("/use-cases/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const industry = INDUSTRIES.find((i) => i.slug === params.slug);
		if (!industry) throw notFound();
		return {
			industry,
			cases: CASE_STUDIES.filter((c) => c.industrySlug === industry.slug)
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.industry.title ?? "Industry"} — ABI Tech` }] })
});
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$11.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var ApproachRoute = Route$10.update({
	id: "/approach",
	path: "/approach",
	getParentRoute: () => Route$13
});
var CareersRoute = Route$9.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$13
});
var CaseStudiesRoute = Route$8.update({
	id: "/case-studies",
	path: "/case-studies",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var PrivacyRoute = Route$6.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$13
});
var ServicesRoute = Route$5.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$13
});
var TermsRoute = Route$4.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$13
});
var UseCasesRoute = Route$3.update({
	id: "/use-cases",
	path: "/use-cases",
	getParentRoute: () => Route$13
});
var CaseStudiesSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => CaseStudiesRoute
});
var ServicesSlugRoute = Route$1.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
});
var UseCasesSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => UseCasesRoute
});
var CaseStudiesRouteChildren = { CaseStudiesSlugRoute };
var CaseStudiesRouteWithChildren = CaseStudiesRoute._addFileChildren(CaseStudiesRouteChildren);
var ServicesRouteChildren = { ServicesSlugRoute };
var ServicesRouteWithChildren = ServicesRoute._addFileChildren(ServicesRouteChildren);
var UseCasesRouteChildren = { UseCasesSlugRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ApproachRoute,
	CareersRoute,
	CaseStudiesRoute: CaseStudiesRouteWithChildren,
	ContactRoute,
	PrivacyRoute,
	ServicesRoute: ServicesRouteWithChildren,
	TermsRoute,
	UseCasesRoute: UseCasesRoute._addFileChildren(UseCasesRouteChildren)
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useUi as a, INDUSTRIES as c, SERVICES as d, STATS as f, Route$2 as i, JOBS as l, Route as n, Button as o, STEPS as p, Route$1 as r, CASE_STUDIES as s, router_exports as t, PARTNERS as u };
