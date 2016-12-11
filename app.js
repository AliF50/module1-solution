(function () {
    'use strict';

    var app = angular.module('LunchCheck', []);
    app.controller('LunchCheckController', ['$scope', function ($scope) {

        $scope.list = null;
        $scope.message = null;

        $scope.Check = function () {
            if ($scope.list != null) { //Check to see if there are inputs in the textbox
                var numberOfCommas = $scope.list.split(',').length;
                var Inputs = $scope.list.split(',');

                for (var i = 0; i < Inputs.length; i++) {
                    //Checks to see if there is at least one non whitespace character or the length of the element isn't 0. Therefore, I don't count , , or ,, as an item
                    if (!(/\S/.test(Inputs[i])) || Inputs[i].length == 0) {
                        numberOfCommas--;
                    }
                }

                if (numberOfCommas > 3)
                    $scope.message = "Too much!"
                else
                    $scope.message = "Enjoy!"
            } else {
                $scope.message = "Please enter data first";
            }
            $scope.list = null;
        };

                }]);

})();