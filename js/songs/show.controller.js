"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongShowController", [
      "SongFactory",
      "$stateParams",
      "$state",
      ControllerFunction
    ]);

  function ControllerFunction(SongFactory, $stateParams, $state){
    this.song = SongFactory.get({id: $stateParams.id});
    this.delete = function(){
      this.song.$delete({id: $stateParams.id}, function(){
        $state.go("songIndex", {reload: true});
      });
    };
    this.update = function(){
      this.song.$update({id: $stateParams.id}, function(){
        $state.go("songIndex", {reload: true});
      });
    };
  }

})();
