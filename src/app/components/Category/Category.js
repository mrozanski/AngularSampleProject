class CategoryController {
  /** @ngInject */
  // constructor($log) {
  //   this.$log = $log;
  // }
}

export const Category = {
  template: require('./Category.html'),
  controller: CategoryController,
  bindings: {
    category: '<'
  }
};
