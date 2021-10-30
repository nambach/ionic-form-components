# ionic-form-components

[![npm version](https://badge.fury.io/js/ionic-form-components.svg)](https://badge.fury.io/js/ionic-form-components)

Simple Ionic components for building mobile form.

## Demo

Multiple options select
<p align="center">
<img src="/wiki/images/gif/multiple-select.gif" height="500" />
</p>

## Setup

### 1. Installation

```
npm i ionic-form-components
```
or 
```
yarn add ionic-form-components
```

### 2. Import modules

```ts
import {
  IonicFormModule,
  IonicFormViewModule,
  IonicFormPipesModule
} from 'ionic-form-components';

@NgModule({
  imports: [
    ...
    IonicFormModule,
    IonicFormViewModule,
    IonicFormPipesModule
  ],
  ...
})
export class SomePageModule {}
```

## Notes

Support:
- Angular 12.1.0 +
- Ionic 5.0.0 +

## License

Released under [MIT license](https://opensource.org/licenses/MIT).
