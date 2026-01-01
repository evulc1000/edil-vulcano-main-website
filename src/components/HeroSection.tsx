import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[660px] xl:min-h-[800px] flex items-start bg-white hero-background bg-cover bg-center">
        <div className="w-full xl:w-[50%] py-8 md:py-10Mettere nero su bianco quello che spesso resta “sottinteso”

Quando si guarda un preventivo, molte cose sembrano ovvie.
Poi, a lavori iniziati, ci si accorge che non lo erano.

Succede con lo smaltimento dei materiali, con i ripristini dopo le demolizioni, con adeguamenti che “si vedranno strada facendo”.
Non perché qualcuno voglia nascondere qualcosa, ma perché spesso non vengono chiariti all’inizio.

In questa fase fermiamo tutto e rendiamo esplicito ciò che normalmente resta implicito.
Cosa è compreso.
Cosa non lo è.
E cosa va ancora deciso.

È il modo più semplice per evitare discussioni quando il cantiere è già aperto. lg:py-12 text-left mx-[15px] md:ml-[35px] xl:ml-[35px] 2xl:ml-[10%]">
          {/* Eyebrow */}
          <p className="font-caveat font-bold text-[21px] md:text-[26px] leading-[1] text-[#FF5500] mb-[8px] max-w-[750px]">
            Molti problemi nascono quando i lavori iniziano <span className="underline">senza che TUTTO sia chiaro...</span> 
          </p>

          {/* Headline */}
          <h1 className="font-brunson text-[38px] md:text-[62px] leading-[1] text-[#000]/85 mb-6 [text-shadow:14px_5px_13.1px_#FFFFFF]">
            Squadra edile con approccio tecnico e operativo, offre {" "} 
            <span className="text-[#FF5500]">consulenza e preventivo gratuiti</span> in tutto il Nord Italia
          </h1>

          {/* Subheadline */}
          <p className="font-grift text-[#3A3D42]/90 italic font-medium text-[24px] md:text-[36px] leading-[1.3] tracking-[-1.4px] mb-3 [text-shadow:14px_5px_13.1px_#FFFFFF]">
            Per Aiutarti A Valutare Il Tuo Progetto <br></br> <span className="font-bold"> ...Prima Ancora Che I Lavori Inizino!</span>{" "}
          </p>

          <div className="animate-fade-in-up animation-delay-400 w-full max-w-[630px]">
            <Button
              asChild
              variant="hero"
              className="group md:flex hidden h-[58px] w-full max-w-[630px] tracking-[0.80px] rounded-[3px] bg-[linear-gradient(171.76deg,_#FF5500_22.64%,_#C24000_95.06%)] font-brunson font-normal text-[24px] md:text-[32px] leading-[1.5] uppercase text-white shadow-[0_8px_20px_rgba(194,64,0,0.25)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(194,64,0,0.35)] hover:brightness-110"
            >
              <NavLink to="/preventivo-rapido">Richiedi consulenza e preventivo gratuiti</NavLink>
            </Button>
            <Button
              asChild
              variant="hero"
              className="md:hidden flex group h-[58px] w-full max-w-[440px] tracking-[0.80px] rounded-[3px] bg-[linear-gradient(171.76deg,_#FF5500_22.64%,_#C24000_95.06%)] font-brunson font-normal text-[24px] md:text-[32px] leading-[1.5] uppercase text-white shadow-[0_8px_20px_rgba(194,64,0,0.25)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(194,64,0,0.35)] hover:brightness-110"
            >
              <NavLink to="/preventivo-rapido">Richiedi il nostro aiuto!</NavLink>
            </Button>
            <div className="md:hidden mt-2 flex items-center justify-center leading-[1.2] gap-2 text-[12px] font-futuru tracking-[0.8px] text-black/55">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-black/50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              <span>Dati protetti e privacy garantita.</span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default HeroSection;
