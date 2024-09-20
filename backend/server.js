const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//mongodb atlas se content lene wala kaam subeh mei add karna hai
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//here we will use th routes from the quizRoutes
const quizRoutes = require("../backend/routes/quizRoutes");
app.use("/api/quizzes", quizRoutes);

const favoriteRoutes = require("../backend/routes/favoriteRoutes");
app.use("/api/favoritess", favoriteRoutes);

const checkedDaysRouter = require('../backend/routes/days');
app.use(checkedDaysRouter);

//simlarly do for home
app.get("/", (req, res) => {
  res.send("DesignPattern App Api");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
