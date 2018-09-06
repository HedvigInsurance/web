import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StickyContainer } from 'react-sticky';
import './Page.css';

import { Hedvigers } from 'src/sections/about-us/hedvigers';

import Header, { headerPropTypes } from 'src/components/Header';
import Footer, { footerPropTypes } from 'src/components/Footer';

const pagePropTypes = {
  title: PropTypes.string.isRequired,
  teamtailorUsers: PropTypes.object.isRequired,
};

const AboutUsTemplate = ({
  title,
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
      <Hedvigers teamtailorUsers={teamtailorUsers} />
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
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
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
