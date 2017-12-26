angular.module("autocompleteDemo").controller('mainCtrl', function ($scope) {
    var data = [
        {
            key: 12,
            value: 'First Test'
        },
        {
            key: 13,
            value: 'First Love'
        },
        {
            key: 14,
            value: 'First Date'
        },
        {
            key: 15,
            value: 'First Breakup'
        },
        {
            key: 16,
            value: 'First Time'
        },
        {
            key: 17,
            value: 'First Name'
        },
        {
            key: 18,
            value: 'First Test'
        },
    ]
    $scope.DemoMethod = function (phrase) {
        return data.filter(o => o.value.indexOf(phrase) == 0);
    };
    $scope.Key = 12;
    $scope.Value = "MASHTI OSKOL";
});