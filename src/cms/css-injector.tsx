import { ActionMap, Container } from 'constate'
import { renderStylesToString } from 'emotion-server'
import * as React from 'react'
import { renderToString } from 'react-dom/server'

interface State {
  hasInjectedCSS: boolean
}

interface Actions {
  setHasInjectedCSS: (hasInjectedCSS: boolean) => State
}

const actions: ActionMap<State, Actions> = {
  setHasInjectedCSS: (hasInjectedCSS) => ({
    hasInjectedCSS,
  }),
}

const initialState: State = {
  hasInjectedCSS: false,
}

export const CSSInjector: React.SFC = ({ children }) => (
  <Container actions={actions} initialState={initialState}>
    {({ hasInjectedCSS, setHasInjectedCSS }) => (
      <div
        ref={(ref) => {
          if (ref && !hasInjectedCSS) {
            setHasInjectedCSS(true)
            const css = renderStylesToString(
              renderToString(React.Children.only(children)),
            )
            ref.ownerDocument.head.innerHTML += css
          }
        }}
      >
        {children}
      </div>
    )}
  </Container>
)
