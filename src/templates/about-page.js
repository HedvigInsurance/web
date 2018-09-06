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

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  teamtailorUsers: PropTypes.object.isRequired,
  body: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

const AboutUsTemplate = ({
  title,
  body,
  foundersImageFile,
  header,
  footer,
  teamtailorUsers,
  langKey,
}) => (
  <main className="Site">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <StickyContainer>
      <Header data={header} langKey={langKey} />
      <Hero />
      <Body title={body.title} text={body.text} />
      <Founders imageFile={foundersImageFile} />
      <Hedvigers teamtailorUsers={teamtailorUsers} />
      <Facts />
      <Press />
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
    body={data.markdownRemark.frontmatter.body}
    foundersImageFile={data.foundersImageFile}
    title={data.markdownRemark.frontmatter.title}
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
        body {
          title
          text
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
