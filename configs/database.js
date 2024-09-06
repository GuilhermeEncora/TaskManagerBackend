const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const mongoDb = async () => {
    try {
      const conn = await mongoose.connect("mongodb://root:cdSynthesis@localhost:27017/task-manager?authSource=admin");
      console.log(`Conectado ao mongoDb: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Nao foi possivel se conectar ao mongoDB: ${error}`);
      process.exit(1); // Exit process with failure
    }
  };

module.exports = mongoDb;