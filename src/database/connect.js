const mongoose = require('mongoose');

const connectToDatabase = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@database.tmperzs.mongodb.net/database?retryWrites=true&w=majority&appName=CursoNode`,
		);
		console.log('Conectado ao Banco de Dados!');
	} catch (error) {
		console.error('Erro ao conectar ao MongoDB:', error);
	}
};

module.exports = connectToDatabase;
