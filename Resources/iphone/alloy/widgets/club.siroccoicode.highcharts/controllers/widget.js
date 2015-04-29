function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "club.siroccoicode.highcharts/" + s : s.substring(0, index) + "/club.siroccoicode.highcharts/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function loadChart(type, data) {
        var templateURL, plotChart;
        switch (type) {
          case "PIE":
            templateURL = WPATH("/html/pie.html");
            plotChart = "plotChart(" + JSON.stringify(data.region) + "," + JSON.stringify(data.s1) + "," + JSON.stringify(data.s2) + "," + JSON.stringify(data.s3) + ")";
            break;

          case "LINE":
            templateURL = WPATH("/html/line.html");
            plotChart = "plotChart(" + JSON.stringify(data.data) + "," + JSON.stringify(data.cat) + "," + JSON.stringify(data.title) + ")";
        }
        $.chartWebView.url = templateURL;
        $.chartWebView.addEventListener("load", function() {
            Ti.API.info("chartWebView ready");
            $.chartWebView.evalJS(plotChart);
        });
    }
    new (require("alloy/widget"))("club.siroccoicode.highcharts");
    this.__widgetId = "club.siroccoicode.highcharts";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.chartWebView = Ti.UI.createWebView({
        id: "chartWebView"
    });
    $.__views.chartWebView && $.addTopLevelView($.__views.chartWebView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.loadChart = loadChart;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;