export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('category', {
      url: '/category/:categoryId',
      component: 'category',
      params: {
        categoryId: 'websites'
      },
      resolve: {
        category($log, $transition$) {
          const params = $transition$.params();
          $log.log(params);
          return params.categoryId;
        }
      }
    })
    .state('new', {
      url: '/new',
      component: 'resourceCreate'
    });
}
