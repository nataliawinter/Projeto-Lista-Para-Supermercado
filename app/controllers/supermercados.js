var db = require('database');

db.createDatabase();

function SalvarSupermercado() {

	if ($.txtSupermercado.value != "" && $.txtSupermercado.value != null) {

		db.adicionarSupermercado({
			NomeSupermercado : $.txtSupermercado.value
		});

		loadData();

	} else {
		alert("Por favor, escreva um supermercado!");
	}
}

function loadData() {
	var supermercado = db.listarSupermercados();
	$.table.setData(supermercado);
}

function EditarSupermercados() {
	$.table.addEventListener('click', selectRow);
}

function ExcluirSupermercado(supermercado) {
	db.excluirSupermercados({
		SupermercadoID : supermercado
	});
}

function selectRow(e) {

	var dialog = Ti.UI.createAlertDialog({
		buttonNames : ['Editar', 'Deletar'],
		title : 'Escolha uma alternativa',
		Editar : 0,
		Deletar : 1
	});

	var idSupermercado = e.rowData.id;
	var textoSupermercado = e.rowData.title;

	dialog.addEventListener('click', function(botao) {

		if (botao.index === botao.source.Deletar) {
			ExcluirSupermercado(idSupermercado);
			alert('o botao de deletar foi clicado');
		}

		if (botao.index === botao.source.Editar) {

			var textField = Ti.UI.createTextField({
				borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
				value : textoSupermercado,
				id : idSupermercado,
				top : 5,
				left : 5,
				width : Ti.UI.FILL,
				height : 40
			});

			var dialogEditar = Ti.UI.createAlertDialog({
				androidView : textField,
				buttonNames : ['confirm', 'cancel'],
				title : 'Editar Supermercado',
				confirm : 0,
				cancel : 1
			});

			dialogEditar.addEventListener('click', function(botaoEditar) {

				if (botaoEditar.index === botaoEditar.source.confirm) {
					db.editarSupermercados({
						NomeSupermercado : textField.value,
						SupermercadoID : idSupermercado
					});

					alert('Alterado com Sucesso');
				}
			});
			dialogEditar.show();
		}
	});
	dialog.show();
}

function combobox(){
	
}

EditarSupermercados();
loadData();


