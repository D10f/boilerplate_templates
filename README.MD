### Setup

1. Clone the repository and pick the type of project you want to work on.
2. Delete all other directories and make any necessary changes to the configuration files.
3. Run `npm install`.

### Instructions

+ `npm start` starts the development server.
+ `npm run build` compiles your code inside `/src` to the `/dist` directory.
+ `npm run test` checks your code for type errors using Typescript.

### Typescript Support

The boilerplate projects use Webpack with Babel which has built-in support for `.ts` files but does not check for type errors. This means webpack will compile just fine and report no errors related to types, and is done intentionally for speed of development. You will have to run `npm run test` separately to have typescript check for type errors.

### Webpack React

Includes the necessary configuration to get started with a React.js project right away.

### Webpack Vanilla

Includes the necessary configuration to get started with a good ol' vanilla JavaScript project.
