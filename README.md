# @webvowl/wasm-pack-plugin

> webpack plugin for Rust

## Installation

Add it to your `package.json`:
```json
{
    "devDependencies": {
        "wasm-pack-plugin": "git://github.com/WebVOWL/wasm-pack-plugin.git#v1.7.2"
    }
}
```

### `wasm-pack`

`wasm-pack` can be automatically installed by adding `wasmInstaller` to your [config options](#usage). 

You can also install manually. We expect `wasm-pack` to be in your `$PATH`. See [installation here](https://rustwasm.github.io/wasm-pack/installer).

The minimum required `wasm-pack` version is `0.8.0`

## Linting

This project uses the `prettier` formatter. To manually format the code run the `lint:fix` script.

## Usage

Add the loader in your `webpack.config.js`:

```js
const path = require('path')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

module.exports = {
    // ...

    plugins: [
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, 'crate'),

            // Check https://rustwasm.github.io/wasm-pack/book/commands/build.html for
            // the available set of arguments.
            //
            // Optional space delimited arguments to appear before the wasm-pack
            // command. Default arguments are `--verbose`.
            args: '--log-level warn',
            // Default arguments are `--typescript --target browser --mode normal`.
            extraArgs: '--no-typescript',

            // Optional array of absolute paths to directories, changes to which
            // will trigger the build.
            // watchDirectories: [
            //   path.resolve(__dirname, "another-crate/src")
            // ],

            // The same as the `--out-dir` option for `wasm-pack`
            // outDir: "pkg",

            // The same as the `--out-name` option for `wasm-pack`
            // outName: "index",

            // If defined, `forceWatch` will force activate/deactivate watch mode for
            // `.rs` files.
            //
            // The default (not set) aligns watch mode for `.rs` files to Webpack's
            // watch mode.
            // forceWatch: true,

            // If defined, `forceMode` will force the compilation mode for `wasm-pack`
            //
            // Possible values are `development` and `production`.
            //
            // the mode `development` makes `wasm-pack` build in `debug` mode.
            // the mode `production` makes `wasm-pack` build in `release` mode.
            // forceMode: "development",

            // Controls plugin output verbosity, either 'info' or 'error'.
            // Defaults to 'info'.
            // pluginLogLevel: 'info',

            // If defined, sets the specified environment variables during compilation.
            //
            // env: {
            //   WASM_BINDGEN_THREADS_STACK_SIZE: 128 * 2 ** 10
            // }

            // If defined, wasm-pack is automatically installed using the specified installation method.
            // If NOT defined and wasm-pack is not found, the program exits with an error.
            //
            // Possible values are: `rust`, `npm`, and `yarn`.
            //
            // `rust` installs wasm-pack using `cargo install wasm-pack`.
            // `npm` installs wasm-pack from the npm registry.
            // `yarn` installs wasm-pack using yarn.
            // wasmInstaller: 'rust',
        }),
    ],

    // ...
}
```

and then import your `pkg` folder from `wasm-pack`:

```js
import('./path/to/your/pkg').then((module) => {
    module.run()
})
```
