module.exports = {
    bail: 1,
    testRegex: ".*spec.tsx$",
    preset: "ts-jest",
    globals: {
        "ts-jest": {
            tsConfig: "./tsconfig.test.json",
            isolatedModules: true
        }
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "html",
        "json"
    ],
    modulePathIgnorePatterns: [
        "/node_modules/",
        "/dist/",
        "/test/"
    ],
    transformIgnorePatterns: [
        "/dist/"
    ]
};
