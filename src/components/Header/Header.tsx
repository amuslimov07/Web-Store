import Navigation from "@/components/Navigation/Navigation";
import HeaderActions from "@/components/HeaderActions/HeaderActions";
import Logo from "@/components/Logo/Logo";
export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center px-8 py-4">
      <Logo />
      <div className="flex justify-center">
        <Navigation />
      </div>
      <div className="flex justify-end">
        <HeaderActions />
      </div>
    </header>
  );
}
