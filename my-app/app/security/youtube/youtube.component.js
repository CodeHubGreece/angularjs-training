(function() {
    'use strict';

    angular
        .module('myApp.security')
        .component('youtubeCmp', {
            templateUrl: 'app/security/youtube/youtube.component.html',
            controller: YoutubeController
        });

    YoutubeController.$inject = ['$sce'];

    function YoutubeController($sce) {
        const $ctrl = this;
        $ctrl.videoId;

        $ctrl.getVideo = () => {
            return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + $ctrl.videoId);
        }
    }
})();