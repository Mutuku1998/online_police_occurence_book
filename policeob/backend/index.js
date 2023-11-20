const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require('./routes/user')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const PORT = 3001;

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://martinmutuku1998:sb30pu40170@cluster0.khrkwlr.mongodb.net/policeobsystem",

    );
    console.log("database connected successfully");
  } catch (err) {
    console.log("failed to connect database");
  }
};
const corsOptions = {
  origin: true,
};
// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users",userRoute )

app.listen(PORT, () => {
  dbConnect();
  console.log("The server is running on port" + PORT);
});
