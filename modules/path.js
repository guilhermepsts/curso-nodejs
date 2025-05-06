const path = require('path');

// Apenas o nome do arquivo
console.log(path.basename(__filename));

// Nome do diretorio atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Criar um objeto path com informações do arquivo
console.log(path.parse(__filename));

// Juntar caminhos
console.log(path.join(__dirname, 'test', 'index.html'));

