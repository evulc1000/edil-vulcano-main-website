import { useState, MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import logoEdilVulcano from "@/assets/LogoEdilVulcano.webp";

const navLinks = [
  { label: "Chi siamo", to: "/#chi-siamo" },
  // { label: "Servizi", to: "/#servizi" },
  { label: "Progetti", to: "/#progetti-showcase" },
  { label: "Contatti", to: "/#contatti" },
];

interface NavbarProps {
  isHidden?: boolean;
}

const Navbar = ({ isHidden = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleAnchorClick = (targetId: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== "/") {
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[90px] relative bg-white transition-all duration-300 ${
        isHidden ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 navbar-premium-bg border-b-2 border-[#E2E2E2] blur-[0.8px] drop-shadow-[-219px_-16px_75.8px_rgba(0,0,0,0.27)] pointer-events-none"
      />
      <div className="w-full mx-auto lg:mx-0 relative h-full max-w-none lg:max-w-[976px] xl:max-w-[1220px] 2xl:max-w-[1375px] pl-[11px] pr-[22px] md:pl-[26px] md:pr-[37px] lg:px-0 lg:ml-[35px] xl:ml-[35px] 2xl:ml-[10%]">
        <nav className="flex items-center justify-between h-full">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src={logoEdilVulcano}
              alt="Edil Vulcano"
              className="w-[225px] h-[72px] object-contain mix-blend-multiply"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[29px]">
            <div className="flex items-center justify-center gap-[25px] h-[45px]">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={handleAnchorClick(link.to.replace("/#", ""))}
                  className="font-brunson text-[26px] xl:text-[30px] tracking-[0.8px] leading-[1.5] uppercase transition-[transform,color] duration-300 ease-out hover:-translate-y-0.5 text-[#3A3D42] hover:text-[#DD5E1F]"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <Button
              asChild
              variant="hero"
              size="cta-nav"
              className="min-w-[257px]"
            >
              <NavLink to="/preventivo-rapido">
                preventivo gratuito
              </NavLink>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-headline" />
            ) : (
              <Menu className="w-6 h-6 text-headline" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden h-[100vh] w-full fixed inset-0 top-[90px] bg-white/95 backdrop-blur-xl backdrop-brightness-75 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={(event) => {
                  handleAnchorClick(link.to.replace("/#", ""))(event);
                  setIsOpen(false);
                }}
                className="font-brunson text-[36px] leading-[1.2] uppercase text-[#3A3D42] hover:text-[#DD5E1F] transition-all duration-200 py-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              asChild
              variant="hero"
              className="mt-4 w-full h-[58px] rounded-[3px] text-[36px] leading-[1.3] tracking-[0.80px] animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <NavLink
                to="/preventivo-rapido"
                onClick={() => setIsOpen(false)}
              >
                preventivo gratuito
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
