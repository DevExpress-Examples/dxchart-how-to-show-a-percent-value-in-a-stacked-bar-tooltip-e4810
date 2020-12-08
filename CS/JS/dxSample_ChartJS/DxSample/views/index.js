DxSample.Index = function (params) {
    var viewModel = {
        data: [
             { arg: 'a', first: 5, second: 6, total: 11 },
             { arg: 'b', first: 3, second: 4, total: 7 },
             { arg: 'c', first: 4, second: 8, total: 12 },
        ],

        viewShown: function () {
            $("#chartContainer").dxChart({
                dataSource: viewModel.data,
                commonSeriesSettings: {
                    type: 'stackedbar',
                    tagField: 'total',
                },
                series: [{
                    valueField: 'first',

                }, {
                    valueField: 'second'
                }],
                tooltip: {
                    enabled: true,
                    customizeText: function (ev) {
                        return "Total: " + this.point.tag + "<br/>Percentage: "
                        + Math.round(this.value / this.point.tag * 100) + "%";
                    }
                }
            });
        }
    };
    return viewModel;
};