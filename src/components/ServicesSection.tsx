const services = [
  {
    title: "Ristrutturazioni complete",
    description: "Dall'idea al chiavi in mano: demolizioni, impianti, finiture e arredi su misura.",
  },
  {
    title: "Facciate e cappotti",
    description: "Restyling estetico, isolamenti termici e recupero conservativo delle superfici.",
  },
  {
    title: "Tetti e coperture",
    description: "Rifacimento tetti, impermeabilizzazioni, linea vita e manutenzioni programmate.",
  },
  {
    title: "Interni e layout",
    description: "Ridefiniamo gli spazi con soluzioni funzionali, luminose e ottimizzate.",
  },
  {
    title: "Efficientamento energetico",
    description: "Interventi per migliorare consumi, comfort e valore dell'immobile.",
  },
  {
    title: "Manutenzioni per aziende",
    description: "Interventi rapidi, piani di controllo e assistenza tecnica continua.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servizi" className="relative scroll-mt-[110px] overflow-hidden bg-[#F9F5F0] py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_10%,rgba(255,200,170,0.25)_0%,rgba(255,200,170,0)_55%),linear-gradient(120deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.6)_45%,rgba(255,255,255,0.0)_75%)]"
      />
      <div className="relative w-full max-w-[1180px] mx-auto px-6">
        <p className="font-caveat font-bold text-[22px] md:text-[28px] text-[#DD5E1F] mb-2">
          Servizi
        </p>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-brunson text-[34px] md:text-[52px] leading-[1.05] text-headline max-w-[640px]">
            Tutto cio che serve per valorizzare la tua casa o il tuo spazio business.
          </h2>
          <p className="font-futuru text-[18px] md:text-[20px] leading-[1.7] text-body-text/75 max-w-[380px]">
            Offriamo soluzioni complete, integrate e coordinate da un unico referente tecnico.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-[#EFE3D9] bg-white/90 p-7 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.5)]"
            >
              <div className="h-1 w-12 rounded-full bg-[#DD5E1F] mb-5 transition-all duration-300 group-hover:w-20" />
              <h3 className="font-brunson text-[24px] text-headline mb-2">{service.title}</h3>
              <p className="font-futuru text-[17px] leading-[1.6] text-body-text/75">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
