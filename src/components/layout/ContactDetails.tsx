import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappHref } from "@/config/site";
import { cn } from "@/lib/cn";

/**
 * Contact details from configuration. Unverified details show a labelled placeholder
 * and never a working link (see README → Environment).
 */
export function ContactDetails({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const { email, phone, address, hours } = siteConfig.contact;
  const wa = whatsappHref("Hello Horra Prime Group, I would like to ask about your services.");
  const dark = tone === "dark";

  const rows = [
    { icon: Mail, label: "Email", value: email, href: email ? `mailto:${email}` : undefined },
    { icon: Phone, label: "Phone", value: phone, href: phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : undefined },
    { icon: MessageCircle, label: "WhatsApp", value: wa ? `+${siteConfig.contact.whatsapp}` : undefined, href: wa },
    { icon: MapPin, label: "Office", value: address },
    { icon: Clock, label: "Hours", value: hours },
  ];

  return (
    <dl className={cn("space-y-4", className)}>
      {rows.map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="flex gap-3.5">
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
                    {...(label === "WhatsApp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {value}
                  </a>
                ) : (
                  <span className="whitespace-pre-line">{value}</span>
                )
              ) : (
                <span className={cn("italic", dark ? "text-mist/80" : "text-stone")}>To be confirmed</span>
              )}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}
