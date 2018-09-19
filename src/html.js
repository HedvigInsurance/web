/* eslint-disable global-require, react/no-danger, import/no-webpack-loader-syntax, import/no-unresolved */

import React from 'react';
import PropTypes from 'prop-types';
import 'scrollingelement';

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

// Un-register buggy service workers that got deployed when first
// publishing the new design (2018-05-06)
// Deprecate this within a month or so
const getScriptToUnregisterBuggyServiceWorkers = () => ({
  __html: `
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function (registrations) {
        if (registrations.length) {
          for(let registration of registrations) {
            registration.unregister();
          }
        }
      });
    }
  `,
});

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <html {...htmlAttributes} lang="sv">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
      {css}
      <script
        dangerouslySetInnerHTML={getScriptToUnregisterBuggyServiceWorkers()}
      />
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
