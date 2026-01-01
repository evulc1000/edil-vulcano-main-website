import EdilVulcanoTeamNoBG from "@/assets/EdilVulcanoTeamNoBG.webp";
import Logo25Anni from "@/assets/25Anni.png";
import Logo500Lavori from "@/assets/500Lavori.png";
import Logo0Sorprese from "@/assets/0Sorprese.png";
import Logo360Analisi from "@/assets/360Analisi.png";

const AboutSection = () => {
  return (
    <section
      id="chi-siamo"
      className="about-split-section relative scroll-mt-[110px] overflow-x-hidden overflow-y-hidden"
    >
      <div className="wall-texture-overlay wall-texture-overlay-gradient" aria-hidden="true" />
      <div className="torn-paper-divider relative z-20 w-full h-[110px] sm:h-[130px] md:h-[150px] lg:h-[170px]" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center px-6 pt-16 pb-2 text-center md:pt-20 md:pb-2">
        <p className="font-caveat font-bold text-[24px] leading-[0.85] tracking-[-0.03em] text-[#DD5E1F] mb-[8px]">
          Ancor prima di iniziare il tuo progetto...
        </p>
        <h2 className="font-brunson text-[40px] leading-[1] text-black uppercase md:text-[64px]">
          Squadra edile con approccio tecnico e operativo, offre{" "}
          <span className="text-[#FF5500]">consulenza e preventivo gratuiti</span> in tutto il Nord Italia
        </h2>
      </div>
      {/* <div className="absolute bottom-[-10px] md:bottom-[50px] left-1/2 z-20 w-[92%] max-w-[880px] -translate-x-1/2 px-6 py-3 md:py-6 md:px-7 max-[420px]:w-full max-[420px]:px-0">
        <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-white opacity-[0.] mix-blend-hard-light shadow-[-12px_17px_25.6px_-8px_rgba(0,0,0,0.08)] blur-[0.7px] sm:rounded-[50px] max-[420px]:rounded-none" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 rounded-[40px] opacity-[0.11] mix-blend-multiply sm:rounded-[50px] max-[420px]:rounded-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E\")",
          }}
          aria-hidden="true"
        />
        <div className="relative flex flex-nowrap items-center justify-center gap-3 sm:gap-5">
          {[Logo25Anni, Logo500Lavori, Logo0Sorprese, Logo360Analisi].map((logo, index) => (
            <img
              key={logo}
              src={logo}
              alt=""
              aria-hidden="true"
              className="h-auto max-h-[72px] w-[22vw] min-w-[70px] max-w-[175px] object-contain mix-blend-multiply"
              style={{ order: index }}
            />
          ))}
        </div>
      </div> */}
      <div className="pointer-events-none relative z-0 mx-auto w-full max-w-none px-0 -mb-[140px] sm:max-w-[1160px] sm:px-6 md:-mb-[160px]">
        <img
          src={EdilVulcanoTeamNoBG}
          alt=""
          aria-hidden="true"
          className="relative left-1/2 w-[145%] max-w-none -translate-x-1/2 sm:left-0 sm:w-full sm:max-w-[1160px] sm:translate-x-0"
        />
      </div>
      <div className=" torn-paper-divider torn-paper-divider-invert relative z-15 w-full h-[110px] sm:h-[130px] md:h-[150px] lg:h-[170px]" />
    </section>
  );
};

export default AboutSection;
