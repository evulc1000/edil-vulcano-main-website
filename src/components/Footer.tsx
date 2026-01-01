import { NavLink } from "@/components/NavLink";
import logoEdilVulcano from "@/assets/LogoEdilVulcano.webp";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white tracking-[0.4px]">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div className="space-y-4">
            <img
              src={logoEdilVulcano}
              alt="Edil Vulcano"
              className="h-[64px] w-[210px] object-contain invert"
            />
            <p className="font-futuru text-[15px] leading-[1.6] text-white/75">
              Impresa edile con approccio tecnico e operativo. Preventivi trasparenti e cantieri gestiti con chiarezza.
            </p>
          </div>
          <div>
            <p className="font-brunson text-[20px] uppercase text-white mb-4">Sezioni</p>
            <div className="flex flex-col gap-2 font-futuru text-[15px] text-white/75">
              <NavLink to="/#chi-siamo" className="hover:text-[#FF5500] transition-colors">
                Chi siamo
              </NavLink>
              <NavLink to="/#servizi" className="hover:text-[#FF5500] transition-colors">
                Servizi
              </NavLink>
              <NavLink to="/#progetti-showcase" className="hover:text-[#FF5500] transition-colors">
                Progetti
              </NavLink>
              <NavLink to="/#contatti" className="hover:text-[#FF5500] transition-colors">
                Contatti
              </NavLink>
              <NavLink to="/privacy-policy" className="hover:text-[#FF5500] transition-colors">
                Privacy Policy
              </NavLink>
              <NavLink to="/cookie-policy" className="hover:text-[#FF5500] transition-colors">
                Cookie Policy
              </NavLink>
            </div>
          </div>
          <div>
            <p className="font-brunson text-[20px] uppercase text-white mb-4">Contatti</p>
            <div className="space-y-2 font-futuru text-[15px] text-white/75">
              <p>
                Telefono:{" "}
                <a href="tel:+393514577039" className="hover:text-[#FF5500] transition-colors">
                  +39 351 457 7039
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:edilvulcanosrsl@gmail.com" className="hover:text-[#FF5500] transition-colors">
                  edilvulcanosrsl@gmail.com
                </a>
              </p>
              <p>PEC: edilvulcanosrl@pec.cgn.it</p>
              <p>P.IVA: 04043340126</p>
              <p>Via Galileo Ferraris 37 - 13046 - Livorno Ferraris (VC)</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center font-futuru text-[13px] text-white/55">
          (c) {new Date().getFullYear()} Edil Vulcano Srls. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
