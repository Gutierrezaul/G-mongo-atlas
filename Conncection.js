const mongoose = require("mongoose");

const URI = "mongodb+srv://m220student:utd2021@mflix.bh3m2.mongodb.net/test?authSource=admin&replicaSet=mflix-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log();
};

module.exports = connectDB;
