﻿/// <reference path="../_ref.ts" />
module Estimator {
    "use strict";

    export class TemplateModalController {

        // protect for minification, must match contructor signiture.
        static $inject = [
            '$scope',
            '$modalInstance',
            'items'
        ];

        constructor($scope, $modalInstance, items : ITemplate[]) {
            // assign vm to controller
            $scope.viewModel = this;
            var self = this;

            self.$modalInstance = $modalInstance;
            self.items = items;
        }

        $modalInstance: any;
        items: ITemplate[];
        selected: ITemplate;

        select(){
            var self = this;
            self.$modalInstance.close(self.selected);

        }

        cancel() {
            var self = this;
            self.$modalInstance.dismiss('cancel');
        }
    }

    // register controller
    angular.module(Estimator.applicationName)
        .controller('templateModalController',
        [
            '$scope',
            '$modalInstance',
            'items',
            TemplateModalController
        ]);
}