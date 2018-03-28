/* eslint-disable global-require, react/no-danger, import/no-webpack-loader-syntax, import/no-unresolved */

import React from 'react';
import PropTypes from 'prop-types';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}

let css;
if (process.env.NODE_ENV === 'production') {
  css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />;
}

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <html {...htmlAttributes} lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="theme-color" content="#000000" />
      <meta property="og:title" content="Hedvig | Hemförsäkring som gör livet lättare" />
      <meta
        property="og:image"
        content="https://www.hedvig.com/assets/web/hedvig_linkedin_02_2x_1024.png"
      />
      <meta property="og:description" content="" />
      <meta property="og:url" content="https://www.hedvig.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Hedvig" />
      <meta property="og:locale" content="sv_SE" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      {headComponents}
      {css}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
);

HTML.propTypes = {
  htmlAttributes: PropTypes.node,
  headComponents: PropTypes.node,
  bodyAttributes: PropTypes.node,
  preBodyComponents: PropTypes.node,
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.node,
};

HTML.defaultProps = {
  htmlAttributes: null,
  headComponents: null,
  bodyAttributes: null,
  preBodyComponents: null,
  postBodyComponents: null,
};

module.exports = HTML;
