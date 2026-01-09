import { useEffect, useRef, useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import doodle60 from "@/assets/Doodle (60).svg";
import doodle81 from "@/assets/Doodle (81).svg";
import ValutazioneProfessionaleGif from "@/assets/ValutazioneProfessionaleGif.mp4";
import EdilVulcanoTeamNoBG from "@/assets/EdilVulcanoTeamNoBG.webp";
import DecisioniAlBuioGif from "@/assets/DecisioniAlBuioGif.mp4";
import AfifDaSolo from "@/assets/afifdasolo.webp";
import YtongLogo from "@/assets/Ytong.webp";
import AquapanelLogo from "@/assets/Aquapanel-Logo.svg-.webp";

type IntroCardProps = {
  className?: string;
  shouldLoadVideos?: boolean;
};

const IntroShowcaseCard = ({ className = "", shouldLoadVideos = false }: IntroCardProps) => {
  return (
    <div className={`relative w-full pt-[160px] sm:pt-[180px] md:pt-[200px] lg:pt-[220px] ${className}`}>
      <div
        className="pointer-events-none absolute left-1/2 top-4 z-0 h-[240px] w-[240px] -translate-x-1/2 rounded-full opacity-70 blur-[2px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 170, 110, 0.55) 0%, rgba(255, 170, 110, 0.15) 45%, rgba(255, 170, 110, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[250px] overflow-hidden sm:h-[250px] md:h-[300px] lg:h-[350px]">
        <img
          src={EdilVulcanoTeamNoBG}
          alt=""
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-full w-[135%] -translate-x-1/2 object-contain"
        />
      </div>
      <div className="relative z-10 w-full rounded-[24px] bg-white p-4 sm:p-5 shadow-[0_18px_44px_rgba(0,0,0,0.1)]">
        <img
          src={doodle81}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-[80px] -top-[85px] z-20 w-[80px] select-none"
          style={{ transform: "rotate(120deg)" }}
        />
        <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-1 xl:grid-cols-2">
          <div className="rounded-2xl bg-[#FFF2EC] p-3 sm:p-4">
            <div className="mb-3 relative h-[140px] overflow-hidden rounded-2xl bg-[#FFD8C4] sm:h-[200px] md:h-[230px]">
              <video
                className="h-full w-full object-cover contrast-125 saturate-125"
                src={shouldLoadVideos ? ValutazioneProfessionaleGif : undefined}
                muted
                autoPlay
                playsInline
                loop
                preload="none"
              />
              <div className="pointer-events-none absolute inset-0 bg-[#FF7A2F]/10" aria-hidden="true" />
            </div>
            <h3 className="mb-0 font-grift text-[20px] md:text-[21px] italic text-[#C24000]">
              Valutazione professionale
            </h3>
            <div className="preview-swiper">
              <div className="preview-swiper-track">
                <div className="preview-swiper-slide">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-[#2F8A57]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Scelte tecniche chiare e approvate.</span>
                </div>
                <div className="preview-swiper-slide">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-[#2F8A57]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Rischi e imprevisti già… mappati.</span>
                </div>
                <div className="preview-swiper-slide">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-[#2F8A57]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Tempi realistici e decisioni solide.</span>
                </div>
                <div className="preview-swiper-slide">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-[#2F8A57]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Costi sotto controllo prima di iniziare.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#F6F6F6] p-3 sm:p-4">
            <div className="mb-3 relative h-[140px] overflow-hidden rounded-2xl bg-[#E6E6E6] sm:h-[200px] md:h-[230px]">
              <video
                className="h-full w-full object-cover saturate-0 contrast-75 opacity-80"
                src={shouldLoadVideos ? DecisioniAlBuioGif : undefined}
                muted
                autoPlay
                playsInline
                loop
                preload="none"
              />
              <div className="pointer-events-none absolute inset-0 bg-white/10" aria-hidden="true" />
            </div>
            <h3 className="mb-2 font-grift text-[20px] md:text-[20px] italic text-[#3A3D42]">
              Decisioni al buio (Incubi Edilizi)
            </h3>
            <div className="preview-swiper">
              <div className="preview-swiper-track preview-swiper-track-delayed">
                <div className="preview-swiper-slide">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-[#C3413A]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span>Varianti improvvise e costi extra.</span>
                </div>
                <div className="preview-swiper-slide">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-[#C3413A]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span>Lavori incompleti e tempi che slittano.</span>
                </div>
                <div className="preview-swiper-slide">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-[#C3413A]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span>Dettagli tecnici fraintesi o ignorati.</span>
                </div>
                <div className="preview-swiper-slide">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-[#C3413A]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span>Responsabilità… confuse e stress continuo.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const IntroCtaButton = ({ className = "" }: IntroCardProps) => {
  return (
    <div className={`relative w-full max-w-[440px] ${className}`}>
      <Button
        asChild
        variant="hero"
        size="cta"
        className="group w-full max-w-[630px]"
      >
        <NavLink to="/preventivo-rapido">RICHIEDI UNA VALUTAZIONE GRATUITA</NavLink>
      </Button>
      <img
        src={doodle60}
        alt=""
        aria-hidden="true"
        className="hidden 2xl:inline pointer-events-none absolute right-2 top-1/2 w-[78px] -translate-y-1/2 select-none md:right-[-120px] md:w-[110px]"
      />
    </div>
  );
};

const AfifImageCard = ({ className = "" }: IntroCardProps) => {
  return (
    <div className={`w-full max-w-[440px] overflow-hidden rounded-[24px] bg-white shadow-[0_16px_36px_rgba(0,0,0,0.12)] ${className}`}>
      <div className="flex flex-col gap-3 p-4">
        <div className="relative h-[180px] sm:h-[220px] md:h-[400px] rounded-2xl bg-[#FFF7F1]">
          <img
            src={AfifDaSolo}
            alt="Afif Boussenna, Proprietario di Edil Vulcano"
            className="h-full w-full object-contain object-center"
          />
        </div>
        <p className="text-center font-futuru text-[16px] sm:text-[17px] tracking-[0.5px] text-[#3A3D42]">
          Afif Boussenna - Proprietario di Edil Vulcano
        </p>
      </div>
    </div>
  );
};

const IntroCopySection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldLoadVideos, setShouldLoadVideos] = useState(false);

  useEffect(() => {
    if (shouldLoadVideos) {
      return;
    }

    const section = sectionRef.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideos(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [shouldLoadVideos]);

  return (
    <section ref={sectionRef} className="relative bg-white pt-10 xl:pt-0 pb-12 md:pb-16">
      <div className="wall-texture-overlay wall-texture-overlay-gradient" />
      <div className="relative z-10 mx-auto lg:w-[1024px] xl:w-[1280px] flex w-full flex-col gap-10 px-[20px] xl:px-[45px] md:flex-row">
        <div className="flex w-full md:w-[60%] max-w-[664px] flex-col items-start gap-6">
          <div className="partners-strip">
            <span className="partners-label">Lavoriamo con</span>
            <div className="partners-marquee" aria-hidden="true">
              <div className="partners-track">
                <div className="partners-track-group">
                  <img src={YtongLogo} alt="" className="partners-logo" />
                  <img src={AquapanelLogo} alt="" className="partners-logo" />
                  <img src={YtongLogo} alt="" className="partners-logo" />
                  <img src={AquapanelLogo} alt="" className="partners-logo" />
                </div>
                <div className="partners-track-group" aria-hidden="true">
                  <img src={YtongLogo} alt="" className="partners-logo" />
                  <img src={AquapanelLogo} alt="" className="partners-logo" />
                  <img src={YtongLogo} alt="" className="partners-logo" />
                  <img src={AquapanelLogo} alt="" className="partners-logo" />
                </div>
              </div>
              <div className="partners-gradient partners-gradient-left" aria-hidden="true" />
              <div className="partners-gradient partners-gradient-right" aria-hidden="true" />
            </div>
          </div>
          <div className="flex w-full flex-col">
            <p className="font-caveat font-bold text-[21px] mb-[5px] leading-[0.95] text-[#FF5500] md:text-[26px] md:text-[#DD5E1F] ">
              Grandi progetti?
            </p>
            <p className="font-grift font-bold text-[32px] font-medium italic leading-[1.1] tracking-[-0.5px] text-[#000] md:text-[42px]">
              Come evitare l'errore da "Incubo Edilizio" che rischia di rallentare o rovinare il tuo progetto
            </p>
          </div>
          <div className="flex flex-col w-full lg:pr-[90px] gap-6">
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black italic">"Cos'è compreso nel preventivo?"            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">"Ci saranno ritardi?"            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">"Possiamo modificare questa cosa?"            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black font-medium">Sono domande normali... </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Eppure, a volte, ci si sente in imbarazzo a farle...  </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Per paura di sembrare diffidenti, inesperti o di rallentare tutto.            </p>
            <IntroShowcaseCard className="md:hidden" shouldLoadVideos={shouldLoadVideos} />
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Vedi, sono proprio le domande che guidano le decisioni del tuo progetto.            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black"><mark>Il problema non è che qualcuno le nasconde...</mark>            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Ma spesso sembrano cose... scontate.            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">E indovina? Vengono evitate e posticipate.            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Così nascono i problemi più fastidiosi...            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Quelli che arrivano piano...            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Un dettaglio dato per scontato...            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Una voce che “si vedrà più avanti”...            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Una scelta che sembrava già fatta, ma in realtà non lo era.            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">E appaiono solo quando iniziano i lavori...            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Così ogni chiarimento diventa una discussione...            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Ogni modifica una variante...            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black"><mark> E ogni singolo <span className="italic"> minimo</span> dubbio costa tempo, energie e soldi.  </mark>         </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black font-bold">Ma a tutto questo c'è una soluzione.            </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">La soluzione?              </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black font-semibold">Non c'è soluzione.             </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Dispiace, funzionano così le cose in cantiere.             </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Però ora, <span className="font-semibold"> se vuoi davvero avere chiarezza su ciò che va fatto nel tuo progetto...</span>             </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">e vuoi farti togliere qualche dubbio da una squadra con anni di esperienza...             </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black font-light italic">(Che ne ha viste di tutti i colori)         </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black">Ciò che sto per dirti potrebbe essere la soluzione ai tuoi problemi di gestione.             </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black"><mark> Edil Vulcano offre un preventivo veloce senza impegno e valuterà ogni singolo passaggio del progetto.</mark>             </p>
            <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[35px] md:leading-[40px] tracking-[0.8px] text-black font-bold">Vuoi sapere come funziona?            </p>
            <IntroCtaButton className="md:hidden" />
            <AfifImageCard className="md:hidden" />
          </div>
        </div>
        <div className="hidden w-full md:flex md:w-[40%] flex-col items-center gap-80 md:self-start">
          <div className="hidden w-full md:flex flex-col items-center gap-6 md:self-start">
            <IntroShowcaseCard shouldLoadVideos={shouldLoadVideos} />
            <IntroCtaButton />
          </div>
          <AfifImageCard />
        </div>
      </div>
    </section>
  );
};

export default IntroCopySection;
