# React-Styled-TypeScript-Starter
- React
- Styled Components
- TypeScript
- Jest + Enzyme
- Babel 7
- Webpack 4
- Prettier
- TSLint

# Prerequisites
Node v8+

# Setup
To install packages `npm install` or `yarn`

To run the project `npm start` or `yarn start`

# Caveats

Using Babel 7 with the TypeScript preset have a few cons. A couple to note are:
- No support for `namespace` and `const enum`
- No type check errors during build time that stops compilation

In order to ensure that type checking does happen at some point in the process, `ForkTsCheckerWebpackPlugin` has been added to do this in a separate process for development. This doesn't actively stop type errors from being resolved since they compile anyway and so in order to make sure the codebase maintains consistency and proper typing, a pre-commit hook for TSLint has been added as a final measure.
