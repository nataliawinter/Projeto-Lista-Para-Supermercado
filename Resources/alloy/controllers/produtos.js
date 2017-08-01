function Controller() {
    function vaiParaListagem() {
        var produtosController = Alloy.createController("listagem-produtos");
        produtosController.getView().open();
    }
    function SalvarProduto() {
        if ("" != $.txtNome.value && null != $.txtNome.value) {
            db.adicionarProduto({
                NomeProduto: $.txtNome.value,
                MarcaID: $.txtMarcaDoProduto.value,
                DepartamentoID: $.txtDepartamentoDoProduto.value
            });
            vaiParaListagem();
        } else alert("Por favor, escreva um nome ao produto!");
    }
    function EscolherDepartamento() {
        function clickDepartamento(d) {
            var idDepartamento = d.rowData.id;
            var textoDepartamento = d.rowData.title;
            $.txtButtonDepartamento.setTitle(textoDepartamento);
            $.txtDepartamentoDoProduto.setValue(idDepartamento);
            dialog.hide();
        }
        db.listarDepartamentos;
        var aTableView = Ti.UI.createTableView();
        var departamento = db.listarDepartamentos();
        aTableView.setData(departamento);
        aTableView.addEventListener("click", clickDepartamento);
        var dialog = Ti.UI.createAlertDialog({
            androidView: aTableView,
            title: "Departamentos"
        });
        dialog.show();
    }
    function EscolherMarca() {
        function clickMarca(m) {
            var idMarca = m.rowData.id;
            var textoMarca = m.rowData.title;
            $.txtButtonMarca.setTitle(textoMarca);
            $.txtMarcaDoProduto.setValue(idMarca);
            dialog.hide();
        }
        db.listarMarcas;
        var aTableView = Ti.UI.createTableView();
        var marca = db.listarMarcas();
        aTableView.setData(marca);
        aTableView.addEventListener("click", clickMarca);
        var dialog = Ti.UI.createAlertDialog({
            androidView: aTableView,
            title: "Marca"
        });
        dialog.show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.produtos = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "produtos"
    });
    $.__views.produtos && $.addTopLevelView($.__views.produtos);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Produtos",
        top: "10dp",
        id: "__alloyId20"
    });
    $.__views.produtos.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Nome do Produto",
        top: "15dp",
        left: "5dp",
        id: "__alloyId21"
    });
    $.__views.produtos.add($.__views.__alloyId21);
    $.__views.txtNome = Ti.UI.createTextField({
        id: "txtNome",
        top: "10dp",
        left: "5dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        width: Ti.UI.FILL,
        right: "5dp",
        height: "40dp"
    });
    $.__views.produtos.add($.__views.txtNome);
    $.__views.txtButtonMarca = Ti.UI.createButton({
        id: "txtButtonMarca",
        top: "5dp",
        right: "5dp",
        left: "5dp",
        width: Ti.UI.FILL,
        height: "40dp",
        title: "Clique e Escolha uma Marca"
    });
    $.__views.produtos.add($.__views.txtButtonMarca);
    EscolherMarca ? $.__views.txtButtonMarca.addEventListener("click", EscolherMarca) : __defers["$.__views.txtButtonMarca!click!EscolherMarca"] = true;
    $.__views.txtButtonDepartamento = Ti.UI.createButton({
        id: "txtButtonDepartamento",
        top: "5dp",
        right: "5dp",
        left: "5dp",
        width: Ti.UI.FILL,
        height: "40dp",
        title: "Clique e Escolha um Departamento"
    });
    $.__views.produtos.add($.__views.txtButtonDepartamento);
    EscolherDepartamento ? $.__views.txtButtonDepartamento.addEventListener("click", EscolherDepartamento) : __defers["$.__views.txtButtonDepartamento!click!EscolherDepartamento"] = true;
    $.__views.__alloyId22 = Ti.UI.createButton({
        title: "Salvar produto",
        top: "15dp",
        right: "5dp",
        left: "5dp",
        width: Ti.UI.FILL,
        height: "40dp",
        id: "__alloyId22"
    });
    $.__views.produtos.add($.__views.__alloyId22);
    SalvarProduto ? $.__views.__alloyId22.addEventListener("click", SalvarProduto) : __defers["$.__views.__alloyId22!click!SalvarProduto"] = true;
    $.__views.__alloyId23 = Ti.UI.createButton({
        title: "voltar",
        top: "15dp",
        right: "5dp",
        left: "5dp",
        width: Ti.UI.FILL,
        height: "40dp",
        id: "__alloyId23"
    });
    $.__views.produtos.add($.__views.__alloyId23);
    vaiParaListagem ? $.__views.__alloyId23.addEventListener("click", vaiParaListagem) : __defers["$.__views.__alloyId23!click!vaiParaListagem"] = true;
    $.__views.txtMarcaDoProduto = Ti.UI.createTextField({
        visible: "false",
        id: "txtMarcaDoProduto",
        top: "10dp",
        left: "5dp",
        value: "2",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        width: Ti.UI.FILL,
        right: "5dp",
        height: "10dp"
    });
    $.__views.produtos.add($.__views.txtMarcaDoProduto);
    $.__views.txtDepartamentoDoProduto = Ti.UI.createTextField({
        visible: "false",
        id: "txtDepartamentoDoProduto",
        top: "10dp",
        left: "5dp",
        value: "2",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        width: Ti.UI.FILL,
        right: "5dp",
        height: "10dp"
    });
    $.__views.produtos.add($.__views.txtDepartamentoDoProduto);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var db = require("database");
    db.createDatabase();
    __defers["$.__views.txtButtonMarca!click!EscolherMarca"] && $.__views.txtButtonMarca.addEventListener("click", EscolherMarca);
    __defers["$.__views.txtButtonDepartamento!click!EscolherDepartamento"] && $.__views.txtButtonDepartamento.addEventListener("click", EscolherDepartamento);
    __defers["$.__views.__alloyId22!click!SalvarProduto"] && $.__views.__alloyId22.addEventListener("click", SalvarProduto);
    __defers["$.__views.__alloyId23!click!vaiParaListagem"] && $.__views.__alloyId23.addEventListener("click", vaiParaListagem);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;