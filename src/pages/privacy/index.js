import React from 'react';
import { Helmet } from 'react-helmet';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const Privacy = () => (
  <main className="Site">
    <Helmet>
      <title>Personuppgifter | Hedvig</title>
    </Helmet>
    <Header />
    <article className="Site-content">
      <div className="u-backgroundSecondaryPink">
        <div className="Container">
          <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize5 u-md-fontSize3 u-lg-fontSize2">
            Hur Hedvig behandlar dina personuppgifter
          </h1>
        </div>
      </div>

      <div className="Container u-md-spaceMT10 u-lg-spaceMT10 u-spaceMB5 u-md-spaceMB3 u-lg-spaceMB3">
        <div className="u-maxWidth1of1">
          <section className="">
            <div className="u-spaceMT5">
              <p className="u-spaceMB9">
                Hej! Det här är vår personuppgiftspolicy. Den talar om för dig
                vilka personuppgifter vi samlar in om dig, och varför vi gör
                det. Policyn gäller då vi, alltså Hedvig AB, org. nr.
                559093-0334, med registrerad adress Artillerigatan 10, 114 51
                Stockholm ({'"'}
                <b>Hedvig</b>
                {'"'}), tillhandahåller försäkringstjänster till dig genom vår
                app eller web.
              </p>
              <p className="u-spaceMB9">
                När du använder tjänsten och interagerar med oss delar du
                samtidigt personlig information. Vi använder den informationen
                för att tillhandahålla dig försäkring, men också för att anpassa
                våra erbjudanden till dig och för att utveckla och förbättra
                våra produkter och service.
              </p>
              <p className="u-spaceMB9">
                När vi säger personuppgifter menar vi information som direkt
                eller indirekt kan hänföras till dig som individ. För oss är det
                viktigt att det är tydligt för dig vilka uppgifter vi samlar in,
                och hur vi använder dem. Därför innehåller den här policyn
                detaljerad information om allt som har med behandlingen av dina
                uppgifter att göra. Vi hanterar dina personuppgifter i enlighet
                med Dataskyddsförordningen (även kallat GDPR), annan tillämplig
                lagstiftning och föreskrifter från olika myndigheter. Alla
                uppdateringar som rör behandlingen av dina personuppgifter
                meddelas på vår hemsida.
              </p>
              <p className="u-spaceMB9">
                Din integritet är viktig för oss. Därför gör vi vårt yttersta
                för att skydda dina uppgifter och hantera din information
                försiktigt och varsamt, och krypterar all känslig data.
              </p>
            </div>
          </section>

          <section className="">
            <div className="">
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                Personuppgifterna vi samlar in
              </h2>
            </div>
            <div className="">
              <p className="u-spaceMB9">
                De personuppgifter som vi samlar in är beroende av vilken
                relation vi har till dig. Informationen här nedanför anger
                exempel på information vi kan komma att behandla. Informationen
                behöver inte gälla för dig, utan är exempel på typer av
                informationen vi kan behandla om våra användare.
              </p>
              <h3 className="u-spaceMT8 u-spaceMB10 u-fontSize9 u-lg-fontSize8">
                Allmän information
              </h3>
              <p className="u-spaceMB9">
                Allmän information samlas in för att identifiera dig som
                befintlig eller potentiell användare, för att ge dig bättre
                service genom Hedvigs kommunikationskanaler, för att kommunicera
                med dig och för att hantera olika typer av betalningar
                (exempelvis utbetalning av ersättning om du har haft en skada).
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Personlig information du delar med oss
              </h4>
              <p className="u-spaceMB9">
                Namn, kontaktuppgifter, familjestatus, födelsedatum, anställning
                och arbetsgivare, marknadsföringspreferenser.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Personnummer och andra officiella uppgifter
              </h4>

              <p className="u-spaceMB9">
                Personnummer, körkortsuppgifter och folkbokföringsadress.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Finansiell information och kontouppgifter
              </h4>
              <p className="u-spaceMB9">
                Bankkontonummer, kontouppgifter och annan betalningsinformation.
              </p>
              <h3 className="u-spaceMT8 u-spaceMB10 u-fontSize9 u-lg-fontSize8">
                Försäkringsinformation
              </h3>
              <p className="u-spaceMB9">
                Vi samlar in försäkringsinformation (samt skadeinformation) för
                att ingå försäkringsavtalet och för att reglera skador. Vi eller
                våra samarbetspartners kan till exempel behöva uppgifter om den
                egendom som försäkringen omfattar eller journaluppgifter för att
                reglera om du blivit sjuk eller råkat ut för en olycka
                utomlands. Här listar vi fler exempel på uppgifter som samlas
                in.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Fastighetsuppgifter
              </h4>
              <p className="u-spaceMB9">
                Adress och fastighetsbeteckning, byggnadstyp och byggnadens
                egenskaper, fastighetens skick, byggnadens ålder och tillbehör,
                boende och hyresgäster, larm och låsskydd.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Reseinformation
              </h4>
              <p className="u-spaceMB9">
                Hotellbokningar, biljettuppgifter, reseinformation.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Skadehistorik
              </h4>
              <p className="u-spaceMB9">Tidigare skadehistorik hos Hedvig.</p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Skadeuppgifter från andra försäkringsbolag
              </h4>
              <p className="u-spaceMB9">
                Information från det gemensamma skaderegistret (GSR).
              </p>
              <h3 className="u-spaceMT8 u-spaceMB10 u-fontSize9 u-lg-fontSize8">
                Känsliga personuppgifter
              </h3>
              <p className="u-spaceMB9">
                Förutom allmän information kan vi också komma att samla in viss
                känslig information om dig. Nedan ser du exempel på sådana
                uppgifter.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Hälsouppgifter
              </h4>
              <p className="u-spaceMB9">
                I samband med sjukdom och olycka utomlands, tidigare och
                aktuellt hälsotillstånd, information om skador och
                funktionsnedsättningar, genomförda och planerade medicinska
                behandlingar och undersökningar, graviditet och
                receptförskrivningar.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Rättsliga förfaranden och information om brott
              </h4>
              <p className="u-spaceMB9">
                Information om rättsliga förfaranden som rör dig, till exempel
                ansvars- eller överfallsskyddsskador till följd av en brottslig
                gärning. Vi samlar också in nödvändig information för att
                förhindra penningtvätt, försäkringsbedrägerier och utreda vissa
                svåra försäkringsfall.
              </p>
              <h3 className="u-spaceMT8 u-spaceMB10 u-fontSize9 u-lg-fontSize8">
                Övrigt
              </h3>
              <p className="u-spaceMB9">
                Förutom allmän och känslig information ser du nedan exempel på
                övriga personuppgifter som Hedvig behandlar.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Telefonsamtal och röstinspelningar
              </h4>
              <p className="u-spaceMB9">
                Vi spelar in telefonsamtal mellan dig och våra anställda, samt
                analyserar och lyssnar på röstinspelningar du har gjort i appen.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Bilder och videoinspelningar
              </h4>
              <p className="u-spaceMB9">
                Vi analyserar och tittar på bilder och videoinspelningar som rör
                försäkringsskador, som du har laddat upp i appen eller skickat
                till oss.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Din kontakt med oss
              </h4>
              <p className="u-spaceMB9">
                Chattmeddelanden, mail och övrig kommunikation.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Information från sociala media
              </h4>
              <p className="u-spaceMB9">
                Information publicerad i sociala media.
              </p>
              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Information från externa källor
              </h4>
              <p className="u-spaceMB9">
                För att komplettera och hålla den information som du
                tillhandahållit oss aktuell inhämtar vi kompletterande
                information från externa källor, som offentligt tillgänglig
                information, kommersiellt tillgängliga källor och information
                från våra samarbetspartners.
              </p>
            </div>
          </section>

          <section className="">
            <div className="">
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                Hur vi samlar in dina personuppgifter
              </h2>
            </div>
            <div className="">
              <p className="u-spaceMB9">
                Vi samlar in uppgifter om dig från olika källor beroende på din
                relation med oss. Nedan listas olika exempel på data vi kan
                samla in.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Direkt från dig eller den som är huvudförsäkringstagare
              </h4>
              <p className="u-spaceMB9">
                Vi kan inhämta uppgifter från dig när du interagerar med oss via
                olika kommunikationskanaler (t.ex. vår hemsida eller app) och
                visar intresse för köp av försäkring, köper försäkring eller
                anmäler en skada.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Användande av vår app, hemsida och information publicerad på
                sociala medier
              </h4>
              <p className="u-spaceMB9">
                Vi använder nätidentifierare (cookies) när du använder vår app
                och besöker vår hemsida. Dessa är viktiga för att optimera din
                upplevelse och användning av de tjänster vi erbjuder dig. Läs
                mer om vår användning av cookies på www.hedvig.com/legal.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Direkt från samarbetspartners, andra försäkringsbolag,
                myndigheter och institutioner
              </h4>
              <p className="u-spaceMB9">
                För att utreda och reglera skador kan vi inhämta uppgifter från
                samarbetspartners, vårdgivare, andra försäkringsbolag, polisen
                och andra myndigheter och institutioner, för att utreda din och
                andra parters rätt till ersättning.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Register hos myndigheter, försäkringsgivare och andra externa
                parter
              </h4>
              <p className="u-spaceMB9">
                Vi kan inhämta uppgifter om den egendom som du innehar från
                tillgängliga register.
              </p>
            </div>
          </section>

          <section className="">
            <div className="">
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                Hur vi använder dina personuppgifter
              </h2>
            </div>
            <div className="">
              <p className="u-spaceMB9">
                Vi använder personuppgifter för att bedriva och erbjuda bästa
                möjliga tjänst för dig och våra andra användare. Här följer
                olika användningsområden för de personuppgifter vi behandlar.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Förmedling och administration av försäkring
              </h4>
              <p className="u-spaceMB9">
                Vi behöver behandla personuppgifter för att kunna förmedla
                försäkringsavtal med dig, och för att kunna administrera ett
                sådant avtal. Informationen används för att vi ska kunna ge dig
                ett korrekt pris sett till din riskprofil och för att se till
                att din försäkring har rätt omfattning. Vi använder också
                uppgifterna för administration och för att erbjuda dig tjänster
                som har anknytning till din försäkring och engagemang med
                Hedvig.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Försäkringspartner
              </h4>
              <p className="u-spaceMB9">
                Vi kan komma att sammanställa och lämna ut personuppgifter till
                vår försäkringsgivare.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Skadereglering
              </h4>
              <p className="u-spaceMB9">
                Vi använder personuppgifter för att kunna utföra vår
                skadereglering och bekräfta rättsliga anspråk.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Hantera vår relation
              </h4>
              <p className="u-spaceMB9">
                Vi använder personuppgifter för att identifiera dig som
                användare, kommunicera med dig i våra kanaler samt
                tillhandahålla dig relevant information.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Tillhandahållande av tjänster från partners
              </h4>
              <p className="u-spaceMB9">
                Vi använder dina personuppgifter för att våra samarbetspartners
                ska kunna erbjuda tjänster som är relaterade till vår
                försäkring.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Verksamhetsutveckling
              </h4>
              <p className="u-spaceMB9">
                Vi använder personuppgifter, t.ex. inspelade telefonsamtal,
                röstinspelningar, bilder och videoinspelningar för att utveckla
                vår verksamhet, våra produkter och tjänster och genomföra
                marknadsundersökningar och andra analyser.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Marknadsföring
              </h4>
              <p className="u-spaceMB9">
                Vi samlar in och analyserar personuppgifter, som beteende i vår
                app och på vår hemsida (inklusive geobaserad information) för
                att kunna skicka erbjudanden om försäkring och annan användbar
                information anpassad för dig. Du kan komma att få
                försäkringserbjudanden som vi bedömer kan vara intressanta och
                relevanta för dig. Vi säljer aldrig information om dig till
                någon utomstående tredje part.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Utredning och penningtvätt
              </h4>
              <p className="u-spaceMB9">
                Vi använder personuppgifter för att motverka penningtvätt och
                terrorfinansiering samt för att förebygga, utreda och avvärja
                bedrägerier. Vi använder också personuppgifter för att och
                hantera andra kommersiella risker.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Myndighetsrapportering
              </h4>
              <p className="u-spaceMB9">
                Vi använder personuppgifter för att fullgöra våra skyldigheter
                enligt gällande rätt och att på begäran kunna svara myndigheter
                när de har rätt att få del av uppgifter enligt lag.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Upprättande av statistik
              </h4>
              <p className="u-spaceMB9">
                Vi använder personuppgifter för att ta fram statistiskt underlag
                för våra riskbedömningar och försäkringsprodukter.
              </p>
            </div>
          </section>

          <section className="">
            <div className="">
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                Lagliga grunder för behandlingen
              </h2>
            </div>
            <div className="">
              <p className="u-spaceMB9">
                Beroende på syftet och typen av informationen behandlar vi
                personuppgifter med stöd av en eller flera av följande lagliga
                grunder:
              </p>

              <ul
                style={{ listStyle: 'circle' }}
                className="u-spaceML8 u-spaceMB9"
              >
                <li>
                  Behandlingen är nödvändig för att fullgöra ett avtal i vilket
                  personen i fråga är part eller för att vidta åtgärder på
                  begäran av sådan person innan ett sådant avtal ingås. Det kan
                  t.ex. röra sig om information om försäkringstagaren, andra
                  försäkrade, den försäkrade egendomen och risken relaterad till
                  försäkringen samt uppgifter som är nödvändiga för att
                  fastställa rätt till försäkringsersättning.
                </li>
                <li>
                  Du kan ha gett oss ditt samtycke till att dina personuppgifter
                  får behandlas för vissa ändamål. Du har i sådant fall när som
                  helst rätt att återkalla ditt samtycke. Återkallandet av
                  samtycket kommer dock inte att påverka lagligheten av
                  behandlingen som grundat sig på samtycket, innan detta
                  återkallas. Observera att en återkallelse av samtycke kan
                  påverka rätten till försäkring eller ersättning.
                </li>
                <li>
                  Behandlingen är nödvändig för ändamål som rör Hedvigs eller en
                  tredje parts berättigade intressen under förutsättning att din
                  integritet är tillräckligt skyddad. Denna grund är tillämplig
                  på behandling i syfte att motverka bedrägerier, för
                  direktmarknadsföring, för att underhålla och utveckla
                  säkerheten i Hedvigs system eller då det är nödvändigt för
                  samarbetet med våra samarbetspartners.
                </li>
                <li>
                  Behandlingen är nödvändig för att skydda intressen som är av
                  grundläggande betydelse för dig eller för en annan fysisk
                  person, till exempel när vi lämnar information till sjukhus
                  för att de kunna hjälpa dig vid reseskada.
                </li>
                <li>
                  Behandlingen är nödvändig för att fastställa, göra gällande
                  eller försvara rättsliga anspråk. Till exempel för att
                  fastställa din rätt att teckna viss försäkring eller
                  fastställa rätt till försäkringsersättning.
                </li>
                <li>
                  Behandlingen är nödvändig för att fullgöra en rättslig
                  skyldighet som åligger oss.
                </li>
              </ul>
            </div>
          </section>

          <section className="">
            <div className="">
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                Automatiska beslut och profilering
              </h2>
            </div>
            <div className="">
              <p className="u-spaceMB9">
                På Hedvig kan vi fatta beslut med automatik, dvs. utan mänsklig
                påverkan. Det rör sig t.ex. automatisk prissättning, riskanalys
                och utbetalning av ersättning. Genom att automatisera dessa
                processer kan vi erbjuda dig som användare bättre och snabbare
                hjälp.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Skadereglering
              </h4>
              <p className="u-spaceMB9">
                Vi använder automatiserade beslut som en viktig del av vår
                skadereglering. Besluten baseras på den information som du ger
                oss, och analyseras gentemot ditt försäkringsvillkor. Beslut kan
                innefatta såväl rätt till ersättning som ersättningens storlek.
                Om du inte är nöjd med ett beslut har du alltid rätt att
                kontakta oss.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Onboardingprocessen
              </h4>
              <p className="u-spaceMB9">
                Vi använder automatiserade beslut som del i vår
                onboardingprocess i appen. Med onboarding menar vi när du
                signerar upp som användare. Automatiserade beslut baseras på den
                information som tillhandahållits oss och våra system beräknar
                sedan priset för försäkringen baserat på uppgifter vi får av
                dig, samt externa datakällor. Automatisk premieberäkning
                förekommer för alla våra försäkringar.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Direktmarknadsföring
              </h4>
              <p className="u-spaceMB9">
                Inom marknadsföring använder vi profilering för att ge dig den
                information som vi tror är mest relevant för dig och för att
                undvika att du får information du inte vill ha.
              </p>
            </div>
          </section>

          <section className="">
            <div className="">
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                Säkerhet och radering
              </h2>
            </div>
            <div className="">
              <p className="u-spaceMB9">
                Vi gör vårt yttersta för att skydda din integritet, och alla
                dina personuppgifter krypteras.
              </p>
              <p className="u-spaceMB9">
                Dina uppgifter sparas så länge som det är nödvändigt för att
                uppfylla det syfte för vilket vi sparar dem eller den längre tid
                som i förekommande fall uppställs av gällande lag. Du har när
                som helst rätt att inkomma med en begäran om att dina uppgifter
                raderas.
              </p>
              <p className="u-spaceMB9">
                Vi vidtar alltid lämpliga tekniska, rättsliga och
                organisatoriska säkerhetsåtgärder för att skydda din integritet.
                Om någon annan part utanför Hedvig behandlar personuppgifter för
                vår räkning ansvarar vi för att det utförs med omsorg och med
                krav på att Dataskyddsförordningens krav för
                personuppgiftsbiträden uppfylls.
              </p>
            </div>
          </section>

          <section className="">
            <div className="">
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                Hur vi delar personuppgifter
              </h2>
            </div>
            <div className="">
              <p className="u-spaceMB9">
                Vi använder sekretess beträffande information rörande alla
                användare, och krypterar all känslig information. I vissa fall
                kan vi dock överföra personuppgifter till andra parter men
                endast när det finns ett lagligt stöd för sådan överföring eller
                att berörda individer samtyckt till detta. Behandling av
                personuppgifter som sker genom personuppgiftsbiträden utgör inte
                en sådan överföring utan anses ske inom ramen för Hedvigs
                kontroll.
              </p>

              <p className="u-spaceMB9">
                Beroende på försäkringen och personuppgifternas art kan dina
                personuppgifter komma att överföras till eller behandlas av:
              </p>

              <ul
                style={{ listStyle: 'circle' }}
                className="u-spaceML8 u-spaceMB9"
              >
                <li>
                  <b>Banker och finansbolag</b> för t.ex. administration av
                  betalningar;
                </li>
                <li>
                  <b>Partners inom reparation och skadebesiktning</b> såsom
                  byggnadsentreprenörer och skadeexperter, till vilka
                  information om försäkringens innehåll och omfattning samt
                  kontaktuppgifter kan komma att delas om det är nödvändigt för
                  att besiktiga eller reglera en skada;
                </li>
                <li>
                  <b>Vårdgivare</b> – i händelse av sjuk- och olycksfall
                  utomlands kan vi eller våra samarbetspartners komma att dela
                  dina uppgifter med vårdgivare;
                </li>
                <li>
                  <b>Andra försäkringsbolag</b> – vi tillhandahåller
                  skadeinformation till andra försäkringsbolag när det är
                  nödvändigt för att kunna reglera en skada eller för att kunna
                  regressa mot sådant försäkringsbolag;
                </li>
                <li>
                  <b>Myndigheter och nämnder</b> – vi tillhandahåller uppgifter
                  till myndigheter och nämnder när vi är skyldiga att
                  tillhandahålla informationen för att fullgöra en rättslig
                  förpliktelse eller för att tillvarata våra intressen i ett
                  rättsligt förfarande;
                </li>
                <li>
                  <b>Tjänsteleverantörer</b> – vi kan även komma att dela dina
                  uppgifter med andra tjänsteleverantörer inom ramen för t.ex.
                  vår skadereglering;
                </li>
                <li>
                  <b>IT-leverantörer</b> – vi kan komma att använda vissa
                  specialistleverantörer för analys, underhåll och utveckling av
                  Hedvigs IT-system;
                </li>
                <li>
                  <b>GSR</b> – genom vår försäkringsgivare har vi tillgång till
                  ett för försäkringsbranschen gemensamt skadeanmälningsregister
                  (GSR). Detta register innehåller vissa uppgifter om skadan
                  samt uppgift om vem som begärt ersättning och används endast i
                  samband med skadereglering. Det innebär att vi kan få reda på
                  om du tidigare anmält någon skada hos annat försäkringsbolag.
                  Ändamålet med GSR är att tillhandahålla ett underlag till
                  försäkringsföretag för att identifiera oklara försäkringsfall.
                  Därigenom kan företagen motverka utbetalning av ersättningar
                  som baseras på oriktiga uppgifter. Uppgifterna kan även
                  användas i avidentifierad form för statistiska ändamål.
                </li>
              </ul>

              <p className="u-spaceMB9">
                Personuppgiftsansvarig för GSR är Skadeanmälningsregister (GSR)
                AB, Box 24171, 104 51 Stockholm. Se{' '}
                <a href="http://www.gsr.se/">gsr.se</a> för mer information om
                den behandling av uppgifter som förekommer i registret.
              </p>
            </div>
          </section>

          <section className="">
            <div className="">
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                Överföring av uppgifter utanför EES
              </h2>
            </div>
            <div className="">
              <p className="u-spaceMB9">
                Dina personuppgifter lagras inom den Europeiska unionen (EU) och
                Europeiska ekonomiska samarbetsområdet (EES). På grund av
                globaliseringen och den tekniska utvecklingen kan vi i begränsad
                omfattning komma att överföra eller tillåta åtkomst av uppgifter
                utanför EU/EES.
              </p>

              <p className="u-spaceMB9">
                Vi gör vårt yttersta för att skydda din integritet genom att
                hantera din information försiktigt och vidta lämpliga och
                nödvändiga skyddsåtgärder från ett land utanför EU/EES, till
                exempel beträffande molntjänstleverantörer med verksamhet i USA.
                All sådan överföring sker med tillämpning av
                Dataskyddsförordningen bestämmelser och med Hedvigs
                säkerställande av din integritet.
              </p>
            </div>
          </section>

          <section className="">
            <div className="">
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                Rättigheter och din tillgång till dina uppgifter
              </h2>
            </div>
            <div className="">
              <p className="u-spaceMB9">
                För oss är det viktigt att vi alltid hanterar dina
                personuppgifter på ett lagligt, transparent och öppet sätt, och
                att dina uppgifter är korrekta och aktuella. Du kan se viss
                information under din profilsida i appen. Om du önskar mer
                information är det bara att beställa en kopia av de
                personuppgifter vi behandlar om dig genom att maila{' '}
                <a href="mailto:help@hedvig.com">help@hedvig.com</a>. Du har
                också rätt att få närmare information om hur dina
                personuppgifter behandlas. Innan du får tillgång till
                informationen kommer vi att bekräfta din identitet.
              </p>
              <p className="u-spaceMB9">
                Du har alltid rätt att begära rättelse av eller radering av
                information som du tycker är felaktig. Du har också alltid rätt
                att begära att dina personuppgifter raderas, om det inte finns
                laglig grund för vår hantering. Du kan också i vissa fall begära
                att behandlingen av dina personuppgifter begränsas.
              </p>

              <p className="u-spaceMB9">
                Viss information kan vara undantagen från din rätt till radering
                enligt gällande rätt. På din begäran kan en kopia av de
                personuppgifter som du tillhandahållit oss överföras av oss
                direkt till ett annat bolag om det är tekniskt möjligt. Du har
                även rätt att vända dig till oss med en invändning och få
                behandlingen av dina personuppgifter prövad.
              </p>
            </div>
          </section>

          <section className="">
            <div className="">
              <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
                Vem du kan kontakta
              </h2>
            </div>
            <div className="">
              <p className="u-spaceMB9">
                Hedvig är personuppgiftsansvarig och ansvarar för att dina
                personuppgifter behandlas i enlighet med gällande lagstiftning.
                Hedvig har också utsett ett dataskyddsombud för
                personuppgiftsbehandlingen, se nedan.
              </p>

              <p className="u-spaceMB9">
                Du har rätt att, enligt gällande lag, begära tillgång till och
                rättelse eller radering av dina personuppgifter, begränsning av
                personuppgiftsbehandling som rör dig, att invända mot
                personuppgiftsbehandling, samt till dataportabilitet. Du har
                rätt till detta helt utan kostnad. Vid ogrundade eller orimliga
                förfrågningar (t.ex. på grund av att de görs mycket ofta) får
                Hedvig ta ut en administrativ avgift – du kommer i sådant fall
                att meddelas om detta på förhand.
              </p>

              <p className="u-spaceMB9">
                Om du har några frågor kring hur vi behandlar dina
                personuppgifter, kontakta oss! Du kan antingen maila direkt till
                Hedvigs support på{' '}
                <a href="mailto:help@hedvig.com">help@hedvig.com</a> eller
                kontakta vårt dataskyddsombud på{' '}
                <a href="mailto:dataskyddsombud@hedvig.com">
                  dataskyddsombud@hedvig.com
                </a>.
              </p>

              <p className="u-spaceMB9">
                Om du vill skriva brev går det såklart också bra, skicka det i
                så fall till:
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Hedvig AB
              </h4>
              <address className="u-fontStyleNormal">
                Dataskyddsombudet<br />
                Artillerigatan 10<br />
                114 51, Stockholm<br />
              </address>

              <p className="u-spaceMT8 u-spaceMB9">
                Skulle du efter kontakten med oss fortfarande vara missnöjd kan
                du vända dig till Datainspektionen som är tillsynsmyndighet för
                personuppgiftsbehandling, och till vilken du kan anmäla ditt
                klagomål.
              </p>

              <h4 className="u-spaceMT8 u-fontSize10 u-md-fontSize10">
                Datainspektionen
              </h4>
              <address className="u-fontStyleNormal">
                Box 8114<br />
                104 20 Stockholm<br />
                <a href="https://www.datainspektionen.se/">
                  datainspektionen.se
                </a>
                <br />
              </address>
            </div>
          </section>
        </div>
      </div>
    </article>
    <Footer />
  </main>
);

export default Privacy;
