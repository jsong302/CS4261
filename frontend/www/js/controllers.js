angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SellerSuggestedBooksCtrl', function($scope) {
  $scope.suggestedBooks = [
    {title: 'The 3G IP Multimedia Subsystem (IMS): Merging the Internet and the Cellular Worlds',
    author: 'Gonzalo Camarillo, Miguel-Angel Garcia-Martin'},
    {title: 'The IMS: IP Multimedia Concepts and Services',
    author: 'Miikka Poikselka, Aki Niemi, Hisham Khartabil, Georg Mayer'}
  ];
})

.controller('SellerConfirmationCtrl', function($scope) {
  $scope.bookInfo = {
    course: 'CS 4261',
    instructor: 'William Eason',
    semester: 'Fall 2016',
    title: 'The 3G IP Multimedia Subsystem (IMS): Merging the Internet and the Cellular Worlds',
    author: 'Gonzalo Camarillo, Miguel-Angel Garcia-Martin',
    price: 62.63
  };
})

.controller('BuyerSelectCourseCtrl', function($scope) {
  $scope.courses = [
    'CS 4261',
    'CS 4641',
    'CS 3312',
    'CS 4001',
    'CS 3790'
  ];
})

.controller('BuyerSuggestedBooksCtrl', function($scope) {
  $scope.suggestedBooks = [
    {title: 'The 3G IP Multimedia Subsystem (IMS): Merging the Internet and the Cellular Worlds',
    author: 'Gonzalo Camarillo, Miguel-Angel Garcia-Martin'},
    {title: 'The IMS: IP Multimedia Concepts and Services',
    author: 'Miikka Poikselka, Aki Niemi, Hisham Khartabil, Georg Mayer'}
  ];
})

.controller('BuyerBookListCtrl', function($scope) {
  $scope.sellers = [
    {name: 'Yvonne',
    price: 20},
    {name: 'Kelly',
    price: 20},
    {name: 'Alex',
    price: 20},
    {name: 'Josh',
    price: 20}
  ];
});
