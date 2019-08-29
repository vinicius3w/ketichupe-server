//Importar o mongoose
const mongoose = require('mongoose');
//Mais informaç?es em 'Deprecation Warnings'
//URL: https://mongoosejs.com/docs/deprecations.html#-findandmodify-
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//Indicar a URL de conex?o com o banco de dados e como vai se dar a conex?o
mongoose.connect('mongodb://localhost/nodexpressdb', { useNewUrlParser: true });

//Precisamos indicar qual a classe de promise o mongoose vai usar
mongoose.Promise = global.Promise;

module.exports = mongoose;
