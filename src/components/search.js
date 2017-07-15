angular.module('video-player')

.component('search', {
  bindings: {
    onsearch: '<',
    result: '<',
    click: '<'
  },
  templateUrl: 'src/templates/search.html'
})

.controller('searchCtrl', function() {
  this.inputVal = '';
});
