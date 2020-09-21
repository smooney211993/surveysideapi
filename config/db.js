const keys = require('./keys');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('mongoose db connect');
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

module.exports = connectDB;
