import './Resource.scss';

class ResourceFormController {
  /** @ngInject */
  constructor(resourceService, $log) {
    this.$log = $log;
    this.resourceService = resourceService;
    this.tempModel = {};
  }

  $onInit() {
    // Save a copy of the item model for inkine editing
    // This allows to apply the changes only if user saves
    // and revert if user cancels
    angular.copy(this.resource, this.tempModel);
  }

  saveItem() {
    this.resourceService.save(this.category, this.tempModel);
    this.onResourceSaved();
  }

}

export const ResourceForm = {
  template: require('./ResourceForm.html'),
  controller: ResourceFormController,
  bindings: {
    resource: '<',
    category: '<',
    onResourceSaved: '&'
  }
};
