var db = require('database');

db.createDatabase();

function vaiParaListagem() {
	var produtosController = Alloy.createController('listagem-produtos');
	produtosController.getView().open();
}

function SalvarProduto() {

	if ($.txtNome.value != "" && $.txtNome.value != null) {

		db.adicionarProduto({
			NomeProduto : $.txtNome.value,
			// UltimoVlrPago : $.txtUltimoValorPago.value,
			MarcaID : $.txtMarcaDoProduto.value,
			DepartamentoID : $.txtDepartamentoDoProduto.value
		});
		vaiParaListagem();

	} else {
		alert("Por favor, escreva um nome ao produto!");
	}
}

//
// function loadData() {
// var produto = db.listarprodutos();
// $.table.setData(produto);
// }

// function EditarProduto() {
// $.table.addEventListener('click', selectRow);
// }

// function selectRow(e){
//
// var idProduto = e.rowData.id;
// var textoProduto = e.rowData.title;
// var dep = e.rowData.departamentoID;
// var marca = e.rowData.marcaID;
// var valorPago = e.rowData.valorPago;
//
// }

function EscolherDepartamento() {

	var tableData = db.listarDepartamentos;

	// instanciando uma tableview
	var aTableView = Ti.UI.createTableView();

	// pegando todas as marcas adicionadas
	var departamento = db.listarDepartamentos();

	//adicionando as marcas a tableview
	aTableView.setData(departamento);
	aTableView.addEventListener('click', clickDepartamento);

	// adicionando a tableview
	var dialog = Ti.UI.createAlertDialog({
		androidView : aTableView,
		title : 'Departamentos'
	});

	dialog.show();

	function clickDepartamento(d) {

		var idDepartamento = d.rowData.id;
		var textoDepartamento = d.rowData.title;

		$.txtButtonDepartamento.setTitle(textoDepartamento);
		$.txtDepartamentoDoProduto.setValue(idDepartamento);
		dialog.hide();
	}

}

function EscolherMarca() {

	var tableData = db.listarMarcas;

	// instanciando uma tableview
	var aTableView = Ti.UI.createTableView();

	// pegando todas as marcas adicionadas
	var marca = db.listarMarcas();

	//adicionando as marcas a tableview
	aTableView.setData(marca);
	aTableView.addEventListener('click', clickMarca);

	// adicionando a tableview a uma DIALOG
	var dialog = Ti.UI.createAlertDialog({
		androidView : aTableView,
		title : 'Marca'
	});

	dialog.show();

	function clickMarca(m) {
		var idMarca = m.rowData.id;
		var textoMarca = m.rowData.title;

		// var registros = textoMarca;
		$.txtButtonMarca.setTitle(textoMarca);
		$.txtMarcaDoProduto.setValue(idMarca);

		dialog.hide();
	}

}

