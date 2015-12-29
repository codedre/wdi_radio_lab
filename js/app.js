"use strict";

(function(){
  angular
    .module("radioapp", [
      "ui.router",
      "songs"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ])
    .config([
      "$sceDelegateProvider",
      DelegateFunction
    ]);

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("songIndex", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongIndexController",
        controllerAs: "SongIndexViewModel"
      })
      .state("songShow", {
        url: "/songs/:id",
        templateUrl: "js/songs/show.html",
        controller: "SongShowController",
        controllerAs: "SongShowViewModel"
      });
  }
  
  // used to get access to apple preview audio tracks
  function DelegateFunction($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      "self",
      "http://a*.phobos.apple.com/**"
    ]);
  }
})();
