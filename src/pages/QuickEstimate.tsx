import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import logoEdilVulcano from "@/assets/LogoEdilVulcano.webp";

const QuickEstimate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    citta: "",
    note: "",
  });

  useEffect(() => {
    document.title = "Preventivo rapido | Edil Vulcano";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.cognome || !formData.email || !formData.telefono || !formData.citta) {
      toast.error("Per favore compila tutti i campi obbligatori");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("quote_requests").insert({
        nome: formData.nome.trim(),
        cognome: formData.cognome.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim(),
        citta: formData.citta.trim(),
        note: formData.note.trim() || null,
      });

      if (error) throw error;

      toast.success("Richiesta inviata con successo! Ti contatteremo presto.");
      setFormData({
        nome: "",
        cognome: "",
        email: "",
        telefono: "",
        citta: "",
        note: "",
      });
    } catch (error) {
      console.error("Error submitting quote request:", error);
      toast.error("Si è verificato un errore. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex w-full max-w-[920px] flex-col items-center px-6 py-10 md:py-14">
        <img
          src={logoEdilVulcano}
          alt="Edil Vulcano"
          className="h-[72px] w-[225px] object-contain mix-blend-multiply"
        />

        <div className="mt-[90px] w-full">
          <h1 className="text-center font-brunson md:text-[62px] tracking-[1px] text-[42px] leading-[1.05] text-[#FF5500]">
            Richiedi Il Tuo Preventivo Rapido
          </h1>
          <p className="mt-3 w-full lg:max-w-[70%] mx-auto text-center font-light font-futuru tracking-[1px] text-[21px] leading-[1.2] md:text-[26px] text-[#3A3D42]">
            Riceveremo la tua richiesta immediatamente via email. <span>Solitamente rispondiamo in pochi minuti!</span>
          </p>

          <form className="mt-12" onSubmit={handleSubmit}>
            <div className="mx-auto grid max-w-[760px] grid-cols-1 gap-2 md:grid-cols-2">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome"
                className="min-h-[50px] w-full font-futuru tracking-[1.2px] text-black rounded-md border border-[#E5DAD1] bg-white px-3 py-2.5 text-md focus:border-[#DD5E1F] focus:outline-none focus:ring-2 focus:ring-[#FFB38A]/70"
              />
              <input
                type="text"
                name="cognome"
                value={formData.cognome}
                onChange={handleChange}
                placeholder="Cognome"
                className="min-h-[50px] w-full font-futuru tracking-[1.2px] text-black rounded-md border border-[#E5DAD1] bg-white px-3 py-2.5 text-md focus:border-[#DD5E1F] focus:outline-none focus:ring-2 focus:ring-[#FFB38A]/70"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="min-h-[50px] w-full font-futuru tracking-[1.2px] text-black rounded-md border border-[#E5DAD1] bg-white px-3 py-2.5 text-md focus:border-[#DD5E1F] focus:outline-none focus:ring-2 focus:ring-[#FFB38A]/70"
              />
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Numero di Telefono"
                className="min-h-[50px] w-full font-futuru tracking-[1.2px] text-black rounded-md border border-[#E5DAD1] bg-white px-3 py-2.5 text-md focus:border-[#DD5E1F] focus:outline-none focus:ring-2 focus:ring-[#FFB38A]/70"
              />
              <input
                type="text"
                name="citta"
                value={formData.citta}
                onChange={handleChange}
                placeholder="Città"
                className="min-h-[50px] w-full font-futuru tracking-[1.2px] text-black rounded-md border border-[#E5DAD1] bg-white px-3 py-2.5 text-md focus:border-[#DD5E1F] focus:outline-none focus:ring-2 focus:ring-[#FFB38A]/70"
              />
              <textarea
                rows={1}
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Scrivi qui le tue note"
                className="min-h-[50px] w-full resize-y font-futuru tracking-[1.2px] text-black rounded-md border border-[#E5DAD1] bg-white px-3 py-2.5 text-md focus:border-[#DD5E1F] focus:outline-none focus:ring-2 focus:ring-[#FFB38A]/70"
              />
            </div>

            <div className="mt-6 mx-auto w-full max-w-[760px]">
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="hero"
                className="group h-[60px] w-full tracking-[0.80px] rounded-[3px] bg-[linear-gradient(171.76deg,_#FF5500_22.64%,_#C24000_95.06%)] font-brunson font-normal text-[25px] md:text-[33px] leading-[1.5] uppercase text-white shadow-[0_8px_20px_rgba(194,64,0,0.25)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(194,64,0,0.35)] hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Invio in corso..." : "Richiedi un preventivo rapido"}
              </Button>
            </div>

            <p className="mt-4 text-center font-futuru text-[12px] tracking-[0.3px] text-black/70">
              Per Assistenza Immediata Chiama{" "}
              <span className="font-semibold text-black">+39 351 457 7039</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickEstimate;
