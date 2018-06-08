import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }, { conversionId }) => {
  const snippet = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${conversionId}');
  `;

  return setPostBodyComponents([
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${conversionId}`}
    />,
    <script
      key="gtag-snippet"
      dangerouslySetInnerHTML={{ __html: snippet }} // eslint-disable-line
    />,
  ]);
};
