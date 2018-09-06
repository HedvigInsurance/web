declare module 'remark' {
  interface RemarkResult {
    contents: string;
  }
  interface RemarkRenderInstance {
    processSync: (text: string) => RemarkResult;
  }
  type RemarkRenderer = () => any;
  interface Remark {
    use: (renderer: RemarkRenderer) => RemarkRenderInstance;
  }
  const func: () => Remark;
  export default func;
}
