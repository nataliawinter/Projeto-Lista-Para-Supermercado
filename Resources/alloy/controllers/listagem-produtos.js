function Controller() {
    function loadData() {
        var produto = db.listarprodutos();
        $.table.setData(produto);
    }
    function clickNovoProduto() {
        var produtosController = Alloy.createController("produtos");
        produtosController.getView().open();
    }
    function EditarProdutos() {
        $.table.addEventListener("click", selectRow);
    }
    function ExcluirProduto(produto) {
        db.excluirProdutos({
            ProdutoID: produto
        });
    }
    function selectRow(e) {
        var dialog = Ti.UI.createAlertDialog({
            buttonNames: [ "Editar", "Deletar" ],
            title: "Escolha uma alternativa",
            Editar: 0,
            Deletar: 1
        });
        var idProduto = e.rowData.id;
        var textoProduto = e.rowData.title;
        dialog.addEventListener("click", function(botao) {
            if (botao.index === botao.source.Deletar) {
                ExcluirProduto(idProduto);
                alert("O Produto foi excluido");
                loadData();
            }
            if (botao.index === botao.source.Editar) {
                var textField = Ti.UI.createTextField({
                    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
                    value: textoProduto,
                    id: idProduto,
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
                            NomeProduto: textField.value,
                            ProdutoID: idProduto
                        });
                        alert("Alterado com Sucesso");
                        loadData();
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
    $.__views.__alloyId14 = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "__alloyId14"
    });
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Produtos",
        top: "10dp",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createButton({
        title: "Adicionar Produto",
        top: "5dp",
        right: "5dp",
        left: "5dp",
        width: Ti.UI.FILL,
        height: "40dp",
        id: "__alloyId16"
    });
    $.__views.__alloyId14.add($.__views.__alloyId16);
    clickNovoProduto ? $.__views.__alloyId16.addEventListener("click", clickNovoProduto) : __defers["$.__views.__alloyId16!click!clickNovoProduto"] = true;
    $.__views.table = Ti.UI.createTableView({
        color: "#000",
        id: "table"
    });
    $.__views.__alloyId14.add($.__views.table);
    $.__views.prodTab = Ti.UI.createTab({
        window: $.__views.__alloyId14,
        title: "Prod.",
        id: "prodTab"
    });
    $.__views.prodTab && $.addTopLevelView($.__views.prodTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var db = require("database");
    db.createDatabase();
    loadData();
    EditarProdutos();
    __defers["$.__views.__alloyId16!click!clickNovoProduto"] && $.__views.__alloyId16.addEventListener("click", clickNovoProduto);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;