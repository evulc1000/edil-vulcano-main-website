import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const steps = [
  {
    number: "1",
    label: "Step #1",
    title: "Richiedi una valutazione rapida",
    copy: "Ci lasci i dettagli del lavoro e ti richiamiamo in breve per capire priorita, tempi e budget.",
    cta: "Richiedi una valutazione rapida",
  },
  {
    number: "2",
    label: "Step #2",
    title: "Analisi tecnica sul posto",
    copy: "Un nostro tecnico Edil Vulcano viene in cantiere, verifica tutto e ti propone la soluzione piu adatta.",
    cta: "Prenota il sopralluogo",
  },
  {
    number: "3",
    label: "Step #3",
    title: "Piano chiaro e via ai lavori",
    copy: "Ricevi un preventivo trasparente e una tabella fasi: niente sorprese, solo risultati concreti.",
    cta: "Avvia il progetto",
  },
];

const ThreeStepSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = steps[activeStep];
  const ctaClassName =
    "group h-[54px] px-6 rounded-[3px] bg-[linear-gradient(171.76deg,_#FF5500_22.64%,_#C24000_95.06%)] font-brunson font-normal text-[18px] md:text-[20px] leading-[1.2] uppercase text-white tracking-[0.8px] shadow-[0_8px_20px_rgba(194,64,0,0.25)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(194,64,0,0.35)] hover:brightness-110";

  return (
    <section className="three-step-section relative pb-10">
      <div className="relative mx-auto w-full max-w-[1200px] px-6">
        <p className="font-caveat text-center text-[22px] font-bold text-[#FF5500]">Il nostro semplice processo in 3 passi...</p>
        <h2 className="mt-3 text-center font-brunson text-[36px] leading-[1.05] text-[#3A3D42] md:text-[52px]">
          Lavorare con noi è facile come fare 1-2-3.
        </h2>

        <div className="three-step-panel mx-auto mt-10 max-w-[1000px]" role="tablist" aria-label="Passi del processo">
          <div className="three-step-content">
            <div className="three-step-tabs">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  type="button"
                  className={`three-step-tab ${index === activeStep ? "three-step-tab-active" : ""}`}
                  onClick={() => setActiveStep(index)}
                  role="tab"
                  aria-selected={index === activeStep}
                >
                  <span className="three-step-tab-step">Step</span>
                  <span className="three-step-tab-number">{step.number}</span>
                </button>
              ))}
            </div>
            <div className="three-step-detail" role="tabpanel">
              <div className="three-step-text">
                <div className="three-step-label">{currentStep.label}</div>
                <div className="three-step-title font-grift font-bold italic">{currentStep.title}</div>
                <p className="three-step-copy font-light">{currentStep.copy}</p>
                <Button asChild variant="hero" className={`${ctaClassName} mt-4`}>
                  <NavLink to="/preventivo-rapido">{currentStep.cta}</NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeStepSection;
