import { useEffect, useRef, useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import fase1Gif from "@/assets/fase1Gif.mp4";
import fase2Gif from "@/assets/fase2Gif.mp4";
import fase3Gif from "@/assets/fase3Gif.mp4";

const PATH_WIDTH = 120;
const PATH_HEIGHT = 1000;
const VIDEO_SOURCES = [fase1Gif, fase2Gif, fase3Gif];
const PHOTO_COUNT = VIDEO_SOURCES.length;

const TornPaperFunnelSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const orbRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const tabletVideoRef = useRef<HTMLVideoElement | null>(null);
  const tabletVideoWrapRef = useRef<HTMLDivElement | null>(null);
  const pathLengthRef = useRef(0);
  const activeIndexRef = useRef(0);
  const orbActiveRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragPointerIdRef = useRef<number | null>(null);
  const dragStartYRef = useRef(0);
  const dragStartProgressRef = useRef(0);
  const [photoStops, setPhotoStops] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [orbActive, setOrbActive] = useState(false);

  useEffect(() => {
    const updateStops = () => {
      const path = pathRef.current;
      if (!path) {
        return;
      }

      const total = path.getTotalLength();
      pathLengthRef.current = total;

      const stops = Array.from({ length: PHOTO_COUNT }, (_, index) => {
        const t = (index + 1) / (PHOTO_COUNT + 1);
        const point = path.getPointAtLength(total * t);
        return (point.y / PATH_HEIGHT) * 100;
      });

      setPhotoStops(stops);
    };

    updateStops();
    window.addEventListener("resize", updateStops);

    return () => window.removeEventListener("resize", updateStops);
  }, []);

  useEffect(() => {
    let raf = 0;

    const tick = () => {
      const section = sectionRef.current;
      const path = pathRef.current;
      const orb = orbRef.current;

      if (section && path && orb) {
        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight || 0;
        const startOffset = viewportHeight * 0.5;
        const progressRaw = (viewportHeight - rect.top - startOffset) / (rect.height + viewportHeight - startOffset);
        const progressScaled = progressRaw * 1.18;
        const progressClamped = Math.min(1, Math.max(0, progressScaled));
        const total = pathLengthRef.current || path.getTotalLength();

        if (!pathLengthRef.current) {
          pathLengthRef.current = total;
        }

        const point = path.getPointAtLength(total * progressClamped);
        const leftPercent = (point.x / PATH_WIDTH) * 100;
        const topPercent = (point.y / PATH_HEIGHT) * 100;

        orb.style.left = `${leftPercent}%`;
        orb.style.top = `${topPercent}%`;

        if (tabletVideoWrapRef.current) {
          tabletVideoWrapRef.current.style.left = `${leftPercent}%`;
          tabletVideoWrapRef.current.style.top = `${topPercent}%`;
        }

        if (photoStops.length) {
          let nextIndex = 0;
          let minDistance = Math.abs(photoStops[0] - topPercent);

          for (let i = 1; i < photoStops.length; i += 1) {
            const distance = Math.abs(photoStops[i] - topPercent);
            if (distance < minDistance) {
              minDistance = distance;
              nextIndex = i;
            }
          }

          if (nextIndex !== activeIndexRef.current) {
            activeIndexRef.current = nextIndex;
            setActiveIndex(nextIndex);
          }

          const nextOrbActive = minDistance < 6;
          if (nextOrbActive !== orbActiveRef.current) {
            orbActiveRef.current = nextOrbActive;
            setOrbActive(nextOrbActive);
          }
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [photoStops]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      const shouldPlay = orbActive && index === activeIndex;

      if (shouldPlay) {
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => undefined);
        }
      } else {
        video.pause();
        if (video.currentTime !== 0) {
          try {
            video.currentTime = 0;
          } catch {
            // Ignore seek errors for videos not ready yet.
          }
        }
      }
    });

    const tabletVideo = tabletVideoRef.current;
    if (tabletVideo) {
      const shouldPlay = orbActive;

      if (shouldPlay) {
        const playPromise = tabletVideo.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => undefined);
        }
      } else {
        tabletVideo.pause();
        if (tabletVideo.currentTime !== 0) {
          try {
            tabletVideo.currentTime = 0;
          } catch {
            // Ignore seek errors for videos not ready yet.
          }
        }
      }
    }
  }, [activeIndex, orbActive]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!isDraggingRef.current || dragPointerIdRef.current !== event.pointerId) {
        return;
      }

      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;
      const startOffset = viewportHeight * 0.5;
      const delta = (event.clientY - dragStartYRef.current) / rect.height;
      const progressScaled = Math.min(1, Math.max(0, dragStartProgressRef.current + delta));
      const progressRaw = progressScaled / 1.18;
      const clampedRaw = Math.min(1, Math.max(0, progressRaw));
      const sectionTop = rect.top + window.scrollY;
      const targetRectTop = viewportHeight - startOffset - clampedRaw * (rect.height + viewportHeight - startOffset);
      const targetScrollY = sectionTop - targetRectTop;

      window.scrollTo({
        top: Math.max(0, targetScrollY),
        behavior: "auto",
      });
    };

    const stopDragging = () => {
      isDraggingRef.current = false;
      dragPointerIdRef.current = null;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("pointercancel", stopDragging);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_rgba(255,244,236,0.55)_45%,_rgba(255,255,255,1)_100%)] pb-16 sm:pb-20 md:pb-24 min-h-[110vh] md:min-h-[140vh] lg:min-h-[160vh]"
    >
      <div className="torn-paper-divider w-full h-[110px] sm:h-[130px] md:h-[150px] lg:h-[170px]" />
      <div className="mt-6 md:mt-16 mx-auto lg:w-[1024px] xl:w-[1280px] flex w-full flex-col gap-2 xl:gap-10 md:flex-row">
        <div className="order-2 mt-12 flex w-full md:order-2 md:w-[64%] md:ml-6 max-w-[664px] flex-col items-start gap-6 px-[20px] xl:px-[45px]">
          <div className="flex w-full flex-col">
            <h2 className="w-full">
              <span className="block font-caveat font-bold text-[21px] mb-[5px] leading-[0.95] text-[#FF5500] md:text-[26px] md:text-[#DD5E1F]">
                Ogni incubo dell'edilizia inizia da una <span className="underline">decisione presa al buio</span>...
              </span>
              <span className="block font-grift font-bold text-[32px] italic leading-[1.1] tracking-[-0.5px] text-[#000] md:text-[42px]">
                <span className="font-normal">...Puoi evitarla con una </span>
                <strong className="font-bold">Valutazione Gratuita di Rischi e Interventi Necessari</strong>.
              </span>
            </h2>
          </div>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            Perché, alla fine, i problemi non nascono quando qualcosa va storto...
          </p>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            Nascono prima, quando si parte <mark className="rounded-[2px] bg-yellow-200/90 px-1">senza una mappa completa di ciò che succederà dopo</mark>.
          </p>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            E allora Edil Vulcano offre una valutazione per mettere ordine prima di iniziare.
          </p>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            Serve a portare a galla quello che di solito resta nell'ombra.
          </p>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            Chi ha trent'anni di cantiere lo capisce al volo. Vede cosa è implicito, cosa è fragile, cosa rischia di cambiare.
          </p>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            <mark className="rounded-[2px] bg-yellow-200/90 px-1">In questa valutazione lo diciamo subito, non quando i lavori sono già partiti</mark>.
          </p>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            Così capisci dove possono arrivare cambi di piano e perché.
          </p>
          <div className="md:hidden w-full pt-2">
            <div className="mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-2xl border border-dashed border-[#D7D7D7] bg-[#F4F4F4]">
              <video
                className="h-full w-full object-cover"
                src={VIDEO_SOURCES[0]}
                muted
                playsInline
                loop
                autoPlay
                preload="metadata"
                aria-hidden="true"
              />
            </div>
          </div>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            La <strong className="font-bold">Valutazione Tecnica Pre-Cantiere</strong> è un momento strutturato in cui il
            progetto viene guardato con gli occhi di chi poi lo realizza in cantiere.
          </p>
          <ul className="w-full list-disc space-y-2 pl-6 font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            <li>Si chiarisce cosa è compreso, cosa no, e cosa è ancora da scegliere.</li>
            <li>Si guarda l'ordine reale dei lavori, non una lista fredda di prezzi.</li>
            <li>Si decide prima come gestire le scelte che arrivano durante i lavori.</li>
          </ul>
          <div className="md:hidden w-full pt-2">
            <div className="mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-2xl border border-dashed border-[#D7D7D7] bg-[#F4F4F4]">
              <video
                className="h-full w-full object-cover"
                src={VIDEO_SOURCES[1]}
                muted
                playsInline
                loop
                autoPlay
                preload="metadata"
                aria-hidden="true"
              />
            </div>
          </div>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            È così che tutto diventa più chiaro, senza promesse inutili.
          </p>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            Alla fine della valutazione non hai un sì o un no. <mark className="rounded-[2px] bg-yellow-200/90 px-1">Hai la capacità di decidere sapendo cosa stai facendo</mark>.
          </p>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black">
            Ed è per questo che questa valutazione <strong className="font-bold">cambia tutto</strong>.
          </p>
          <p className="w-full items-center font-futuru text-[21px] md:text-[26px] leading-[40px] tracking-[0.8px] text-black font-medium">
            Perché rende il risultato che desideri - un lavoro gestito con controllo - più vicino e reale, già prima di iniziare.
          </p>
          <div className="md:hidden w-full pt-2">
            <div className="mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-2xl border border-dashed border-[#D7D7D7] bg-[#F4F4F4]">
              <video
                className="h-full w-full object-cover"
                src={VIDEO_SOURCES[2]}
                muted
                playsInline
                loop
                autoPlay
                preload="metadata"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="w-full max-w-[440px] pt-2">
            <Button
              asChild
              variant="hero"
              className="group h-[58px] w-full max-w-[630px] tracking-[0.80px] rounded-[3px] bg-[linear-gradient(171.76deg,_#FF5500_22.64%,_#C24000_95.06%)] font-brunson font-normal text-[20px] md:text-[21px] lg:text-[24px] leading-[1.5] uppercase text-white shadow-[0_8px_20px_rgba(194,64,0,0.25)] transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(194,64,0,0.35)] hover:brightness-110"
            >
              <NavLink to="/preventivo-rapido">RICHIEDI UNA VALUTAZIONE GRATUITA!</NavLink>
            </Button>
            <div className="mt-2 flex items-center justify-center leading-[1.2] gap-2 text-[12px] font-futuru tracking-[0.8px] text-black/55">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-black/50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="11" width="16" height="9" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              <span>Dati protetti e privacy garantita.</span>
            </div>
          </div>
        </div>

        <div className="order-1 hidden flex-1 items-stretch justify-start lg:justify-start md:order-1 md:flex">
          <div className="relative h-full min-h-[100vh] lg:w-[520px]">
            <div className="absolute left-[18px] top-0 h-full w-[120px] md:left-[22px] lg:left-[30px]">
              <svg className="h-full w-full" viewBox="0 0 120 1000" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="tornFunnelLineGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D0D0D0" stopOpacity="0" />
                    <stop offset="12%" stopColor="#D0D0D0" stopOpacity="0.75" />
                    <stop offset="88%" stopColor="#D0D0D0" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#D0D0D0" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  ref={pathRef}
                  d="M60 10 C10 160 110 240 60 380 C10 520 110 600 60 760 C25 900 95 950 60 990"
                  stroke="url(#tornFunnelLineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <div
                ref={orbRef}
                className={`funnel-orb ${orbActive ? "funnel-orb-active" : ""}`}
                style={{ left: "50%", top: "0%" }}
                onPointerDown={(event) => {
                  if (event.button !== 0) {
                    return;
                  }
                  isDraggingRef.current = true;
                  dragPointerIdRef.current = event.pointerId;
                  dragStartYRef.current = event.clientY;
                  const section = sectionRef.current;
                  if (section) {
                    const rect = section.getBoundingClientRect();
                    const viewportHeight = window.innerHeight || 0;
                    const startOffset = viewportHeight * 0.5;
                    const progressRaw =
                      (viewportHeight - rect.top - startOffset) / (rect.height + viewportHeight - startOffset);
                    dragStartProgressRef.current = Math.min(1, Math.max(0, progressRaw * 1.18));
                  } else {
                    dragStartProgressRef.current = 0;
                  }
                  event.currentTarget.setPointerCapture(event.pointerId);
                  event.preventDefault();
                }}
              />
            </div>

            <div
              ref={tabletVideoWrapRef}
              className={`tablet-funnel-video hidden md:block lg:hidden ${
                orbActive ? "tablet-funnel-video-active" : "tablet-funnel-video-idle"
              }`}
              aria-hidden="true"
            >
              <video
                key={`tablet-funnel-video-${activeIndex}`}
                ref={tabletVideoRef}
                className="funnel-photo-video"
                src={VIDEO_SOURCES[activeIndex]}
                muted
                playsInline
                loop
                preload="metadata"
                onLoadedMetadata={(event) => {
                  const video = event.currentTarget;
                  video.pause();
                  try {
                    video.currentTime = 0;
                  } catch {
                    // Ignore seek errors for videos not ready yet.
                  }
                }}
              />
            </div>

            <div className="hidden lg:block">
              {photoStops.map((topPercent, index) => (
                <div
                  key={`torn-funnel-photo-${index}`}
                  className={`funnel-photo ${
                    index === activeIndex && orbActive ? "funnel-photo-active" : "funnel-photo-dim"
                  } absolute left-[170px] overflow-hidden rounded-2xl border border-dashed border-[#D7D7D7] bg-[#F4F4F4] md:left-[190px] lg:left-[210px]`}
                  style={{ top: `${topPercent}%` }}
                >
                  <video
                    ref={(element) => {
                      videoRefs.current[index] = element;
                    }}
                    className="funnel-photo-video"
                    src={VIDEO_SOURCES[index]}
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    onLoadedMetadata={(event) => {
                      const video = event.currentTarget;
                      video.pause();
                      try {
                        video.currentTime = 0;
                      } catch {
                        // Ignore seek errors for videos not ready yet.
                      }
                    }}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TornPaperFunnelSection;
