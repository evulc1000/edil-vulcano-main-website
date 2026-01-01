const projects = [
  {
    title: "Villa privata - Milano",
    tag: "Ristrutturazione totale",
    description: "Riqualificazione completa con nuova distribuzione interna e materiali di pregio.",
  },
  {
    title: "Residenza storica - Como",
    tag: "Recupero conservativo",
    description: "Intervento su facciate, coperture e finiture con rispetto del contesto originale.",
  },
  {
    title: "Sede aziendale - Bergamo",
    tag: "Restyling uffici",
    description: "Spazi luminosi, linee pulite e ottimizzazione dei flussi di lavoro.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="progetti" className="relative scroll-mt-[110px] overflow-hidden bg-[#F9F5F0] py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_10%,rgba(255,200,170,0.2)_0%,rgba(255,200,170,0)_55%),linear-gradient(140deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.4)_45%,rgba(255,255,255,0.0)_75%)]"
      />
      <div className="relative w-full max-w-[1180px] mx-auto px-6">
        <p className="font-caveat font-bold text-[22px] md:text-[28px] text-[#DD5E1F] mb-2">
          Progetti
        </p>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-brunson text-[34px] md:text-[50px] leading-[1.05] text-headline max-w-[600px]">
            Alcuni lavori recenti che raccontano il nostro modo di costruire.
          </h2>
          <p className="font-futuru text-[18px] md:text-[20px] leading-[1.7] text-body-text/75 max-w-[360px]">
            Ogni progetto e sviluppato con attenzione al dettaglio, al budget e alle tempistiche.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-[#EFE3D9] bg-white/90 p-6 shadow-[0_18px_40px_-26px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-28px_rgba(0,0,0,0.5)]"
            >
              <div className="mb-5 h-[190px] w-full rounded-2xl bg-[linear-gradient(135deg,rgba(255,120,60,0.2)_0%,rgba(255,255,255,0.95)_65%)] shadow-[inset_0_0_0_1px_rgba(255,190,150,0.35)]" />
              <span className="inline-flex items-center rounded-full border border-[#F0E4DA] bg-[#FFF3EA] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#C35523]">
                {project.tag}
              </span>
              <h3 className="mt-3 font-brunson text-[24px] text-headline">{project.title}</h3>
              <p className="mt-2 font-futuru text-[16px] leading-[1.6] text-body-text/75">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
