import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/site-data";
import { SERVICE_ICONS } from "@/components/home/icons";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/home/cta-banner";
import { useUi } from "@/lib/ui-store";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetail,
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.service.title ?? "Service"} — ABI Tech` }],
  }),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = SERVICE_ICONS[service.icon];
  const openConsult = useUi((s) => s.openConsult);
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="bg-linear-to-b from-bg-hero to-bg">
        <div className="mx-auto max-w-[800px] px-5 py-14 lg:px-8 lg:py-16">
          <Link to="/services" className="text-sm font-semibold text-primary">
            ← All services
          </Link>
          <span className="mt-6 flex size-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
            <Icon className="size-6" />
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{service.title}</h1>
          <p className="mt-4 text-[16px] leading-relaxed text-fg-muted">{service.body}</p>
          <Button className="mt-7" onClick={openConsult}>
            Start with this service
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
      <section className="mx-auto max-w-[800px] px-5 py-12 lg:px-8">
        <h2 className="text-xl font-bold">What you leave with</h2>
        <ul className="mt-5 grid gap-3">
          {service.outcomes.map((o) => (
            <li key={o} className="flex gap-3 rounded-xl bg-bg-soft px-4 py-3 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              {o}
            </li>
          ))}
        </ul>
        <h2 className="mt-12 text-xl font-bold">Also in the stack</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="block rounded-xl p-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
              >
                <p className="font-semibold">{s.title}</p>
                <p className="mt-1 text-xs text-fg-muted">{s.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBanner />
    </>
  );
}
