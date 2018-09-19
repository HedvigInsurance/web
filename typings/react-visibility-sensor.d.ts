declare module 'react-visibility-sensor' {
  import * as React from 'react';

  export interface VisibilityRect {
    top: boolean;
    left: boolean;
    right: boolean;
    bottom: boolean;
  }

  export interface Props {
    onChange?: (isVisible: boolean, visibilityRect: VisibilityRect) => void;
    active?: boolean;
    partialVisibility?: boolean | 'top' | 'right' | 'bottom' | 'left';
    delayedCall?: boolean;
    offset?: { top?: number; right?: number; bottom?: number; left?: number };
    scrollCheck?: boolean;
    scrollDelay?: number;
    scrollThrottle?: number;
    resizeCheck?: boolean;
    resizeDelay?: number;
    resizeInterval?: number;
    intervalCheck?: boolean;
    intervalDelay?: number;
    containment?: HTMLElement | any;
    minTopValue?: number;
  }

  export default class VisibilitySensor extends React.Component<Props> {}
}
