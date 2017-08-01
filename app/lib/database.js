const DATABASE_NAME = "dbTeste3.db";

/* ITENS */
exports.createDatabase = function() {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('CREATE TABLE IF NOT EXISTS departamento (DepartamentoID INTEGER PRIMARY KEY AUTOINCREMENT, NomeDepartamento TEXT)');

	db.execute('CREATE TABLE IF NOT EXISTS supermercado (SupermercadoID INTEGER PRIMARY KEY AUTOINCREMENT, NomeSupermercado TEXT)');

	db.execute('CREATE TABLE IF NOT EXISTS marca (MarcaID INTEGER PRIMARY KEY AUTOINCREMENT, NomeMarca TEXT)');

	db.execute('CREATE TABLE IF NOT EXISTS lista (ListaID INTEGER PRIMARY KEY AUTOINCREMENT, DataCompra DATETIME DEFAULT CURRENT_TIMESTAMP)');

	db.execute('CREATE TABLE IF NOT EXISTS itens_lista (ListaItensID INTEGER PRIMARY KEY AUTOINCREMENT, QtdPrevista INTEGER, QtdComprada INTEGER, ValorPago INTEGER, Comprado INTEGER)');

	db.execute('CREATE TABLE IF NOT EXISTS produto (ProdutoID INTEGER PRIMARY KEY AUTOINCREMENT, NomeProduto TEXT, UltimoVlrPago INTEGER, MarcaID INTEGER, DepartamentoID INTEGER, FOREIGN KEY(MarcaID) REFERENCES marca(MarcaID), FOREIGN KEY(DepartamentoID) REFERENCES departamento(DepartamentoID))');

	db.close();

}

exports.adicionarProduto = function(produto) {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('INSERT INTO produto (NomeProduto, UltimoVlrPago, MarcaID, DepartamentoID) values (?, ?, ?, ?)', produto.NomeProduto, produto.UltimoVlrPago, produto.MarcaID, produto.DepartamentoID);
	db.close();
}

exports.listarprodutos = function() {
	var db = Ti.Database.open(DATABASE_NAME);
	var rs = db.execute('SELECT * FROM produto');
	var produtos = [];
	while (rs.isValidRow()) {
		produtos.push({
			title : rs.fieldByName('NomeProduto'),
			id : rs.fieldByName('ProdutoID'),
			departamentoID: rs.fieldByName('DepartamentoID'),
			marcaID: rs.fieldByName('MarcaID')
		});
		rs.next();
	}
	rs.close();
	db.close();
	return produtos;
}

exports.excluirProdutos = function(produto){
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('DELETE FROM produto WHERE ProdutoID=?', produto.ProdutoID);
	db.close();	
}

exports.adicionarItem = function(item) {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('INSERT INTO item (NomeItem) values (?)', item.NomeItem);
	db.close();
}
/* departamentos */
exports.adicionarDepartamento = function(departamento) {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('INSERT INTO departamento (NomeDepartamento) values (?)', departamento.NomeDepartamento);
	db.close();
}

exports.listarDepartamentos = function() {

	var db = Ti.Database.open(DATABASE_NAME);
	var rs = db.execute('SELECT * FROM departamento');
	var departamentos = [];
	while (rs.isValidRow()) {
		departamentos.push({
			title : rs.fieldByName('NomeDepartamento'),
			id : rs.fieldByName('DepartamentoID')
		});
		rs.next();
	}
	rs.close();
	db.close();

	return departamentos;
}

exports.editarDepartamentos = function(departamento) {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('UPDATE departamento SET NomeDepartamento=? where DepartamentoID=?', departamento.NomeDepartamento, departamento.DepartamentoID);
	db.close();
}

exports.excluirDepartamentos = function(departamento) {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('DELETE FROM departamento WHERE DepartamentoID=?', departamento.DepartamentoID);
	db.close();
}
/********************************* BANCO DE DADOS SUPERMERCADO ****************************/
exports.adicionarSupermercado = function(supermercado) {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('INSERT INTO supermercado (NomeSupermercado) values (?)', supermercado.NomeSupermercado);
	db.close();
}

