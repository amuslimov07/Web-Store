import Link from "next/link";

const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];
export default function FooterBottom() {
  return (
    <div className="flex justify-between text-text-inverse-muted text-xs">
      <p>© 2026 Web-Store</p>
      <div className="flex gap-2">
        <nav className="flex gap-2">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p>USD / EN</p>
      </div>
    </div>
  );
}
