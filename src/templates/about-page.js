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
  hero: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    playButtonText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  main: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  founders: PropTypes.shape({
    imageText: PropTypes.string.isRequired,
  }),
  hedvigers: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  facts: PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        number: PropTypes.string.isRequired,
        explainer: PropTypes.string.isRequired,
      }),
    ),
  }),
  press: PropTypes.shape({
    title: PropTypes.string.isRequired,
    footnote: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        logo: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
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
  main,
  foundersImageFile,
  founders,
  hedvigers,
  facts,
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
      <Body {...main} />
      <Founders {...founders} imageFile={foundersImageFile} />
      <Hedvigers {...hedvigers} teamtailorUsers={teamtailorUsers} />
      <Facts {...facts} />
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
    main={data.markdownRemark.frontmatter.main}
    hedvigers={data.markdownRemark.frontmatter.hedvigers}
    facts={data.markdownRemark.frontmatter.facts}
    foundersImageFile={data.foundersImageFile}
    founders={data.markdownRemark.frontmatter.founders}
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
        main {
          title
          text
        }
        hero {
          headline
          title
          playButtonText
        }
        founders {
          imageText
        }
        hedvigers {
          title
        }
        facts {
          title
          list {
            number
            explainer
          }
        }
        press {
          title
          footnote
          items {
            logo
            title
            link
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
