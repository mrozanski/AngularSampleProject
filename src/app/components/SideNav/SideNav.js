class SideNavController {
  /** @ngInject */
  constructor(categoryService) {
    this.categoryService = categoryService;
  }

  $onInit() {
    this.categories = this.categoryService.getCategories();
  }
}

export const SideNav = {
  template: require('./SideNav.html'),
  controller: SideNavController
};
