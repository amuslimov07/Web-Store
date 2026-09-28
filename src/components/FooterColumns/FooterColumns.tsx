import Link from "next/link";
const footerColumns = [
  {
    title: "SHOP",
    links: [
      { label: "All Products", href: "/catalog" },
      { label: "New Arrivals", href: "/new" },
      { label: "Sale", href: "/sale" },
    ],
  },
  {
    title: "INFORMATION",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Delivery", href: "/delivery" },
      { label: "Returns", href: "/returns" },
    ],
  },
  {
    title: "ACCOUNT",
    links: [
      { label: "My Account", href: "/account" },
      { label: "Orders", href: "/orders" },
      { label: "Favorites", href: "/favorites" },
    ],
  },
  {
    title: "SOCIAL",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Telegram", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];
export default function FooterColumns() {
  return footerColumns.map((column) => {
    return (
      <div
        key={column.title}
        className="flex flex-col gap-4 text-xs leading-loose"
      >
        <p className="font-semibold">{column.title}</p>
        <ul>
          {column.links.map((link) => {
            return (
              <li key={link.label} className="text-[#B8B8B2]">
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
}
