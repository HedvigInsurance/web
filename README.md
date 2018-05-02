# [Hedvig.com](https://hedvig.com)

[![Build Status](https://img.shields.io/travis/HedvigInsurance/web/master.svg)](https://travis-ci.org/HedvigInsurance/web)

## Setup

* Install node.js and yarn
* `yarn install`
* `yarn start`

## Styleguide

### Requiring files

* Use relative imports (`./Thing`) if in the same directory
* Use absolute imports (`src/components/Hero`) if outside current directory
* `src/` and `static/assets` are aliased

#### Example

```js
import Button from 'src/components/Button';
import { ReactComponent as Logo } from 'assets/identity/hedvig-wordmark-solid.svg';
import './footer.css';
```

#### Adding/removing aliased paths

Aliases are configured in

* gatsby-node.js
* .eslintrc.js (ESlint rule to check imports work)
* jsconfig.json (VSCode uses this to resolve paths)
* jest.config.js (Resolve tests)

## License

Released under the [GNU Affero GPL](./LICENSE)

## Thanks to BrowserStack

Big thanks to BrowserStack for letting us use their service to test our website in multiple browsers and environments.

<a href="https://www.browserstack.com/"><img width=200 alt="BrowserStack Logo" src="https://raw.github.com/hedviginsurance/web/master/media/BrowserStack.png"/></a>
