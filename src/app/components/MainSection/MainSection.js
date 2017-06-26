class MainSectionController {

  /** @ngInject */
  constructor($log, categoryService) {
    this.$log = $log;
    this.categoryService = categoryService;
  }

  $onInit() {
    // Populate values for the view
    this.categoryList = this.categoryService.getCategories();
    this.currentCategory = this.categoryList[this.category];
  }

}

export const MainSection = {
  bindings: {
    category: '<'
  },
  template: require('./MainSection.html'),
  controller: MainSectionController
};
