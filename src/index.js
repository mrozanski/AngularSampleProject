import angular from 'angular';
// import 'bootstrap/dist/css/bootstrap.min.css';

import {CategoryService} from './app/category/category';
import {App} from './app/containers/App';
import {Header} from './app/components/Header/Header';
import {SideNav} from './app/components/SideNav/SideNav';
import {MainSection} from './app/components/MainSection/MainSection';

import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('categoryService', CategoryService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('sideNav', SideNav)
  .component('mainSection', MainSection);
