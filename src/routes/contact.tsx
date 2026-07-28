import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, Check, ArrowUpRight } from "lucide-react";
import { SITE, FAQ } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Falooda Club Dubai" },
      {
        name: "description",
        content:
          "Reach Falooda Club Dubai — call, WhatsApp or send a message for events, catering and feedback.",
      },
      { property: "og:title", content: "Contact — Falooda Club" },
      { property: "og:description", content: "Say hi, book catering, or send us your feedback." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Field({
  label,
  name,
  as = "input",
  type = "text",
  required,
}: {
  label: string;
  name: string;
  as?: "input" | "textarea";
  type?: string;
  required?: boolean;
}) {
  const cls =
    "peer w-full border-b border-hairline bg-transparent pt-6 pb-2 text-[15px] text-ink placeholder-transparent focus:border-ink focus:outline-none";
  return (
    <label className="relative block">
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={4} placeholder={label} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={label} className={cls} />
      )}
      <span className="absolute left-0 top-1 eyebrow transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-[13px] peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-ink/40 peer-focus:top-1 peer-focus:text-[11px] peer-focus:tracking-[0.22em] peer-focus:uppercase peer-focus:text-ink">
        {label}
      </span>
    </label>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const message = String(form.get("message") ?? "");
    const body = encodeURIComponent(`Hi Falooda Club! I'm ${name}.\n\n${message}`);
    window.open(`${SITE.whatsapp}?text=${body}`, "_blank");
    setSent(true);
  }

  return (
    <div>
      <section className="pt-16 sm:pt-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <h1 className="font-display text-5xl font-medium leading-none text-ink sm:text-7xl">
            Contact
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 sm:px-8 md:grid-cols-12">
          {/* Left: contact channels */}
          <div className="md:col-span-5">
            <dl className="divide-y divide-hairline border-y border-hairline">
              <div className="grid grid-cols-12 gap-4 py-5">
                <dt className="col-span-4 eyebrow">Call</dt>
                <dd className="col-span-8 tabular text-ink">
                  {SITE.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block hover:text-accent-orange"
                    >
                      {p}
                    </a>
                  ))}
                </dd>
              </div>
              <div className="grid grid-cols-12 gap-4 py-5">
                <dt className="col-span-4 eyebrow">WhatsApp</dt>
                <dd className="col-span-8">
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-ink hover:text-accent-orange"
                  >
                    Message us <ArrowUpRight className="h-4 w-4" />
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-12 gap-4 py-5">
                <dt className="col-span-4 eyebrow">Visit</dt>
                <dd className="col-span-8 text-[15px] leading-relaxed text-ink">{SITE.address}</dd>
              </div>
              <div className="grid grid-cols-12 gap-4 py-5">
                <dt className="col-span-4 eyebrow">Hours</dt>
                <dd className="col-span-8 text-[15px] tabular text-ink">{SITE.hours}</dd>
              </div>
            </dl>

            <dl className="mt-10 divide-y divide-hairline border-t border-hairline">
              {FAQ.map((f) => (
                <div key={f.q} className="py-4">
                  <dt className="font-display text-base font-medium text-ink">{f.q}</dt>
                  <dd className="mt-1 text-[14px] text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: form */}
          <form onSubmit={onSubmit} className="md:col-span-7">
            <p className="eyebrow">The message</p>
            <div className="mt-6 space-y-2">
              <Field label="Your name" name="name" required />
              <Field label="Phone or email" name="contact" />
              <Field label="Subject — catering, feedback, press…" name="subject" />
              <Field label="Your message" name="message" as="textarea" required />
            </div>

            <button
              type="submit"
              className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-8 text-sm font-medium text-cream transition-colors hover:bg-accent-orange"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Sent — check WhatsApp
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send via WhatsApp
                </>
              )}
            </button>
            <p className="mt-4 text-[12px] text-muted-foreground">
              We'll reply on WhatsApp. Your message won't be stored on this site.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
