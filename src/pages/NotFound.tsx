import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import Seo from "@/components/Seo";
import BookingForm from "@/components/BookingForm";
import { NavLink } from "@/components/NavLink";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <Seo
        title="Pagina non trovata | Edil Vulcano"
        description="La pagina richiesta non esiste. Torna alla home o contattaci per assistenza."
        path="/404"
        noindex
      />
      <section className="relative overflow-hidden bg-[#FBF7F2] py-20 md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_10%,rgba(255,170,120,0.22)_0%,rgba(255,170,120,0.0)_55%),radial-gradient(110%_70%_at_85%_80%,rgba(255,230,210,0.38)_0%,rgba(255,230,210,0.0)_65%)]"
        />
        <div className="relative mx-auto w-full max-w-[980px] px-6">
          <p className="font-caveat text-[22px] md:text-[28px] font-bold text-[#DD5E1F] mb-2">404</p>
          <h1 className="font-brunson text-[38px] md:text-[52px] leading-[1.05] text-headline">
            Non trovi ciò che stai cercando?
          </h1>
          <p className="mt-3 font-futuru text-[18px] md:text-[20px] text-body-text/80">
            Siamo qui per aiutarti: prenota un contatto rapido e ti richiamiamo con tutte le informazioni che ti
            servono.
          </p>

          <BookingForm
            className="mt-8"
            submitLabel="Prenota un contatto"
            supportNote={
              <>
                Oppure chiamaci subito al{" "}
                <span className="font-semibold text-black">+39 351 457 7039</span>
              </>
            }
          />

          <div className="mt-8 text-center">
            <NavLink to="/" className="font-brunson text-[18px] uppercase text-[#DD5E1F] hover:text-[#FF5500]">
              Torna alla home
            </NavLink>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
