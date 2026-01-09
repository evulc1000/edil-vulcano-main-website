import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import Seo from "@/components/Seo";
import logoEdilVulcano from "@/assets/LogoEdilVulcano.webp";

const QuickEstimate = () => {
  const location = useLocation();
  const prefill = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return {
      nome: params.get("nome") ?? "",
      email: params.get("email") ?? "",
      telefono: params.get("telefono") ?? "",
      note: params.get("note") ?? "",
    };
  }, [location.search]);

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Preventivo rapido | Edil Vulcano"
        description="Richiedi un preventivo rapido e gratuito: invia i dettagli e ti ricontattiamo in breve con una valutazione chiara."
        path="/preventivo-rapido"
      />
      <div className="mx-auto flex w-full max-w-[920px] flex-col items-center px-6 py-10 md:py-14">
        <img
          src={logoEdilVulcano}
          alt="Edil Vulcano"
          className="h-[72px] w-[225px] object-contain mix-blend-multiply"
        />

        <div className="mt-[90px] w-full">
          <BookingForm
            title="Richiedi Il Tuo Preventivo Rapido"
            description={
              <>
                Riceveremo la tua richiesta immediatamente via email.{" "}
                <span>Solitamente rispondiamo in pochi minuti!</span>
              </>
            }
            submitLabel="Richiedi un preventivo rapido"
            prefill={prefill}
            supportNote={
              <>
                Per Assistenza Immediata Chiama{" "}
                <span className="font-semibold text-black">+39 351 457 7039</span>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default QuickEstimate;
