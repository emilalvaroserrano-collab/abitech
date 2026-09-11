import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({ meta: [{ title: "Terms of Service — ABI Tech" }] }),
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-[720px] px-5 py-14 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight">Terms of Service</h1>
      <p className="mt-2 text-sm text-fg-subtle">Last updated {new Date().getFullYear()}</p>
      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-fg-muted">
        <p>
          This website describes ABI Tech and lets you request a conversation. Submitting a
          form does not create a contract. Paid work is governed by a signed statement of work.
        </p>
        <p>
          Case-study figures are representative of engagements we have delivered. Client names
          may be withheld. Do not rely on this site as a guarantee of a specific result.
        </p>
        <p>
          Content on this site is owned by ABI Tech unless noted. Partner names are trademarks
          of their owners and do not imply endorsement.
        </p>
        <p>
          Contact: <a className="text-primary" href="mailto:hello@abitech.ai">hello@abitech.ai</a>.
        </p>
      </div>
    </article>
  );
}
