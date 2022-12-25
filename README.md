[@aureooms/js-graph-traversal](https://make-github-pseudonymous-again.github.io/js-graph-traversal)
==

Graph traversal code bricks for JavaScript

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-graph-traversal.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-graph-traversal/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-graph-traversal.svg)](https://www.npmjs.org/package/@aureooms/js-graph-traversal)
[![Build](https://img.shields.io/travis/make-github-pseudonymous-again/js-graph-traversal/main.svg)](https://travis-ci.org/make-github-pseudonymous-again/js-graph-traversal/branches)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-graph-traversal.svg)](https://david-dm.org/make-github-pseudonymous-again/js-graph-traversal)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-graph-traversal.svg)](https://david-dm.org/make-github-pseudonymous-again/js-graph-traversal?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-graph-traversal.svg)](https://github.com/make-github-pseudonymous-again/js-graph-traversal/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-graph-traversal.svg)](https://www.npmjs.org/package/@aureooms/js-graph-traversal)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-graph-traversal.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-graph-traversal/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-graph-traversal.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-graph-traversal/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-graph-traversal/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-graph-traversal)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-graph-traversal.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-graph-traversal/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-graph-traversal//badge.svg)](https://make-github-pseudonymous-again.github.io/js-graph-traversal//source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-graph-traversal)](https://bundlephobia.com/result?p=@aureooms/js-graph-traversal)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-graph-traversal
# or
jspm install npm:@aureooms/js-graph-traversal
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-graph-traversal
```

### bower
```terminal
bower install @aureooms/js-graph-traversal
```

### ender
```terminal
ender add @aureooms/js-graph-traversal
```

### jam
```terminal
jam install @aureooms/js-graph-traversal
```

### spm
```terminal
spm install @aureooms/js-graph-traversal --save
```

### npm
```terminal
npm install @aureooms/js-graph-traversal --save
```

## Require
### jspm
```js
let graphtraversal = require( "github:aureooms/js-graph-traversal" ) ;
// or
import graphtraversal from '@aureooms/js-graph-traversal' ;
```
### duo
```js
let graphtraversal = require( "aureooms/js-graph-traversal" ) ;
```

### component, ender, spm, npm
```js
let graphtraversal = require( "@aureooms/js-graph-traversal" ) ;
```

### bower
The script tag exposes the global variable `graphtraversal`.
```html
<script src="bower_components/@aureooms/js-graph-traversal/js/dist/graph-traversal.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
```require( [ "@aureooms/js-graph-traversal" ] , function ( graphtraversal ) { ... } ) ;
