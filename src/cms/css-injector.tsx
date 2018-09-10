import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';

export const CSSInjector: React.SFC = ({ children }) => (
  <div
    ref={(ref) => {
      if (ref) {
        const css = renderStylesToString(renderToString(children));
        ref.ownerDocument.head.innerHTML += css;
      }
    }}
  >
    {children}
  </div>
);
