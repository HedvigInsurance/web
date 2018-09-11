declare module 'remark' {
  interface RemarkResult {
    contents: string;
  }

  interface RemarkRenderInstance {
    processSync: (text: string) => RemarkResult;
  }

  interface RemarkReactComponentsOptions {
    [component: string]: React.ComponentType;
  }

  interface RemarkOptions {
    remarkReactComponents?: RemarkReactComponentsOptions;
  }

  type RemarkRenderer = () => any;
  interface Remark {
    use: (
      renderer: RemarkRenderer,
      options?: RemarkOptions,
    ) => RemarkRenderInstance;
  }

  const func: () => Remark;

  export default func;
}
