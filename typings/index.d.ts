declare const graphql: {
  (strings: TemplateStringsArray, ...interpolations: any[]): any; // unsure what this returns, but it doesn't matter so much since it's consumed by gatsby anyways
};

declare module '*.mp4' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  interface ReactComponentProps {
    width: number;
    height: number;
  }
  export const ReactComponent: React.SFC<ReactComponentProps>;
}

declare module 'is-ios' {
  const isIOS: boolean;
  export default isIOS;
}
