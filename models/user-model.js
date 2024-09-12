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

userSchema.statics.criptografaSenha = async function (senha) {
    try {
        const saltRounds = 10; // Adjust as needed
        const hashedPassword = await bcrypt.hash(senha, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
};


userSchema.statics.findByEmail = async function (email) {
    try {
        const user = await this.findOne({ email });
        return user;
    } catch (error) {
        throw error;
    }
};


userSchema.statics.findByIdAndValidateToken = async function (id, token) {
    try {
        const user = await this.findById(id);
        if (!user) {
            throw new Error('User not found');
        }

        if (user.last_token !== token) {
            throw new Error('Invalid token');
        }
        return user;
    } catch (error) {
        throw error;
    }
};



// criando collection 
const users = mongoose.model('users', userSchema);

module.exports = users;