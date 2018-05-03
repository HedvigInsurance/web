import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import { ReactComponent as SosBarnbyarLogo } from 'assets/charity/sos-barnbyar-logo.svg';
import { ReactComponent as BarncancerfondenLogo } from 'assets/charity/barncancerfonden-logo.svg';
import { ReactComponent as CheckIcon } from 'assets/icons/check-icon.svg';

const GivingBack = () => (
  <main className="Site">
    <Header />
    <article className="Site-content">
      <div className="u-backgroundSecondaryPurple">
        <div className="Container">
          <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize5 u-md-fontSize3 u-lg-fontSize2">
            Hur vi ger tillbaka
          </h1>
        </div>
      </div>

      <div className="Container u-md-spaceMT10 u-lg-spaceMT10 u-spaceMB5 u-md-spaceMB3 u-lg-spaceMB3">
        <div style={{ maxWidth: 640 }}>
          <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Vårt sätt att bidra
          </h2>
          <p className="u-lg-fontSize9 u-spaceMB9">
            Försäkring finns till för att göra livet lättare för människor. Vår
            prio ett är alltid våra medlemmar, men blir det pengar över kan vi
            tillsammans vara med och bidra.
          </p>

          <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            En schysstare modell för alla
          </h2>
          <p className="u-spaceMB9 u-lg-fontSize9">
            Hedvig tar en fast avgift oavsett hur mycket ersättning som betalas
            ut. Överskottet skänks till ett gott ändamål istället för att gå
            till extra vinst
          </p>

          <h3 className="u-spaceMT8 u-spaceMB10 u-fontSize11 u-md-fontSize10 u-lg-fontSize9">
            Detta betyder att:
          </h3>

          <ul className="u-spaceMT10">
            <li
              className="u-fontSize9 u-spaceMB10"
              style={{ textIndent: '-2em', paddingLeft: '2em' }}
            >
              <CheckIcon
                style={{
                  width: 20,
                  marginRight: 10,
                  verticalAlign: 'text-bottom',
                }}
                className="u-inlineBlock u-spaceMR11"
              />
              Du bidrar till att skapa en bättre värld
            </li>
            <li
              className="u-fontSize9 u-spaceMB10"
              style={{ textIndent: '-2em', paddingLeft: '2em' }}
            >
              <CheckIcon
                style={{
                  width: 20,
                  marginRight: 10,
                  verticalAlign: 'text-bottom',
                }}
                className="u-inlineBlock u-spaceMR11"
              />Du kan känna dig trygg att du får rätt ersättning, eftersom
              Hedvig inte tjänar på att betala ut mindre till dig
            </li>
          </ul>
        </div>

        <div>
          <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Så funkar det
          </h2>
          <div className="Grid Grid--withGutter">
            <div className="u-md-size1of3 u-lg-size1of3">
              <span className="NumberedIcon">1</span>
              <p className="u-lg-fontSize9 u-spaceMB9">
                Skaffa Hedvig och välj det ändamål du vill&nbsp;stötta
              </p>
            </div>
            <div className="u-md-size1of3 u-lg-size1of3">
              <span className="NumberedIcon">2</span>
              <p className="u-lg-fontSize9 u-spaceMB9">
                Vid årets slut summerar vi alla pengar som inte betalats ut i
                ersättningar till dig, eller till andra som valt
                samma&nbsp;ändamål
              </p>
            </div>
            <div className="u-md-size1of3 u-lg-size1of3">
              <span className="NumberedIcon">3</span>
              <p className="u-lg-fontSize9 u-spaceMB9">
                Tillsammans gör vi skillnad genom att skänka&nbsp;pengarna
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="u-spaceMT5 u-spaceMB10 u-fontFamilyHeader u-fontSize8 u-md-fontSize7 u-lg-fontSize7">
            Våra partners
          </h2>
          <div className="Grid Grid--withGutter">
            <div className="u-spaceMB8 u-md-size1of2 u-lg-size1of2 u-flex u-flexCol u-flexAlignItemsCenter">
              <figure
                className="u-flex u-flexCol u-flexJustifyCenter u-spaceMB7"
                style={{ height: 120 }}
              >
                <SosBarnbyarLogo />
              </figure>
              <p
                style={{ maxWidth: 425 }}
                className="u-lg-fontSize9 u-spaceMB9 u-textCenter"
              >
                SOS Barnbyar arbetar för att fler barn ska få en trygg uppväxt.
                Stödet från våra medlemmar går till att finansiera en barnby
                i&nbsp;Ukraina.
              </p>
            </div>
            <div className="u-spaceMB8 u-md-size1of2 u-lg-size1of2 u-flex u-flexCol u-flexAlignItemsCenter">
              <figure className="u-spaceMB7" style={{ height: 120 }}>
                <BarncancerfondenLogo />
              </figure>
              <p
                style={{ maxWidth: 425 }}
                className="u-lg-fontSize9 u-spaceMB9 u-textCenter"
              >
                Barncancerfonden arbetar för att bekämpa cancer och för att
                cancerdrabbade barn, ungdomar och deras familjer ska få den vård
                och det stöd de&nbsp;behöver.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="Grid Grid--withGutter Grid--alignCenter u-spaceMT8">
            <a
              className="Button u-colorWhite
                        u-lg-fontSize9 u-backgroundPrimaryGreen"
              href="https://hedvig.app.link/kZNtW0cT9L"
              id="cta-app-download"
            >
              Skaffa Hedvig
            </a>
          </div>
        </div>
      </div>
    </article>
    <Footer />
  </main>
);

export default GivingBack;
