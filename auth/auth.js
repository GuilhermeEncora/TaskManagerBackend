const jwt = require('jsonwebtoken');
const SECRET_KEY = 'sua_chave_secreta'; // **IMPORTANTE:** Substitua por uma chave forte e secreta!

function generateToken(user) {
  const payload = {
    id: user._id, // Adapte para o ID do seu usuário
    // Outros dados do usuário que você quer no token
  };
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Personalize o tempo de expiração
}

function verifyToken(req, res, next) {
  const token = req.header('Authorization'); // Lê o token do header da requisição

  if (!token) return res.status(401).json({ message: 'Acesso negado' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Torna os dados do usuário disponíveis na requisição
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token inválido' });
  }
}

module.exports = { generateToken, verifyToken };