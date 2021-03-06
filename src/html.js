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

const getSnapTrackingCode = () => ({
  __html: `
 (function(win, doc, sdk_url){
    if(win.snaptr) return;
    var tr=win.snaptr=function(){
    tr.handleRequest? tr.handleRequest.apply(tr, arguments):tr.queue.push(arguments);
  };
    tr.queue = [];
    var s='script';
    var new_script_section=doc.createElement(s);
    new_script_section.async=!0;
    new_script_section.src=sdk_url;
    var insert_pos=doc.getElementsByTagName(s)[0];
    insert_pos.parentNode.insertBefore(new_script_section, insert_pos);
  })(window, document, 'https://sc-static.net/scevent.min.js');
    snaptr('init','2615a7c0-d8e9-4ae6-9914-814a1017010d')
    snaptr('track','PAGE_VIEW')
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
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={getSnapTrackingCode()}
      />
      <meta
        name="google-site-verification"
        content="BXRlEOqZgYtS-KjUZRPXj5_YIDXQK5RN3FRHNd2R7po"
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
