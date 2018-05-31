import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const Contact = ({ data }) => (
  <main className="Site">
    <Helmet>
      <title>Kontakt | Hedvig</title>
    </Helmet>
    <Header />
    <article className="Site-content">
      <div className="u-backgroundSecondaryGrey">
        <div className="Container">
          <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize5 u-md-fontSize3 u-lg-fontSize2">
            Vill du komma i kontakt med oss?
          </h1>
        </div>
      </div>
      <div className="Container u-md-spaceMT10 u-lg-spaceMT10 u-spaceMB5 u-md-spaceMB3 u-lg-spaceMB3">
        <div className="u-spaceMT7 u-spaceMB5">
          <address className="u-fontStyleNormal u-spaceMB7">
            <strong>Hedvig AB</strong>
            <br />
            Artillerigatan 10, 114 51, Stockholm<br />
            Org. nr. 559093-0334<br />
          </address>
          <Img
            className="u-imageContain"
            sizes={data.file.mapImage.sizes}
            alt=""
          />
        </div>

        <section className="Grid Grid--withGutter">
          <div className="u-spaceMB6 u-md-size1of3 u-lg-size1of3">
            <a
              className="Button u-backgroundPrimaryDarkBlue
                     u-colorWhite"
              href="mailto:hedvig@hedvig.com"
            >
              hedvig@hedvig.com
            </a>
          </div>
          <div className="u-spaceMB6 u-md-size1of3 u-lg-size1of3">
            <a
              className="Button u-backgroundPrimaryDarkBlue
                     u-colorWhite"
              href="mailto:press@hedvig.com"
            >
              press@hedvig.com
            </a>
          </div>
          <div className="u-spaceMB6 u-md-size1of3 u-lg-size1of3">
            <a
              className="Button u-backgroundPrimaryDarkBlue
                     u-colorWhite"
              href="mailto:careers@hedvig.com"
            >
              careers@hedvig.com
            </a>
          </div>
        </section>
      </div>
    </article>
    <Footer />
  </main>
);

Contact.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Contact;

export const query = graphql`
  query ContactMapImageQuery {
    file(relativePath: { eq: "contact/office-map.png" }) {
      mapImage: childImageSharp {
        sizes(maxWidth: 1100) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`;
