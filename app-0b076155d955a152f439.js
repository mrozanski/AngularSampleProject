webpackJsonp([0],[,,,function(e,t){},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Category={template:n(19),bindings:{category:"<"}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.initialCategory="websites",t.CategoryService=function(){function e(){r(this,e),this.categories={websites:{title:"Websites",id:"websites"},books:{title:"Books",id:"books"},podcasts:{title:"Podcasts",id:"podcasts"}}}return o(e,[{key:"getCategories",value:function(){return this.categories}},{key:"categoryExists",value:function(e){return this.categories[e]}}]),e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0,n(17);t.Header={template:n(20)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t,n,o){r(this,e),this.$log=t,this.$state=n,this.categoryService=o,this.displayNew=!1}return e.$inject=["$log","$state","categoryService"],o(e,[{key:"$onInit",value:function(){this.categoryList=this.categoryService.getCategories(),this.currentCategory=this.categoryList[this.category]}},{key:"navigateToNew",value:function(){this.$state.go("new")}},{key:"onResourceSaved",value:function(){this.displayNew=!1}}]),e}();t.MainSection={bindings:{category:"<"},template:n(21),controller:i}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.ResourceForm=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(3);var i=function(){function e(t,n){r(this,e),this.$log=n,this.resourceService=t,this.tempModel={}}return e.$inject=["resourceService","$log"],o(e,[{key:"$onInit",value:function(){angular.copy(this.resource,this.tempModel)}},{key:"saveItem",value:function(){this.resourceService.save(this.category,this.tempModel),this.onResourceSaved()}},{key:"deleteItem",value:function(e){this.$log.log(e),this.resourceService.deleteResource(this.category,e)}}]),e}();t.ResourceForm={template:n(22),controller:i,bindings:{resource:"<",category:"<",onResourceSaved:"&"}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.ResourceItem=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(3);var i=function(){function e(t,n){r(this,e),this.$log=n,this.resourceService=t,this.editable=!1,this.tempModel={}}return e.$inject=["resourceService","$log"],o(e,[{key:"$onInit",value:function(){angular.copy(this.resourceItem,this.tempModel)}},{key:"saveItem",value:function(){this.resourceService.save(this.category,this.tempModel)}}]),e}();t.ResourceItem={template:n(23),controller:i,bindings:{resourceItem:"<",category:"<"}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){r(this,e),this.resourceService=t}return e.$inject=["resourceService"],o(e,[{key:"$onInit",value:function(){this.resources=this.resourceService.getResources(this.category)}}]),e}();t.ResourceList={template:n(24),controller:i,bindings:{category:"<"}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.ResourceService=function(){function e(t){r(this,e),this.$log=t,this.vm={},this.vm.websites=[{id:0,title:"NPM JS",url:"https://www.npmjs.com",author:""},{id:1,title:"Fountain JS",url:"http://fountainjs.io",author:""}],this.vm.books=[{id:0,title:"Harry Potter and the Sorcerer's Stone",url:"",author:"J. K. Rowling"},{id:1,title:"One Hundred Years of Solitude",url:"https://www.barnesandnoble.com/w/one-hundred-years-of-solitude-gabriel-garc-a-m-rquez/1116668495",author:"Gabriel Garcia Marquez"}],this.vm.podcasts=[{id:0,title:"TED Radio Hour",url:"http://www.npr.org/podcasts/510298/ted-radio-hour",author:"NPR"},{id:1,title:"Note To Self",url:"",author:"Manoush Zomorodi"}]}return e.$inject=["$log"],o(e,[{key:"getResources",value:function(e){return this.vm[e]}},{key:"save",value:function(e,t){if(Object.prototype.hasOwnProperty.call(t,"id")){var n=this.vm[e].findIndex(function(e){return e.id===t.id});if(-1===n)throw new Error("Oh-Oh.. ID not found when trying to update resource");return void(this.vm[e][n]=t)}var r=0;0!==this.vm[e].length&&(r=Math.max.apply(Math,this.vm[e].map(function(e){return e.id})),r++),t.id=r,this.vm[e].push(t)}},{key:"deleteResource",value:function(e,t){var n=this.vm[e].findIndex(function(e){return e.id===t});this.vm[e].splice(n,1)}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.SideNav=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(18);var i=function(){function e(t){r(this,e),this.categoryService=t}return e.$inject=["categoryService"],o(e,[{key:"$onInit",value:function(){this.categories=this.categoryService.getCategories()}}]),e}();t.SideNav={template:n(25),controller:i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SideNavItem={template:n(26),bindings:{categoryItem:"<",categoryKey:"<"}}},function(e,t,n){"use strict";function r(e,t,n){n.html5Mode(!0).hashPrefix("!"),t.otherwise("/category/");e.state("category",{url:"/category/:categoryId",component:"category",params:{categoryId:"websites"},resolve:{category:["$log","$transition$","categoryService",function(e,t,n){var r=t.params();return n.categoryExists(r.categoryId)?r.categoryId:"websites"}]}})}r.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},,function(e,t){},function(e,t){},function(e,t){e.exports='<header-component></header-component>\n<div class="row">\n  <side-nav></side-nav>\n  <main-section category="$ctrl.category"></main-section>\n</div>\n'},function(e,t){e.exports='<header class="header row">\n  <div class="col-sm-12">\n    <h1>My Learning Resources</h1>\n  </div>\n</header>'},function(e,t){e.exports='<section class="col-xs-12 col-sm-7">\n  <h2>{{ $ctrl.currentCategory.title }}</h2>\n  <button\n      type="button"\n      class="btn btn-xs"\n      ng-class="{\'btn-default\': !$ctrl.displayNew, \'btn-danger\': $ctrl.displayNew}"\n      ng-click="$ctrl.displayNew = !$ctrl.displayNew">\n      <span class="glyphicon glyphicon-plus"></span>\n      &nbsp; \n      {{ $ctrl.displayNew ? \'Cancel\' : \'Add New\' }}\n    </button>\n  <resource-form\n    ng-if="$ctrl.displayNew"\n    category="$ctrl.currentCategory.id"\n    resource=""\n    on-resource-saved="$ctrl.onResourceSaved()"\n  ></resource-form>\n  <resource-list category="$ctrl.currentCategory.id"></resource-list>\n</section>'},function(e,t){e.exports='<form ng-submit="$ctrl.saveItem()" class="form-in-place">\n  <div class="form-group">\n    <label class="label-in-place" for="title">Title</label>\n    <input type="text" id="title" ng-model="$ctrl.tempModel.title" class="input-in-place"\n      required />\n  </div>\n  <div class="form-group">\n    <label class="label-in-place" for="url">URL</label>\n    <input type="text" id="url" ng-model="$ctrl.tempModel.url" class="input-in-place" />\n  </div>\n  <div class="form-group">\n    <label class="label-in-place" for="author">Author</label>\n    <input type="text" id="author" ng-model="$ctrl.tempModel.author" class="input-in-place" />\n  </div>\n  <div class="form-group">\n    <button\n      ng-if="$ctrl.tempModel.id >= 0"\n      class="btn btn-danger btn-xs"\n      ng-click="$ctrl.deleteItem($ctrl.tempModel.id)">\n      Delete resource\n    </button>\n    <input type="submit" class="btn btn-success btn-xs" value="Save" />\n  </div>\n</form>'},function(e,t){e.exports='<div class="panel panel-default resource-item">\n  <div class="panel-heading">\n    <h3 class="h4">{{ $ctrl.resourceItem.title }}</h3>\n  </div>\n  <div class="panel-body">\n    <p ng-show="$ctrl.resourceItem.author">\n      <strong>Author:</strong>\n      {{ $ctrl.resourceItem.author}}\n    </p>\n    <p ng-show="$ctrl.resourceItem.url">\n      <strong>URL:</strong>\n      <a\n        target="_blank"\n        href="{{ $ctrl.resourceItem.url }}"\n        title="Opens in new tab"\n        >\n       {{ $ctrl.resourceItem.url | limitTo: 40 }}{{ $ctrl.resourceItem.url.length > 40 ? \'...\' : \'\'}}\n        <span class="glyphicon glyphicon-new-window"></span\n      ></a>\n    </p>\n\n    <button\n      type="button"\n      class="btn btn-xs btn-make-editable"\n      ng-class="{\'btn-primary\': !$ctrl.editable, \'btn-danger\': $ctrl.editable}"\n      ng-click="$ctrl.editable = !$ctrl.editable">\n      <span class="glyphicon glyphicon-pencil"></span>\n      &nbsp; \n      {{ $ctrl.editable ? \'Cancel\' : \'Edit\' }}\n    </button>\n\n    <resource-form\n      ng-show="$ctrl.editable" category="$ctrl.category" resource="$ctrl.resourceItem"\n    ></resource-form>\n\n  </div>\n</div>\n'},function(e,t){e.exports='<resource-item\n  ng-repeat="resource in $ctrl.resources"\n  resource-item="resource"\n  category="$ctrl.category"\n></resource-item>\n'},function(e,t){e.exports='<section class="side-nav col-xs-12 col-sm-4">\n\n  <side-nav-item\n    ng-repeat="(categoryKey, categoryItem) in $ctrl.categories"\n    category-item="categoryItem"\n    category-key="categoryKey"\n  ></side-nav-item>\n\n</section>\n'},function(e,t){e.exports='<a class="btn btn-default nav-button"\n  ui-sref-active="btn-primary"\n  ui-sref="category({ categoryId: $ctrl.categoryKey })"\n  >{{ $ctrl.categoryItem.title }}</a>'},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),i=r(o);n(2);var c=n(7),a=n(13),s=n(14),u=n(5),l=n(6),d=n(8),f=n(11),p=n(10),v=n(9),g=n(12);n(1);var y=n(15),h=r(y);n(4),i.default.module("app",["ui.router"]).config(h.default).service("categoryService",l.CategoryService).service("resourceService",g.ResourceService).component("headerComponent",c.Header).component("sideNav",a.SideNav).component("sideNavItem",s.SideNavItem).component("category",u.Category).component("mainSection",d.MainSection).component("resourceItem",p.ResourceItem).component("resourceForm",v.ResourceForm).component("resourceList",f.ResourceList)}],[27]);