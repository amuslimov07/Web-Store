import Logo from "@/components/Logo/Logo";

export default function FooterLogo() {
  return (
    <div className="flex flex-col gap-4 col-span-2">
      <Logo />
      <p className="text-text-inverse-secondary">
        Considered essentials for modern life. Designed to be worn, used and
        kept.
      </p>
    </div>
  );
}
