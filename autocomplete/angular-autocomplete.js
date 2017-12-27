var app = angular.module("angularAutocomplete", []);
app.directive("autoComplete", function () {
    return {
        restrict: "E",
        scope: {
            ngPlaceholder: '@',
            ngMinchar: '@',
            ngAddnew: '@',
            ngSearchMethod: '&',
            ngKey: '=',
            ngValue: '=',
            ngSuggestionList: '=',
        },
        template: "<div class='angular-autocomplete'><input autocomplete='off' ng-keydown='inputKeyPress(event)' class='input-text' type='text' placeholder={{ngPlaceholder}} ng-change='textChanged()' ng-model='tempText'/><div class='suggestions'><div class='border'><div ng-repeat='match in ngSuggestionList' class='suggestion' ng-mouseover='suggestionHover($index)' ng-mouseleave='suggestionOut()' ng-class='{highlighted: highlighted==$index}' ng-click='selectSuggestion($index)'>{{match.value}}</div></div></div></div>",
        link: function (scope, element, attrs) {
            scope.tempText = scope.ngValue;
            scope.ngSuggestionList = [];
            scope.firstOne = {
                tempText: scope.tempText,
                value: scope.ngValue,
                key: scope.ngKey,
            };
            scope.textChanged = function () {
                if (scope.tempText.length >= scope.ngMinchar) {
                    scope.firstOne.tempText = scope.tempText;
                    scope.highlighted = -1;
                    scope.ngSearchMethod()(scope.tempText);
                } else {
                    scope.ngSuggestionList = [];
                }
            }
            scope.suggestionHover = function (index) {
                scope.changeHighlighted(index);
            }
            scope.suggestionOut = function () {
                scope.changeHighlighted(-1);
            }
            scope.selectSuggestion = function (index) {
                scope.ngValue = scope.ngSuggestionList[index].value;
                scope.ngKey = scope.ngSuggestionList[index].key;
                scope.tempText = scope.ngSuggestionList[index].value;
                scope.ngSuggestionList = [];
            }
            scope.changeHighlighted = function (index) {
                scope.highlighted = index;
                if (index == -1) {
                    scope.ngValue = scope.firstOne.value;
                    scope.ngKey = scope.firstOne.key;
                    scope.tempText = scope.firstOne.tempText;
                } else {
                    scope.ngValue = scope.ngSuggestionList[index].value;
                    scope.ngKey = scope.ngSuggestionList[index].key;
                    scope.tempText = scope.ngSuggestionList[index].value;
                }
            }
            scope.inputKeyPress = function () {
                var key = event.keyCode;
                switch (key) {
                    case 38:
                        if (scope.highlighted >= 0)
                            scope.changeHighlighted(scope.highlighted - 1);
                        break;
                    case 40:
                        if (scope.highlighted < scope.ngSuggestionList.length - 1)
                            scope.changeHighlighted(scope.highlighted + 1);
                        break;
                    case 13:
                        if (scope.highlighted > -1)
                            scope.selectSuggestion(scope.highlighted);
                        break;
                }
            }
        }
    }
});