import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";

interface StickyQuoteBarProps {
  isVisible: boolean;
}

const StickyQuoteBar = ({ isVisible }: StickyQuoteBarProps) => {
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="relative border-b border-[#E2E2E2] navbar-premium-bg">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="hidden lg:block lg:w-[260px]">
            <p className="font-brunson text-[24px] leading-[1.2] text-headline tracking-[0.2px]">
              Preventivo gratuito
            </p>
            <p className="font-futuru text-[14px] leading-[1.2] text-body-text/70">
              Risposta rapida, zero impegno.
            </p>
          </div>
          <form
            className="hidden w-full lg:flex lg:flex-row lg:items-center lg:gap-2 xl:gap-3"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              placeholder="Nome"
              className="h-11 w-full min-w-[120px] xl:min-w-[140px] rounded-md border border-[#E5DAD1] bg-white px-3 text-sm focus:border-[#DD5E1F] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-11 w-full min-w-[150px] xl:min-w-[170px] rounded-md border border-[#E5DAD1] bg-white px-3 text-sm focus:border-[#DD5E1F] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Numero di telefono"
              className="h-11 w-full min-w-[150px] xl:min-w-[170px] rounded-md border border-[#E5DAD1] bg-white px-3 text-sm focus:border-[#DD5E1F] focus:outline-none"
            />
            <select
              className="h-11 w-full min-w-[170px] xl:min-w-[190px] rounded-md border border-[#E5DAD1] bg-white px-3 text-sm text-[#3A3D42] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] focus:border-[#DD5E1F] focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Di cosa hai bisogno?
              </option>
              <option value="ristrutturazione">Ristrutturazione completa</option>
              <option value="facciate">Facciate e cappotti</option>
              <option value="interni">Interni e layout</option>
              <option value="manutenzione">Manutenzione o emergenza</option>
              <option value="altro">Altro</option>
            </select>
            <Button
              asChild
              variant="gradient"
              className="h-[44px] min-w-[170px] rounded-[3px] bg-[linear-gradient(171.76deg,_#FB7838_22.64%,_#D35213_95.06%)] text-[#F2F2F2] font-brunson font-normal text-[19px] leading-[1.5] uppercase tracking-[0.8px] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(211,82,19,0.35)] hover:brightness-110"
            >
              <NavLink to="/preventivo-rapido">richiedilo ora</NavLink>
            </Button>
          </form>
          <div className="grid w-full grid-cols-2 gap-3 lg:hidden">
            <Button
              asChild
              variant="gradient"
              className="h-[48px] w-full rounded-[3px] bg-[linear-gradient(171.76deg,_#FB7838_22.64%,_#D35213_95.06%)] text-[#F2F2F2] font-brunson font-normal text-[19px] leading-[1.2] uppercase tracking-[0.5px] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(211,82,19,0.35)] hover:brightness-110"
            >
              <NavLink to="/preventivo-rapido">
                <span className="hidden sm:inline">Richiedi un preventivo gratuito</span>
                <span className="sm:hidden">Preventivo gratuito</span>
              </NavLink>
            </Button>
            <Button
              variant="outline"
              className="h-[48px] w-full rounded-[3px] border border-[#3A3D42] bg-white text-[#3A3D42] font-brunson font-normal text-[19px] leading-[1.2] uppercase tracking-[1px]"
            >
              +39 351 457 7039
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyQuoteBar;
