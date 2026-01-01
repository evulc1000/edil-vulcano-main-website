import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Edil Vulcano";
  }, []);

  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-[#FBF7F2] py-20 md:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_10%,rgba(255,170,120,0.22)_0%,rgba(255,170,120,0.0)_55%),radial-gradient(110%_70%_at_85%_80%,rgba(255,230,210,0.38)_0%,rgba(255,230,210,0.0)_65%)]"
        />
        <div className="relative mx-auto w-full max-w-[960px] px-6">
          <p className="font-caveat text-[22px] md:text-[28px] font-bold text-[#DD5E1F] mb-2">Privacy</p>
          <h1 className="font-brunson text-[38px] md:text-[52px] leading-[1.05] text-headline">
            Informativa sulla privacy
          </h1>
          <p className="mt-3 font-futuru text-[18px] md:text-[20px] text-body-text/80">
            Trasparenza e rispetto dei tuoi dati. Qui trovi in modo chiaro cosa raccogliamo, come lo usiamo e con chi lo
            condividiamo.
          </p>

          <div className="mt-10 space-y-8 font-futuru text-[16px] md:text-[17px] leading-[1.7] text-body-text/80">
            <div>
              <h2 className="font-brunson text-[20px] uppercase text-[#C24000] mb-2">Titolare del trattamento</h2>
              <p>
                Edil Vulcano Srls – Via Galileo Ferraris 37, 13046 Livorno Ferraris (VC). Email: edilvulcanosrsl@gmail.com
                – PEC: edilvulcanosrl@pec.cgn.it.
              </p>
            </div>

            <div>
              <h2 className="font-brunson text-[20px] uppercase text-[#C24000] mb-2">Dati trattati</h2>
              <p>
                Raccogliamo solo i dati necessari a rispondere alle richieste di preventivo o contatto (nome, cognome,
                email, telefono, città e note). Non utilizziamo Google Analytics, pixel pubblicitari o strumenti di
                profilazione in questa fase.
              </p>
            </div>

            <div>
              <h2 className="font-brunson text-[20px] uppercase text-[#C24000] mb-2">Finalità e base giuridica</h2>
              <p>
                Utilizziamo i dati per rispondere alle tue richieste, fornire informazioni sui servizi e gestire i
                rapporti commerciali. La base giuridica e' l'esecuzione di misure precontrattuali richieste dall'utente e
                l'adempimento di obblighi legali.
              </p>
            </div>

            <div>
              <h2 className="font-brunson text-[20px] uppercase text-[#C24000] mb-2">Conservazione</h2>
              <p>
                Conserviamo i dati per il tempo necessario a gestire la richiesta e adempiere agli obblighi di legge.
                Adottiamo misure tecniche e organizzative adeguate a proteggere i dati.
              </p>
            </div>

            <div>
              <h2 className="font-brunson text-[20px] uppercase text-[#C24000] mb-2">Diritti dell'interessato</h2>
              <p>
                Puoi richiedere accesso, rettifica, cancellazione o limitazione del trattamento scrivendo a
                edilvulcanosrsl@gmail.com. Hai inoltre diritto di proporre reclamo all'autorita' di controllo competente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrivacyPolicy;
