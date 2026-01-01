import { ChangeEvent, FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

type BookingPrefill = {
  nome?: string;
  cognome?: string;
  email?: string;
  telefono?: string;
  citta?: string;
  note?: string;
};

interface BookingFormProps {
  title?: ReactNode;
  description?: ReactNode;
  submitLabel?: string;
  supportNote?: ReactNode;
  prefill?: BookingPrefill;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const BookingForm = ({
  title,
  description,
  submitLabel = "Richiedi un preventivo rapido",
  supportNote,
  prefill,
  className,
  titleClassName,
  descriptionClassName,
}: BookingFormProps) => {
  const hasPrefilled = useRef(false);
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
    if (!prefill || hasPrefilled.current) return;

    setFormData((prev) => ({
      nome: prev.nome || prefill.nome || "",
      cognome: prev.cognome || prefill.cognome || "",
      email: prev.email || prefill.email || "",
      telefono: prev.telefono || prefill.telefono || "",
      citta: prev.citta || prefill.citta || "",
      note: prev.note || prefill.note || "",
    }));

    hasPrefilled.current = true;
  }, [prefill]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
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
    <div className={cn("w-full", className)}>
      {title ? (
        <h1 className={cn("text-center font-brunson text-[42px] md:text-[62px] leading-[1.05] text-[#FF5500]", titleClassName)}>
          {title}
        </h1>
      ) : null}
      {description ? (
        <p
          className={cn(
            "mt-3 mx-auto w-full lg:max-w-[70%] text-center font-futuru font-light text-[21px] md:text-[26px] leading-[1.2] text-[#3A3D42]",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}

      <form className={cn("mt-12", !title && !description && "mt-6")} onSubmit={handleSubmit}>
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
            {isSubmitting ? "Invio in corso..." : submitLabel}
          </Button>
        </div>

        {supportNote ? (
          <p className="mt-4 text-center font-futuru text-[12px] tracking-[0.3px] text-black/70">{supportNote}</p>
        ) : null}
      </form>
    </div>
  );
};

export default BookingForm;
