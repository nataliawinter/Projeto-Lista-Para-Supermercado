function Controller() {
    function SalvarDepartamento() {
        if ("" != $.txtDepartamento.value && null != $.txtDepartamento.value) {
            db.adicionarDepartamento({
                NomeDepartamento: $.txtDepartamento.value
            });
            loadData();
        } else alert("Por favor, escreva um departamento!");
    }
    function loadData() {
        var departamento = db.listarDepartamentos();
        $.table.setData(departamento);
    }
    function EditarDepartamentos() {
        $.table.addEventListener("click", selectRow);
    }
    function ExcluirDepartamento(departamento) {
        db.excluirDepartamentos({
            DepartamentoID: departamento
        });
    }
    function selectRow(e) {
        var dialog = Ti.UI.createAlertDialog({
            buttonNames: [ "Editar", "Deletar" ],
            title: "Escolha uma alternativa",
            Editar: 0,
            Deletar: 1
        });
        var idDepartamento = e.rowData.id;
        var textoDepartamento = e.rowData.title;
        alert(idDepartamento);
        dialog.addEventListener("click", function(botao) {
            if (botao.index === botao.source.Deletar) {
                ExcluirDepartamento(idDepartamento);
                alert("o botao de deletar foi clicado");
            }
            if (botao.index === botao.source.Editar) {
                var textField = Ti.UI.createTextField({
                    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
                    value: textoDepartamento,
                    id: idDepartamento,
                    top: 5,
                    left: 5,
                    width: Ti.UI.FILL,
                    height: 40
                });
                var dialogEditar = Ti.UI.createAlertDialog({
                    androidView: textField,
                    buttonNames: [ "confirm", "cancel" ],
                    title: "Editar Departamento",
                    confirm: 0,
                    cancel: 1
                });
                dialogEditar.addEventListener("click", function(botaoEditar) {
                    if (botaoEditar.index === botaoEditar.source.confirm) {
                        db.editarDepartamentos({
                            NomeDepartamento: textField.value,
                            DepartamentoID: idDepartamento
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
    $.__views.__alloyId0 = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Departamentos",
        top: "5dp",
        left: "5dp",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.txtDepartamento = Ti.UI.createTextField({
        id: "txtDepartamento",
        top: "5dp",
        left: "5dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        width: Ti.UI.FILL,
        right: "5dp",
        height: "40dp"
    });
    $.__views.__alloyId0.add($.__views.txtDepartamento);
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Salvar",
        top: "5dp",
        right: "5dp",
        left: "5dp",
        width: Ti.UI.FILL,
        height: "40dp",
        id: "__alloyId2"
    });
    $.__views.__alloyId0.add($.__views.__alloyId2);
    SalvarDepartamento ? $.__views.__alloyId2.addEventListener("click", SalvarDepartamento) : __defers["$.__views.__alloyId2!click!SalvarDepartamento"] = true;
    $.__views.table = Ti.UI.createTableView({
        color: "#000",
        id: "table"
    });
    $.__views.__alloyId0.add($.__views.table);
    $.__views.depTab = Ti.UI.createTab({
        window: $.__views.__alloyId0,
        title: "Dep.",
        id: "depTab"
    });
    $.__views.depTab && $.addTopLevelView($.__views.depTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var db = require("database");
    db.createDatabase();
    EditarDepartamentos();
    loadData();
    __defers["$.__views.__alloyId2!click!SalvarDepartamento"] && $.__views.__alloyId2.addEventListener("click", SalvarDepartamento);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;