import {initialCategory} from '../category/category';

class AppController {
  constructor() {
    this.category = initialCategory;
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
