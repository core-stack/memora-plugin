export type PluginContext<TConfig = any> = {
  provider: PluginServiceProvider;
  config: TConfig;
}

export interface IPlugin<Input = any, Output = any> {
  execute(data: Input): Promise<Output> | Output;
  dispose?(): Promise<void> | void;
}

export type Initializer<TConfig = any, TInstance = IPlugin> = (ctx: PluginContext<TConfig>) => Promise<TInstance>;

export interface PluginServiceProvider {
  getService<T>(name: string): Promise<T | undefined> | T | undefined;
  hasService(name: string): Promise<boolean> | boolean;
}