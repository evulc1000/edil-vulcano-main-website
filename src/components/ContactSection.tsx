import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import AfifDaSolo from "@/assets/afifdasolo.webp";

const ContactSection = () => {
  const whatsappUrl = "https://wa.me/393514577039";
  const ctaClassName =
    "group h-[58px] w-full rounded-[3px] bg-[linear-gradient(171.76deg,_#FF5500_22.64%,_#C24000_95.06%)] font-brunson font-normal text-[20px] md:text-[22px] leading-[1.2] uppercase text-white shadow-[0_8px_20px_rgba(194,64,0,0.25)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(194,64,0,0.35)] hover:brightness-110";
  const whatsappButtonClassName =
    "group h-[52px] w-full rounded-[3px] border border-[#25D366] bg-white font-brunson text-[18px] uppercase tracking-[0.6px] text-[#1F1F1F] shadow-[0_8px_18px_rgba(37,211,102,0.18)] transition-[transform,box-shadow,background-color,color] duration-300 ease-out hover:-translate-y-1 hover:bg-[#25D366] hover:text-white hover:shadow-[0_14px_26px_rgba(37,211,102,0.3)]";

  return (
    <section id="contatti" className="relative scroll-mt-[110px] overflow-hidden bg-[#FBF7F2] py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_10%,rgba(255,170,120,0.22)_0%,rgba(255,170,120,0.0)_55%),radial-gradient(110%_70%_at_85%_80%,rgba(255,230,210,0.38)_0%,rgba(255,230,210,0.0)_65%)]"
      />
      <div className="relative w-full max-w-[1180px] mx-auto px-6">
        <p className="font-caveat font-bold text-[22px] md:text-[28px] text-[#DD5E1F] mb-2">Contatti</p>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-brunson text-[34px] md:text-[50px] leading-[1.05] text-headline mb-4">
              Parliamo del tuo progetto e costruiamo insieme il prossimo passo.
            </h2>
            <p className="font-grift text-[#3A3D42] italic text-[22px] md:text-[28px] leading-[1.2] mb-6">
              Un contatto diretto, chiaro e professionale. Risposta rapida e massima trasparenza.
            </p>
            <div className="space-y-3 font-futuru text-[18px] text-body-text/80 mb-6">
              <p>
                <span className="font-semibold text-headline">Telefono:</span>{" "}
                <a href="tel:+393514577039" className="hover:text-[#DD5E1F] transition-colors">
                  +39 351 457 7039
                </a>
              </p>
              <p>
                <span className="font-semibold  text-headline">WhatsApp:</span>{" "}
                <a href={whatsappUrl} className="hover:text-[#DD5E1F] transition-colors" target="_blank" rel="noreferrer">
                  Scrivici su WhatsApp
                </a>
              </p>
              <p>
                <span className="font-semibold text-headline">Email:</span>{" "}
                <a href="mailto:edilvulcanosrl@gmail.com" className="hover:text-[#DD5E1F] transition-colors">
                  edilvulcanosrl@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-headline">PEC:</span> edilvulcanosrl@pec.cgn.it
              </p>
              <p>
                <span className="font-semibold text-headline">P.IVA:</span> 04043340126
              </p>
              <p>
                <span className="font-semibold text-headline">Sede:</span> Via Galileo Ferraris 37 - 13046 - Livorno Ferraris (VC)
              </p>
            </div>
            <Button asChild variant="hero" className={ctaClassName}>
              <NavLink to="/preventivo-rapido">Contattaci</NavLink>
            </Button>
            <Button asChild className={`${whatsappButtonClassName} font-medium tracking-[1px] mt-3`}>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Scrivici su WhatsApp
              </a>
            </Button>
          </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-[#EFE3D9] bg-white/90 p-6 md:p-8 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="relative h-[180px] w-full rounded-2xl bg-[#FFF7F1] sm:h-[220px] md:h-[400px]">
                <img
                  src={AfifDaSolo}
                  alt="Afif Boussenna, Proprietario di Edil Vulcano"
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <p className="text-center font-futuru text-[16px] md:text-[17px] tracking-[0.5px] text-[#3A3D42]">
                Afif Boussenna - Proprietario di Edil Vulcano
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
