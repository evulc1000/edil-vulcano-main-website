import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";

const FreeEstimateSection = () => {
  return (
    <section id="preventivo" className="relative min-h-[80vh] scroll-mt-[110px] overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 cta-animated-bg" />
      <div className="relative flex min-h-[80vh] items-center justify-center px-6 text-center">
        <Button
          asChild
          variant="hero"
          className="group w-full max-w-[860px] px-8 py-5 text-[18px] leading-[1.2] whitespace-normal text-center rounded-[3px] bg-[linear-gradient(171.76deg,_#FF5500_22.64%,_#C24000_95.06%)] font-brunson font-normal uppercase text-white shadow-[0_18px_45px_rgba(194,64,0,0.45)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(194,64,0,0.5)] hover:brightness-110 md:min-h-[90px] md:px-12 md:text-[26px]"
        >
          <NavLink to="/preventivo-rapido">
            Togliti tutti i dubbi e richiedi il tuo Preventivo gratuito
          </NavLink>
        </Button>
      </div>
    </section>
  );
};

export default FreeEstimateSection;
