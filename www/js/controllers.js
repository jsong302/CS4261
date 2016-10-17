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
    {title: 'Mobile Services Textbook',
    author: 'John Smith, Steve Jones'},
    {title: 'Guide to the BMC',
    author: 'John Jacboson'},
    {title: 'Information in the New Age',
    author: 'John Jones, Joseph Park'},
    {title: 'The Study of Mobile Apps',
    author: 'John Jones, Robert Paulson'}
  ];
})

.controller('SellerConfirmationCtrl', function($scope) {
  $scope.bookInfo = {
    course: 'CS 4261',
    instructor: 'William Eason',
    semester: 'Fall 2016',
    title: 'Mobile Services Textbook',
    author: 'John Smith, Steve Jones',
    price: 100.50
  };
})

.controller('BuyerSelectCourseCtrl', function($scope) {
  $scope.courses = [
    'EAS 1601',
    'ECE 2031',
    'CS 3251',
    'ISYE 3770',
    'CS 4261',
    'CS 4699'
  ];

})

.controller('BuyerSuggestedBooksCtrl', function($scope) {
  $scope.suggestedBooks = [
    {title: 'Mobile Services Textbook',
    author: 'John Smith, Steve Jones'},
    {title: 'Guide to the BMC',
    author: 'John Jacboson'},
    {title: 'Information in the New Age',
    author: 'John Jones, Joseph Park'},
    {title: 'The Study of Mobile Apps',
    author: 'John Jones, Robert Paulson'}
  ];
})

.controller('BuyerBookListCtrl', function($scope) {
  $scope.sellers = [
    {name: 'kin3',
    price: 100.50},
    {name: 'akim58',
    price: 200.75},
    {name: 'asmith600',
    price: 55.25}
  ];
});
