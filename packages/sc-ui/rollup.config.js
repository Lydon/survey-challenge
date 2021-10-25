import typescript from "@rollup/plugin-typescript";
import resolve  from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

import { peerDependencies } from "./package.json";

export default {
    input: [
        "./src/index.ts"
    ],
    output: [
        {
            dir: "dist/esnext",
            format: "es",
            preserveModules: true
        }

    ],
    external: [
        ...Object.keys(peerDependencies),
        /@sc\/.*/
    ],
    plugins: [
        resolve({
            extensions: [".ts", ".tsx"]
        }),
        commonjs(),
        typescript({
            outputToFilesystem: true,
            module: "esnext",
            tsconfig: "tsconfig.json"
        }),
        json()
    ]
};
