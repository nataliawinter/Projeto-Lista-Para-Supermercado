var db = require('database');

db.createDatabase();

function SalvarDepartamento() {

	if ($.txtDepartamento.value != "" && $.txtDepartamento.value != null) {

		db.adicionarDepartamento({
			NomeDepartamento : $.txtDepartamento.value
		});

		loadData();

	} else {
		alert("Por favor, escreva um departamento!");
	}
}

function loadData() {
	var departamento = db.listarDepartamentos();
	$.table.setData(departamento);
}

function EditarDepartamentos() {
	$.table.addEventListener('click', selectRow);
}

function ExcluirDepartamento(departamento) {
	db.excluirDepartamentos({
		DepartamentoID : departamento
	});
}

function selectRow(e) {

	var dialog = Ti.UI.createAlertDialog({
		buttonNames : ['Editar', 'Deletar'],
		title : 'Escolha uma alternativa',
		Editar : 0,
		Deletar : 1
	});

	var idDepartamento = e.rowData.id;
	var textoDepartamento = e.rowData.title;
alert(idDepartamento);
	dialog.addEventListener('click', function(botao) {

		if (botao.index === botao.source.Deletar) {
			ExcluirDepartamento(idDepartamento);
			alert('o botao de deletar foi clicado');
		}

		if (botao.index === botao.source.Editar) {

			var textField = Ti.UI.createTextField({
				borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
				value : textoDepartamento,
				id : idDepartamento,
				top : 5,
				left : 5,
				width : Ti.UI.FILL,
				height : 40
			});

			var dialogEditar = Ti.UI.createAlertDialog({
				androidView : textField,
				buttonNames : ['confirm', 'cancel'],
				title : 'Editar Departamento',
				confirm : 0,
				cancel : 1
			});

			dialogEditar.addEventListener('click', function(botaoEditar) {

				if (botaoEditar.index === botaoEditar.source.confirm) {
					db.editarDepartamentos({
						NomeDepartamento : textField.value,
						DepartamentoID : idDepartamento
					});

					alert('Alterado com Sucesso');
				}
			});
			dialogEditar.show();
		}
	});
	dialog.show();
}

EditarDepartamentos();
loadData();

