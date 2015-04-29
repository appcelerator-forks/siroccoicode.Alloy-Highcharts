function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "club.siroccoicode.highcharts/" + s : s.substring(0, index) + "/club.siroccoicode.highcharts/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
} ];