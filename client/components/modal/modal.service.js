'use strict';

angular.module('admissionsApp')
  .factory('Modal', function ($rootScope, $modal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope, modalClass) {
      var modalScope = $rootScope.$new();
      scope = scope || {};
      modalClass = modalClass || 'modal-default';

      angular.extend(modalScope, scope);

      return $modal.open({
        templateUrl: 'components/modal/modal.html',
        windowClass: modalClass,
        scope: modalScope
      });
    }

    // Public API here
    return {

      /* Confirmation modals */
      confirm: {

        /**
         * Create a function to open a correct confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} accept - callback, ran when correct is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */
        correct: function(accept) {
          accept = accept || angular.noop;

          /**
           * Open a correct confirmation modal
           * @param  {Object} data   - The user's answer object, whose properties are repeated over to display info
           * @param  {All}           - any additional args are passed staight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
                data = args.shift(),
                correctModal;

            correctModal = openModal({
              modal: {
                dismissable: true,
                title: 'Correct',
                data: data,
                buttons: [{
                  classes: 'btn-success',
                  text: 'Confirm',
                  click: function(e) {
                    correctModal.close(e);
                  }
                }]
              }
            }, 'modal-success');

            correctModal.result.then(function(event) {
              accept.apply(event, args);
            });
          };
        },

        /**
         * Create a function to open an incorrect confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} del - callback, ran when incorrect is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */
        incorrect: function(deny) {
          deny = deny || angular.noop;

          /**
           * Open a delete confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed staight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                deleteModal;

            deleteModal = openModal({
              modal: {
                dismissable: true,
                title: 'Incorrect',
                html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
              }
            }, 'modal-danger');

            deleteModal.result.then(function(event) {
              deny.apply(event, args);
            });
          };
        }

      }
    };
  });
