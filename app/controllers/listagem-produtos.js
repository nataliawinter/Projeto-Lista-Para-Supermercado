var db = require('database');

db.createDatabase();

function loadData() {
	var produto = db.listarprodutos();
	$.table.setData(produto);
}

function clickNovoProduto(e) {
	var produtosController = Alloy.createController('produtos');
	produtosController.getView().open();
}

function EditarProdutos() {
	$.table.addEventListener('click', selectRow);
}

function ExcluirProduto(produto) {
	db.excluirProdutos({
		ProdutoID : produto
	});
}

function selectRow(e) {

	var dialog = Ti.UI.createAlertDialog({
		buttonNames : ['Editar', 'Deletar'],
		title : 'Escolha uma alternativa',
		Editar : 0,
		Deletar : 1
	});

	var idProduto = e.rowData.id;
	var textoProduto = e.rowData.title;

	dialog.addEventListener('click', function(botao) {

		if (botao.index === botao.source.Deletar) {
			ExcluirProduto(idProduto);
			alert('O Produto foi excluido');

			loadData();
		}

		if (botao.index === botao.source.Editar) {

			var textField = Ti.UI.createTextField({
				borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
				value : textoProduto,
				id : idProduto,
				top : 5,
				left : 5,
				width : Ti.UI.FILL,
				height : 40
			});

			var dialogEditar = Ti.UI.createAlertDialog({
				androidView : textField,
				buttonNames : ['confirm', 'cancel'],
				title : 'Editar Marca',
				confirm : 0,
				cancel : 1
			});

			dialogEditar.addEventListener('click', function(botaoEditar) {

				if (botaoEditar.index === botaoEditar.source.confirm) {
					db.editarDepartamentos({
						NomeProduto : textField.value,
						ProdutoID : idProduto
					});

					alert('Alterado com Sucesso');
					loadData();
				}
			});
			dialogEditar.show();
		}
	});
	dialog.show();
}

loadData();
EditarProdutos();

