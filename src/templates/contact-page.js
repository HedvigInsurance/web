import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import { StickyContainer } from 'react-sticky';
import './Page.css';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

const ContactTemplate = ({
  image,
  title,
  heading,
  header,
  footer,
  langKey,
}) => (
  <main className="Site">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <StickyContainer>
      <Header data={header} langKey={langKey} />
      <article className="Site-content">
        <div className="u-backgroundSecondaryGrey">
          <div className="Container">
            <h1 className="u-spaceMT2 u-spaceMB8 u-md-spaceMB6 u-lg-spaceMB6 u-fontFamilyHeader u-fontSize5 u-md-fontSize3 u-lg-fontSize2">
              {heading}
            </h1>
          </div>
        </div>
        <div className="Container u-md-spaceMT10 u-lg-spaceMT10 u-spaceMB5 u-md-spaceMB3 u-lg-spaceMB3">
          <div className="u-spaceMT7 u-spaceMB5">
            <address className="u-fontStyleNormal u-spaceMB7">
              <strong>Hedvig AB</strong>
              <br />
              Artillerigatan 10, 114 51, Stockholm
              <br />
              Org. nr. 559093-0334
              <br />
            </address>
            {image && (
              <Img
                className="u-imageContain"
                sizes={image.mapImage.sizes}
                alt=""
              />
            )}
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
    </StickyContainer>
    <Footer data={footer} langKey={langKey} />
  </main>
);

ContactTemplate.propTypes = {
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  ...pagePropTypes,
  header: PropTypes.shape(headerPropTypes).isRequired,
  footer: PropTypes.shape(footerPropTypes).isRequired,
};

const Contact = ({ data, pathContext }) => (
  <ContactTemplate
    image={data.file}
    title={data.markdownRemark.frontmatter.title}
    heading={data.markdownRemark.frontmatter.heading}
    header={data.header}
    footer={data.footer}
    langKey={pathContext.langKey}
  />
);

Contact.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  pathContext: PropTypes.shape({ langKey: PropTypes.string }).isRequired,
};

export { ContactTemplate };

export default Contact;

export const query = graphql`
  query ContactPage($id: String!) {
    file(relativePath: { eq: "contact/office-map.png" }) {
      mapImage: childImageSharp {
        sizes(maxWidth: 1100) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
      }
    }

    header: dataYaml(id: { regex: "/header/" }) {
      ...Header_data
    }

    footer: dataYaml(id: { regex: "/footer/" }) {
      ...Footer_data
    }
  }
`;
