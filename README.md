# ngx-contentful
[![Build Status](https://travis-ci.org/phillipcurl/ngx-contentful.svg?branch=master)](https://travis-ci.org/phillipcurl/ngx-contentful)
[![codecov](https://codecov.io/gh/phillipcurl/ngx-contentful/branch/master/graph/badge.svg)](https://codecov.io/gh/phillipcurl/ngx-contentful)
[![npm version](https://badge.fury.io/js/ngx-contentful.svg)](http://badge.fury.io/js/ngx-contentful)
[![devDependency Status](https://david-dm.org/phillipcurl/ngx-contentful/dev-status.svg)](https://david-dm.org/phillipcurl/ngx-contentful?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/phillipcurl/ngx-contentful.svg)](https://github.com/phillipcurl/ngx-contentful/issues)
[![GitHub stars](https://img.shields.io/github/stars/phillipcurl/ngx-contentful.svg)](https://github.com/phillipcurl/ngx-contentful/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/phillipcurl/ngx-contentful/master/LICENSE)

## Demo
https://phillipcurl.github.io/ngx-contentful/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ngx-contentful
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgxContentfulModule } from 'ngx-contentful';

@NgModule({
  imports: [
    NgxContentfulModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/phillipcurl/ngx-contentful/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-contentful/bundles/ngx-contentful.umd.js"></script>
<script>
    // everything is exported ngxContentful namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://phillipcurl.github.io/ngx-contentful/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/docs/install)
* Install local dev dependencies: `yarn` while current directory is this repo

### Development server
Run `yarn start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `yarn test` to run tests once or `yarn run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
yarn run release
```

## License

MIT
