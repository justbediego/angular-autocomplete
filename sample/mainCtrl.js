angular.module("autocompleteDemo").controller('mainCtrl', function ($scope) {
    var data = [
        {
            key: 12,
            value: 'first test'
        },
        {
            key: 13,
            value: 'first love'
        },
        {
            key: 14,
            value: 'first date'
        },
        {
            key: 15,
            value: 'first breakup'
        },
        {
            key: 16,
            value: 'first time'
        },
        {
            key: 17,
            value: 'first name'
        },
        {
            key: 18,
            value: 'first take'
        },
    ]
    $scope.DemoMethod = function (phrase) {
        return data.filter(o => o.value.indexOf(phrase) == 0);
    };
    $scope.Key = 12;
    $scope.Value = "MASHTI OSKOL";
});