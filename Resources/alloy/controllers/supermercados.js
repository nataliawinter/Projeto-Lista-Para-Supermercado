function Controller() {
    function SalvarSupermercado() {
        if ("" != $.txtSupermercado.value && null != $.txtSupermercado.value) {
            db.adicionarSupermercado({
                NomeSupermercado: $.txtSupermercado.value
            });
            loadData();
        } else alert("Por favor, escreva um supermercado!");
    }
    function loadData() {
        var supermercado = db.listarSupermercados();
        $.table.setData(supermercado);
    }
    function EditarSupermercados() {
        $.table.addEventListener("click", selectRow);
    }
    function ExcluirSupermercado(supermercado) {
        db.excluirSupermercados({
            SupermercadoID: supermercado
        });
    }
    function selectRow(e) {
        var dialog = Ti.UI.createAlertDialog({
            buttonNames: [ "Editar", "Deletar" ],
            title: "Escolha uma alternativa",
            Editar: 0,
            Deletar: 1
        });
        var idSupermercado = e.rowData.id;
        var textoSupermercado = e.rowData.title;
        dialog.addEventListener("click", function(botao) {
            if (botao.index === botao.source.Deletar) {
                ExcluirSupermercado(idSupermercado);
                alert("o botao de deletar foi clicado");
            }
            if (botao.index === botao.source.Editar) {
                var textField = Ti.UI.createTextField({
                    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
                    value: textoSupermercado,
                    id: idSupermercado,
                    top: 5,
                    left: 5,
                    width: Ti.UI.FILL,
                    height: 40
                });
                var dialogEditar = Ti.UI.createAlertDialog({
                    androidView: textField,
                    buttonNames: [ "confirm", "cancel" ],
                    title: "Editar Supermercado",
                    confirm: 0,
                    cancel: 1
                });
                dialogEditar.addEventListener("click", function(botaoEditar) {
                    if (botaoEditar.index === botaoEditar.source.confirm) {
                        db.editarSupermercados({
                            NomeSupermercado: textField.value,
                            SupermercadoID: idSupermercado
                        });
                        alert("Alterado com Sucesso");
                    }
                });
                dialogEditar.show();
            }
        });
        dialog.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId24 = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId24"
    });
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Supermercados",
        top: "5dp",
        left: "5dp",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.txtSupermercado = Ti.UI.createTextField({
        id: "txtSupermercado",
        top: "5dp",
        left: "5dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        width: Ti.UI.FILL,
        right: "5dp",
        height: "40dp"
    });
    $.__views.__alloyId24.add($.__views.txtSupermercado);
    $.__views.__alloyId26 = Ti.UI.createButton({
        title: "Salvar",
        top: "5dp",
        right: "5dp",
        left: "5dp",
        width: Ti.UI.FILL,
        height: "40dp",
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    SalvarSupermercado ? $.__views.__alloyId26.addEventListener("click", SalvarSupermercado) : __defers["$.__views.__alloyId26!click!SalvarSupermercado"] = true;
    $.__views.table = Ti.UI.createTableView({
        color: "#000",
        id: "table"
    });
    $.__views.__alloyId24.add($.__views.table);
    $.__views.superTab = Ti.UI.createTab({
        window: $.__views.__alloyId24,
        title: "Superm.",
        id: "superTab"
    });
    $.__views.superTab && $.addTopLevelView($.__views.superTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var db = require("database");
    db.createDatabase();
    EditarSupermercados();
    loadData();
    __defers["$.__views.__alloyId26!click!SalvarSupermercado"] && $.__views.__alloyId26.addEventListener("click", SalvarSupermercado);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;