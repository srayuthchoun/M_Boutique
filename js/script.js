
var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('welcome', {
            url: '/welcome',
            templateUrl: 'templates/welcome.html',
        })

        .state('our_macarons', {
            url: '/our_macarons',
            templateUrl: 'templates/our_macarons.html',
        })

        .state('gifts_and_parties', {
            url: '/gifts_and_parties',
            templateUrl: 'templates/gifts_parties.html',
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
        })
});