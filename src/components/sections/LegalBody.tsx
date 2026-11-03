import { fmt } from "@/lib/fmt";

/** Long-form policy text. Bracketed notes such as "[To be completed: …]" are shown in bold. */
export function LegalBody({
  sections,
  vars,
}: {
  sections: { h: string; p: string[] }[];
  vars: Record<string, string>;
}) {
  return (
    <div className="prose-body mt-12">
      {sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.p.map((para) => (
            <p key={para}>
              {fmt(para, vars)
                .split(/(\[[^\]]+\])/)
                .map((part, i) => (part.startsWith("[") ? <strong key={i}>{part}</strong> : part))}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
