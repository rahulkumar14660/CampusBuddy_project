// Connecting to DB and Starting the server in server.js

const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
  
  .then(() => {
    console.log("DB Connected");

    app.listen(PORT, () => {
      console.log("App started");
    });
  })

  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
