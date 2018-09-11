declare module 'remark' {
  import { UnifiedMiddleware } from 'unified';
  interface RemarkResult<T = string> {
    contents: T;
  }

  interface RemarkRenderInstance {
    processSync: <TResult>(text: string) => RemarkResult<TResult>;
  }

  interface RemarkReactComponentsOptions {
    [component: string]: React.ComponentType;
  }

  interface RemarkOptions {
    remarkReactComponents?: RemarkReactComponentsOptions;
  }

  type RemarkRenderer = () => UnifiedMiddleware;
  interface Remark {
    use: (
      renderer: RemarkRenderer,
      options?: RemarkOptions,
    ) => RemarkRenderInstance;
  }

  const func: () => Remark;

  export default func;
}
