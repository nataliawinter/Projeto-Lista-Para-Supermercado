function Controller() {
    function SalvarMarca() {
        if ("" != $.txtMarca.value && null != $.txtMarca.value) {
            db.adicionarMarca({
                NomeMarca: $.txtMarca.value
            });
            loadData();
        } else alert("Por favor, escreva uma marca!");
    }
    function loadData() {
        var marca = db.listarMarcas();
        $.table.setData(marca);
    }
    function EditarMarcas() {
        $.table.addEventListener("click", selectRow);
    }
    function ExcluirMarca(marca) {
        db.excluirMarca({
            MarcaID: marca
        });
    }
    function selectRow(e) {
        var dialog = Ti.UI.createAlertDialog({
            buttonNames: [ "Editar", "Deletar" ],
            title: "Escolha uma alternativa",
            Editar: 0,
            Deletar: 1
        });
        var idMarca = e.rowData.id;
        var textoMarca = e.rowData.title;
        dialog.addEventListener("click", function(botao) {
            if (botao.index === botao.source.Deletar) {
                ExcluirMarca(idMarca);
                alert("A marca foi excluida");
            }
            if (botao.index === botao.source.Editar) {
                var textField = Ti.UI.createTextField({
                    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
                    value: textoMarca,
                    id: idMarca,
                    top: 5,
                    left: 5,
                    width: Ti.UI.FILL,
                    height: 40
                });
                var dialogEditar = Ti.UI.createAlertDialog({
                    androidView: textField,
                    buttonNames: [ "confirm", "cancel" ],
                    title: "Editar Marca",
                    confirm: 0,
                    cancel: 1
                });
                dialogEditar.addEventListener("click", function(botaoEditar) {
                    if (botaoEditar.index === botaoEditar.source.confirm) {
                        db.editarDepartamentos({
                            NomeMarca: textField.value,
                            MarcaID: idMarca
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
    $.__views.__alloyId17 = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId17"
    });
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Marcas",
        top: "5dp",
        left: "5dp",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.txtMarca = Ti.UI.createTextField({
        id: "txtMarca",
        top: "5dp",
        left: "5dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        width: Ti.UI.FILL,
        right: "5dp",
        height: "40dp"
    });
    $.__views.__alloyId17.add($.__views.txtMarca);
    $.__views.__alloyId19 = Ti.UI.createButton({
        title: "Salvar",
        top: "5dp",
        right: "5dp",
        left: "5dp",
        width: Ti.UI.FILL,
        height: "40dp",
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    SalvarMarca ? $.__views.__alloyId19.addEventListener("click", SalvarMarca) : __defers["$.__views.__alloyId19!click!SalvarMarca"] = true;
    $.__views.table = Ti.UI.createTableView({
        color: "#000",
        id: "table"
    });
    $.__views.__alloyId17.add($.__views.table);
    $.__views.marcaTab = Ti.UI.createTab({
        window: $.__views.__alloyId17,
        title: "Marca",
        id: "marcaTab"
    });
    $.__views.marcaTab && $.addTopLevelView($.__views.marcaTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var db = require("database");
    db.createDatabase();
    EditarMarcas();
    loadData();
    __defers["$.__views.__alloyId19!click!SalvarMarca"] && $.__views.__alloyId19.addEventListener("click", SalvarMarca);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;