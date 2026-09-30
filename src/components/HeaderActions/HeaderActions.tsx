import { Icon } from "@/components/Icon/Icon";
import type { IconProps } from "@/components/Icon/Icon";
import Link from "next/link";
type Action = {
  label: string;
  icon: IconProps["name"];
  href: string;
  count?: number;
};
export default function HeaderActions() {
  const headerActions: Action[] = [
    { label: "Favourites", icon: "heart", href: "/favourites", count: 0 },
    { label: "Cart", icon: "cart", href: "/cart", count: 0 },
    { label: "Account", icon: "user", href: "/account" },
  ];
  return (
    <div className="flex items-center gap-6">
      <button className=" flex items-center gap-2" aria-label="Search">
        <Icon className="text-text-primary h-5 w-5" name="search"></Icon>
        Search
      </button>

      {headerActions.map((action) => {
        return (
          <Link
            key={action.href}
            href={action.href}
            className="flex items-center gap-2"
            aria-label={action.label}
          >
            <Icon
              className="text-text-primary h-5 w-5"
              name={action.icon}
            ></Icon>
            {action.count !== undefined && <span>{action.count}</span>}
          </Link>
        );
      })}
    </div>
  );
}
