import image1 from "@/assets/lavori/image1.webp";
import image2 from "@/assets/lavori/image2.webp";
import image3 from "@/assets/lavori/image3.webp";
import image4 from "@/assets/lavori/image4.webp";
import image5 from "@/assets/lavori/image5.webp";
import image6 from "@/assets/lavori/image6.webp";
import image7 from "@/assets/lavori/image7.webp";
import image8 from "@/assets/lavori/image8.webp";
import image9 from "@/assets/lavori/image9.webp";
import image10 from "@/assets/lavori/image10.webp";
import image11 from "@/assets/lavori/image11.webp";
import image12 from "@/assets/lavori/image12.webp";
import image13 from "@/assets/lavori/image13.webp";
import image14 from "@/assets/lavori/image14.webp";
import image15 from "@/assets/lavori/image15.webp";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  { src: image1, alt: "Foto cantiere 1" },
  { src: image2, alt: "Foto cantiere 2" },
  { src: image3, alt: "Foto cantiere 3" },
  { src: image4, alt: "Foto cantiere 4" },
  { src: image5, alt: "Foto cantiere 5" },
  { src: image6, alt: "Foto cantiere 6" },
  { src: image7, alt: "Foto cantiere 7" },
  { src: image8, alt: "Foto cantiere 8" },
  { src: image9, alt: "Foto cantiere 9" },
  { src: image10, alt: "Foto cantiere 10" },
  { src: image11, alt: "Foto cantiere 11" },
  { src: image12, alt: "Foto cantiere 12" },
  { src: image13, alt: "Foto cantiere 13" },
  { src: image14, alt: "Foto cantiere 14" },
  { src: image15, alt: "Foto cantiere 15" },
];

const CantiereCarousel = ({
  reverse = false,
  onImageClick,
}: {
  reverse?: boolean;
  onImageClick: (slide: Slide) => void;
}) => {
  const trackSlides = [...slides, ...slides];

  return (
    <div className="cantiere-carousel">
      <div className="cantiere-carousel-track" style={{ animationDirection: reverse ? "reverse" : "normal" }}>
        {trackSlides.map((slide, index) => (
          <div key={`cantiere-slide-${index}`} className="cantiere-slide">
            <button
              type="button"
              className="cantiere-slide-media cantiere-slide-button"
              onClick={() => onImageClick(slide)}
              aria-label={`Apri ${slide.alt}`}
            >
              <img src={slide.src} alt={slide.alt} className="cantiere-slide-image" />
              <div className="cantiere-slide-overlay" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedShowcaseSection = () => {
  const [lightboxSlide, setLightboxSlide] = useState<Slide | null>(null);

  useEffect(() => {
    if (!lightboxSlide) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxSlide(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxSlide]);

  return (
    <section id="progetti-showcase" className="site-divider relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="site-divider-ripple" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1200px] px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <p className="font-caveat mb-[5px] text-[24px] font-bold text-[#FF5500]">
              E dopo che e stata fatta la valutazione...
            </p>
            <h2 className="font-grift text-[32px] font-bold italic leading-[1.1] tracking-[-1px] text-[#2F2F2F] sm:text-[42px]">
              La Trasparenza Non Finisce... <span className="font-medium">Ecco Delle Foto Dei Nostri Cantieri!</span>
            </h2>
            <p className="mt-4 font-futuru text-[21px] md:text-[26px] leading-[1.6] tracking-[0.6px] text-[#2F2F2F]">
              Non ci piace tenere segreti e siamo fieri del nostro lavoro: per questo includiamo anche le foto dei
              cantieri durante i lavori, non solo a progetto finito. 
            </p>
            <p className="mt-4 font-futuru text-[21px] md:text-[26px] leading-[1.6] tracking-[0.6px] text-[#2F2F2F]">
              Magari non sono perfette, ma sono vere: e li che
              si vede dove abbiamo messo lo zampino e quanta esperienza portiamo in ogni intervento.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Trasparenza", "Cantiere aperto"].map((label) => (
              <span
                key={label}
                className="site-divider-pill inline-flex items-center rounded-full px-4 py-1.5 font-futuru text-[12px] uppercase tracking-[1.4px] text-[#2F2F2F]"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <CantiereCarousel onImageClick={setLightboxSlide} />
          <CantiereCarousel reverse onImageClick={setLightboxSlide} />
        </div>
      </div>

      {lightboxSlide && (
        <div
          className="cantiere-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxSlide.alt}
          onClick={() => setLightboxSlide(null)}
        >
          <button
            type="button"
            className="cantiere-lightbox-close"
            onClick={() => setLightboxSlide(null)}
            aria-label="Chiudi immagine"
          >
            x
          </button>
          <div className="cantiere-lightbox-body" onClick={(event) => event.stopPropagation()}>
            <img src={lightboxSlide.src} alt={lightboxSlide.alt} className="cantiere-lightbox-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default AnimatedShowcaseSection;
