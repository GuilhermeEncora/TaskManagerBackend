const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); // Install bcrypt first: npm install bcrypt

//Definindo o model
const userSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },   
    email: {
        type: String,
        require: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    },
    senha: {
        type: String,
        require: true
    },
    data_criacao: {
        type: Date,
        default: Date.now
    },
    last_token: {
        type: String,
        require: true
    }
});

// Hashing password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('senha')) {
        const saltRounds = 10; // Adjust as needed
        this.senha = await bcrypt.hash(this.senha, saltRounds);
    }
    next();
});

// criando collection 
const users = mongoose.model('users', userSchema);

module.exports = users;