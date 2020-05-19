# Nextjs Starter
A quick next.js quick start for:
* Preact
* TypeScript
* TS-Lint
* Unit-test
* Path alias
* Stylus (CSS-Preprocessor)
* Github Action

## Preact
Used `preact/compat` instead of react. Also 100% configured with next.js, you can use any React-supported library.

## Path alias
Path alias is configured at next.config.js, .babelrc and tsconfig.json.
* next.config.js - Next build time, dev environment.
* .babelrc - dev environment and test suite.
* tsconfig.json - IDE hint, path intellisense and dev environment.

## Path list
List of path aliased.
* pages - pages
* public - ~
* fonts - public/fonts
* images - public/images
* styles - public/styles
* components - components
* libs - libs
* pageTypes - pageTypes
* stores - stores
* layouts - layouts

## Test
Test suite is set up with jest.
* __tests__ - Contains test file.
* __mocks__ - Mockup file like | (css|styl|.scss|.less) is set. (Can be changed at `jest.config.js`)

## Github Action
Run once pull requst is created. Test all code coverage including:
* Type
* Lint
* Test
###### Local test with `yarn test:all`