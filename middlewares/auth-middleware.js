const jwt = require('jsonwebtoken');
const SECRET_KEY = 'sua_chave_secreta'; // **IMPORTANTE:** Substitua por uma chave forte e secreta!
const userController = require('./../controllers/user-controller'); 
const express = require('express');
const axios = require('axios');

const authMiddleware = async (req, res, next) => {
  // 1. Obter o token do header da requisição
  const token = req.header('Authorization');

  //console.log(token);

  // 2. Verificar se o token existe
  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  try {
    // 3. Verificar se o token é válido
    const decoded = jwt.verify(token, SECRET_KEY);

    console.log(decoded);
    // 4. Adicionar os dados do usuário decodificados ao objeto de requisição
    req.user = decoded;

    // 5. Chamar a próxima função de middleware ou rota
    next();
  } catch (error) {
    // Token inválido
    res.status(403).json({ message: 'Acesso negado. Token inválido.' });
  }
};

module.exports = authMiddleware;