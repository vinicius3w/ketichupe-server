//Importar o mongoose
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

//Indicar a URL de conexão com o banco de dados e como vai se dar a conexão
mongoose.connect('mongodb://localhost/easylandingdb', { useNewUrlParser: true });

//Precisamos indicar qual a classe de promise o mongoose vai usar
mongoose.Promise = global.Promise;

module.exports = mongoose;
