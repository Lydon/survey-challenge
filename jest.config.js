module.exports = {
    bail: 1,
    testRegex: ".*spec.(ts|tsx)$",
    preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.test.json",
            isolatedModules: true
        }
    },
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    moduleDirectories: [
        "node_modules",
        "packages/sc-sdk/src"
    ],
    moduleNameMapper: {
        "^@sc/sdk$": `<rootDir>/packages/sc-sdk/src`
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
