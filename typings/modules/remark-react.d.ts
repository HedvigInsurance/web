declare module 'remark-react' {
  import { RemarkRenderer } from 'remark';
  const func: () => RemarkRenderer;
  export default func;
}
