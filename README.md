[@aureooms/js-graph-traversal](https://aureooms.github.io/js-graph-traversal)
==

Graph traversal code bricks for JavaScript

[![License](https://img.shields.io/github/license/aureooms/js-graph-traversal.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-graph-traversal/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@aureooms/js-graph-traversal.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-traversal)
[![Bower version](https://img.shields.io/bower/v/@aureooms/js-graph-traversal.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-graph-traversal)
[![Build Status](https://img.shields.io/travis/aureooms/js-graph-traversal.svg?style=flat)](https://travis-ci.org/aureooms/js-graph-traversal)
[![Coverage Status](https://img.shields.io/coveralls/aureooms/js-graph-traversal.svg?style=flat)](https://coveralls.io/r/aureooms/js-graph-traversal)
[![Dependencies Status](https://img.shields.io/david/aureooms/js-graph-traversal.svg?style=flat)](https://david-dm.org/aureooms/js-graph-traversal#info=dependencies)
[![devDependencies Status](https://img.shields.io/david/dev/aureooms/js-graph-traversal.svg?style=flat)](https://david-dm.org/aureooms/js-graph-traversal#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/aureooms/js-graph-traversal.svg?style=flat)](https://codeclimate.com/github/aureooms/js-graph-traversal)
[![NPM downloads per month](https://img.shields.io/npm/dm/@aureooms/js-graph-traversal.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-graph-traversal)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-graph-traversal.svg?style=flat)](https://github.com/aureooms/js-graph-traversal/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-graph-traversal.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-graph-traversal)

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
require( [ "@aureooms/js-graph-traversal" ] , function ( graphtraversal ) { ... } ) ;
```