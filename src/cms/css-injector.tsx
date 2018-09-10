import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';

let hasInjectedCSS = false;

export const CSSInjector: React.SFC = ({ children }) => (
  <div
    ref={(ref) => {
      if (ref && !hasInjectedCSS) {
        hasInjectedCSS = true;
        const css = renderStylesToString(renderToString(children));
        ref.ownerDocument.head.innerHTML += css;
      }
    }}
  >
    {children}
  </div>
);
