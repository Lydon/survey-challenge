# Yield Street Survey Challenge

## Intro

A modal survey built using React + Redux + Bootstrap

### Prerequisites

Requires Node v12+

`node -v`

Requires lerna v3.13.1+ to be installed globally

`npm i -g lerna`

### Quick Start (TLDR!)

`npm start`

Bootstraps the application and opens webpack-dev-server on port 4000 - Access on
http://localhost:4000

## Build Packages
- Build SDK - `npm run build:sdk`
- Build UI - `npm run build:ui`
- Build All - `npm run build:all`

# Widget Build
`npm run build:widget`

Bootstraps the application and creates a `dist/` in [./apps/host](./apps/host)


Once done open index.html [Launch!](./apps/host/dist/index.html)

## Test
- Running unit tests - `npm run test`

### Components
- [Modal](./packages/sc-ui/src/containers/modal/README.md)

## Description
Monorepo based solution separating concerns via two main packages
`@sc/sdk` and `@sc/ui`.

### Tech Used
- UI - Bootstrap + React
- SDK - Redux
- Testing - Jest + Enzyme + Enzyme 17 Adapter

### Why lerna?
Although it's a very very small project the idea behind using lerna is mainly to scale proportionaly.

Let's say we currently have a survey widget, but in the coming future we will be housing widgets for different segments.
We know that we will be sharing dependencies amongst the project.

Lerna allows for bootstrapping by sharing and linking dependencies across.

Furthermore it's easier to publish and maintain in sync the package versions.




### Improvements
- e2e could have been used to cover the whole flow of the survey challenge
- Linting could have also been added such as ESLint to set a standard
- Better lerna concurrency support based on the dependency tree

## Contributor ✨
[<img src="https://avatars.githubusercontent.com/u/7816662?s=400&amp;amp;u=4c701313211cfa6d1fa671257151d0a043436503&amp;amp;v=4/" width="100"/>](https://avatars.githubusercontent.com/u/7816662?s=400&u=4c701313211cfa6d1fa671257151d0a043436503&v=4/)
