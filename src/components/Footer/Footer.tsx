import FooterLogo from "@/components/FooterLogo/FooterLogo";
import FooterColumns from "@/components/FooterColumns/FooterColumns";
import FooterBottom from "@/components/FooterBottom/FooterBottom";

export default function Footer() {
  return (
    <footer className="p-8 bg-surface-inverse text-text-inverse  ">
      <div className="mx-auto max-w-6xl ">
        <div className="grid grid-cols-6 gap-12">
          <FooterLogo />
          <FooterColumns />
        </div>
        <hr className="w-full border-border-inverse my-16" />
        <FooterBottom />
      </div>
    </footer>
  );
}
