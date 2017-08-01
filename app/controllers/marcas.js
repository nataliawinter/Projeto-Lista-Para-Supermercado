var db = require('database');

db.createDatabase();

function SalvarMarca() {

	if ($.txtMarca.value != "" && $.txtMarca.value != null) {

		db.adicionarMarca({
			NomeMarca : $.txtMarca.value
		});

		loadData();

	} else {
		alert("Por favor, escreva uma marca!");
	}
}

function loadData() {
	var marca = db.listarMarcas();
	$.table.setData(marca);
}

function EditarMarcas() {
	$.table.addEventListener('click', selectRow);
}

function ExcluirMarca(marca) {
	db.excluirMarca({
		MarcaID : marca
	});
}

function selectRow(e) {

	var dialog = Ti.UI.createAlertDialog({
		buttonNames : ['Editar', 'Deletar'],
		title : 'Escolha uma alternativa',
		Editar : 0,
		Deletar : 1
	});

	var idMarca = e.rowData.id;
	var textoMarca = e.rowData.title;

	dialog.addEventListener('click', function(botao) {

		if (botao.index === botao.source.Deletar) {
			ExcluirMarca(idMarca);
			alert('A marca foi excluida');
		}

		if (botao.index === botao.source.Editar) {

			var textField = Ti.UI.createTextField({
				borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
				value : textoMarca,
				id : idMarca,
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
						NomeMarca : textField.value,
						MarcaID : idMarca
					});

					alert('Alterado com Sucesso');
				}
			});
			dialogEditar.show();
		}
	});
	dialog.show();
}

EditarMarcas();
loadData();

