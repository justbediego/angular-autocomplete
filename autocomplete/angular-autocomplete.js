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
        template: "<div class='angular-autocomplete'><input type='text' style='height: {{ngHeight}}px; width: {{ngWidth}}px; direction: {{ngDirection}}; font-family:{{ngFontfamily}}; font-size:{{ngFontsize}}' placeholder={{ngPlaceholder}} ng-change='textChanged()' ng-model='tempText'/><div class='suggestions' style='width:{{ngWidth}}px;'><div class='border'><div ng-repeat='match in matches' class='suggestion' style='height:{{ngHeight}}px; line-height:{{ngHeight}}px; direction: {{ngDirection}}; font-family:{{ngFontfamily}}; font-size:{{ngFontsize}}'>{{match.value}}</div></div></div></div>",
        link: function (scope, element, attrs) {
            scope.tempText = scope.ngValue;
            scope.matches = [];
            scope.textChanged = function () {
                if (scope.tempText.length >= scope.ngMinchar) {
                    scope.matches = scope.ngSearchMethod()(scope.tempText);
                } else {
                    scope.matches = [];
                }
            }
        }
    }




});