const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

db.once("connected", () => {
  console.log(`Connected to MongoDB on ${db.host}: ${db.port}`);
});
