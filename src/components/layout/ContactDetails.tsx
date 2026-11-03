import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappHref } from "@/config/site";
import { cn } from "@/lib/cn";
import { getT } from "@/i18n/server";

/**
 * Contact details from configuration. Unverified details show a labelled placeholder
 * and never a working link (see README → Environment).
 */
export async function ContactDetails({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const t = await getT();
  const c = t.nav.contact;
  const { email, phone, address, hours } = siteConfig.contact;
  const wa = whatsappHref(c.greeting);
  const dark = tone === "dark";

  const rows = [
    { key: "email", icon: Mail, label: c.email, value: email, href: email ? `mailto:${email}` : undefined },
    { key: "phone", icon: Phone, label: c.phone, value: phone, href: phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : undefined },
    { key: "whatsapp", icon: MessageCircle, label: c.whatsapp, value: wa ? `+${siteConfig.contact.whatsapp}` : undefined, href: wa },
    { key: "office", icon: MapPin, label: c.office, value: address, href: undefined },
    { key: "hours", icon: Clock, label: c.hours, value: hours, href: undefined },
  ];

  return (
    <dl className={cn("space-y-4", className)}>
      {rows.map(({ key, icon: Icon, label, value, href }) => (
        <div key={key} className="flex gap-3.5">
          <Icon
            aria-hidden
            strokeWidth={1.6}
            className={cn("mt-0.5 size-[18px] shrink-0", dark ? "text-gold" : "text-forest")}
          />
          <div className="min-w-0">
            <dt className={cn("text-sm", dark ? "text-mist" : "text-stone")}>{label}</dt>
            <dd className={cn("mt-0.5 break-words", dark ? "text-ivory" : "text-navy")}>
              {value ? (
                href ? (
                  <a
                    href={href}
                    className="font-medium underline decoration-current/30 underline-offset-4 hover:decoration-current"
                    {...(key === "whatsapp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {value}
                  </a>
                ) : (
                  <span className="whitespace-pre-line">{value}</span>
                )
              ) : (
                <span className={cn("italic", dark ? "text-mist/80" : "text-stone")}>{t.common.toBeConfirmed}</span>
              )}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
