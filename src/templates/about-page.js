import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import './Page.css';

import { Hedvigers } from 'src/sections/about-us/hedvigers';
import { Hero } from 'src/sections/about-us/hero';
import { Body } from 'src/sections/about-us/body';
import { Founders } from 'src/sections/about-us/founders';
import { Facts } from 'src/sections/about-us/facts';
import { Press } from 'src/sections/about-us/press';
import { Investors } from 'src/sections/about-us/investors';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  teamtailorUsers: PropTypes.object.isRequired,
  hero: PropTypes.shap({
    headline: PropTypes.string.isRequired,
    playButtonText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  mainSection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  hedvigers: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  press: PropTypes.shape({
    title: PropTypes.string.isRequired,
    footnote: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        logo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  investors: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired,
  }),
};

const AboutUsTemplate = ({
  title,
  hero,
  mainSection,
  foundersImageFile,
  hedvigers,
  header,
  footer,
  teamtailorUsers,
  langKey,
  press,
  investors,
}) => (
  <main className="Site">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <StickyContainer>
      <Header data={header} langKey={langKey} />
      <Hero {...hero} />
      <Body {...mainSection} />
      <Founders imageFile={foundersImageFile} />
      <Hedvigers {...hedvigers} teamtailorUsers={teamtailorUsers} />
      <Facts />
      <Press {...press} />
      <Investors {...investors} />
    </StickyContainer>
    <Footer data={footer} langKey={langKey} />
  </main>
);

AboutUsTemplate.propTypes = {
  ...pagePropTypes,
  header: PropTypes.shape(headerPropTypes).isRequired,
  footer: PropTypes.shape(footerPropTypes).isRequired,
  langKey: PropTypes.string.isRequired,
};

const AboutUs = ({ data, pathContext }) => (
  <AboutUsTemplate
    teamtailorUsers={data.allTeamtailorUser.edges
      .map(({ node }) => node)
      .filter((user) => user.picture.large)}
    hero={data.markdownRemark.frontmatter.hero}
    mainSection={data.markdownRemark.frontmatter.mainSection}
    hedvigers={data.markdownRemark.frontmatter.hedvigers}
    foundersImageFile={data.foundersImageFile}
    title={data.markdownRemark.frontmatter.title}
    press={data.markdownRemark.frontmatter.press}
    investors={data.markdownRemark.frontmatter.investors}
    header={data.header}
    footer={data.footer}
    langKey={pathContext.langKey}
  />
);

AboutUs.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape(pagePropTypes),
    }),
    header: PropTypes.shape(headerPropTypes),
    footer: PropTypes.shape(footerPropTypes),
  }).isRequired,
  pathContext: PropTypes.shape({ langKey: PropTypes.string.isRequired })
    .isRequired,
};

export { AboutUsTemplate };

export default AboutUs;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    foundersImageFile: file(relativePath: { eq: "about-us/founders.jpg" }) {
      image: childImageSharp {
        sizes(maxWidth: 2000) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        mainSection {
          title
          text
        }
        hero {
          headline
          title
          playButtonText
        }
        hedvigers {
          title
        }
        press {
          title
          items {
            logo
            title
            text
          }
        }
        investors {
          title
          list {
            name
            image
            type
          }
        }
      }
    }

    allTeamtailorUser {
      edges {
        node {
          title
          name
          picture {
            large
          }
        }
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
