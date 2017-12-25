var app = angular.module("angularAutocomplete", []);
app.directive("autoComplete", function () {
    return {
        restrict: "E",
        scope: {
            ngHeight: '@',
            ngWidth: '@',
            ngPlaceholder: '@',
            ngDirection: '@',
            ngFontfamily: '@',
            ngFontsize: '@',
            ngMinchar: '@',
            ngAddnew: '@',
            ngSearchMethod: '&',
            ngKey: '=',
            ngValue: '='
        },
        template: "<input type='text' style='height: {{ngHeight}}; width: {{ngWidth}}; direction: {{ngDirection}}; font-family:{{ngFontfamily}}; font-size:{{ngFontsize}}' placeholder={{ngPlaceholder}} ng-change='textChanged()' ng-model='tempText'/>",
        link: function (scope, element, attrs) {
            scope.tempText = scope.ngValue;
            scope.textChanged = function () {

            }
        }
    }




});