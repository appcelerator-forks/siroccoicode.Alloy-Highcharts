function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId1 = [];
    $.__views.pie_chart = Alloy.createWidget("com.alco.highcharts", "widget", {
        id: "pie_chart"
    });
    __alloyId1.push($.__views.pie_chart.getViewEx({
        recurse: true
    }));
    $.__views.line_chart = Alloy.createWidget("com.alco.highcharts", "widget", {
        id: "line_chart"
    });
    __alloyId1.push($.__views.line_chart.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId0 = Ti.UI.createScrollableView({
        views: __alloyId1,
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.pie_chart.loadChart("PIE", {
        region: [ "Apples", "Oranges", "Pears", "Grapes", "Bananas" ],
        s1: [ 5, 3, 4, 7, 2 ],
        s2: [ 2, 7, 2, 2, 5 ],
        s3: [ 5, 1, 10, 6, 1 ]
    });
    $.line_chart.loadChart("LINE", {
        data: [ {
            name: "Data1",
            data: [ 150, 142, 138 ]
        }, {
            name: "Data2",
            data: [ 70, 78, 85 ]
        }, {
            name: "Data3",
            data: [ 121, 116, 101 ]
        } ],
        cat: [ "6/25/2014", "6/26/2014", "6/27/2014" ],
        title: "Chart Title Goes Here"
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;