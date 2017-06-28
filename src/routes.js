export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  // Default to category state
  $urlRouterProvider.otherwise('/category/');

  const defaultCategory = 'websites';

  $stateProvider
    .state('category', {
      url: '/category/:categoryId',
      component: 'category',
      params: {
        categoryId: defaultCategory
      },
      resolve: {
        category($log, $transition$, categoryService) {
          const params = $transition$.params();
          if (categoryService.categoryExists(params.categoryId)) {
            return params.categoryId;
          }
          return defaultCategory;
        }
      }
    });
}
