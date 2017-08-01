function Controller() {
    function doClick() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        height: "100%"
    });
    $.__views.__alloyId9 = Ti.UI.createView({
        layout: "horizontal",
        id: "__alloyId9"
    });
    $.__views.win.add($.__views.__alloyId9);
    $.__views.inputbar = Ti.UI.createView({
        id: "inputbar",
        top: "0",
        width: "100%"
    });
    $.__views.__alloyId9.add($.__views.inputbar);
    $.__views.title = Ti.UI.createLabel({
        text: "TEST APP",
        id: "title"
    });
    $.__views.inputbar.add($.__views.title);
    $.__views.input = Ti.UI.createView({
        id: "input",
        top: "0",
        layout: "horizontal",
        width: "100%"
    });
    $.__views.__alloyId9.add($.__views.input);
    $.__views.__alloyId10 = Ti.UI.createView({
        layout: "horizontal",
        width: "30%",
        id: "__alloyId10"
    });
    $.__views.input.add($.__views.__alloyId10);
    $.__views.label = Ti.UI.createLabel({
        text: "Some Field1:",
        id: "label"
    });
    $.__views.__alloyId10.add($.__views.label);
    $.__views.someFld1 = Ti.UI.createTextField({
        id: "someFld1"
    });
    $.__views.__alloyId10.add($.__views.someFld1);
    $.__views.__alloyId11 = Ti.UI.createView({
        layout: "horizontal",
        width: "37%",
        id: "__alloyId11"
    });
    $.__views.input.add($.__views.__alloyId11);
    $.__views.label3 = Ti.UI.createLabel({
        text: "Some Field2:",
        id: "label3"
    });
    $.__views.__alloyId11.add($.__views.label3);
    $.__views.someFld2 = Ti.UI.createTextField({
        id: "someFld2"
    });
    $.__views.__alloyId11.add($.__views.someFld2);
    $.__views.__alloyId12 = Ti.UI.createView({
        layout: "horizontal",
        width: "15%",
        id: "__alloyId12"
    });
    $.__views.input.add($.__views.__alloyId12);
    $.__views.label4 = Ti.UI.createLabel({
        text: "Some Field3:",
        id: "label4"
    });
    $.__views.__alloyId12.add($.__views.label4);
    $.__views.someFld3 = Ti.UI.createTextField({
        id: "someFld3"
    });
    $.__views.__alloyId12.add($.__views.someFld3);
    $.__views.sfb = Ti.UI.createView({
        layout: "horizontal",
        width: "17%",
        id: "sfb"
    });
    $.__views.input.add($.__views.sfb);
    $.__views.search_btn = Ti.UI.createButton({
        id: "search_btn"
    });
    $.__views.sfb.add($.__views.search_btn);
    doClick ? $.__views.search_btn.addEventListener("click", doClick) : __defers["$.__views.search_btn!click!doClick"] = true;
    $.__views.pView = Ti.UI.createView({
        id: "pView",
        layout: "vertical"
    });
    $.__views.__alloyId9.add($.__views.pView);
    $.__views.table = Ti.UI.createTableView({
        id: "table",
        top: "2"
    });
    $.__views.pView.add($.__views.table);
    $.__views.availView = Ti.UI.createView({
        id: "availView",
        visible: "false",
        layout: "horizontal",
        height: "99%",
        width: "100%"
    });
    $.__views.__alloyId9.add($.__views.availView);
    var __alloyId13 = [];
    $.__views.mapview = Ti.Map.createView({
        annotations: __alloyId13,
        ns: Ti.Map,
        id: "mapview",
        width: "61%",
        height: "100%",
        userLocation: "false"
    });
    $.__views.availView.add($.__views.mapview);
    $.__views.plantTable = Ti.UI.createTableView({
        id: "plantTable",
        width: "39%"
    });
    $.__views.availView.add($.__views.plantTable);
    $.__views.listaTab = Ti.UI.createTab({
        window: $.__views.win,
        title: "Lista",
        id: "listaTab"
    });
    $.__views.listaTab && $.addTopLevelView($.__views.listaTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.search_btn!click!doClick"] && $.__views.search_btn.addEventListener("click", doClick);
    __defers["$.__views.search_btn!click!doClick"] && $.__views.search_btn.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;