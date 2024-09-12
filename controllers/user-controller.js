const User = require('../models/user-model'); // Assuming you have a user model
const bcrypt = require('bcrypt');
const auth = require('../auth/auth');

// Create a new user
exports.createUser = async (req, res) => {
    try {
      console.log("Dados recebidos no req.body:", req.body);
  
      const verifyUserData = await User.findByEmail(req.body.email);

      if(!verifyUserData) {
        const newUser = await User.create(req.body);
  
        // Resposta de sucesso
        res.status(201).json({
          status: 'success',
          data: {
            user: newUser,
          },
        });
      } else {
        res.status(400).json({
          status: 'fail',
          message: 'Email already exists',
        });
      }
      // Cria o novo usuário com base nos dados da requisição

    } catch (err) {
      // Verifica se o erro é de validação do Mongoose
      if (err.name === 'ValidationError') {
        return res.status(400).json({
          status: 'fail',
          message: err.message,
          errors: err.errors,  // Inclui detalhes sobre os campos que falharam na validação
        });
      }
  
      // Captura outros erros
      console.log("Erro:", err.message);
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  };
  

// Get a single user
exports.getUser = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const password = req.body.senha;

    if(!userEmail || !password) {
      return res.status(400).json({
        status: 'fail',
        message: 'Email is required',
      });
    }

    const user = await User.findByEmail(userEmail);

    if (!user) {
      return res.status(401).json({
        status: 'fail',
        message: 'No user found with that Email',
      });
    }

    if(bcrypt.compare(req.body.senha, user.senha) === false) ///TODO verify function.
    {
      return res.status(401).json({
        status: 'fail',
        message: 'Invalid password',
      });
    }

    const token = auth.generateToken(user);
    user.last_token = token;
    await user.save();

    res.status(200).json({
      status: 'success',
      data: {
        token: token,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};


// Update a user
exports.updateUser = async (req, res) => {
  try {
    const token = await User.findByIdAndValidateToken(req.user.id, req.header('Authorization'));
    if (token.last_token != "invalid") {
      console.log("Body:", req.user)
      const json = { "last_token": "invalid" };
      const user = await User.findByIdAndUpdate(req.user.id, json, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return res.status(404).json({
          status: 'fail',
          message: 'No user found with that ID',
        });
      }
      res.status(200).json({
        status: 'success',
        data: {
          user,
        },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'No user found with that ID',
      });
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};