# ionic-form-components

[![npm version](https://badge.fury.io/js/ionic-form-components.svg)](https://badge.fury.io/js/ionic-form-components)

Simple Ionic components for building mobile form.

## Demo

Pull this repo, run `npm i` and then `npm start` and browse `localhost:4200` to view the sample components.

<p align="center">
<img src="/wiki/images/gif/full.gif" height="500" />
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

Modify the page's module that needs to use components as below.

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

### 3. Import styles

Add this import statement in your `global.scss` file.

```scss
@import "~ionic-form-components/src/styles/modal.css";
```

## Notes

Support:
- Angular 12.0.0 +
- Ionic 5.0.0 +

## License

Released under [MIT license](https://opensource.org/licenses/MIT).