exports.listarSupermercados = function() {
	var db = Ti.Database.open(DATABASE_NAME);
	var rs = db.execute('SELECT * FROM supermercado');
	var supermercados = [];
	while (rs.isValidRow()) {
		supermercados.push({
			title : rs.fieldByName('NomeSupermercado'),
			id : rs.fieldByName('SupermercadoID')
		});
		rs.next();
	}
	rs.close();
	db.close();

	return supermercados;
}

exports.editarSupermercados = function(supermercado) {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('UPDATE supermercado SET NomeSupermercado=? where SupermercadoID=?', supermercado.NomeSupermercado, supermercado.SupermercadoID);
	db.close();
}

exports.excluirSupermercados = function(supermercado) {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('DELETE FROM supermercado WHERE SupermercadoID=?', supermercado.SupermercadoID);
	db.close();
}
/************************************ BANCO DE DADOS MARCA ****************************/

exports.adicionarMarca = function(marca) {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('INSERT INTO marca (NomeMarca) values (?)', marca.NomeMarca);
	db.close();
}

exports.listarMarcas = function() {
	var db = Ti.Database.open(DATABASE_NAME);
	var rs = db.execute('SELECT * FROM marca');
	var marcas = [];
	while (rs.isValidRow()) {
		marcas.push({
			title : rs.fieldByName('NomeMarca'),
			id : rs.fieldByName('MarcaID')
		});
		rs.next();
	}
	rs.close();
	db.close();

	return marcas;
}

exports.editarMarcas = function(marca) {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('UPDATE marca SET NomeMarca=? where MarcaID=?', marca.NomeMarca, marca.MarcaID);
	db.close();
}

exports.excluirMarca = function(marca) {
	var db = Ti.Database.open(DATABASE_NAME);
	db.execute('DELETE FROM marca WHERE MarcaID=?', marca.MarcaID);
	db.close();
}
/*BANCO DE DADOS DE PRODUTOS*/
// exports.createDatabase = function(){
// var db = Ti.Database.open(DATABASE_NAME);
// db.execute('CREATE TABLE IF NOT EXISTS produto (ProdutoID INTEGER PRIMARY KEY AUTOINCREMENT, NomeProduto TEXT, UltimoVlrPago INTEGER, MarcaID INTEGER, DepartamentoID INTEGER, FOREIGN KEY(MarcaID) REFERENCES marca(MarcaID), FOREIGN KEY(DepartamentoID) REFERENCES departamento(DepartamentoID))');
// }

/*BANCO DE DADOS NOME DA LISTA*/

// exports.createDatabase = function() {
// var db = Ti.Database.open(DATABASE_NAME);
// db.execute('CREATE TABLE IF NOT EXISTS lista (ListaID INTEGER PRIMARY KEY AUTOINCREMENT, DataCompra DATETIME DEFAULT CURRENT_TIMESTAMP)');
// db.close();
// }
//
// exports.adicionarLista = function(departamento) {
// var db = Ti.Database.open(DATABASE_NAME);
// db.execute('INSERT INTO departamento (NomeDepartamento) values (?)', departamento.NomeDepartamento);
// db.close();
// }

/* BANCO DE DADOS ITENS DA LISTA */
// exports.createDatabase = function() {
// var db = Ti.Database.open(DATABASE_NAME);
// db.execute('CREATE TABLE IF NOT EXISTS itens_lista (ListaItensID INTEGER PRIMARY KEY AUTOINCREMENT, QtdPrevista INTEGER(100), QtdComprada INTEGER(100), ValorPago INTEGER(100), Comprado TINYINT(1))');
// db.close();
// }

/* BANCO DE DADOS PRODUTOS */

// exports.createDatabase = function(){
// var db = Ti.Database.open(DATABASE_NAME);
// db.execute('CREATE TABLE IF NOT EXISTS produto (ProdutoID INTEGER PRIMARY KEY AUTOINCREMENT, INTEGER(100), QtdComprada INTEGER(100), ValorPago INTEGER(100), Comprado TINYINT(1))');
// db.close();
//
// }

