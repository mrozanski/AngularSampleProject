import angular from 'angular';
import 'bootstrap-css-only/css/bootstrap.min.css';

import {App} from './app/containers/App';
import {Header} from './app/components/Header/Header';
import {SideNav} from './app/components/SideNav/SideNav';
import {SideNavItem} from './app/components/SideNav/SideNavItem';
import {Category} from './app/components/Category/Category';
import {CategoryService} from './app/components/Category/CategoryService';
import {MainSection} from './app/components/MainSection/MainSection';
import {ResourceList} from './app/components/Resource/ResourceList';
import {ResourceItem} from './app/components/Resource/ResourceItem';
import {ResourceCreate} from './app/components/Resource/ResourceCreate';
import {ResourceService} from './app/components/Resource/ResourceService';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('categoryService', CategoryService)
  .service('resourceService', ResourceService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('sideNav', SideNav)
  .component('sideNavItem', SideNavItem)
  .component('category', Category)
  .component('mainSection', MainSection)
  .component('resourceItem', ResourceItem)
  .component('resourceCreate', ResourceCreate)
  .component('resourceList', ResourceList);
