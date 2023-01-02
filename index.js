const app = require("./app");
const mongoose = require("mongoose");
const port = 5000;

mongoose
  .connect("mongodb://127.0.0.1:27017/ligi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected successfully"))
  .catch((err) => console.log("db error -->", err));



app.listen(port, () => {
  console.log("app started to run ", port);
});


