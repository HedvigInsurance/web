declare module 'remark' {
  interface RemarkResult {
    contents: string;
  }

  interface RemarkRenderInstance {
    processSync: (text: string) => RemarkResult;
  }

  interface RemarkReactComponentsOptions {
    a?: React.StatelessComponent<any> | React.ComponentClass<any>;
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
