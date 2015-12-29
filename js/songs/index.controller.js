"use strict";

(function(){
  angular
    .module("songs")
    .controller("SongIndexController", [
      "SongFactory",
      "$state",
      ControllerFunction
    ]);

  function ControllerFunction(SongFactory, $state){
    this.songs = SongFactory.query();
    this.song = new SongFactory();
    this.create = function(){
      this.song.$save(function(){
        $state.go("songIndex", {}, {reload: true});
      });
    };
  }
})();
