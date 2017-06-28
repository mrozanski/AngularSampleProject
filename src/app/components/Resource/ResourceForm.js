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

    this.$log.log(' FORM! ');
    this.$log.log(this.category);
    this.$log.log(this.resource);
  }

  saveItem() {
    this.resourceService.save(this.category, this.tempModel);
  }

}

export const ResourceForm = {
  template: require('./ResourceForm.html'),
  controller: ResourceFormController,
  bindings: {
    resource: '<',
    category: '<'
  }
};
