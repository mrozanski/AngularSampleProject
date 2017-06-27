import './Resource.scss';

class ResourceItemController {
  /** @ngInject */
  constructor(resourceService, $log) {
    this.$log = $log;
    this.resourceService = resourceService;
    this.editable = false;
    this.tempModel = {};
  }

  $onInit() {
    // Save a copy of the item model for inkine editing
    // This allows to apply the changes only if user saves
    // and revert if user cancels
    angular.copy(this.resourceItem, this.tempModel);
  }

  saveItem() {
    this.resourceService.save(this.category, this.tempModel);
  }

}

export const ResourceItem = {
  template: require('./ResourceItem.html'),
  controller: ResourceItemController,
  bindings: {
    resourceItem: '<',
    category: '<'
  }
};
