//Importando o express e o body-parser usando constante e require do ES6
const express = require('express');
const bodyParser = require('body-parser');

//Criando a aplicação
const app = express();

/** Indicar para a minha aplicação que vou usar o body-parser
 * A primeira função é informar que vou utilizar a função json para entender as 
 * informações que vão chegar em formato JSON.
 * A segunda é para ela entender quando eu passar parâmetros na URL.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Referenciando o nosso controlador de autenticação
require('./controllers/SessionController')(app);

//Uma rota simples na raiz
app.get('/', (req, res) => {
  res.send('Bora BAÊA!');
});

// Vou informar qual porta a aplicação vai "escutar
app.listen(3000, () => {
  console.log('Aplicação de exemplo escutando na porta 3000!');
});
