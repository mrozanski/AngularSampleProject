import {initialCategory} from '../category/category';

class AppController {
  constructor($log) {
    this.category = initialCategory;
    // this.currentCategory = {
    //   title: 'Cat 1'
    // };
    $log.log(this.category);
  }
}

export const App = {
  template: require('./App.html'),
  controller: AppController
};
