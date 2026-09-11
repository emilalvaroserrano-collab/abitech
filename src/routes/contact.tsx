import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { InnerHero } from "@/components/layout/inner-hero";
import { Button } from "@/components/ui/button";
import { useUi } from "@/lib/ui-store";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({ meta: [{ title: "Contact — ABI Tech" }] }),
});

function ContactPage() {
  const openConsult = useUi((s) => s.openConsult);
  return (
    <>
      <InnerHero
        eyebrow="Contact"
        title="Let’s talk about the work, not the hype"
        lede="Whether you have a scoped problem or a messy one, the first conversation is free and opinionated."
      />
      <section className="mx-auto grid max-w-[1100px] gap-8 px-5 py-12 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div className="grid gap-4">
          <a
            href="mailto:hello@abitech.ai"
            className="flex items-start gap-3 rounded-2xl p-5 shadow-[var(--shadow-card)]"
          >
            <Mail className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-sm font-semibold">Email</span>
              <span className="text-sm text-fg-muted">hello@abitech.ai</span>
            </span>
          </a>
          <div className="flex items-start gap-3 rounded-2xl p-5 shadow-[var(--shadow-card)]">
            <MapPin className="mt-0.5 size-5 text-primary" />
            <span>
              <span className="block text-sm font-semibold">Studio</span>
              <span className="text-sm text-fg-muted">
                Manila, Philippines
                <br />
                Serving clients worldwide
              </span>
            </span>
          </div>
          <Button className="mt-2 w-full sm:w-auto" onClick={openConsult}>
            Schedule a consultation
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <img
          src="/images/manila.jpg"
          alt="Manila skyline"
          className="w-full rounded-2xl object-cover aspect-[16/11] shadow-[var(--shadow-card)]"
        />
      </section>
    </>
  );
}
