class MainSectionController {

  /** @ngInject */
  constructor($log, $state, categoryService) {
    this.$log = $log;
    this.$state = $state;
    this.categoryService = categoryService;
  }

  $onInit() {
    // Populate values for the view
    this.categoryList = this.categoryService.getCategories();
    this.currentCategory = this.categoryList[this.category];
  }

  navigateToNew() {
    this.$state.go('new');
  }

}

export const MainSection = {
  bindings: {
    category: '<'
  },
  template: require('./MainSection.html'),
  controller: MainSectionController
};
