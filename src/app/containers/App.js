import {initialCategory} from '../components/Category/CategoryService';

class AppController {
  constructor() {
    this.category = initialCategory;
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
