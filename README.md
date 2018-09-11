# [Hedvig.com](https://hedvig.com)

[![Build Status](https://img.shields.io/travis/HedvigInsurance/web/master.svg)](https://travis-ci.org/HedvigInsurance/web)

## Setup

* Install Node.js and yarn
* Add `node_modules/.bin` to your `$PATH`
* `yarn install`
* `yarn start`

## Browser support

* iOS 7+
* Safari 6+
* IE11+ (IE10 has 0.04% share in Sweden)
* Evergreen: Firefox, Chrome, Edge, Opera

Autoprefixed is configured in package.json under `browserlist`

## Dev setup
You'll need an `.envrc` file with credentials etc to be able to start the dev build. Either you `source` it manually or use the [direnv](https://github.com/direnv/direnv) package. To run the project in dev mode run `yarn start`. The project will bind on `0.0.0.0:8000`.

### Editor

* This project is configured for VSCode
* Install the recommended extensions and edit any shared settings in `.vscode`

### Linting

* Using prettier and stylint which run on staged files before commit

## Site config

### Redirects

Redicts for Netlify live in `static/_redirects`

## Styleguide

### CSS

Following Suit CSS

* Docs: https://github.com/suitcss/suit/blob/master/doc/README.md

### SVGs

Include svgs as react components (enabled by `svgr` gatsby plugin)

#### Example

```js
import { ReactComponent as Logo } from 'assets/identity/hedvig-wordmark-solid.svg';
export default () => <Logo />;
```

### Requiring files

* Use relative imports (`./Thing`) if in the same directory
* Use absolute imports (`src/components/Hero`) if outside current directory
* `src/` and `static/assets` are aliased

#### Example

```js
import Button from 'src/components/Button';
import './footer.css';
```

#### Adding/removing aliased paths

Aliases are configured in

* gatsby-node.js
* .eslintrc.js (ESlint rule to check imports work)
* jsconfig.json (VSCode uses this to resolve paths)
* jest.config.js (Resolve tests)

## Deploys

The site is hosted on [Netlify](https://app.netlify.com/sites/hedvig/overview).

All commits and pull requests are published as draft previews.

### Production

`master` is autopublished regardless of Travis CI status.

### Manual deploy setup

* `brew install netlifyctl # Mac`
* `https://github.com/netlify/netlifyctl/releases/download/v0.3.3/netlifyctl-linux-amd64-0.3.3.tar.gz | tar xvz # Linux`
  * `# Add to $PATH`

### Manual production deploy

* `yarn build`
* `./scripts/deploy-production.sh`

### Manual draft deploy

* `yarn build`
* `./scripts/deploy-draft.sh`

## License

Released under the [GNU Affero GPL](./LICENSE)

## Thanks to BrowserStack

Big thanks to BrowserStack for letting us use their service to test our website in multiple browsers and environments.

<a href="https://www.browserstack.com/"><img width=200 alt="BrowserStack Logo" src="https://raw.github.com/hedviginsurance/web/master/media/BrowserStack.png"/></a>
