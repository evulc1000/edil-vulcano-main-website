const steps = [
  {
    step: "01",
    title: "Analisi e sopralluogo",
    description: "Ascoltiamo le esigenze, valutiamo il contesto e definiamo il perimetro lavori.",
  },
  {
    step: "02",
    title: "Preventivo trasparente",
    description: "Un documento chiaro con tempi, costi e materiali, senza sorprese finali.",
  },
  {
    step: "03",
    title: "Cantiere controllato",
    description: "Direzione lavori continua, coordinamento maestranze e report periodici.",
  },
  {
    step: "04",
    title: "Consegna e assistenza",
    description: "Collaudo, pulizia e supporto post-intervento per ogni dettaglio.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_70%_20%,rgba(255,140,80,0.08)_0%,rgba(255,140,80,0.0)_60%)]"
      />
      <div className="relative w-full max-w-[1180px] mx-auto px-6">
        <p className="font-caveat text-[22px] md:text-[28px] text-[#DD5E1F] mb-2">
          Metodo di lavoro
        </p>
        <h2 className="font-brunson text-[34px] md:text-[50px] leading-[1.05] text-headline max-w-[620px]">
          Un processo pulito, ordinato e facile da seguire.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#F0E4DA] bg-white/90 p-6 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]"
            >
              <p className="font-brunson text-[26px] text-[#DD5E1F] mb-2">{item.step}</p>
              <h3 className="font-brunson text-[22px] text-headline mb-3">{item.title}</h3>
              <p className="font-futuru text-[16px] leading-[1.6] text-body-text/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
