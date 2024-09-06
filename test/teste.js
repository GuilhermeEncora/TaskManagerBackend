const mongoose = require('mongoose');

// Conectar ao MongoDB
mongoose.connect('mongodb://root:cdSynthesis@localhost:27017/task-manager?authSource=admin', {
  // Remover opções obsoletas
});

// Definir um esquema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
}, { collection: 'User' });

// Criar um modelo
const User = mongoose.model('User', userSchema);

// Função principal
async function main() {
  try {
    // Criar um novo usuário
    const newUser = await User.create({
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin123',
    });

    console.log('Novo usuário criado:', newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  } finally {
    // Fechar a conexão
    mongoose.connection.close();
  }
}

main();
