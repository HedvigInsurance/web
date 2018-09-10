import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { Container, ActionMap } from 'constate';

interface State {
  hasInjectedCSS: boolean;
}

interface Actions {
  setHasInjectedCSS: (hasInjectedCSS: boolean) => State;
}

const actions: ActionMap<State, Actions> = {
  setHasInjectedCSS: (hasInjectedCSS) => ({
    hasInjectedCSS,
  }),
};

const initialState: State = {
  hasInjectedCSS: false,
};

export const CSSInjector: React.SFC = ({ children }) => (
  <Container actions={actions} initialState={initialState}>
    {({ hasInjectedCSS, setHasInjectedCSS }) => (
      <div
        ref={(ref) => {
          if (ref && !hasInjectedCSS) {
            setHasInjectedCSS(true);
            const css = renderStylesToString(renderToString(children));
            ref.ownerDocument.head.innerHTML += css;
          }
        }}
      >
        {children}
      </div>
    )}
  </Container>
);
