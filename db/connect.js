const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const connectDB = (url) => {
    return mongoose
    .connect(url)
    .then(() => console.log("データベースと接続中"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;