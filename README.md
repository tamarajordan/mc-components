# MasterClass Components

[![NPM version](https://img.shields.io/npm/v/mc-components.svg?style=flat)](https://npmjs.org/package/mc-components)

## Installation
`yarn add mc-components` or `npm install mc-components --save`

## Usage

- Import MasterClass Components Stylesheet in your styles.scss file
```scss
@import '../node_modules/mc-components/lib/styles/index';
```
- Import a component
```javascript
import { Button } from 'mc-components'

const Container = () =>
  <Button primary>Hello</Button>
```
