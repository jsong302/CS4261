// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.sell', {
      url: '/sell',
      views: {
        'menuContent': {
          templateUrl: 'templates/sell.html'
        }
      }
    })
  .state('app.request', {
      url: '/request',
      views: {
        'menuContent': {
          templateUrl: 'templates/request.html'
        }
      }
    })

  .state('app.selectRole', {
    url: '/selectRole',
    views: {
      'menuContent': {
        templateUrl: 'templates/select_role.html'
      }
    }
  })

  .state('app.sellerClassInfo', {
    url: '/sellerClassInfo',
    views: {
      'menuContent': {
        templateUrl: 'templates/seller_class_info.html'
      }
    }
  })

  .state('app.sellerSuggestedBooks', {
    url: '/sellerSuggestedBooks',
    views: {
      'menuContent': {
        templateUrl: 'templates/seller_suggested_books.html',
        controller: 'SellerSuggestedBooksCtrl'
      }
    }
  })

  .state('app.sellerSetPrice', {
    url: '/sellerSetPrice',
    views: {
      'menuContent': {
        templateUrl: 'templates/seller_set_price.html'
      }
    }
  })

  .state('app.sellerConfirmation', {
    url: '/sellerConfirmation',
    views: {
      'menuContent': {
        templateUrl: 'templates/seller_confirmation.html',
        controller: 'SellerConfirmationCtrl'
      }
    }
  })

  .state('app.buyerSelectCourse', {
    url: '/buyerSelectCourse',
    views: {
      'menuContent': {
        templateUrl: 'templates/buyer_select_course.html',
        controller: 'SellerConfirmationCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/selectRole');
});
