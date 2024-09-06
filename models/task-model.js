const mongoose = require("mongoose");

//Definindo o model
const taskSchema = mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },   
    descricao: {
        type: String,
        require: true
    },
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        require: true
    },
    data_criacao: {
        type: Date,
        default: Date.now
    },
    data_finalizacao: {
        type: Date,
        require: true
    },
    status: {
        type: String,
        require: true,
        enum: ['Doing', 'Done', 'Blocked', 'Canceled', 'To Do'],
        default: 'To Do'
    }
});

// criando collection 
const task = mongoose.model('tasks', taskSchema);

module.exports = task;