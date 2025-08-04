import { Compiler } from "webpack"

export interface WasmPackPluginOptions {
    crateDirectory: string
    args?: string
    extraArgs?: string
    forceWatch?: boolean
    forceMode?: "development" | "production"
    outDir?: string
    outName?: string
    watchDirectories?: string[]
    /** Controls plugin output verbosity. Defaults to 'info'. */
    pluginLogLevel?: "info" | "error"
    env?: Record<string, string>
    wasmInstaller?: "rust" | "npm" | "yarn"
}

export default class WasmPackPlugin {
    constructor(options: WasmPackPluginOptions)

    /** Invocation point for webpack plugins. */
    apply(compiler: Compiler): void
}

export = WasmPackPlugin

declare module "@webvowl/wasm-pack-plugin" {
    export { WasmPackPlugin, WasmPackPluginOptions }
    export default WasmPackPlugin
    export = WasmPackPlugin
}
