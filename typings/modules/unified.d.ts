declare module 'unified' {
  export type UnifiedMiddleware = () => any;

  interface ProcessSyncResult<TContents = string> {
    contents: TContents;
  }

  interface Unified {
    use: <TUseOptions = {}>(
      middleware: UnifiedMiddleware,
      options?: TUseOptions,
    ) => Unified;
    processSync: <TContents>(content: string) => ProcessSyncResult<TContents>;
  }

  const unified: { (): Unified };

  export default unified;
}
