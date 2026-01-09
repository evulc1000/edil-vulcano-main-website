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
          size="cta-xl"
          className="group w-full max-w-[860px] text-center shadow-[0_18px_45px_rgba(194,64,0,0.45)] hover:shadow-[0_22px_55px_rgba(194,64,0,0.5)]"
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
