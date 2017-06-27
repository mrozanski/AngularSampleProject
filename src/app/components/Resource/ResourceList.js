class ResourceListController {
  /** @ngInject */
  constructor(resourceService) {
    this.resourceService = resourceService;
  }

  $onInit() {
    this.resources = this.resourceService.getResources(this.category);
  }
}

export const ResourceList = {
  template: require('./ResourceList.html'),
  controller: ResourceListController,
  bindings: {
    category: '<'
  }
};
