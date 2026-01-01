import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";

const CookiePolicy = () => {
  useEffect(() => {
    document.title = "Cookie Policy | Edil Vulcano";
  }, []);

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#FBF7F2] py-20 md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_10%,rgba(255,170,120,0.22)_0%,rgba(255,170,120,0.0)_55%),radial-gradient(110%_70%_at_85%_80%,rgba(255,230,210,0.38)_0%,rgba(255,230,210,0.0)_65%)]"
        />
        <div className="relative mx-auto w-full max-w-[960px] px-6">
          <p className="font-caveat text-[22px] md:text-[28px] font-bold text-[#DD5E1F] mb-2">Cookie</p>
          <h1 className="font-brunson text-[38px] md:text-[52px] leading-[1.05] text-headline">
            Informativa sui cookie
          </h1>
          <p className="mt-3 font-futuru text-[18px] md:text-[20px] text-body-text/80">
            Questo sito utilizza solo cookie tecnici indispensabili al corretto funzionamento e alla sicurezza.
          </p>

          <div className="mt-10 space-y-8 font-futuru text-[16px] md:text-[17px] leading-[1.7] text-body-text/80">
            <div>
              <h2 className="font-brunson text-[20px] uppercase text-[#C24000] mb-2">Cosa sono i cookie</h2>
              <p>
                I cookie sono piccoli file di testo che i siti inviano al dispositivo dell'utente per migliorare
                l'esperienza di navigazione o abilitare funzionalita' essenziali.
              </p>
            </div>

            <div>
              <h2 className="font-brunson text-[20px] uppercase text-[#C24000] mb-2">Cookie utilizzati</h2>
              <p>
                Utilizziamo solo cookie tecnici necessari alla navigazione e alla sicurezza del sito. Non utilizziamo
                cookie di profilazione, Google Analytics o pixel pubblicitari.
              </p>
            </div>

            <div>
              <h2 className="font-brunson text-[20px] uppercase text-[#C24000] mb-2">Gestione dei cookie</h2>
              <p>
                Puoi gestire o disabilitare i cookie dalle impostazioni del browser. La disattivazione dei cookie tecnici
                potrebbe compromettere il funzionamento di alcune funzionalità del sito.
              </p>
            </div>

            <div>
              <h2 className="font-brunson text-[20px] uppercase text-[#C24000] mb-2">Contatti</h2>
              <p>
                Per informazioni puoi scrivere a edilvulcanosrsl@gmail.com o contattarci al +39 351 457 7039.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CookiePolicy;
