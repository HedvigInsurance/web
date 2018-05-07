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
  css = (
    <style
      id="gatsby-inlined-css"
      dangerouslySetInnerHTML={{ __html: stylesStr }}
    />
  );
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
      <meta property="og:title" content="Hedvig | Insurance. Unbroken." />
      <meta
        property="og:image"
        content="https://www.hedvig.com/assets/social/hedvig-linkedin@2x.png"
      />
      <meta
        property="og:description"
        content="Hedvig är en ny typ av försäkring. Byggd på smart teknik, omtanke och sunt förnuft. Så att du kan få hjälp på sekunder, och ersättning på minuter."
      />
      <meta
        name="description"
        content="Hedvig är en ny typ av försäkring. Byggd på smart teknik, omtanke och sunt förnuft. Så att du kan få hjälp på sekunder, och ersättning på minuter."
      />
      <meta property="og:url" content="https://www.hedvig.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Hedvig" />
      <meta property="og:locale" content="sv_SE" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
      {css}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
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
