import SearchIcon from "@/assets/icons/search.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import CartIcon from "@/assets/icons/cart.svg";
import UserIcon from "@/assets/icons/user.svg";

const icons = {
  search: SearchIcon,
  heart: HeartIcon,
  cart: CartIcon,
  user: UserIcon,
};

export type IconName = keyof typeof icons;

export interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 24 }: IconProps) {
  const IconComponent = icons[name];

  return <IconComponent className={className} width={size} height={size} />;
}
